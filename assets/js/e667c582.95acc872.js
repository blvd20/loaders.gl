"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7880],{22595:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var o=i(85893),a=i(11151);const r={},s="loadImage",t={id:"modules/textures/api-reference/load-image",title:"loadImage",description:"Usage",source:"@site/../docs/modules/textures/api-reference/load-image.md",sourceDirName:"modules/textures/api-reference",slug:"/modules/textures/api-reference/load-image",permalink:"/docs/modules/textures/api-reference/load-image",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/textures/api-reference/load-image.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/textures/"},next:{title:"loadImages",permalink:"/docs/modules/textures/api-reference/load-image-array"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Function",id:"function",level:2},{value:"loadImage(getUrl : String | Function, options? : Object]) : image | image[]",id:"loadimagegeturl--string--function-options--object--image--image",level:3},{value:"Options",id:"options",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"loadimage",children:"loadImage"}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import '@loaders.gl/polyfills'; // only needed if using under Node\nimport {loadImage} from `@loaders.gl/images`;\n\nconst image = await loadImage(url);\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import '@loaders.gl/polyfills'; // only needed if using under Node\nimport {loadImage} from `@loaders.gl/images`;\n\nconst URL = ...;\n\nconst image = await loadImage(({lod}) => `${URL}-${lod}.jpg`, {\n  image: {\n    mipLevels: 'auto'\n  }\n});\n\nfor (const lodImage of imageArray) {\n  ...\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"function",children:"Function"}),"\n",(0,o.jsx)(n.h3,{id:"loadimagegeturl--string--function-options--object--image--image",children:"loadImage(getUrl : String | Function, options? : Object]) : image | image[]"}),"\n",(0,o.jsx)(n.p,{children:"A basic image loading function for loading a single image (or an array of mipmap images representing a single image)."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"getUrl"}),": A function that generates the url for each image, it is called for each image with the ",(0,o.jsx)(n.code,{children:"lod"})," of that image."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"options"}),": Supports the same options as ",(0,o.jsx)(n.a,{href:"modules/images/docs/api-reference/image-loader",children:(0,o.jsx)(n.code,{children:"ImageLoader"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Returns"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"image or array of images"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.p,{children:["Accepts the same options as ",(0,o.jsx)(n.a,{href:"modules/images/docs/api-reference/image-loader",children:(0,o.jsx)(n.code,{children:"ImageLoader"})}),", and"]}),"\n",(0,o.jsxs)(n.p,{children:["| Option            | Type    | Default | Description |\n| ----------------- | ------- | ------- | ----------- | ------------------------------------------------------ |\n| ",(0,o.jsx)(n.code,{children:"image.mipLevels"})," | ",(0,o.jsx)(n.code,{children:"Number | String"})," | ",(0,o.jsx)(n.code,{children:"0"}),"         | If ",(0,o.jsx)(n.code,{children:"'auto'"})," or non-zero, loads an array of mip images. |"]}),"\n",(0,o.jsxs)(n.p,{children:["Number of mip level images to load: Use ",(0,o.jsx)(n.code,{children:"0"})," to indicate a single image with no mips. Supplying the string ",(0,o.jsx)(n.code,{children:"'auto'"})," will infer the mipLevel from the size of the ",(0,o.jsx)(n.code,{children:"lod"}),"=",(0,o.jsx)(n.code,{children:"0"})," image."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var o=i(67294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);