"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),y=l,m=u["".concat(o,".").concat(y)]||u[y]||s[y]||p;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,a=new Array(p);a[0]=y;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var d=2;d<p;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},22:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=t(7462),l=(t(7294),t(3905));const p={},a="pybind11\u7684Hello World",i={unversionedId:"pybind11/first",id:"pybind11/first",title:"pybind11\u7684Hello World",description:"pybind11 \u662f\u7528\u6765\u5c06c++\u7684\u51fd\u6570\\\u7c7b\u7b49\u5c01\u88c5\u4e3apython\u6a21\u5757\u7684\u3002\u4ece\u800c\u5728python\u4e2d\u5c31\u53ef\u4ee5\u8c03\u7528C++\u7684\u5e93\u3002",source:"@site/docs/pybind11/first.md",sourceDirName:"pybind11",slug:"/pybind11/first",permalink:"/pybind11/first",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/pybind11/first.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63a2\u7d22Partio(1): \u7c92\u5b50\u683c\u5f0f\u5e93partio\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528",permalink:"/partio/partio-intro"},next:{title:"Windows \u5b89\u88c5\u548c\u8bbe\u7f6econda",permalink:"/python/conda-setup"}},o={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7ed1\u5b9a\u4e00\u4e2ac++\u7684\u51fd\u6570",id:"\u7ed1\u5b9a\u4e00\u4e2ac\u7684\u51fd\u6570",level:2},{value:"\u7ed1\u5b9a\u4e00\u4e2ac++\u7684\u7c7b",id:"\u7ed1\u5b9a\u4e00\u4e2ac\u7684\u7c7b",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pybind11\u7684hello-world"},"pybind11\u7684Hello World"),(0,l.kt)("p",null,"pybind11 \u662f\u7528\u6765\u5c06c++\u7684\u51fd\u6570\\\u7c7b\u7b49\u5c01\u88c5\u4e3apython\u6a21\u5757\u7684\u3002\u4ece\u800c\u5728python\u4e2d\u5c31\u53ef\u4ee5\u8c03\u7528C++\u7684\u5e93\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"pybind11\u662f\u4e2aC++\u7684header-only\u7684\u5e93\u3002\u56e0\u6b64\u65e0\u9700\u5b89\u88c5\uff0c\u53ea\u9700\u8981\u6709\u5934\u6587\u4ef6\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u81ea\u5df1\u65b0\u5efa\u4e00\u4e2aC++\u6587\u4ef6\u5939\u3002\u5728\u6587\u4ef6\u5939\u5185\u5c06pybind\u4f5c\u4e3a\u4e00\u4e2a\u5916\u90e8\u5e93\uff0c\u4f7f\u7528cmake\u6765\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u9996\u5148git clone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/pybind/pybind11 --depth=1\n")),(0,l.kt)("p",null,"\u7136\u540e\u5220\u6389.git\u6587\u4ef6"),(0,l.kt)("p",null,"CMakeLists.txt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cmake_minimum_required(VERSION 3.23)\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nproject(tryPybind)\n\nadd_subdirectory(pybind11)\npybind11_add_module(tryPybind tryPybind.cpp)\n\nadd_custom_command(\n        TARGET ${PROJECT_NAME}  POST_BUILD\n        COMMAND ${CMAKE_COMMAND} -E copy_directory\n        ${CMAKE_BINARY_DIR}/$<CONFIGURATION> ${CMAKE_CURRENT_LIST_DIR}\n        )\n")),(0,l.kt)("p",null,"\u6ce8\u610fpybind11_add_module\u8fd9\u4e2acmake\u51fd\u6570\u3002\u5b83\u7684\u7528\u6cd5\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pybind11_add_module(<name> [MODULE | SHARED] [EXCLUDE_FROM_ALL]\n                    [NO_EXTRAS] [THIN_LTO] [OPT_SIZE] source1 [source2 ...])\n")),(0,l.kt)("p",null,"\u6700\u57fa\u672c\u7684\u7528\u6cd5\u662f\uff0c\u7b2c\u4e00\u4e2a\u662f\u6a21\u5757\u540d\uff0c\u7b2c\u4e8c\u4e2a\u662f\u6e90\u6587\u4ef6"),(0,l.kt)("p",null,"cmake\u4e2d\u6700\u540e\u8fd9\u4e2aadd_custom_command\u7684\u610f\u601d\u662f\u628a\u8f93\u51fa\u7684build/Release\u4e0b\u9762\u7684\u6240\u6709\u6587\u4ef6\u62f7\u5230\u6700\u5916\u5c42\uff0c\u65b9\u4fbf\u540e\u9762\u6211\u4eec\u6d4b\u8bd5\u7684\u65f6\u5019\u5bfc\u5165\u6a21\u5757\u3002"),(0,l.kt)("h2",{id:"\u7ed1\u5b9a\u4e00\u4e2ac\u7684\u51fd\u6570"},"\u7ed1\u5b9a\u4e00\u4e2ac++\u7684\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pybind11/pybind11.h>\n#include <iostream>\nnamespace py = pybind11;\n\n//\u7ed1\u5b9a\u4e00\u4e2a\u51fd\u6570\nint add(int i, int j) {\n    return i + j;\n}\n\nPYBIND11_MODULE(tryPybind, m) {\n    m.doc() = "pybind11 example plugin"; // optional module docstring\n\n    m.def("add", &add, "A function that adds two numbers");\n}\n\n')),(0,l.kt)("p",null,"\u8fd9\u6bb5\u7684\u610f\u601d\u5c31\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528PYBIND11_MODULE\u8fd9\u4e2a\u5b8f\uff0c\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2atryPybind\u662f\u6a21\u5757\u540d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u7528\u7ba1\uff0c\u5c31m\u5c31\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"m.def\u5c31\u662f\u5b9a\u4e49\u4e00\u4e2apython\u4e2d\u7684\u51fd\u6570\uff0c\u51fd\u6570\u540d\u4e3aadd\uff0c\u51fd\u6570\u7ed1\u5b9a\u5230c++\u7684add\u51fd\u6570")),(0,l.kt)("p",null,"\u8fd0\u884ccmake"),(0,l.kt)("p",null,"\u4f1a\u4ea7\u751f\u4e09\u4e2a\u6587\u4ef6\n",(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6d90fba7591842b4a3432ae6e074cbc1.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5176\u4e2dtryPybind.xxx.pyd\u662fpython\u7684\u52a8\u6001\u5e93"),(0,l.kt)("p",null,".exp\u662fwindows\u4e0b\u9762\u7684\u5bfc\u51fa\u5e93\u6587\u4ef6\uff0c\u5b83\u5305\u542b\u4e86\u5bfc\u51fa\u51fd\u6570\u548c\u6570\u636e\u9879\u7684\u4fe1\u606f"),(0,l.kt)("p",null,".lib\u662fwindows\u4e0b\u9762\u7684c++\u9759\u6001\u5e93"),(0,l.kt)("p",null,"\u7136\u540e\u5b9a\u4e49\u4e00\u4e2apython\u811a\u672c"),(0,l.kt)("p",null,"pyTry.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import tryPybind\n\na = tryPybind.add(1, 2)\nprint(a)\n")),(0,l.kt)("p",null,"\u6253\u5370\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"3\n")),(0,l.kt)("h2",{id:"\u7ed1\u5b9a\u4e00\u4e2ac\u7684\u7c7b"},"\u7ed1\u5b9a\u4e00\u4e2ac++\u7684\u7c7b"),(0,l.kt)("p",null,"\u628ac++\u7684\u6e90\u7801\u6539\u4e3a"),(0,l.kt)("p",null,"tryPybind.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <pybind11/pybind11.h>\n#include <iostream>\nnamespace py = pybind11;\n\n//\u7ed1\u5b9a\u4e00\u4e2a\u7c7b\nclass SomeClass\n{\n    float scale;\npublic:\n    SomeClass(float scale_) : scale(scale_) { };\n    float multiply(float input) {\n        float res =  scale * input;\n        std::cout<<"res:"<<res<<std::endl;\n        return res;\n    }\n};\n\nPYBIND11_MODULE(tryPybind,m)\n{\n    py::class_<SomeClass>(m, "SomeClass")\n        .def("multiply", &SomeClass::multiply)\n        .def(py::init<float>());\n}\n')),(0,l.kt)("p",null,"python\u811a\u672c\u6539\u4e3a"),(0,l.kt)("p",null,"pyTry.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import tryPybind\n\nprint(dir(tryPybind))\na = tryPybind.SomeClass(2.1)\na.multiply(2.0)\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"['SomeClass', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__']\nres:4.2\n")))}u.isMDXComponent=!0}}]);