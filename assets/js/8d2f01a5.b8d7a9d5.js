"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2339],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,A=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=p(t),u=n,m=i["".concat(l,".").concat(u)]||i[u]||f[u]||A;return t?o.createElement(m,a(a({ref:r},s),{},{components:t})):o.createElement(m,a({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var A=t.length,a=new Array(A);a[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[i]="string"==typeof e?e:n,a[1]=c;for(var p=2;p<A;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>A,metadata:()=>c,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const A={},a="Apache Arrow",c={unversionedId:"modules/arrow/formats/arrow",id:"modules/arrow/formats/arrow",title:"Apache Arrow",description:"arrow-logo",source:"@site/../docs/modules/arrow/formats/arrow.md",sourceDirName:"modules/arrow/formats",slug:"/modules/arrow/formats/arrow",permalink:"/docs/modules/arrow/formats/arrow",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/arrow/formats/arrow.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p},i="wrapper";function f(e){let{components:r,...A}=e;return(0,n.kt)(i,(0,o.Z)({},s,A,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-arrow"},"Apache Arrow"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"arrow-logo",src:t(22301).Z,width:"200",height:"73"})),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/arrowjs"},"ArrowJS")," documentation."))}f.isMDXComponent=!0},22301:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,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"}}]);