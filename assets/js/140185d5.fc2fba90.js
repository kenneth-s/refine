"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(g,n(n({ref:t},m),{},{components:a})):r.createElement(g,n({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},n=void 0,s={permalink:"/blog/next-js-pwa",source:"@site/blog/2022-09-11-next-refine-pwa.md",title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",date:"2022-09-11T00:00:00.000Z",formattedDate:"September 11, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"react",permalink:"/blog/tags/react"},{label:"pwa",permalink:"/blog/tags/pwa"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:18.495,hasTruncateMarker:!0,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},nextItem:{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide"},relatedPosts:[{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.315,date:"2022-10-31T00:00:00.000Z"},{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.455,date:"2022-10-02T00:00:00.000Z"},{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"August 29, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:16.03,date:"2022-08-29T00:00:00.000Z"}],authorPosts:[{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.63,date:"2022-09-27T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:23.255,date:"2022-11-17T00:00:00.000Z"},{title:"Dynamic Forms with React Hook Form",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:22.39,date:"2022-12-23T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Building a complex site requires a one-size-fits-all framework that not only simplifies the complexity but also integrates seamlessly with other build tools on a whim."),(0,o.kt)("p",null,"Over the years, frameworks and libraries such as React have been the go-to packages for building complex and large applications, even in the face of their susceptible nature to tiresome caveats. "),(0,o.kt)("p",null,"Fast forward to today, there are several frameworks and libraries in the picture, and they all promise to do a better job than their predecessors. However, many still don't meet the flexibility mark, except for a handful of them.  "),(0,o.kt)("p",null,"In this article, we'll look at what refine is and demonstrate how to use it to build a ",(0,o.kt)("strong",{parentName:"p"},"Next.js PWA")," storefront application."))}d.isMDXComponent=!0}}]);