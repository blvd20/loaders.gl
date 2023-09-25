"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[828],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(g,i(i({ref:r},d),{},{components:t})):a.createElement(g,i({ref:r},d))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31732:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={},i="Reading and Writing Arrow Data",l={unversionedId:"arrowjs/developer-guide/reading-and-writing",id:"arrowjs/developer-guide/reading-and-writing",title:"Reading and Writing Arrow Data",description:"About RecordBatches",source:"@site/../docs/arrowjs/developer-guide/reading-and-writing.md",sourceDirName:"arrowjs/developer-guide",slug:"/arrowjs/developer-guide/reading-and-writing",permalink:"/docs/arrowjs/developer-guide/reading-and-writing",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/developer-guide/reading-and-writing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Predicates",permalink:"/docs/arrowjs/developer-guide/predicates"},next:{title:"Working with Tables",permalink:"/docs/arrowjs/developer-guide/tables"}},s={},c=[{value:"About RecordBatches",id:"about-recordbatches",level:2},{value:"Reading Arrow Data",id:"reading-arrow-data",level:2},{value:"Using RecordBatchReader to read from a Data Source",id:"using-recordbatchreader-to-read-from-a-data-source",level:3},{value:"Reading Multiple Tables from a Data Source",id:"reading-multiple-tables-from-a-data-source",level:3},{value:"Using Transform Streams",id:"using-transform-streams",level:2},{value:"Connecting to Python Processes",id:"connecting-to-python-processes",level:3}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reading-and-writing-arrow-data"},"Reading and Writing Arrow Data"),(0,n.kt)("h2",{id:"about-recordbatches"},"About RecordBatches"),(0,n.kt)("p",null,"Arrow tables are typically split into record batches, allowing them to be incrementally loaded or written, and naturally the Arrow API provides classes to facilite this reading."),(0,n.kt)("h2",{id:"reading-arrow-data"},"Reading Arrow Data"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Table")," class provides a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"Table.from")," convenience method for reading an Arrow formatted data file into Arrow data structures:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import { readFileSync } from 'fs';\nimport { Table } from 'apache-arrow';\nconst arrow = readFileSync('simple.arrow');\nconst table = Table.from([arrow]);\nconsole.log(table.toString());\n")),(0,n.kt)("h3",{id:"using-recordbatchreader-to-read-from-a-data-source"},"Using RecordBatchReader to read from a Data Source"),(0,n.kt)("p",null,"To read Arrow tables incrementally, you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordBatchReader")," class."),(0,n.kt)("p",null,"If you only have one table in your file (the normal case), then you'll only need one ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordBatchReader"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const reader = await RecordBatchReader.from(fetch(path, {credentials: 'omit'}));\nfor await (const batch of reader) {\n  console.log(batch.length);\n}\n")),(0,n.kt)("h3",{id:"reading-multiple-tables-from-a-data-source"},"Reading Multiple Tables from a Data Source"),(0,n.kt)("p",null,'The JavaScript Arrow API supports arrow data streams that contain multiple tables (this is an "extension" to the arrow spec). Naturally, each Table comes with its own set of record batches, so to read all batches from all tables in the data source you will need a double loop:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const readers = RecordBatchReader.readAll(fetch(path, {credentials: 'omit'}));\nfor await (const reader of readers) {\n  for await (const batch of reader) {\n    console.log(batch.length);\n  }\n}\n")),(0,n.kt)("p",null,"Note: this code also works if there is only one table in the data source, in which case the outer loop will only execute once."),(0,n.kt)("h1",{id:"writing-arrow-data"},"Writing Arrow Data"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordStreamWriter")," class allows you to write Arrow ",(0,n.kt)("inlineCode",{parentName:"p"},"Table")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordBatch")," instances to a data source."),(0,n.kt)("h2",{id:"using-transform-streams"},"Using Transform Streams"),(0,n.kt)("h3",{id:"connecting-to-python-processes"},"Connecting to Python Processes"),(0,n.kt)("p",null,"A more complicated example of using Arrow to go from node -> python -> node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const { AsyncIterable } = require('ix');\nconst { child } = require('event-stream');\nconst { fork } = require('child_process');\nconst { RecordBatchStreamWriter } = require('apache-arrow');\n\nconst compute_degrees_via_gpu_accelerated_sql = ((scriptPath) => (edgeListColumnName) =>\n    spawn('python3', [scriptPath, edgeListColumnName], {\n        env: process.env,\n        stdio: ['pipe', 'pipe', 'inherit']\n    })\n)(require('path').resolve(__dirname, 'compute_degrees.py'));\n\nfunction compute_degrees(colName, recordBatchReaders) {\n    return AsyncIterable\n        .as(recordBatchReaders).mergeAll()\n        .pipe(RecordBatchStreamWriter.throughNode())\n        .pipe(compute_degrees_via_gpu_accelerated_sql(colName));\n}\n\nmodule.exports = compute_degrees;\n\n")),(0,n.kt)("p",null,"This example construct pipes of streams of events and that python process just reads from stdin, does a GPU-dataframe operation, and writes the results to stdout. (This example uses Rx/IxJS style functional streaming pipelines)."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"compute_degrees_via_gpu_accelerated_sql")," returns a node ",(0,n.kt)("inlineCode",{parentName:"p"},"child_process")," that is also a duplex stream, similar to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/event-stream#child-child_process"},(0,n.kt)("inlineCode",{parentName:"a"},"event-stream#child()")," method")))}u.isMDXComponent=!0}}]);