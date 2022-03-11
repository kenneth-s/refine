"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2116],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(52278),i=n(15769),d=["components"],s={id:"delete-button",title:"Delete"},p=void 0,c={unversionedId:"ui-frameworks/antd/components/buttons/delete-button",id:"ui-frameworks/antd/components/buttons/delete-button",isDocsHomePage:!1,title:"Delete",description:"` uses Ant Design's  and ` components.",source:"@site/docs/ui-frameworks/antd/components/buttons/delete.md",sourceDirName:"ui-frameworks/antd/components/buttons",slug:"/ui-frameworks/antd/components/buttons/delete-button",permalink:"/docs/ui-frameworks/antd/components/buttons/delete-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/components/buttons/delete.md",tags:[],version:"current",lastUpdatedBy:"Ayd\u0131n",lastUpdatedAt:1646988420,formattedLastUpdatedAt:"3/11/2022",frontMatter:{id:"delete-button",title:"Delete"},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/ui-frameworks/antd/components/buttons/show-button"},next:{title:"Clone",permalink:"/docs/ui-frameworks/antd/components/buttons/clone-button"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>recordItemId</code>",id:"recorditemid",children:[],level:3},{value:"<code>resourceName</code>",id:"resourcename",children:[],level:3},{value:"<code>onSuccess</code>",id:"onsuccess",children:[],level:3},{value:"<code>mutationMode</code>",id:"mutationmode",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",children:[],level:3}],level:2},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/popconfirm/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Popconfirm>"))," components.\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    // highlight-next-line\n    DeleteButton,\n    List,\n    Table,\n    useTable,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <DeleteButton size="small" recordItemId={record.id} />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,o.kt)("p",null,"Will look like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Default delete button"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"When clicked, it opens the confirmation window like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"Confirmation window"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-antd";\n\nexport const MyDeleteComponent = () => {\n    return <DeleteButton resourceName="posts" recordItemId="1" />;\n};\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "post" and whose id is "1" gets deleted.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the id information from the route by default."))),(0,o.kt)("h3",{id:"resourcename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resourceName")," allows us to manage which resource's record is going to be deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-antd";\n\nexport const MyDeleteComponent = () => {\n    return <DeleteButton resourceName="categories" recordItemId="2" />;\n};\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" gets deleted.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the resource name from the route by default."))),(0,o.kt)("h3",{id:"onsuccess"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSuccess")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything on the result returned after the delete request."),(0,o.kt)("p",null,"For example, let's ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Table, DeleteButton, useTable } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        // highlight-start\n                        <DeleteButton\n                            size="small"\n                            recordItemId={record.id}\n                            onSuccess={(value) => {\n                                console.log(value);\n                            }}\n                        />\n                        // highlight-end\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"mutationmode"},(0,o.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,o.kt)("p",null,"Determines which mode mutation will have while executing ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Table, DeleteButton, useTable } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <DeleteButton\n                            size="small"\n                            recordItemId={record.id}\n                            // highlight-next-line\n                            mutationMode="undoable"\n                        />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-antd";\n\nexport const MyDeleteComponent = () => {\n    return <DeleteButton hideText />;\n};\n')),(0,o.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,o.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <DeleteButton ignoreAccessControlProvider />;\n};\n')),(0,o.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,o.kt)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what ok and cancel buttons text look like with ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-antd";\n\nexport const MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            confirmTitle="Title"\n            confirmOkText="Ok Text"\n            confirmCancelText="Delete Text"\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design button properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,o.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#delete-button-props"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,o.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for deletion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,o.kt)("td",{parentName:"tr",align:null},"Determines which id to use for deletion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,o.kt)("td",{parentName:"tr",align:null},"Record id that it reads from route")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,o.kt)("td",{parentName:"tr",align:null},"Called when ",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(value: DeleteOneResponse) => void")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,o.kt)("td",{parentName:"tr",align:null},"Determines when mutations are executed."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hideText"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"confirmTitle"),(0,o.kt)("td",{parentName:"tr",align:null},"The title of the confirmation box"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Are you sure?"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"confirmOkText"),(0,o.kt)("td",{parentName:"tr",align:null},"The text of the Confirm button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Delete"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"confirmCancelText"),(0,o.kt)("td",{parentName:"tr",align:null},"The text of the Cancel button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Cancel"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Delete"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,o.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"icon"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the icon component of the button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,o.kt)("inlineCode",{parentName:"a"},"<DeleteOutlined />")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"danger"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the danger status of the button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loading"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the loading status of the button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"When the request is not completed, loading is ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", when it completes it's ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,o.kt)("td",{parentName:"tr",align:null},"{}")))))}k.isMDXComponent=!0},15769:function(e,t,n){t.Z=n.p+"assets/images/confirmation-257cbfdd3f486ac0846c67bcc6016f44.gif"},52278:function(e,t,n){t.Z=n.p+"assets/images/delete-2e33fb3c4cd967b67d7a6b54523effb3.png"}}]);