"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||a;return r?l.createElement(m,o(o({ref:t},p),{},{components:r})):l.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}v.displayName="MDXCreateElement"},4866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=r(87462),n=(r(67294),r(3905));const a={},o="SLPK extractor",i={unversionedId:"modules/tile-converter/cli-reference/slpk-extractor",id:"modules/tile-converter/cli-reference/slpk-extractor",title:"SLPK extractor",description:"SLPK extractor is utility that helps to extract slpk to a dataset that can be served via i3s-server",source:"@site/../docs/modules/tile-converter/cli-reference/slpk-extractor.md",sourceDirName:"modules/tile-converter/cli-reference",slug:"/modules/tile-converter/cli-reference/slpk-extractor",permalink:"/docs/modules/tile-converter/cli-reference/slpk-extractor",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/tile-converter/cli-reference/slpk-extractor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"I3S Server",permalink:"/docs/modules/tile-converter/cli-reference/i3s-server"},next:{title:"Supported features",permalink:"/docs/modules/tile-converter/cli-reference/supported-features"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Extraction",id:"extraction",level:2},{value:"Start HTTP server",id:"start-http-server",level:3},{value:"The layer should be available on URLs",id:"the-layer-should-be-available-on-urls",level:4},{value:"Open in ArcGIS",id:"open-in-arcgis",level:4},{value:"Open in I3S Explorer",id:"open-in-i3s-explorer",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"slpk-extractor"},"SLPK extractor"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v4.0-blue.svg?style=flat-square",alt:"From-v4.0"}),(0,n.kt)("a",{href:"https://badge.fury.io/js/%40loaders.gl%2Ftile-converter"},(0,n.kt)("img",{src:"https://badge.fury.io/js/%40loaders.gl%2Ftile-converter.svg",alt:"npm version",height:"18"}))),(0,n.kt)("p",null,"SLPK extractor is utility that helps to extract slpk to a dataset that can be served via i3s-server"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The slpk-extractor is published as a part of ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/tile-converter")," "),(0,n.kt)("p",null,"Create a new folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir tmp\ncd tmp\n")),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/tile-converter")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @loaders.gl/tile-converter\n")),(0,n.kt)("h2",{id:"extraction"},"Extraction"),(0,n.kt)("p",null,"Extract .slpk to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./data")," folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'npx slpk-extractor --tileset="./path/to/the/file.slpk" --output="./data//SceneServer/layers/0"\n')),(0,n.kt)("p",null,"Then you can start serving dataset"),(0,n.kt)("h3",{id:"start-http-server"},"Start HTTP server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'PORT=8080 HTTPS_PORT=4443 I3sLayerPath="./data" DEBUG=i3s-server:* npx i3s-server\n')),(0,n.kt)("h4",{id:"the-layer-should-be-available-on-urls"},"The layer should be available on URLs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/SceneServer/layers/0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"https://localhost:4443/SceneServer/layers/0"))),(0,n.kt)("h4",{id:"open-in-arcgis"},"Open in ArcGIS"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://www.arcgis.com/home/webscene/viewer.html?url=http://localhost:8080//SceneServer")),(0,n.kt)("h4",{id:"open-in-i3s-explorer"},"Open in I3S Explorer"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://i3s.loaders.gl/viewer?tileset=http://localhost:8080/SceneServer/layers/0")))}d.isMDXComponent=!0}}]);