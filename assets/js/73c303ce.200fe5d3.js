"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||n;return a?r.createElement(u,o(o({ref:t},s),{},{components:a})):r.createElement(u,o({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",source:"@site/blog/2021-10-4-feedback-admin-panel.md",title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:6.74,hasTruncateMarker:!0,authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],frontMatter:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},nextItem:{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine"},relatedPosts:[{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.915,date:"2022-02-14T00:00:00.000Z"},{title:"Dynamic Forms with React Hook Form",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:22.39,date:"2022-12-23T00:00:00.000Z"}],authorPosts:[{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.8,date:"2022-04-29T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.645,date:"2022-02-21T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this article, we will create a panel where we can manage the feedback we receive from our web application."))}m.isMDXComponent=!0}}]);