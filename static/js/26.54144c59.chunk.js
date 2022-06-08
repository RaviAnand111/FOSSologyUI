(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[26],{115:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var c=n(54),o=n(45),r=n(55),a=function(e){return function(e){var t=e.page,n=e.limit,a=e.kind,s=c.a.license.get();return Object(r.a)({url:s,method:"GET",headers:{Authorization:Object(o.a)(),page:t,limit:n},queryParams:{kind:a}})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=e.shortName,n=e.fullName,a=e.text,s=e.risk,l=e.licenseUrl,i=e.mergeRequest,d=c.a.license.createCandidateLicense();return Object(r.a)({url:d,method:"POST",headers:{Authorization:Object(o.a)()},body:{shortName:t,fullName:n,text:a,risk:s,url:l,isCandidate:!0,mergeRequest:i}})}(e).then((function(e){return e}))}},194:function(e,t,n){"use strict";n.r(t);var c=n(57),o=n(48),r=n(21),a=n(0),s=n(3),l=n(46),i=n(47),d=n(115),u=n(2),f=n(1);t.default=function(){var e=Object(s.g)(),t=Object(a.useState)({page:1,limit:10,kind:"candidate"}),n=Object(r.a)(t,2),h=n[0],j=n[1],b=Object(a.useState)(),m=Object(r.a)(b,2),p=m[0],O=m[1],g=Object(a.useState)(!1),x=Object(r.a)(g,2),v=x[0],y=x[1],N=Object(a.useState)({type:"success",text:""}),w=Object(r.a)(N,2),S=w[0],k=w[1];return Object(a.useEffect)((function(){Object(d.b)(h).then((function(e){O(e)})).catch((function(e){k({type:"danger",text:e.message}),y(!0)}))}),[h]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{title:"Candidate Licenses"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[v&&Object(f.jsx)(i.a,{type:S.type,setShow:y,message:S.text}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12",children:[Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Candidate Licenses"}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)(i.c,{name:"limit",type:"select",onChange:function(e){return function(e){j(Object(o.a)(Object(o.a)({},h),{},Object(c.a)({},e.target.name,e.target.value)))}(e)},options:[{id:10,value:10},{id:25,value:25},{id:50,value:50},{id:100,value:100}],property:"value"}),Object(f.jsx)("input",{type:"search",className:"form-control w-25 mt-4",placeholder:"Search"})]}),Object(f.jsxs)("table",{className:"table table-striped text-primary-color font-size-medium table-responsive-md table-bordered",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"font-bold text-center font-size-sub-heading",children:[Object(f.jsx)("th",{children:"Edit"}),Object(f.jsx)("th",{children:"Short Name"}),Object(f.jsx)("th",{children:"Full Name"}),Object(f.jsx)("th",{children:"Text"}),Object(f.jsx)("th",{children:"URL"}),Object(f.jsx)("th",{children:"Merge Request"})]})}),Object(f.jsx)("tbody",{children:p&&p.map((function(e){return Object(f.jsxs)("tr",{className:"text-center",children:[Object(f.jsx)("td",{}),Object(f.jsx)("td",{children:e.shortName}),Object(f.jsx)("td",{children:e.fullName}),Object(f.jsx)("td",{className:"py-0 px-0 candidate-license-text",children:Object(f.jsx)("textarea",{disabled:!0,className:"w-100 px-3",value:e.text})}),Object(f.jsx)("td",{children:Object(f.jsx)("a",{href:e.url,children:e.url})}),Object(f.jsx)("td",{})]},e.id)}))})]}),Object(f.jsx)(i.b,{type:"button",onClick:function(){return e.push(u.a.organize.licenses.create)},className:"mt-4",children:"New License"})]})})]})]})}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return d}));var c=n(58),o=n(2),r=n(14),a=function(){if("undefined"!==typeof window&&Object(r.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},s=function(e){Object(r.e)("token"),Object(r.f)("user"),Object(r.f)("groups"),Object(r.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(c.stringify)(e))),window.location.href=t},l=function(){return Object(r.b)("token")},i=function(){return Object(r.c)("user").name},d=function(){var e;return"admin"===(null===(e=Object(r.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var c=n(62),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(c.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return d.a})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return o.a}));var c,o=n(56),r=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,c=e.setShow;return Object(r.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(r.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(r.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(r.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(r.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(r.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return c(!1)},children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},s=n(22),l=n(12).d.button(c||(c=Object(s.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),i=function(e){var t=e.type,n=e.onClick,c=e.className,o=e.children;return Object(r.jsx)(l,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(c),children:o})},d=(n(49),n(50)),u=function(e){var t=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,r=e.className,a=e.width,s=e.height,l=e.align;return Object(c.jsx)("img",{src:t,alt:n,style:o,className:r,width:a,height:s,align:l})}},50:function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,r=e.id,a=e.className,s=e.onChange,l=e.children,i=e.checked,d=void 0!==i&&i,u=e.placeholder,f=void 0===u?null:u,h=e.disabled,j=void 0!==h&&h,b=e.options,m=void 0===b?null:b,p=e.multiple,O=void 0!==p&&p,g=e.property,x=e.valueProperty,v=e.noDataMessage,y=void 0===v?"No Data Found":v,N=e.defaultValue,w=void 0===N?null:N;return"radio"===t||"checkbox"===t?Object(c.jsxs)("div",{className:"my-0",children:[Object(c.jsx)("input",{type:t,name:n,value:o,className:a&&"mr-2 ".concat(a),onChange:s,checked:d,disabled:j,id:r}),Object(c.jsx)("label",{htmlFor:r,className:"font-medium ml-2",children:l})]}):"select"===t?Object(c.jsxs)("div",{className:"my-0 py-0",children:[l&&Object(c.jsx)("label",{htmlFor:r,className:"font-demi",children:l}),"\u2003",Object(c.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:o,onChange:s,multiple:O&&O,size:O?"15":"",id:r,defaultValue:w,children:m.length>0?m.map((function(e,t){return Object(c.jsx)("option",{value:x?e[x]:e.id,disabled:e.disabled,children:g?e[g]:e},e.id||t)})):Object(c.jsx)("option",{className:"font-demi",disabled:!0,children:y})})]}):Object(c.jsxs)("div",{className:"my-2",children:[Object(c.jsx)("label",{htmlFor:r,className:"font-demi",children:l}),Object(c.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:s,checked:d,placeholder:f,id:r})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},54:function(e,t,n){"use strict";var c="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(c,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(c,"/jobs")},scheduleReport:function(){return"".concat(c,"/report")},downloadReport:function(e){return"".concat(c,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(c,"/tokens")}},search:{search:function(){return"".concat(c,"/search")}},users:{self:function(){return"".concat(c,"/users/self")},getAll:function(){return"".concat(c,"/users")},getSingle:function(e){return"".concat(c,"/users/").concat(e)},delete:function(e){return"".concat(c,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(c,"/folders")},getSingle:function(e){return"".concat(c,"/folders/").concat(e)},create:function(){return"".concat(c,"/folders")},read:function(e){return"".concat(c,"/folders/").concat(e)},edit:function(e){return"".concat(c,"/folders/").concat(e)},delete:function(e){return"".concat(c,"/folders/").concat(e)},move:function(e){return"".concat(c,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(c,"/uploads")},getId:function(e){return"".concat(c,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(c,"/uploads")}},organize:{uploads:{get:function(){return"".concat(c,"/uploads")},delete:function(e){return"".concat(c,"/uploads/").concat(e)},move:function(e){return"".concat(c,"/uploads/").concat(e)},copy:function(e){return"".concat(c,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(c,"/groups")},getAll:function(){return"".concat(c,"/groups")}}},license:{get:function(){return"".concat(c,"/license")},createCandidateLicense:function(){return"".concat(c,"/license")}},info:{info:function(){return"".concat(c,"/info")},health:function(){return"".concat(c,"/health")}}};t.a=o},55:function(e,t,n){"use strict";var c=n(59),o=n(48),r=n(58),a=n(45),s=n(52),l=n(14);t.a=function e(t){var n,i,d=t.url,u=t.method,f=t.body,h=t.groupName,j=t.headers,b=void 0===j?{}:j,m=t.queryParams,p=t.isMultipart,O=void 0!==p&&p,g=t.noHeaders,x=void 0!==g&&g,v=t.addGroupName,y=void 0===v||v,N=t.retries,w=void 0===N?0:N,S=t.isFile,k=void 0!==S&&S;(n=O?new Headers(Object(o.a)({},b)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},b)),k&&(n=new Headers(Object(o.a)({},b))),y)&&n.append("groupName",h||Object(l.c)("currentGroup")||(null===(i=Object(l.c)("user"))||void 0===i?void 0:i.default_group));x&&(n={});var C={method:u,headers:n,body:f},F=d;return C.body=f?O?f:JSON.stringify(f):null,m&&(F="".concat(d,"?").concat(Object(r.stringify)(m))),fetch(F,C).then((function(t){if(t.ok){var n,o=Object(c.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var r=n.value;"x-total-pages"===r[0]&&Object(l.h)("pages",r[1])}}catch(i){o.e(i)}finally{o.f()}return k?t:t.json()}return w>0?setTimeout((function(){e({url:d,method:u,headers:b,retries:w-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:s.a.forbiddenResource}):Promise.reject(n)}))}))}}}]);
//# sourceMappingURL=26.54144c59.chunk.js.map