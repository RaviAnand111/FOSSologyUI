(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[22],{193:function(e,t,n){"use strict";n.r(t);var o=n(57),c=n(48),r=n(21),a=n(0),i=n(52),s=n(46),u=n(47),l=n(64),d=n(60),f=n(1);t.default=function(){var e=Object(a.useState)({id:1,name:"Software Repository",description:"Top Folder",parent:null}),t=Object(r.a)(e,2),n=t[0],h=t[1],p=Object(a.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),j=Object(r.a)(p,2),b=j[0],m=j[1],O=Object(a.useState)(!1),v=Object(r.a)(O,2),g=v[0],y=v[1],x=Object(a.useState)(!1),w=Object(r.a)(x,2),N=w[0],S=w[1],k=Object(a.useState)({type:"success",text:""}),C=Object(r.a)(k,2),F=C[0],D=C[1];return Object(a.useEffect)((function(){Object(l.e)().then((function(e){m(e)})).catch((function(e){Object(d.e)(e,D),S(!0)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{title:"Unlink Folder"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[N&&Object(f.jsx)(u.a,{type:F.type,setShow:S,message:F.text}),Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Unlink folder"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(f.jsx)("p",{children:"Only folders or uploads that can be accessed via a different path can be deleted"}),Object(f.jsxs)("form",{children:[Object(f.jsx)(u.c,{type:"select",name:"id",id:"organize-folder-unlink-id",onChange:function(e){h(Object(c.a)(Object(c.a)({},n),{},Object(o.a)({},e.target.name,e.target.value)))},options:b,value:n.id,property:"name",children:"Select the upload or folder you wish to unlink:"}),Object(f.jsx)(u.b,{type:"submit",onClick:function(e){e.preventDefault(),y(!0),Object(l.c)(n).then((function(){D({type:"success",text:i.a.unlinkedFolder})})).then((function(){Object(l.e)().then((function(e){m(e)}))})).catch((function(e){Object(d.e)(e,D)})).finally((function(){y(!1),S(!0)}))},className:"mt-4",children:g?Object(f.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Delete"})]})]})})]})]})}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var o=n(58),c=n(2),r=n(14),a=function(){if("undefined"!==typeof window&&Object(r.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(r.e)("token"),Object(r.f)("user"),Object(r.f)("groups"),Object(r.f)("currentGroup");var t=c.a.home;e&&(t="".concat(c.a.home,"?").concat(Object(o.stringify)(e))),window.location.href=t},s=function(){return Object(r.b)("token")},u=function(){return Object(r.c)("user").name},l=function(){var e;return"admin"===(null===(e=Object(r.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var o=n(62),c=n(1);t.a=function(e){var t=e.title;return Object(c.jsx)(o.a,{children:Object(c.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return c.a}));var o,c=n(56),r=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,o=e.setShow;return Object(r.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(r.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(r.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(r.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(r.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return o(!1)},children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(22),s=n(12).d.button(o||(o=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),u=function(e){var t=e.type,n=e.onClick,o=e.className,c=e.children;return Object(r.jsx)(s,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(o),children:c})},l=(n(49),n(50)),d=function(e){var t=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var o=n(1);t.a=function(e){var t=e.src,n=e.alt,c=e.style,r=e.className,a=e.width,i=e.height,s=e.align;return Object(o.jsx)("img",{src:t,alt:n,style:c,className:r,width:a,height:i,align:s})}},50:function(e,t,n){"use strict";n(0);var o=n(1);t.a=function(e){var t=e.type,n=e.name,c=e.value,r=e.id,a=e.className,i=e.onChange,s=e.children,u=e.checked,l=void 0!==u&&u,d=e.placeholder,f=void 0===d?null:d,h=e.disabled,p=void 0!==h&&h,j=e.options,b=void 0===j?null:j,m=e.multiple,O=void 0!==m&&m,v=e.property,g=e.valueProperty,y=e.noDataMessage,x=void 0===y?"No Data Found":y,w=e.defaultValue,N=void 0===w?null:w;return"radio"===t||"checkbox"===t?Object(o.jsxs)("div",{className:"my-0",children:[Object(o.jsx)("input",{type:t,name:n,value:c,className:a&&"mr-2 ".concat(a),onChange:i,checked:l,disabled:p,id:r}),Object(o.jsx)("label",{htmlFor:r,className:"font-medium ml-2",children:s})]}):"select"===t?Object(o.jsxs)("div",{className:"my-0 py-0",children:[s&&Object(o.jsx)("label",{htmlFor:r,className:"font-demi",children:s}),"\u2003",Object(o.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:c,onChange:i,multiple:O&&O,size:O?"15":"",id:r,defaultValue:N,children:b.length>0?b.map((function(e,t){return Object(o.jsx)("option",{value:g?e[g]:e.id,disabled:e.disabled,children:v?e[v]:e},e.id||t)})):Object(o.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("label",{htmlFor:r,className:"font-demi",children:s}),Object(o.jsx)("input",{type:t,name:n,value:c,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:i,checked:l,placeholder:f,id:r})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},54:function(e,t,n){"use strict";var o="".concat("http","://").concat("localhost/repo/api/v2"),c={jobs:{details:function(e){return"".concat(o,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(o,"/jobs")},scheduleReport:function(){return"".concat(o,"/report")},downloadReport:function(e){return"".concat(o,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(o,"/tokens")}},search:{search:function(){return"".concat(o,"/search")}},users:{self:function(){return"".concat(o,"/users/self")},getAll:function(){return"".concat(o,"/users")},getSingle:function(e){return"".concat(o,"/users/").concat(e)},delete:function(e){return"".concat(o,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(o,"/folders")},getSingle:function(e){return"".concat(o,"/folders/").concat(e)},create:function(){return"".concat(o,"/folders")},read:function(e){return"".concat(o,"/folders/").concat(e)},edit:function(e){return"".concat(o,"/folders/").concat(e)},delete:function(e){return"".concat(o,"/folders/").concat(e)},move:function(e){return"".concat(o,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(o,"/uploads")},getId:function(e){return"".concat(o,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(o,"/uploads")}},organize:{uploads:{get:function(){return"".concat(o,"/uploads")},delete:function(e){return"".concat(o,"/uploads/").concat(e)},move:function(e){return"".concat(o,"/uploads/").concat(e)},copy:function(e){return"".concat(o,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(o,"/groups")},getAll:function(){return"".concat(o,"/groups")}}},license:{get:function(){return"".concat(o,"/license")},createCandidateLicense:function(){return"".concat(o,"/license")}},info:{info:function(){return"".concat(o,"/info")},health:function(){return"".concat(o,"/health")}}};t.a=c},55:function(e,t,n){"use strict";var o=n(59),c=n(48),r=n(58),a=n(45),i=n(52),s=n(14);t.a=function e(t){var n,u,l=t.url,d=t.method,f=t.body,h=t.groupName,p=t.headers,j=void 0===p?{}:p,b=t.queryParams,m=t.isMultipart,O=void 0!==m&&m,v=t.noHeaders,g=void 0!==v&&v,y=t.addGroupName,x=void 0===y||y,w=t.retries,N=void 0===w?0:w,S=t.isFile,k=void 0!==S&&S;(n=O?new Headers(Object(c.a)({},j)):new Headers(Object(c.a)({"content-type":"application/json",accept:"application/json"},j)),k&&(n=new Headers(Object(c.a)({},j))),x)&&n.append("groupName",h||Object(s.c)("currentGroup")||(null===(u=Object(s.c)("user"))||void 0===u?void 0:u.default_group));g&&(n={});var C={method:d,headers:n,body:f},F=l;return C.body=f?O?f:JSON.stringify(f):null,b&&(F="".concat(l,"?").concat(Object(r.stringify)(b))),fetch(F,C).then((function(t){if(t.ok){var n,c=Object(o.a)(t.headers.entries());try{for(c.s();!(n=c.n()).done;){var r=n.value;"x-total-pages"===r[0]&&Object(s.h)("pages",r[1])}}catch(u){c.e(u)}finally{c.f()}return k?t:t.json()}return N>0?setTimeout((function(){e({url:l,method:d,headers:j,retries:N-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},60:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(59),c=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*o));return t},r=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},s=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},u=function(e){var t,n=e.split(";"),c="download.txt",r=Object(o.a)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){c=a[1];break}}}catch(i){r.e(i)}finally{r.f()}return c}},64:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return h}));var o=n(54),c=n(45),r=n(55),a=function(e,t,n){var a=o.a.folders.move(t);return Object(r.a)({url:a,method:"PUT",headers:{Authorization:Object(c.a)(),parent:e,action:n}})},i=function(e){return function(e){var t=o.a.folders.getAll();return Object(r.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)()},groupName:e})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=o.a.folders.getSingle(e);return Object(r.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)()}})}(e).then((function(e){return e}))},u=function(e){return function(e){var t=o.a.folders.delete(e);return Object(r.a)({url:t,method:"DELETE",headers:{Authorization:Object(c.a)()}})}(e.id).then((function(e){return e}))},l=function(e){return function(e,t,n){var a=o.a.folders.create();return Object(r.a)({url:a,method:"POST",headers:{Authorization:Object(c.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},d=function(e){return function(e,t,n){var a=o.a.folders.edit(n);return Object(r.a)({url:a,method:"PATCH",headers:{Authorization:Object(c.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return a(t,n,"move").then((function(e){return e}))},h=function(e){var t=e.parent,n=e.id;return a(t,n,"copy").then((function(e){return e}))}}}]);
//# sourceMappingURL=22.7394294a.chunk.js.map