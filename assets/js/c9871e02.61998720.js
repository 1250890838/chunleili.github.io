"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=c(n),d=l,m=k["".concat(p,".").concat(d)]||k[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},o),{},{components:n})):a.createElement(m,i({ref:t},o))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},i="\u5229\u7528cmake\u7684add_subdirectory\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93",s={unversionedId:"cmake/organize-libraries",id:"cmake/organize-libraries",title:"\u5229\u7528cmake\u7684add_subdirectory\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/cmake/organize-libraries.md",sourceDirName:"cmake",slug:"/cmake/organize-libraries",permalink:"/cmake/organize-libraries",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/cmake/organize-libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528ctest\u914d\u7f6egoogletest",permalink:"/cmake/ctest-googletest"},next:{title:"\u5229\u7528std::chrono\u6765\u8fdb\u884c\u8ba1\u65f6, \u4ee5\u6d4b\u8bd5\u6027\u80fd",permalink:"/cpp/chrono"}},p={},c=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u6839\u76ee\u5f55 CMakeLists.txt",id:"\u6839\u76ee\u5f55-cmakeliststxt",level:3},{value:"src\u76ee\u5f55 CMakeLists.txt",id:"src\u76ee\u5f55-cmakeliststxt",level:3},{value:"\u5185\u90e8\u548c\u5916\u90e8\u5e93\u76ee\u5f55\u7684 CMakeLists.txt",id:"\u5185\u90e8\u548c\u5916\u90e8\u5e93\u76ee\u5f55\u7684-cmakeliststxt",level:3},{value:"\u6784\u5efa\u8fd0\u884c\u7ed3\u679c(\u65e0\u6d4b\u8bd5\uff09",id:"\u6784\u5efa\u8fd0\u884c\u7ed3\u679c\u65e0\u6d4b\u8bd5",level:3},{value:"\u8865\u51451\uff1a\u6d4b\u8bd5",id:"\u8865\u51451\u6d4b\u8bd5",level:3},{value:"\u8865\u51452\uff1a\u628a\u8f93\u51fa\u7684exe\u653e\u5230\u6839\u76ee\u5f55\u7684bin\u76ee\u5f55\u4e0b",id:"\u8865\u51452\u628a\u8f93\u51fa\u7684exe\u653e\u5230\u6839\u76ee\u5f55\u7684bin\u76ee\u5f55\u4e0b",level:3}],o={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5229\u7528cmake\u7684add_subdirectory\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93"},"\u5229\u7528cmake\u7684add_subdirectory\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93"),(0,l.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,l.kt)("p",null,"\u5185\u5bb9\u53c2\u8003\u81ea ",(0,l.kt)("a",{parentName:"p",href:"https://www.bookstack.cn/read/CMake-Cookbook/content-chapter7-7.7-chinese.md"},"cmake\u83dc\u8c31")),(0,l.kt)("p",null,"\u8bf7\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dev-cafe/cmake-cookbook/tree/v1.0/chapter-7/recipe-07"},"\u8fd9\u91cc\u4e0b\u8f7d\u6e90\u7801")," "),(0,l.kt)("p",null,"\u5047\u5982\u4f60\u6709\u4e00\u4e2a\u7a0d\u5fae\u5927\u4e00\u70b9\u7684\u9879\u76ee\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5f15\u7528\u8bb8\u591a\u5916\u90e8\u5e93\u3002\u540c\u65f6\uff0c\u4f60\u8fd8\u6709\u8bb8\u591a\u81ea\u5df1\u5199\u7684\u5185\u90e8\u5e93\u3002\u6700\u540e\uff0c\u4f60\u628a\u4ed6\u4eec\u90fd\u94fe\u63a5\u5230\u81ea\u5df1\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4e0a\u3002"),(0,l.kt)("p",null,"\u4f60\u7684\u9879\u76ee\u7ed3\u6784\u53ef\u80fd\u5982\u4e0b\u6240\u793a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6839\u76ee\u5f55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u7684\u9879\u76ee",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8\u5e93A"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8\u5e93B"))),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5e93")))),(0,l.kt)("h2",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),(0,l.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u8bf4\u660e\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u5982\u4e0b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dev-cafe/cmake-cookbook/tree/v1.0/chapter-7/recipe-07"},"\u9879\u76ee\u6e90\u7801"),"."),(0,l.kt)("p",null,"\u6211\u4eec\u628a\u6240\u6709\u7684CMakeLists.txt\u6587\u4ef6\u90fd\u6e05\u7406\u5e72\u51c0\uff0c\u7136\u540e\u4ece\u5934\u5f00\u59cb\u5199\u3002"),(0,l.kt)("p",null,"\u76ee\u5f55\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 external\n\u2502   \u251c\u2500\u2500 conversion.cpp\n\u2502   \u2514\u2500\u2500 conversion.hpp\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 evolution\n\u2502   \u2502   \u251c\u2500\u2500 evolution.cpp\n\u2502   \u2502   \u2514\u2500\u2500 evolution.hpp\n\u2502   \u251c\u2500\u2500 initial\n\u2502   \u2502   \u251c\u2500\u2500 initial.cpp\n\u2502   \u2502   \u2514\u2500\u2500 initial.hpp\n\u2502   \u251c\u2500\u2500 io\n\u2502   \u2502   \u251c\u2500\u2500 io.cpp\n\u2502   \u2502   \u2514\u2500\u2500 io.hpp\n\u2502   \u251c\u2500\u2500 main.cpp\n\u2502   \u2514\u2500\u2500 parser\n\u2502       \u251c\u2500\u2500 parser.cpp\n\u2502       \u2514\u2500\u2500 parser.hpp\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 catch.hpp\n    \u2514\u2500\u2500 test.cpp\n")),(0,l.kt)("p",null,"\u89e3\u91ca\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"external\u5b58\u653e\u5916\u90e8\u5e93"),(0,l.kt)("li",{parentName:"ul"},"tests\u5b58\u653e\u6d4b\u8bd5 \u4f7f\u7528catch2\u6d4b\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"src\u662f\u672c\u9879\u76ee\u6e90\u7801\u76ee\u5f55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"evolution/initial/io/parser\u90fd\u662f\u5185\u90e8\u5e93"),(0,l.kt)("li",{parentName:"ul"},"main \u53ef\u6267\u884c\u76ee\u6807")))),(0,l.kt)("p",null,"\u6211\u4eec\u4ece\u4e0a\u5230\u4e0b\u4f9d\u6b21\u6765\u5efa\u7acbCMakeLists.txt\u4ee5\u7ba1\u7406\u9879\u76ee"),(0,l.kt)("h3",{id:"\u6839\u76ee\u5f55-cmakeliststxt"},"\u6839\u76ee\u5f55 CMakeLists.txt"),(0,l.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e2d\u5efa\u7acb CMakeLists.txt"),(0,l.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# cmake\u6700\u4f4e\u7248\u672c\ncmake_minimum_required(VERSION 3.20)\n# \u672c\u9879\u76ee\u540d\nproject(organize-3rd-parties)\n\n# \u8bbe\u7f6eC++17\u6807\u51c6\uff0c\u9700\u8981\u6ee1\u8db3\u6807\u51c6\uff0c\u4e0d\u7528C++\u62d3\u5c55\u8bed\u6cd5\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\n# \u8fdb\u5165src\u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(src)\n\n# \u8fdb\u5165external\u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(external)\n\n# # \u5f00\u542f\u6d4b\u8bd5\n# enable_testing()\n# # \u8fdb\u5165 tests \u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\n# add_subdirectory(tests)\n")),(0,l.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u5148\u6682\u65f6\u628a\u6d4b\u8bd5\u7684\u90e8\u5206\u6ce8\u91ca\u6389\u3002\u53ea\u5173\u6ce8\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93\u3002"),(0,l.kt)("h3",{id:"src\u76ee\u5f55-cmakeliststxt"},"src\u76ee\u5f55 CMakeLists.txt"),(0,l.kt)("p",null,"\u5728src\u4e2d\u5efa\u7acb CMakeLists.txt"),(0,l.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5c06main.cpp\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\nadd_executable(main main.cpp)\n\n# \u8fdb\u5165\u5404\u4e2a\u5185\u90e8\u5e93\u5b50\u76ee\u5f55\nadd_subdirectory(evolution)\nadd_subdirectory(initial)\nadd_subdirectory(io)\nadd_subdirectory(parser)\n\n# \u94fe\u63a5\u5916\u90e8\u5e93\u548c\u5185\u90e8\u5e93\u5230\u53ef\u6267\u884c\u76ee\u6807\ntarget_link_libraries(main \n    PRIVATE         #\u4e0d\u4f1a\u4f20\u64ad\n        evolution   #\u5185\u90e8\u5e93\n        initial     #\u5185\u90e8\u5e93\n        io          #\u5185\u90e8\u5e93  \n        parser      #\u5185\u90e8\u5e93\n        conversion  #\u5916\u90e8\u5e93\n)\n")),(0,l.kt)("h3",{id:"\u5185\u90e8\u548c\u5916\u90e8\u5e93\u76ee\u5f55\u7684-cmakeliststxt"},"\u5185\u90e8\u548c\u5916\u90e8\u5e93\u76ee\u5f55\u7684 CMakeLists.txt"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u51e0\u4e2a\u5e93\u7684\u7ba1\u7406\u65b9\u5f0f\u90fd\u662f\u4e00\u6837\u7684\nsrc\\evolution\nsrc\\initial\nsrc\\io\nsrc\\parser\nexternal\\CMakeLists.txt"),(0,l.kt)("p",null,"\u6211\u4eec\u4e3e\u4e00\u4e2a\u4f8b\u5b50\u5373\u53ef"),(0,l.kt)("p",null,"src\\evolution\\CMakeLists.txt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u7f16\u8bd1\u9759\u6001\u5e93\uff0c\u6682\u4e0d\u6dfb\u52a0\u4efb\u4f55\u6e90\u7801\u3002\nadd_library(evolution "")\n\n# \u968f\u540e\u7528target_sources\u6dfb\u52a0\u6e90\u7801\u3002\n# \u8fd9\u79cd\u65b9\u5f0f\u66f4\u597d\uff0c\u56e0\u4e3a\u53ef\u4ee5\u66f4\u7ec6\u7c92\u5ea6\u5730\u8bbf\u95ee\u6743\u9650\u3002\n# \u4f8b\u5982\u5bf9cpp\u6587\u4ef6\u5c31\u662fPRIVATE\uff0c\u800chpp\u5219\u662fPUBLIC\ntarget_sources(evolution\nPRIVATE\n    # \u6ce8\uff1a${CMAKE_CURRENT_LIST_DIR}\u4ee3\u8868\u5f53\u524d\u7684CMakeLists.txt\u6587\u4ef6\u6240\u5728\u7684\u7edd\u5bf9\u8def\u5f84\u3002\n    ${CMAKE_CURRENT_LIST_DIR}/evolution.cpp\nPUBLIC\n    ${CMAKE_CURRENT_LIST_DIR}/evolution.hpp\n)\n\n# \u589e\u52a0\u5934\u6587\u4ef6\u76ee\u5f55\ntarget_include_directories(evolution\nPUBLIC\n    ${CMAKE_CURRENT_LIST_DIR}\n)\n')),(0,l.kt)("p",null,"\u5bf9\u5176\u4ed6\u51e0\u4e2a\u5e93\u540c\u7406\uff0c\u53ea\u8981\u66f4\u6539\u540d\u5b57\u5373\u53ef"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5373\u4f7f\u662f\u5916\u90e8\u5e93\uff0c\u4e5f\u662f\u540c\u6837\u7684\u505a\u6cd5\u3002\u5bf9cmake\u6765\u8bf4\uff0c\u6ca1\u6709\u4efb\u4f55\u7684\u533a\u522b\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa\u8fd0\u884c\u7ed3\u679c\u65e0\u6d4b\u8bd5"},"\u6784\u5efa\u8fd0\u884c\u7ed3\u679c(\u65e0\u6d4b\u8bd5\uff09"),(0,l.kt)("p",null,"cmake\u662f\u4e00\u4e2a\u5143\u6784\u5efa\u7cfb\u7edf\u3002\u5c31\u662f\u8bf4\uff1a\u5b83\u5148\u751f\u6210\u5bf9\u5e94\u7cfb\u7edf\u4e0b\u7684\u539f\u751f\u6784\u5efa\u5de5\u5177\uff08\u5982VS\u7684MSBuild \u6216\u8005Linux\u7684makefile\uff09\u6240\u9700\u8981\u7684\u6784\u5efa\u6587\u4ef6\uff0c\u7136\u540e\u518d\u8fd0\u884c\u8fd9\u4e9b\u539f\u751f\u6784\u5efa\u5de5\u5177\u8fdb\u884c\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u6700\u57fa\u672c\u7684cmake\u4f7f\u7528\u5206\u4e3a\u4e24\u6b65"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"configure(\u914d\u7f6e): \u7528\u4e8e\u751f\u6210VS\u7684sln\u6587\u4ef6(Windows)\uff0c\u6216\u8005makefile\u6587\u4ef6(Linux/Mac)"),(0,l.kt)("li",{parentName:"ol"},"build(\u6784\u5efa): \u7528\u4e8e\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u548c\u9759\u6001\u5e93\uff0c\u76f8\u5f53\u4e8eVS\u70b9\u51fbbuild\uff0c\u6216\u8005makefile\u8fd0\u884cmake\u547d\u4ee4")),(0,l.kt)("p",null,"\u6700\u540e\u8fd0\u884c\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5373\u53ef"),(0,l.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u91c7\u7528\u7684\u662fWin10 + VS2022"),(0,l.kt)("p",null,"\u603b\u7ed3\u8d77\u6765\u5c31\u4e24\u6b65"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cmake -B build\ncmake --build build --config=Release\n")),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u8be6\u7ec6\u89c2\u5bdf\u8f93\u51fa\u7ed3\u679c"),(0,l.kt)("p",null,"\u9996\u5148\u8fdb\u884c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"PS E:\\learn\\cmake> cmake -B build\n-- Selecting Windows SDK version 10.0.22000.0 to target Windows 10.0.19043.\n-- Configuring done\n-- Generating done\n-- Build files have been written to: E:/learn/cmake/build\n")),(0,l.kt)("p",null,"\u7136\u540e\u6784\u5efa"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5047\u5982\u4f60\u5728Windows\u4e0b\u4f7f\u7528VS\uff0c\u90a3\u4e48",(0,l.kt)("strong",{parentName:"p"},"--config=Release\u662f\u5fc5\u8981\u7684"),"\u3002\u56e0\u4e3a\u9ed8\u8ba4\u4f1a\u8fdb\u884cDebug\u6a21\u5f0f\u7684\u6784\u5efa\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u800c\u4e14\u5b9e\u9645\u4e0aVS\u4f1a\u628a\u6240\u6709\u7684\u56db\u79cd\u53d8\u4f53\u90fd\u751f\u6210\uff0c\u56e0\u6b64\u4f60\u5728\u914d\u7f6e\u6b65\u9aa4\u6307\u5b9aCMAKE_BUILD_TYPE\u662f\u6ca1\u6709\u7528\u7684\uff01")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PS E:\\learn\\cmake> cmake --build build --config=Release\nMSBuild version 17.3.1+2badb37d1 for .NET Framework\n  Checking Build System\n  Building Custom Rule E:/learn/cmake/external/CMakeLists.txt\n  conversion.cpp\n  conversion.vcxproj -> E:\\learn\\cmake\\build\\external\\Release\\conversion.lib\n  Building Custom Rule E:/learn/cmake/src/evolution/CMakeLists.txt\n  evolution.cpp\n  evolution.vcxproj -> E:\\learn\\cmake\\build\\src\\evolution\\Release\\evolution.lib\n  Building Custom Rule E:/learn/cmake/src/initial/CMakeLists.txt\n  initial.cpp\n  initial.vcxproj -> E:\\learn\\cmake\\build\\src\\initial\\Release\\initial.lib\n  Building Custom Rule E:/learn/cmake/src/io/CMakeLists.txt\n  io.cpp\n  io.vcxproj -> E:\\learn\\cmake\\build\\src\\io\\Release\\io.lib\n  Building Custom Rule E:/learn/cmake/src/parser/CMakeLists.txt\n  parser.cpp\n  parser.vcxproj -> E:\\learn\\cmake\\build\\src\\parser\\Release\\parser.lib\n  Building Custom Rule E:/learn/cmake/src/CMakeLists.txt\n  main.cpp\n  main.vcxproj -> E:\\learn\\cmake\\build\\src\\Release\\main.exe\n  Building Custom Rule E:/learn/cmake/CMakeLists.txt\n")),(0,l.kt)("p",null,"\u53ef\u6267\u884c\u672a\u89c1\u4f4d\u4e8e\n",(0,l.kt)("inlineCode",{parentName:"p"},"build\\src\\Release\\main.exe")),(0,l.kt)("p",null,"\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PS E:\\learn\\cmake\\build\\src\\Release> .\\main.exe 10 10 10\nlength: 10\nnumber of steps: 10\nrule: 10\n     *\n    *\n   *\n  *\n *\n*\n         *\n        *\n       *\n      *\n     *\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u81f3\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u5b66\u4f1a\u4e86\u5982\u4f55\u4f7f\u7528add_subdirectory\u6765\u7ba1\u7406\u5185\u90e8\u548c\u5916\u90e8\u5e93\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u52a0\u9910\u3002"),(0,l.kt)("h3",{id:"\u8865\u51451\u6d4b\u8bd5"},"\u8865\u51451\uff1a\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u5f00\u542f\u6d4b\u8bd5\uff1a"),(0,l.kt)("p",null,"\u5728\u6839\u76ee\u5f55CMakeLists.txt \u628a\u6ce8\u91ca\u7684\u90e8\u5206\u89e3\u9664\u6ce8\u91ca"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5f00\u542f\u6d4b\u8bd5\nenable_testing()\n# \u8fdb\u5165 tests \u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(tests)\n")),(0,l.kt)("p",null,"\u6211\u4eec\u91c7\u7528catch2\u8fd9\u4e2a\u6d4b\u8bd5\u6846\u67b6\u3002\u4f60\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/catchorg/Catch2/v2.x/single_include/catch2/catch.hpp"},"\u8fd9\u91cc\u627e\u5230catch2\u6e90\u7801")),(0,l.kt)("p",null,"\u7531\u4e8ecatch2\u662f\u4e2aheader-only\u7684\u5e93\uff08\u6700\u65b0\u7248\u5df2\u7ecf\u4e0d\u662f\u4e86\uff09\uff0c\u6240\u4ee5\u4f60\u53ea\u9700\u8981\u628a\u5934\u6587\u4ef6\u6240\u6709\u6e90\u7801\u5168\u90e8\u590d\u5236\u4e0b\u6765\uff0c\u7136\u540e\u65b0\u5efa\u4e00\u4e2acatch.hpp\u4fdd\u5b58\u5373\u53ef\u3002\u4fdd\u5b58\u7684\u6587\u4ef6\u5efa\u8bae\u653e\u5728tests\u6587\u4ef6\u5939\u4e0b\uff0c\u8fd9\u6837\u6211\u4eec\u5199\u7684\u6d4b\u8bd5\u7528\u4f8b\u76f4\u63a5include catch.hpp\u5373\u53ef\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"tests\\CMakeLists.txt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\nadd_executable(test1\n    test.cpp\n)\n\n# \u628a\u5f85\u6d4b\u8bd5\u7684\u5e93\u8fde\u63a5\u5230\u6d4b\u8bd5\u7528\u4f8b\u4e0a\ntarget_link_libraries(test1 evolution)\n\n# \u544a\u77e5cmake\u589e\u52a0\u4e86\u6d4b\u8bd5\uff0c\u540d\u4e3amy_test\uff0c\u6267\u884ctest1\u8fd9\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\nadd_test(\n    NAME my_test\n    COMMAND test1\n)\n")),(0,l.kt)("p",null,"\u6784\u5efa\u548c\u8fd0\u884c\u6d4b\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cmake -B build\ncmake --build build --config=Release\ncd build\nctest -C Release\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ctest \u662fcmake\u8fd0\u884c\u6d4b\u8bd5\u7684\u4e00\u4e2a\u5de5\u5177\u3002\u8fd9\u4e2a\u5de5\u5177\u4f1a\u53bb\u5bfb\u627eadd_test\u6765\u67e5\u770b\u6d4b\u8bd5\u5728\u54ea\u3002"),(0,l.kt)("li",{parentName:"ol"},"ctest \u4e5f\u9700\u8981\u7f16\u8bd1\u4e4b\u540e\u624d\u80fd\u7528\u3002\u5b83\u5176\u5b9e\u672c\u8d28\u4e0a\u548c\u5176\u4ed6\u7684\u76ee\u6807\u6ca1\u4ec0\u4e48\u4e0d\u540c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u8fdb\u5165build\u76ee\u5f55\u624d\u80fd\u4f7f\u7528ctest\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u627e\u4e0d\u5230\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728Windows\u4e0b\u9700\u8981\u6307\u5b9a-C\u547d\u4ee4\uff0c\u540c\u6837\u662f\u56e0\u4e3aVS\u5fc5\u987b\u6307\u5b9a\u6784\u5efa\u7684\u53d8\u4f53\u624d\u884c\u3002")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test project E:/learn/cmake/build\n    Start 1: my_test\n1/1 Test #1: my_test ..........................   Passed    0.02 sec\n\n100% tests passed, 0 tests failed out of 1\n\nTotal Test time (real) =   0.03 sec\n")),(0,l.kt)("h3",{id:"\u8865\u51452\u628a\u8f93\u51fa\u7684exe\u653e\u5230\u6839\u76ee\u5f55\u7684bin\u76ee\u5f55\u4e0b"},"\u8865\u51452\uff1a\u628a\u8f93\u51fa\u7684exe\u653e\u5230\u6839\u76ee\u5f55\u7684bin\u76ee\u5f55\u4e0b"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8f93\u51fa\u7684exe\u5728\n",(0,l.kt)("inlineCode",{parentName:"p"},"build\\src\\Release\\main.exe")),(0,l.kt)("p",null,"\u8fd9\u662f\u5728build\u76ee\u5f55\u4e0b\u6a21\u62df\u4e86\u6e90\u6587\u4ef6\u76ee\u5f55\u7684\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u628aexe\u6587\u4ef6 \u6216\u8005 \u5e93\u6587\u4ef6\u76f4\u63a5\u8f93\u51fa\u5230\u6839\u76ee\u5f55\u7684bin \u6216\u8005 lib\u76ee\u5f55\u4e0b\uff0c\u4f60\u53ef\u4ee5\u628a\u6839\u76ee\u5f55\u4e0b\u9762\u7684CMakeLists.txt\u589e\u52a0\u5982\u4e0b3\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# cmake\u6700\u4f4e\u7248\u672c\ncmake_minimum_required(VERSION 3.20)\n# \u672c\u9879\u76ee\u540d\nproject(organize-3rd-parties)\n\n# \u8bbe\u7f6eC++17\u6807\u51c6\uff0c\u9700\u8981\u6ee1\u8db3\u6807\u51c6\uff0c\u4e0d\u7528C++\u62d3\u5c55\u8bed\u6cd5\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\n# \u9759\u6001\u5e93\u8f93\u51fa\u76ee\u5f55\nset(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/lib)\n# \u52a8\u6001\u5e93\u8f93\u51fa\u76ee\u5f55\nset(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/bin)\n# \u53ef\u6267\u884c\u6587\u4ef6\u8f93\u51fa\u76ee\u5f55\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/bin)\n\n\n# \u8fdb\u5165src\u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(src)\n\n# \u8fdb\u5165external\u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(external)\n\n# \u5f00\u542f\u6d4b\u8bd5\nenable_testing()\n# \u8fdb\u5165 tests \u6587\u4ef6\u5939\u4e0b\u9762\u7684CMakeLists.txt\nadd_subdirectory(tests)\n")),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5c31\u662f\u5229\u7528\u4e86\u51e0\u4e2acmake\u7684\u5185\u7f6e\u53d8\u91cf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMAKE_ARCHIVE_OUTPUT_DIRECTORY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u5e93\u8f93\u51fa\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMAKE_LIBRARY_OUTPUT_DIRECTORY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u5e93\u8f93\u51fa\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMAKE_RUNTIME_OUTPUT_DIRECTORY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u6267\u884c\u6587\u4ef6\u8f93\u51fa\u76ee\u5f55")))),(0,l.kt)("p",null,"\u66f4\u591a\u5185\u7f6e\u53d8\u91cf\u542b\u4e49\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43940314/article/details/127715087?csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22127715087%22,%22source%22:%22weixin_43940314%22%7D"},"\u6211\u7684\u535a\u6587"),"\u3002\u6211\u4f1a\u6301\u7eed\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,"\u5728\u6784\u5efa\u5b8c\u6210\u4e4b\u540e\u4f1a\u51fa\u73b0bin\u548clib\u8fd9\u4e24\u4e2a\u76ee\u5f55\n",(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/04f1a4da48f04d949e93cba246da9af5.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}u.isMDXComponent=!0}}]);