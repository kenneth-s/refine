"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(34466),i=n(32661),l=n(29975);const s={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"/img/placeholder.png",hide_table_of_contents:!1},p=void 0,c={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"csv",permalink:"/blog/tags/csv"},{label:"import",permalink:"/blog/tags/import"},{label:"React",permalink:"/blog/tags/react"}],readingTime:4.985,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.27,date:"2021-12-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.63,date:"2021-12-27T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:6.805,date:"2022-03-29T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"Are You Looking React Web Framework?",id:"are-you-looking-react-web-framework",level:2},{value:"How to CSV Import with Refine?",id:"how-to-csv-import-with-refine",level:2},{value:"Refine CSV Import Usage",id:"refine-csv-import-usage",level:2},{value:"Refine CSV Import Live Codesandbox Example",id:"refine-csv-import-live-codesandbox-example",level:2}],u={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"First, let's create a ",(0,r.kt)("a",{parentName:"p",href:"https://tr.reactjs.org/docs/forms.html"},"Form")," in React so that the user can upload a CSV file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                //highlight-start\n                <input type={"file"} accept={".csv"} />\n                //highlight-end\n                <button>IMPORT CSV</button>\n            </form>\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"We created a simple form and our input items. With the accept feature of the input element, we specify that the format of the file can only be CSV. Now, let's load and read the CSV file selected by the user with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction App() {\n    const [file, setFile] = useState();\n\n    const fileReader = new FileReader();\n\n    const handleOnChange = (e) => {\n        setFile(e.target.files[0]);\n    };\n\n    const handleOnSubmit = (e) => {\n        e.preventDefault();\n\n        if (file) {\n            fileReader.onload = function (event) {\n                const csvOutput = event.target.result;\n            };\n\n            fileReader.readAsText(file);\n        }\n    };\n\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                <input\n                    type={"file"}\n                    id={"csvFileInput"}\n                    accept={".csv"}\n                    onChange={handleOnChange}\n                />\n\n                <button\n                    onClick={(e) => {\n                        handleOnSubmit(e);\n                    }}\n                >\n                    IMPORT CSV\n                </button>\n            </form>\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"Here, once the user-selected file has been successfully uploaded, we can process and display the file. Now let's load a sample CSV file and see it output on our console."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o.Z,alt:"console_csv_output"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"As you can see, we can now read a selected CSV file. We can convert this file, which we read as a plain text type, into an Array of Object with JavaScript and place it inside a Table element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n  const [array, setArray] = useState([]);\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const csvFileToArray = string => {\n    const csvHeader = string.slice(0, string.indexOf("\\n")).split(",");\n    const csvRows = string.slice(string.indexOf("\\n") + 1).split("\\n");\n\n    const array = csvRows.map(i => {\n      const values = i.split(",");\n      const obj = csvHeader.reduce((object, header, index) => {\n        object[header] = values[index];\n        return object;\n      }, {});\n      return obj;\n    });\n\n    setArray(array);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const text = event.target.result;\n        csvFileToArray(text);\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  const headerKeys = Object.keys(Object.assign({}, ...array));\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n\n      <br />\n\n      <table>\n        <thead>\n          <tr key={"header"}>\n            {headerKeys.map((key) => (\n              <th>{key}</th>\n            ))}\n          </tr>\n        </thead>\n\n        <tbody>\n          {array.map((item) => (\n            <tr key={item.id}>\n              {Object.values(item).map((val) => (\n                <td>{val}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}\n....\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"overview_csv"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"We formatted the CSV file that came in plain text format, using Javascript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},"slice")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},"split")," methods, and created two separate array. Then we converted Header and Rows arrays to Array of Object format as Key, Value."),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/csv-import-example-hw3ne?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"csv-import-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"are-you-looking-react-web-framework"},"Are You Looking React Web Framework?"),(0,r.kt)("p",null,"A React-based framework for building internal tools, rapidly. ",(0,r.kt)("strong",{parentName:"p"},"refine")," offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards."),(0,r.kt)("p",null,"\ud83d\udd25 ",(0,r.kt)("strong",{parentName:"p"},"Headless")," : Works with any UI framework"),(0,r.kt)("p",null,"\u2699\ufe0f Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project."),(0,r.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,r.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Nhost, Airtable, Medusa, Supabase, Appwrite and Altogic."),(0,r.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt-out for plain JavaScript."),(0,r.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,r.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," documentation for more information. \u2192")),(0,r.kt)("h2",{id:"how-to-csv-import-with-refine"},"How to CSV Import with Refine?"),(0,r.kt)("p",null,"The CSV import with ",(0,r.kt)("strong",{parentName:"p"},"refine")," is very simple and out-of-the-box feature. How to use it is explained step by step in the guide and example."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/import-export/csv-import/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," CSV import guide for more information. \u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/examples/importExport/antd/src/pages/posts/list.tsx#L32"},"View Source")),(0,r.kt)("h2",{id:"refine-csv-import-usage"},"Refine CSV Import Usage"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l.Z,alt:"importing_csv"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Importing CSV files is simple and fast using the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/"},(0,r.kt)("inlineCode",{parentName:"a"},"useImport"))," hook and ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/buttons/import-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"ImportButton"))," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n    //highlight-start\n    useImport,\n    ImportButton,\n    //highlight-end\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    //highlight-start\n    const importProps = useImport<IPostFile>();\n    //highlight-end\n\n    return (\n        <List\n            pageHeaderProps={{\n                //highlight-start\n                extra: <ImportButton {...importProps} />,\n                //highlight-end\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPostFile {\n    title: string;\n    categoryId: string;\n}\ninterface IPost {\n    id: string;\n    title: string;\n    status: string;\n}\n')),(0,r.kt)("p",null,"You can also divide the data into chunk with the ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," option while performing the insertion process."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/#api-reference"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," CSV Import API References for more information. \u2192")),(0,r.kt)("h2",{id:"refine-csv-import-live-codesandbox-example"},"Refine CSV Import Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-4nneu?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},34466:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-2aac2e898926cd619fe88d1de84bd9ea.gif"},29975:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/importing-17b343cfe8b906ee324a202f174f0101.gif"},32661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-c1b22c821b8949f83453f2d4c2f896d6.gif"}}]);