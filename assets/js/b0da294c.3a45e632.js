"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9087],{27429:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(85893),r=t(11151);const i={},l="glTF - gl Transfer Format",o={id:"modules/gltf/formats/gltf",title:"glTF - gl Transfer Format",description:"- @loaders.gl/gltf",source:"@site/../docs/modules/gltf/formats/gltf.md",sourceDirName:"modules/gltf/formats",slug:"/modules/gltf/formats/gltf",permalink:"/docs/modules/gltf/formats/gltf",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/gltf/formats/gltf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GLB - glTF Binary Format",permalink:"/docs/modules/gltf/formats/glb"},next:{title:"Geopackage",permalink:"/docs/modules/geopackage/formats/geopackage"}},a={},d=[{value:"Variants",id:"variants",level:2},{value:"Version History",id:"version-history",level:2},{value:"glTF 2.0",id:"gltf-20",level:3},{value:"glTF 1.0",id:"gltf-10",level:3},{value:"glTF Extensions",id:"gltf-extensions",level:2},{value:"Official Extensions",id:"official-extensions",level:2},{value:"KHR_draco_mesh_compression",id:"khr_draco_mesh_compression",level:3},{value:"KHR_lights_punctual",id:"khr_lights_punctual",level:3},{value:"KHR_materials_unlit",id:"khr_materials_unlit",level:3},{value:"KHR_texture_basisu",id:"khr_texture_basisu",level:3},{value:"KHR_texture_transform",id:"khr_texture_transform",level:3},{value:"Custom Extensions",id:"custom-extensions",level:2},{value:"EXT_meshopt_compression",id:"ext_meshopt_compression",level:3},{value:"EXT_feature_metadata",id:"ext_feature_metadata",level:3},{value:"EXT_mesh_features",id:"ext_mesh_features",level:3},{value:"EXT_structural_metadata",id:"ext_structural_metadata",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"gltf---gl-transfer-format",children:"glTF - gl Transfer Format"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"/docs/modules/gltf",children:(0,n.jsx)(s.code,{children:"@loaders.gl/gltf"})})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",children:"glTF specification"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/GlTF",children:"Wikipedia article"})})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'glTF is a standard file format for three-dimensional scenes and models, intended to be a streamlined, interoperable format for the delivery of 3D assets, while minimizing file size and runtime processing by apps. Sometimes described as the "JPEG of 3D."'}),"\n",(0,n.jsx)(s.p,{children:"An open standard developed and maintained by the Khronos Group, it supports 3D model geometry, appearance, scene graph hierarchy, and animation."}),"\n",(0,n.jsx)(s.h2,{id:"variants",children:"Variants"}),"\n",(0,n.jsx)(s.p,{children:"A glTF file uses one of two possible file extensions: .gltf (JSON/ASCII) or .glb (binary). Both .gltf and .glb files may reference external binary and texture resources. Alternatively, both formats may be self-contained by directly embedding binary data buffers (as base64-encoded strings in .gltf files or as raw byte arrays in .glb files)."}),"\n",(0,n.jsx)(s.h2,{id:"version-history",children:"Version History"}),"\n",(0,n.jsx)(s.h3,{id:"gltf-20",children:"glTF 2.0"}),"\n",(0,n.jsx)(s.p,{children:"-GLB was incorporated directly into glTF 2.0."}),"\n",(0,n.jsx)(s.h3,{id:"gltf-10",children:"glTF 1.0"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"GLB was introduced as an extension."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"gltf-extensions",children:"glTF Extensions"}),"\n",(0,n.jsxs)(s.p,{children:["glTF extensions can be present in glTF files, and will be present in the parsed JSON. glTF extensions can be supported by applications by inspecting the ",(0,n.jsx)(s.code,{children:"extensions"})," fields inside glTF objects, and it is up to each application to handle or ignore them."]}),"\n",(0,n.jsxs)(s.p,{children:["loaders.gl aims to provide support for glTF extensions that can be handled completely or partially during loading, and article describes glTF extensions that are fully or partially processed by the ",(0,n.jsx)(s.code,{children:"@loaders.gl/gltf"})," classes."]}),"\n",(0,n.jsx)(s.p,{children:"Note that many glTF extensions affect aspects that are firmly outside of the scope of loaders.gl (e.g. rendering), and no attempt is made to process those extensions in loaders.gl."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Extension"}),(0,n.jsx)(s.th,{children:"Preprocessed"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#khr_draco_mesh_compression",children:"KHR_draco_mesh_compression"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Decompresses draco-compressed geometries"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#ext_meshopt_compression",children:"EXT_meshopt_compression"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Decompresses meshopt-compressed geometries"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#khr_texture_basisu",children:"KHR_texture_basisu"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Adds the ability to specify textures using KTX v2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#khr_texture_transform",children:"KHR_texture_transform"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Adds transformation properties (translation, rotation, scale) for TEXCOORD_ mesh attribute"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"KHR_texture_webp"}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#ext_mesh_features",children:"EXT_mesh_features"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"3D tiles extension"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#ext_structural_metadata",children:"EXT_structural_metadata"})}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"3D tiles extension"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#khr_lights_punctual",children:"KHR_lights_punctual"})}),(0,n.jsx)(s.td,{children:"Y*"}),(0,n.jsx)(s.td,{children:"Deprecated"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#khr_materials_unlit",children:"KHR_materials_unlit"})}),(0,n.jsx)(s.td,{children:"Y*"}),(0,n.jsx)(s.td,{children:"Deprecated"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#ext_feature_metadata",children:"EXT_feature_metadata"})}),(0,n.jsx)(s.td,{children:"Y*"}),(0,n.jsx)(s.td,{children:"Deprecated. 3D tiles extension"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"official-extensions",children:"Official Extensions"}),"\n",(0,n.jsx)(s.h3,{id:"khr_draco_mesh_compression",children:"KHR_draco_mesh_compression"}),"\n",(0,n.jsx)(s.p,{children:"Supports compression of mesh attributes (geometry)."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"GLTFLoader"})," by default fully decompresses draco compressed geometries, removing the draco extension and the compressed data from the parsed glTF data structure."]}),"\n",(0,n.jsxs)(s.p,{children:["Specification: ",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression",children:"KHR_draco_mesh_compression"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Parsing Support:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["By adding the ",(0,n.jsx)(s.code,{children:"decompress: true"})," options to the ",(0,n.jsx)(s.code,{children:"GLTFParser"})," any decompressed by the ",(0,n.jsx)(s.code,{children:"GLTFParser"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"The expanded attributes are placed in the mesh object (effectively making it look as if it had never been compressed)."}),"\n",(0,n.jsx)(s.li,{children:"The extension objects are removed from the glTF file."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Encoding Support:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Meshes can be compressed as they are added to the ",(0,n.jsx)(s.code,{children:"GLTFBuilder"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"khr_lights_punctual",children:"KHR_lights_punctual"}),"\n",(0,n.jsx)(s.p,{children:"Supports specification of point light sources and addition of such sources to the scenegraph node."}),"\n",(0,n.jsxs)(s.p,{children:["Specification: ",(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual",children:"KHR_lights_punctual"})]}),"\n",(0,n.jsx)(s.p,{children:"Parsing Support:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Any nodes with a ",(0,n.jsx)(s.code,{children:"KHR_lights_punctual"})," extension will get a ",(0,n.jsx)(s.code,{children:"light"})," field with value containing a light definition object with properties defining the light (this object will be resolved by index from the global ",(0,n.jsx)(s.code,{children:"KHR_lights_punctual"})," extension object's ",(0,n.jsx)(s.code,{children:"lights"})," array) ."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"KHR_lights_punctual"})," extensions will be removed from all nodes."]}),"\n",(0,n.jsxs)(s.li,{children:["Finally, the global ",(0,n.jsx)(s.code,{children:"KHR_lights_punctual"})," extension (including its light list)) will be removed."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Encoding Support:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"N/A"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"khr_materials_unlit",children:"KHR_materials_unlit"}),"\n",(0,n.jsx)(s.p,{children:"Specifies that a material should not be affected by light. Useful for pre-lit materials (e.g. photogrammetry)."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit",children:"KHR_materials_unlit"})}),"\n",(0,n.jsx)(s.h3,{id:"khr_texture_basisu",children:"KHR_texture_basisu"}),"\n",(0,n.jsx)(s.p,{children:"This extension adds the ability to specify textures using KTX v2 images with Basis Universal supercompression."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"GLTFLoader"})," by default fully decompresses compressed textures, removing the basisu extension and the compressed data from the parsed glTF data structure."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu",children:"KHR_texture_basisu"})}),"\n",(0,n.jsx)(s.h3,{id:"khr_texture_transform",children:"KHR_texture_transform"}),"\n",(0,n.jsx)(s.p,{children:"Many techniques can be used to optimize resource usage for a 3d scene. Chief among them is the ability to minimize the number of textures the GPU must load. To achieve this, many engines encourage packing many objects' low-resolution textures into a single large texture atlas. The region of the resulting atlas that corresponds with each object is then defined by vertical and horizontal offsets, and the width and height of the region."}),"\n",(0,n.jsx)(s.p,{children:"To support this use case, this extension adds offset, rotation, and scale properties to textureInfo structures."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/blob/de6db2d6f817586bce9965d320acf03935580b34/extensions/2.0/Khronos/KHR_texture_transform/README.md",children:"KHR_texture_transform"})}),"\n",(0,n.jsx)(s.h2,{id:"custom-extensions",children:"Custom Extensions"}),"\n",(0,n.jsx)(s.h3,{id:"ext_meshopt_compression",children:"EXT_meshopt_compression"}),"\n",(0,n.jsxs)(s.p,{children:["This extension provides a support for the meshopt binary geometry data compression format that is tailored to the common types of data seen in glTF buffers.\nThe ",(0,n.jsx)(s.code,{children:"GLTFLoader"})," by default fully decompresses meshopt compressed geometries, removing the meshopt extension and the compressed data from the parsed glTF data structure."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression",children:"EXT_meshopt_compression"})}),"\n",(0,n.jsx)(s.h3,{id:"ext_feature_metadata",children:"EXT_feature_metadata"}),"\n",(0,n.jsx)(s.p,{children:"3D tiles extension by Cesium. This extension allows batching features for efficient streaming to a client for rendering and interaction."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/CesiumGS/glTF/tree/c38f7f37e894004353c15cd0481bc5b7381ce841/extensions/2.0/Vendor/EXT_feature_metadata",children:"EXT_feature_metadata"})}),"\n",(0,n.jsx)(s.h3,{id:"ext_mesh_features",children:"EXT_mesh_features"}),"\n",(0,n.jsx)(s.p,{children:"3D tiles extension by Cesium. This extension defines a means of assigning identifiers to geometry and subcomponents of geometry within a glTF 2.0 asset."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/CesiumGS/glTF/tree/c38f7f37e894004353c15cd0481bc5b7381ce841/extensions/2.0/Vendor/EXT_mesh_features",children:"EXT_mesh_features"})}),"\n",(0,n.jsx)(s.h3,{id:"ext_structural_metadata",children:"EXT_structural_metadata"}),"\n",(0,n.jsx)(s.p,{children:"3D tiles extension by Cesium. This extension defines a means of storing structured metadata within a glTF 2.0 asset."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata",children:"EXT_structural_metadata"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>l});var n=t(67294);const r={},i=n.createContext(r);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);