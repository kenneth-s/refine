"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,u=c["".concat(m,".").concat(h)]||c[h]||l[h]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={id:"theming",title:"Theme",sidebar_label:"Theme"},a=void 0,s={unversionedId:"api-reference/antd/theming",id:"api-reference/antd/theming",title:"Theme",description:"Ant Design allows you to customize design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.",source:"@site/docs/api-reference/antd/theming.md",sourceDirName:"api-reference/antd",slug:"/api-reference/antd/theming",permalink:"/docs/api-reference/antd/theming",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/theming.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680015794,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"theming",title:"Theme",sidebar_label:"Theme"},sidebar:"someSidebar",previous:{title:"Custom Inputs",permalink:"/docs/api-reference/antd/components/inputs/custom-inputs"},next:{title:"Migration Guide",permalink:"/docs/api-reference/antd/migration-guide/v4-to-v5"}},m={},d=[{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the themes",id:"overriding-the-themes",level:3},{value:"Use Preset Algorithms",id:"use-preset-algorithms",level:3},{value:"Switching to dark theme",id:"switching-to-dark-theme",level:4},{value:"Example",id:"example",level:2}],p=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const c={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ant Design allows you to customize design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.\nDesign Tokens are the smallest element that affects the theme. By modifying the Design Token, we can present various themes or components."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme"},"Refer to the Ant Design documentation for more information about customizing Ant Design theme. ","\u2192")),(0,o.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/config-provider/#components-config-provider-demo-theme"},(0,o.kt)("inlineCode",{parentName:"a"},"<ConfigProvider/>"))," component can be used to change theme. It is not required if you decide to use the default theme."),(0,o.kt)("h3",{id:"overriding-the-themes"},"Overriding the themes"),(0,o.kt)("p",null,"You can override or extend the default themes. You can also create your own theme. Let's see how to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { Layout, ConfigProvider } from "@refinedev/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        // highlight-start\n        <ConfigProvider\n            theme={{\n                components: {\n                    Button: {\n                        borderRadius: 0,\n                    },\n                    Typography: {\n                        colorTextHeading: "#1890ff",\n                    },\n                },\n                token: {\n                    colorPrimary: "#f0f",\n                },\n            }}\n        >\n            {/* highlight-end */}\n            <Refine\n                /* ... */\n            >\n                <Layout>\n                    {/* ... */}\n                </Layout>\n            </Refine>\n            // highlight-next-line\n        </ConfigProvider>\n    );\n};\n')),(0,o.kt)("h3",{id:"use-preset-algorithms"},"Use Preset Algorithms"),(0,o.kt)("p",null,"Themes with different styles can be quickly generated by modifying algorithm. Ant Design 5.0 provides three sets of ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme#theme-presets"},"preset algorithms by default"),", which are default algorithm ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.defaultAlgorithm"),", dark algorithm ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.darkAlgorithm")," and compact algorithm ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.compactAlgorithm"),". You can switch algorithms by modifying the algorithm property of theme in ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/config-provider/#components-config-provider-demo-theme"},(0,o.kt)("inlineCode",{parentName:"a"},"<ConfigProvider/>")),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme#use-preset-algorithms"},"Refer to the Ant Design documentation for more information about customizing Ant Design theme. ","\u2192")),(0,o.kt)("h4",{id:"switching-to-dark-theme"},"Switching to dark theme"),(0,o.kt)("p",null,"Let's start with adding a switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Space, Button } from "antd";\n\ninterface HeaderProps {\n    theme: "light" | "dark";\n    setTheme: (theme: "light" | "dark") => void;\n}\n\nconst Header: FC<HeaderProps> = (props) => {\n    return (\n        <Space\n            direction="vertical"\n            align="end"\n            style={{\n                padding: "1rem",\n            }}\n        >\n            <Button\n                onClick={() => {\n                    props.setTheme(props.theme === "light" ? "dark" : "light");\n                }}\n                icon={props.theme === "light" ? <IconMoonStars /> : <IconSun />}\n            />\n        </Space>\n    );\n};\n\n')),(0,o.kt)("p",null,"Then, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," component to switch between light and dark themes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ConfigProvider, theme } from "antd";\n\nimport { Header } from "./Header";\n\nconst App: React.FC = () => {\n    // highlight-next-line\n    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");\n\n    return (\n        <ConfigProvider\n            // highlight-start\n            theme={{\n                algorithm:\n                    currentTheme === "light"\n                        ? theme.defaultAlgorithm\n                        : theme.darkAlgorithm,\n            }}\n            // highlight-end\n        >\n            <Refine\n                /* ... */\n            >\n                <Layout Header={Header}>\n                    {/* ... */}\n                </Layout>\n            </Refine>\n        </ConfigProvider>\n    );\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to customize the default layout elements provided with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom Layout")," tutorial.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(p,{path:"customization-theme-antd",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);