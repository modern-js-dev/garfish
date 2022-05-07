"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[125],{4635:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7711);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=a,h=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6083:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7711);function a(e){var n=e.children,t=e.color;return r.createElement("span",{style:{backgroundColor:t||"#ffffff0d",borderRadius:"1.5rem",color:"#25c19f",padding:"0.2rem 0.5rem"}},n)}},9763:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=t(5086),a=t(9126),o=(t(7711),t(4635)),i=(t(6083),["components"]),l={title:"Garfish.channel",slug:"/api/channel",order:5},c=void 0,p={unversionedId:"api/channel",id:"api/channel",isDocsHomePage:!1,title:"Garfish.channel",description:"\u7528\u4e8e\u5e94\u7528\u95f4\u7684\u901a\u4fe1\uff0cGarfish.channel \u4e3a Garfish \u7684\u5b9e\u4f8b\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662f EventEmitter2 \u7684\u5b9e\u4f8b\u3002",source:"@site/docs/api/channel.md",sourceDirName:"api",slug:"/api/channel",permalink:"/api/channel",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/api/channel.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"Garfish.channel",slug:"/api/channel",order:5},sidebar:"api",previous:{title:"Garfish.loadApp",permalink:"/api/loadApp"},next:{title:"Garfish.router",permalink:"/api/router"}},u=[{value:"Type",id:"type",children:[],level:3},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",children:[],level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],s={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7528\u4e8e\u5e94\u7528\u95f4\u7684\u901a\u4fe1\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.channel")," \u4e3a Garfish \u7684\u5b9e\u4f8b\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EventEmitter2/EventEmitter2"},"EventEmitter2")," \u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"channel: EventEmitter2;\n")),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65e0")),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6\nconst App = () => {\n  const handleLogin = (userInfo) => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// \u4e3b\u5e94\u7528\u89e6\u53d1\u76d1\u542c\u4e8b\u4ef6\napi.getLoginInfo.then((res) => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n")))}f.isMDXComponent=!0}}]);