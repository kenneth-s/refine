"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(38848),n(3909),n(24490),n(27444),n(58508),n(55264),n(18141);const o={title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs","next-link","navigation","react"],image:"/img/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/next-js-link-component",source:"@site/blog/2022-09-04-next-link.md",title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"next-link",permalink:"/blog/tags/next-link"},{label:"navigation",permalink:"/blog/tags/navigation"},{label:"react",permalink:"/blog/tags/react"}],readingTime:9.57,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs","next-link","navigation","react"],image:"/img/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},prevItem:{title:"Material UI button in React",permalink:"/blog/mui-button-in-react"},nextItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},relatedPosts:[{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.845,date:"2022-09-16T00:00:00.000Z"},{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks",formattedDate:"February 21, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.255,date:"2022-02-21T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"}],authorPosts:[{title:"Next.js environment variables",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:6.545,date:"2022-09-07T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"},{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:13.315,date:"2022-08-17T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"If you have built websites and applications on the web, then you're very likely to have used a common method for navigation. Traditionally, navigation is often achieved with the HTML anchor element (",(0,i.kt)("inlineCode",{parentName:"p"},"<a></a>"),"). The anchor element is primarily used for navigating within and outside websites and webpages, and it serves its purpose pretty well. "),(0,i.kt)("p",null,"In this article, we'll introduce you to Next.js ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link/>")," component, a similar method of navigation to the native anchor element but with additional built-in features for optimization. The ",(0,i.kt)("strong",{parentName:"p"},"Next.js Link")," component has additional benefits, such as options to customize navigation behavior through props and improved performance and SEO metrics."))}m.isMDXComponent=!0},3909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-3422aebf56e89f5553c7cbb185b2a1a8.png"},24490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo-e5238273ce1b30c9a151b71abefab53b.gif"},27444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-0c7ae2f5b88abcc098b59654c2bd1366.png"},58508:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/noreplace-884cacdf15eef0ad5bb90d2fc42a1fb5.gif"},55264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/product-e90176b4b1f21e41caf5a7a89d53e53b.png"},38848:(e,t,n)=>{n.p},18141:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withreplace-74939ece2f396f9c83b03329035ab729.gif"}}]);