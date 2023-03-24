"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"list-search",title:"List Search"},o=void 0,s={unversionedId:"advanced-tutorials/search/list-search",id:"version-3.xx.xx/advanced-tutorials/search/list-search",title:"List Search",description:"We will examine how to make an extensive search and filtering with the useSimpleList hook that works with the Ant Design's `` component.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/search/list-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/list-search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/list-search",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/search/list-search.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1679669127,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"list-search",title:"List Search"},sidebar:"someSidebar",previous:{title:"Mutation Mode",permalink:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},next:{title:"Search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/"}},c={},l=[{value:"Example",id:"example",level:2}],d=(p="CodeSandboxExample",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const m={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will examine how to make an extensive search and filtering with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"},(0,a.kt)("inlineCode",{parentName:"a"},"useSimpleList"))," hook that works with the Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/list"},(0,a.kt)("inlineCode",{parentName:"a"},"<List>"))," component."),(0,a.kt)("p",null,"To do this, let's list posts using the posts resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useMany } from "@pankod/refine-core";\nimport {\n    List,\n    // highlight-next-line\n    useSimpleList,\n    AntdList,\n    Typography,\n    Space,\n    NumberField,\n} from "@pankod/refine-antd";\n\nconst { Text } = Typography;\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { listProps } = useSimpleList<IPost>();\n\n    const categoryIds =\n        listProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    const renderItem = (item: IPost) => {\n        const { title, hit, content } = item;\n\n        const categoryTitle = data?.data.find(\n            (category: ICategory) => category.id === item.category.id,\n        )?.title;\n\n        return (\n            <AntdList.Item\n                actions={[\n                    <Space key={item.id} direction="vertical" align="end">\n                        <NumberField\n                            value={hit}\n                            options={{\n                                notation: "compact",\n                            }}\n                        />\n                        <Text>{categoryTitle}</Text>\n                    </Space>,\n                ]}\n            >\n                <AntdList.Item.Meta title={title} description={content} />\n            </AntdList.Item>\n        );\n    };\n\n    return (\n        <List>\n            // highlight-next-line\n            <AntdList {...listProps} renderItem={renderItem} />\n        </List>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    hit: number;\n    category: { id: number };\n}\n')),(0,a.kt)("p",null,"After creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, add it to the resource with ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\n// highlight-next-line\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            // highlight-start\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n            //highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/basic-list.png",alt:"basic list"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We will create a form by extracting ",(0,a.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"},(0,a.kt)("inlineCode",{parentName:"a"},"useSimpleList")),". We will use this form for search/filtering. We will also create an interface to determine the types of values from the form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'...\n\nimport {\n    ...\n// highlight-next-line\n    CrudFilters,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { listProps, searchFormProps } = useSimpleList<\n        IPost,\n        IPostFilterVariables\n    >({\n        onSearch: (params) => {\n            const filters: CrudFilters = [];\n            const { category, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "category.id",\n                    operator: "eq",\n                    value: category,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n            return filters;\n        },\n    });\n// highlight-end\n\n    // ...\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n// highlight-start\n            <Form\n                {...searchFormProps}\n                layout="vertical"\n                onValuesChange={() => searchFormProps.form?.submit()}\n            >\n                <Space wrap>\n                    <Form.Item label="Category" name="category">\n                        <Select\n                            {...categorySelectProps}\n                            allowClear\n                            placeholder="Search Categories"\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                </Space>\n            </Form>\n            <AntdList {...listProps} renderItem={renderItem} />\n// highlight-end\n        </List>\n    );\n};\n\ninterface IPostFilterVariables {\n    category: string;\n    createdAt: [Dayjs, Dayjs];\n}\n')),(0,a.kt)("p",null,"When the form is submitted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. Then the ",(0,a.kt)("inlineCode",{parentName:"p"},"listProps")," is refreshed according to the criteria."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/form-list.png",alt:"form list"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#crudfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," type object has ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"operator"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(d,{path:"use-simple-list-antd",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);