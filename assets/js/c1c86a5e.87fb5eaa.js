"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"create",title:"Create",swizzle:!0},i=void 0,p={unversionedId:"api-reference/mantine/components/basic-views/create",id:"api-reference/mantine/components/basic-views/create",title:"Create",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.",source:"@site/docs/api-reference/mantine/components/basic-views/create.md",sourceDirName:"api-reference/mantine/components/basic-views",slug:"/api-reference/mantine/components/basic-views/create",permalink:"/docs/api-reference/mantine/components/basic-views/create",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/components/basic-views/create.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680015794,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"create",title:"Create",swizzle:!0},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/api-reference/mantine/components/inferencer"},next:{title:"Edit",permalink:"/docs/api-reference/mantine/components/basic-views/edit"}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <MantineCore.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <MantineCore.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <MantineNotifications.NotificationsProvider position="top-right">\n                {children}\n            </MantineNotifications.NotificationsProvider>\n        </MantineCore.MantineProvider>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page."),(0,o.kt)("p",null,"We'll show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," does using properties with examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create, useForm, useSelect } from "@refinedev/mantine";\nimport { Select, TextInput } from "@mantine/core";\n\nconst PostCreate: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm<IPost>({\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n        },\n    });\n\n    const { selectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n                <Select\n                    mt={8}\n                    label="Status"\n                    placeholder="Pick one"\n                    {...getInputProps("status")}\n                    data={[\n                        { label: "Published", value: "published" },\n                        { label: "Draft", value: "draft" },\n                        { label: "Rejected", value: "rejected" },\n                    ]}\n                />\n                <Select\n                    mt={8}\n                    label="Category"\n                    placeholder="Pick one"\n                    {...getInputProps("category.id")}\n                    {...selectProps}\n                />\n            </form>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding title inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>"),' component. if you don\'t pass title props it uses "Create" prefix and singular resource name by default. For example, for the ',(0,o.kt)("inlineCode",{parentName:"p"},"/posts/create"),' resource, it will be "Create post".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\nimport { Title } from "@mantine/core";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create title={<Title order={3}>Custom Title</Title>}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"savebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component has a default button that submits the form. If you want to customize this button you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/components/buttons/save-button"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create saveButtonProps={{ size: "xs" }}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport { Layout } from "@refinedev/mantine";\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create resource="categories">\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            legacyRouterProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"goback"},(0,o.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,o.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," property. You can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to hide the back button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create goBack="\ud83d\ude0a">\n            <p>Rest of your page here 2</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"isloading"},(0,o.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,o.kt)("p",null,"To toggle the loading state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <Create isLoading={true}>\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"breadcrumb"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,o.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/components/breadcrumb"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create, Breadcrumb } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,"If you want to customize the wrapper of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," wrapper element is ",(0,o.kt)("inlineCode",{parentName:"p"},"<Card>"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,o.kt)("inlineCode",{parentName:"p"},"<Card>")," can get."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/card/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Mantine for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            wrapperProps={{\n                style: {\n                    border: "2px dashed cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,o.kt)("p",null,"If you want to customize the header of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/group/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Group")," documentation from Mantine for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerProps={{\n                style: {\n                    border: "2px dashed cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,"If you want to customize the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/box/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Mantine for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=320px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"320px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            contentProps={{\n                style: {\n                    border: "2px dashed cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/group/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Group")," documentation from Mantine for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            headerButtonProps={{\n                style: {\n                    border: "2px dashed cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n            headerButtons={<Button type="primary">Custom Button</Button>}\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"footerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\nimport { Button } from "@mantine/core";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button variant="gradient">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"footerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/group/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Group")," documentation from Mantine for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@refinedev/core";\nimport { CreateButton } from "@refinedev/mantine";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\n\n// visible-block-start\nimport { Create } from "@refinedev/mantine";\n\nconst PostCreate: React.FC = () => {\n    return (\n        <Create\n            // highlight-start\n            footerButtonProps={{\n                style: {\n                    // hide-start\n                    float: "right",\n                    marginRight: 24,\n                    // hide-end\n                    border: "2px dashed cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </Create>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    create: PostCreate,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <CreateButton />\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(c,{module:"@refinedev/mantine/Create","goBack-default":"`<IconArrowLeft />`","title-default":"`<Title order={3}>Create {resource.name}</Title>`",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);