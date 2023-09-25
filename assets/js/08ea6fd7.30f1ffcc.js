"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||n;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={},l="RecordBatchReader",i={unversionedId:"arrowjs/api-reference/record-batch-reader",id:"arrowjs/api-reference/record-batch-reader",title:"RecordBatchReader",description:"This documentation reflects Arrow JS v4.0. Needs to be updated for the new Arrow API in v9.0 +.",source:"@site/../docs/arrowjs/api-reference/record-batch-reader.md",sourceDirName:"arrowjs/api-reference",slug:"/arrowjs/api-reference/record-batch-reader",permalink:"/docs/arrowjs/api-reference/record-batch-reader",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/api-reference/record-batch-reader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Predicates",permalink:"/docs/arrowjs/api-reference/predicates"},next:{title:"record-batch-writer",permalink:"/docs/arrowjs/api-reference/record-batch-writer"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"readAll() : <code>AsyncIterable&lt;RecordBatchReader&gt;</code>",id:"readall--asynciterablerecordbatchreader",level:3},{value:"from(data : *) : RecordBatchFileReader | RecordBatchStreamReader",id:"fromdata----recordbatchfilereader--recordbatchstreamreader",level:3},{value:"toNodeStream()",id:"tonodestream",level:3},{value:"pipe()",id:"pipe",level:3},{value:"toDOMStream() or",id:"todomstream-or",level:3},{value:"pipeTo(writable)/pipeThrough(transform)",id:"pipetowritablepipethroughtransform",level:3},{value:"throughNode",id:"throughnode",level:3},{value:"throughDOM",id:"throughdom",level:3},{value:"Remarks",id:"remarks",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recordbatchreader"},"RecordBatchReader"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This documentation reflects Arrow JS v4.0. Needs to be updated for the new Arrow API in v9.0 +.")),(0,o.kt)("p",null,"The RecordBatchReader is the IPC reader for reading chunks from a stream or file"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The JavaScript API supports streaming multiple arrow tables over a single socket."),(0,o.kt)("p",null,"To read all batches from all tables in a data source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const readers = RecordBatchReader.readAll(fetch(path, {credentials: 'omit'}));\nfor await (const reader of readers) {\n    for await (const batch of reader) {\n        console.log(batch.length);\n    }\n}\n")),(0,o.kt)("p",null,"If you only have one table (the normal case), then there'll only be one RecordBatchReader/the outer loop will only execute once. You can also create just one reader via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const reader = await RecordBatchReader.from(fetch(path, {credentials: 'omit'}));\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"readall--asynciterablerecordbatchreader"},"readAll() : ",(0,o.kt)("inlineCode",{parentName:"h3"},"AsyncIterable<RecordBatchReader>")),(0,o.kt)("p",null,"Reads all batches from all tables in the data source."),(0,o.kt)("h3",{id:"fromdata----recordbatchfilereader--recordbatchstreamreader"},"from(data : ","*",") : RecordBatchFileReader ","|"," RecordBatchStreamReader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array"),(0,o.kt)("li",{parentName:"ul"},"fetch response object"),(0,o.kt)("li",{parentName:"ul"},"stream")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordBatchReader.from")," method will also detect which physical representation it's working with (Streaming or File), and will return either a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordBatchFileReader")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordBatchStreamReader")," accordingly."),(0,o.kt)("p",null,"Remarks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you're fetching the table from a node server, make sure the content-type is ",(0,o.kt)("inlineCode",{parentName:"li"},"application/octet-stream"))),(0,o.kt)("h3",{id:"tonodestream"},"toNodeStream()"),(0,o.kt)("h3",{id:"pipe"},"pipe()"),(0,o.kt)("p",null,"You can also turn the RecordBatchReader into a stream\nif you're in node, you can use either toNodeStream() or call the pipe(writable) methods"),(0,o.kt)("p",null,'in the browser (assuming you\'re using the UMD or "browser" fields in webpack), you can call'),(0,o.kt)("h3",{id:"todomstream-or"},"toDOMStream() or"),(0,o.kt)("h3",{id:"pipetowritablepipethroughtransform"},"pipeTo(writable)/pipeThrough(transform)"),(0,o.kt)("p",null,'In the browser (assuming you\'re using the UMD or "browser" fields in webpack), you can call ',(0,o.kt)("inlineCode",{parentName:"p"},"toDOMStream()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeTo(writable)"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"pipeThrough(transform)")),(0,o.kt)("p",null,"You can also create a transform stream directly, instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordBatchReader.from()")),(0,o.kt)("p",null,"You can also create a transform stream directly, instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordBatchReader.from()")),(0,o.kt)("h3",{id:"throughnode"},"throughNode"),(0,o.kt)("h3",{id:"throughdom"},"throughDOM"),(0,o.kt)("p",null,"via ",(0,o.kt)("inlineCode",{parentName:"p"},"throughNode()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"throughDOM()")," respectively:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/arrow/blob/49b4d2aad50e9d18cb0a51beb3a2aaff1b43e168/js/test/unit/ipc/reader/streams-node-tests.ts#L54"},"https://github.com/apache/arrow/blob/49b4d2aad50e9d18cb0a51beb3a2aaff1b43e168/js/test/unit/ipc/reader/streams-node-tests.ts#L54")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/arrow/blob/49b4d2aad50e9d18cb0a51beb3a2aaff1b43e168/js/test/unit/ipc/reader/streams-dom-tests.ts#L50"},"https://github.com/apache/arrow/blob/49b4d2aad50e9d18cb0a51beb3a2aaff1b43e168/js/test/unit/ipc/reader/streams-dom-tests.ts#L50"))),(0,o.kt)("p",null,"By default the transform streams will only read one table from the source readable stream and then close, but you can change this behavior by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"{ autoDestroy: false }")," to the transform creation methods"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reading from multiple tables (",(0,o.kt)("inlineCode",{parentName:"li"},"readAll()"),") is technically an extension in the JavaScript Arrow API compared to the Arrow C++ API. The authors found it was useful to be able to send multiple tables over the same physical socket\nso they built the ability to keep the underlying socket open and read more than one table from a stream."),(0,o.kt)("li",{parentName:"ul"},"Note that Arrow has two physical representations, one for streaming, and another for random-access so this only applies to the streaming representation."),(0,o.kt)("li",{parentName:"ul"},"The IPC protocol is that a stream of ordered Messages are consumed atomically. Messages can be of type ",(0,o.kt)("inlineCode",{parentName:"li"},"Schema"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"DictionaryBatch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"RecordBatch"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Tensor")," (which we don't support yet). The Streaming format is just a sequence of messages with Schema first, then ",(0,o.kt)("inlineCode",{parentName:"li"},"n")," ",(0,o.kt)("inlineCode",{parentName:"li"},"DictionaryBatches"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"m")," ",(0,o.kt)("inlineCode",{parentName:"li"},"RecordBatches"),".")))}h.isMDXComponent=!0}}]);