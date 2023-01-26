"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"useDeleteMany",title:"useDeleteMany",siderbar_label:"useDeleteMany",description:"useDeleteMany data hook from refine is a modified version of react-query's useMutation for multiple delete mutations"},o=void 0,l={unversionedId:"api-reference/core/hooks/data/useDeleteMany",id:"api-reference/core/hooks/data/useDeleteMany",title:"useDeleteMany",description:"useDeleteMany data hook from refine is a modified version of react-query's useMutation for multiple delete mutations",source:"@site/docs/api-reference/core/hooks/data/useDeleteMany.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useDeleteMany",permalink:"/docs/api-reference/core/hooks/data/useDeleteMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useDeleteMany.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1674675058,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{id:"useDeleteMany",title:"useDeleteMany",siderbar_label:"useDeleteMany",description:"useDeleteMany data hook from refine is a modified version of react-query's useMutation for multiple delete mutations"},sidebar:"someSidebar",previous:{title:"useDelete",permalink:"/docs/api-reference/core/hooks/data/useDelete"},next:{title:"useList",permalink:"/docs/api-reference/core/hooks/data/useList/"}},d={},p=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Mutation mode",id:"mutation-mode",level:2},{value:"Creating a custom method for cancelling mutations",id:"creating-a-custom-method-for-cancelling-mutations",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," is a modified version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation#"},(0,r.kt)("inlineCode",{parentName:"a"},"useMutation"))," for multiple delete mutations."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")," method as mutation function from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your data provider didn't implement ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteMany")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," will use ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteOne")," method multiple times instead.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shows notifications after the mutation succeeds, fails or gets canceled.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Automatically invalidates ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," queries after mutation is succesfully run.\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/invalidations-from-mutations"},"Refer to React Query docs for detailed information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supports ",(0,r.kt)("a",{parentName:"p",href:"#mutation-mode"},"mutation mode"),"."))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's say that we have a resource named ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Specialist Avon Steel",\n        },\n    ];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDeleteMany } from "@pankod/refine-core";\n\nconst { mutate } = useDeleteMany();\n\nmutate({\n    resource: "categories",\n    ids: [2, 3],\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," can also accept lifecycle methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onError"),".  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'mutate(\n    {\n        resource: "categories",\n        ids: [2, 3],\n    },\n    {\n        onError: (error, variables, context) => {\n            // An error happened!\n        },\n        onSuccess: (data, variables, context) => {\n            // Let\'s celebrate!\n        },\n    },\n);\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/mutations#mutation-side-effects"},"Refer to react-query docs for further information. ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"After mutation runs ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," will be updated as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n    ];\n}\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Queries that use ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint will be automatically invalidated to show the updated data. For example, data returned from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList/"},(0,r.kt)("inlineCode",{parentName:"a"},"useList"))," will be automatically updated.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," result which includes ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"a lot properties"),", one of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"mutate"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Values passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," must have these types."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n    ids: BaseKey[];\n    resource: string;\n    values: TVariables = {};\n    mutationMode?: MutationMode;\n    undoableTimeout?: number;\n    onCancel?: (cancelMutation: () => void) => void;\n}\n"))),(0,r.kt)("h2",{id:"mutation-mode"},"Mutation mode"),(0,r.kt)("p",null,"Mutation mode determines the mode which the mutation runs with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDeleteMany } from "@pankod/refine-core";\n\nconst { mutate } = useDeleteMany();\n\nmutate({\n    resource: "categories",\n    ids: [2, 3],\n    // highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,r.kt)("h3",{id:"creating-a-custom-method-for-cancelling-mutations"},"Creating a custom method for cancelling mutations"),(0,r.kt)("p",null,"You can pass a custom cancel callback to ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdate"),". This callback is triggered instead of the default one when undo button is clicked when ",(0,r.kt)("inlineCode",{parentName:"p"},'mutationMode = "undoable"'),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Default behaviour on undo action includes notifications. If a custom callback is passed this notification will not appear.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Passed callback will receive a function that actually cancels the mutation. Don't forget to run this function to cancel the mutation on the ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable")," mode."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useDeleteMany } from "@pankod/refine-core";\n\n// highlight-start\nconst customOnCancel = (cancelMutation: () => void) => {\n    cancelMutation();\n    // rest of custom cancel logic...\n};\n// highlight-end\n\nconst { mutate } = useDeleteMany();\n\nmutate({\n    resource: "categories",\n    ids: [1, 2],\n    mutationMode: "undoable",\n    // highlight-start\n    undoableTimeout: 7500,\n    onCancel: customOnCancel,\n    // highlight-end\n});\n')),(0,r.kt)("p",{parentName:"admonition"},"After 7.5 seconds the mutation will be executed. The mutation can be cancelled within that 7.5 seconds. If cancelled ",(0,r.kt)("inlineCode",{parentName:"p"},"customOnCancel")," will be executed")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"resource")," ",(0,r.kt)("div",{className:" required"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids ",(0,r.kt)("div",{className:" required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"ids for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey[]"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/advanced-tutorials/mutation-mode"},"Determines when mutations are executed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,r.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback that runs when undo button is clicked on ",(0,r.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Successfully deleted ',(0,r.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Error when updating ',(0,r.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,r.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaData"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,r.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalidates"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["list", "many"]'))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/api-reference/core/components/refine-config"},"Refine"),">")," component. ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," will use what is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { resource: string; ids: BaseKey[]; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," DeleteContext>")),"*")))))}s.isMDXComponent=!0}}]);