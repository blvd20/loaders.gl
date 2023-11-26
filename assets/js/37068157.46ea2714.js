"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5391],{61162:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=s(85893),n=s(11151);const o={},r="Overview",d={id:"modules/polyfills/api-reference/README",title:"Overview",description:"The @loaders.gl/polyfills module installs support for Node.js. This module should be imported before you call any loaders.gl functionality under Node.js",source:"@site/../docs/modules/polyfills/api-reference/README.md",sourceDirName:"modules/polyfills/api-reference",slug:"/modules/polyfills/api-reference/",permalink:"/docs/modules/polyfills/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/polyfills/api-reference/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@loaders.gl/pmtiles",permalink:"/docs/modules/pmtiles/"},next:{title:"Overview",permalink:"/docs/modules/shapefile/"}},t={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Deprecated polyfills",id:"deprecated-polyfills",level:2},{value:"fetch Polyfill",id:"fetch-polyfill",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Attribution",id:"attribution",level:2}];function a(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(l.p,{children:["The ",(0,i.jsx)(l.code,{children:"@loaders.gl/polyfills"})," module installs support for Node.js. This module should be imported before you call any loaders.gl functionality under Node.js"]}),"\n",(0,i.jsx)(l.p,{children:"loaders.gl is based on the HTML5 API provided by modern, evergreen browsers."}),"\n",(0,i.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"npm install @loaders.gl/polyfills\n"})}),"\n",(0,i.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(l.p,{children:["Just import ",(0,i.jsx)(l.code,{children:"@loaders.gl/polyfills"})," before you start using other loaders.gl modules."]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-typescript",children:"import '@loaders.gl/polyfills';\nimport '@loaders.gl/core';\n"})}),"\n",(0,i.jsx)(l.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(l.p,{children:"The polyfills module installs the following capabilities."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"fetching files from Node file system"}),"\n",(0,i.jsx)(l.li,{children:"Node Filesystem implementation"}),"\n",(0,i.jsx)(l.li,{children:"Node ReadableFile and WritableFile implementations"}),"\n",(0,i.jsx)(l.li,{children:"Node Crypto class"}),"\n",(0,i.jsx)(l.li,{children:"Node Stream support"}),"\n",(0,i.jsx)(l.li,{children:"Node library loading"}),"\n",(0,i.jsx)(l.li,{children:"Image parsing and encoding under Node.js\n|"}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"deprecated-polyfills",children:"Deprecated polyfills"}),"\n",(0,i.jsxs)(l.p,{children:["Before Node v18, ",(0,i.jsx)(l.code,{children:"fetch"})," needed to be polyfilled. The ",(0,i.jsx)(l.code,{children:"@loaders.gl/polyfills"})," module still conditionally installs a fetch polyfill on Node 16, but this is expected to be removed in next major release."]}),"\n",(0,i.jsx)(l.h3,{id:"fetch-polyfill",children:"fetch Polyfill"}),"\n",(0,i.jsxs)(l.p,{children:["The Node.js ",(0,i.jsx)(l.code,{children:"fetch"}),", ",(0,i.jsx)(l.code,{children:"Response"})," and ",(0,i.jsx)(l.code,{children:"Headers"})," polyfills supports a large subset of the browser fetch API, including:"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"Response.text()"}),", ",(0,i.jsx)(l.code,{children:"Response.arrayBuffer()"}),", ",(0,i.jsx)(l.code,{children:"Response.json()"})]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"Response.body"})," stream"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"headers"}),", ",(0,i.jsx)(l.code,{children:"status"}),", ",(0,i.jsx)(l.code,{children:"statusText"})," etc."]}),"\n",(0,i.jsx)(l.li,{children:"data uri / base64 decoding"}),"\n",(0,i.jsxs)(l.li,{children:["automatic gzip, brotli and deflate decompression support for responses with ",(0,i.jsx)(l.code,{children:"content-encoding"})," headers."]}),"\n",(0,i.jsxs)(l.li,{children:["Files ending with ",(0,i.jsx)(l.code,{children:".gz"})," are automatically decompressed with gzip decompression (this is only done on Node.js, in the browser the content-encoding header must be set)."]}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["The Node.js ",(0,i.jsx)(l.code,{children:"fetch"})," is able to follow 30X redirect: if ",(0,i.jsx)(l.code,{children:"Response"})," has status 300-399 and ",(0,i.jsx)(l.code,{children:"location"})," header is set, the ",(0,i.jsx)(l.code,{children:"fetch"})," polyfill re-requests data from ",(0,i.jsx)(l.code,{children:"location"}),"."]}),"\n",(0,i.jsx)(l.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"The polyfills module can safely be imported in the browser. It is designed to be a no-op in this case, though if you are using new cutting-edge bundlers, they may not respect this configuration."}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"attribution",children:"Attribution"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["The ",(0,i.jsx)(l.code,{children:"Header"})," polyfill (for Node.js ",(0,i.jsx)(l.code,{children:"fetch"}),") is a fork of the implementation in ",(0,i.jsx)(l.a,{href:"https://github.com/github/fetch",children:"https://github.com/github/fetch"})," (MIT license)."]}),"\n",(0,i.jsxs)(l.li,{children:["The ",(0,i.jsx)(l.code,{children:"Blob"})," and ",(0,i.jsx)(l.code,{children:"File"})," polyfills are forks of @gozala's ",(0,i.jsx)(l.a,{href:"https://github.com/Gozala/web-blob",children:(0,i.jsx)(l.code,{children:"web-blob"})})," and ",(0,i.jsx)(l.a,{href:"https://github.com/Gozala/web-file",children:(0,i.jsx)(l.code,{children:"web-file"})})," modules respectively, under MIT license."]}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,l,s)=>{s.d(l,{Z:()=>d,a:()=>r});var i=s(67294);const n={},o=i.createContext(n);function r(e){const l=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:l},e.children)}}}]);