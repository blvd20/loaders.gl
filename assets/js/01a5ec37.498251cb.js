"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(i,".").concat(m)]||d[m]||h[m]||o;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},s="Overview",l={unversionedId:"modules/crypto/README",id:"modules/crypto/README",title:"Overview",description:"The @loaders.gl/crypto module provides a selection of optional cryptographic hash plugins for loaders.gl.",source:"@site/../docs/modules/crypto/README.md",sourceDirName:"modules/crypto",slug:"/modules/crypto/",permalink:"/docs/modules/crypto/",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/crypto/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZstdCompression",permalink:"/docs/modules/compression/api-reference/zstd-compression"},next:{title:"Hash",permalink:"/docs/modules/crypto/api-reference/hash"}},i={},p=[{value:"Cryptographic Algorithmgs",id:"cryptographic-algorithmgs",level:2},{value:"Encoding",id:"encoding",level:2},{value:"Cryptographic Hash API",id:"cryptographic-hash-api",level:2},{value:"Using Transforms",id:"using-transforms",level:2},{value:"Performance",id:"performance",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v2.3-blue.svg?style=flat-square",alt:"From-v3.0"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/crypto")," module provides a selection of optional cryptographic hash plugins for loaders.gl."),(0,n.kt)("p",null,"Terminology:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"hash")," is an ")),(0,n.kt)("h2",{id:"cryptographic-algorithmgs"},"Cryptographic Algorithmgs"),(0,n.kt)("p",null,"MD5, SHA256 and many more, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js"},"crypto-js")),(0,n.kt)("h2",{id:"encoding"},"Encoding"),(0,n.kt)("p",null,"A hash algorithm takes input data and generates a digest. The digest is a number, usually containing a fixed number of bits.\nSince the number of bits involved is often large (e.g. SHA256 generates a 256 bit digest), digests are typically encoded as strings instead of numbers."),(0,n.kt)("p",null,"The two most common string encodings of numbers are ",(0,n.kt)("em",{parentName:"p"},"hex")," and ",(0,n.kt)("em",{parentName:"p"},"base64"),".\nWhich one you want to use often depends on what you are planning to do with the digest.\nIf you are calling an existing API (perhaps a cloud storage service)\nyou will want to generate the encoding that matches or is required by that API."),(0,n.kt)("p",null,"All hash functions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/crypto")," module take an ",(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," parameter that lets you specify the encoding."),(0,n.kt)("h2",{id:"cryptographic-hash-api"},"Cryptographic Hash API"),(0,n.kt)("p",null,'The API offers "transforms" that can calculate a cryptographic hash incrementally on data as it comes in on a stream.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transforms"),(0,n.kt)("th",{parentName:"tr",align:null},"Sync"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/crypto/api-reference/crc32-hash"},(0,n.kt)("inlineCode",{parentName:"a"},"CRC32Hash"))),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64-encoded Cryptographic Hash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/crypto/api-reference/crc32c-hash"},(0,n.kt)("inlineCode",{parentName:"a"},"CRC32CHash"))),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64-encoded Cryptographic Hash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/crypto/api-reference/md5-hash"},(0,n.kt)("inlineCode",{parentName:"a"},"MD5Hash"))),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64-encoded Cryptographic Hash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/modules/crypto/api-reference/sha256-hash"},(0,n.kt)("inlineCode",{parentName:"a"},"SHA256Hash"))),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64-encoded Cryptographic Hash")))),(0,n.kt)("h2",{id:"using-transforms"},"Using Transforms"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/crypto")," libraries exports transform that can be used to incrementally calculate a cryptographic hash as data is being loaded and parsed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {loadInBatches} from '@loaders.gl/core';\nimport {CRC32Hash} from '@loaders.gl/crypto';\n\nlet hash;\n\nconst csvIterator = await loadInBatches(CSV_URL, CSVLoader, {\n  transforms: [CRC32Hash],\n  crypto: {\n    onEnd: (result) => {\n      hash = result.hash;\n    }\n  }\n});\n\nlet csv;\nfor await (const batch of csvIterator) {\n}\n\nconsole.log(hash);\n")),(0,n.kt)("p",null,"Note that by using a transform, the hash is calculated incrementally as batches are loaded and parsed, and does not require having the entire data source loaded into memory. It also distributes the potentially heavy hash calculation over the batches, keeping the main thread responsive."),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"Note that cryptographic hashing is a computationally expensive operation, linear in the size of the data being hashed. Hashing speeds are currently in the order of 30-150MB/s on a 2019 MacBook Pro:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Cryptographic Hash\n\u251c\u2500 CRC32Hash#run(): 150M bytes/s\n\u251c\u2500 CRC32CHash#run(): 151M bytes/s\n\u251c\u2500 MD5Hash#run(): 75.8M bytes/s\n\u251c\u2500 SHA256Hash#run(SHA256): 30.6M bytes/s\n")))}h.isMDXComponent=!0}}]);