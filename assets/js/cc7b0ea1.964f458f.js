"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7082],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>f});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},d=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,f=h["".concat(i,".").concat(u)]||h[u]||p[u]||o;return a?t.createElement(f,s(s({ref:r},d),{},{components:a})):t.createElement(f,s({ref:r},d))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[h]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25087:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(87462),n=(a(67294),a(3905));const o={},s="Hash",l={unversionedId:"modules/crypto/api-reference/hash",id:"modules/crypto/api-reference/hash",title:"Hash",description:"Hash is the abstract base class for loaders.gl hash classes.",source:"@site/../docs/modules/crypto/api-reference/hash.md",sourceDirName:"modules/crypto/api-reference",slug:"/modules/crypto/api-reference/hash",permalink:"/docs/modules/crypto/api-reference/hash",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/crypto/api-reference/hash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/crypto/"},next:{title:"CRC32CHash",permalink:"/docs/modules/crypto/api-reference/crc32-hash"}},i={},c=[{value:"Fields",id:"fields",level:2},{value:"<code>name</code>: string",id:"name-string",level:4},{value:"<code>isSupported</code>: boolean",id:"issupported-boolean",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>preload(): Promise&lt;void&gt;</code>",id:"preload-promisevoid",level:4},{value:"<code>hash(data: ArrayBuffer): Promise&lt;ArrayBuffer&gt;</code>",id:"hashdata-arraybuffer-promisearraybuffer",level:4},{value:"<code>hashSync(data: ArrayBuffer): ArrayBuffer</code>",id:"hashsyncdata-arraybuffer-arraybuffer",level:4},{value:"<code>hashBatches(data: AsyncIterable&lt;ArrayBuffer&gt;): AsyncIterable&lt;ArrayBuffer&gt;</code>",id:"hashbatchesdata-asynciterablearraybuffer-asynciterablearraybuffer",level:4}],d={toc:c},h="wrapper";function p(e){let{components:r,...a}=e;return(0,n.kt)(h,(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hash"},"Hash"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v2.3-blue.svg?style=flat-square",alt:"From-v3.0"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Hash")," is the abstract base class for loaders.gl hash classes."),(0,n.kt)("h2",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"name-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"name"),": string"),(0,n.kt)("p",null,"The name of the hash algorithm"),(0,n.kt)("h4",{id:"issupported-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"isSupported"),": boolean"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"preload-promisevoid"},(0,n.kt)("inlineCode",{parentName:"h4"},"preload(): Promise<void>")),(0,n.kt)("p",null,"Asynchronously loads required libraries. For some hash classes this must be completed before\n",(0,n.kt)("inlineCode",{parentName:"p"},"hashSync()")," is available."),(0,n.kt)("h4",{id:"hashdata-arraybuffer-promisearraybuffer"},(0,n.kt)("inlineCode",{parentName:"h4"},"hash(data: ArrayBuffer): Promise<ArrayBuffer>")),(0,n.kt)("p",null,"Asynchronously hashes data."),(0,n.kt)("h4",{id:"hashsyncdata-arraybuffer-arraybuffer"},(0,n.kt)("inlineCode",{parentName:"h4"},"hashSync(data: ArrayBuffer): ArrayBuffer")),(0,n.kt)("p",null,"Synchronously hashes data."),(0,n.kt)("p",null,"For some hashions ",(0,n.kt)("inlineCode",{parentName:"p"},"preload()")," must have been called and completed before\nsynchronous operations are available."),(0,n.kt)("h4",{id:"hashbatchesdata-asynciterablearraybuffer-asynciterablearraybuffer"},(0,n.kt)("inlineCode",{parentName:"h4"},"hashBatches(data: AsyncIterable<ArrayBuffer>): AsyncIterable<ArrayBuffer>")),(0,n.kt)("p",null,"Asynchronously hashes data in batches."),(0,n.kt)("p",null,"If the underlying hashion does not support streaming hashion,\nthe incoming data will be concatenated into a single ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\nand a single hashed batch will be yielded."))}p.isMDXComponent=!0}}]);