const express = require('express');
const app = express();
const parser = require('body-parser');
const multer = require('multer');
const usersRoute = require('./app/routes/user');
const communityRoute = require('./app/routes/community')
const documentRoute = require('./app/routes/document')
const chatRoute = require('./app/routes/chat')
const auth = require('./app/middleware/authenticate')
const Users = require('./app/services/Users')
const Documents = require('./app/services/Documents')
const Community = require('./app/services/Community')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv');
dotenv.config();

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT,
    user : process.env.DATABASE_USER_NAME,
    password : process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : '',
    database : process.env.DATABASE_NAME
  }
});

const userAvatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/userAvatars')
  },
  filename: function (req, file, cb) {
    const fileName = req.body.userId + '-' + Math.round(Math.random() * 1E5) + path.extname(file.originalname)
    req.fileName = fileName
    cb(null, fileName)
  }
})

const userAvatarUpload = multer({ storage: userAvatarStorage })

const companyLogosStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/companyLogos')
  },
  filename: function (req, file, cb) {
    const fileName = req.body.companyId + '-' + Math.round(Math.random() * 1E5) + path.extname(file.originalname)
    req.fileName = fileName
    cb(null, fileName)
  }
})

const companyLogoUpload = multer({ storage: companyLogosStorage })

const documentStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const community = new Community(knex)
    community.getCommunityAlias(req.query.communityId)
    .then((alias) => {
      req.filePath = path.resolve(`/community-ai-backend/documents/${alias}`)
      cb(null, `./documents/${alias}`)
    })
  },
  filename: function (req, file, cb) {
    const documents = new Documents(knex)
    documents.createFile(file.originalname, req.query.parentId, req.query.communityId)
    .then((fileId) => {
      const fileName = fileId + path.extname(file.originalname)
      req.fileName = fileId
      req.fileFullName = fileName
      cb(null, fileName)
    })
  }
})

const documentUpload = multer({ storage: documentStorage })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use('/user-avatars', express.static('uploads/userAvatars'));
app.use('/company-logos', express.static('uploads/companyLogos'));

app.use(usersRoute());
app.use(communityRoute());
app.use(documentRoute());
app.use(chatRoute());

app.post('/user-profile', auth.verifyToken, userAvatarUpload.single('image'), function (request, response) {
  const user = new Users(knex)

  if(request.file) {
      user.getUserMetaValue(request.body.userId, 'profilePic')
      .then((oldImageName) => {
        if(oldImageName && oldImageName != 'default.png') {
          const filePath = `./uploads/userAvatars/${oldImageName}`; 
          fs.unlinkSync(filePath)
        }
      })

      user.updateUser(
        request.body.userId,
        request.body.firstname,
        request.body.lastname,
        request.body.mobileNumber,
        request.fileName ? request.fileName : 'default.png'
      )
      .then((res) => {
          if(res == 1) {
            user.getUserDetailsById(request.body.userId)
              .then((data) => {
                  let userData = data

                  return response.status(200)
                      .send({success: true, message: 'User profile updated successfully', userData});
              })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
      })
  } else {
      user.updateUser(
          request.body.userId,
          request.body.firstname,
          request.body.lastname,
          request.body.mobileNumber,
          ''
      )
      .then((res) => {
          if(res == 1) {
            user.getUserDetailsById(request.body.userId)
            .then((data) => {
                let userData = data

                return response.status(200)
                    .send({success: true, message: 'User profile updated successfully', userData});
            })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
      })
  }
})


app.post('/admin-user-update', auth.verifyToken, auth.adminAccess, userAvatarUpload.single('image'), function (request, response) {
  const user = new Users(knex)

  if(request.file) {
      user.getUserMetaValue(request.body.userId, 'profilePic')
      .then((oldImageName) => {
        if(oldImageName && oldImageName != 'default.png') {
          const filePath = `./uploads/userAvatars/${oldImageName}`; 
          fs.unlinkSync(filePath)
        }
      })

      user.adminUserUpdate(
          request.body.userId,
          request.body.firstname,
          request.body.lastname,
          request.body.email,
          request.body.mobileNumber,
          request.fileName ? request.fileName : 'default.png'
      )
      .then((res) => {
          if(res == 1) {
            user.adminRoleUpdateForUser(
              request.body.userId,
              request.body.companyId,
              request.body.role
            )
            .then((res) => {
              if(res == 1) {
                user.getUserDetailsById(request.body.userId)
                .then((data) => {
                    let userData = data
                    userData = {...userData, role: request.body.role}

                    return response.status(200)
                        .send({success: true, message: 'User profile updated successfully', userData});
                })
                .catch((err) => {
                  console.log(err)
                  return response.status(200)
                        .send({success: true, message: 'User profile updated successfully, but failed to fetch the updated data, please reload the page', userData});
                })
              } else {
                return response.status(200)
                  .send({success: false, message: 'User profile updated successfully, but failed to update the role', userData});
              }
            })
            .catch((err) => {
              console.log(err)
              return response.status(200)
                  .send({success: false, message: 'User profile updated successfully, but failed to update the role', userData});
            })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
      })
  } else {
      user.adminUserUpdate(
          request.body.userId,
          request.body.firstname,
          request.body.lastname,
          request.body.email,
          request.body.mobileNumber,
          ''
      )
      .then((res) => {
          if(res == 1) {
            user.adminRoleUpdateForUser(
              request.body.userId,
              request.body.companyId,
              request.body.role
            )
            .then((res) => {
              if(res == 1) {
                user.getUserDetailsById(request.body.userId)
                .then((data) => {
                    let userData = data
                    userData = {...userData, role: request.body.role}

                    return response.status(200)
                        .send({success: true, message: 'User profile updated successfully', userData});
                })
                .catch((err) => {
                  console.log(err)
                  return response.status(200)
                        .send({success: true, message: 'User profile updated successfully, but failed to fetch the updated data, please reload the page', userData});
                })
              } else {
                return response.status(200)
                  .send({success: false, message: 'User profile updated successfully, but failed to update the role', userData});
              }
            })
            .catch((err) => {
              console.log(err)
              return response.status(200)
                  .send({success: false, message: 'User profile updated successfully, but failed to update the role', userData});
            })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update user profile'});
      })
  }
})

app.post('/company-profile', auth.verifyToken, auth.adminAccess, companyLogoUpload.single('image'), function (request, response) {
  const user = new Users(knex)

  if(request.file) {
      user.getCompanyMetaValue(request.body.companyId, 'companyLogo')
      .then((oldImageName) => {
        if(oldImageName && oldImageName != 'default.png') {
          const filePath = `./uploads/companyLogos/${oldImageName}`; 
          fs.unlinkSync(filePath)
        }
      })

      user.updateCompany(
        request.body.companyId,
        request.body.phoneNumber,
        request.body.companyName,
        request.body.orgType,
        request.body.mailingAddStreetName,
        request.body.mailingAddCityName,
        request.body.mailingAddStateName,
        request.body.mailingAddZip,
        request.body.billingAddStreetName,
        request.body.billingAddCityName,
        request.body.billingAddStateName,
        request.body.billingAddZip,
        request.body.isMailAndBillAddressSame,
        request.fileName ? request.fileName : 'default.png'
      )
      .then((res) => {
          if(res == 1) {
            user.getCompanyDetails(request.body.companyId)
              .then((data) => {
                  let companyData = data

                  return response.status(200)
                      .send({success: true, message: 'Company profile updated successfully', companyData});
              })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update company profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update company profile'});
      })
  } else {
      user.updateCompany(
          request.body.companyId,
          request.body.phoneNumber,
          request.body.companyName,
          request.body.orgType,
          request.body.mailingAddStreetName,
          request.body.mailingAddCityName,
          request.body.mailingAddStateName,
          request.body.mailingAddZip,
          request.body.billingAddStreetName,
          request.body.billingAddCityName,
          request.body.billingAddStateName,
          request.body.billingAddZip,
          request.body.isMailAndBillAddressSame,
          ''
      )
      .then((res) => {
          if(res == 1) {
            user.getCompanyDetails(request.body.companyId)
            .then((data) => {
                let companyData = data

                return response.status(200)
                    .send({success: true, message: 'Company profile updated successfully', companyData});
            })
          } else {
              return response.status(200)
                      .send({success: false, message: 'Failed to update company profile'});
          }
      })
      .catch((err) => {
          console.log(err)
          return response.status(200)
                      .send({success: false, message: 'Failed to update company profile'});
      })
  }
})

app.post('/upload-document', documentUpload.single('file'), async function (request, response) {
  const documents = new Documents(knex)
  const community = new Community(knex)

  if(request.file) {
    let docs = []
    if(request.file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      docs = await documents.createDocumentFromDocx(path.join(request.filePath, request.fileFullName))
    } else if(request.file.mimetype == "application/pdf") {
      docs = await documents.createDocumentFromPDF(path.join(request.filePath, request.fileFullName))
    } else if(request.file.mimetype == "text/plain") {
      docs = await documents.createDocumentFromText(path.join(request.filePath, request.fileFullName))
    } else if(request.file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      let isCsvFileCreated = await documents.createTempCSVFileForXLSXFile(request.filePath, request.fileName)
      if(isCsvFileCreated == 1) {
        docs = await documents.createDocumentFromCSV(path.join(path.resolve('/community-ai-backend/tempCsv', `${request.fileName[0]}.csv`)))
      }
    }

    if(docs.length > 0) {
      community.getCommunityAlias(request.query.communityId)
      .then((alias) => {
        documents.createAndStoreEmbeddingsOnIndex(docs, alias)
        .then((res) => {
          documents.checkIfFileExists(request.fileName[0])
          .then((res) => {
            if(res == 1) {
              if(fs.existsSync(request.filePath + '/' + request.fileFullName)){
                if(request.file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                  documents.removeTempCSVFile(request.fileName[0])
                }
                return response.status(201)
                    .send({ success: true, message: "File uploaded successfully" });
              } else {
                return response.status(201)
                    .send({ success: false, message: "Database success, upload failed" });
              }
            } else {
              return response.status(201)
                    .send({ success: false, message: "Database failed" });
            }
          })
          .catch((err) => {
            console.log(err)
            return response.status(201)
              .send({ success: false, message: "Failed to upload file" });
          })
        })
        .catch((err) => {
          
        })
      })
      .catch((err) => {

      })
    }
  }
})

app.listen(5050, () => {
  console.log('app is listening on port 5050');
});