"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35330],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45679:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const i={id:"url",title:"Url",swizzle:!0},o=void 0,l={unversionedId:"api-reference/chakra-ui/components/fields/url",id:"api-reference/chakra-ui/components/fields/url",title:"Url",description:"This field lets you embed a link. It uses Chakra UI ` component. You can pass a URL in its value prop and you can show a text in its place by passing any children`.",source:"@site/docs/api-reference/chakra-ui/components/fields/url.md",sourceDirName:"api-reference/chakra-ui/components/fields",slug:"/api-reference/chakra-ui/components/fields/url",permalink:"/docs/api-reference/chakra-ui/components/fields/url",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/fields/url.md",tags:[],version:"current",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1680170424,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{id:"url",title:"Url",swizzle:!0},sidebar:"someSidebar",previous:{title:"Text",permalink:"/docs/api-reference/chakra-ui/components/fields/text"},next:{title:"Theme",permalink:"/docs/api-reference/chakra-ui/theming"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],p=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:c};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    legacyRouterProvider: routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </ChakraUI.ChakraProvider>\n    );\n};\n')),(0,a.kt)("p",null,"This field lets you embed a link. It uses Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/link/usage"},(0,a.kt)("inlineCode",{parentName:"a"},"<Link>"))," component. You can pass a URL in its ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop and you can show a text in its place by passing any ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<UrlField>")," with an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport {\n    List,\n    // highlight-next-line\n    UrlField,\n} from "@refinedev/chakra-ui";\nimport {\n    TableContainer,\n    Table,\n    Thead,\n    Tr,\n    Th,\n    Tbody,\n    Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "image",\n                header: "Image",\n                accessorKey: "image",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-next-line\n                        <UrlField value={getValue()[0].url} />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const { getHeaderGroups, getRowModel } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <TableContainer>\n                <Table variant="simple" whiteSpace="pre-line">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => {\n                                    return (\n                                        <Th key={header.id}>\n                                            {!header.isPlaceholder &&\n                                                flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                        </Th>\n                                    );\n                                })}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => {\n                            return (\n                                <Tr key={row.id}>\n                                    {row.getVisibleCells().map((cell) => {\n                                        return (\n                                            <Td key={cell.id}>\n                                                {flexRender(\n                                                    cell.column.columnDef.cell,\n                                                    cell.getContext(),\n                                                )}\n                                            </Td>\n                                        );\n                                    })}\n                                </Tr>\n                            );\n                        })}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    image: [{ url: string }];\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(p,{module:"@refinedev/chakra-ui/UrlField","value-description":"URL for link to reference to",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/link/usage"},"Link"),".")))}m.isMDXComponent=!0}}]);