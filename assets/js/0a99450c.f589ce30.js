"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="\u4f7f\u7528Houdini\u7684Karma\u6e32\u67d3\u5668\u6e32\u67d3\u6d41\u4f53",p={unversionedId:"Houdini/render-fluid-karma",id:"Houdini/render-fluid-karma",title:"\u4f7f\u7528Houdini\u7684Karma\u6e32\u67d3\u5668\u6e32\u67d3\u6d41\u4f53",description:"\u4ecb\u7ecd",source:"@site/docs/Houdini/render-fluid-karma.md",sourceDirName:"Houdini",slug:"/Houdini/render-fluid-karma",permalink:"/Houdini/render-fluid-karma",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/Houdini/render-fluid-karma.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Houdini\u6e32\u67d3\u6d41\u4f53\uff08\u8fdb\u9636\u7248\uff09--ysy",permalink:"/Houdini/render-fluid-advanced-ysy"},next:{title:"\u7528Houdini \u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df",permalink:"/Houdini/vellum-first/vellum-first"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",level:2},{value:"\u5728viewport\u4e2d\u67e5\u770b",id:"\u5728viewport\u4e2d\u67e5\u770b",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528houdini\u7684karma\u6e32\u67d3\u5668\u6e32\u67d3\u6d41\u4f53"},"\u4f7f\u7528Houdini\u7684Karma\u6e32\u67d3\u5668\u6e32\u67d3\u6d41\u4f53"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\u6211\u4eec\u8bb2\u8fc7\u4f7f\u7528\u9ed8\u8ba4\u7684Mantra\u6e32\u67d3\u5668\u6e32\u67d3\u3002\u4f46\u662fMantra\u5c06\u57282024\u5e74\u88abHoudini\u5b98\u65b9\u505c\u6b62\u66f4\u65b0\u3002\u56e0\u4e3a\u4ed6\u4eec\u63a8\u51fa\u4e86\u4e00\u4e2a\u65b0\u7684\u66f4\u597d\u7684\u6e32\u67d3\u5668Karma\u3002\u4e0eMantra\u76f8\u6bd4\uff0c\u4e0d\u4ec5CPU\u6e32\u67d3\u901f\u5ea6\u53d8\u5feb\uff0c\u800c\u4e14\u8fd8\u652f\u6301XPU\uff08GPU CPU\u6df7\u5408\uff09\u3002\u901f\u5ea6\u6709\u4e86\u5f88\u5927\u7684\u63d0\u5347\u3002\u6b64\u5916\u8fd8\u652f\u6301\u6d41\u884c\u7684\u5f00\u6e90\u573a\u666f\u683c\u5f0fUSD\u548c\u5f00\u6e90\u6750\u8d28\u5305MaterialX\u3002\u5e76\u4e14\u539f\u672cMantra\u7684\u6750\u8d28\u548c\u706f\u514990%\u4ee5\u4e0a\u90fd\u662f\u517c\u5bb9\u7684\u3002\u56e0\u6b64\u5341\u5206\u6709\u5fc5\u8981\u5b66\u4e60\u4e00\u4e0b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53c2\u8003\u7684\u662f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1YS4y1R7db?p=5&vd_source=e15eb8f98a9dde1c9cc874314025b575"},"\u6377\u4f73\u5927\u4f6c\u7684\u89c6\u9891")),(0,a.kt)("p",null,"\u8868\u9762\u5efa\u6a21\u6d41\u7a0b\u4e0e\u4e4b\u524d\u4e00\u81f4\uff0c\u4e0d\u518d\u8d58\u8ff0"),(0,a.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff1a\u6211\u4eec\u8fd9\u91cc\u7528\u7684\u662fROP(Render Operator)\u4e2d\u7684Karma\u3002\u8fd9\u662f\u4e3a\u4e86\u517c\u5bb9Mantra\u7684\u64cd\u4f5c\u65b9\u5f0f\u800c\u63d0\u4f9b\u7684\u8282\u70b9\u3002\u5b9e\u9645\u4e0a\uff0cKarma\u539f\u751f\u652f\u6301USD\uff08\u4e5f\u5c31\u662fSolaris\u5e03\u5c40\uff0c\u6216\u8005stage\uff0c\u6216\u8005\u53ebLOP(Lighting Operator)\uff09\u3002\u4f46\u662f\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6211\u4eec\u8fd8\u91c7\u7528\u539f\u6765\u7684\u65e7\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),(0,a.kt)("p",null,"\u5f53\u524d\u7684\u8282\u70b9\u4e3a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/43f1a9301f4f4fa4a46da248ebadfedf.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u73af\u5883\u5149\u522b\u5fd8\u4e86\u52a0environment map\uff0c\u5176\u4ed6\u7684\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\u3002fluid\u4e5f\u9700\u8981\u8bbe\u7f6e\u6750\u8d28\u3002\u548c\u4e4b\u524d\u4e00\u6837\u4eceMaterial Platte\u62d6\u62fdBasic Liquid\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5176\u4e2dROP Network \u548c\u4f60\u653e\u5728out\u4e2d\u662f\u4e00\u6837\u7684\u3002ROP\u7684\u610f\u601d\u662f",(0,a.kt)("strong",{parentName:"p"},"Render Operator")),(0,a.kt)("p",null,"\u589e\u52a0",(0,a.kt)("strong",{parentName:"p"},"Karma"),"\u5373\u53ef"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/7bc24909e396465aa4a2f3ce7d024246.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6ce8\u610f\u5230\u53ef\u4ee5\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"XPU\u6e32\u67d3")),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"Render to MPlay"),"\u5373\u53ef\u67e5\u770b\u6548\u679c"),(0,a.kt)("p",null,"\u9700\u8981\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/bb12a653da1f4e9a9835d4ec72cda864.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b66\u4f1a\u4e86\u4f7f\u7528Karma"),(0,a.kt)("h3",{id:"\u5728viewport\u4e2d\u67e5\u770b"},"\u5728viewport\u4e2d\u67e5\u770b"),(0,a.kt)("p",null,"\u5047\u5982\u4f60\u89c9\u5f97\u5728MPlay\u4e2d\u67e5\u770b\u4e0d\u65b9\u4fbf\uff0c\u53ef\u4ee5\u70b9\u51fbkarma viewport"),(0,a.kt)("p",null,"\u4f1a\u8df3\u51fa\u5c0f\u7a97\u53e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/7ddfd0137c0a49ce87c7350039e9f7f8.png",alt:null})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7a97\u53e3\u5176\u5b9e\u662f\u4e00\u4e2ascene view"),(0,a.kt)("p",null,"\u4e0eMantra\u4e0d\u540c\uff0c\n",(0,a.kt)("strong",{parentName:"p"},"Karma\u4e0d\u652f\u6301\u5728Render view\u4e2d\u67e5\u770b\u6e32\u67d3\u7ed3\u679c")),(0,a.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u7a0d\u52a0\u6539\u9020\uff0c\u8ba9\u8fd9\u4e2ascence view\u4e5f\u5185\u5d4c\u663e\u793a\u3002\u4ee5\u4e0b\u662f\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u5730\u5740\u680f\u53f3\u952e ",(0,a.kt)("strong",{parentName:"p"},"edit path as text"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/f1b60d2c2b3a4290b6a26bde0fec80c4.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u7136\u540e\u590d\u5236"),(0,a.kt)("p",null,"\u540c\u7406edit path as text \u7136\u540e\u628a\u521a\u624d\u7684\u5730\u5740\u590d\u5236\u4e0a\u53bb\uff0c\u518d\u70b9\u51fb\u9489\u5b50\uff0c\u5b9a\u4f4f\u7a97\u53e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c00beb340b04432cb5abce60cf357403.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u4f60\u5c31\u628a\u521a\u624d\u7684\u7a97\u53e3\u5185\u5d4c\u6210\u6807\u7b7e\u9875\u4e86\u3002\u4f60\u5728\u8fd9\u91cc\u53ef\u4ee5\u66f4\u6539IPR(\u4ea4\u4e92\u5f0f\u6e32\u67d3)\u7684\u7a97\u53e3\uff0c\u4e5f\u5c31\u662f\u7528Houdini GL(openGL)\u8fd8\u662fKarma\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/96d476f4089649a096dca2d2312be0e7.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5fc5\u987b\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u8fd9\u4e2aKarma\u7684Scene view\u4e2d\u4e0d\u652f\u6301\u66f4\u6539\u76f8\u673a\u89c6\u89d2\uff01")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f60\u5fc5\u987b\u5728\u539f\u672c\u7684Scene View\u4e2d\u8c03\u8282\u89c6\u89d2\u3002")),(0,a.kt)("p",null,"\u540c\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"Karma\u7684\u5206\u8fa8\u7387\u4e0e\u76f8\u673a\u662f\u4e0d\u540c\u6b65\u7684"),"\uff01\u4f60\u5fc5\u987b\u624b\u52a8\u8c03\u8282\uff01"))}m.isMDXComponent=!0}}]);