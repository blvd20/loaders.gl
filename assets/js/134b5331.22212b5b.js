"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6390],{18406:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var t=a(85893),o=a(11151);const i={},s="Loader Categories",n={id:"developer-guide/loader-categories",title:"Loader Categories",description:"To simplify working with multiple similar formats, loaders and writers in loaders.gl are grouped into categories.",source:"@site/../docs/developer-guide/loader-categories.md",sourceDirName:"developer-guide",slug:"/developer-guide/loader-categories",permalink:"/docs/developer-guide/loader-categories",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/developer-guide/loader-categories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Writers",permalink:"/docs/developer-guide/using-writers"},next:{title:"Using Worker Loaders",permalink:"/docs/developer-guide/using-worker-loaders"}},d={},c=[{value:"Categories and Loader Registration",id:"categories-and-loader-registration",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Writers and Categories",id:"writers-and-categories",level:2},{value:"Accessing Format-Specific Data",id:"accessing-format-specific-data",level:2},{value:"Available Categories",id:"available-categories",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"loader-categories",children:"Loader Categories"}),"\n",(0,t.jsxs)(r.p,{children:["To simplify working with multiple similar formats, loaders and writers in loaders.gl are grouped into ",(0,t.jsx)(r.em,{children:"categories"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"The idea is that many loaders return very similar data (e.g. point clouds loaders), which makes it possible to represent the loaded data in the same data structure, letting applications handle the output from multiple loaders without"}),"\n",(0,t.jsx)(r.p,{children:"When a loader is documented as belonging to a specifc category, it converts the parsed data into the common format for that category. This allows an application to support multiple formats with a single code path, since all the loaders will return similar data structures."}),"\n",(0,t.jsx)(r.h2,{id:"categories-and-loader-registration",children:"Categories and Loader Registration"}),"\n",(0,t.jsx)(r.p,{children:"The fact that loaders belong to categories enable applications to flexibly register new loaders in the same category."}),"\n",(0,t.jsx)(r.p,{children:"For instance, once an application has added support for one loader in a category, other loaders in the same category can be registered during application startup."}),"\n",(0,t.jsx)(r.p,{children:"Original code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import {parse, registerLoaders} from '@loaders.gl/core';\nimport {PCDLoader} from `@loaders.gl/pcd';\nregisterLoaders([PCDLoader]);\nasync function loadPointCloud(url) {\n  const pointCloud = await parse(fetch(url));\n  // Use some WebGL framework to render the parsed cloud\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"Now support for additional point cloud formats can be added to the application without touching the original code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import {LASLoader} from `@loaders.gl/las';\nimport {DracoLoader} from `@loaders.gl/draco';\nregisterLoaders([LASLoader, DracoLoader]);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"data-format",children:"Data Format"}),"\n",(0,t.jsx)(r.p,{children:"Each category documents the returned data format. loaders and writers reference the category documentation."}),"\n",(0,t.jsx)(r.h2,{id:"writers-and-categories",children:"Writers and Categories"}),"\n",(0,t.jsx)(r.p,{children:"Writers for a format that belongs to a category accept data objects with fields described by the documentation for that category."}),"\n",(0,t.jsx)(r.h2,{id:"accessing-format-specific-data",children:"Accessing Format-Specific Data"}),"\n",(0,t.jsx)(r.p,{children:"Sometimes, not all the properties provided by a certain file format can be mapped to common properties defined by the corresponding loader category."}),"\n",(0,t.jsxs)(r.p,{children:["To access format-specific properties, use the ",(0,t.jsx)(r.code,{children:"loaderData"})," field in data object returned by the loader."]}),"\n",(0,t.jsx)(r.h2,{id:"available-categories",children:"Available Categories"}),"\n",(0,t.jsx)(r.p,{children:"Categories are described in the specifications section. Some currently defined categories are:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/specifications/category-table",children:"Table"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/specifications/category-mesh",children:"PointCloud/Mesh"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/specifications/category-scenegraph",children:"Scenegraph"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/specifications/category-gis",children:"GIS"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>n,a:()=>s});var t=a(67294);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);