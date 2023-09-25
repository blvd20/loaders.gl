"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(d,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},39014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="GLTFLoader",o={unversionedId:"modules/gltf/api-reference/gltf-loader",id:"modules/gltf/api-reference/gltf-loader",title:"GLTFLoader",description:"Parses a glTF file. Can load both the .glb (binary) and .gltf (application/json) file format variants.",source:"@site/../docs/modules/gltf/api-reference/gltf-loader.md",sourceDirName:"modules/gltf/api-reference",slug:"/modules/gltf/api-reference/gltf-loader",permalink:"/docs/modules/gltf/api-reference/gltf-loader",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/gltf/api-reference/gltf-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GeoPackageLoader",permalink:"/docs/modules/geopackage/api-reference/geopackage-loader"},next:{title:"GLTFWriter",permalink:"/docs/modules/gltf/api-reference/gltf-writer"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Overview",id:"overview",level:2},{value:"Options",id:"options",level:2},{value:"Working with GLTF data",id:"working-with-gltf-data",level:2},{value:"Data Format",id:"data-format",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gltfloader"},"GLTFLoader"),(0,r.kt)("p",null,"Parses a glTF file. Can load both the ",(0,r.kt)("inlineCode",{parentName:"p"},".glb")," (binary) and ",(0,r.kt)("inlineCode",{parentName:"p"},".gltf")," (application/json) file format variants."),(0,r.kt)("p",null,"A glTF file contains a hierarchical scenegraph description that can be used to instantiate corresponding hierarcy of actual ",(0,r.kt)("inlineCode",{parentName:"p"},"Scenegraph")," related classes in most WebGL libraries."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Loader"),(0,r.kt)("th",{parentName:"tr",align:null},"Characteristic"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Extensions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".glb"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".gltf")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Binary, JSON, Linked Assets"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0"},"glTF v2"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/KhronosGroup/glTF/tree/master/specification/1.0"},"GLTF v1")," ","*"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/specifications/category-scenegraph"},"Scenegraph")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supported APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"load"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"parse")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subloaders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoLoader"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ImageLoader")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"*"," From ",(0,r.kt)("a",{parentName:"p",href:"http://shields.io"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/v2.3-blue.svg?style=flat-square",alt:"Website shields.io"})),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," offers optional, best-effort support for converting older glTF v1 files to glTF v2 format (",(0,r.kt)("inlineCode",{parentName:"p"},"options.gltf.normalize: true"),"). This conversion has a number of limitations and the parsed data structure may be only partially converted to glTF v2, causing issues to show up later e.g. when attempting to render the scenegraphs."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import {load} from '@loaders.gl/core';\nimport {GLTFLoader} from '@loaders.gl/gltf';\nconst gltf = await load(url, GLTFLoader);\n")),(0,r.kt)("p",null,"To decompress Draco-compressed meshes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import {load} from '@loaders.gl/core';\nimport {GLTFLoader} from '@loaders.gl/gltf';\nimport {DracoLoader} from '@loaders.gl/draco';\nconst gltf = load(url, GLTFLoader, {DracoLoader, decompress: true});\n")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," aims to take care of as much processing as possible, while remaining framework-independent."),(0,r.kt)("p",null,"The GLTF Loader returns an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," field containing the glTF Scenegraph. In its basic mode, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," does not modify the loaded JSON in any way. Instead, the results of additional processing are placed in parallel top-level fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"buffers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"images"),". This ensures that applications that want to work with the standard glTF data structure can do so."),(0,r.kt)("p",null,'Optionally, the loaded gltf can be "post processed", which lightly annotates and transforms the loaded JSON structure to make it easier to use. Refer to ',(0,r.kt)("a",{parentName:"p",href:"post-process-gltf"},"postProcessGLTF")," for details."),(0,r.kt)("p",null,"In addition, certain glTF extensions, in particular Draco mesh encoding, can be fully or partially processed during loading. When possible (and extension processing is enabled), such extensions will be resolved/decompressed and replaced with standards conformant representations."),(0,r.kt)("p",null,"Note: while supported, synchronous parsing of glTF (e.g. using ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSync()"),") has significant limitations. When parsed asynchronously (using ",(0,r.kt)("inlineCode",{parentName:"p"},"await parse()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"await load()"),"), the following additional capabilities are enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linked binary resource URI:s will be loaded and resolved (assuming a valid base url is available)."),(0,r.kt)("li",{parentName:"ul"},"base64 encoded binary URI:s inside the JSON payload will be decoded."),(0,r.kt)("li",{parentName:"ul"},"linked image URI:s can be loaded and decoded."),(0,r.kt)("li",{parentName:"ul"},"Draco meshes can be decoded asynchronously on worker threads (in parallel!).")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.loadBuffers")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch any referenced binary buffer files (and decode base64 encoded URIS)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.loadImages")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Load any referenced image files (and decode base64 encoded URIS)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.decompressMeshes")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Decompress Draco compressed meshes (if DracoLoader available)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.normalize")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, best-effort attempt at converting glTF v1 files to glTF2 format."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"working-with-gltf-data"},"Working with GLTF data"),(0,r.kt)("p",null,"The job of ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," is to open the glTF container file(s) and extract the glTF JSON, together with any associated binary chunks and images. "),(0,r.kt)("p",null,"If you already have access to libraries or code that process standard glTF JSON directly, this format may be appropriate. However, in this 'storage optimized\" form, traversing the loaded glTF scene graph tends to required verbose and repetitive code with lots of checks and guards."),(0,r.kt)("p",null,"To simplify traversal and manipulation of glTF data, loaders.gl provides two separate mechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"./post-process-gltf"},(0,r.kt)("inlineCode",{parentName:"a"},"postProcessGLTF()"))," function converts the glTF JSON into a largely equivalent JavaScript structure that significantly simpler to work with."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"./gltf-scenegraph"},(0,r.kt)("inlineCode",{parentName:"a"},"GLTFScenegraph"))," function accepts glTF data and provides methods for accessing or modifying APIS.")),(0,r.kt)("p",null,"The gltf module provides typescript definitions for the glTF JSON that align with the glTF specification, and all APIs and return values are strongly typed to assist applications to write robust code."),(0,r.kt)("h2",{id:"data-format"},"Data Format"),(0,r.kt)("p",null,"The data format returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," is the unmodified glTF JSON extracted from any binary containers, together with loaded binary chunks and optionally loaded images."),(0,r.kt)("p",null,"The standard glTF JSON structure will be available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescripton"},"{\n  json: {\n    scenes: [...],\n    scene: ...,\n    nodes: [...],\n    ...\n  }\n}\n")),(0,r.kt)("p",null,"However, the objects inside these arrays will have been pre-processed to simplify usage. For details on changes and extra fields added to the various glTF objects, see ",(0,r.kt)("a",{parentName:"p",href:"post-process-gltf"},"post processing"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescripton"},"{\n  // The base URI used to load this glTF, if any. For resolving relative uris to linked resources.\n  baseUri: String,\n\n  // JSON Chunk\n  json: Object, // Contains the unmodified parsed glTF JSON (the parsed GLB JSON chunk)\n\n  // Length and indices of this array will match `json.buffers`\n  // The GLB bin chunk, if present, will be found in buffer 0.\n  // Additional glTF json `buffers` are fetched and base64 decoded from the JSON uri:s.\n  buffers: [{\n    arrayBuffer: ArrayBuffer,\n    byteOffset: Number,\n    byteLength: Number\n  }],\n\n  // Images can optionally be loaded and decoded, they will be stored here\n  // Length and indices of this array will match `json.buffers`\n  images: Image[],\n\n  // GLBLoader output, if this was a GLB encoded glTF\n  _glb?: Object\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"baseUri")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"length of GLB (e.g. embedded in larger binary block)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Parsed JSON from the JSON chunk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The version number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffers[\\*].arrayBuffer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The binary chunk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffers[\\*].byteOffset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"offset of buffer (embedded in larger binary block)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffers[\\*].byteLength")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"length of buffer (embedded in larger binary block)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_glb"),"?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The output of the GLBLoader if the parsed file was GLB formatted")))))}u.isMDXComponent=!0}}]);