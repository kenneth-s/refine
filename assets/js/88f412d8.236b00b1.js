"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"useSelect",title:"useSelect",description:"useSelect hook API references of @pankod/refine-core"},l=void 0,i={unversionedId:"api-reference/core/hooks/useSelect",id:"api-reference/core/hooks/useSelect",title:"useSelect",description:"useSelect hook API references of @pankod/refine-core",source:"@site/docs/api-reference/core/hooks/useSelect.md",sourceDirName:"api-reference/core/hooks",slug:"/api-reference/core/hooks/useSelect",permalink:"/docs/api-reference/core/hooks/useSelect",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/useSelect.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1674675058,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{id:"useSelect",title:"useSelect",description:"useSelect hook API references of @pankod/refine-core"},sidebar:"someSidebar",previous:{title:"useUpdateMany",permalink:"/docs/api-reference/core/hooks/data/useUpdateMany"},next:{title:"useForm",permalink:"/docs/api-reference/core/hooks/useForm"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",level:3},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>fetchSize</code>",id:"fetchsize",level:3},{value:"<code>onSearch</code>",id:"onsearch",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>defaultValueQueryOptions</code>",id:"defaultvaluequeryoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("PropsTable"),d=c("CodeSandboxExample"),m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook allows you to manage any ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," (like a ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/tags/tag_select.asp"},"Html ",(0,r.kt)("inlineCode",{parentName:"a"},"<select>")," tag"),", ",(0,r.kt)("a",{parentName:"p",href:"https://react-select.com/home"},"React Select"),", etc...) component. Since it is designed as headless, It expects you to handle the UI."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll demonstrate how to get data at ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Unbranded",\n        },\n    ];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'// highlight-next-line\nimport { useSelect } from "@pankod/refine-core";\n\nexport const DummyList = () => {\n    // highlight-start\n    const { options } = useSelect<ICategory>({\n        resource: "categories",\n    });\n    // highlight-end\n\n    return (\n        <select>\n            // highlight-start\n            {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                    {category.label}\n                </option>\n            ))}\n            // highlight-end\n        </select>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList"},"Refer to ",(0,r.kt)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," values for select options."),(0,r.kt)("h3",{id:"defaultvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-next-line\n    defaultValue: "1",\n});\n')),(0,r.kt)("p",null,"Adds extra ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," component. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," so ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," can be an array of strings like follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'defaultValue: ["1", "2"],\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for detailed usage. ","\u2192")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Can use ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," property when edit a record in ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," page.")),(0,r.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"Allows you to change the values and appearance of your options. Default values are ",(0,r.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Supports use with ",(0,r.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionValue")," ",(0,r.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    optionLabel: "nested.title",\n    optionValue: "nested.id",\n    // highlight-end\n});\n'))),(0,r.kt)("h3",{id:"filters"},(0,r.kt)("inlineCode",{parentName:"h3"},"filters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    filters: [\n        {\n            field: "isActive",\n            operator: "eq",\n            value: true,\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"It allows us to add some filters while fetching the data. For example, if you want to list only the active records."),(0,r.kt)("h3",{id:"sort"},(0,r.kt)("inlineCode",{parentName:"h3"},"sort")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"It allows us to sort the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,r.kt)("h3",{id:"fetchsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"fetchSize")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-next-line\n    fetchSize: 20,\n});\n')),(0,r.kt)("p",null,"Amount of records to fetch in select box."),(0,r.kt)("h3",{id:"onsearch"},(0,r.kt)("inlineCode",{parentName:"h3"},"onSearch")),(0,r.kt)("p",null,"It allows us to ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoComplete")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    onSearch: (value) => [\n        {\n            field: "title",\n            operator: "containss",\n            value,\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The HTML select tag does not natively support AutoComplete. If AutoComplete is desired, it can be used with ",(0,r.kt)("a",{parentName:"p",href:"https://react-select.com/async"},"React Select")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/use-select"},"use-select"),".")),(0,r.kt)("p",null,"If defined, it allows us to override the filters to use when fetching list of records. Thus, it . It should return ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters")),"."),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n    // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,r.kt)("h3",{id:"defaultvaluequeryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultValueQueryOptions")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," property is given, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," data hook is called for the selected records. With this property, you can change the options of this query. If not given, the values given in queryOptions will be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    defaultValueQueryOptions: {\n        onSuccess: (data) => {\n            console.log("triggers when on query return on success");\n        },\n    },\n    // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options for default value query can be set by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(u,{module:"@pankod/refine-core/useSelect",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"It returns possible options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ label: string; value: string }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValueQueryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a ",(0,r.kt)("inlineCode",{parentName:"td"},"defaultValue")," record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValueQueryOnSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value onSuccess method"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"core-use-select",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);