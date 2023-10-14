"use strict";(self.webpackChunkcommunity_ai=self.webpackChunkcommunity_ai||[]).push([[867],{9157:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(4942),r=t(3366),a=t(7462),i=t(2791),l=t(9278),s=t(4419),c=t(8927),u=t(551),d=t(5878),p=t(7225);function v(e){return(0,p.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var f=t(7673),m=t(184),h=["className","dividers"],g=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.dividers&&n.dividers]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((n.vars||n).palette.divider),borderBottom:"1px solid ".concat((n.vars||n).palette.divider)}:(0,o.Z)({},".".concat(f.Z.root," + &"),{paddingTop:0}))})),b=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiDialogContent"}),o=t.className,i=t.dividers,c=void 0!==i&&i,d=(0,r.Z)(t,h),p=(0,a.Z)({},t,{dividers:c}),f=function(e){var n=e.classes,t={root:["root",e.dividers&&"dividers"]};return(0,s.Z)(t,v,n)}(p);return(0,m.jsx)(g,(0,a.Z)({className:(0,l.Z)(f.root,o),ownerState:p,ref:n},d))}))},2116:function(e,n,t){t.d(n,{Z:function(){return T}});var o=t(7462),r=t(3366),a=t(2791),i=t(9278),l=t(4419),s=t(2982),c=t(2466),u=t(7416),d=["sx"];function p(e){var n,t=e.sx,a=function(e){var n,t,o={systemProps:{},otherProps:{}},r=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:u.Z;return Object.keys(e).forEach((function(n){r[n]?o.systemProps[n]=e[n]:o.otherProps[n]=e[n]})),o}((0,r.Z)(e,d)),i=a.systemProps,l=a.otherProps;return n=Array.isArray(t)?[i].concat((0,s.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,c.P)(e)?(0,o.Z)({},i,e):i}:(0,o.Z)({},i,t),(0,o.Z)({},l,{sx:n})}var v=t(8927),f=t(551),m=t(4036),h=t(5878),g=t(7225);function b(e){return(0,g.Z)("MuiTypography",e)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=t(184),Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,v.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.variant&&n[t.variant],"inherit"!==t.align&&n["align".concat((0,m.Z)(t.align))],t.noWrap&&n.noWrap,t.gutterBottom&&n.gutterBottom,t.paragraph&&n.paragraph]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&n.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=a.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiTypography"}),a=function(e){return w[e]||e}(t.color),s=p((0,o.Z)({},t,{color:a})),c=s.align,u=void 0===c?"inherit":c,d=s.className,v=s.component,h=s.gutterBottom,g=void 0!==h&&h,P=s.noWrap,S=void 0!==P&&P,R=s.paragraph,E=void 0!==R&&R,M=s.variant,T=void 0===M?"body1":M,N=s.variantMapping,C=void 0===N?k:N,W=(0,r.Z)(s,Z),B=(0,o.Z)({},s,{align:u,color:a,className:d,component:v,gutterBottom:g,noWrap:S,paragraph:E,variant:T,variantMapping:C}),A=v||(E?"p":C[T]||k[T])||"span",D=function(e){var n=e.align,t=e.gutterBottom,o=e.noWrap,r=e.paragraph,a=e.variant,i=e.classes,s={root:["root",a,"inherit"!==e.align&&"align".concat((0,m.Z)(n)),t&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,l.Z)(s,b,i)}(B);return(0,y.jsx)(x,(0,o.Z)({as:A,ref:n,ownerState:B,className:(0,i.Z)(D.root,d)},W))})),S=t(7673),R=t(5090),E=["className","id"],M=(0,v.ZP)(P,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),T=a.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiDialogTitle"}),s=t.className,c=t.id,u=(0,r.Z)(t,E),d=t,p=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},S.a,n)}(d),v=a.useContext(R.Z).titleId,m=void 0===v?c:v;return(0,y.jsx)(M,(0,o.Z)({component:"h2",className:(0,i.Z)(p.root,s),ownerState:d,ref:n,variant:"h6",id:null!=c?c:m},u))}))},7673:function(e,n,t){t.d(n,{a:function(){return a}});var o=t(5878),r=t(7225);function a(e){return(0,r.Z)("MuiDialogTitle",e)}var i=(0,o.Z)("MuiDialogTitle",["root"]);n.Z=i},4889:function(e,n,t){t.d(n,{Z:function(){return xe}});var o=t(4942),r=t(3366),a=t(7462),i=t(2791),l=t.t(i,2),s=t(9278),c=t(4419),u=t(885),d=0;var p=l["useId".toString()];function v(e){if(void 0!==p){var n=p();return null!=e?e:n}return function(e){var n=i.useState(e),t=(0,u.Z)(n,2),o=t[0],r=t[1],a=e||o;return i.useEffect((function(){null==o&&r("mui-".concat(d+=1))}),[o]),a}(e)}var f=t(4036),m=t(6117);function h(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=h(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}var g=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=h(e))&&(o&&(o+=" "),o+=n);return o};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};var t={};return Object.keys(e).filter((function(t){return t.match(/^on[A-Z]/)&&"function"===typeof e[t]&&!n.includes(t)})).forEach((function(n){t[n]=e[n]})),t}function y(e){if(void 0===e)return{};var n={};return Object.keys(e).filter((function(n){return!(n.match(/^on[A-Z]/)&&"function"===typeof e[n])})).forEach((function(t){n[t]=e[t]})),n}var Z=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function x(e){var n,t=e.elementType,o=e.externalSlotProps,i=e.ownerState,l=e.skipResolvingSlotProps,s=void 0!==l&&l,c=(0,r.Z)(e,Z),u=s?{}:function(e,n,t){return"function"===typeof e?e(n,t):e}(o,i),d=function(e){var n=e.getSlotProps,t=e.additionalProps,o=e.externalSlotProps,r=e.externalForwardedProps,i=e.className;if(!n){var l=g(null==r?void 0:r.className,null==o?void 0:o.className,i,null==t?void 0:t.className),s=(0,a.Z)({},null==t?void 0:t.style,null==r?void 0:r.style,null==o?void 0:o.style),c=(0,a.Z)({},t,r,o);return l.length>0&&(c.className=l),Object.keys(s).length>0&&(c.style=s),{props:c,internalRef:void 0}}var u=b((0,a.Z)({},r,o)),d=y(o),p=y(r),v=n(u),f=g(null==v?void 0:v.className,null==t?void 0:t.className,i,null==r?void 0:r.className,null==o?void 0:o.className),m=(0,a.Z)({},null==v?void 0:v.style,null==t?void 0:t.style,null==r?void 0:r.style,null==o?void 0:o.style),h=(0,a.Z)({},v,t,p,d);return f.length>0&&(h.className=f),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:v.ref}}((0,a.Z)({},c,{externalSlotProps:u})),p=d.props,v=d.internalRef,f=(0,m.Z)(v,null==u?void 0:u.ref,null==(n=e.additionalProps)?void 0:n.ref),h=function(e,n,t){return void 0===e||"string"===typeof e?n:(0,a.Z)({},n,{ownerState:(0,a.Z)({},n.ownerState,t)})}(t,(0,a.Z)({},p,{ref:f}),i);return h}function k(e){return e&&e.ownerDocument||document}var w="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var P=function(e){var n=i.useRef(e);return w((function(){n.current=e})),i.useCallback((function(){return n.current.apply(void 0,arguments)}),[])};function S(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),(function(){}))}var R=t(5671),E=t(3144),M=t(2982);function T(e){return k(e).defaultView||window}function N(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function C(e){return parseInt(T(e).getComputedStyle(e).paddingRight,10)||0}function W(e,n,t,o,r){var a=[n,t].concat((0,M.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===a.indexOf(e),t=!function(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&N(e,r)}))}function B(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function A(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=k(e);return n.body===e?T(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=function(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}(k(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(C(o)+r,"px");var a=k(o).querySelectorAll(".mui-fixed");[].forEach.call(a,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(C(e)+r,"px")}))}var i;if(o.parentNode instanceof DocumentFragment)i=k(o).body;else{var l=o.parentElement,s=T(o);i="HTML"===(null==l?void 0:l.nodeName)&&"scroll"===s.getComputedStyle(l).overflowY?l:o}t.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var D=function(){function e(){(0,R.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,E.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&N(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);W(n,e.mount,e.modalRef,o,!0);var r=B(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=B(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=A(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=B(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&N(e.modalRef,n),W(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var a=r.modals[r.modals.length-1];a.modalRef&&N(a.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var I=new D;function F(e){var n=e.container,t=e.disableEscapeKeyDown,o=void 0!==t&&t,r=e.disableScrollLock,l=void 0!==r&&r,s=e.manager,c=void 0===s?I:s,d=e.closeAfterTransition,p=void 0!==d&&d,v=e.onTransitionEnter,f=e.onTransitionExited,h=e.children,g=e.onClose,y=e.open,Z=e.rootRef,x=i.useRef({}),w=i.useRef(null),R=i.useRef(null),E=(0,m.Z)(R,Z),M=i.useState(!y),T=(0,u.Z)(M,2),C=T[0],W=T[1],B=function(e){return!!e&&e.props.hasOwnProperty("in")}(h),A=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(A=!1);var D=function(){return x.current.modalRef=R.current,x.current.mount=w.current,x.current},F=function(){c.mount(D(),{disableScrollLock:l}),R.current&&(R.current.scrollTop=0)},j=P((function(){var e=function(e){return"function"===typeof e?e():e}(n)||k(w.current).body;c.add(D(),e),R.current&&F()})),O=i.useCallback((function(){return c.isTopModal(D())}),[c]),L=P((function(e){w.current=e,e&&(y&&O()?F():R.current&&N(R.current,A))})),K=i.useCallback((function(){c.remove(D(),A)}),[A,c]);i.useEffect((function(){return function(){K()}}),[K]),i.useEffect((function(){y?j():B&&p||K()}),[y,K,B,p,j]);var q=function(e){return function(n){var t;null==(t=e.onKeyDown)||t.call(e,n),"Escape"===n.key&&O()&&(o||(n.stopPropagation(),g&&g(n,"escapeKeyDown")))}},Y=function(e){return function(n){var t;null==(t=e.onClick)||t.call(e,n),n.target===n.currentTarget&&g&&g(n,"backdropClick")}};return{getRootProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b(e);delete t.onTransitionEnter,delete t.onTransitionExited;var o=(0,a.Z)({},t,n);return(0,a.Z)({role:"presentation"},o,{onKeyDown:q(o),ref:E})},getBackdropProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e;return(0,a.Z)({"aria-hidden":!0},n,{onClick:Y(n),open:y})},getTransitionProps:function(){return{onEnter:S((function(){W(!1),v&&v()}),h.props.onEnter),onExited:S((function(){W(!0),f&&f(),p&&K()}),h.props.onExited)}},rootRef:E,portalRef:L,isTopModal:O,exited:C,hasTransition:B}}var j=t(184),O=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function L(e){var n=[],t=[];return Array.from(e.querySelectorAll(O)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function K(){return!0}function q(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,a=void 0!==r&&r,l=e.disableRestoreFocus,s=void 0!==l&&l,c=e.getTabbable,u=void 0===c?L:c,d=e.isEnabled,p=void 0===d?K:d,v=e.open,f=i.useRef(!1),h=i.useRef(null),g=i.useRef(null),b=i.useRef(null),y=i.useRef(null),Z=i.useRef(!1),x=i.useRef(null),w=(0,m.Z)(n.ref,x),P=i.useRef(null);i.useEffect((function(){v&&x.current&&(Z.current=!o)}),[o,v]),i.useEffect((function(){if(v&&x.current){var e=k(x.current);return x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),Z.current&&x.current.focus()),function(){s||(b.current&&b.current.focus&&(f.current=!0,b.current.focus()),b.current=null)}}}),[v]),i.useEffect((function(){if(v&&x.current){var e=k(x.current),n=function(n){var t=x.current;if(null!==t)if(e.hasFocus()&&!a&&p()&&!f.current){if(!t.contains(e.activeElement)){if(n&&y.current!==n.target||e.activeElement!==y.current)y.current=null;else if(null!==y.current)return;if(!Z.current)return;var o=[];if(e.activeElement!==h.current&&e.activeElement!==g.current||(o=u(x.current)),o.length>0){var r,i,l=Boolean((null==(r=P.current)?void 0:r.shiftKey)&&"Tab"===(null==(i=P.current)?void 0:i.key)),s=o[0],c=o[o.length-1];"string"!==typeof s&&"string"!==typeof c&&(l?c.focus():s.focus())}else t.focus()}}else f.current=!1},t=function(n){P.current=n,!a&&p()&&"Tab"===n.key&&e.activeElement===x.current&&n.shiftKey&&(f.current=!0,g.current&&g.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){e.activeElement&&"BODY"===e.activeElement.tagName&&n(null)}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,a,s,p,v,u]);var S=function(e){null===b.current&&(b.current=e.relatedTarget),Z.current=!0};return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)("div",{tabIndex:v?0:-1,onFocus:S,ref:h,"data-testid":"sentinelStart"}),i.cloneElement(n,{ref:w,onFocus:function(e){null===b.current&&(b.current=e.relatedTarget),Z.current=!0,y.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,j.jsx)("div",{tabIndex:v?0:-1,onFocus:S,ref:g,"data-testid":"sentinelEnd"})]})}var Y=t(4164),U=t(2971);var H=i.forwardRef((function(e,n){var t=e.children,o=e.container,r=e.disablePortal,a=void 0!==r&&r,l=i.useState(null),s=(0,u.Z)(l,2),c=s[0],d=s[1],p=(0,m.Z)(i.isValidElement(t)?t.ref:null,n);if(w((function(){a||d(function(e){return"function"===typeof e?e():e}(o)||document.body)}),[o,a]),w((function(){if(c&&!a)return(0,U.Z)(n,c),function(){(0,U.Z)(n,null)}}),[n,c,a]),a){if(i.isValidElement(t)){var v={ref:p};return i.cloneElement(t,v)}return(0,j.jsx)(i.Fragment,{children:t})}return(0,j.jsx)(i.Fragment,{children:c?Y.createPortal(t,c):c})}));var z=t(8927),V=t(551),X=t(7334),_=t(5878),G=t(7225);function J(e){return(0,G.Z)("MuiBackdrop",e)}(0,_.Z)("MuiBackdrop",["root","invisible"]);var Q=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],$=(0,z.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,a.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),ee=i.forwardRef((function(e,n){var t,o,i,l=(0,V.Z)({props:e,name:"MuiBackdrop"}),u=l.children,d=l.className,p=l.component,v=void 0===p?"div":p,f=l.components,m=void 0===f?{}:f,h=l.componentsProps,g=void 0===h?{}:h,b=l.invisible,y=void 0!==b&&b,Z=l.open,x=l.slotProps,k=void 0===x?{}:x,w=l.slots,P=void 0===w?{}:w,S=l.TransitionComponent,R=void 0===S?X.Z:S,E=l.transitionDuration,M=(0,r.Z)(l,Q),T=(0,a.Z)({},l,{component:v,invisible:y}),N=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,c.Z)(t,J,n)}(T),C=null!=(t=k.root)?t:g.root;return(0,j.jsx)(R,(0,a.Z)({in:Z,timeout:E},M,{children:(0,j.jsx)($,(0,a.Z)({"aria-hidden":!0},C,{as:null!=(o=null!=(i=P.root)?i:m.Root)?o:v,className:(0,s.Z)(N.root,d,null==C?void 0:C.className),ownerState:(0,a.Z)({},T,null==C?void 0:C.ownerState),classes:N,ref:n,children:u}))}))}));function ne(e){return(0,G.Z)("MuiModal",e)}(0,_.Z)("MuiModal",["root","hidden","backdrop"]);var te=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],oe=(0,z.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),re=(0,z.ZP)(ee,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),ae=i.forwardRef((function(e,n){var t,o,l,u,d,p,v=(0,V.Z)({name:"MuiModal",props:e}),f=v.BackdropComponent,m=void 0===f?re:f,h=v.BackdropProps,g=v.className,b=v.closeAfterTransition,y=void 0!==b&&b,Z=v.children,k=v.container,w=v.component,P=v.components,S=void 0===P?{}:P,R=v.componentsProps,E=void 0===R?{}:R,M=v.disableAutoFocus,T=void 0!==M&&M,N=v.disableEnforceFocus,C=void 0!==N&&N,W=v.disableEscapeKeyDown,B=void 0!==W&&W,A=v.disablePortal,D=void 0!==A&&A,I=v.disableRestoreFocus,O=void 0!==I&&I,L=v.disableScrollLock,K=void 0!==L&&L,Y=v.hideBackdrop,U=void 0!==Y&&Y,z=v.keepMounted,X=void 0!==z&&z,_=v.onBackdropClick,G=v.open,J=v.slotProps,Q=v.slots,$=(0,r.Z)(v,te),ee=(0,a.Z)({},v,{closeAfterTransition:y,disableAutoFocus:T,disableEnforceFocus:C,disableEscapeKeyDown:B,disablePortal:D,disableRestoreFocus:O,disableScrollLock:K,hideBackdrop:U,keepMounted:X}),ae=F((0,a.Z)({},ee,{rootRef:n})),ie=ae.getRootProps,le=ae.getBackdropProps,se=ae.getTransitionProps,ce=ae.portalRef,ue=ae.isTopModal,de=ae.exited,pe=ae.hasTransition,ve=(0,a.Z)({},ee,{exited:de}),fe=function(e){var n=e.open,t=e.exited,o=e.classes,r={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,c.Z)(r,ne,o)}(ve),me={};if(void 0===Z.props.tabIndex&&(me.tabIndex="-1"),pe){var he=se(),ge=he.onEnter,be=he.onExited;me.onEnter=ge,me.onExited=be}var ye=null!=(t=null!=(o=null==Q?void 0:Q.root)?o:S.Root)?t:oe,Ze=null!=(l=null!=(u=null==Q?void 0:Q.backdrop)?u:S.Backdrop)?l:m,xe=null!=(d=null==J?void 0:J.root)?d:E.root,ke=null!=(p=null==J?void 0:J.backdrop)?p:E.backdrop,we=x({elementType:ye,externalSlotProps:xe,externalForwardedProps:$,getSlotProps:ie,additionalProps:{ref:n,as:w},ownerState:ve,className:(0,s.Z)(g,null==xe?void 0:xe.className,null==fe?void 0:fe.root,!ve.open&&ve.exited&&(null==fe?void 0:fe.hidden))}),Pe=x({elementType:Ze,externalSlotProps:ke,additionalProps:h,getSlotProps:function(e){return le((0,a.Z)({},e,{onClick:function(n){_&&_(n),null!=e&&e.onClick&&e.onClick(n)}}))},className:(0,s.Z)(null==ke?void 0:ke.className,null==h?void 0:h.className,null==fe?void 0:fe.backdrop),ownerState:ve});return X||G||pe&&!de?(0,j.jsx)(H,{ref:ce,container:k,disablePortal:D,children:(0,j.jsxs)(ye,(0,a.Z)({},we,{children:[!U&&m?(0,j.jsx)(Ze,(0,a.Z)({},Pe)):null,(0,j.jsx)(q,{disableEnforceFocus:C,disableAutoFocus:T,disableRestoreFocus:O,isEnabled:ue,open:G,children:i.cloneElement(Z,me)})]}))}):null})),ie=t(2065),le=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)};function se(e){return(0,G.Z)("MuiPaper",e)}(0,_.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var ce=["className","component","elevation","square","variant"],ue=(0,z.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n["elevation".concat(t.elevation)]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,a.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((t.vars||t).palette.divider)},"elevation"===o.variant&&(0,a.Z)({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,ie.Fq)("#fff",le(o.elevation)),", ").concat((0,ie.Fq)("#fff",le(o.elevation)),")")},t.vars&&{backgroundImage:null==(n=t.vars.overlays)?void 0:n[o.elevation]}))})),de=i.forwardRef((function(e,n){var t=(0,V.Z)({props:e,name:"MuiPaper"}),o=t.className,i=t.component,l=void 0===i?"div":i,u=t.elevation,d=void 0===u?1:u,p=t.square,v=void 0!==p&&p,f=t.variant,m=void 0===f?"elevation":f,h=(0,r.Z)(t,ce),g=(0,a.Z)({},t,{component:l,elevation:d,square:v,variant:m}),b=function(e){var n=e.square,t=e.elevation,o=e.variant,r=e.classes,a={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(t)]};return(0,c.Z)(a,se,r)}(g);return(0,j.jsx)(ue,(0,a.Z)({as:l,ownerState:g,className:(0,s.Z)(b.root,o),ref:n},h))}));function pe(e){return(0,G.Z)("MuiDialog",e)}var ve=(0,_.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),fe=t(5090),me=t(3967),he=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ge=(0,z.ZP)(ee,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,n){return n.backdrop}})({zIndex:-1}),be=(0,z.ZP)(ae,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,n){return n.root}})({"@media print":{position:"absolute !important"}}),ye=(0,z.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,n){var t=e.ownerState;return[n.container,n["scroll".concat((0,f.Z)(t.scroll))]]}})((function(e){var n=e.ownerState;return(0,a.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===n.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===n.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),Ze=(0,z.ZP)(de,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,n){var t=e.ownerState;return[n.paper,n["scrollPaper".concat((0,f.Z)(t.scroll))],n["paperWidth".concat((0,f.Z)(String(t.maxWidth)))],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&(0,o.Z)({maxWidth:"px"===n.breakpoints.unit?Math.max(n.breakpoints.values.xs,444):"max(".concat(n.breakpoints.values.xs).concat(n.breakpoints.unit,", 444px)")},"&.".concat(ve.paperScrollBody),(0,o.Z)({},n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),t.maxWidth&&"xs"!==t.maxWidth&&(0,o.Z)({maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)},"&.".concat(ve.paperScrollBody),(0,o.Z)({},n.breakpoints.down(n.breakpoints.values[t.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&(0,o.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(ve.paperScrollBody),{margin:0,maxWidth:"100%"}))})),xe=i.forwardRef((function(e,n){var t=(0,V.Z)({props:e,name:"MuiDialog"}),o=(0,me.Z)(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},u=t["aria-describedby"],d=t["aria-labelledby"],p=t.BackdropComponent,m=t.BackdropProps,h=t.children,g=t.className,b=t.disableEscapeKeyDown,y=void 0!==b&&b,Z=t.fullScreen,x=void 0!==Z&&Z,k=t.fullWidth,w=void 0!==k&&k,P=t.maxWidth,S=void 0===P?"sm":P,R=t.onBackdropClick,E=t.onClose,M=t.open,T=t.PaperComponent,N=void 0===T?de:T,C=t.PaperProps,W=void 0===C?{}:C,B=t.scroll,A=void 0===B?"paper":B,D=t.TransitionComponent,I=void 0===D?X.Z:D,F=t.transitionDuration,O=void 0===F?l:F,L=t.TransitionProps,K=(0,r.Z)(t,he),q=(0,a.Z)({},t,{disableEscapeKeyDown:y,fullScreen:x,fullWidth:w,maxWidth:S,scroll:A}),Y=function(e){var n=e.classes,t=e.scroll,o=e.maxWidth,r=e.fullWidth,a=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,f.Z)(t))],paper:["paper","paperScroll".concat((0,f.Z)(t)),"paperWidth".concat((0,f.Z)(String(o))),r&&"paperFullWidth",a&&"paperFullScreen"]};return(0,c.Z)(i,pe,n)}(q),U=i.useRef(),H=v(d),z=i.useMemo((function(){return{titleId:H}}),[H]);return(0,j.jsx)(be,(0,a.Z)({className:(0,s.Z)(Y.root,g),closeAfterTransition:!0,components:{Backdrop:ge},componentsProps:{backdrop:(0,a.Z)({transitionDuration:O,as:p},m)},disableEscapeKeyDown:y,onClose:E,open:M,ref:n,onClick:function(e){U.current&&(U.current=null,R&&R(e),E&&E(e,"backdropClick"))},ownerState:q},K,{children:(0,j.jsx)(I,(0,a.Z)({appear:!0,in:M,timeout:O,role:"presentation"},L,{children:(0,j.jsx)(ye,{className:(0,s.Z)(Y.container),onMouseDown:function(e){U.current=e.target===e.currentTarget},ownerState:q,children:(0,j.jsx)(Ze,(0,a.Z)({as:N,elevation:24,role:"dialog","aria-describedby":u,"aria-labelledby":H},W,{className:(0,s.Z)(Y.paper,W.className),ownerState:q,children:(0,j.jsx)(fe.Z.Provider,{value:z,children:h})}))})}))}))}))},5090:function(e,n,t){var o=t(2791).createContext({});n.Z=o}}]);
//# sourceMappingURL=867.aa5e43d0.chunk.js.map