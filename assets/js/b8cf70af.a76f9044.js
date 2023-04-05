"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"adding-sort-and-filters",title:"5. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}},i=void 0,l={unversionedId:"tutorial/adding-crud-pages/antd/adding-sort-and-filters",id:"version-3.xx.xx/tutorial/adding-crud-pages/antd/adding-sort-and-filters",title:"5. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/adding-sort-and-filters",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680658291,formattedLastUpdatedAt:"Apr 5, 2023",frontMatter:{id:"adding-sort-and-filters",title:"5. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}}},d={},p=[{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=s("Checklist"),m=s("ChecklistItem"),u={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/antd/index"},"Adding List Page")," section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data."),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to add sorting to the table."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex="id"\n    title="Id"\n    //highlight-next-line\n    sorter\n/>\n')),(0,r.kt)("p",{parentName:"li"},"Now, you can sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on the table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to add multiple sorting capabilities to the table, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop by priority. For example, if you want to sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," on the table, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex="id"\n    title="Id"\n    //highlight-next-line\n    sorter\n/>\n<Table.Column\n    dataIndex="id"\n    title="Name"\n    //highlight-next-line\n    sorter={{ multiple: 1 }}\n/>\n')),(0,r.kt)("p",{parentName:"li"},"Now, the data will be sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," first and then by ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop and ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component to add filters to the table."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component is a wrapper component. It serves as a bridge between its child input and ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook. It provides the necessary props to the child input and handles the logic of filtering the data. It also provides a filter and clear button to make the filtering process easier."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/filter-dropdown/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<FilterDropdown/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"Also, to get more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table#components-table-demo-custom-filter-panel"},(0,r.kt)("strong",{parentName:"a"},"Ant Design"),"'s ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table/>")," documentation"),"."),(0,r.kt)("p",null,"In this tutorial, we will add filters capabilities to the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," column. To do this, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component from ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," as the child input of ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component. So, we will also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to get the necessary props like ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Ant Desing")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file and import the following components and hooks like below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FilterDropdown, Select, useSelect } from "@pankod/refine-antd";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook with ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component with category options."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, follow the steps below:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"filterDropdown")," prop to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"li"},"category")," column."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component as the return value of the prop. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component as the child of ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"categorySelectProps")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    dataIndex={["category", "id"]}\n    title="category"\n    render={(value) => {\n        if (isLoading) {\n            return <TextField value="Loading..." />;\n        }\n\n        return (\n            <TextField\n                value={\n                    categoriesData?.data.find((item) => item.id === value)\n                        ?.title\n                }\n            />\n        );\n    }}\n    //highlight-start\n    filterDropdown={(props) => (\n        <FilterDropdown {...props}>\n            <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...categorySelectProps}\n            />\n        </FilterDropdown>\n    )}\n    //highlight-end\n/>\n')))),(0,r.kt)("p",null,"Now, you can search and filter the data by category on the table."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(m,{id:"add-search-and-filters-antd",mdxType:"ChecklistItem"},"I added search and filters to the table.")))}g.isMDXComponent=!0}}]);