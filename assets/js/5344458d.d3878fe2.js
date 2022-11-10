"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[191],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>m});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function p(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?p(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var k=n.createContext({}),s=function(t){var e=n.useContext(k),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},u=function(t){var e=s(t.components);return n.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,p=t.originalType,k=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(l),m=a,c=d["".concat(k,".").concat(m)]||d[m]||o[m]||p;return l?n.createElement(c,r(r({ref:e},u),{},{components:l})):n.createElement(c,r({ref:e},u))}));function m(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=l.length,r=new Array(p);r[0]=d;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:a,r[1]=i;for(var s=2;s<p;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5841:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>k,contentTitle:()=>r,default:()=>o,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const p={},r=void 0,i={unversionedId:"\u8bfb\u4e66\u7b14\u8bb0/IterMethods/IterMethods",id:"\u8bfb\u4e66\u7b14\u8bb0/IterMethods/IterMethods",title:"IterMethods",description:"[TOC]",source:"@site/docs/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/IterMethods.md",sourceDirName:"\u8bfb\u4e66\u7b14\u8bb0/IterMethods",slug:"/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/",permalink:"/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/\u8bfb\u4e66\u7b14\u8bb0/IterMethods/IterMethods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728zeno\u4e2d\u6e32\u67d3\u6d41\u4f53",permalink:"/zeno/zeno_water_render"}},k={},s=[{value:"\u76ee\u5f55\u548c\u5212\u91cd\u70b9\u8868",id:"\u76ee\u5f55\u548c\u5212\u91cd\u70b9\u8868",level:2},{value:"\u7b2c\u4e00\u7ae0\u8282 \u7ebf\u6027\u4ee3\u6570\u80cc\u666f\u77e5\u8bc6",id:"\u7b2c\u4e00\u7ae0\u8282-\u7ebf\u6027\u4ee3\u6570\u80cc\u666f\u77e5\u8bc6",level:2},{value:"1.6 \u5b50\u7a7a\u95f4\u3001\u8303\u56f4\u548c\u6838",id:"16-\u5b50\u7a7a\u95f4\u8303\u56f4\u548c\u6838",level:3},{value:"1.8 \u77e9\u9635\u89c4\u8303\u5f62\u5f0f",id:"18-\u77e9\u9635\u89c4\u8303\u5f62\u5f0f",level:3},{value:"1.8.1 \u5bf9\u89d2\u5316",id:"181-\u5bf9\u89d2\u5316",level:4},{value:"1.9 \u6b63\u89c4\u548cHermitan\u77e9\u9635",id:"19-\u6b63\u89c4\u548chermitan\u77e9\u9635",level:4},{value:"1.12 \u6295\u5f71\u7b97\u5b50",id:"112-\u6295\u5f71\u7b97\u5b50",level:3},{value:"\u7b2c\u4e8c\u7ae0 PDE\u79bb\u6563",id:"\u7b2c\u4e8c\u7ae0-pde\u79bb\u6563",level:2},{value:"\u7b2c\u4e09\u7ae0 \u7a00\u758f\u77e9\u9635",id:"\u7b2c\u4e09\u7ae0-\u7a00\u758f\u77e9\u9635",level:2},{value:"3.1 \u5f15\u8a00",id:"31-\u5f15\u8a00",level:3},{value:"3.2 \u56fe\u8868\u793a",id:"32-\u56fe\u8868\u793a",level:3},{value:"3.3 \u6392\u5217\u548c\u91cd\u6392\u5e8f",id:"33-\u6392\u5217\u548c\u91cd\u6392\u5e8f",level:3},{value:"3.4 \u5b58\u50a8\u65b9\u6848",id:"34-\u5b58\u50a8\u65b9\u6848",level:3},{value:"\u5750\u6807\u5b58\u50a8\u683c\u5f0f\uff08Coordinate scheme\uff09",id:"\u5750\u6807\u5b58\u50a8\u683c\u5f0fcoordinate-scheme",level:4},{value:"\u538b\u7f29\u7cfb\u6570\u884c Compressed Sparse Row",id:"\u538b\u7f29\u7cfb\u6570\u884c-compressed-sparse-row",level:4},{value:"\u6539\u8fdb\u7684\u538b\u7f29\u7cfb\u6570\u884c(Modified Compressed Sparse Row)",id:"\u6539\u8fdb\u7684\u538b\u7f29\u7cfb\u6570\u884cmodified-compressed-sparse-row",level:4},{value:"\u5bf9\u89d2\u65b9\u6848",id:"\u5bf9\u89d2\u65b9\u6848",level:4},{value:"Ellpack-Itpack\u65b9\u6848",id:"ellpack-itpack\u65b9\u6848",level:4},{value:"3.5 \u7cfb\u6570\u77e9\u9635\u7684\u57fa\u672c\u8fd0\u7b97",id:"35-\u7cfb\u6570\u77e9\u9635\u7684\u57fa\u672c\u8fd0\u7b97",level:3},{value:"\u7b2c\u4e94\u7ae0 \u6295\u5f71\u65b9\u6cd5",id:"\u7b2c\u4e94\u7ae0-\u6295\u5f71\u65b9\u6cd5",level:2},{value:"\u7b2c\u516d\u7ae0 Krylov \u5b50\u7a7a\u95f4\u6cd5I",id:"\u7b2c\u516d\u7ae0-krylov-\u5b50\u7a7a\u95f4\u6cd5i",level:2},{value:"\u7b2c\u4e03\u7ae0 Krylov \u5b50\u7a7a\u95f4\u6cd5I",id:"\u7b2c\u4e03\u7ae0-krylov-\u5b50\u7a7a\u95f4\u6cd5i",level:2}],u={toc:s};function o(t){let{components:e,...p}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u548c\u5212\u91cd\u70b9\u8868"},"\u76ee\u5f55\u548c\u5212\u91cd\u70b9\u8868"),(0,a.kt)("p",null,"\u672c\u6587\u4e3a\uff1a",(0,a.kt)("strong",{parentName:"p"},"Iterative Methods for SparseLinear Systems--Second Edition"),"\n\u7684\u8bfb\u4e66\u7b14\u8bb0\u3002\n\u4f5c\u8005\u662fYousef Saad\u3002\u5e74\u4efd\u662f2003."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221008143522943",src:l(5237).Z,width:"1316",height:"1629"})),(0,a.kt)("p",null,"\u9996\u5148\u5927\u81f4\u6765\u770b\u4e0b\u76ee\u5f55"),(0,a.kt)("p",null,"\u7b2c\u4e00\u7ae0 \u7ebf\u6027\u4ee3\u6570"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u7ae0 PDE\u79bb\u6563\u5316"),(0,a.kt)("p",null,"\u7b2c\u4e09\u7ae0 \u7a00\u758f\u77e9\u9635"),(0,a.kt)("p",null,"\u7b2c\u56db\u7ae0 \u57fa\u7840\u8fed\u4ee3\u6cd5"),(0,a.kt)("p",null,"\u7b2c\u4e94\u7ae0 \u6295\u5f71\u6cd5"),(0,a.kt)("p",null,"\u7b2c\u516d\u7ae0 Krylov\u5b50\u7a7a\u95f4\u6cd5I"),(0,a.kt)("p",null,"\u7b2c\u4e03\u7ae0 Krylov\u5b50\u7a7a\u95f4\u6cd5II"),(0,a.kt)("p",null,"\u7b2c\u516b\u7ae0 \u6cd5\u7ebf\u65b9\u7a0b\u7ec4\u65b9\u6cd5"),(0,a.kt)("p",null,"\u7b2c\u4e5d\u7ae0 \u9884\u5904\u7406\u8fed\u4ee3\u6cd5"),(0,a.kt)("p",null,"\u7b2c\u5341\u7ae0 \u9884\u5904\u7406\u6280\u672f"),(0,a.kt)("p",null,"\u7b2c\u5341\u4e00\u7ae0 \u5e76\u884c\u7684\u5b9e\u73b0"),(0,a.kt)("p",null,"\u7b2c\u5341\u4e8c\u7ae0 \u5e76\u884c\u7684\u9884\u5904\u7406"),(0,a.kt)("p",null,"\u7b2c\u5341\u4e09\u7ae0 \u591a\u91cd\u7f51\u683c"),(0,a.kt)("p",null,"\u7b2c\u5341\u56db\u7ae0 \u533a\u57df\u5206\u89e3\u6cd5"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u672c\u4e66\u662f\u540c\u65f6\u9762\u5411\u6570\u5b66\u4e13\u4e1a\u548c\u8ba1\u7b97\u673a\u4e13\u4e1a\u7684\u3002\u5bf9\u4e8eCS\u7684\u5b66\u751f\u6765\u8bf4\uff0c\u8bb8\u591a\u7ae0\u8282\u53ef\u4ee5\u88ab\u8df3\u8fc7\uff0c\u8fd8\u6709\u4e00\u4e9b\u7ae0\u8282\u53ea\u9700\u8981\u7565\u8bfb\u3002\u4e0b\u9762\u662f\u4e00\u7ae0\u6559\u5b66\u8868\u683c\u3002Quarter Course\u65e8\u572820\u828275\u5206\u949f\u7684\u8bfe\u7a0b\u5185\u5b8c\u6210\u3002\u6211\u4eec\u5c31\u7167\u7740\u8fd9\u5f20\u8868\u6765\u8bfb\u4e66\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221006094420505",src:l(6528).Z,width:"1683",height:"1033"})),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u7ae0\u8282-\u7ebf\u6027\u4ee3\u6570\u80cc\u666f\u77e5\u8bc6"},"\u7b2c\u4e00\u7ae0\u8282 \u7ebf\u6027\u4ee3\u6570\u80cc\u666f\u77e5\u8bc6"),(0,a.kt)("p",null,"\u9700\u8981\u9605\u8bfb\u7684\u4e3a1.1-1.6\u3002\u53e6\u59161.8.1\uff0c1.8.3\uff0c1.8.4\uff0c1.9\u4e5f\u6bd4\u8f83\u91cd\u8981\u30021.12\u63a8\u8350\u5728\u5b66\u4e60\u7b2c\u4e94\u7ae0\u4e4b\u524d\u9605\u8bfb\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a1.1-1.6\u90fd\u662f\u77e9\u9635\u7684\u57fa\u672c\u6982\u5ff5\uff0c\u6211\u4eec\u8fd9\u91cc\u8df3\u8fc7\u3002"),(0,a.kt)("p",null,"1.8\u662f\u77e9\u9635\u7684\u89c4\u8303\u5f62\u5f0f"),(0,a.kt)("p",null,"1.8.1 \u8fd8\u539f\u5230\u5bf9\u89d2\u5f62\u5f0f"),(0,a.kt)("p",null,"1.8.3 Schur\u89c4\u8303\u5f62\u5f0f"),(0,a.kt)("p",null,"1.8.4 \u5e94\u7528\u4e8e\u77e9\u9635\u7684\u5e42"),(0,a.kt)("p",null,"1.9 \u6b63\u89c4\u548cHermitian\u77e9\u9635"),(0,a.kt)("h3",{id:"16-\u5b50\u7a7a\u95f4\u8303\u56f4\u548c\u6838"},"1.6 \u5b50\u7a7a\u95f4\u3001\u8303\u56f4\u548c\u6838"),(0,a.kt)("p",null,"\u5b50\u7a7a\u95f4\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"\u67d0\u4e2a\u7a7a\u95f4Cn\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u7a7a\u95f4"),"\u5c31\u662f\u4e00\u7ec4\u5411\u91cf\u7684\u96c6\u5408\u3002\u8fd9\u7ec4\u5411\u91cf\u8981\u6ee1\u8db3\u4e00\u4e2a\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,"\u4e0d\u90a3\u4e48\u4e25\u8c28\u5730\u8bf4\u5c31\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cn\u5185\u7684\u4efb\u610f\u4e00\u4e2a\u5411\u91cf\u90fd\u80fd\u7528\u5176\u5b50\u7a7a\u95f4\u7684\u7ebf\u6027\u7ec4\u5408\u5f97\u5230\u3002")),(0,a.kt)("p",null,"\u4e25\u8c28\u4e00\u70b9\u5373"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007104017689",src:l(5815).Z,width:"1092",height:"209"})),(0,a.kt)("p",null,"\u8303\u56f4\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"\u8303\u56f4\u548c\u6838(\u4e5f\u53eb\u96f6\u7a7a\u95f4)\u662f\u4e24\u79cd\u7279\u6b8a\u7684\u5b50\u7a7a\u95f4\u3002\u4ed6\u4eec\u90fd\u662f\u5bf9\u7740\u77e9\u9635A\u6765\u8bf4\u7684\u3002A\u662fmxn\u77e9\u9635\u3002"),(0,a.kt)("p",null,"\u8303\u56f4\uff08range) \u662f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007104202002",src:l(1537).Z,width:"513",height:"85"})),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u7ecf\u8fc7\u77e9\u9635\u53d8\u6362\u4e4b\u540e\u7684\u4efb\u610f\u5411\u91cf\u7684\u96c6\u5408\u3002"),(0,a.kt)("p",null,"\u901a\u4fd7\u6765\u8bf4\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u7a7a\u95f4\u662f\u539f\u7a7a\u95f4\u7684\u7ebf\u6027\u7ec4\u5408\uff0c\u8fd9\u4e2a\u7ebf\u6027\u7ec4\u5408\u53d6\u4e00\u4e2a\u77e9\u9635\uff0c\u90a3\u5c31\u662f\u8303\u56f4"),"\u3002\u3002"),(0,a.kt)("p",null,"\u4ece\u76f4\u89c2\u4e0a\u8bb2\uff0cA\u7684\u8303\u56f4\u5c31\u662fAx=b\u4e2d\u7684b\u6240\u5f20\u6210\u7684\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u6838\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"\u6838\uff08kernel)\u4e5f\u53eb\u96f6\u7a7a\u95f4\uff08Null space)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007104746411",src:l(614).Z,width:"595",height:"87"}),"\n$$\nNull(A) = ","{","x\\in C^m | Ax=0","}","\n$$\n\u663e\u7136\u6838\u662f\u4e00\u79cd\u8303\u56f4\u3002"),(0,a.kt)("p",null,"\u901a\u4fd7\u6765\u8bf4\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u7a7a\u95f4\u7684\u8fd9\u4e2a\u7ebf\u6027\u7ec4\u5408\u4e0d\u4ec5\u53d6\u6210\u77e9\u9635A\uff0c\u800c\u4e14\u7ecf\u8fc7A\u5de6\u4e58\u4e4b\u540e\u5f97\u5230\u96f6\u5411\u91cf\u3002")),(0,a.kt)("p",null,"\u4ece\u76f4\u89c2\u4e0a\u8bb2\uff0cA\u7684\u96f6\u7a7a\u95f4\u5c31\u662fAx=0\u7684\u89e3\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u6709\u5982\u4e0b\u5b9a\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007104731932",src:l(7051).Z,width:"492",height:"90"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007104830946",src:l(3347).Z,width:"495",height:"60"})),(0,a.kt)("h3",{id:"18-\u77e9\u9635\u89c4\u8303\u5f62\u5f0f"},"1.8 \u77e9\u9635\u89c4\u8303\u5f62\u5f0f"),(0,a.kt)("p",null,"\u4ec0\u4e48\u662f\u89c4\u7ea6\uff08reduction\uff09\uff1a\u5c31\u662f\u7ecf\u8fc7\u53d8\u6362\u4e4b\u540e",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u6539\u53d8\u7279\u5f81\u503c"),"\uff0c\u4f46\u77e9\u9635\u7684\u5f62\u5f0f\u66f4\u7b80\u5355\u4e86\uff08\u6bd4\u5982\u53d8\u6210\u4e09\u89d2\u9547\u6216\u8005\u5bf9\u89d2\u9635\uff09\u3002",(0,a.kt)("strong",{parentName:"p"},"\u76f8\u4f3c\u53d8\u6362"),"\u5c31\u662f\u4e00\u79cd\u89c4\u7ea6\uff1a\n$$\nA = XBX^{-1}\n$$\n\u5219A\u548cB\u662f\u76f8\u4f3c\u7684\u3002A\u4e0eB\u7684\u7279\u5f81\u503c\u76f8\u540c\u3002\u800c\u4e14A\u4e0eB\u7684\u7279\u5f81\u5411\u91cf\u6709\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,"$$\nu_A = X u_B\n$$"),(0,a.kt)("h4",{id:"181-\u5bf9\u89d2\u5316"},"1.8.1 \u5bf9\u89d2\u5316"),(0,a.kt)("p",null,"\u5bf9\u89d2\u9635\u663e\u7136\u662f\u6700\u7b80\u5355\u7684\u3002\u4f46\u662f\u4e0d\u662f\u6240\u6709\u7684\u77e9\u9635\u90fd\u80fd\u4e09\u89d2\u5316\u3002\u6709\u5982\u4e0b\u5b9a\u7406\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u4e14\u4ec5\u5f53\u77e9\u9635\u6709n\u4e2a\u7ebf\u6027\u65e0\u5173\u7684\u7279\u5f81\u5411\u91cf\u65f6\uff0c\u624d\u53ef\u4ee5\u5bf9\u89d2\u5316\u3002")),(0,a.kt)("p",null,"\u8fd8\u6709\u4e2a\u7b49\u4ef7\u5b9a\u7406\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u4e14\u4ec5\u5f53\u77e9\u9635\u6709n\u4e2a\u4e0d\u7b49\u7279\u5f81\u503c\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5bf9\u89d2\u5316\u3002")),(0,a.kt)("p",null,"\u4e09\u89d2\u5316\u4e0d\u662f\u552f\u4e00\u7684\u3002\u6709\u7ea6\u65e6\u4e09\u89d2\u5316\u548c\u8212\u5c14\u4e09\u89d2\u5316\u3002"),(0,a.kt)("h4",{id:"19-\u6b63\u89c4\u548chermitan\u77e9\u9635"},"1.9 \u6b63\u89c4\u548cHermitan\u77e9\u9635"),(0,a.kt)("p",null,"\u4ec0\u4e48\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u89c4"),"\uff08normal\uff09\uff1a\u77e9\u9635\u548c\u5b83\u7684\u5171\u8f6d\u8f6c\u7f6e\u6ee1\u8db3\u4e58\u6cd5\u4ea4\u6362\u5f8b\uff1a\n$$\nA^H A = A A^H\n$$\n\u6b63\u89c4\u7684\u6027\u8d28\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u6b63\u89c4\u9635\u90fd\u53ef\u4ee5\u4e09\u89d2\u5316\u3002")),(0,a.kt)("p",null,"\u4e0d\u4f46\u5982\u6b64\uff0c\u5e76\u4e14\u5b83\u7684\u4e00\u7ec4\u6807\u51c6\u6b63\u4ea4\u57fa\u5c31\u662fQ\u7684\u5217\u5411\u91cf\u3002\u5176\u4e2dQ\u662f\u8212\u5c14\u89c4\u8303\u5f62\u5f0f\u4e2d\u7684Q\u3002\u6216\u8005\u8bf4\u662fQR\u5206\u89e3\u4e2d\u7684Q\u3002"),(0,a.kt)("p",null,"Hermitan\u77e9\u9635\u662f\u6b63\u89c4\u77e9\u9635\u7684\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\u3002\u5177\u4f53\u6765\u8bb2\uff0c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u5f81\u503c\u4e3a\u5b9e\u6570\u7684\u6b63\u89c4\u77e9\u9635\u5c31\u662fHermitan\u77e9\u9635\u3002")),(0,a.kt)("p",null,"\u90a3\u4e48Hermitan\u77e9\u9635\u6709\u4ec0\u4e48\u7279\u6b8a\u7684\u5462\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4efb\u4f55Hermitan\u77e9\u9635\u90fd\u76f8\u4f3c\u4e8e\u4e00\u4e2a\u5b9e\u5bf9\u89d2\u9635\u3002")),(0,a.kt)("p",null,"\u6700\u540e\u6211\u4eec\u8865\u5145\u4e00\u4e0b\u6b63\u5b9a\u9635\u7684\u5b9a\u4e49\uff1a"),(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u6570\u77e9\u9635"),"\u6ee1\u8db3\uff1a\n$$\n(Au,u)>0,  \\forall u\\in R^n, u \\neq 0\n$$\n\u90a3\u4e48A\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u5b9a\u7684"),"\u3002"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u5bf9\u4efb\u610f\u975e\u96f6\u5411\u91cfu\uff0cAu\u548cu\u7684\u5185\u79ef\u90fd\u5927\u4e8e0\u3002"),(0,a.kt)("h3",{id:"112-\u6295\u5f71\u7b97\u5b50"},"1.12 \u6295\u5f71\u7b97\u5b50"),(0,a.kt)("p",null,"\u6295\u5f71\u7b97\u5b50\u5c31\u662f\u4e00\u4e2a\u7b49\u5e42\u7684\u7ebf\u6027\u53d8\u6362\uff08\u4e5f\u5c31\u662f\u81ea\u8eab\u4e0d\u8bba\u4e58\u591a\u5c11\u904d\u81ea\u8eab\u90fd\u4e0d\u53d8\uff09\u3002\n$$\nP^2=P\n$$\n\u663e\u7136\uff08I-P)\u4e5f\u662f\u6295\u5f71\u7b97\u5b50\u3002\u56e0\u4e3aI-P\u4e0d\u8bba\u4e58\u591a\u5c11\u904d\u81ea\u8eab\u90fd\u4e0d\u53d8\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\u4e00\u4e2a\u5de7\u5999\u7684\u70b9\u662f\uff1a\u4efb\u4f55\u5411\u91cf\u90fd\u80fd\u62c6\u6210P\u548c(I-P)\u7684\u548c\n$$\nx=Px+(I-P)x\n$$"),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u7ae0-pde\u79bb\u6563"},"\u7b2c\u4e8c\u7ae0 PDE\u79bb\u6563"),(0,a.kt)("p",null,"\u8fd9\u7ae0\u662f\u8d70\u9a6c\u89c2\u82b1\u5730\u6982\u8ff0\u4e86PDE\u7684\u79bb\u6563\u5316\u7684\u4e09\u79cd\u65b9\u6cd5\uff1a\u6709\u9650\u5dee\u5206\u3001\u4f18\u5148\u4f53\u79ef\u3001\u6709\u9650\u5143\u3002"),(0,a.kt)("p",null,"\u5e76\u4e14\u8fd8\u4ecb\u7ecd\u4e86PDE",(0,a.kt)("strong",{parentName:"p"},"\u692d\u5706\u65b9\u7a0b"),"\uff08\u5176\u5b9e\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6cca\u677e\u65b9\u7a0b"),"\uff09\u548c",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u6d41\u6269\u6563\u65b9\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u6cca\u677e\u65b9\u7a0b\u7b97\u662f\u6700\u7b80\u5355\u7684\u4e00\u7c7bPDE\u4e86\u3002\uff08\u5982\u679c\u53f3\u7aef\u7b49\u4e8e0\uff0c\u8fd8\u80fd\u7b80\u5316\u4e3a\u62c9\u666e\u62c9\u65af\u65b9\u7a0b\uff09"),(0,a.kt)("p",null,"\u4e8c\u7ef4\u692d\u5706\u65b9\u7a0b\uff08\u6216\u6cca\u677e\u65b9\u7a0b\uff09\u5c31\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007113130951",src:l(8827).Z,width:"845",height:"184"})),(0,a.kt)("p",null,"\u4e09\u7c7b\u8fb9\u754c\u6761\u4ef6\u4e3a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007113208071",src:l(9995).Z,width:"1122",height:"232"})),(0,a.kt)("p",null,"\u4e8c\u7ef4",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u6d41\u6269\u6563\u65b9\u7a0b"),"\u5c31\u662f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221007113236136",src:l(7555).Z,width:"865",height:"154"})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u7a0b\u5c31\u5dee\u4e86\u4e00\u4e2a\u538b\u529b\u9879\u5c31\u662fNS\u65b9\u7a0b\u4e86\u3002"),(0,a.kt)("p",null,"\u6c42\u89e3\u7684\u4e00\u4e2a\u96be\u70b9\u5728\u4e8eb\u53ef\u80fd\u662f\u5f88\u5927\u7684\uff0c\u9020\u6210\u79bb\u6563\u548c\u6c42\u89e3\u7684\u56f0\u96be\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6709\u9650\u5dee\u5206")),(0,a.kt)("p",null,"\u524d\u5411\u540e\u5411\u548c\u4e2d\u5fc3\u5dee\u5206\u3002\u62c9\u666e\u62c9\u65af\u7b97\u5b50\u7684\u79bb\u6563\u3002"),(0,a.kt)("p",null,"\u8fce\u98ce\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u5feb\u901f\u6cca\u677e\u6c42\u89e3\u5668"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6709\u9650\u5143")),(0,a.kt)("p",null,"\u6563\u5ea6\u5b9a\u7406"),(0,a.kt)("p",null,"\u5f31\u5f62\u5f0f"),(0,a.kt)("p",null,"\u4f3d\u8fbd\u91d1\u6761\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6709\u9650\u4f53\u79ef")),(0,a.kt)("p",null,"cell-centered cell-vertex"),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u7ae0-\u7a00\u758f\u77e9\u9635"},"\u7b2c\u4e09\u7ae0 \u7a00\u758f\u77e9\u9635"),(0,a.kt)("p",null,"\u6309\u7167\u8bfe\u7a0b\u8868\uff0c\u6211\u4eec\u53ea\u9700\u8981\u770b3.1-3.5"),(0,a.kt)("p",null,"3.1 \u5f15\u8a00"),(0,a.kt)("p",null,"3.2 \u56fe\u8868\u793a"),(0,a.kt)("p",null,"3.3 \u6392\u5217\u548c\u91cd\u6392\u5e8f"),(0,a.kt)("p",null,"3.4 \u5b58\u50a8\u65b9\u6848"),(0,a.kt)("p",null,"3.5 \u7a00\u758f\u77e9\u9635\u7684\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("h3",{id:"31-\u5f15\u8a00"},"3.1 \u5f15\u8a00"),(0,a.kt)("p",null,"\u7a00\u758f\u77e9\u9635\u662f\u6ca1\u6709\u4e25\u8c28\u5b9a\u4e49\u7684\u3002\u53ea\u6709\u4e2a\u5927\u81f4\u7684\u8bf4\u6cd5\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u975e\u96f6\u6570\u5f88\u5c11\u7684\u77e9\u9635"),"\u3002\u6b63\u56e0\u5982\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u7279\u70b9\u3002\u9996\u5148\u662f\u5b9a\u4e49\u4e00\u79cd",(0,a.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u7684\u5b58\u50a8\u7ed3\u6784"),"\uff0c\u4ece\u800c\u8282\u7ea6\u5185\u5b58\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u5229\u7528\u8be5\u7279\u6027\u9009\u62e9\u7279\u5b9a\u7684\u6570\u503c\u65b9\u6cd5\uff0c\u4ee5\u8fbe\u5230\u6700\u9ad8\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u4e0e\u7a00\u758f\u76f8\u5bf9\u7684\u5f53\u7136\u5c31\u662f\u7a20\u5bc6\u77e9\u9635\u3002\u7a20\u5bc6\u77e9\u9635\u4e0d\u592a\u53ef\u80fd\u5904\u7406\u8fc7\u5927\u7684\u77e9\u9635\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u5904\u7406\u7684\u53eb\u505a\u201c\u5927\u578b\u7a00\u758f\u7ebf\u6027\u7cfb\u7edf\u201d\u3002"),(0,a.kt)("p",null,"\u7a00\u758f\u77e9\u9635\u6709\u4e24\u79cd\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u6784\u5316\u7684"),"\u4e0e\u975e\u7ed3\u6784\u5316\u7684\u3002\u987e\u540d\u601d\u4e49\uff0c\u7ed3\u6784\u5316\u7684\u5c31\u662f\u5176\u975e\u96f6\u503c\u4f4d\u7f6e\u662f\u6709\u89c4\u5f8b\u7684\uff0c\u6bd4\u5982\u5728\u5bf9\u89d2\u7ebf\u9644\u8fd1\u3002\u77e9\u5f62\u7f51\u683c\u4e0a\u7684\u6709\u9650\u5dee\u5206\u6cd5\u5f97\u5230\u7684\u77e9\u9635\u662f\u7ed3\u6784\u5316\u7684\uff0c\u800c\u590d\u6742\u51e0\u4f55\u7684\u6709\u9650\u5143\u6216\u8005\u6709\u9650\u4f53\u79ef\u6cd5\u4f1a\u5f97\u5230\u975e\u7ed3\u6784\u5316\u7f51\u683c\u3002"),(0,a.kt)("p",null,"\u7ed3\u6784\u5316\u4e0e\u975e\u7ed3\u6784\u5316\u5bf9\u4e8e\u76f4\u63a5\u89e3\u6cd5\u6765\u8bf4\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u4f46\u662f\u5bf9\u4e8e\u8fed\u4ee3\u6cd5\u6765\u8bf4\uff0c\u5374\u975e\u5e38\u91cd\u8981\u3002\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u662f\u77e9\u9635\u5411\u91cf\u4e58\u6cd5\u3002\u5bf9\u4e8e\u7ed3\u6784\u5316\u7f51\u683c\u548c\u975e\u7ed3\u6784\u5316\u7f51\u683c\u7684\u8fed\u4ee3\u6cd5\u6765\u8bf4\uff0c\u6548\u7387\u5dee\u8ddd\u5f88\u660e\u663e\u3002"),(0,a.kt)("h3",{id:"32-\u56fe\u8868\u793a"},"3.2 \u56fe\u8868\u793a"),(0,a.kt)("p",null,"\u77e9\u9635\u4e0e\u56fe\u662f\u53ef\u4ee5\u76f8\u4e92\u8868\u793a\u7684\u3002\u8fd9\u79cd\u77e9\u9635\u4e5f\u53eb\u90bb\u63a5\u77e9\u9635\u3002"),(0,a.kt)("p",null,"\u5f53\u67d0\u4e2a\u4f4d\u7f6e\u6709\u975e\u96f6\u503c\u7684\u65f6\u5019\uff0c\u4ee3\u8868\u8fd9\u91cc\u6709\u4e00\u6761\u8fb9\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u77e9\u9635\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u79f0"),"\u7684\uff0c\u610f\u5473\u7740aij\u4e0eaji\u662f\u76f8\u7b49\u7684\u3002\u6b64\u65f6\u4ee3\u8868\u7684\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u5411\u56fe"),"\u3002"),(0,a.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff1a\u4e0a\u9762\u7684\u662f\u975e\u5bf9\u79f0\u77e9\u9635\uff0c\u5bf9\u5e94\u6709\u5411\u56fe\u3002\u4e0b\u9762\u662f\u5bf9\u79f0\u77e9\u9635\uff0c\u5bf9\u5e94\u65e0\u5411\u56fe\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221008140010842",src:l(7387).Z,width:"1230",height:"911"})),(0,a.kt)("h3",{id:"33-\u6392\u5217\u548c\u91cd\u6392\u5e8f"},"3.3 \u6392\u5217\u548c\u91cd\u6392\u5e8f"),(0,a.kt)("p",null,"\u8fd9\u4e00\u8282\u8fc7\u957f\uff0c\u6211\u4eec\u653e\u5230\u540e\u9762\u518d\u8bf4"),(0,a.kt)("h3",{id:"34-\u5b58\u50a8\u65b9\u6848"},"3.4 \u5b58\u50a8\u65b9\u6848"),(0,a.kt)("h4",{id:"\u5750\u6807\u5b58\u50a8\u683c\u5f0fcoordinate-scheme"},"\u5750\u6807\u5b58\u50a8\u683c\u5f0f\uff08Coordinate scheme\uff09"),(0,a.kt)("p",null,"\u4e00\u79cd\u6bd4\u8f83\u7b80\u5355\u5b58\u50a8\u7a00\u758f\u77e9\u9635\u7684\u65b9\u6848\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e09\u4e2a\u6570\u7ec4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u6570\u6570\u7ec4\uff0c\u5b58\u50a8\u975e\u96f6\u503c\u672c\u8eab\u3002\uff08\u4efb\u610f\u987a\u5e8f\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u884c\u4e0b\u6807\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u5217\u4e0b\u6807\u6570\u636e")),(0,a.kt)("p",null,"\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221008141404590",src:l(388).Z,width:"1362",height:"801"})),(0,a.kt)("p",null,'\u8fd9\u79cd\u65b9\u6848\u7684\u597d\u5904\u662f\u975e\u5e38\u7b80\u5355\u76f4\u89c2\uff0c\u4fbf\u4e8e\u4eba\u7c7b\u7406\u89e3\u3002\u56e0\u6b64\u8f6f\u4ef6\u5305\u91cc\u901a\u5e38\u4f1a\u4f5c\u4e3a\u7528\u6237\u8f93\u5165\u7684"entry"\u3002\u5b83\u4e5f\u53eb',(0,a.kt)("strong",{parentName:"p"},"Coordinate scheme"),"\u3002"),(0,a.kt)("h4",{id:"\u538b\u7f29\u7cfb\u6570\u884c-compressed-sparse-row"},"\u538b\u7f29\u7cfb\u6570\u884c Compressed Sparse Row"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u8282\u7ea6\u5185\u5b58\u3002\u6211\u4eec\u53ef\u4ee5\u7ea6\u5b9a\u77e9\u9635\u662f\u6309\u884c\u5b58\u50a8\u7684\u3002\u4e5f\u5c31\u662f\u6bcf\u4e00\u884c\u4ece\u5de6\u5230\u53f3\u5b58\u50a8\uff08\u8df3\u8fc7\u96f6\u503c\uff09\u3002\u5b58\u5b8c\u4e00\u884c\u518d\u5b58\u4e00\u884c\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u6bcf\u884c\u5b58\u50a8\u7684\u65f6\u5019\u8df3\u8fc70\uff0c\u6211\u4eec\u9700\u8981\u77e5\u9053\u6bcf\u884c\u6709\u51e0\u4e2a\u975e\u96f6\u5143\u7d20\u3002\u6216\u8005\uff0c\u6211\u4eec\u9700\u8981\u77e5\u9053\u6bcf\u884c\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\u3002\u8fd9\u5c31\u7528\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u540c\u6837\u7531\u4e8e\u8df3\u8fc70\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u77e5\u9053\u6bcf\u4e2a\u975e\u96f6\u5143\u7684\u5217\u4e0b\u6807\uff0c\u8fd9\u4e5f\u7528\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u4e8e\u662f\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u6539\u5199\u4e3a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221008142315100",src:l(1191).Z,width:"1193",height:"298"})),(0,a.kt)("p",null,"\u5176\u4e2dAA\u662f\u975e\u96f6\u5143\u7684\u6570\u503c\u672c\u8eab\uff08\u4e0d\u8981\u88ab\u4f8b\u5b50\u768412345\u8ff7\u60d1\u4e86\uff0c\u6570\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7684\uff09\uff0c\u5b83\u662f\u7b2c\u4e00\u4e2a\u6570\u7ec4\u3002\u662f\u4e2a\u5b9e\u6570\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"JA\u662f\u5b58\u50a8\u7684\u5217\u4e0b\u6807\u3002\u5b83\u662f\u7b2c\u4e8c\u4e2a\u6570\u7ec4\u3002\u5b83\u662f\u6574\u6570\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"IA\u5b58\u50a8\u7684\u662f\u6bcf\u884c\u5f00\u5934\u7684\u4f4d\u7f6e\u3002\u6bd4\u59823\u5c31\u4ee3\u8868\u7b2c\u4e8c\u884c\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5728AA\u4e2d\u5728\u7b2c3\u4e2a\u4f4d\u7f6e\u30026\u5c31\u4ee3\u8868\u7b2c\u4e09\u884c\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5728AA\u4e2d\u5904\u4e8e\u7b2c6\u4e2a\u4f4d\u7f6e\u3002\u7531\u4e8e\u8be5\u4f8b\u5b50\u6570\u7ec4AA\u4e2d\u7684\u6570\u503c\u6070\u597d\u662f\u4ece\u5c0f\u5230\u5927\u6392\u5217\u7684\uff08\u518d\u8bf4\u4e00\u904d\uff0c\u4e0d\u8981\u88ab\u4f8b\u5b50\u8ff7\u60d1\u4e86\uff0c\u6570\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7684\uff09\uff0c\u56e0\u6b64\u770b\u8d77\u67653\u6070\u597d\u5bf9\u5e94\u6570\u503c3.0\uff0c\u800c6\u6070\u597d\u5bf9\u5e94\u6570\u503c6.0\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u628aIA\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f4d\u7f6e\u6362\u6210\u662f\u6307\u9488\uff0c\u9053\u7406\u4e5f\u76f8\u540c\u3002\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u5f00\u8f9f\u90a3\u4e48\u5927\u7684\u8fde\u7eed\u5185\u5b58\u4e86\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u5b58\u50a8\u65b9\u6848\u662f\u6700\u6d41\u884c\u7684\u5b58\u50a8\u65b9\u6848\uff0c\u5b83\u53eb\u505a",(0,a.kt)("strong",{parentName:"p"},"\u538b\u7f29\u7cfb\u6570\u884c"),"\u683c\u5f0f\uff08",(0,a.kt)("strong",{parentName:"p"},"Compressed Sparse Row"),") CSR"),(0,a.kt)("h4",{id:"\u6539\u8fdb\u7684\u538b\u7f29\u7cfb\u6570\u884cmodified-compressed-sparse-row"},"\u6539\u8fdb\u7684\u538b\u7f29\u7cfb\u6570\u884c(Modified Compressed Sparse Row)"),(0,a.kt)("p",null,"\u5176\u5b9e\uff0cCSR\u8fd8\u80fd\u7ee7\u7eed\u88ab\u4f18\u5316\u3002\u8fd9\u79cd\u683c\u5f0f\u53eb\u6539\u8fdb\u7684\u538b\u7f29\u7cfb\u6570\u884c\uff08Modified Compressed Sparse Row\uff09 \u683c\u5f0f\u3002\u600e\u4e48\u6539\u8fdb\u5462\uff1f\u6211\u4eec\u5229\u7528\u77e9\u9635\u5bf9\u89d2\u5143\u901a\u5e38\u4e0d\u4e3a0\u8fd9\u4e2a\u7279\u6027\uff0c\u53ef\u4ee5\u628a\u7b2c\u4e09\u4e2a\u6570\u7ec4\u5408\u5e76\u5230\u7b2c\u4e8c\u4e2a\u6570\u7ec4\u91cc\u9762\u3002\u7531\u4e8e\u5bf9\u89d2\u5143\u7684\u4f4d\u7f6e\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u4e86\u3002\u6240\u4ee5\u6211\u4eec\u8282\u7ea6\u6389\u4e86IA\uff0c\u53ea\u9700\u8981\u4e24\u4e2a\u6570\u7ec4\u5373\u53ef\u3002\u5177\u4f53\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u540c\u65f6\u5bf9\u7167\u7740\u4e0b\u56fe\u7684\u4f8b\u5b50\u6765\u770b"),(0,a.kt)("p",null,"\u5148\u8bf4AA\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"AA\u5148\u5b58\u5bf9\u89d2\u5143\u3002\u5b58n\u4e2a\u5bf9\u89d2\u5143\u5230AA\u7684\u524dn\u4e2a\u4f4d\u7f6e\u3002\u6ce8\u610f\uff1a\u7531\u4e8e\u6211\u4eec\u63d0\u524d\u77e5\u9053\u4e86\u4ed6\u4eec\u4e00\u5b9a\u662f\u5bf9\u89d2\u5143\uff0c\u6240\u4ee5\u540e\u9762\u65e0\u9700\u5b58\u50a8\u4ed6\u4eec\u7684\u4f4d\u7f6e\u3002\u5728\u4f8b\u5b50\u91cc\u5c31\u662f1\uff0c4\uff0c7\uff0c11\uff0c12\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7136\u540en+1\u7684\u4f4d\u7f6e\u7a7a\u51fa\u6765\u3002\u8fd9\u4e2a\u7a7a\u901a\u5e38\u7559\u4e0b\u6765\u5b58\u4e00\u4e9b\u6709\u5173\u77e9\u9635\u7684\u4fe1\u606f\u3002\u4f8b\u5b50\u91cc\u5c31\u662f\u661f\u53f7")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4eceAA\u7684\u7b2cn+2\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u6309\u884c\u5b58\u50a8\u975e\u5bf9\u89d2\u7684\u975e\u96f6\u5143\u3002\u4e00\u884c\u5b58\u5b8c\u518d\u5b58\u4e00\u884c\u3002\u4f8b\u5b50\u91cc\u5c31\u662f2\uff0c3\uff0c5\uff0c6\uff0c7\uff0c9\uff0c10\uff0c12"))),(0,a.kt)("p",null,"\u7136\u540e\u8bf4JA\uff08JA\u65e0\u9700\u5b58\u50a8\u5bf9\u89d2\u5143\u4f4d\u7f6e\uff0c\u53ea\u9700\u8981\u5b58\u50a8\u975e\u5bf9\u89d2\u975e\u96f6\u5143\u7684\u4f4d\u7f6e\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u524dn\u884c\u5b58\u50a8\u6bcf\u884c",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a"),"\u975e\u5bf9\u89d2\u5143\u5728AA\u4e2d\u6240\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002\u6bd4\u5982\uff1a\u9996\u5148\u662f\u5b58\u7b2c\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u975e\u5bf9\u89d2\u51432\u7684\u4f4d\u7f6e\uff0c\u5b83\u5728AA\u4e2d\u662f\u7b2c7\u4e2a\u3002\u7136\u540e\u662f\u7b2c\u4e8c\u884c\u7684\u7b2c\u4e00\u4e2a\u975e\u5bf9\u89d2\u51433\u7684\u4f4d\u7f6e\uff0c\u5728AA\u4e2d\u662f\u7b2c8\u4e2a\u3002\u7136\u540e\u662f\u7b2c\u4e09\u884c\u7684\u7b2c\u4e00\u4e2a\u975e\u5bf9\u89d2\u51436\uff0c\u5b83\u5728AA\u7684\u4f4d\u7f6e\u662f10\u3002\u4ee5\u6b64\u7c7b\u63a8\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"n+1\u7684\u4f4d\u7f6e\u91cd\u590d\u7b2cn\u4e2a\u4f4d\u7f6e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece\u7b2cn+2\u7684\u4f4d\u7f6e\u5f00\u59cb\uff0c\u5b58\u6bcf\u4e2a\u975e\u5bf9\u89d2\u5143\u7684\u5217\u4e0b\u6807\u3002\u6bd4\u5982\uff1a2\u5bf9\u5e94\u5217\u4e0b\u6807\u4e3a4\uff0c3\u5bf9\u5e94\u5217\u4e0b\u6807\u4e3a1\uff0c5\u5bf9\u5e94\u5217\u4e0b\u6807\u4e3a4..."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221011102946111",src:l(3075).Z,width:"518",height:"260"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221011102956031",src:l(4919).Z,width:"983",height:"156"})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6848\u4e3a\u4ec0\u4e48\u80fd\u591f\u8282\u7ea6\u6389IA\u5462\uff1f"),(0,a.kt)("p",null,"\u56e0\u4e3a\u5176\u5b9e\u5b83\u76f8\u5f53\u4e8e\u8282\u7ea6\u6389\u4e86JA\u4e2d\u524dn\u4e2a\u5bf9\u89d2\u5143\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u628aIA\uff08\u4e5f\u5c31\u662f\u6bcf\u884c\u5f00\u5934\u4f4d\u7f6e\uff09\u632a\u5230JA\u7684\u524dn\u4e2a\u7a7a\u91cc\u9762\u3002"),(0,a.kt)("h4",{id:"\u5bf9\u89d2\u65b9\u6848"},"\u5bf9\u89d2\u65b9\u6848"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6848\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u4e00\u6761\u4e00\u6761\u5730\u5b58\u5bf9\u89d2\u7ebf\uff08\u6216\u5bf9\u89d2\u7ebf\u9644\u8fd1\u7684\u6b21\u5bf9\u89d2\u7ebf\uff09"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,"DIAG\u6570\u7ec4\u6709\u4e09\u5217\uff0c\u6bcf\u5217\u5bf9\u5e94\u4e00\u6761\u5bf9\u89d2\u7ebf\u6216\u6b21\u5bf9\u89d2\u7ebf\u3002\u5047\u5982\u6709\u7a7a\u7684\u4f4d\u7f6e\u5c31\u7528\u661f\u53f7\u4ee3\u66ff\u3002"),(0,a.kt)("p",null,"IOFF\u5b58\u7684\u662f\u5bf9\u89d2\u7ebf\u7684offset\u3002\u4e5f\u5c31\u662f\u79bb\u4e3b\u5bf9\u89d2\u7684\u8ddd\u79bb\u3002\u6bd4\u5982\u4e3b\u5bf9\u89d2\u4e0b\u9762\u7684\u90a3\u4e2a\u5c31\u662f-1\uff0c\u4e3b\u5bf9\u89d2\u5c31\u662f0\uff0c\u4e3b\u5bf9\u89d2\u4e0a\u9762\u7684\u5c31\u662f1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221011110026413",src:l(9312).Z,width:"516",height:"245"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221011105612995",src:l(701).Z,width:"812",height:"301"})),(0,a.kt)("h4",{id:"ellpack-itpack\u65b9\u6848"},"Ellpack-Itpack\u65b9\u6848"),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u6848\u5728\u5411\u91cf\u673a\u4e2d\u5f88\u6d41\u884c\u3002"),(0,a.kt)("p",null,"COEF\u6309\u884c\u5b58\u5143\u7d20\u3002\u7a7a\u7684\u5730\u65b9\u88650\u3002"),(0,a.kt)("p",null,"JCOEF\u5b58\u7684\u662fCOEF\u4e2d\u5bf9\u5e94\u5143\u7d20\u7684\u5217\u4e0b\u6807\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1aCOEF\u4e2d\u76f8\u5e94\u7684\u7a7a\u7684\u4f4d\u7f6e\uff0c\u88ab\u5b58\u6210\u4e86\u884c\u53f7\uff0c\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u4f4d\u7f6e\u662f\u6ca1\u7528\u7684\uff0c\u53ef\u4ee5\u5b58\u4efb\u4f55\u6570\u3002\u4f46\u662f\u4e66\u4e2d\u8bf4\u8981\u662f\u5168\u5b58\u4e00\u6837\u7684\u6570\u4f1a\u5bf9\u6027\u80fd\u6709\u5f71\u54cd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221011105930157",src:l(2629).Z,width:"910",height:"291"})),(0,a.kt)("h3",{id:"35-\u7cfb\u6570\u77e9\u9635\u7684\u57fa\u672c\u8fd0\u7b97"},"3.5 \u7cfb\u6570\u77e9\u9635\u7684\u57fa\u672c\u8fd0\u7b97"),(0,a.kt)("p",null,"\u57fa\u672c\u5c31\u662f\u5411\u91cf\u3001\u77e9\u9635\u7684\u4e58\u6cd5"),(0,a.kt)("h2",{id:"\u7b2c\u4e94\u7ae0-\u6295\u5f71\u65b9\u6cd5"},"\u7b2c\u4e94\u7ae0 \u6295\u5f71\u65b9\u6cd5"),(0,a.kt)("h2",{id:"\u7b2c\u516d\u7ae0-krylov-\u5b50\u7a7a\u95f4\u6cd5i"},"\u7b2c\u516d\u7ae0 Krylov \u5b50\u7a7a\u95f4\u6cd5I"),(0,a.kt)("p",null,"\u7531\u4e8e\u8fd9\u7ae0\u592a\u91cd\u8981\uff0c\u6240\u4ee5\u5927\u90e8\u5206\u90fd\u8981\u5b66\u3002"),(0,a.kt)("p",null,"\u91cd\u70b9\u6709\uff1a"),(0,a.kt)("p",null,"6.1-6.3"),(0,a.kt)("p",null,"6.4\uff0c6.5.1\uff0c6.5.3-5\uff0c 6.7.1\uff0c6.11.3"),(0,a.kt)("h2",{id:"\u7b2c\u4e03\u7ae0-krylov-\u5b50\u7a7a\u95f4\u6cd5i"},"\u7b2c\u4e03\u7ae0 Krylov \u5b50\u7a7a\u95f4\u6cd5I"),(0,a.kt)("p",null,"7.1-3\uff0c"),(0,a.kt)("p",null,"7.4.1-2\u7565\u8bfb"))}o.isMDXComponent=!0},6528:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221006094420505-e6c4f0acce04a8483584e64d33b73ae1.png"},5815:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007104017689-c333c2e2420dc9db86208a4707dffc3c.png"},1537:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007104202002-87a67f19ec3ccadc053df8131b37857f.png"},7051:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007104731932-8c4b771a361ea0231e64be1d2c2e19ae.png"},614:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007104746411-13ae7e397d2e37cdd2bd11bda102dafc.png"},3347:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007104830946-89b5548a3a35c35f78b9a0eadad19d14.png"},8827:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007113130951-89565f5a18824c693305432c7fa9ba2e.png"},9995:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007113208071-108b3c13231d568dcc108922c13de3d9.png"},7555:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221007113236136-5031af9cfb5d331070e60422fab81856.png"},7387:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221008140010842-07fb0c516fc11606eac9cf666883386f.png"},388:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221008141404590-3db570bf718617df7ddea2ba9b54d283.png"},1191:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221008142315100-4e78f0a6336e405ba5c20556e8a8b746.png"},5237:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221008143522943-4c464d8e2a963c2c369a876e142382aa.png"},3075:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221011102946111-4c451fcf3fb6e5090de802c443bf5063.png"},4919:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221011102956031-877711cce15b8f337a41cbec04f39f98.png"},701:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221011105612995-cd5b085ec0bc01d56e70b81954ec5623.png"},2629:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221011105930157-ab9f2feffd9fa619d7b0a27ab0aa4c0b.png"},9312:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/image-20221011110026413-b9899d8a08aecc6a53ceae1a6b5e3065.png"}}]);