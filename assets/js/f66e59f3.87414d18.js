"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9530],{28695:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var d=s(85893),i=s(11151);const n={},r="TileJSON / Tilestats",l={id:"modules/mvt/formats/tilejson",title:"TileJSON / Tilestats",description:"- @loaders.gl/mvt",source:"@site/../docs/modules/mvt/formats/tilejson.md",sourceDirName:"modules/mvt/formats",slug:"/modules/mvt/formats/tilejson",permalink:"/docs/modules/mvt/formats/tilejson",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/mvt/formats/tilejson.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mapbox Vector Tile",permalink:"/docs/modules/mvt/formats/mvt"},next:{title:"Parquet",permalink:"/docs/modules/parquet/formats/parquet"}},c={},h=[{value:"TileJSON",id:"tilejson",level:2},{value:"tilestats",id:"tilestats",level:2},{value:"Format Description",id:"format-description",level:2},{value:"Fields",id:"fields",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"tilejson--tilestats",children:"TileJSON / Tilestats"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.em,{children:(0,d.jsx)(t.a,{href:"/docs/modules/mvt",children:(0,d.jsx)(t.code,{children:"@loaders.gl/mvt"})})})}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:(0,d.jsx)(t.a,{href:"https://github.com/mapbox/tilejson-spec/blob/master/3.0.0/README.md",children:"TileJSON specification"})})," - *",(0,d.jsx)(t.a,{href:"https://github.com/mapbox/mapbox-geostats",children:"Tilestats information"})," - *",(0,d.jsx)(t.a,{href:"https://github.com/mapbox/mapbox-geostats#output-the-stats",children:"Tilestats generation"})]}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"tilejson",children:"TileJSON"}),"\n",(0,d.jsx)(t.p,{children:"A TileJSON file contains JSON-encoded metadata about a vector tileset including which layers and fields (columns) can be found in the tiles."}),"\n",(0,d.jsx)(t.p,{children:"The information in the TileJSON enables clients (such as web viewers) to understand the structure of data in the tileset up front, instead of piecing it together as tiles are loaded."}),"\n",(0,d.jsx)(t.p,{children:"While not all vector tilesets have a TileJSON file, when it is present there is normally a single TileJSON file per tileset, and this file is typically found at the root in TMS or XYZ based URL schemas, so that applications can make a speculative attempt to fetch it from a known place."}),"\n",(0,d.jsx)(t.h2,{id:"tilestats",children:"tilestats"}),"\n",(0,d.jsx)(t.p,{children:'`tilestats`` is an inofficial "extension" to TileJSON. It provides column statistics, notably:'}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"the data type of each column"}),"\n",(0,d.jsx)(t.li,{children:"min/max values for numeric columns (enabling e.g. global color scale calculations)."}),"\n",(0,d.jsx)(t.li,{children:"a sample of values for each column"}),"\n"]}),"\n",(0,d.jsx)(t.p,{children:'tilestats provide "global" information about the data in the tileset that can allows for e.g.\nthe creation of correct color maps that do not depend on the view (which requires knowing a priori the min and max values of each field / column).'}),"\n",(0,d.jsxs)(t.p,{children:["Note that tilestats are not always available for a given tileset, so applications must be prepared to work in their absence.\nHowever, tilestats are output by major tilers such as ",(0,d.jsx)(t.a,{href:"https://github.com/mapbox/mapbox-geostats#output-the-stats",children:"tippecanoe"}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"format-description",children:"Format Description"}),"\n",(0,d.jsxs)(t.p,{children:["loaders.gl returns a typed ",(0,d.jsx)(t.code,{children:"TileJSON"})," object, with merged tilestats information (if present)."]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-typescript",children:"export type TileJSON\n"})}),"\n",(0,d.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Data"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"TileJSON"}),(0,d.jsx)(t.th,{children:"tilestats"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Name of the tileset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"description?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Short description of the tileset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"version?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Version of the tileset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"tileFormat?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Format of the tiles in the tileset.."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"tilesetType?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Type of tileset."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"generator?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Generating application. (e.g. tippecanoe adds this)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"generatorOptions?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Generating application options. (e.g. tippecanoe adds this)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"scheme?"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"'xyz'"})," | ",(0,d.jsx)(t.code,{children:"'tms'"})]}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["Tile indexing scheme. Typically ",(0,d.jsx)(t.code,{children:"tms"}),", i.e ",(0,d.jsx)(t.code,{children:"z/x/y"})," coordinates."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"tiles?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Sharded URLs (can increased loading speed on HTTP 1 connections)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boundingBox?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"[[w, s], [e, n]]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"limits of bounding box using axis units and order of specified CRS."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"maxZoom?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"May be set to the maxZoom of the first layer"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"minZoom?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"May be set to the minZoom of the first layer"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"center?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Center point of the data in the tileset"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"htmlAttribution?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Attribution (can contain HTML syntax)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"htmlLegend?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Legend (can contain HTML syntax)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"layers?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TileJSONLayer[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Layer information (combines tilestats (if present) and tilejson info)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"metaJson?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"any"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Any unparsed, nested JSON metadata"})]})]})]}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:"boundingBox"})," typing: ",(0,d.jsx)(t.code,{children:"[min: [w: number, s: number], max: [e: number, n: number]]"})]}),"\n"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-ts",children:"export type TileJSONLayer;\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Data"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"TileJSON"}),(0,d.jsx)(t.th,{children:"tilestats"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The name (id) of this layer (tilejson.vector_layers[].id / tilestats.layers[].layer)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"description?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The description of this layer (tilejson.layer.description)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"featureCount?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The number of features in this layer (tilestats.layer.count)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"dominantGeometry?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The dominant geometry type in this layer (tilestats.layer.geometry)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"minZoom?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"An array of details about the first 100 attributes in this layer"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"maxZoom?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"fields"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TileJSONField[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-ts",children:"export type TileJSONField;\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Data"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"TileJSON"}),(0,d.jsx)(t.th,{children:"tilestats"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The name of this attribute"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"description?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"type"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"min?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["min value (if there are ",(0,d.jsx)(t.em,{children:"any"})," numbers in the values)"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"max?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["max value (if there are ",(0,d.jsx)(t.em,{children:"any"})," numbers in the values)"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"uniqueValueCount?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Number of unique values across the tileset"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"values?"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"unknown[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"An array of this attribute's first 100 unique values"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var d=s(67294);const i={},n=d.createContext(i);function r(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);