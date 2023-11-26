"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8639],{16674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={},a="WMSCapabilitiesLoader",o={id:"modules/wms/api-reference/wms-capabilities-loader",title:"WMSCapabilitiesLoader",description:"ogc-logo",source:"@site/../docs/modules/wms/api-reference/wms-capabilities-loader.md",sourceDirName:"modules/wms/api-reference",slug:"/modules/wms/api-reference/wms-capabilities-loader",permalink:"/docs/modules/wms/api-reference/wms-capabilities-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wms/api-reference/wms-capabilities-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WKTCRSWriter \ud83c\udd95 \ud83d\udea7",permalink:"/docs/modules/wkt/api-reference/wkt-crs-writer"},next:{title:"XMLLoader",permalink:"/docs/modules/xml/api-reference/xml-loader"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Parsed Data Format",id:"parsed-data-format",level:2},{value:"Options",id:"options",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"wmscapabilitiesloader",children:"WMSCapabilitiesLoader"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ogc-logo",src:t(63411).Z+"",width:"119",height:"60"})}),"\n",(0,s.jsxs)("p",{class:"badges",children:[(0,s.jsx)("img",{src:"https://img.shields.io/badge/From-v3.3-blue.svg?style=flat-square",alt:"From-3.3"}),(0,s.jsx)(n.p,{children:"\xa0"}),(0,s.jsx)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WMSCapabilitiesLoader"})," parses the XML-formatted response from the\nthe ",(0,s.jsx)(n.a,{href:"https://www.opengeospatial.org/",children:"OGC"})," ",(0,s.jsx)(n.a,{href:"https://www.ogc.org/standards/wms",children:"WMS"})," (Web Map Service) standard ",(0,s.jsx)(n.code,{children:"GetCapabilities"})," request into a strongly typed JavaScript data structure."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Loader"}),(0,s.jsx)(n.th,{children:"Characteristic"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"File Extension"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".xml"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"File Type"}),(0,s.jsx)(n.td,{children:"Text"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"File Format"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Web_Map_Service",children:"WMS"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Data Format"}),(0,s.jsx)(n.td,{children:"Data structure"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Decoder Type"}),(0,s.jsx)(n.td,{children:"Synchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Worker Thread Support"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Streaming Support"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {WMSCapabilitiesLoader} from '@loaders.gl/wms';\nimport {load} from '@loaders.gl/core';\n\n// Form a WMS request\nconst url = `${WMS_SERVICE_URL}?REQUEST=GetCapabilities`;\n\nconst data = await load(url, WMSCapabilitiesLoader, options);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parsed-data-format",children:"Parsed Data Format"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"/** All capabilities of a WMS service - response to a WMS `GetCapabilities` data structure extracted from XML */\nexport type WMSCapabilities = {\n  /** Version of the WMS service */\n  version?: string; // '1.3.0' | '1.1.1' | '1.1.0' | '1.0.0'\n  /** A short name for the service */\n  name: string;\n  /** A human readable name for the service */\n  title?: string;\n  /** A more extensive description of the service */\n  abstract?: string;\n  /** A set of keywords e.g. for searching services */\n  keywords: string[];\n  /** A field of unspecified format, if present describes any access constraints required to use the service. */\n  accessConstraints?: string;\n  /** A field of unspecified format, if present describes any fees associated with the use of the service */\n  fees?: string;\n  /** If present, the max number of layers that can be rendered by the service */\n  layerLimit?: number;\n  /** If present, the widest image that can be rendered by the service */\n  maxWidth?: number;\n  /** If present, the tallest image that can be rendered by the service */\n  maxHeight?: number;\n  /** Hierarchical list of layers. */\n  layers: WMSLayer[];\n  /** A map with information about supported WMS requests. If a record is present, the request is supported by the service */\n  requests: Record<string, WMSRequest>;\n  /** Information about any exceptions that the service will report (HTTP status != 2xx) */\n  exceptions?: WMSExceptions;\n  /** Only if `options.raw`: raw untyped JSON parsed from XML. Can include information not extracted in the typed response. */\n  raw?: Record<string, unknown>;\n  /** Only if `options.xml`, the unparsed XML string can be requested */\n  xml?: string;\n};\n\n/**\n * Metadata about a layer\n * Layers inherit many properties from their parent layers, see description of individual props for details.\n * @see https://www.ogc.org/standard/wms/ 7.2.4.6\n */\nexport type WMSLayer = {\n  /** The title is a human readable name. It is mandatory on each layer. Not inherited.  */\n  title: string;\n  /** A layer is renderable if it has a name. A named parent layer will render all its sublayers. Not inherited. */\n  name?: string;\n  /** A narrative description of the map layer. */\n  abstract?: string;\n  /** A set of keywords e.g. for searching layers */\n  keywords: string[];\n  /** layer limits in unspecified CRS:84-like lng/lat, for quick access w/o CRS calculations.  Defined or inherited. */\n  geographicBoundingBox?: [min: [x: number, y: number], max: [x: number, y: number]];\n  /** Supported CRS. Either defined or inherited. */\n  crs?: string[];\n  /** Bounding boxes in specific CRS:es */\n  boundingBoxes?: WMSBoundingBox[];\n\n  dimensions?: WMSDimension[]; // ?? 7.2.4.6.10\n\n  // minScale: number;\n  // maxScale: number;\n  // MetadataURL\n  // Attribution\n  // Identifier and AuthorityURL\n  // FeatureListURL\n  // DataURL\n\n  /** Whether queries can be performed on the layer */\n  queryable?: boolean;\n  /** `false` if layer has significant no-data areas that the client can display as transparent. */\n  opaque?: boolean;\n  /** WMS cascading allows server to expose layers coming from other WMS servers as if they were local layers */\n  cascaded?: boolean;\n  // noSubsets: boolean\n  // fixedWith: number\n  // fixedHeight: number\n\n  /** A list of styles. @note not yet supported by WMSCapabilitiesLoader */\n  styles?: unknown[];\n\n  /** Sublayers - these inherit crs and boundingBox) if not overridden) */\n  layers: WMSLayer[];\n};\n\n/**\n * A bounding box specifies the coordinate range for data in the layer.\n * No data is available outside the bounding box.\n */\nexport type WMSBoundingBox = {\n  /** CRS indicates the Layer CRS that applies to this bounding box. */\n  crs: string;\n  /** `[[w, s], [e, n]]`, indicates the limits of the bounding box using the axis units and order of the specified CRS. */\n  boundingBox: [min: [x: number, y: number], max: [x: number, y: number]];\n  /** Spatial horizontal resolution of data in same units as bounding box */\n  xResolution?: number;\n  /** Spatial vertical resolution of data in same units as bounding box */\n  yResolution?: number;\n};\n\n/** Metadata about a supported WMS request  */\nexport type WMSRequest = {\n  /** MIMEtypes that can be returned by this request. */\n  mimeTypes: string[];\n};\n\nexport type WMSExceptions = {\n  /** MIME types for exception response payloads. */\n  mimeTypes: string[];\n};\n\nexport type parseWMSCapabilitiesOptions = {\n  /** Add inherited layer information to sub layers */\n  inheritedLayerProps?: boolean;\n  /** Include the \"raw\" JSON (parsed but untyped, unprocessed XML). May contain additional fields */\n  includeRawData?: boolean;\n  /** Include the original XML document text. May contain additional information. */\n  includeXMLText?: boolean;\n  /** @deprecated Use includeRawData` */\n  raw?: boolean;\n\n  // xml options are passed through to xml loader\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"wms.inheritedLayerProps?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Adds inherited layer information from parent layers to sub layers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"wms.includeRawData?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:'Include the "raw" JSON (parsed but untyped, unprocessed XML). May contain additional fields'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"wms.includeXMLText?"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Include the original XML document text. May contain additional information."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(n.p,{children:["Note that the WMS standard is rather verbose and the XML responses contain some rarely used metadata fields and possibly some vendor specific fields, not all of which are extracted by this loader. If this is a problem, it is possible to inspect the output of the ",(0,s.jsx)(n.code,{children:"XMLLoader"}),", by setting the ",(0,s.jsx)(n.code,{children:"raw"})," option."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},63411:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ogc-logo-60-8ee2c25a50ccc14293453512c707a0c4.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);