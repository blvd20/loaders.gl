(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5026],{77045:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var i=n(81180),r=n(66507),s=n(14034),o=n(78866);const l={bearing:0,pitch:0,position:[0,0,0]},a={speed:1.2,curve:1.414};class h extends r.Z{constructor(t={}){super({compare:["longitude","latitude","zoom","bearing","pitch","position"],extract:["width","height","longitude","latitude","zoom","bearing","pitch","position"],required:["width","height","latitude","longitude","zoom"]}),(0,i.Z)(this,"opts",void 0),this.opts={...a,...t}}interpolateProps(t,e,n){const i=(0,o.if)(t,e,n,this.opts);for(const r in l)i[r]=(0,s.t7)(t[r]||l[r],e[r]||l[r],n);return i}getDuration(t,e){let{transitionDuration:n}=e;return"auto"===n&&(n=(0,o.up)(t,e,this.opts)),n}}},66931:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});const i="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n",r={lightSources:{}};function s(){let{color:t=[0,0,0],intensity:e=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.map((t=>t*e/255))}const o={name:"lights",vs:i,fs:i,getUniforms:function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if("lightSources"in e){const{ambientLight:t,pointLights:n,directionalLights:i}=e.lightSources||{};return t||n&&n.length>0||i&&i.length>0?Object.assign({},function(t){let{ambientLight:e,pointLights:n=[],directionalLights:i=[]}=t;const r={};return r["lighting_uAmbientLight.color"]=e?s(e):[0,0,0],n.forEach(((t,e)=>{r["lighting_uPointLight[".concat(e,"].color")]=s(t),r["lighting_uPointLight[".concat(e,"].position")]=t.position,r["lighting_uPointLight[".concat(e,"].attenuation")]=t.attenuation||[1,0,0]})),r.lighting_uPointLightCount=n.length,i.forEach(((t,e)=>{r["lighting_uDirectionalLight[".concat(e,"].color")]=s(t),r["lighting_uDirectionalLight[".concat(e,"].direction")]=t.direction})),r.lighting_uDirectionalLightCount=i.length,r}({ambientLight:t,pointLights:n,directionalLights:i}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in e){const n={pointLights:[],directionalLights:[]};for(const t of e.lights||[])switch(t.type){case"ambient":n.ambientLight=t;break;case"directional":n.directionalLights.push(t);break;case"point":n.pointLights.push(t)}return t({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}}},8674:(t,e,n)=>{"use strict";n.d(e,{N:()=>l,s:()=>a});var i=n(66931);const r="\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n",s={};function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(!("material"in t))return{};const{material:e}=t;return e?function(t){const{ambient:e=.35,diffuse:n=.6,shininess:i=32,specularColor:r=[30,30,30]}=t;return{lighting_uAmbient:e,lighting_uDiffuse:n,lighting_uShininess:i,lighting_uSpecularColor:r.map((t=>t/255))}}(e):{lighting_uEnabled:!1}}const l={name:"gouraud-lighting",dependencies:[i.H],vs:r,defines:{LIGHTING_VERTEX:1},getUniforms:o},a={name:"phong-lighting",dependencies:[i.H],fs:r,defines:{LIGHTING_FRAGMENT:1},getUniforms:o}},47084:function(t,e,n){var i=n(25108);!function(e){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:m,table:m,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function r(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=g(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=g(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=g(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=g(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=g(n._paragraph).replace("hr",n.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",n._tag).getRegex(),n.blockquote=g(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:g("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:m,paragraph:g(n.normal._paragraph).replace("hr",n.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",n.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),r.rules=n,r.lex=function(t,e){return new r(e).lex(t)},r.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},r.prototype.token=function(t,e){var i,r,s,o,l,a,h,c,u,g,d,f,_,m,b,y;for(t=t.replace(/^ +$/gm,"");t;)if((s=this.rules.newline.exec(t))&&(t=t.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(t)){var v=this.tokens[this.tokens.length-1];t=t.substring(s[0].length),v&&"paragraph"===v.type?v.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:x(s,"\n")}))}else if(s=this.rules.fences.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(t))&&(a={type:"table",header:k(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(t=t.substring(s[0].length),d=0;d<a.align.length;d++)/^ *-+: *$/.test(a.align[d])?a.align[d]="right":/^ *:-+: *$/.test(a.align[d])?a.align[d]="center":/^ *:-+ *$/.test(a.align[d])?a.align[d]="left":a.align[d]=null;for(d=0;d<a.cells.length;d++)a.cells[d]=k(a.cells[d],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,e),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(t)){for(t=t.substring(s[0].length),h={type:"list_start",ordered:m=(o=s[2]).length>1,start:m?+o:"",loose:!1},this.tokens.push(h),c=[],i=!1,_=(s=s[0].match(this.rules.item)).length,d=0;d<_;d++)g=(a=s[d]).length,~(a=a.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(g-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+g+"}","gm"),"")),d!==_-1&&(l=n.bullet.exec(s[d+1])[0],(o.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==o)&&(t=s.slice(d+1).join("\n")+t,d=_-1)),r=i||/\n\n(?!\s*$)/.test(a),d!==_-1&&(i="\n"===a.charAt(a.length-1),r||(r=i)),r&&(h.loose=!0),y=void 0,(b=/^\[[ xX]\] /.test(a))&&(y=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:b,checked:y,loose:r},c.push(u),this.tokens.push(u),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(_=c.length,d=0;d<_;d++)c[d].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(t))t=t.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):p(s[0]):s[0]});else if(e&&(s=this.rules.def.exec(t)))t=t.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),f=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(t))&&(a={type:"table",header:k(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(t=t.substring(s[0].length),d=0;d<a.align.length;d++)/^ *-+: *$/.test(a.align[d])?a.align[d]="right":/^ *:-+: *$/.test(a.align[d])?a.align[d]="center":/^ *:-+ *$/.test(a.align[d])?a.align[d]="left":a.align[d]=null;for(d=0;d<a.cells.length;d++)a.cells[d]=k(a.cells[d].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(e&&(s=this.rules.paragraph.exec(t)))t=t.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function o(t,e){if(this.options=e||w.defaults,this.links=t,this.rules=s.normal,this.renderer=this.options.renderer||new l,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function l(t){this.options=t||w.defaults}function a(){}function h(t){this.tokens=[],this.token=null,this.options=t||w.defaults,this.options.renderer=this.options.renderer||new l,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new c}function c(){this.seen={}}function p(t,e){if(e){if(p.escapeTest.test(t))return t.replace(p.escapeReplace,(function(t){return p.replacements[t]}))}else if(p.escapeTestNoEncode.test(t))return t.replace(p.escapeReplaceNoEncode,(function(t){return p.replacements[t]}));return t}function u(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""}))}function g(t,e){return t=t.source||t,e=e||"",{replace:function(e,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),t=t.replace(e,n),this},getRegex:function(){return new RegExp(t,e)}}}function d(t,e,n){if(t){try{var i=decodeURIComponent(u(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}e&&!_.test(n)&&(n=function(t,e){f[" "+t]||(/^[^:]+:\/*[^/]*$/.test(t)?f[" "+t]=t+"/":f[" "+t]=x(t,"/",!0));return t=f[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+e:t+e}(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n}s._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",s.em=g(s.em).replace(/punctuation/g,s._punctuation).getRegex(),s._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=g(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=g(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,s._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=g(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=g(s.reflink).replace("label",s._label).getRegex(),s.normal=b({},s),s.pedantic=b({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=b({},s.normal,{escape:g(s.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),s.gfm.url=g(s.gfm.url,"i").replace("email",s.gfm._extended_email).getRegex(),s.breaks=b({},s.gfm,{br:g(s.br).replace("{2,}","*").getRegex(),text:g(s.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),o.rules=s,o.output=function(t,e,n){return new o(e,n).output(t)},o.prototype.output=function(t){for(var e,n,i,r,s,l,a="";t;)if(s=this.rules.escape.exec(t))t=t.substring(s[0].length),a+=p(s[1]);else if(s=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.inRawBlock=!1),t=t.substring(s[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):p(s[0]):s[0];else if(s=this.rules.link.exec(t)){var h=y(s[2],"()");if(h>-1){var c=4+s[1].length+h;s[2]=s[2].substring(0,h),s[0]=s[0].substring(0,c).trim(),s[3]=""}t=t.substring(s[0].length),this.inLink=!0,i=s[2],this.options.pedantic?(e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))?(i=e[1],r=e[3]):r="":r=s[3]?s[3].slice(1,-1):"",i=i.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(s,{href:o.escapes(i),title:o.escapes(r)}),this.inLink=!1}else if((s=this.rules.reflink.exec(t))||(s=this.rules.nolink.exec(t))){if(t=t.substring(s[0].length),e=(s[2]||s[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){a+=s[0].charAt(0),t=s[0].substring(1)+t;continue}this.inLink=!0,a+=this.outputLink(s,e),this.inLink=!1}else if(s=this.rules.strong.exec(t))t=t.substring(s[0].length),a+=this.renderer.strong(this.output(s[4]||s[3]||s[2]||s[1]));else if(s=this.rules.em.exec(t))t=t.substring(s[0].length),a+=this.renderer.em(this.output(s[6]||s[5]||s[4]||s[3]||s[2]||s[1]));else if(s=this.rules.code.exec(t))t=t.substring(s[0].length),a+=this.renderer.codespan(p(s[2].trim(),!0));else if(s=this.rules.br.exec(t))t=t.substring(s[0].length),a+=this.renderer.br();else if(s=this.rules.del.exec(t))t=t.substring(s[0].length),a+=this.renderer.del(this.output(s[1]));else if(s=this.rules.autolink.exec(t))t=t.substring(s[0].length),i="@"===s[2]?"mailto:"+(n=p(this.mangle(s[1]))):n=p(s[1]),a+=this.renderer.link(i,null,n);else if(this.inLink||!(s=this.rules.url.exec(t))){if(s=this.rules.text.exec(t))t=t.substring(s[0].length),this.inRawBlock?a+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):p(s[0]):s[0]):a+=this.renderer.text(p(this.smartypants(s[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===s[2])i="mailto:"+(n=p(s[0]));else{do{l=s[0],s[0]=this.rules._backpedal.exec(s[0])[0]}while(l!==s[0]);n=p(s[0]),i="www."===s[1]?"http://"+n:n}t=t.substring(s[0].length),a+=this.renderer.link(i,null,n)}return a},o.escapes=function(t){return t?t.replace(o.rules._escapes,"$1"):t},o.prototype.outputLink=function(t,e){var n=e.href,i=e.title?p(e.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(n,i,this.output(t[1])):this.renderer.image(n,i,p(t[1]))},o.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):t},o.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var e,n="",i=t.length,r=0;r<i;r++)e=t.charCodeAt(r),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n},l.prototype.code=function(t,e,n){var i=(e||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(t,i);null!=r&&r!==t&&(n=!0,t=r)}return i?'<pre><code class="'+this.options.langPrefix+p(i,!0)+'">'+(n?t:p(t,!0))+"</code></pre>\n":"<pre><code>"+(n?t:p(t,!0))+"</code></pre>"},l.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},l.prototype.html=function(t){return t},l.prototype.heading=function(t,e,n,i){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+i.slug(n)+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"},l.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},l.prototype.list=function(t,e,n){var i=e?"ol":"ul";return"<"+i+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+i+">\n"},l.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},l.prototype.checkbox=function(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},l.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},l.prototype.table=function(t,e){return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"},l.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},l.prototype.tablecell=function(t,e){var n=e.header?"th":"td";return(e.align?"<"+n+' align="'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},l.prototype.strong=function(t){return"<strong>"+t+"</strong>"},l.prototype.em=function(t){return"<em>"+t+"</em>"},l.prototype.codespan=function(t){return"<code>"+t+"</code>"},l.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},l.prototype.del=function(t){return"<del>"+t+"</del>"},l.prototype.link=function(t,e,n){if(null===(t=d(this.options.sanitize,this.options.baseUrl,t)))return n;var i='<a href="'+p(t)+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>"},l.prototype.image=function(t,e,n){if(null===(t=d(this.options.sanitize,this.options.baseUrl,t)))return n;var i='<img src="'+t+'" alt="'+n+'"';return e&&(i+=' title="'+e+'"'),i+=this.options.xhtml?"/>":">"},l.prototype.text=function(t){return t},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(t){return t},a.prototype.link=a.prototype.image=function(t,e,n){return""+n},a.prototype.br=function(){return""},h.parse=function(t,e){return new h(e).parse(t)},h.prototype.parse=function(t){this.inline=new o(t.links,this.options),this.inlineText=new o(t.links,b({},this.options,{renderer:new a})),this.tokens=t.reverse();for(var e="";this.next();)e+=this.tok();return e},h.prototype.next=function(){return this.token=this.tokens.pop(),this.token},h.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},h.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},h.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,e,n,r,s="",o="";for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(s+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(e=this.token.cells[t],n="",r=0;r<e.length;r++)n+=this.renderer.tablecell(this.inline.output(e[r]),{header:!1,align:this.token.align[r]});o+=this.renderer.tablerow(n)}return this.renderer.table(s,o);case"blockquote_start":for(o="";"blockquote_end"!==this.next().type;)o+=this.tok();return this.renderer.blockquote(o);case"list_start":o="";for(var l=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)o+=this.tok();return this.renderer.list(o,l,a);case"list_item_start":o="";var h=this.token.loose,c=this.token.checked,p=this.token.task;for(this.token.task&&(o+=this.renderer.checkbox(c));"list_item_end"!==this.next().type;)o+=h||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(o,p,c);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var g='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(g);i.log(g)}},c.prototype.slug=function(t){var e=t.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(e)){var n=e;do{this.seen[n]++,e=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(e))}return this.seen[e]=0,e},p.escapeTest=/[&<>"']/,p.escapeReplace=/[&<>"']/g,p.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,p.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},_=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function b(t){for(var e,n,i=1;i<arguments.length;i++)for(n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function k(t,e){var n=t.replace(/\|/g,(function(t,e,n){for(var i=!1,r=e;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function x(t,e,n){if(0===t.length)return"";for(var i=0;i<t.length;){var r=t.charAt(t.length-i-1);if(r!==e||n){if(r===e||!n)break;i++}else i++}return t.substr(0,t.length-i)}function y(t,e){if(-1===t.indexOf(e[1]))return-1;for(var n=0,i=0;i<t.length;i++)if("\\"===t[i])i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&--n<0)return i;return-1}function v(t){t&&t.sanitize&&!t.silent&&i.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function w(t,e,n){if(null==t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(n||"function"==typeof e){n||(n=e,e=null),v(e=b({},w.defaults,e||{}));var i,s,o=e.highlight,l=0;try{i=r.lex(t,e)}catch(c){return n(c)}s=i.length;var a=function(t){if(t)return e.highlight=o,n(t);var r;try{r=h.parse(i,e)}catch(c){t=c}return e.highlight=o,t?n(t):n(null,r)};if(!o||o.length<3)return a();if(delete e.highlight,!s)return a();for(;l<i.length;l++)!function(t){"code"!==t.type?--s||a():o(t.text,t.lang,(function(e,n){return e?a(e):null==n||n===t.text?--s||a():(t.text=n,t.escaped=!0,void(--s||a()))}))}(i[l])}else try{return e&&(e=b({},w.defaults,e)),v(e),h.parse(r.lex(t,e),e)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",(e||w.defaults).silent)return"<p>An error occurred:</p><pre>"+p(c.message+"",!0)+"</pre>";throw c}}m.exec=m,w.options=w.setOptions=function(t){return b(w.defaults,t),w},w.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new l,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=h,w.parser=h.parse,w.Renderer=l,w.TextRenderer=a,w.Lexer=r,w.lexer=r.lex,w.InlineLexer=o,w.inlineLexer=o.output,w.Slugger=c,w.parse=w,t.exports=w}(this||("undefined"!=typeof window?window:n.g))},11151:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(s.Provider,{value:e},t.children)}},33562:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var i=n(81180);const r=1024,s=1048576,o=1024*s;function l(t){let e,n,i;return t<1?(e=1e3*t,n="\u03bcs",i=0):t<1e3?(e=t,n="ms",i=2):(e=t/1e3,n="s",i=2),"".concat(e.toFixed(i)).concat(n)}var a=n(8700);const h={position:"fixed",zIndex:1e4,color:"#ccc",background:"#000",fontFamily:"Helvetica,Arial,sans-serif",padding:"8px",fontSize:"12px",lineSpacing:6},c={fontSize:"16px",cursor:"pointer"},p={paddingLeft:"8px"},u=t=>"".concat(t.name,": ").concat(t.count),g={count:u,averageTime:t=>"".concat(t.name,": ").concat(l(t.getAverageTime())),totalTime:t=>"".concat(t.name,": ").concat(l(t.time)),fps:t=>"".concat(t.name,": ").concat(Math.round(t.getHz()),"fps"),memory:t=>"".concat(t.name,": ").concat(function(t){let e,n,i;return t<r?(e=t,n=" bytes",i=0):t<s?(e=t/r,n="kB",i=2):t<o?(e=t/s,n="MB",i=2):(e=t/o,n="GB",i=2),"".concat(e.toFixed(i)).concat(n)}(t.count))};class d{constructor(t,e){(0,i.Z)(this,"stats",void 0),(0,i.Z)(this,"title",void 0),(0,i.Z)(this,"collapsed",!1),(0,i.Z)(this,"_framesPerUpdate",void 0),(0,i.Z)(this,"_formatters",g),(0,i.Z)(this,"_css",void 0),(0,i.Z)(this,"_headerCSS",void 0),(0,i.Z)(this,"_itemCSS",void 0),(0,i.Z)(this,"_container",document.body),(0,i.Z)(this,"_innerContainer",null),(0,i.Z)(this,"_statsContainer",null),(0,i.Z)(this,"_header",null),(0,i.Z)(this,"_resetOnUpdate",{}),(0,i.Z)(this,"_counter",0),(0,i.Z)(this,"_items",{}),(0,i.Z)(this,"_added",!1),this.stats=t,this.title=null==e?void 0:e.title,this._framesPerUpdate=Math.round(Math.max((null==e?void 0:e.framesPerUpdate)||1,1)),this._initializeFormatters(e),this._initializeUpdateConfigs(e),this._css=Object.assign({},h,null==e?void 0:e.css),this._headerCSS=Object.assign({},c,this._css.header),this._itemCSS=Object.assign({},p,this._css.item),delete this._css.header,delete this._css.item,this._createDOM(null==e?void 0:e.container),this._createDOMStats()}setStats(t){this.stats=t,this._createDOMStats(),this._setHeaderContent(),this.update()}update(){const t=this.stats&&this.stats.stats;t&&0!==Object.keys(t).length&&this._counter++%this._framesPerUpdate==0&&this._update()}remove(){this._innerContainer&&this._container.removeChild(this._innerContainer)}setCollapsed(t){this.collapsed=t,this._statsContainer&&(this._statsContainer.style.display=this.collapsed?"none":"block"),this._setHeaderContent()}_update(){this.stats.forEach((t=>{this._createDOMItem(t.name),this._items[t.name].innerHTML=this._getLines(t).join("<BR>"),this._resetOnUpdate[t.name]&&t.reset()}))}_initializeFormatters(t){if(null!=t&&t.formatters)for(const e in t.formatters){let n=t.formatters[e];"string"==typeof n&&(n=g[n]),n&&(this._formatters[e]=n)}}_initializeUpdateConfigs(t){if(null!=t&&t.resetOnUpdate)for(const e in t.resetOnUpdate)this._resetOnUpdate[e]=t.resetOnUpdate[e]||!1}_createDOM(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if("undefined"!=typeof document&&document){this._container=t,this._innerContainer=document.createElement("div");for(const t in this._css)this._innerContainer.style[t]=this._css[t];this._container.appendChild(this._innerContainer),this._createDOMHeader(),this._statsContainer=document.createElement("div"),this._statsContainer.style.display="block",this._innerContainer.appendChild(this._statsContainer)}}_createDOMHeader(){if(!this._header){var t;this._header=document.createElement("div");for(const t in this._headerCSS)this._header.style[t]=this._headerCSS[t];this._header.onclick=this._toggleCollapsed.bind(this),null===(t=this._innerContainer)||void 0===t||t.appendChild(this._header)}this._setHeaderContent()}_setHeaderContent(){if(this._header){const t=this.collapsed?"\u25b6":"\u2b07",e=this.title||this.stats&&this.stats.id||"Stats";this._header.innerText="".concat(t," ").concat(e)}}_toggleCollapsed(){this.setCollapsed(!this.collapsed)}_createDOMStats(){this.stats instanceof a.jk&&this.stats.forEach((t=>{this._createDOMItem(t.name)}))}_createDOMItem(t){if(this._statsContainer&&!this._items[t]){this._items[t]=document.createElement("div");for(const e in this._itemCSS)this._items[t].style[e]=this._itemCSS[e];this._statsContainer.appendChild(this._items[t])}}_getLines(t){const e=this._formatters[t.name]||this._formatters[t.type||""]||u;return t?e(t).split("\n"):[]}}}}]);