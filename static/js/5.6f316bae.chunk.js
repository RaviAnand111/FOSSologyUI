(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[5],{110:function(e,t,o){"use strict";var n=o(22),c=o(0),a=o(3),r=o(25),s=o(215),i=o(219),l=o(175),d=o(176),u=o(128),b=o(177),j=o(178),h=o(86),f=o(52),p=o(12),m=o(1),g=function(e){var t=e.text,o=e.className,n=Object(c.useContext)(p.a);return Object(m.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",className:o,children:Object(m.jsxs)("g",{children:[Object(m.jsx)("circle",{style:{fill:"white",stroke:n.primaryColor,strokeWidth:1,strokeMiterlimit:10},cx:"20",cy:"20",r:"20"}),Object(m.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",stroke:n.primaryColor,fill:n.primaryColor,strokeWidth:"0.8px",dy:".3em",children:t})]})})},O=o.p+"static/media/logo.45480c8a.svg",x=o(2),v=o(91),y=o(45),w=o(14),S=o(62),k=(o(135),o(173)),I=o(174),N=o(17),C=function(){var e=Object(c.useContext)(N.a),t=e.state,o=e.setTheme;return Object(m.jsxs)("div",{className:"toggle-button--container",children:[Object(m.jsx)("input",{type:"checkbox",className:"toggle-button--checkbox",value:t.theme,id:"checkbox",onChange:function(){o("".concat("light"===t.theme?"dark":"light"))}}),Object(m.jsx)("label",{htmlFor:"checkbox",className:"".concat(t.theme," toggle-button--label"),children:"light"!==t.theme?Object(m.jsx)(k.a,{className:"toggle-button--moon",size:20}):Object(m.jsx)(I.a,{className:"toggle-button--sun",size:22})})]})};t.a=function(){var e,t=Object(c.useState)(Object(w.c)("currentGroup")||(null===(e=Object(w.c)("user"))||void 0===e?void 0:e.default_group)),o=Object(n.a)(t,2),p=o[0],k=o[1],I=Object(a.g)(),N=Object(a.h)(),F=function(e){Object(w.h)("currentGroup",e.target.innerText),k(e.target.innerText)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.a,{expand:"lg",className:"bg-primary-color py-0 pl-0 text-white",sticky:"top",children:[Object(m.jsx)(s.a.Brand,{as:r.b,to:x.a.home,className:"py-0",children:Object(m.jsx)(f.a,{src:O,className:"img-fluid bg-white py-1 px-2",alt:"FOSSology"})}),Object(m.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(s.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(i.a,{className:"mr-auto",children:[Object(m.jsx)(i.a.Link,{as:r.b,to:x.a.home,className:N.pathname===x.a.home&&"active-nav-item",children:"Home"}),Object(y.d)()&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a.Link,{as:r.b,to:x.a.search,className:N.pathname===x.a.search&&"active-nav-item",children:"Search"}),Object(m.jsx)(i.a.Link,{as:r.b,to:x.a.browse,className:N.pathname===x.a.browse&&"active-nav-item",children:"Browse"}),Object(m.jsxs)(l.a,{title:"Upload",id:"uploads",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.file,children:"From File"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.server,children:"From Server"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.url,children:"From URL"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.vcs,children:"From VCS"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.report,children:"Import Report"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.instructions,children:"Instructions"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.oneShotAnalysis,children:"One-Shot Analysis"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.oneShotCopyright,children:"One-Shot Copyright/Email/URL"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.upload.oneShotMonk,children:"One-Shot Monk"})]}),Object(m.jsxs)(l.a,{title:"Jobs",id:"jobs",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.jobs.myRecentJobs,children:"My Recent Jobs"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.jobs.allRecentJobs,children:"All Recent Jobs"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.jobs.scheduleAgents,children:"Schedule Agents"})]}),Object(m.jsxs)(l.a,{title:"Organize",id:"organize",children:[Object(m.jsx)(d.a,{variant:"",drop:"right",title:"Folders",className:"font-regular dropdown-item-bottom w-100",children:Object(m.jsxs)("div",{className:"bg-secondaryColor text-white font-12 py-2",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.folders.create,children:"Create"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.folders.delete,children:"Delete Folder"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.folders.edit,children:"Edit Properties"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.folders.move,children:"Move or Copy"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.folders.unlinkContent,children:"Unlink Content"})]})}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.licenses.candidate,children:"Licenses"}),Object(m.jsx)(d.a,{variant:"",drop:"right",title:"Uploads",className:"font-regular dropdown-item-bottom w-100",children:Object(m.jsxs)("div",{className:"bg-secondaryColor text-white font-12 py-2",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.uploads.delete,children:"Delete Uploaded File"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.uploads.edit,children:"Edit Properties"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.organize.uploads.move,children:"Move or Copy"})]})})]}),Object(y.c)()&&Object(m.jsxs)(l.a,{title:"Admin",id:"admin",children:[Object(m.jsx)(d.a,{variant:"",drop:"right",title:"Groups",className:"font-regular dropdown-item-bottom w-100",children:Object(m.jsxs)("div",{className:"bg-secondaryColor text-white font-12 py-2",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.admin.group.create,children:"Add Group"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.admin.group.delete,children:"Delete Group"})]})}),Object(m.jsx)(d.a,{variant:"",drop:"right",title:"Users",className:"font-regular dropdown-item-bottom w-100",children:Object(m.jsx)("div",{className:"bg-secondaryColor text-white font-12 py-2",children:Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.admin.users.delete,children:"Delete User"})})}),Object(m.jsx)(d.a,{variant:"",drop:"right",title:"License Administration",className:"font-regular dropdown-item-bottom w-100",children:Object(m.jsxs)("div",{className:"bg-secondaryColor text-white font-12 py-2",children:[Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.admin.license.create,children:"Add License"}),Object(m.jsx)(l.a.Item,{href:x.a.admin.license.licenseCSV,download:x.a.admin.license.licenseCSV,children:"CSV Export"}),Object(m.jsx)(l.a.Item,{as:r.b,to:x.a.admin.license.selectLicense,children:"Select License"})]})})]})]})]}),Object(m.jsx)(u.a,{drop:"left",children:Object(m.jsx)(u.a.Toggle,{variant:"link",bsPrefix:"p-0",children:Object(m.jsx)(C,{})})}),Object(m.jsxs)(u.a,{drop:"left",children:[Object(m.jsx)(u.a.Toggle,{variant:"link",bsPrefix:"p-0",children:Object(m.jsx)(b.a,{color:"#fff",size:40,className:"m-2"})}),Object(m.jsxs)(u.a.Menu,{children:[Object(m.jsx)(u.a.Item,{as:r.b,to:x.a.help.about,children:"About"}),Object(m.jsx)(u.a.Item,{as:r.b,to:x.a.help.overview,children:"Getting Started"}),Object(m.jsx)(u.a.Item,{as:r.b,to:x.a.help.licenseBrowser,children:"License Browser"}),Object(m.jsx)(u.a.Item,{href:v.a.fossologyWiki,target:"_blank",rel:"noreferrer",children:"Documentation"}),Object(m.jsx)(u.a.Item,{as:r.b,to:x.a.help.thirdPartyLicenses,children:"Third Party Licenses"})]})]}),Object(h.c)()&&Object(m.jsxs)(u.a,{drop:"left",children:[Object(m.jsx)(u.a.Toggle,{variant:"link",bsPrefix:"p-0",children:Object(m.jsx)(g,{className:"m-2",text:Object(S.c)(p)})}),Object(m.jsx)(u.a.Menu,{children:Object(h.c)().map((function(e){return Object(m.jsx)(u.a.Item,{onClick:F,className:e.name===p&&"active",children:e.name},e.id)}))})]}),Object(m.jsxs)(u.a,{drop:"left",children:[Object(m.jsx)(u.a.Toggle,{variant:"link",bsPrefix:"p-0",children:Object(m.jsx)(j.a,{color:"#fff",size:40,className:"m-2"})}),Object(y.d)()?Object(m.jsxs)(u.a.Menu,{children:[Object(m.jsxs)(u.a.Item,{children:["User: ",Object(m.jsx)("b",{children:Object(y.b)()})]}),Object(m.jsx)(u.a.Divider,{}),Object(m.jsx)(u.a.Item,{onClick:function(){return Object(y.e)(null)},children:"Log out"})]}):Object(m.jsx)(u.a.Menu,{children:Object(m.jsx)(u.a.Item,{onClick:function(){I.push(x.a.home)},children:"Log in"})})]})]})]})})}},135:function(e,t,o){},45:function(e,t,o){"use strict";o.d(t,"d",(function(){return r})),o.d(t,"e",(function(){return s})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return d}));var n=o(58),c=o(2),a=o(14),r=function(){if("undefined"!==typeof window&&Object(a.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},s=function(e){Object(a.e)("token"),Object(a.f)("user"),Object(a.f)("groups"),Object(a.f)("currentGroup");var t=c.a.home;e&&(t="".concat(c.a.home,"?").concat(Object(n.stringify)(e))),window.location.href=t},i=function(){return Object(a.b)("token")},l=function(){return Object(a.c)("user").name},d=function(){var e;return"admin"===(null===(e=Object(a.c)("user"))||void 0===e?void 0:e.accessLevel)}},52:function(e,t,o){"use strict";o(0);var n=o(1);t.a=function(e){var t=e.src,o=e.alt,c=e.style,a=e.className,r=e.width,s=e.height,i=e.align;return Object(n.jsx)("img",{src:t,alt:o,style:c,className:a,width:r,height:s,align:i})}},56:function(e,t,o){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},57:function(e,t,o){"use strict";var n="".concat("http","://").concat("localhost/repo/api/v2"),c={jobs:{details:function(e){return"".concat(n,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(n,"/jobs")},scheduleReport:function(){return"".concat(n,"/report")},downloadReport:function(e){return"".concat(n,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(n,"/tokens")}},search:{search:function(){return"".concat(n,"/search")}},users:{self:function(){return"".concat(n,"/users/self")},getAll:function(){return"".concat(n,"/users")},getSingle:function(e){return"".concat(n,"/users/").concat(e)},delete:function(e){return"".concat(n,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(n,"/folders")},getSingle:function(e){return"".concat(n,"/folders/").concat(e)},create:function(){return"".concat(n,"/folders")},read:function(e){return"".concat(n,"/folders/").concat(e)},edit:function(e){return"".concat(n,"/folders/").concat(e)},delete:function(e){return"".concat(n,"/folders/").concat(e)},move:function(e){return"".concat(n,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(n,"/uploads")},getId:function(e){return"".concat(n,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(n,"/uploads")}},organize:{uploads:{get:function(){return"".concat(n,"/uploads")},delete:function(e){return"".concat(n,"/uploads/").concat(e)},move:function(e){return"".concat(n,"/uploads/").concat(e)},copy:function(e){return"".concat(n,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(n,"/groups")},getAll:function(){return"".concat(n,"/groups")}}},license:{get:function(){return"".concat(n,"/license")},createCandidateLicense:function(){return"".concat(n,"/license")}},info:{info:function(){return"".concat(n,"/info")},health:function(){return"".concat(n,"/health")}}};t.a=c},59:function(e,t,o){"use strict";var n=o(60),c=o(48),a=o(58),r=o(45),s=o(56),i=o(14);t.a=function e(t){var o,l,d=t.url,u=t.method,b=t.credentials,j=void 0!==b&&b,h=t.body,f=t.groupName,p=t.headers,m=void 0===p?{}:p,g=t.queryParams,O=t.isMultipart,x=void 0!==O&&O,v=t.noHeaders,y=void 0!==v&&v,w=t.addGroupName,S=void 0===w||w,k=t.retries,I=void 0===k?0:k,N=t.isFile,C=void 0!==N&&N;(o=x?new Headers(Object(c.a)({},m)):new Headers(Object(c.a)({"content-type":"application/json",accept:"application/json"},m)),C&&(o=new Headers(Object(c.a)({},m))),S)&&o.append("groupName",f||Object(i.c)("currentGroup")||(null===(l=Object(i.c)("user"))||void 0===l?void 0:l.default_group));y&&(o={});var F={method:u,headers:o,body:h},A=d;return F.body=h?x?h:JSON.stringify(h):null,j&&(F.credentials=j),g&&(A="".concat(d,"?").concat(Object(a.stringify)(g))),fetch(A,F).then((function(t){if(t.ok){var o,c=Object(n.a)(t.headers.entries());try{for(c.s();!(o=c.n()).done;){var a=o.value;"x-total-pages"===a[0]&&Object(i.h)("pages",a[1])}}catch(l){c.e(l)}finally{c.f()}return C?t:t.json()}return I>0?setTimeout((function(){e({url:d,method:u,headers:m,retries:I-1})}),1e4):t.json().then((function(e){var o={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(r.e)({message:e.message}):Object(r.e)({message:s.a.forbiddenResource}):Promise.reject(o)}))}))}},62:function(e,t,o){"use strict";o.d(t,"f",(function(){return c})),o.d(t,"a",(function(){return a})),o.d(t,"c",(function(){return r})),o.d(t,"e",(function(){return s})),o.d(t,"d",(function(){return i})),o.d(t,"b",(function(){return l}));var n=o(60),c=function(e){for(var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length,c=0;c<e;c++)t+=o.charAt(Math.floor(Math.random()*n));return t},a=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},r=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},s=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},i=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},l=function(e){var t,o=e.split(";"),c="download.txt",a=Object(n.a)(o);try{for(a.s();!(t=a.n()).done;){var r=t.value.trim().match(/filename="(.*)"/);if(null!=r){c=r[1];break}}}catch(s){a.e(s)}finally{a.f()}return c}},86:function(e,t,o){"use strict";o.d(t,"c",(function(){return s})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return l}));var n=o(57),c=o(45),a=o(59),r=o(14),s=function(){return Object(r.c)("groups")},i=function(){return function(){var e=n.a.admin.groups.getAll();return Object(a.a)({url:e,method:"GET",headers:{Authorization:Object(c.a)()},addGroupName:!1})}().then((function(e){return Object(r.h)("groups",e),e}))},l=function(e){return function(e){var t=n.a.admin.groups.create();return Object(a.a)({url:t,method:"POST",headers:{Authorization:Object(c.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},91:function(e,t,o){"use strict";t.a={fossologyWiki:"https://github.com/fossology/fossology/wiki",jobSchedulerWiki:"https://github.com/fossology/fossology/wiki/Job-Scheduler",fossologyWebsite:"https://www.fossology.org/",latestReleaseGithub:"https://github.com/fossology/fossology/releases/tag/3.10.0",latestReleaseDownload:"https://api.github.com/repos/fossology/fossology/zipball/3.10.0"}}}]);
//# sourceMappingURL=5.6f316bae.chunk.js.map