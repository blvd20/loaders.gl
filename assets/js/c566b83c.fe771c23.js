"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8742],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(n),N=l,g=u["".concat(d,".").concat(N)]||u[N]||k[N]||r;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},92185:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={},i="WKB - Well-Known Binary",p={unversionedId:"modules/wkt/formats/wkb",id:"modules/wkt/formats/wkb",title:"WKB - Well-Known Binary",description:"ogc-logo",source:"@site/../docs/modules/wkt/formats/wkb.md",sourceDirName:"modules/wkt/formats",slug:"/modules/wkt/formats/wkb",permalink:"/docs/modules/wkt/formats/wkb",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wkt/formats/wkb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WKT - Well-Known Text",permalink:"/docs/modules/wkt/formats/wkt"},next:{title:"WKT-CRS - Well-Known Text for Coordinate Reference Systems",permalink:"/docs/modules/wkt/formats/wkt-crs"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Variations",id:"variations",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Version History",id:"version-history",level:2},{value:"Ecosystem Support",id:"ecosystem-support",level:2},{value:"Format Details",id:"format-details",level:2}],o={toc:m},u="wrapper";function k(t){let{components:e,...r}=t;return(0,l.kt)(u,(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wkb---well-known-binary"},"WKB - Well-Known Binary"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ogc-logo",src:n(63411).Z,width:"119",height:"60"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"/docs/modules/wkt"},(0,l.kt)("inlineCode",{parentName:"a"},"@loaders.gl/wkt"))))),(0,l.kt)("p",null,"Well-Known Binary (WKB) is a binary version of Well-known Text"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Well-known binary (WKB) representations are typically shown in hexadecimal strings."),(0,l.kt)("h2",{id:"variations"},"Variations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EKWB - Adds spatial reference systems"),(0,l.kt)("li",{parentName:"ul"},"TWKB")),(0,l.kt)("h2",{id:"alternatives"},"Alternatives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WKT"),(0,l.kt)("li",{parentName:"ul"},"GeoJSON Geometry"),(0,l.kt)("li",{parentName:"ul"},"GML Geometry ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Support"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WKB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TWKB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"WKB variant reduces binary size ~2x.")))),(0,l.kt)("p",null,"TWKB uses varints, precision truncation and zigzag point encoding to reduce binary size ~2x (however compressed size reduction is less)"),(0,l.kt)("h2",{id:"version-history"},"Version History"),(0,l.kt)("p",null,"TBA."),(0,l.kt)("h2",{id:"ecosystem-support"},"Ecosystem Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PostGIS offers a function to return geometries in TWKB format: ",(0,l.kt)("a",{parentName:"li",href:"https://postgis.net/docs/ST_AsTWKB.html"},"ST_AsTWKB"),".")),(0,l.kt)("h2",{id:"format-details"},"Format Details"),(0,l.kt)("p",null,"The first byte indicates the byte order for the data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"00 : big endian"),(0,l.kt)("li",{parentName:"ul"},"01 : little endian")),(0,l.kt)("p",null,"The next 4 bytes are a 32-bit unsigned integer for the geometry type, as described below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported"),(0,l.kt)("th",{parentName:"tr",align:null},"2D"),(0,l.kt)("th",{parentName:"tr",align:null},"Z"),(0,l.kt)("th",{parentName:"tr",align:null},"M"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Geometry")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0000"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"2000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Point")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"1001"),(0,l.kt)("td",{parentName:"tr",align:null},"2001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LineString")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0002"),(0,l.kt)("td",{parentName:"tr",align:null},"1002"),(0,l.kt)("td",{parentName:"tr",align:null},"2002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Polygon")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0003"),(0,l.kt)("td",{parentName:"tr",align:null},"1003"),(0,l.kt)("td",{parentName:"tr",align:null},"2003")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MultiPoint")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0004"),(0,l.kt)("td",{parentName:"tr",align:null},"1004"),(0,l.kt)("td",{parentName:"tr",align:null},"2004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MultiLineString")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0005"),(0,l.kt)("td",{parentName:"tr",align:null},"1005"),(0,l.kt)("td",{parentName:"tr",align:null},"2005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MultiPolygon")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"0006"),(0,l.kt)("td",{parentName:"tr",align:null},"1006"),(0,l.kt)("td",{parentName:"tr",align:null},"2006")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GeometryCollection")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 ","*"),(0,l.kt)("td",{parentName:"tr",align:null},"0007"),(0,l.kt)("td",{parentName:"tr",align:null},"1007"),(0,l.kt)("td",{parentName:"tr",align:null},"2007")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CircularString")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0008"),(0,l.kt)("td",{parentName:"tr",align:null},"1008"),(0,l.kt)("td",{parentName:"tr",align:null},"2008")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CompoundCurve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0009"),(0,l.kt)("td",{parentName:"tr",align:null},"1009"),(0,l.kt)("td",{parentName:"tr",align:null},"2009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CurvePolygon")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0010"),(0,l.kt)("td",{parentName:"tr",align:null},"1010"),(0,l.kt)("td",{parentName:"tr",align:null},"2010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MultiCurve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0011"),(0,l.kt)("td",{parentName:"tr",align:null},"1011"),(0,l.kt)("td",{parentName:"tr",align:null},"2011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MultiSurface")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0012"),(0,l.kt)("td",{parentName:"tr",align:null},"1012"),(0,l.kt)("td",{parentName:"tr",align:null},"2012")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Curve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0013"),(0,l.kt)("td",{parentName:"tr",align:null},"1013"),(0,l.kt)("td",{parentName:"tr",align:null},"2013")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Surface")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0014"),(0,l.kt)("td",{parentName:"tr",align:null},"1014"),(0,l.kt)("td",{parentName:"tr",align:null},"2014")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PolyhedralSurface")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0015"),(0,l.kt)("td",{parentName:"tr",align:null},"1015"),(0,l.kt)("td",{parentName:"tr",align:null},"2015")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TIN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0016"),(0,l.kt)("td",{parentName:"tr",align:null},"1016"),(0,l.kt)("td",{parentName:"tr",align:null},"2016")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Triangle")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0017"),(0,l.kt)("td",{parentName:"tr",align:null},"1017"),(0,l.kt)("td",{parentName:"tr",align:null},"2017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Circle")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0018"),(0,l.kt)("td",{parentName:"tr",align:null},"1018"),(0,l.kt)("td",{parentName:"tr",align:null},"2018")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GeodesicString")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0019"),(0,l.kt)("td",{parentName:"tr",align:null},"1019"),(0,l.kt)("td",{parentName:"tr",align:null},"2019")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"EllipticalCurve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0020"),(0,l.kt)("td",{parentName:"tr",align:null},"1020"),(0,l.kt)("td",{parentName:"tr",align:null},"2020")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NurbsCurve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0021"),(0,l.kt)("td",{parentName:"tr",align:null},"1021"),(0,l.kt)("td",{parentName:"tr",align:null},"2021")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Clothoid")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0022"),(0,l.kt)("td",{parentName:"tr",align:null},"1022"),(0,l.kt)("td",{parentName:"tr",align:null},"2022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SpiralCurve")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0023"),(0,l.kt)("td",{parentName:"tr",align:null},"1023"),(0,l.kt)("td",{parentName:"tr",align:null},"2023")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CompoundSurface")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"0024"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"2024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BrepSolid")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1025"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AffinePlacement")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"102"),(0,l.kt)("td",{parentName:"tr",align:null},"1102"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Remarks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Many implementations, including loaders.gl, only handle the core GeoJSON geometry equivalents (points, line strings, polygons and to a varying degrees geometry collections of the same).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"GeometryCollection"))," can be difficult for some clients to handle.")))}k.isMDXComponent=!0},63411:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ogc-logo-60-8ee2c25a50ccc14293453512c707a0c4.png"}}]);