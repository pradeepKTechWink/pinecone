"use strict";(self.webpackChunkcommunity_ai=self.webpackChunkcommunity_ai||[]).push([[763],{7394:function(e,t,s){s.d(t,{c:function(){return a}});var n=s(184),a=function(e){var t=e.totalNoOfRecords,s=e.selectedPage,a=e.limit,i=e.entityName;return(0,n.jsx)("div",{className:"row user-numb",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("span",{className:"fs-6",children:(s-1)*a+1}),(0,n.jsx)("span",{className:"fs-6",children:"-"}),(0,n.jsx)("span",{className:"fs-6",children:s*a>=t?t:s*a}),(0,n.jsx)("span",{className:"fs-6 ms-2",children:"of"}),(0,n.jsx)("span",{className:"fs-6 ms-2",children:t}),(0,n.jsx)("span",{className:"fs-6 ms-1",children:i})]})})}},7959:function(e,t,s){s.d(t,{t:function(){return a}});var n=s(184),a=function(e){var t=e.totalNumberOfPages,s=e.setSelectedPage,a=e.fetchNextData,i=e.selectedPage,l=e.currentPage;e.setCurrentPage;return(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"d-flex",children:[l>1&&(0,n.jsx)("button",{style:{border:"#0000",background:"#009ef7",borderRadius:"5px",color:"#fff",height:"30px",fontSize:"15px"},onClick:function(){return a(i-1)},disabled:1==i,children:"Prev"}),(0,n.jsxs)("div",{className:"d-flex my-auto",children:[(0,n.jsx)("div",{className:"ms-4 d-flex flex-column",children:(0,n.jsx)("input",{type:"text",style:{width:"40px",height:"28px",borderColor:"#0000",textAlign:"center"},value:i,onChange:function(e){return function(e){s(e.target.value)}(e)},disabled:t<=1})}),(0,n.jsx)("span",{style:{marginTop:"5px"},className:"ms-2 me-3",children:"Of"}),(0,n.jsx)("span",{style:{marginTop:"5px"},className:"ms-1 me-4",children:t})]}),l<t&&(0,n.jsx)("button",{style:{border:"#0000",background:"#009ef7",borderRadius:"5px",color:"#fff",height:"30px",fontSize:"15px"},onClick:function(){return a(parseInt(i)+1)},disabled:i==t,children:"Next"}),t>1&&(0,n.jsx)("button",{className:"ms-4",style:{border:"#0000",background:"#009ef7",borderRadius:"5px",color:"#fff",height:"30px",fontSize:"15px"},onClick:function(){return a(i)},children:"Go to"})]})})}},9763:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n=s(885),a=s(2791),i=s(2270),l=s(184),r=function(e){return(0,l.jsx)("div",{className:"card-title",children:(0,l.jsx)("div",{className:"user-manager-header",children:(0,l.jsxs)("div",{className:"d-flex align-items-center position-relative my-1",children:[(0,l.jsx)(i.D9,{iconName:"magnifier",className:"fs-1 position-absolute ms-6"}),(0,l.jsx)("input",{type:"text","data-kt-user-table-filter":"search",className:"form-control form-control-solid w-250px ps-14",placeholder:"Search user",value:e.searchString,onChange:function(t){return e.handleSearchBarChange(t)}})]})})})},c=s(6871),o=function(e){var t=(0,c.s0)();return(0,l.jsx)("div",{className:"d-flex justify-content-end","data-kt-user-table-toolbar":"base",children:(0,l.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t("/invite-users")},children:[(0,l.jsx)(i.D9,{iconName:"plus",className:"fs-2"}),"Invite Users"]})})},d=function(e){return(0,l.jsxs)("div",{className:"card-header border-0 pt-6",children:[(0,l.jsx)(r,{searchString:e.searchString,handleSearchBarChange:e.handleSearchBarChange,noOfRecords:e.noOfRecords}),(0,l.jsx)("div",{className:"card-toolbar",children:(0,l.jsx)(o,{noOfRecords:e.noOfRecords})})]})},u=s(4165),m=s(2982),h=s(5861),f=s(2096),g=a.forwardRef((function(e,t){return(0,l.jsx)("a",{ref:t,className:"btn btn-clean btn-hover-light-primary btn-sm btn-icon",onClick:function(t){t.preventDefault(),e.onClick(t)},children:e.children})}));function x(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("span",{className:"navi navi-hover",style:{paddingLeft:0},children:[(0,l.jsx)("li",{className:"navi-item cursor-pointer py-2 text-dark",style:{listStyleType:"none"},onClick:function(){return e.resendInvitation(e.email)},children:(0,l.jsx)("span",{className:"navi-link",children:(0,l.jsxs)("span",{className:"navi-text ms-6 text-dark",children:["Resend",e.resending&&(0,l.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})})}),(0,l.jsx)("div",{className:"separator"}),(0,l.jsx)("li",{className:"navi-item cursor-pointer py-2 text-dark",style:{listStyleType:"none"},onClick:function(){return e.openDialogForSingleDeletion("delete-invitation-".concat(e.id))},children:(0,l.jsx)("span",{className:"navi-link",children:(0,l.jsx)("span",{className:"navi-text ms-6 text-dark",children:"Delete"})})})]})})}var p=function(e){var t=(0,c.s0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"ms-3 form-check form-check-sm form-check-custom form-check-solid",children:(0,l.jsx)("input",{id:"kt_table_users",className:"form-check-input",type:"checkbox",checked:e.selected,value:e.id,onChange:function(t){return e.handleChange(t)}})})}),(0,l.jsx)("td",{className:"text-gray-800 text-start",children:e.email}),(0,l.jsx)("td",{className:"text-gray-800 text-center",children:e.role}),(0,l.jsx)("td",{className:"text-gray-800 text-center",children:e.status}),(0,l.jsx)("td",{className:"text-gray-800 text-center",children:(0,l.jsx)(l.Fragment,{children:new Date(e.created).toLocaleDateString()})}),!e.userId&&(0,l.jsx)("td",{className:"text-center min-w-100px actions",children:(0,l.jsxs)(f.Z,{className:"dropdown dropdown-inline",drop:"down",children:[(0,l.jsx)(f.Z.Toggle,{className:"",variant:"transparent",id:"dropdown-toggle-top-user-profile",as:g,children:(0,l.jsx)("span",{className:"btn btn-light btn-active-light-primary btn-sm",children:"Actions"})}),(0,l.jsx)(f.Z.Menu,{className:"dropdown-menu dropdown-menu-sm dropdown-menu-right mt-1",children:(0,l.jsx)(x,{id:e.id,email:e.email,resendInvitation:e.resendInvitation,openDialogForSingleDeletion:e.openDialogForSingleDeletion,resending:e.resending})})]})}),e.userId&&(0,l.jsx)("td",{className:"text-center min-w-100px actions",children:(0,l.jsx)("span",{className:"btn btn-light btn-active-light-primary btn-sm",onClick:function(){return t("/user-detail",{state:e.userId})},children:"View User"})})]})})},v=function(e){return(0,l.jsxs)("div",{id:"delete-invitations",style:{display:"none"},className:"modal",children:[(0,l.jsx)("span",{onClick:function(){return e.closeDialog("delete-invitations")},className:"close",title:"Close Modal",children:"\xd7"}),(0,l.jsx)("form",{className:"modal-content",children:(0,l.jsxs)("div",{className:"px-7 py-7",children:[(0,l.jsx)("h3",{className:"text-center",children:"Delete Users"}),(0,l.jsx)("p",{className:"font-size-15 text-center",children:"Are you sure that you wanted to delete the selected users?"}),(0,l.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,l.jsx)("button",{onClick:function(){return e.closeDialog("delete-invitations")},type:"button",className:"btn btn-primary",children:"Cancel"}),(0,l.jsxs)("button",{onClick:function(){return e.handleBulkDeletion()},type:"button",className:"btn btn-danger ms-3",children:["Delete",e.deleting&&(0,l.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]})})]})},j=s(7959),N=s(7394),b=s(4059),y=s(5675),S=s(7665),k={1:"Administrator",2:"User",3:"View Only"},w=function(e){var t=(0,S.aC)().currentUser;(0,a.useEffect)((function(){e.invitationList&&(e.deleteRecord.length!==e.invitationList.length&&e.setSelectedAll(!1),e.deleteRecord.length===e.invitationList.length&&e.invitationList.length>0&&e.setSelectedAll(!0))}),[e.deleteRecord]);var s=function(){var t=(0,h.Z)((0,u.Z)().mark((function t(s){var n;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(s),n=[],e.invitationList.map((function(e){if(e.id!=s)n=[].concat((0,m.Z)(n),[e]);else{console.log(e);var t=e,a=!t.selected;t.selected=a,console.log(t),n.push(t)}})),console.log(n),e.setInvitationList(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=(0,h.Z)((0,u.Z)().mark((function t(n){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(n.target.value);case 2:n.target.checked?e.setDeleteRecord((function(e){return[].concat((0,m.Z)(e),[n.target.value])})):e.setDeleteRecord((function(e){return e.filter((function(e){return e!==n.target.value}))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(e){document.getElementById(e).style.display="none"},r=function(e){document.getElementById(e).style.display="block"},c=function(e){document.getElementById(e).style.display="none"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{id:"community-user-table",className:"card",style:{overflowX:"auto"},children:[""!=e.warnings&&(0,l.jsx)(b.Nq,{message:e.warnings,checked:e.showWarnings}),e.deleteRecord.length>0&&(0,l.jsx)("div",{className:"card-header border-0 pt-6",children:(0,l.jsx)("div",{className:"card-toolbar",children:(0,l.jsxs)("div",{className:"d-flex justify-content-end",children:[e.deleteRecord.length>0&&(0,l.jsxs)("div",{className:"d-flex justify-content-end align-items-center",children:[(0,l.jsxs)("div",{className:"fw-bolder me-5",children:[(0,l.jsx)("span",{className:"me-2",children:e.deleteRecord.length}),"Selected"]}),(0,l.jsx)("button",{type:"button",onClick:function(){return e="delete-invitations",void(document.getElementById(e).style.display="block");var e},className:"btn btn-danger",children:"Delete Selected"})]}),(0,l.jsx)(v,{closeDialog:i,deleting:e.deleting,handleBulkDeletion:function(){e.setDeleting(!0),(0,y.g2)(e.deleteRecord,null===t||void 0===t?void 0:t.companyId,e.limit).then((function(e){e.data.success?(localStorage.setItem("responsesuccessmsg",e.data.message),window.location.reload()):e.data.message?(localStorage.setItem("responsefailuresmsg",e.data.message),window.location.reload()):(localStorage.setItem("responsefailuresmsg","Failed to delete users"),window.location.reload())})).then((function(){e.setDeleteRecord([]),i("delete-invitations"),e.setDeleting(!1),e.selectedAll&&e.setSelectedAll(!1)}))}})]})})}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("table",{className:"table mb-10 align-middle table-row-dashed fs-6 gy-5 px-3",id:"kt_table_users",children:[(0,l.jsx)("thead",{className:"pe-5",children:(0,l.jsxs)("tr",{className:"text-start text-muted fw-bolder fs-7 text-uppercase gs-0",children:[(0,l.jsx)("th",{className:"w-10px pe-2",children:(0,l.jsx)("div",{className:"ms-3 form-check form-check-sm form-check-custom form-check-solid me-3",children:(0,l.jsx)("input",{className:"form-check-input",onChange:function(t){return function(t){if(t.target.checked){e.setSelectedAll(!0);var s=[],n=[];e.invitationList.map((function(t){s.push(e.handleChangeSelection(t.id,!0)),n.push(t.id)})),e.setInvitationList(s),e.setDeleteRecord(n)}else{e.setSelectedAll(!1);var a=[];e.invitationList.map((function(t){a.push(e.handleChangeSelection(t.id,!1))})),e.setInvitationList(a),e.setDeleteRecord([])}}(t)},type:"checkbox",checked:e.selectedAll})})}),(0,l.jsx)("th",{className:"min-w-125px",children:"User Email"}),(0,l.jsx)("th",{className:"text-center min-w-125px",children:"User Role"}),(0,l.jsx)("th",{className:"text-center min-w-125px",children:"Invitation Status"}),(0,l.jsx)("th",{className:"text-center min-w-125px",children:"Date Sent"}),(0,l.jsx)("th",{className:"min-w-100px text-center",children:"Actions"})]})}),!e.loading&&(0,l.jsx)("tbody",{className:"text-gray-600 fw-bold",children:(0,l.jsx)(l.Fragment,{children:e.invitationList.map((function(s){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{id:s.id,userId:s.userId,email:s.email,role:k[s.role.toString()],status:s.status,created:s.created,selected:s.selected,openDialogForSingleDeletion:r,handleChange:n,resendInvitation:e.resendInvitation,resending:e.resending}),(0,l.jsxs)("div",{id:"delete-invitation-".concat(s.id),style:{display:"none"},className:"modal",children:[(0,l.jsx)("span",{onClick:function(){return c("delete-invitation-".concat(s.id))},className:"close",title:"Close Modal",children:"\xd7"}),(0,l.jsx)("form",{className:"modal-content bg-white",children:(0,l.jsxs)("div",{className:"px-7 py-7",children:[(0,l.jsx)("h3",{children:"Delete User"}),(0,l.jsx)("p",{className:"font-size-15",children:"Are you sure that you want to delete the selected user?"}),(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)("button",{onClick:function(){return c("delete-invitation-".concat(s.id))},type:"button",className:"btn btn-primary",children:"Cancel"}),(0,l.jsxs)("button",{onClick:function(){return n=s.id,e.setDeleting(!0),void(0,y.ZH)(n,null===t||void 0===t?void 0:t.companyId,e.limit).then((function(t){t.data.success?(e.setInvitationList(t.data.invitationList),e.setTotNumOfPage(t.data.totalPageNum),e.setNoOfRecords(t.data.noOfRecords),e.setSuccessResMessage(t.data.message)):t.data.message&&e.setFailureResMessage(t.data.message)})).then((function(){c("delete-invitation-".concat(n)),e.setDeleting(!1)}));var n},type:"button",className:"btn btn-danger ms-3",children:["Delete",e.deleting&&(0,l.jsx)("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]})})]})]})}))})})]})})]}),!e.loading&&e.noOfRecords>0&&(0,l.jsxs)("div",{className:"px-15 user-pagination mt-5 mb-5",children:[(0,l.jsx)(N.c,{totalNoOfRecords:e.noOfRecords,selectedPage:e.selectedPage,limit:e.limit,entityName:"users"}),e.totNumOfPage>1&&(0,l.jsx)(j.t,{totalNumberOfPages:e.totNumOfPage,fetchNextData:e.fetchNextData,selectedPage:e.selectedPage,setSelectedPage:e.setSelectedPage,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage})]})]})},C=function(){var e=(0,a.useState)(!0),t=(0,n.Z)(e,2),s=t[0],r=t[1],o=(0,a.useState)(!1),u=(0,n.Z)(o,2),m=u[0],h=u[1],f=(0,a.useState)(0),g=(0,n.Z)(f,1)[0],x=(0,a.useState)(10),p=(0,n.Z)(x,1)[0],v=(0,c.s0)(),j=(0,a.useState)([]),N=(0,n.Z)(j,2),k=N[0],C=N[1],R=(0,S.aC)(),D=R.currentUser,I=R.auth,P=(0,a.useState)(1),Z=(0,n.Z)(P,2),O=Z[0],L=Z[1],F=(0,a.useState)(1),T=(0,n.Z)(F,2),A=T[0],M=T[1],B=(0,a.useState)(0),U=(0,n.Z)(B,2),E=U[0],_=U[1],z=(0,a.useState)(0),q=(0,n.Z)(z,2),V=q[0],W=q[1],G=(0,a.useState)(""),H=(0,n.Z)(G,2),X=H[0],J=H[1],K=(0,a.useState)(!1),Q=(0,n.Z)(K,2),Y=Q[0],$=Q[1],ee=(0,a.useState)(""),te=(0,n.Z)(ee,2),se=te[0],ne=te[1],ae=(0,a.useState)(""),ie=(0,n.Z)(ae,2),le=ie[0],re=ie[1],ce=(0,a.useState)(""),oe=(0,n.Z)(ce,2),de=oe[0],ue=oe[1],me=(0,a.useState)(!0),he=(0,n.Z)(me,2),fe=he[0],ge=he[1],xe=(0,a.useState)(!0),pe=(0,n.Z)(xe,2),ve=pe[0],je=pe[1],Ne=(0,a.useState)([]),be=(0,n.Z)(Ne,2),ye=be[0],Se=be[1],ke=(0,a.useState)(!1),we=(0,n.Z)(ke,2),Ce=we[0],Re=we[1],De=(0,a.useState)(!1),Ie=(0,n.Z)(De,2),Pe=Ie[0],Ze=Ie[1],Oe=localStorage.getItem("responsesuccessmsg"),Le=localStorage.getItem("responsefailuresmsg"),Fe=(0,a.useState)(Oe),Te=(0,n.Z)(Fe,2),Ae=Te[0],Me=Te[1],Be=(0,a.useState)(Le),Ue=(0,n.Z)(Be,2),Ee=Ue[0],_e=Ue[1];""!=X&&setTimeout((function(){$(!1),setTimeout((function(){J("")}),300)}),5e3),le&&setTimeout((function(){ge(!1),setTimeout((function(){re("")}),200)}),5e3),de&&setTimeout((function(){ge(!1),setTimeout((function(){ue("")}),200)}),5e3),Oe&&setTimeout((function(){localStorage.removeItem("responsesuccessmsg"),je(!1),setTimeout((function(){Me("")}),300)}),5e3),Le&&setTimeout((function(){localStorage.removeItem("responsefailuresmsg"),je(!1),setTimeout((function(){_e("")}),300)}),5e3),(0,a.useEffect)((function(){var e;1!=(null===I||void 0===I||null===(e=I.user)||void 0===e?void 0:e.role)&&v("/error/404")}),[]),(0,a.useEffect)((function(){(0,y.tF)(se,g,p,null===D||void 0===D?void 0:D.companyId).then((function(e){e.data.success&&(C(e.data.invitationList),_(e.data.totalPageNum),W(e.data.noOfRecords),L(1),M(1),r(!1))}))}),[se]);var ze=function(e,t){var s=k.find((function(t){return t.id===e}));return s.selected=t,s};return(0,l.jsxs)(l.Fragment,{children:[void 0!==le&&null!==le&&""!==le?(0,l.jsx)(b.FP,{message:le,checked:fe}):null,void 0!==de&&null!==de&&""!==de?(0,l.jsx)(b.Nq,{message:de,checked:fe}):null,null!==Ae&&void 0!==Ae&&""!==Ae?(0,l.jsx)(b.FP,{message:Ae,checked:ve}):null,null!==Ee&&void 0!==Ee&&""!==Ee?(0,l.jsx)(b.Nq,{message:Ee,checked:ve}):null,(0,l.jsxs)(i.O7,{children:[(0,l.jsx)(d,{searchString:se,handleSearchBarChange:function(e){ne(e.target.value)},noOfRecords:V}),(0,l.jsx)(w,{warnings:X,showWarnings:Y,loading:s,invitationList:k,setInvitationList:C,totNumOfPage:E,setTotNumOfPage:_,fetchNextData:function(e){if(e>0&&e<=E){if(r(!0),ye.length>0){Re(!1);var t=[];k.map((function(e){t.push(ze(e.id,!1))})),C(t),Se([])}var s=(parseInt(e)-1)*p;(0,y.tF)(se,s,p,null===D||void 0===D?void 0:D.companyId).then((function(t){t.data.success&&(C(t.data.invitationList),_(t.data.totalPageNum),W(t.data.noOfRecords),r(!1),L(e),M(e))}))}else J("Invalid page number provided, please check it."),$(!0)},selectedPage:O,setSelectedPage:L,currentPage:A,setCurrentPage:M,successResMessage:le,setSuccessResMessage:re,failureResMessage:de,setFailureResMessage:ue,deleteRecord:ye,setDeleteRecord:Se,selectedAll:Ce,setSelectedAll:Re,deleting:Pe,setDeleting:Ze,handleChangeSelection:ze,limit:p,resendInvitation:function(e){h(!0),(0,y.o5)(e,null===D||void 0===D?void 0:D.companyId,g,p).then((function(e){e.data.success?(C(e.data.invitationList),_(e.data.totalPageNum),W(e.data.noOfRecords),r(!1),re(e.data.message),ge(!0),h(!1)):(ue(e.data.message),ge(!0),h(!1))}))},setChecked:ge,setChecked1:je,setResSuccessMessage:Me,setResFailureMessage:_e,setNoOfRecords:W,resending:m,noOfRecords:V})]})]})}}}]);
//# sourceMappingURL=763.3b64cd92.chunk.js.map