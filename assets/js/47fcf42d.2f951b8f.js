"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[399],{16411:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var r=s(85893),i=s(11151);const n={},d="LAS / LAZ",o={id:"modules/las/formats/las",title:"LAS / LAZ",description:"- @loaders.gl/las",source:"@site/../docs/modules/las/formats/las.md",sourceDirName:"modules/las/formats",slug:"/modules/las/formats/las",permalink:"/docs/modules/las/formats/las",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/las/formats/las.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCX",permalink:"/docs/modules/kml/formats/tcx"},next:{title:"Mapbox Vector Tile",permalink:"/docs/modules/mvt/formats/mvt"}},l={},a=[{value:"Variants",id:"variants",level:2},{value:"Version History",id:"version-history",level:2},{value:"File Structure",id:"file-structure",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"las--laz",children:"LAS / LAZ"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"/docs/modules/las",children:(0,r.jsx)(t.code,{children:"@loaders.gl/las"})})})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/LAS_file_format",children:"Wikipedia"})})," - ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"https://www.loc.gov/preservation/digital/formats/fdd/fdd000418.shtml",children:"LAS Spec"})})," - ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities",children:"LASER file format"})})," - ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"https://github.com/LASzip/LASzip",children:"LASzip project"})})," - ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"https://www.cs.unc.edu/~isenburg/lastools/download/laszip.pdf",children:"LAZ spec"})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"LASER file format"})," (LAS) and its compressed version (LAZ) are public formats for the interchange of 3-dimensional point cloud data data, developed for LIDAR mapping purposes."]}),"\n",(0,r.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t.p,{children:"LAS file format is not compressed. However there is an open source project (LASzip) which defined and implemented the open file format LAZ to losslessly compress LAS data."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variant"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LAS"}),(0,r.jsx)(t.td,{children:"Uncompressed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LAZ"}),(0,r.jsx)(t.td,{children:"Lossless compression."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"version-history",children:"Version History"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Version"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Date"})}),(0,r.jsx)(t.th,{children:(0,r.jsxs)(t.strong,{children:["loaders.gl",(0,r.jsx)("br",{}),"Support"]})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.4"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"64 bit support"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.3"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Extended variable length records (EVLR) to hold longer metadata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.2"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.0"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Notes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Work on LAS 2.0 was started but was suspended indefinitely."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,r.jsx)(t.p,{children:"A LAS file consists of sections:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Section"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Public header block"}),(0,r.jsx)(t.td,{children:"Describes format, number of points, extent of the point cloud and other generic data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Variable length records (VLR)"}),(0,r.jsx)(t.td,{children:"Any number of optional records (up to 64K bytes) to provide various data such as the spatial reference system used, metadata, waveform packet information and user application data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Point data records"}),(0,r.jsx)(t.td,{children:"Data for each of the individual points in the point cloud, including coordinates, classification (e.g. terrain or building), flight and scan data, etc."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Extended variable length records (EVLR)"}),(0,r.jsx)(t.td,{children:"From v1.3. Similar to VLRs but located after the point data records and allow a much larger data payload per record due to the use of 8-byte size descriptors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Point data records"}),(0,r.jsx)(t.td,{children:"A LAS file contains point records in one of the point data record formats defined by the LAS specification"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Notes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"As of LAS 1.4, there are 11 point data record formats (0 through 10) available. All point data records must be of the same format within the file. The various formats differ in the data fields available, such as GPS time, RGB and NIR color and wave packet information."}),"\n",(0,r.jsx)(t.li,{children:"The 3D point coordinates are represented within the point data records by 32-bit integers, to which a scaling and offset defined in the public header must be applied in order to obtain the actual coordinates."}),"\n",(0,r.jsx)(t.li,{children:'As the number of bytes used per point data record is explicitly given in the public header block, it is possible to add user-defined fields in "extra bytes" to the fields given by the specification-defined point data record formats. A standardized way of interpreting such extra bytes was introduced in the LAS 1.4 specification, in the form of a specific EVLR.'}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>d});var r=s(67294);const i={},n=r.createContext(i);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);