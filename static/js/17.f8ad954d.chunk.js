(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[17],{113:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var c=n(54),o=n(45),r=n(55),a=function(){var e=c.a.users.getAll();return Object(r.a)({url:e,method:"GET",headers:{Authorization:Object(o.a)()}})},s=n(14),i=function(){return function(){var e=c.a.users.self();return Object(r.a)({url:e,method:"GET",headers:{Authorization:Object(o.a)()},addGroupName:!1})}().then((function(e){return Object(s.h)("user",e),Object(s.h)("currentGroup",e.default_group),e}))},u=function(){return a().then((function(e){var t=[];return e.forEach((function(e){t.push({id:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name})})),t}))},l=function(e){return function(e){var t=c.a.users.delete(e);return Object(r.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))}},200:function(e,t,n){"use strict";n.r(t);var c=n(57),o=n(48),r=n(21),a=n(0),s=n(52),i=n(46),u=n(47),l=n(113),d=n(60),f=n(1);t.default=function(){var e=Object(a.useState)({id:0,confirm:!1}),t=Object(r.a)(e,2),n=t[0],h=t[1],b=Object(a.useState)([{id:0,name:"string",disabled:!1}]),m=Object(r.a)(b,2),j=m[0],p=m[1],O=Object(a.useState)(!1),g=Object(r.a)(O,2),v=g[0],y=g[1],x=Object(a.useState)(!1),w=Object(r.a)(x,2),N=w[0],S=w[1],k=Object(a.useState)({type:"success",text:""}),C=Object(r.a)(k,2),D=C[0],F=C[1],U=n.id,A=n.confirm,M=function(e){"checkbox"===e.target.type?h(Object(o.a)(Object(o.a)({},n),{},Object(c.a)({},e.target.name,e.target.checked))):h(Object(o.a)(Object(o.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))},T=function(e){var t=e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{disabled:!("fossy"!==e.name&&"Default User"!==e.name)})}));p(t),t=t.filter((function(e){return"fossy"!==e.name&&"Default User"!==e.name})),h(Object(o.a)(Object(o.a)({},n),{},{id:t.length?t[0].id:0}))};return Object(a.useEffect)((function(){Object(l.b)().then((function(e){T(e)})).catch((function(e){Object(d.e)(e,F),S(!0)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{title:"Delete A User"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[N&&Object(f.jsx)(u.a,{type:D.type,setShow:S,message:D.text}),Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Delete A User"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(f.jsxs)("p",{children:["Deleting a user removes the user entry from the FOSSology system. The user's name, account information, and password will be permanently removed. (There is no 'undo' to this delete.)",Object(f.jsx)("br",{}),"To delete a user, enter the following information:"]}),Object(f.jsxs)("form",{children:[Object(f.jsx)(u.c,{type:"select",name:"id",id:"admin-users-delete-id",onChange:M,options:j,value:U,property:"name",children:"Select the user to delete:"}),Object(f.jsx)(u.c,{type:"checkbox",checked:A,name:"confirm",id:"admin-users-delete-confirm",onChange:M,children:"Confirm user deletion"}),Object(f.jsx)(u.b,{type:"submit",onClick:function(e){e.preventDefault(),A?(y(!0),Object(l.a)(U).then((function(){F({type:"success",text:s.a.deletedUser})})).then((function(){Object(l.b)().then((function(e){T(e)}))})).catch((function(e){if(0===U){var t=new Error("Default users cannot be deleted");Object(d.e)(t,F)}else Object(d.e)(e,F)})).finally((function(){y(!1),S(!0)}))):(F({type:"danger",text:s.a.confirmDeletion}),S(!0))},className:"mt-4",children:v?Object(f.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Delete"})]})]})})]})]})}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var c=n(58),o=n(2),r=n(14),a=function(){if("undefined"!==typeof window&&Object(r.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},s=function(e){Object(r.e)("token"),Object(r.f)("user"),Object(r.f)("groups"),Object(r.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(c.stringify)(e))),window.location.href=t},i=function(){return Object(r.b)("token")},u=function(){return Object(r.c)("user").name},l=function(){var e;return"admin"===(null===(e=Object(r.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var c=n(62),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(c.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return o.a}));var c,o=n(56),r=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,c=e.setShow;return Object(r.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(r.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(r.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(r.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(r.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return c(!1)},children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},s=n(22),i=n(12).d.button(c||(c=Object(s.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),u=function(e){var t=e.type,n=e.onClick,c=e.className,o=e.children;return Object(r.jsx)(i,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(c),children:o})},l=(n(49),n(50)),d=function(e){var t=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,r=e.className,a=e.width,s=e.height,i=e.align;return Object(c.jsx)("img",{src:t,alt:n,style:o,className:r,width:a,height:s,align:i})}},50:function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,r=e.id,a=e.className,s=e.onChange,i=e.children,u=e.checked,l=void 0!==u&&u,d=e.placeholder,f=void 0===d?null:d,h=e.disabled,b=void 0!==h&&h,m=e.options,j=void 0===m?null:m,p=e.multiple,O=void 0!==p&&p,g=e.property,v=e.valueProperty,y=e.noDataMessage,x=void 0===y?"No Data Found":y,w=e.defaultValue,N=void 0===w?null:w;return"radio"===t||"checkbox"===t?Object(c.jsxs)("div",{className:"my-0",children:[Object(c.jsx)("input",{type:t,name:n,value:o,className:a&&"mr-2 ".concat(a),onChange:s,checked:l,disabled:b,id:r}),Object(c.jsx)("label",{htmlFor:r,className:"font-medium ml-2",children:i})]}):"select"===t?Object(c.jsxs)("div",{className:"my-0 py-0",children:[i&&Object(c.jsx)("label",{htmlFor:r,className:"font-demi",children:i}),"\u2003",Object(c.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:o,onChange:s,multiple:O&&O,size:O?"15":"",id:r,defaultValue:N,children:j.length>0?j.map((function(e,t){return Object(c.jsx)("option",{value:v?e[v]:e.id,disabled:e.disabled,children:g?e[g]:e},e.id||t)})):Object(c.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(c.jsxs)("div",{className:"my-2",children:[Object(c.jsx)("label",{htmlFor:r,className:"font-demi",children:i}),Object(c.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:s,checked:l,placeholder:f,id:r})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},54:function(e,t,n){"use strict";var c="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(c,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(c,"/jobs")},scheduleReport:function(){return"".concat(c,"/report")},downloadReport:function(e){return"".concat(c,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(c,"/tokens")}},search:{search:function(){return"".concat(c,"/search")}},users:{self:function(){return"".concat(c,"/users/self")},getAll:function(){return"".concat(c,"/users")},getSingle:function(e){return"".concat(c,"/users/").concat(e)},delete:function(e){return"".concat(c,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(c,"/folders")},getSingle:function(e){return"".concat(c,"/folders/").concat(e)},create:function(){return"".concat(c,"/folders")},read:function(e){return"".concat(c,"/folders/").concat(e)},edit:function(e){return"".concat(c,"/folders/").concat(e)},delete:function(e){return"".concat(c,"/folders/").concat(e)},move:function(e){return"".concat(c,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(c,"/uploads")},getId:function(e){return"".concat(c,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(c,"/uploads")}},organize:{uploads:{get:function(){return"".concat(c,"/uploads")},delete:function(e){return"".concat(c,"/uploads/").concat(e)},move:function(e){return"".concat(c,"/uploads/").concat(e)},copy:function(e){return"".concat(c,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(c,"/groups")},getAll:function(){return"".concat(c,"/groups")}}},license:{get:function(){return"".concat(c,"/license")},createCandidateLicense:function(){return"".concat(c,"/license")}},info:{info:function(){return"".concat(c,"/info")},health:function(){return"".concat(c,"/health")}}};t.a=o},55:function(e,t,n){"use strict";var c=n(59),o=n(48),r=n(58),a=n(45),s=n(52),i=n(14);t.a=function e(t){var n,u,l=t.url,d=t.method,f=t.body,h=t.groupName,b=t.headers,m=void 0===b?{}:b,j=t.queryParams,p=t.isMultipart,O=void 0!==p&&p,g=t.noHeaders,v=void 0!==g&&g,y=t.addGroupName,x=void 0===y||y,w=t.retries,N=void 0===w?0:w,S=t.isFile,k=void 0!==S&&S;(n=O?new Headers(Object(o.a)({},m)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},m)),k&&(n=new Headers(Object(o.a)({},m))),x)&&n.append("groupName",h||Object(i.c)("currentGroup")||(null===(u=Object(i.c)("user"))||void 0===u?void 0:u.default_group));v&&(n={});var C={method:d,headers:n,body:f},D=l;return C.body=f?O?f:JSON.stringify(f):null,j&&(D="".concat(l,"?").concat(Object(r.stringify)(j))),fetch(D,C).then((function(t){if(t.ok){var n,o=Object(c.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var r=n.value;"x-total-pages"===r[0]&&Object(i.h)("pages",r[1])}}catch(u){o.e(u)}finally{o.f()}return k?t:t.json()}return N>0?setTimeout((function(){e({url:l,method:d,headers:m,retries:N-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:s.a.forbiddenResource}):Promise.reject(n)}))}))}},60:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u}));var c=n(59),o=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*c));return t},r=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},s=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},i=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},u=function(e){var t,n=e.split(";"),o="download.txt",r=Object(c.a)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){o=a[1];break}}}catch(s){r.e(s)}finally{r.f()}return o}}}]);
//# sourceMappingURL=17.f8ad954d.chunk.js.map