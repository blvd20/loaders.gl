"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5391],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(l),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return l?n.createElement(k,o(o({ref:t},d),{},{components:l})):n.createElement(k,o({ref:t},d))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},86726:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const r={},o="Overview",i={unversionedId:"modules/polyfills/api-reference/README",id:"modules/polyfills/api-reference/README",title:"Overview",description:"The optional @loaders.gl/polyfills module installs support for Node.js and older browsers.",source:"@site/../docs/modules/polyfills/api-reference/README.md",sourceDirName:"modules/polyfills/api-reference",slug:"/modules/polyfills/api-reference/",permalink:"/docs/modules/polyfills/api-reference/",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/polyfills/api-reference/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/ply/"},next:{title:"Overview",permalink:"/docs/modules/shapefile/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Included Polyfills",id:"included-polyfills",level:2},{value:"fetch Polyfill",id:"fetch-polyfill",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attribution",id:"attribution",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," module installs support for Node.js and older browsers."),(0,a.kt)("p",null,"loaders.gl is based on the HTML5 API provided by modern, evergreen browsers. Older browsers (mainly Edge and IE11) as well as versions of Node.js prior to v12 do not provide certain classes that loaders.gl depends on."),(0,a.kt)("p",null,"Note that while ",(0,a.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," is designed to work seamlessly with other loaders.gl modules, using it is not a requirement. There are other good polyfill modules available on ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," that can be used in its place."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @loaders.gl/polyfills\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Just import ",(0,a.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," before you start using other loaders.gl modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@loaders.gl/polyfills';\nimport '@loaders.gl/core';\n")),(0,a.kt)("p",null,"To use the experimental ",(0,a.kt)("inlineCode",{parentName:"p"},"Blob")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," polyfills"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {installFilePolyfills} from '@loaders.gl/polyfills';\ninstallFilePolyfills();\n")),(0,a.kt)("h2",{id:"included-polyfills"},"Included Polyfills"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Polyfill"),(0,a.kt)("th",{parentName:"tr",align:null},"Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Browser"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TextEncoder"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"TextDecoder")),(0,a.kt)("td",{parentName:"tr",align:null},"Node.js < 11"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes (Older browsers)"),(0,a.kt)("td",{parentName:"tr",align:null},"Only UTF8 is guaranteed to be supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"atob"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"btoa")),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Note: these functions are ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem"},"not unicode safe"),", but OK to use for test cases.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fetch")),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the fetch API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Response")),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the ",(0,a.kt)("inlineCode",{parentName:"td"},"Response")," API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Headers")),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the fetch API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Blob")," (Experimental)"),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the fetch API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"File")," (Experimental)"),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the fetch API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FileReader")," (Experimental)"),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the fetch API is supported, see below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReadableStream")," (Experimental)"),(0,a.kt)("td",{parentName:"tr",align:null},"All versions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A subset of the ReadableStream API is supported.")))),(0,a.kt)("h2",{id:"fetch-polyfill"},"fetch Polyfill"),(0,a.kt)("p",null,"The Node.js ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Headers")," polyfills supports a large subset of the browser fetch API, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response.text()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Response.arrayBuffer()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Response.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response.body")," stream"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"status"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"statusText")," etc."),(0,a.kt)("li",{parentName:"ul"},"data uri / base64 decoding"),(0,a.kt)("li",{parentName:"ul"},"automatic gzip, brotli and deflate decompression support for responses with ",(0,a.kt)("inlineCode",{parentName:"li"},"content-encoding")," headers."),(0,a.kt)("li",{parentName:"ul"},"Files ending with ",(0,a.kt)("inlineCode",{parentName:"li"},".gz")," are automatically decompressed with gzip decompression (this is only done on Node.js, in the browser the content-encoding header must be set).")),(0,a.kt)("p",null,"The Node.js ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," is able to follow 30X redirect: if ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," has status 300-399 and ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," header is set, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," polyfill re-requests data from ",(0,a.kt)("inlineCode",{parentName:"p"},"location"),"."),(0,a.kt)("h1",{id:"textencoder-and-textdecoder-polyfills"},"TextEncoder and TextDecoder Polyfills"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TextEncoder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TextDecoder")," polyfills are provided to ensure these APIs are always available. In modern browsers these will evaluate to the built-in objects of the same name, however under Node.js polyfills are transparently installed."),(0,a.kt)("p",null,"Note: The provided polyfills only guarantee UTF8 support."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications should only install this module if they need to run under older environments. While the polyfills are only installed at runtime if the platform does not already support them, importing this module will increase the application's bundle size."),(0,a.kt)("li",{parentName:"ul"},"Refer to browser documentation for the usage of these classes, e.g. MDN."),(0,a.kt)("li",{parentName:"ul"},"In the browser, overhead of using these imports is not as high, as most polyfills are only bundled under Node.js."),(0,a.kt)("li",{parentName:"ul"},"If working under older browsers, e.g. IE11, you may need to install your own TextEncoder/TextDecoder polyfills before loading this library")),(0,a.kt)("h2",{id:"attribution"},"Attribution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Header")," polyfill (for Node.js ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),") is a fork of the implementation in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/github/fetch"},"https://github.com/github/fetch")," (MIT license)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Blob")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"File")," polyfills are forks of @gozala's ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Gozala/web-blob"},(0,a.kt)("inlineCode",{parentName:"a"},"web-blob"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Gozala/web-file"},(0,a.kt)("inlineCode",{parentName:"a"},"web-file"))," modules respectively, under MIT license.")))}m.isMDXComponent=!0}}]);