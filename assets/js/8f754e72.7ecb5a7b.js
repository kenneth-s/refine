"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"api-reference/core/hooks/useSelect/default-value-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/useSelect/default-value-live-preview",title:"default-value-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useSelect/default-value-live-preview.md",sourceDirName:"api-reference/core/hooks/useSelect",slug:"/api-reference/core/hooks/useSelect/default-value-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/default-value-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useSelect/default-value-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680015794,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useSelect } from "@pankod/refine-core";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst ProductCreate: React.FC = () => {\n    const { options } = useSelect<ICategory>({\n        resource: "categories",\n        // highlight-next-line\n        defaultValue: 20,\n    });\n\n    return (\n        <label>\n            Select a category:\n            <select>\n                {options?.map((option) => (\n                    <option key={option.value} value={option.value}>\n                        {option.value}-{option.label}\n                    </option>\n                ))}\n            </select>\n        </label>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: ProductCreate,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0}}]);