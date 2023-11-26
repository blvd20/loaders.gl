"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4043],{63235:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>A,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var t=o(85893),s=o(11151);const n={},a="GeoArrowLoader",d={id:"modules/arrow/api-reference/geoarrow-loader",title:"GeoArrowLoader",description:"arrow-logo",source:"@site/../docs/modules/arrow/api-reference/geoarrow-loader.md",sourceDirName:"modules/arrow/api-reference",slug:"/modules/arrow/api-reference/geoarrow-loader",permalink:"/docs/modules/arrow/api-reference/geoarrow-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/arrow/api-reference/geoarrow-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArrowWriter",permalink:"/docs/modules/arrow/api-reference/arrow-writer"},next:{title:"BSONLoader",permalink:"/docs/modules/bson/api-reference/bson-loader"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function i(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"geoarrowloader",children:"GeoArrowLoader"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"arrow-logo",src:o(22301).Z+"",width:"200",height:"73"})}),"\n",(0,t.jsx)("p",{class:"badges",children:(0,t.jsx)("img",{src:"https://img.shields.io/badge/From-v4.1-blue.svg?style=flat-square",alt:"From-v4.1"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"GeoArrowLoader"})," parses Apache Arrow columnar table format files, and looks for ",(0,t.jsx)(r.code,{children:"GeoArrow"})," type extensions to parse geometries from the table."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Loader"}),(0,t.jsx)(r.th,{children:"Characteristic"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"File Format"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arrow.apache.org/docs/format/Columnar.html#serialization-and-interprocess-communication-ipc",children:"IPC: Encapsulated Message Format"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Data Format"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/specifications/category-table",children:"Geometry Table"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"File Extension"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:".arrow"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"File Type"}),(0,t.jsx)(r.td,{children:"Binary"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Decoder Type"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"load"}),", ",(0,t.jsx)(r.code,{children:"parse"}),", ",(0,t.jsx)(r.code,{children:"parseSync"}),", ",(0,t.jsx)(r.code,{children:"parseInBatches"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Worker Thread Support"}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Streaming Support"}),(0,t.jsx)(r.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import {GeoArrowLoader} from '@loaders.gl/arrow';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, GeoArrowLoader, options);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(r.table,{children:(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Option"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})})})]})}function A(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},22301:(e,r,o)=>{o.d(r,{Z:()=>t});const t="data:image/png;base64,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"},11151:(e,r,o)=>{o.d(r,{Z:()=>d,a:()=>a});var t=o(67294);const s={},n=t.createContext(s);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);