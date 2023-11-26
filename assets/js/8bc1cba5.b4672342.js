"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2833],{27121:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=r(85893),i=r(11151);const t={},o="postProcessGLTF",d={id:"modules/gltf/api-reference/post-process-gltf",title:"postProcessGLTF",description:"The postProcessGLTF function transforms standards-compliant glTF JSON",source:"@site/../docs/modules/gltf/api-reference/post-process-gltf.md",sourceDirName:"modules/gltf/api-reference",slug:"/modules/gltf/api-reference/post-process-gltf",permalink:"/docs/modules/gltf/api-reference/post-process-gltf",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/gltf/api-reference/post-process-gltf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GLTFScenegraph",permalink:"/docs/modules/gltf/api-reference/gltf-scenegraph"},next:{title:"Overview",permalink:"/docs/modules/i3s/"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>postProcessGLTF(gltf : GLTFWithBuffers, options?) : GLTFPostprocessed</code>",id:"postprocessgltfgltf--gltfwithbuffers-options--gltfpostprocessed",level:3},{value:"Post Processing Summary",id:"post-processing-summary",level:2},{value:"Post Processing of glTF Extensions",id:"post-processing-of-gltf-extensions",level:2},{value:"Detailed Post Processing Notes",id:"detailed-post-processing-notes",level:2},{value:"Replace indices with references",id:"replace-indices-with-references",level:3},{value:"Adds <code>id</code> to every node",id:"adds-id-to-every-node",level:3},{value:"Node Specific Post Processing",id:"node-specific-post-processing",level:2},{value:"Buffers",id:"buffers",level:3},{value:"BufferViews",id:"bufferviews",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Images",id:"images",level:2},{value:"Materials",id:"materials",level:3},{value:"Samplers",id:"samplers",level:3},{value:"Texture",id:"texture",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"postprocessgltf",children:"postProcessGLTF"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"postProcessGLTF"})," function transforms standards-compliant glTF JSON\ninto an inter-linked JavaScript data structure that it significantly easier to work with."]}),"\n",(0,n.jsx)(s.p,{children:"For details see below."}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import {load} from '@loaders.gl.core';\nimport {GLTFLoader, postProcessGLTF} from '@loaders.gl/gltf';\n\nconst gltfWithBuffers = await load(url, GLTFLoader);\nconst processedGLTF = postProcessGLTF(gltfWithBuffers);\n"})}),"\n",(0,n.jsx)(s.p,{children:"After post-processing, the gltf scenegraphs are now easier to iterate over as indices have been resolved to object references:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"const scenegraph = processedGLTF.scenegraphs[0];\nfor (const node of scenegraph.nodes) {\n  // no need to resolve indices\n  if (node.mesh.primitives) {\n    // Ditto\n    // ...\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(s.h3,{id:"postprocessgltfgltf--gltfwithbuffers-options--gltfpostprocessed",children:(0,n.jsx)(s.code,{children:"postProcessGLTF(gltf : GLTFWithBuffers, options?) : GLTFPostprocessed"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"gltf"})," is expected to have ",(0,n.jsx)(s.code,{children:"json"})," and ",(0,n.jsx)(s.code,{children:"buffers"})," fields per the GLTF Data Format Category."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"options.uri"})," - Set base URI (for image loading)"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The GLTF post processor copies objects in the input gltf json field as necessary to avoid modifying the input JSON, but does not do a deep copy on sub-objects that do not need to be modified."}),"\n",(0,n.jsx)(s.h2,{id:"post-processing-summary",children:"Post Processing Summary"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"postProcessGLTF"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Returns a strongly typed "modified version" of glTF: ',(0,n.jsx)(s.code,{children:"GLTFPostprocessed"})]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"GLTFPostprocessed"})," type has less optional fields. Many optional ",(0,n.jsx)(s.code,{children:"GLTF"})," fields will be required and populated with empty arrays etc as appropriate."]}),"\n",(0,n.jsx)(s.li,{children:'"Resolves" references to GLTF objects. glTF objects reference other object with integer indexes. Such indexes will be replaced with object references, simplifying iteration over the scenegraph.'}),"\n",(0,n.jsxs)(s.li,{children:["Generates required ",(0,n.jsx)(s.code,{children:"id"})," fields for all objects."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"post-processing-of-gltf-extensions",children:"Post Processing of glTF Extensions"}),"\n",(0,n.jsx)(s.p,{children:'Mhile many glTF extensions can only be handled in the final renderer, some extensions are "structural" and can be processed during the loading / post processing stage.'}),"\n",(0,n.jsx)(s.p,{children:"Such structural extensions may represent alternate, optional, more efficient ways to store data etc.\nExamples are mesh compressions such as Draco, or alternate image formats for textures."}),"\n",(0,n.jsx)(s.p,{children:"By handling these extensions during loading, less work needs to be done by the upstream renderer."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Extension"}),(0,n.jsx)(s.th,{children:"Preprocessed"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[KHR_draco_mesh_compression][KHR_draco_mesh_compression]"}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Decompresses draco-compressed geometries"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[EXT_meshopt_compression][EXT_meshopt_compression])"}),(0,n.jsx)(s.td,{children:"Y"}),(0,n.jsx)(s.td,{children:"Decompresses meshopt-compressed geometries"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"detailed-post-processing-notes",children:"Detailed Post Processing Notes"}),"\n",(0,n.jsx)(s.h3,{id:"replace-indices-with-references",children:"Replace indices with references"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"postProcessGLTF"})," replaces glTF indices with object references to simplify iteration over the scenegraph."]}),"\n",(0,n.jsxs)(s.p,{children:["Background: The GLTF file format describes a tree structure, however it links nodes through numeric indices rather than direct references. (As an example the ",(0,n.jsx)(s.code,{children:"nodes"})," field in the top-level glTF ",(0,n.jsx)(s.code,{children:"scenegraph"})," array is an array of indices into the top-level ",(0,n.jsx)(s.code,{children:"nodes"})," array. Each node has a ",(0,n.jsx)(s.code,{children:"mesh"})," attribute that is an index into to the ",(0,n.jsx)(s.code,{children:"meshes"})," array, and so on)."]}),"\n",(0,n.jsxs)(s.h3,{id:"adds-id-to-every-node",children:["Adds ",(0,n.jsx)(s.code,{children:"id"})," to every node"]}),"\n",(0,n.jsxs)(s.p,{children:["The postprocessor makes sure each node and an ",(0,n.jsx)(s.code,{children:"id"})," value, unless already present."]}),"\n",(0,n.jsx)(s.h2,{id:"node-specific-post-processing",children:"Node Specific Post Processing"}),"\n",(0,n.jsx)(s.h3,{id:"buffers",children:"Buffers"}),"\n",(0,n.jsxs)(s.p,{children:["The following fields will be populated from the supplied ",(0,n.jsx)(s.code,{children:"gltf.buffers"})," parameter (this parameter is populated by the loader via ",(0,n.jsx)(s.code,{children:"options.loadLinkedResources: true"}),"):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"buffer.arrayBuffer"})," -"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"buffer.byteOffset"})," -"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"buffer.byteLength"})," -"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bufferviews",children:"BufferViews"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"bufferView.data"})," - Typed arrays (",(0,n.jsx)(s.code,{children:"Uint8Arrays"}),") will be created for buffer views and stored in this field. These typed arrays can be used to upload data to WebGL buffers."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"accessors",children:"Accessors"}),"\n",(0,n.jsxs)(s.p,{children:["The accessor parameters which are textual strings in glTF will be resolved into WebGL constants (which are just numbers, e.g. ",(0,n.jsx)(s.code,{children:"5126"})," = ",(0,n.jsx)(s.code,{children:"GL.FLOAT"}),"), to prepare for use with WebGL frameworks."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"accessor.value"})," - This will be set to a typed array that is a view into the underlying bufferView."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Remarks:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["While it can be very convenient to initialize WebGL buffers from ",(0,n.jsx)(s.code,{children:"accessor.value"}),", this approach will defeat any memory sharing on the GPU that the glTF file specifies through accessors sharing ",(0,n.jsx)(s.code,{children:"bufferViews"}),". The canonical way of instantitating a glTF model is for an application to create one WebGL buffer for each ",(0,n.jsx)(s.code,{children:"bufferView"})," and then use accessors to reference data chunks inside those WebGL buffers with ",(0,n.jsx)(s.code,{children:"offset"})," and ",(0,n.jsx)(s.code,{children:"stride"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"images",children:"Images"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"image.image"})," - Populated from the supplied ",(0,n.jsx)(s.code,{children:"gltf.images"})," array. This array is populated by the ",(0,n.jsx)(s.code,{children:"GLTFLoader"})," via ",(0,n.jsx)(s.code,{children:"options.loadImages: true"}),"):"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"image.uri"})," - If loaded image in the ",(0,n.jsx)(s.code,{children:"images"})," array is not available, uses ",(0,n.jsx)(s.code,{children:"gltf.baseUri"})," or ",(0,n.jsx)(s.code,{children:"options.baseUri"})," is available, to resolve a relative URI and replaces this value."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"materials",children:"Materials"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"...texture"})," - Since each texture object in the material has an ",(0,n.jsx)(s.code,{children:"...index"})," field next to other fields, the post processor will add a ",(0,n.jsx)(s.code,{children:"...texture"})," field instead of replacing the ",(0,n.jsx)(s.code,{children:"...index"})," field."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"samplers",children:"Samplers"}),"\n",(0,n.jsx)(s.p,{children:"Modifies"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"parameters"})," - see table"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Sampler parameters (which are textual in glTF) will be resolved into WebGL constants."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"glTF constant"}),(0,n.jsx)(s.th,{children:"WebGL constant"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"magFilter"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GL.TEXTURE_MAG_FILTER"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"minFilter"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GL.TEXTURE_MIN_FILTER"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"wrapS"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GL.TEXTURE_WRAP_S"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"wrapT"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GL.TEXTURE_WRAP_T"})})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"texture",children:"Texture"}),"\n",(0,n.jsx)(s.p,{children:"Modifies"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"sampler"})," - will be resolved the the corresponding image object."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"source"})," - will be resolved the the corresponding image object."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>o});var n=r(67294);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);