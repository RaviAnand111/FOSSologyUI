(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[35],{114:function(e,n,t){"use strict";var a=t(9),c=t.n(a),r=t(54),o=t(45),i=t(55),s=function(e){var n=e.folderId,t=e.page,a=e.limit,c=e.recursive,s=r.a.browse.get();return Object(i.a)({url:s,method:"GET",headers:{Authorization:Object(o.a)(),page:t,limit:a},queryParams:{folderId:n,recursive:c}})};s.propTypes={page:c.a.number,limit:c.a.number,folderId:c.a.number,recursive:c.a.bool};var u=s,d=t(14);n.a=function(e){return u(e).then((function(e){return{res:e,pages:Object(d.c)("pages")}}))}},188:function(e,n,t){"use strict";t.r(n);var a=t(57),c=t(48),r=t(21),o=t(0),i=t(52),s=t(46),u=t(87),d=t(47),l=t(64),h=t(88),p=t(114),j=t(14),f=t(1);n.default=function(){var e,n={folderId:1,uploadId:1},t={analysis:Object(j.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(e=Object(j.c)("user"))||void 0===e?void 0:e.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},b={page:1,limit:100,recursive:!1},m=Object(o.useState)(n),g=Object(r.a)(m,2),O=g[0],y=g[1],k=Object(o.useState)([{folderid:0,foldername:"string",id:0,description:"string",uploadname:"string",uploaddate:"string",hash:{sha1:"81fe8bfe87576c3ecb22426f8e57847382917acf",md5:"e2fc714c4727ee9395f324cd2e7f331f",sha256:"88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",size:0}}]),v=Object(r.a)(k,2),x=v[0],C=v[1],w=Object(o.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),S=Object(r.a)(w,2),A=S[0],I=S[1],L=Object(o.useState)(t),M=Object(r.a)(L,2),N=M[0],E=M[1],D=Object(o.useState)(!1),R=Object(r.a)(D,2),G=R[0],F=R[1],T=Object(o.useState)(!1),z=Object(r.a)(T,2),_=z[0],P=z[1],U=Object(o.useState)(),V=Object(r.a)(U,2),J=V[0],q=V[1],B=function(e){y(Object(c.a)(Object(c.a)({},O),{},Object(a.a)({},e.target.name,e.target.value)))};return Object(o.useEffect)((function(){Object(l.e)().then((function(e){I(e)}))}),[]),Object(o.useEffect)((function(){Object(p.a)(Object(c.a)(Object(c.a)({},b),{},{folderId:O.folderId})).then((function(e){C(e.res)}))}),[O.folderId]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{title:"Schedule an Analysis"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[_&&Object(f.jsx)(d.a,{type:J.type,setShow:P,message:J.text}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Schedule an Analysis"}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Select an uploaded file for additional analysis"}),Object(f.jsxs)("form",{className:"my-3",children:[Object(f.jsx)(d.c,{type:"select",name:"folderId",id:"jobs-schedule-agents-folder-id",onChange:B,options:A,property:"name",value:null===A||void 0===A?void 0:A.id,children:"Select the folder containing the upload you wish to analyze:"}),Object(f.jsx)(d.c,{type:"select",name:"uploadId",id:"jobs-schedule-agents-upload-id",onChange:B,options:x,property:"uploadname",value:null===x||void 0===x?void 0:x.id,children:"Select the upload to analyze:"}),Object(f.jsx)(u.a,{analysis:N.analysis,decider:N.decider,reuse:N.reuse,handleChange:B,handleScanChange:function(e){var n=e.target.name;Object.keys(N.analysis).find((function(e){return e===n}))?E(Object(c.a)(Object(c.a)({},N),{},{analysis:Object(c.a)(Object(c.a)({},N.analysis),{},Object(a.a)({},e.target.name,e.target.checked))})):Object.keys(N.decider).find((function(e){return e===n}))?E(Object(c.a)(Object(c.a)({},N),{},{decider:Object(c.a)(Object(c.a)({},N.decider),{},Object(a.a)({},e.target.name,e.target.checked))})):E(Object(c.a)(Object(c.a)({},N),{},{reuse:Object(c.a)(Object(c.a)({},N.reuse),{},Object(a.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:parseInt(e.target.value,10)||e.target.value))}))}}),Object(f.jsx)(d.b,{type:"submit",onClick:function(e){e.preventDefault(),F(!0),Object(h.b)(O.folderId,O.uploadId,N).then((function(){q({type:"success",text:i.a.jobsAdded}),y(n),E(t)})).catch((function(e){q({type:"danger",text:e.message})})).finally((function(){F(!1),P(!0)}))},className:"mt-4",children:G?Object(f.jsx)(d.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Upload"})]})]})})]})]})}},60:function(e,n,t){"use strict";t.d(n,"f",(function(){return c})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(59),c=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,c=0;c<e;c++)n+=t.charAt(Math.floor(Math.random()*a));return n},r=function(e){return Date.prototype.addDays=function(e){var n=new Date(this.valueOf());return n.setDate(n.getDate()+e),n},(new Date).addDays(e).toISOString().split("T")[0]},o=function(e){if(!e)return e;var n=e.split(" ");return 1===n.length?n[0].substring(0,2).toUpperCase():n.map((function(e,n){return n<3?e[0]:null})).join("").toUpperCase()},i=function(e,n){window.scrollTo({top:0}),n({type:"danger",text:e.message})},s=function(e){var n=e.match(/report\/([0-9]+)/);return null!=n?n[1]:null},u=function(e){var n,t=e.split(";"),c="download.txt",r=Object(a.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.trim().match(/filename="(.*)"/);if(null!=o){c=o[1];break}}}catch(i){r.e(i)}finally{r.f()}return c}},72:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(54),c=t(45),r=t(55),o=t(14),i=function(){return Object(o.c)("groups")},s=function(){return function(){var e=a.a.admin.groups.getAll();return Object(r.a)({url:e,method:"GET",headers:{Authorization:Object(c.a)()},addGroupName:!1})}().then((function(e){return Object(o.h)("groups",e),e}))},u=function(e){return function(e){var n=a.a.admin.groups.create();return Object(r.a)({url:n,method:"POST",headers:{Authorization:Object(c.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},87:function(e,n,t){"use strict";var a=t(0),c=t(47),r=t(1);var o=function(e){var n=e.ignoreScm,t=e.handleChange;return Object(r.jsx)("div",{id:"upload-ignore-files",className:"mt-4",children:Object(r.jsxs)(c.c,{type:"checkbox",checked:n,name:"ignoreScm",id:"upload-ignore-scm",onChange:function(e){return t(e)},children:["Ignore SCM files (Git, SVN, TFS) and files with particular Mimetype\xa0",Object(r.jsx)(c.e,{title:"Configure mimetypes from Admin-Customize-Skip MimeTypes from scanning"})]})})};var i=function(e){var n=e.accessLevel,t=e.handleChange;return Object(r.jsxs)("div",{id:"upload-access-level",className:"mt-4",children:[Object(r.jsxs)(c.c,{type:"radio",value:"private",name:"accessLevel",id:"upload-access-level-private",checked:"private"===n,onChange:function(e){return t(e)},children:["Visible only for active group\xa0",Object(r.jsx)(c.e,{title:"which is the currently selected group"})]}),Object(r.jsxs)(c.c,{type:"radio",value:"protected",name:"accessLevel",id:"upload-access-level-protected",checked:"protected"===n,onChange:function(e){return t(e)},children:["Visible for all groups\xa0",Object(r.jsx)(c.e,{title:"which are accessible by you now"})]}),Object(r.jsxs)(c.c,{type:"radio",value:"public",name:"accessLevel",id:"upload-access-level-public",checked:"public"===n,onChange:function(e){return t(e)},children:["Make Public\xa0",Object(r.jsx)(c.e,{title:"visible for all users"})]})]})},s=t(50);var u=function(e){var n=e.analysis,t=e.handleChange;return Object(r.jsxs)("div",{id:"uplod-optional-analysis",className:"mt-4",children:[Object(r.jsx)("p",{className:"font-demi",children:"Select optional analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.bucket,name:"bucket",id:"upload-analysis-bucket",onChange:function(e){return t(e)},children:"Bucket Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.copyrightEmailAuthor,name:"copyrightEmailAuthor",id:"upload-analysis-copyright-email-author",onChange:function(e){return t(e)},children:"Copyright/Email/URL/Author Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.ecc,name:"ecc",id:"upload-analysis-ecc",onChange:function(e){return t(e)},children:"ECC Analysis, scanning for text fragments potentially relevant for export control"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.keyword,name:"keyword",id:"upload-analysis-keyword",onChange:function(e){return t(e)},children:"Keyword Analysis"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.mime,name:"mime",id:"upload-analysis-mime",onChange:function(e){return t(e)},children:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.monk,name:"monk",id:"upload-analysis-monk",onChange:function(e){return t(e)},children:"Monk License Analysis, scanning for licenses performing a text comparison"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.nomos,name:"nomos",id:"upload-analysis-nomos",onChange:function(e){return t(e)},children:"Nomos License Analysis, scanning for licenses using regular expressions"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.ojo,name:"ojo",id:"upload-analysis-ojo",onChange:function(e){return t(e)},children:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier"}),Object(r.jsx)(s.a,{type:"checkbox",checked:n.package,name:"package",id:"upload-analysis-package",onChange:function(e){return t(e)},children:"Package Analysis (Parse package headers)"})]})};var d=function(e){var n=e.decider,t=e.handleChange;return Object(r.jsxs)("div",{id:"upload-concluded-license-decider",className:"mt-4",children:[Object(r.jsxs)("p",{className:"font-demi",children:["Automatic Concluded License Decider,",Object(r.jsx)(c.e,{title:"only for relevant files"})," based on"]}),Object(r.jsx)(c.c,{type:"checkbox",checked:n.nomosMonk,name:"nomosMonk",id:"upload-decider-nomos-monk",onChange:function(e){return t(e)},children:"... scanners matches if all Nomos findings are within the Monk findings"}),Object(r.jsx)(c.c,{type:"checkbox",checked:n.ojoDecider,name:"ojoDecider",id:"upload-decider-ojo-decider",onChange:function(e){return t(e)},children:".. scanners matches if Ojo findings are no contradiction with other findings"}),Object(r.jsx)(c.c,{type:"checkbox",checked:n.bulkReused,name:"bulkReused",id:"upload-decider-bulk-reused",onChange:function(e){return t(e)},children:"... bulk phrases from reused packages"}),Object(r.jsx)(c.c,{type:"checkbox",checked:n.newScanner,name:"newScanner",id:"upload-decider-new-scanner",onChange:function(e){return t(e)},children:"... new scanner results, i.e., decisions were marked as work in progress if new scanner finds additional licenses"})]})},l=t(57),h=t(48),p=t(21),j=t(64),f=t(89),b=t(72),m=t(52),g=function(e){var n=e.reuse,t=e.handleChange,o=Object(a.useState)({groupList:[{id:3,name:"fossy"}],folderList:[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],uploadList:[{folderId:1,uploadId:null,uploadName:"",uploadDescription:""}],reuseFolder:1}),i=Object(p.a)(o,2),s=i[0],u=i[1];Object(a.useEffect)((function(){u((function(e){return Object(h.a)(Object(h.a)({},e),{},{groupList:Object(b.c)()})}))}),[]),Object(a.useEffect)((function(){Object(j.e)(n.reuseGroup).then((function(e){u((function(n){return Object(h.a)(Object(h.a)({},n),{},{folderList:e})}))})).catch((function(){}))}),[n.reuseGroup]),Object(a.useEffect)((function(){Object(f.c)(s.reuseFolder,n.reuseGroup).then((function(e){u((function(n){return Object(h.a)(Object(h.a)({},n),{},{uploadList:e})}))})).catch((function(){}))}),[n.reuseGroup,s.reuseFolder]);return Object(r.jsxs)("div",{id:"upload-reuse",className:"mt-4",children:[Object(r.jsxs)("p",{className:"font-demi",children:["(Optional) Reuse",Object(r.jsx)(c.e,{title:"copy clearing decisions if there is the same file hash between two files"})]}),Object(r.jsx)(c.c,{type:"select",name:"reuseGroup",id:"upload-file-reuse-group",onChange:t,options:s.groupList,value:n.reuseGroup,property:"name",valueProperty:"name",noDataMessage:m.a.noGroup,children:"Select the reuse group:"}),Object(r.jsx)(c.c,{type:"select",name:"reuseFolder",id:"upload-file-reuse-folder",onChange:function(e){u((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))},options:s.folderList,value:s.reuseFolder,property:"name",noDataMessage:m.a.noFolder,children:"Select the reuse folder:"}),Object(r.jsx)(c.c,{type:"select",name:"reuseUpload",id:"upload-file-reuse-upload",onChange:t,options:s.uploadList,value:parseInt(n.reuseUpload,10),property:"uploadname",valueProperty:"id",noDataMessage:m.a.noUploads,children:"Select the reuse upload:"}),Object(r.jsxs)(c.c,{type:"checkbox",checked:n.reuseEnhanced,name:"reuseEnhanced",id:"upload-file-reuse-enhanced",onChange:t,children:["Enhanced reuse (slower)",Object(r.jsx)(c.e,{title:"will copy a clearing decision if the two files differ by one line determined by a diff tool"})]}),Object(r.jsxs)(c.c,{type:"checkbox",checked:n.reuseMain,name:"reuseMain",id:"upload-file-reuse-main",onChange:t,children:["Reuse main license/s",Object(r.jsx)(c.e,{title:"will copy a main license decision if any"})]}),Object(r.jsxs)(c.c,{type:"checkbox",checked:n.reuseReport,name:"reuseReport",id:"upload-file-reuse-report",onChange:t,children:["Reuse report configuration settings",Object(r.jsx)(c.e,{title:"use to copy all the information from conf page(if any)"})]}),Object(r.jsxs)(c.c,{type:"checkbox",checked:n.reuseCopyright,name:"reuseCopyright",id:"upload-file-reuse-copyright",onChange:t,children:["Reuse edited and deactivated copyrights",Object(r.jsx)(c.e,{title:"use to copy edited and deactivated copyrights from the reused package"})]})]})};n.a=function(e){var n=e.accessLevel,t=e.ignoreScm,a=e.analysis,c=e.decider,s=e.reuse,l=e.handleChange,h=e.handleScanChange;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(o,{ignoreScm:t,handleChange:l}),n&&Object(r.jsx)(i,{accessLevel:n,handleChange:l}),a&&Object(r.jsx)(u,{analysis:a,handleChange:h}),c&&Object(r.jsx)(d,{decider:c,handleChange:h}),s&&Object(r.jsx)(g,{reuse:s,handleChange:h})]})}},88:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(54),c=t(45),r=t(55),o=t(60),i=function(e,n,t){return function(e,n,t){var o=a.a.jobs.scheduleAnalysis(),i=null===t||void 0===t?void 0:t.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,h=i.mime,p=i.monk,j=i.nomos,f=i.ojo,b=null===t||void 0===t?void 0:t.decider,m=b.nomosMonk,g=b.bulkReused,O=b.newScanner,y=b.ojoDecider,k=null===t||void 0===t?void 0:t.reuse,v=k.reuseUpload,x=k.reuseGroup,C=k.reuseMain,w=k.reuseEnhanced,S=k.reuseReport,A=k.reuseCopyright;return Object(r.a)({url:o,method:"POST",headers:{Authorization:Object(c.a)(),folderId:e,uploadId:n},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:h,monk:p,nomos:j,ojo:f,package:t.analysis.package},decider:{nomos_monk:m,bulk_reused:g,new_scanner:O,ojo_decider:y},reuse:{reuse_upload:v,reuse_group:x,reuse_main:C,reuse_enhanced:w,reuse_report:S,reuse_copyright:A}}})}(e,n,t).then((function(e){return e}))},s=function(e,n){return function(e,n){var t=a.a.jobs.scheduleReport();return Object(r.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)(),uploadId:e,reportFormat:n}})}(e,n).then((function(e){return e}))},u=function(e){var n=Object(o.d)(e);return null===n?null:function(e){var n=a.a.jobs.downloadReport(e);return Object(r.a)({url:n,method:"GET",headers:{Authorization:Object(c.a)()},isFile:!0})}(n).then((function(e){return e}))}}}]);
//# sourceMappingURL=35.5a2fdd77.chunk.js.map