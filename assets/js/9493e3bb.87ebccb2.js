"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},28313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={},i="Introduction",l={unversionedId:"arrowjs/README",id:"arrowjs/README",title:"Introduction",description:"Why does loaders.gl provide an Arrow JS API Reference?",source:"@site/../docs/arrowjs/README.md",sourceDirName:"arrowjs",slug:"/arrowjs/",permalink:"/docs/arrowjs/",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported features",permalink:"/docs/modules/tile-converter/cli-reference/supported-features"},next:{title:"What's New",permalink:"/docs/arrowjs/whats-new"}},s={},c=[{value:"Why does loaders.gl provide an Arrow JS API Reference?",id:"why-does-loadersgl-provide-an-arrow-js-api-reference",level:2},{value:"About Apache Arrow JS",id:"about-apache-arrow-js",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"About Apache Arrow",id:"about-apache-arrow",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"why-does-loadersgl-provide-an-arrow-js-api-reference"},"Why does loaders.gl provide an Arrow JS API Reference?"),(0,o.kt)("p",null,"loaders.gl is designed to output parsed tables and meshes in binary columnar format (whenever the parsed data structure allows). Binary columnar tables are a compact and efficient representation that is easy to work with analytically in JavaScript and to seamlessly upload to GPUs (via e.g. WebGL or WebGPU) for ultra-performance rendering and computation."),(0,o.kt)("p",null,'While loaders.gl is great for loading data into binary columnar tables, it does not provide much support for working with those tables. Instead, the intention is that the application will use complementary libraries like Apache Arrow for that purpose. Apache Arrow defines both a file format and a powerful "data frame" API (i.e. a data science optimized, Python ',(0,o.kt)("inlineCode",{parentName:"p"},"pandas"),"-style API) for working with binary columnar data."),(0,o.kt)("p",null,"While the Apache Arrow JS library itself is excellent, the ",(0,o.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/js/"},"reference documentation for the Apache Arrow JavaScript bindings")," is unfortunately rather thin. It can therefore be challenging to get up to speed on the Arrow JS API, which is why this documentation is provided in loaders.gl."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Perhaps this documentation could at some point be contributed back to the Apache Arrow project, but so far this has not happened.")),(0,o.kt)("h2",{id:"about-apache-arrow-js"},"About Apache Arrow JS"),(0,o.kt)("p",null,"The Apache Arrow JavaScript API is designed to help applications tap into the full power of working with binary columnar data in the Apache Arrow format. Arrow JS has a rich set of classes that supports use cases such as batched loading and writing, as well performing data frame operations on Arrow encoded data, including applying filters, iterating over tables, etc."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To install and start coding with Apache Arrow JS bindings, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/arrowjs/get-started"},"Getting Started"),"."),(0,o.kt)("h2",{id:"about-apache-arrow"},"About Apache Arrow"),(0,o.kt)("p",null,"Apache Arrow is a performance-optimized binary columnar memory layout specification for encoding vectors and table-like containers of flat and nested data. The Arrow spec is design to eliminate memory copies and aligns columnar data in memory to minimize cache misses and take advantage of the latest SIMD (Single input multiple data) and GPU operations on modern processors."),(0,o.kt)("p",null,"Apache Arrow is emerging as the standard for large in-memory columnar data (Spark, Pandas, Drill, Graphistry, ...). By standardizing on a common binary interchange format, big data systems can reduce the costs and friction associated with cross-system communication."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"There are some excellent resources available that can help you quickly get a feel for what capabilities the Arrow JS API offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Observable: ",(0,o.kt)("a",{parentName:"li",href:"https://observablehq.com/@theneuralbit/introduction-to-apache-arrow"},"Introduction to Apache Arrow")),(0,o.kt)("li",{parentName:"ul"},"Observable: ",(0,o.kt)("a",{parentName:"li",href:"https://observablehq.com/@randomfractals/apache-arrow"},"Using Apache Arrow JS with Large Datasets")),(0,o.kt)("li",{parentName:"ul"},"Observable: ",(0,o.kt)("a",{parentName:"li",href:"https://observablehq.com/@lmeyerov/manipulating-flat-arrays-arrow-style"},"Manipulating Flat Arrays, Arrow-Style")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://observablehq.com/@mbostock/manipulating-flat-arrays"},"Manipulating Flat Arrays")," General article on Columnar Data and Data Frames")),(0,o.kt)("p",null,"Apache Arrow project links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arrow.apache.org/"},"Apache Arrow Home")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/arrow/tree/master/js"},"Apache Arrow JS on github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/apache-arrow"},"Apache Arrow JS on npm"))))}d.isMDXComponent=!0}}]);