"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7166],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,u=m["".concat(s,".").concat(d)]||m[d]||f[d]||o;return t?a.createElement(u,l(l({ref:r},p),{},{components:t})):a.createElement(u,l({ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58125:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={},l="Examples",i={unversionedId:"arrowjs/get-started/examples",id:"arrowjs/get-started/examples",title:"Examples",description:"Some short examples",source:"@site/../docs/arrowjs/get-started/examples.md",sourceDirName:"arrowjs/get-started",slug:"/arrowjs/get-started/examples",permalink:"/docs/arrowjs/get-started/examples",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/get-started/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/arrowjs/get-started/"},next:{title:"Working with BigInts",permalink:"/docs/arrowjs/developer-guide/big-ints"}},s={},c=[{value:"Get a table from an Arrow file on disk (in IPC format)",id:"get-a-table-from-an-arrow-file-on-disk-in-ipc-format",level:3},{value:"Create a Table when the Arrow file is split across buffers",id:"create-a-table-when-the-arrow-file-is-split-across-buffers",level:3},{value:"Create a Table from JavaScript arrays",id:"create-a-table-from-javascript-arrays",level:3},{value:"Load data with <code>fetch</code>",id:"load-data-with-fetch",level:3},{value:"Columns look like JS Arrays",id:"columns-look-like-js-arrays",level:3}],p={toc:c},m="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Some short examples"),(0,n.kt)("h3",{id:"get-a-table-from-an-arrow-file-on-disk-in-ipc-format"},"Get a table from an Arrow file on disk (in IPC format)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { readFileSync } from 'fs';\nimport { Table } from 'apache-arrow';\n\nconst arrow = readFileSync('simple.arrow');\nconst table = Table.from([arrow]);\n\nconsole.log(table.toString());\n\n/*\n foo,  bar,  baz\n   1,    1,   aa\nnull, null, null\n   3, null, null\n   4,    4,  bbb\n   5,    5, cccc\n*/\n")),(0,n.kt)("h3",{id:"create-a-table-when-the-arrow-file-is-split-across-buffers"},"Create a Table when the Arrow file is split across buffers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { readFileSync } from 'fs';\nimport { Table } from 'apache-arrow';\n\nconst table = Table.from([\n    'latlong/schema.arrow',\n    'latlong/records.arrow'\n].map((file) => readFileSync(file)));\n\nconsole.log(table.toString());\n\n/*\n        origin_lat,         origin_lon\n35.393089294433594,  -97.6007308959961\n35.393089294433594,  -97.6007308959961\n35.393089294433594,  -97.6007308959961\n29.533695220947266, -98.46977996826172\n29.533695220947266, -98.46977996826172\n*/\n")),(0,n.kt)("h3",{id:"create-a-table-from-javascript-arrays"},"Create a Table from JavaScript arrays"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Table,\n  FloatVector,\n  DateVector\n} from 'apache-arrow';\n\nconst LENGTH = 2000;\n\nconst rainAmounts = Float32Array.from(\n  { length: LENGTH },\n  () => Number((Math.random() * 20).toFixed(1)));\n\nconst rainDates = Array.from(\n  { length: LENGTH },\n  (_, i) => new Date(Date.now() - 1000 * 60 * 60 * 24 * i));\n\nconst rainfall = Table.new(\n  [FloatVector.from(rainAmounts), DateVector.from(rainDates)],\n  ['precipitation', 'date']\n);\n")),(0,n.kt)("h3",{id:"load-data-with-fetch"},"Load data with ",(0,n.kt)("inlineCode",{parentName:"h3"},"fetch")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Table } from "apache-arrow";\n\nconst table = await Table.from(fetch(("/simple.arrow")));\nconsole.log(table.toString());\n\n')),(0,n.kt)("h3",{id:"columns-look-like-js-arrays"},"Columns look like JS Arrays"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { readFileSync } from 'fs';\nimport { Table } from 'apache-arrow';\n\nconst table = Table.from([\n    'latlong/schema.arrow',\n    'latlong/records.arrow'\n].map(readFileSync));\n\nconst column = table.getColumn('origin_lat');\n\n// Copy the data into a TypedArray\nconst typed = column.toArray();\nassert(typed instanceof Float32Array);\n\nfor (let i = -1, n = column.length; ++i < n;) {\n    assert(column.get(i) === typed[i]);\n}\n")))}f.isMDXComponent=!0}}]);