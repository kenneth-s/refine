"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={id:"list-button",title:"List",swizzle:!0},a=void 0,s={unversionedId:"api-reference/antd/components/buttons/list-button",id:"version-3.xx.xx/api-reference/antd/components/buttons/list-button",title:"List",description:"` is using Ant Design's  component. It uses the list method from useNavigation` under the hood. It can be useful when redirecting the app to the list page route of resource.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/list.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/list-button",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/list-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680015794,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"list-button",title:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Import",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/import-button"},next:{title:"Refresh",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/refresh-button"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ListButton>")," is using Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the list page route of resource."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123",live:!0,url:"http://localhost:3000/posts/show/123"},'// visible-block-start\nimport { useShow } from "@pankod/refine-core";\nimport {\n    Show,\n    Typography,\n    // highlight-next-line\n    ListButton,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        // highlight-next-line\n        <Show headerButtons={<ListButton />} isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                show: PostShow,\n                list: () => {\n                    return (\n                        <RefineAntd.List>\n                            <p>Your list page here</p>\n                        </RefineAntd.List>\n                    );\n                }\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The button text is defined automatically by ",(0,r.kt)("strong",{parentName:"p"},"refine")," based on ",(0,r.kt)("em",{parentName:"p"},"resource")," object name property.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"resourcenameorroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.kt)("p",null,"Redirection endpoint(",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/list"),") is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"<ListButton>")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as the endpoint to redirect after clicking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ListButton } from "@pankod/refine-antd";\n\nconst MyListComponent = () => {\n    return (\n        <ListButton resourceNameOrRouteName="categories" />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                list: () => {\n                    return (\n                        <RefineAntd.List>\n                            <p>Your list page here</p>\n                        </RefineAntd.List>\n                    );\n                }\n            },\n        ]}\n        DashboardPage={MyListComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories"),"."),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { ListButton } from "@pankod/refine-antd";\n\nconst MyListComponent = () => {\n    return (\n        <ListButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return (\n                        <RefineAntd.List>\n                            <p>Your list page here</p>\n                        </RefineAntd.List>\n                    );\n                }\n            },\n        ]}\n        DashboardPage={MyListComponent}\n    />,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <ListButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(c,{module:"@pankod/refine-antd/ListButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}m.isMDXComponent=!0}}]);