"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97625],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"email",title:"Email",swizzle:!0},o=void 0,l={unversionedId:"api-reference/mantine/components/fields/email",id:"version-3.xx.xx/api-reference/mantine/components/fields/email",title:"Email",description:"This field is used to display email values. It uses the `` component of Mantine.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/email.md",sourceDirName:"api-reference/mantine/components/fields",slug:"/api-reference/mantine/components/fields/email",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/email",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/email.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680658291,formattedLastUpdatedAt:"Apr 5, 2023",frontMatter:{id:"email",title:"Email",swizzle:!0},sidebar:"someSidebar",previous:{title:"Date",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/date"},next:{title:"File",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/file"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const m={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,i.kt)("p",null,"This field is used to display email values. It uses the ",(0,i.kt)("a",{parentName:"p",href:"https://mantine.dev/core/anchor/"},(0,i.kt)("inlineCode",{parentName:"a"},"<Anchor>"))," component of Mantine."),(0,i.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,i.kt)("strong",{parentName:"a"},"refine CLI")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>")," with the example in the user list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/users previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/users",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/users"]);\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\nimport { List, Table, Pagination, EmailField } from "@pankod/refine-mantine";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst UserList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IUser>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "firstName",\n                header: "First Name",\n                accessorKey: "firstName",\n            },\n            {\n                id: "lastName",\n                header: "Last Name",\n                accessorKey: "lastName",\n            },\n            {\n                id: "email",\n                header: "Email",\n                accessorKey: "email",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-next-line\n                        <EmailField value={getValue()} />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\ninterface IUser {\n    id: number;\n    firstName: string;\n    lastName: string;\n    email: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return <Refine resources={[{ name: "users", list: UserList }]} />;\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>"),' uses "mailto:" in the href prop of the ',(0,i.kt)("a",{parentName:"p",href:"https://mantine.dev/core/anchor/"},(0,i.kt)("inlineCode",{parentName:"a"},"<Anchor>"))," component. For this reason, clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>")," opens your device's default mail application.")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)(c,{module:"@pankod/refine-mantine/EmailField",mdxType:"PropsTable"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mantine.dev/core/anchor/?t=props"},"Refer to the documentation for the rest of Anchor properties. ","\u2192")))}u.isMDXComponent=!0}}]);