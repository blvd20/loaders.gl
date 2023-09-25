"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l="Working with Tables",i={unversionedId:"arrowjs/developer-guide/tables",id:"arrowjs/developer-guide/tables",title:"Working with Tables",description:"References:",source:"@site/../docs/arrowjs/developer-guide/tables.md",sourceDirName:"arrowjs/developer-guide",slug:"/arrowjs/developer-guide/tables",permalink:"/docs/arrowjs/developer-guide/tables",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/arrowjs/developer-guide/tables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reading and Writing Arrow Data",permalink:"/docs/arrowjs/developer-guide/reading-and-writing"},next:{title:"Using with Typescript",permalink:"/docs/arrowjs/developer-guide/typescript"}},s={},c=[{value:"Loading Arrow Data",id:"loading-arrow-data",level:2},{value:"Getting Records Count",id:"getting-records-count",level:2},{value:"Getting Arrow Schema Metadata",id:"getting-arrow-schema-metadata",level:3},{value:"Accessing Arrow Table Row Data",id:"accessing-arrow-table-row-data",level:3},{value:"Record toJSON and toArray",id:"record-tojson-and-toarray",level:2},{value:"Slicing Arrow Data",id:"slicing-arrow-data",level:2},{value:"Iterating over Rows and Cells",id:"iterating-over-rows-and-cells",level:3},{value:"Converting Dates",id:"converting-dates",level:3},{value:"Column Data Vectors",id:"column-data-vectors",level:3},{value:"Filtering Timestamped Data",id:"filtering-timestamped-data",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-tables"},"Working with Tables"),(0,n.kt)("p",null,"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Much of the text in this section is adapted from Brian Hulette's ",(0,n.kt)("a",{parentName:"li",href:"https://observablehq.com/@theneuralbit/using-apache-arrow-js-with-large-datasets"},"Using Apache Arrow JS with Large Datasets"))),(0,n.kt)("h2",{id:"loading-arrow-data"},"Loading Arrow Data"),(0,n.kt)("p",null,"Applications often start with loading some Arrow formatted data. The Arrow API provides several ways to do this, but in many cases, the simplest approach is to use ",(0,n.kt)("inlineCode",{parentName:"p"},"Table.from()"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Table} from 'apache-arrow';\nconst response = await fetch(dataUrl);\nconst arrayBuffer = await response.arrayBuffer();\nconst dataTable = arrow.Table.from(new Uint8Array(arrayBuffer));\n")),(0,n.kt)("h2",{id:"getting-records-count"},"Getting Records Count"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const count = table.count();\n")),(0,n.kt)("h3",{id:"getting-arrow-schema-metadata"},"Getting Arrow Schema Metadata"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const fieldNames = table.schema.fields.map(f => f.name);\n// Array(3) ["Latitude", "Longitude", "Date"]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const fieldTypes = tables.schema.fields.map(f => f.type)\n// Array(3) [Float, Float, Timestamp]\n\nconst fieldTypeNames = ...;\n// Array(3) ["Float64", "Float64", "Timestamp<MICROSECOND>"]\n')),(0,n.kt)("h3",{id:"accessing-arrow-table-row-data"},"Accessing Arrow Table Row Data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const firstRow = tables.get(0) // 1st row data\nconst lastRow = tables.get(rowCount-1)\n")),(0,n.kt)("h2",{id:"record-tojson-and-toarray"},"Record toJSON and toArray"),(0,n.kt)("p",null,"It is easy to converting Rows to JSON/Arrays/Strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"toJSON = Array(3) [41.890751259, -87.71617311899999, Int32Array(2)]\ntoArray = Array(3) [41.933659084, -87.72369064600001, Int32Array(2)]\n")),(0,n.kt)("p",null,"Similar conversion methods are avaiable on many Arrow classes."),(0,n.kt)("p",null,"tables.get(0).toJSON()"),(0,n.kt)("h2",{id:"slicing-arrow-data"},"Slicing Arrow Data"),(0,n.kt)("p",null,"every10KRow = Array(17) ","[Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3)]"),(0,n.kt)("p",null,"Our custom arrow data range stepper for sampling data:"),(0,n.kt)("p",null,"range = \u0192(start, end, step)"),(0,n.kt)("h3",{id:"iterating-over-rows-and-cells"},"Iterating over Rows and Cells"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"for (let row of dataFrame) {\n  for (let cell of row) {\n    if ( Array.isArray(cell) ) {\n      td = '[' + cell.map((value) => value == null ? 'null' : value).join(', ') + ']';\n    } else if (fields[k] === 'Date') {\n      td = toDate(cell); // convert Apache arrow Timestamp to Date\n    } else {\n      td = cell.toString();\n    }\n    k++;\n  }\n}\n")),(0,n.kt)("h3",{id:"converting-dates"},"Converting Dates"),(0,n.kt)("p",null,'Apache Arrow Timestamp is a 64-bit int of milliseconds since the epoch, represented as two 32-bit ints in JS to preserve precision. The fist number is the "low" int and the second number is the "high" int.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function toDate(timestamp) {\n  return new Date((timestamp[1] * Math.pow(2, 32) + timestamp[0])/1000);\n}\n")),(0,n.kt)("h3",{id:"column-data-vectors"},"Column Data Vectors"),(0,n.kt)("p",null,"Apache Arrow stores columns in typed arrays and vectors:"),(0,n.kt)("p",null,"Typed vectors have convinience methods to convert Int32 arrays data to JS values you can work with."),(0,n.kt)("p",null,"For example, to get timestamps in milliseconds:"),(0,n.kt)("p",null,"timestamps = Array(10) ","[2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01, 2017-01-01]"),(0,n.kt)("h3",{id:"filtering-timestamped-data"},"Filtering Timestamped Data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function filterByDate(startDate, endDate) {\n  const dateFilter = arrow.predicate.custom(i => {\n    const arrowDate = table.getColumn('Date').get(i);\n    const date = toDate(arrowDate);\n    return date >= startDate && date <= endDate;\n  }, b => 1);\n\n  const getDate;\n  const results = [];\n  table.filter(dateFilter)\n    .scan(\n      index => {\n        results.push({\n          'date': toDate(getDate(index))\n        });\n      },\n      batch => {\n        getDate = arrow.predicate.col('Date').bind(batch);\n      }\n    );\n\n  return results;\n}\n")),(0,n.kt)("p",null,"Our custom filter by date method uses custom arrow table predicate filter and scan methods to generate JS friendly data you can map or graph:"))}u.isMDXComponent=!0}}]);