"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9616],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(8168),i=(t(6540),t(5680));const l={},o="Houdini\u7c92\u5b50\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa",a={unversionedId:"SPlisHSPlaSH/Houdini-exporter",id:"SPlisHSPlaSH/Houdini-exporter",title:"Houdini\u7c92\u5b50\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa",description:"Houdini\u5bfc\u5165\u5230splish",source:"@site/docs/SPlisHSPlaSH/Houdini-exporter.md",sourceDirName:"SPlisHSPlaSH",slug:"/SPlisHSPlaSH/Houdini-exporter",permalink:"/SPlisHSPlaSH/Houdini-exporter",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/SPlisHSPlaSH/Houdini-exporter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo",permalink:"/OpenVDB/first-openvdb"},next:{title:"\u5728splishsplash\u4e2d\u6dfb\u52a0\u7528\u6237\u4ea4\u4e92\uff1a\u7528crtl+wasdfb\u79fb\u52a8\u521a\u4f53",permalink:"/SPlisHSPlaSH/Interactive"}},p={},s=[{value:"Houdini\u5bfc\u5165\u5230splish",id:"houdini\u5bfc\u5165\u5230splish",level:2},{value:"splish\u5bfc\u51fa\u5230Houdini",id:"splish\u5bfc\u51fa\u5230houdini",level:2}],c={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"houdini\u7c92\u5b50\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa"},"Houdini\u7c92\u5b50\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa"),(0,i.yg)("h2",{id:"houdini\u5bfc\u5165\u5230splish"},"Houdini\u5bfc\u5165\u5230splish"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5728Houdini\u4e2d\u4f7f\u7528file\u5bfc\u5165\u4efb\u610f\u51e0\u4f55\u6a21\u578b")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u4f7f\u7528points from volume\u91c7\u6837\u70b9\uff0c\u4f7f\u5176\u7c92\u5b50\u5316\n",(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/e21f04f1055c4e6cb25b2e97b067efd6.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))),(0,i.yg)("p",null,"\u4f7f\u7528file\u5bfc\u51fa\u7c92\u5b50\u5316\u4e4b\u540e\u7684\u6a21\u578b\uff0c\u540e\u7f00\u5199bhclassic"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dc37fa3df44448ef8733d8eb1841b68b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u521b\u5efajson\u573a\u666f\u6587\u4ef6\uff08\u5efa\u8bae\u653e\u5230MyScences\u6587\u4ef6\u5939\uff09"),(0,i.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u590d\u5236Scences/ViscousBunny.json\u7136\u540e\u4fee\u6539particleFile\u8fd9\u4e00\u884c\u5373\u53ef"),(0,i.yg)("p",null,"\u540c\u65f6\u5efa\u8bae\u5c06bhclassic\u590d\u5236\u5230models\u6587\u4ef6\u5939\u4e0b"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/d969e14972674b71a9458d15e3471041.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u7ed3\u679c\n",(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a31533b4920b451d9d8130a48cb239a1.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.yg)("h2",{id:"splish\u5bfc\u51fa\u5230houdini"},"splish\u5bfc\u51fa\u5230Houdini"),(0,i.yg)("p",null,"\u52fe\u9009Houdini exporter(mypartio)\n",(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/be725c115efd4abca04ba84884686abd.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.yg)("p",null,"\u7a7a\u683c\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e"),(0,i.yg)("p",null,"\u7ed3\u679c\u4f4d\u4e8ebin/output\u6587\u4ef6\u5939\u3002\u683c\u5f0f\u4e3abgeo.gz"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/440d72598043461e8f45a8a0ff122e1e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.yg)("p",null,"\u8be5\u683c\u5f0f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165Houdini\u4e4b\u4e2d"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c7dba99d4d074a87a35f22adf2416a9e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}g.isMDXComponent=!0}}]);