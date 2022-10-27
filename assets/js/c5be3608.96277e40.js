"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2365],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(i),d=n,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return i?a.createElement(g,o(o({ref:t},s),{},{components:i})):a.createElement(g,o({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},85681:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));i(3126),i(63098),i(1936),i(63152);const r={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"fundamentals",permalink:"/blog/tags/fundamentals"},{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"low-code",permalink:"/blog/tags/low-code"},{label:"internal-tools",permalink:"/blog/tags/internal-tools"},{label:"crud",permalink:"/blog/tags/crud"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:16.72,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["refine","fundamentals","react","javascript","low-code","internal-tools","crud","material-ui","mui"],image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"/img/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.735,date:"2022-09-22T00:00:00.000Z"},{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"}],authorPosts:[{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.875,date:"2022-08-04T00:00:00.000Z"},{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",permalink:"/blog/weve-raised-dollar1m-seed-funding",formattedDate:"June 10, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.76,date:"2022-06-10T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.92,date:"2022-10-04T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],s={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"We will build an ",(0,n.kt)("strong",{parentName:"p"},"admin panel")," that supports ",(0,n.kt)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,n.kt)("strong",{parentName:"p"},"authentication"),", and a ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode"),"  feature using industry-standard best tools. "),(0,n.kt)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including  ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," to build a high-quality admin panel."))}p.isMDXComponent=!0},63098:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/create-e6dbc8fe7ab92ba832924f91bbb24635.gif"},1936:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/delete-record-e0e0396878f2cc93a8cf3f119e808700.gif"},3126:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/list-page-11523fd650356a4cd3a8bbd965deef25.png"},63152:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/undoable-mode-c47ce4349a54c3abfe8c43c4df74f03b.gif"}}]);