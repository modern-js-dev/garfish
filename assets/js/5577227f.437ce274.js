"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[377],{4635:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var a=r(7711);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(r),s=n,k=c["".concat(l,".").concat(s)]||c[s]||d[s]||i;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2835:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=r(8538),n=r(7765),i=(r(7711),r(4635)),o=["components"],p={title:"router",slug:"/api/attributes/router",order:3},l=void 0,u={unversionedId:"api/attributes/router",id:"api/attributes/router",isDocsHomePage:!1,title:"router",description:"\u63d0\u4f9b\u5728\u5fae\u524d\u7aef\u573a\u666f\u4e0b\uff0c\u8def\u7531\u76f8\u5173\u7684\u80fd\u529b\u3002",source:"@site/docs/api/attributes/router.md",sourceDirName:"api/attributes",slug:"/api/attributes/router",permalink:"/api/attributes/router",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/attributes/router.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao",lastUpdatedAt:1638791833,formattedLastUpdatedAt:"2021/12/6",frontMatter:{title:"router",slug:"/api/attributes/router",order:3},sidebar:"api",previous:{title:"props",permalink:"/api/attributes/props"},next:{title:"setExternal",permalink:"/api/attributes/setExternal"}},m=[],d={toc:m};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u63d0\u4f9b\u5728\u5fae\u524d\u7aef\u573a\u666f\u4e0b\uff0c\u8def\u7531\u76f8\u5173\u7684\u80fd\u529b\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.router")," \u4f5c\u4e3a\u5207\u6362\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),"\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"vue-router")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-router")," \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u5e94\u7528\u95f4\u5207\u6362\uff0c\u4f46\u662f\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u5c06\u4f1a\u9020\u6210\u5f02\u5e38\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://code.byted.org/pgcfe/gar/issues/5"},"react-router-prompt \u89e6\u53d1\u591a\u6b21"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u70b9\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6a21\u5f0f\u81ea\u52a8\u6302\u8f7d\u5b50\u5e94\u7528\uff0c\u53ef\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u914d\u7f6e\u4e3a\u51fd\u6570\u6fc0\u6d3b\u6761\u4ef6\u6765\u6fc0\u6d3b\u4e3b\u5e94\u7528\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u6a21\u5f0f\u4e0b\u5e94\u7528")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u90fd\u5177\u5907\u8def\u7531\u65f6\uff0c\u8bf7\u5c06\u4e3b\u5e94\u7528\u6539\u9020\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6a21\u5f0f\uff08\u7531\u4e8e\u76ee\u524d Garfish \u5e76\u672a\u5c06\u5b50\u5e94\u7528\u8def\u7531\u548c\u4e3b\u5e94\u7528\u8def\u7531\u8fdb\u884c\u73af\u5883\u9694\u79bb\uff09"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4e3b\u5e94\u7528\u8def\u7531\u548c\u5b50\u5e94\u7528\u5904\u4e8e\u540c\u4e00\u8def\u7531\u6267\u884c\u73af\u5883\uff0c\u5982\u679c\u4e3b\u5e94\u7528\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," \u8def\u7531\uff0c\u5b50\u5e94\u7528\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," \u8def\u7531\u5c06\u4f1a\u5bfc\u81f4\u8def\u7531\u4e0d\u7b26\u5408\u89c4\u8303"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528\u8fdb\u5165\u8be6\u60c5\u9875\u540e\u5730\u5740\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"http://gar.byted.com#/gar-example/detail"),"\uff0c\u52a0\u8f7d\u4e3a history \u7684\u5b50\u5e94\u7528\u540e\uff0c\u8def\u7531\u53d8\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"http://gar.byted.com/app1#/gar-example/detail")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d Garfish \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," \u9694\u79bb\u5e94\u7528\u95f4\u7684\u8def\u7531\uff0c\u907f\u514d\u53d1\u751f\u50cf\u4e0a\u9762\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u8def\u7531\u51b2\u7a81\u3002Garfish \u5c06\u4f1a\u628a\u4e3b\u5e94\u7528\u6839\u8def\u5f84+\u5e94\u7528\u6fc0\u6d3b\u8def\u5f84\u4f20\u9012\u7ed9\u5b50\u5e94\u7528\uff0c\u5b50\u5e94\u7528\u5c06\u5176\u4f5c\u4e3a\u81ea\u5df1\u7684\u57fa\u7840\u8def\u5f84\uff0c\u8fd9\u6837\u4fbf\u4f1a\u4fdd\u8bc1\u4e3b\u5b50\u5e94\u7528\u8def\u7531\u6b63\u5e38\uff0c\u4f8b\u5982\uff1a + \u4e3b\u5e94\u7528\u6839\u8def\u5f84\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"http://gar.byted.com/gar-example"),"\uff0c\u5b50\u5e94\u7528\u6fc0\u6d3b\u8def\u5f84\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"/app1"),"\uff0c\u5b50\u5e94\u7528\u5c06\u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),"\u4e2d\u63a5\u6536\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"http://gar.byted.com/gar-example/app1"),"\uff0c\u5b50\u5e94\u7528\u5c06\u5176\u5c06\u5176\u4f5c\u4e3a\u57fa\u7840\u8def\u5f84\uff0c\u5728\u4e0a\u9762\u53d8\u66f4\u8def\u7531\n:::"))),(0,i.kt)("h2",{parentName:"div",id:"routerpush"},"router.push"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.push({ path: string, query?: Record<string, string> }) : void"),(0,i.kt)("br",null)),(0,i.kt)("p",{parentName:"div"},"\u60f3\u8981\u5bfc\u822a\u5230\u4e0d\u540c\u7684 URL\uff0c\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push")," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6808\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u8bb0\u5f55\uff0c\u6240\u4ee5\uff0c\u5f53\u7528\u6237\u70b9\u51fb\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae\u65f6\uff0c\u5219\u56de\u5230\u4e4b\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\u3002"),(0,i.kt)("h3",{parentName:"div",id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u65f6\u914d\u7f6e\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"basename"),"\u3002\u5c06\u5728\u8df3\u8f6c\u65f6\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u4f5c\u4e3a\u8df3\u8f6c\u524d\u7f00\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish")," \u63d0\u4f9b\u7684\u8def\u7531\u65b9\u6cd5\uff0c\u5728\u5df2\u7ecf\u6253\u5f00\u5b50\u5e94\u7528\u7684\u573a\u666f\u4e0b\u8df3\u8f6c\u5bf9\u5e94\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u5fae\u524d\u7aef\u73af\u5883\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"history.pushState")," \u8df3\u8f6c\u8def\u7531\u662f\u4e0d\u4f1a\u89e6\u53d1\u5bf9\u5e94\u8def\u7531\u7684\u7ec4\u4ef6\u66f4\u65b0\u7684\uff0c\u539f\u56e0\u5728\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"vue")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u4e0d\u662f\u76d1\u542c\u8def\u7531\u53d8\u5316\u548c\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u672c ",(0,i.kt)("inlineCode",{parentName:"li"},"api")," \u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"react-router-prompt")," \u89e6\u53d1\u591a\u6b21\u65f6\uff0c\u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," \u914d\u7f6e\u3002\u5173\u95ed\u5176\u4ed6\u8df3\u8f6c\u65b9\u6cd5\u89e6\u53d1\u5b50\u5e94\u7528\u5237\u65b0\u7ec4\u4ef6\uff0c\u53ef\u9650\u5236 ",(0,i.kt)("inlineCode",{parentName:"li"},"prompt")," \u89e6\u53d1\u591a\u6b21\u6216\u5b50\u5e94\u7528\u989d\u5916\u5378\u8f7d\u591a\u6b21\u7684\u573a\u666f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," \u9009\u9879\u5173\u95ed\u540e\uff0c\u53ef\u4ee5\u53ea\u80fd\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router")," \u8df3\u8f6c\u5b50\u5e94\u7528\u8def\u7531")),(0,i.kt)("h3",{parentName:"div",id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<a onclick=\"Garfish.router.push({path: '/vue-a'})\">Vue A</a>\n<a onclick=\"Garfish.router.push({path: '/vue-b'})\">Vue B</a>\n<a onclick=\"Garfish.router.push({path: '/vue-a/todo'})\">Vue A sub route</a>\n<a onclick=\"Garfish.router.replace({path: '/react2'})\">react2</a>\n<a onclick=\"Garfish.router.push({path: '/error'})\">error path</a>\n")),(0,i.kt)("h2",{parentName:"div",id:"routerreplace"},"router.replace"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.replace({ path: string, query?: Record<string, string> }) : void")),(0,i.kt)("p",{parentName:"div"},"\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push")," \u5f88\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u5b83\u4e0d\u4f1a\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6dfb\u52a0\u65b0\u8bb0\u5f55\uff0c\u800c\u662f\u8ddf\u5b83\u7684\u65b9\u6cd5\u540d\u4e00\u6837\uff0c\u66ff\u6362\u6389\u5f53\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u8bb0\u5f55\u3002"),(0,i.kt)("h2",{parentName:"div",id:"routerbeforeeach"},"router.beforeEach"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.beforeEach(to: RouterInfo, from: RouterInfo, next: Function): void")),(0,i.kt)("p",{parentName:"div"},"\u5728\u8def\u7531\u8df3\u8f6c\u540e\uff0c\u5b50\u5e94\u7528\u6302\u8f7d\u524d\u89e6\u53d1\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RouterInfo {\n  fullPath: string;\n  path: string;\n  query: Object;\n  matched: Array<AppInfo>;\n}\n")),(0,i.kt)("p",{parentName:"div"},"\u6bcf\u4e2a\u5b88\u536b\u65b9\u6cd5\u63a5\u6536\u4e09\u4e2a\u53c2\u6570"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to ")," \u5373\u5c06\u8981\u8fdb\u5165\u7684\u76ee\u6807\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," \u5373\u5c06\u79bb\u5f00\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u963b\u585e\u6267\u884c\u56de\u8c03\u3002")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.router.beforeEach((to, from, next) => {\n  // console.log(to, from);\n  next();\n})\n\nGarfish.router.afterEach((to, from, next) => {\n  // console.log(to, from);\n  next();autoRefreshApp\n})\n\nGarfish.run(...);\n")),(0,i.kt)("h2",{parentName:"div",id:"routeraftereach"},"router.afterEach"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.afterEach(to: RouterInfo, from: RouterInfo, next) : void")),(0,i.kt)("p",{parentName:"div"},"\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"router.afterEach")," \u5f88\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u5728\u8def\u7531\u8df3\u8f6c\u540e\uff0c\u5b50\u5e94\u7528\u6302\u8f7d\u540e\u89e6\u53d1\u3002"),(0,i.kt)("h2",{parentName:"div",id:"\u8def\u7531\u5b88\u536b"},"\u8def\u7531\u5b88\u536b"),(0,i.kt)("p",{parentName:"div"},"\u6b63\u5982\u5176\u540d\uff0c\u63d0\u4f9b\u7684\u5bfc\u822a\u5b88\u536b\u4e3b\u8981\u7528\u6765\u901a\u8fc7\u8df3\u8f6c\u6216\u53d6\u6d88\u7684\u65b9\u5f0f\u5b88\u536b\u5bfc\u822a\u3002\u5728\u5fae\u524d\u7aef\u73af\u5883\u4e2d\uff0c\u8df3\u8f6c\u8def\u7531\u65f6\uff0c\u8def\u7531\u5b88\u536b\u5728\u672a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\u65f6\uff0c\u5c06\u4f1a\u963b\u585e\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u3002"),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u4e0d\u80fd\u963b\u585e\u5b50\u5e94\u7528\u5185\u7684\u8def\u7531\u8df3\u8f6c\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u5185\u7684\u8def\u7531\u8df3\u8f6c\u4e0d\u80fd\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u963b\u585e")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u8def\u7531\u5b88\u536b\u6ce8\u518c\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u524d\u6267\u884c\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u63a5\u6536\u5230\u9996\u6b21\u52a0\u8f7d\u662f\u7684\u8def\u7531\u94a9\u5b50\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528\u4e86\u8def\u7531\u5b88\u536b\uff0c\u8bf7\u786e\u4fdd ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u88ab\u6267\u884c\uff0c\u5426\u5219\u5c06\u4f1a\u963b\u585e\u8def\u7531\u5185\u90e8\u52a0\u8f7d\u903b\u8f91\u3002\n:::")))}c.isMDXComponent=!0}}]);