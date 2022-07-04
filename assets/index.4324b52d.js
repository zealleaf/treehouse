var B=Object.defineProperty,W=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(e,s,n)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,w=(e,s)=>{for(var n in s||(s={}))y.call(s,n)&&I(e,n,s[n]);if(f)for(var n of f(s))S.call(s,n)&&I(e,n,s[n]);return e},C=(e,s)=>W(e,z(s));var L=(e,s)=>{var n={};for(var o in e)y.call(e,o)&&s.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&f)for(var o of f(e))s.indexOf(o)<0&&S.call(e,o)&&(n[o]=e[o]);return n};import{j as v,r as c,L as g,u as F,O as q,a as D,R as V,b as G,c as X,d as K,e as Y,S as J,m as Q,C as Z,B as nn,f as en,g as tn,h as on}from"./vendor.eeaeaaf4.js";const sn=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};sn();const l="/treehouse/";const t=v.exports.jsx,d=v.exports.jsxs,b=v.exports.Fragment,an=[{menuPath:`${l}home`,menuText:"Home",index:"home"},{menuPath:`${l}blogs`,menuText:"Blogs",index:"blogs"},{menuPath:`${l}packages`,menuText:"Packages",index:"packages"},{menuPath:`${l}tags`,menuText:"Tags",index:"tags"},{menuPath:`${l}about`,menuText:"About",index:"about"}],rn=function(e){const s=history[e];return function(){const n=s.apply(this,arguments),o=new Event(e);return o.arguments=arguments,window.dispatchEvent(o),n}};history.pushState=rn("pushState");function cn(){const[e,s]=c.exports.useState(window.location.pathname.split("/")[1]),[n,o]=c.exports.useState(localStorage.getItem("theme")||"light"),[a,r]=c.exports.useState(!0);return c.exports.useEffect(()=>{a&&(window.addEventListener("pushState",function(){s(window.location.pathname.split("/")[1])}),window.addEventListener("popstate",function(){s(window.location.pathname.split("/")[1])}))},[a]),c.exports.useEffect(()=>{a&&document.querySelectorAll(".float-text-menu li a").forEach(u=>{let p=u.textContent.split("");u.textContent="",p.forEach((m,_)=>{let h=document.createElement("span");h.textContent=m,h.style.transitionDelay=`${_/40}s`,h.dataset.text=m,u.append(h)})})},[a]),c.exports.useEffect(()=>{n==="light"?(document.documentElement.setAttribute("theme","light"),localStorage.setItem("theme",n)):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme",n))},[n]),c.exports.useEffect(()=>{window.addEventListener("menuShowStatus",i=>{i.detail==="show"?r(!0):r(!1)})},[]),t("div",{className:a?"component-menu":"component-menu hidden",children:t("div",{className:"wrap",children:d("ul",{className:"float-text-menu",children:[an.map(i=>t("li",{children:t(g,{className:e===i.index?"active-menu":"",to:i.menuPath,"data-text":i.menuText,children:i.menuText})},i.index)),n==="dark"?t("li",{children:t("a",{onClick:()=>o("light"),"data-text":"Light",children:"Light"})},"light"):t("li",{children:t("a",{onClick:()=>o("dark"),"data-text":"Dark",children:"Dark"})},"dark"),t("li",{children:t("a",{href:"https://github.com/zealleaf",target:"_self",children:"Github"})},"github")]})})})}const ln="_rootComponent_1gszl_1",dn="_outlet_1gszl_5";var j={rootComponent:ln,outlet:dn};const un=()=>{const e=F();return c.exports.useEffect(()=>{window._nav=e},[]),d("div",{className:j.rootComponent,children:[t(cn,{}),t("div",{className:j.outlet,children:t(q,{})})]})},pn=()=>t(b,{children:"todo"});var mn=()=>`>## \u54C8\u55BD\u5440\u{1F423}
&emsp;\u6211\u662F\u4E00\u540D\u524D\u7AEFer\uFF01\u53BB\u5E74\u5927\u5B66\u6BD5\u4E1A\u540E\uFF0C\u6B65\u5165\u793E\u4F1A\u4ECE\u4E8Bweb\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u8BF4\u8D77\u6211\u4E0E\u524D\u7AEF\u7684\u9082\u9005\u8FD8\u662F\u5728\u5927\u4E09\uFF0C\u4E4B\u524D\u5BF9\u6B64\u4E5F\u662F\u77E5\u4E4B\u751A\u5C11\u3002\uFF08*\u5C0F\u58F0\u54D4\u54D4\uFF1A\u73B0\u5728\u4E5F\u4E0D\u591A\u3002\u3002\u3002*\uFF09

&emsp;\u5927\u4E09\u90A3\u5E74\uFF0C\u6211\u8BB0\u5F97\u662Fjava\u7A0B\u5E8F\u8BBE\u8BA1\u90A3\u95E8\u8BFE\u7684\u7ED3\u8BFE\u4F5C\u4E1A\u8981\u6C42\u5229\u7528java\u6280\u672F\u6808\u6765\u8BBE\u8BA1\u4E00\u4E2A\u7CFB\u7EDF\u6765\uFF0C\u6BD4\u5982\u5565\u5565\u5565\u5B66\u751F\u6210\u7EE9\u7BA1\u7406\u7CFB\u7EDF\u3001\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF\u3001\u6559\u52A1\u7BA1\u7406\u7CFB\u7EDF\u7B49\u7B49\u3002\u8001\u5E08\u662F\u7528\u5565gui\u6765\u505A\u524D\u53F0\u7684\uFF0C\u6211\u4F9D\u7A00\u8BB0\u5F97\u662F\u62D6\u62C9\u62FD\u7684\u5F62\u5F0F\u6765\u7EC4\u7EC7\u7528\u6237\u4EA4\u4E92\u754C\u9762\u3002\u4F46\u662F\u603B\u611F\u89C9\u6709\u70B9\u4E11\u4E11\u7684\u611F\u89C9\u{1F639}\uFF0C\u4E8E\u662F\u5F00\u59CB\u4E86\u7F51\u4E0A\u51B2\u6D6A\uFF0C\u4E86\u89E3\u5230web\u524D\u7AEF\u53EF\u4EE5\u80DC\u4EFB\u4E4B\uFF0C\u597D\u90A3\u5C31\u5F00\u5E72\u5427\u3002

&emsp;\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF\u7684\u4E09\u4EF6\u5957\uFF0C\u4E0D\u8BF4\u8FD8\u633A\u6709\u610F\u601D\u7684\uFF0C\u7B2C\u4E00\u6B21\u611F\u89C9\u81EA\u5DF1\u5728\u638C\u63A7\u96F7\u7535\u26A1\uFF0C\u4F60\u6572\u5565\u5B83\u9A6C\u4E0A\u51FA\u6765\u5565\uFF0C\u867D\u7136\u90FD\u633A\u4E11\u7684\u{1F926}\u200D\u2642\uFE0F\uFF0C\u773C\u89C1\u8001\u5E08\u8981\u6765\u9A8C\u6536\u6210\u679C\u4E86\uFF0C\u4F46\u53C8\u770B\u4E86\u770B\u81EA\u5DF1\u7684\u9875\u9762\u6837\u5B50\uFF0C\u5C5E\u5B9E\u4E0D\u597D\u770B\uFF0C\u600E\u4E48\u529E\u4E86\uFF0C\u7F51\u4E0A\u51B2\u6D6A\u5457\uFF0C\u4F60\u770B\u641C\u7D22\u5F15\u64CE\u4E0D\u5C31\u628A**bootstrap css**\u7ED9\u6211\u4E86\u5417\uFF01\u597D\u591A\u6837\u5F0F\u90FD\u5199\u597D\u4E86\uFF0Ccopy paste\u5B8C\u4E8B\u4E86\uFF0C\u90A3\u600E\u4E48\u4E0E\u540E\u53F0\u8054\u52A8\u62FF\u5230\u6570\u636E\u5462\uFF0C\u5F53\u7136\u662F\u901A\u4FE1\u4E86\uFF0C\u76F4\u63A5new\u4E00\u4E2AXMLHttpRequest\u5B8C\u4E8B\u{1F923}\u3002\u8FD9\u5C31\u662F\u6211\u4E0Eweb\u524D\u7AEF\u7684\u7B2C\u4E00\u6B21\u9082\u9005(*ps\uFF1A\u8001\u5E08\u7ED9\u4E86\u6211\u4E5D\u5341\u51E0\u5206\u{1F602}*)\u3002

&emsp;\u5982\u4ECA\u4E86\u89E3\u7684\u4E1C\u897F\u6162\u6162\u53D8\u5F97\u591A\u4E86\u8D77\u6765\uFF0C\u4E5F\u6162\u6162\u89C9\u5F97\u81EA\u5DF1\u8FDC\u8FDC\u6CA1\u6709\u638C\u63E1\u96F7\u7535\u{1F614}\uFF0C\u9053\u963B\u4E14\u957F\uFF0C\u52A0\u6CB9\u5427\uFF01

>## \u65B0\u5E74\u613F\u671B\u{1F387}
&emsp;\u5E0C\u671B\u9E45\u86CB\u6BCF\u5929\u5FEB\u4E50\uFF01\u4E0D\u5B9A\u671F\u66F4\u65B0\u535A\u5BA2\u54DF\u{1F606}

`,hn=()=>`> \u5728\u6211\u4EEC\u65E5\u5E38\u751F\u6D3B\u4E2D\uFF0C\u7ECF\u5E38\u4F7F\u7528\u6D4F\u89C8\u5668\uFF0C\u4F46\u662F\u6709\u6CA1\u6709\u7591\u95EE\u4E3A\u5565\u8F93\u5165\u4E00\u4E2A url \u5C31\u53EF\u4EE5\u51FA\u6765\u4E00\u4E2A\u9875\u9762\u5462\uFF0C\u4EE5\u524D\u7684\u6211\u662F\u6CA1\u6709\u8FD9\u79CD\u7591\u95EE\u7684\uFF0C\u6211\u77E5\u9053 4399 \u53EF\u4EE5\u73A9\u6E38\u620F \u{1F923}\uFF0C\u4F46\u662F\u81EA\u4ECE\u4E0A\u4E86\u5927\u5B66\u540E\uFF0C\u63A5\u89E6\u5230\u4E86\u8BA1\u7B97\u673A\u4E0E\u7F16\u7A0B\uFF0C\u8111\u4E2D\u7684\u7591\u95EE\u5C31\u6162\u6162\u53D8\u5F97\u8D8A\u6765\u8D8A\u591A\u3002\u8FD9\u5C31\u662F\u5176\u4E2D\u4E4B\u4E00\uFF0C\u90A3\u6765\u8BA9\u6211\u4EEC\u4E00\u8D77\u8BA8\u8BBA\u8BA8\u8BBA\u8FD9\u5927\u6982\u662F\u600E\u4E48\u4E00\u56DE\u4E8B\u5427~~

## \u4E00\u3001url \u662F\u4E2A\u5565\uFF1F

\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF08\u82F1\u8BED\uFF1AUniform Resource Locator\uFF0C\u7F29\u5199\uFF1AURL\uFF0C\u6216\u79F0\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u5668\u3001\u5B9A\u4F4D\u5730\u5740\u3001URL \u5730\u5740[1]\uFF09\u4FD7\u79F0\u7F51\u9875\u5730\u5740\uFF0C\u7B80\u79F0\u7F51\u5740\uFF0C\u662F\u56E0\u7279\u7F51\u4E0A\u6807\u51C6\u7684\u8D44\u6E90\u7684\u5730\u5740\uFF08Address\uFF09\uFF0C\u5982\u540C\u5728\u7F51\u7EDC\u4E0A\u7684\u95E8\u724C\u3002\u5B83\u6700\u521D\u662F\u7531\u8482\u59C6\xB7\u4F2F\u7EB3\u65AF-\u674E\u53D1\u660E\u7528\u6765\u4F5C\u4E3A\u4E07\u7EF4\u7F51\u7684\u5730\u5740\uFF0C\u73B0\u5728\u5B83\u5DF2\u7ECF\u88AB\u4E07\u7EF4\u7F51\u8054\u76DF\u7F16\u5236\u4E3A\u56E0\u7279\u7F51\u6807\u51C6 RFC 1738\u3002[--\u6765\u81EA\u7EF4\u57FA](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6)

\u4E00\u4E2A\u5B8C\u6574\u7684 url \u5730\u5740\u5305\u542B\uFF1A

**scheme:// user:password@ host:port path ?query #fragment**

shceme\uFF1A\u4EE3\u8868\u534F\u8BAE \u5730\u5740\u680F\u4E2D\u5E38\u89C1\u7684\u534F\u8BAE\u53C8 http \u4EE5\u53CA https, \u8FD8\u6709 ftp \u7B49\u7B49 \u540E\u9762\u9700\u8981\u63A5://  
user:passwd@: \u8868\u793A\u767B\u5F55\u4E3B\u673A\u65F6\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u6211\u5C31\u6CA1\u7528\u8FC7\u3002  
host:port: \u8868\u793A\u4E3B\u673A\u540D\u4EE5\u53CA\u7AEF\u53E3  
path: \u8868\u793A\u6587\u4EF6\u8DEF\u5F84  
query: \u4E3A\u8BF7\u6C42\u6240\u643A\u5E26\u7684\u53C2\u6570  
fragment: \u4E3A\u7784\u70B9\uFF0C\u901A\u8FC7\u7784\u70B9\u6D4F\u89C8\u5668\u53EF\u4EE5\u8DF3\u8F6C\u5230\u5BF9\u4E8E\u7684\u9875\u9762\u4F4D\u7F6E\uFF0C\u5E38\u89C1\u7EC4\u5408 a \u6807\u7B7E\u548C h \u7CFB\u5217\u6807\u7B7E\u914D\u5408  
_url \u53EA\u652F\u6301[ASCII \u7F16\u7801](https://zh.wikipedia.org/zh/ASCII)\u54E6_ \u4E0D\u5C5E\u4E8E\u5176\u8303\u7574\uFF0C\u90FD\u4F1A\u88AB\u8F6C\u5316\u4E3A\u5341\u516D\u8FDB\u5236\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E38\u89C1\u7684%20 \u5176\u5B9E\u5B83\u5C31\u662F\u7A7A\u683C\u5566  
\u3010\u867D\u7136\u5730\u5740\u680F\u53EF\u4EE5\u663E\u793A\u975E ASCII \u7801\u5BF9\u5E94\u7684\u5B57\u7B26\u3011
![\u5730\u5740\u680F](/public/img_2022_2_24/Snipaste_2022-02-24_21-52-24.png)
\u3010\u4F46\u662F\u7ED9\u540E\u7AEF\u7684\u6D4F\u89C8\u5668\u8FD8\u662F\u8FDB\u884C\u4E86\u7F16\u7801\u7684\u54E6\u3011
![\u8BF7\u6C42](/public/img_2022_2_24/Snipaste_2022-02-24_21-52-54.png)

## \u4E8C\u3001\u90A3\u6211\u4EEC\u5F00\u59CB\u8BB2\u8BB2\u8F93\u5165\u4E00\u4E2A url \u540E\u5230\u5E95\u5E72\u4E86\u5565\u634F

\xB7 \u5F53\u6211\u4EEC\u5728\u5DE5\u680F\u8F93\u5165\u4E00\u4E2A url \u540E\uFF0C\u6309\u4E0B enter \u540E\uFF0CUI thread \u4F1A\u54CD\u5E94\u8FD9\u4E2A\u8F93\u5165\uFF0C\u5E76\u5224\u65AD\u8FD9\u4E2A url \u662F\u5426\u4E3A\u6807\u51C6\u7684 url\uFF08_\u4E5F\u5C31\u662F\u4E0A\u6587\u63D0\u5230\u7684_\uFF09\uFF0C\u5982\u679C\u4E0D\u662F\u4F8B\u5982\u641C\u7D22\u5219\u6839\u636E\u6240\u9009\u7684\u641C\u7D22\u5F15\u64CE\uFF0C\u8FDB\u884C\u76F8\u5173\u7684\u670D\u52A1\u5904\u7406\u3002

\xB7 \u5982\u679C\u662F\u6B63\u5E38\u7684 url\uFF0CUI thread \u4F1A\u901A\u77E5 network thread \u53BB\u8BF7\u6C42\u76F8\u5173\u7684\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\uFF0Cnetwork \u4F1A\u6839\u636E url\uFF0C\u7528\u5408\u9002\u7684\u534F\u8BAE\u6765\u8FDB\u884C\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5E38\u89C1\u7684\u5148\u89E3\u6790 url \u5224\u65AD\u662F\u5426\u542F\u7528\u7F13\u5B58\uFF0C\u518D dns \u5BFB\u5740\uFF0C\u627E\u5230\u5BF9\u5E94 ip\uFF0C\u901A\u8FC7 tls \u534F\u8BAE\u6765\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u6700\u540E\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42\u3002

\xB7 \u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42\uFF0C\u4E00\u822C\u662F Apache \u6216\u8005 Ngnix \u7B49 HTTP \u670D\u52A1\u5668\u6765\u505A\u8BF7\u6C42\u7684\u63A5\u53D7\u53D1\u9001\u5904\u7406\uFF0C\u4E1A\u52A1\u5904\u7406\u4F1A\u7528\u76F8\u5E94\u7684\u540E\u7AEF\u8BED\u8A00\u6765\u8D77\u76F8\u5E94\u7684\u670D\u52A1\u6765\u5904\u7406\uFF0C\u4E86\u89E3\u4E86\u8981\u8C03\u5EA6\u54EA\u4E9B\u8D44\u6E90\u6587\u4EF6\uFF0C\u518D\u901A\u8FC7\u54CD\u5E94\u7684\u8D44\u6E90\u6587\u4EF6\u5904\u7406\u7528\u6237\u8BF7\u6C42\u548C\u53C2\u6570\uFF0C\u5E76\u8C03\u7528\u6570\u636E\u5E93\u4FE1\u606F\uFF0C\u6700\u540E\u5C06\u7ED3\u679C\u901A\u8FC7 web \u670D\u52A1\u5668\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u3002

\xB7 \u6D4F\u89C8\u5668\u7684 network thread \u63A5\u53D7\u90FD\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u5185\u5BB9\uFF0C\u8BFB\u53D6\u76F8\u5E94\u5934\uFF0C\u5982\u679C\u662F html \u5185\u5BB9\uFF0C\u5219\u4F1A\u901A\u77E5 render process \u8FDB\u884C\u6E32\u67D3\uFF0C\u5927\u81F4\u8FDB\u884C \u89E3\u6790\u9636\u6BB5\uFF08\u751F\u6210 DOM\uFF09--->\u6837\u5F0F\u8BA1\u7B97\uFF08\u751F\u6210 CSSOM\uFF09--->\u5E03\u5C40\uFF08\u751F\u6210 LayoutTree\uFF09--->\u7ED8\u56FE\uFF08PaintRecord\uFF09--->\u5408\u6210\uFF08compositing\uFF09\u540E\u7EED\u5C31\u662F\u5BF9\u7528\u6237\u8F93\u5165\u7684\u54CD\u5E94\u4E86\uFF0C\u4E3B\u8981\u53D1\u751F\u518D render process \u4E3B\u7EBF\u7A0B \u6BCF\u6B21\u5F53\u9875\u9762\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u90FD\u8981\u8FDB\u5165\u5408\u6210\u5668\u91CD\u65B0\u7EC4\u7EC7\u6E32\u67D3\u9875\u9762\uFF0C\u4E3B\u8981\u53D1\u751F\u5728 GPU\u3002

## \u4E09\u3001\u6700\u540E

\u4EE5\u4E0A\u5C31\u662F\u8F93\u5165\u4E00\u4E2A url \u7684\u5927\u6982\u6D41\u7A0B\uFF08\u5F88\u5927\u6982 \u{1F923}\uFF09\u5176\u4E2D\u7684\u6BCF\u4E2A\u5C0F\u70B9\u90FD\u53EF\u4EE5\u6269\u5C55\u51FA\u5F88\u591A\u5185\u5BB9\uFF0C\u4EE5\u540E\u4F1A\u518D\u5199\u51E0\u7BC7\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u6DF1\u7A76\u5176\u4E2D\u5E72\u4E86\u4E2A\u5565 \u{1F914}
`,gn=()=>`## \u4E3A\u4EC0\u4E48\u8981\u6709 Hook

> Hook \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 class \u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 state \u4EE5\u53CA\u5176\u4ED6\u7684 React \u7279\u6027\u3002  
> _\u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\u5176\u5B9E\u5B98\u65B9\u65E9\u5DF2\u7ED9\u51FA\u4E86\u7B54\u6848\uFF0C\u4EE5\u4E0B\u662F\u5BF9[\u5B98\u65B9\u8BBE\u8BA1\u52A8\u673A](https://zh-hans.reactjs.org/docs/hooks-overview.html)\u7684\u4E00\u4E2A\u6982\u8FF0\u4EE5\u53CA\u4E00\u4E9B\u81EA\u5DF1\u7684\u60F3\u6CD5_

\u5B98\u65B9\u539F\u8BDD\uFF1A_Hook \u89E3\u51B3\u4E86\u6211\u4EEC\u4E94\u5E74\u6765\u7F16\u5199\u548C\u7EF4\u62A4\u6210\u5343\u4E0A\u4E07\u7684\u7EC4\u4EF6\u65F6\u9047\u5230\u7684\u5404\u79CD\u5404\u6837\u770B\u8D77\u6765\u4E0D\u76F8\u5173\u7684\u95EE\u9898\u3002\u65E0\u8BBA\u4F60\u6B63\u5728\u5B66\u4E60 React\uFF0C\u6216\u6BCF\u5929\u4F7F\u7528\uFF0C\u6216\u8005\u66F4\u613F\u5C1D\u8BD5\u53E6\u4E00\u4E2A\u548C React \u6709\u76F8\u4F3C\u7EC4\u4EF6\u6A21\u578B\u7684\u6846\u67B6\uFF0C\u4F60\u90FD\u53EF\u80FD\u5BF9\u8FD9\u4E9B\u95EE\u9898\u4F3C\u66FE\u76F8\u8BC6\u3002_

\u4E3A\u4EC0\u4E48\u8981\u6709 Hook\uFF0C\u5F53\u7136\u56E0\u4E3A\u73B0\u72B6\u7528\u7740\u4E0D\u5FEB\u610F\uFF0C\u4E5F\u5C31\u662F\u9700\u6C42\u4FC3\u4F7F\u6539\u52A8

### \u51E0\u4E2A\u75DB\u70B9

#### \u5728\u7EC4\u4EF6\u4E4B\u95F4\u590D\u7528\u72B6\u6001\u903B\u8F91\u5F88\u96BE

\u7EC4\u4EF6\u662F React \u4EE3\u7801\u590D\u7528\u7684\u4E3B\u8981\u5355\u5143\uFF0C\u4F46\u7C7B\u7EC4\u4EF6\u60F3\u590D\u7528\u72B6\u6001\u5E38\u5E38\u5F88\u662F\u590D\u6742\uFF0C\u6BD4\u5982\u5E38\u7528\u7684 render prop \u4EE5\u53CA \u9AD8\u9636 HOC \u53EF\u4EE5\u5B9E\u73B0\u4EE3\u7801\u590D\u7528\uFF0C\u4F46\u8FD9\u901A\u5E38\u8981\u6539\u9020\u4EE3\u7801\u539F\u6709\u7ED3\u6784\uFF0C\u800C\u4E14\u5728 devtool \u4E2D\u53EF\u4EE5\u770B\u5230\u7EC4\u4EF6\u72B6\u6001\u5D4C\u5957\u5F88\u662F\u4E25\u91CD\uFF0C\u7B80\u76F4\u53EF\u4EE5\u79F0\u4F5C\u201C\u5D4C\u5957\u5730\u72F1\u201D\u3002

#### \u590D\u6742\u7EC4\u4EF6\u53D8\u5F97\u96BE\u4EE5\u7406\u89E3

\u4E00\u4E2A\u590D\u6742\u7684\u7C7B\u7EC4\u4EF6\uFF0C\u5E38\u5E38\u662F\u6709\u5F88\u591A\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u51FD\u6570\u7EC4\u6210\u4F8B\u5982**componentDidMount**\u3001**componentDidUpdate**\u3001
**componentWillUnmount**\u3001**shouldComponentUpdate** \u7B49\u7B49\u3002
\u76F8\u4E92\u5173\u8054\u4E14\u9700\u8981\u5BF9\u7167\u4FEE\u6539\u7684\u4EE3\u7801\u88AB\u8FDB\u884C\u4E86\u62C6\u5206\uFF0C\u800C\u5B8C\u5168\u4E0D\u76F8\u5173\u7684\u4EE3\u7801\u5374\u5728\u540C\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u7EC4\u5408\u5728\u4E00\u8D77\u3002\u5982\u6B64\u5F88\u5BB9\u6613\u4EA7\u751F bug\uFF0C\u5E76\u4E14\u5BFC\u81F4\u903B\u8F91\u4E0D\u4E00\u81F4\u3002\u8FD9\u4E5F\u5BFC\u81F4\u4EE3\u7801\u590D\u7528\u6027\u5F88\u4F4E\uFF0C\u4E0D\u80FD\u5C06\u5176\u66F4\u5C0F\u7684\u7C92\u5EA6\u5316\u3002

#### \u96BE\u4EE5\u7406\u89E3\u7684 class

class \u4E2D\u8981\u4F7F\u7528\u5927\u91CF\u7684 this\uFF0C\u8FD9\u4E0D\u5F97\u4E0D\u662F\u4F60\u53BB\u4E86\u89E3 js \u4E2D this \u5728\u4E2A\u4E2A\u573A\u666F\u4E0B\u7684\u6307\u5411\u95EE\u9898\u3002\u5728\u5199\u6CD5\u4E0A\uFF0C\u8FD9\u4E5F\u4F7F\u5F97\u4EE3\u7801\u663E\u5F97\u975E\u5E38\u7684\u5197\u4F59\uFF0C\u663E\u5F97\u7B28\u91CD\u3002\u4EE5\u53CA\u5B98\u65B9\u6240\u63D0\u5230\u7684 class \u4E5F\u7ED9\u76EE\u524D\u7684\u5DE5\u5177\u5E26\u6765\u4E86\u4E00\u4E9B\u95EE\u9898\u3002\u4F8B\u5982\uFF0Cclass \u4E0D\u80FD\u5F88\u597D\u7684\u538B\u7F29\uFF0C\u5E76\u4E14\u4F1A\u4F7F\u70ED\u91CD\u8F7D\u51FA\u73B0\u4E0D\u7A33\u5B9A\u7684\u60C5\u51B5\u3002\u800C\u4E14 react \u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u5176\u5B9E\u66F4\u50CF\u51FD\u6570\u7EC4\u4EF6\uFF0C\u800C Hook \u4E5F\u62E5\u62B1\u51FD\u6570\u3002

## \u5E38\u7528\u7684 Hook \u4EE5\u53CA\u8BE5\u5982\u4F55\u4F7F\u7528

### \u72B6\u6001\u7C7B\u7684

> #### useState useRef useReducer useContext

- **useState**

  \`\`\`js
  const [state, setState] = useState(initState);
  \`\`\`

  \u8C03\u7528 useState \u51FD\u6570\u4F20\u5165\u4E00\u4E2A initState(_\u53EF\u4EE5\u76F4\u63A5\u662F\u4E00\u4E2A\u503C\u7C7B\u578B\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u4F8B\u5982\u5982\u679C\u521D\u59CB\u503C\u4E0D\u662F\u90A3\u4E48\u5BB9\u6613\u786E\u5B9A\u7ED9\u5230\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\u5BF9\u4ED6\u8FDB\u884C\u4E00\u4E9B\u5217\u64CD\u4F5C\uFF0C\u6700\u7EC8\u5C06\u6240\u9700\u4E4B\u503C\u8FD4\u56DE\u5373\u53EF_)\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A state(_\u5B83\u7684\u521D\u59CB\u503C\u4E0E initState \u76F8\u7B49\uFF0C\u5982\u679C\u662F\u51FD\u6570\u7684\u8BDD\u5C31\u662F\u5B83\u7684\u8FD4\u56DE\u503C_)\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u6539\u53D8\u8FD9\u4E2A state \u7684\u51FD\u6570(_\u5B83\u4F1A\u5F00\u542F\u4E00\u8F6E\u65B0\u7684 commit-render_)\u3002

- **useRef**

  \`\`\`js
  const refContainer = useRef(initValue);
  \`\`\`

  \u7B80\u5355\u8BF4\u5C31\u662F\u4F20\u5165\u4E00\u4E2A\u521D\u59CB\u503C(**initValue**)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u88AB\u4E00\u4E2A\u53D8\u91CF(**refContainer**)\u63A5\u53D7, refContainer.current \u76EE\u524D\u7684\u503C\u5C31\u662F initValue\uFF0C\u9700\u8981\u4FEE\u6539\u5B83\u503C\u53EA\u9700\u8981\u5BF9 current \u5C5E\u6027\u4ECE\u65B0\u8D4B\u503C\uFF0C\u800C\u4E14\u4E0D\u4F1A\u5F00\u542F\u65B0\u4E00\u8F6E**commit-render**\uFF0C\u800C\u4E14\u6BCF\u4E00\u8F6E\u7684**commit-render**refContainer.current \u91CC\u9762\u7684\u503C\u4E0D\u4F1A\u88AB\u91CD\u65B0\u7684\u8D4B\u521D\u59CB\u503C\uFF08_\u8D77\u5230\u4E00\u4E2A\u7F13\u5B58\u7684\u4F5C\u7528_\uFF09,\u4E00\u822C initValue \u4E3A null \u65F6\uFF0C\u5219\u5E38\u5E38\u4E0E DOM \u64CD\u4F5C\u6709\u5173\uFF0C\u53EA\u9700\u8981\u5C06 refContainer \u4F20\u9012\u7ED9\u60F3\u8981\u7ED1\u5B9A\u7684 DOM \u7684 ref \u5C5E\u6027\u5C31\u80FD\u62FF\u5230\u8FD9\u4E2A DOM \u7684\u771F\u5B9E\u5BF9\u8C61\u3002

- **useReducer** **useContext**

  \u5B83\u4FE9\u5E38\u5E38\u4E00\u8D77\u642D\u914D\u4F7F\u7528\uFF0C\u6240\u6709\u5C31\u4E00\u8D77\u6765\u8BF4\u8BF4\uFF0C\u5199\u4E00\u4E2A\u7B80\u5355\u7684 todoList\u3002
  
  <u>\u521D\u59CB\u5316state\uFF0C\u64CD\u4F5C\u884C\u4E3Aaction</u>
  \`\`\`js
  const initState = {
    todoList: []
  };

  const actions = {
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    UPDATE_TODO_ITEM: "UPDATE_TODO_ITEM",
    DELETE_TODO_ITEM: "DELETE_TODO_ITEM"
  };
  \`\`\`

  <u>\u5B9A\u4E49reducer</u>
  \`\`\`js
  const reducer = (state, action)=>{
    switch(action.type){
      case actions.ADD_TODO_ITEM:
        return {
          todoList:[
            ...state.todoList,
            {
              id: new Date().valueOf(),
              date: new Date().toLocaleDateString(),
              text: action.text
            }
          ]
        }
      case actions.UPDATE_TODO_ITEM:{
        const updatedTodoList = state.todoList.map((todoItem)=>{
          return todoItem.id === action.id
           ? {
               ...todoItem,
               text: action.text,
               id: new Date().valueOf(),
               date: new Date().toLocaleDateString(),
             }
           : todoItem
        })
        return {todoList: newTodoList}
      }
      case actions.DELETE_TODO_ITEM:
        const deletedTodoList = state.todoList.filter((todoItem)=>{
          return todoItem.id !== action.id
        })
        return {todoList: deletedTodoList}
      }
      default:
        return state;
  };
  \`\`\`

  <u>\u521B\u5EFA\u4E00\u4E2AtodoListContext</u>
  \`\`\`js
  const TodoListContext = createContext();
  \`\`\`
  <u>\u5EFA\u7ACBdispatch-action-reducer-state\u8054\u7CFB</u>
  \`\`\`js
  const [state, dispatch] = useReducer(reducer, initState);
  \`\`\`
  
  <u>\u5EFA\u7ACBcontext-reducer\u8054\u7CFB</u>
  \`\`\`js
  const Provider = ({children}) => {
     const value = {
       todoList: state.todoList,
       addTodoItem: (text)=>{
         dispatch({
           type: actions.ADD_TODO_ITEM,
           text
         })
       },
       updateTodoItem: (id,text)=>{
         dispatch({
           type: actions.ADD_TODO_ITEM,
           id,
           text
         })
       },
       deleteTodoItem: (id)=>{
         dispatch({
           type: actions.ADD_TODO_ITEM,
           id
         })
       },
     }
    return (
       <TodoListContext.Provider value={value}>
         {children}
       </TodoListContext.Provider>
    )
  }
  \`\`\`

  <u>\u7EC4\u4EF6\u5B9E\u9645\u4F7F\u7528</u>
  \`\`\`js
  const Demo = () => {
    const {
            todoList,
            addTodoItem,
            updateTodoItem,
            deleteTodoItem
          } = useContext("TodoListContext");
    const [addValue, setAddValue] = useState("");
    const [showUpdateInput,setShowUpdateInput] = useState(false);

    return (
      <div>
        <input value={addValue} onChange={(e)=>{
          setInput(e.target.value);
          addTodoTtem(e.target.value);
          }} />
        <button>\u6DFB\u52A0</button>
        <div>
          {todoList.map((todoItem)=>{
            return (
              <div key={todoItem.id}>
                <h1>{todoItem.date}</h1>
                <p>{todoItem.text}</p>
                <input value={todoItem.value} onChange={(e)=>{
                  updateTodoList(todoItem.id, e.target.value)
                }} />
                <button onClick={()=>deleteTodoItem(todoItem.id)}>\u5220\u9664</button>
                <button></button>
              </div>
            )
          })}
        </div>
      <div>
    )

  };

  const App = () => {
    return (
      <Provider >
       <Demo>
      </Provider>
    )
  };
  \`\`\`


### \u526F\u4F5C\u7528\u7C7B\u7684
> #### useEffect useLayoutEffect

* **useEffect**
  \`\`\`js
  useEffect(()=>{

    return ()=>{

    }
  },[deps])
  \`\`\`
* **useLayoutEffect**
### \u4F18\u5316\u7C7B\u7684

> #### useMemo useCallBack

* **useMemo**
* **useCallBack**
### \u5176\u4ED6

> #### useImperativeHandle useDebugValue

* **useImperativeHandle**
* **useDebugValue**


## \u6700\u540E
`,_n=()=>`# \u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165\u4E86\u4E00\u4E2A**npm run xxx** \u6307\u4EE4\u5230\u5E95\u5E72\u4E86\u5565 \u{1F914}

> \u4F5C\u4E3A\u4E00\u4E2A\u524D\u7AEF\uFF0C\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\u6211\u4EEC\u603B\u662F\u4F1A\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165 npm run xxx \u8FD9\u6837\u7684\u6307\u4EE4\uFF0C\u8FD9\u4F3C\u4E4E\u662F\u4E00\u4EF6\u5F88\u4E60\u4EE5\u4E3A\u5E38\u7684\u4E8B\u60C5\uFF0C\u4F46\u662F\u4E0A\u4E0A\u4E2A\u661F\u671F\u6211\u5BF9\u6B64\u4EA7\u751F\u4E86\u7591\u60D1\uFF0C\u4E3A\u5565\u9879\u76EE\u5C31\u8FD9\u4E48\u8FD0\u884C\u4E86\u8D77\u6765\u5462\u3002\u4E0B\u9762\u5C31\u4E00\u8D77\u6765\u63A2\u8BA8\u63A2\u8BA8\u3002

## \u8D77\u56E0

\u4E0A\u4E0A\u4E2A\u661F\u671F\uFF0C\u7531\u4E8E\u60F3\u597D\u597D\u770B\u770B webpack\uFF0C\u4E8E\u662F\u5C31\u6253\u5F00\u4E86 webpack \u7684\u5B98\u7F51\uFF0C\u60F3\u7740\u4ECE\u5934\u5F80\u4E0B\u770B\u5427\uFF0C\u4F46\u662F\u7531\u4E8E\u79CD\u79CD\u539F\u56E0\u6682\u4E14\u6401\u7F6E\u4E86\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E8E\u662F\u53C8\u5728\u7F51\u4E0A\u770B\u770B\u6709\u6CA1\u6709\u6BD4\u8F83\u597D\u7684\u4E8C\u624B\u8D44\u6E90\uFF0C\u7F51\u4E0A\u8FD8\u662F\u6709\u5F88\u591A\u6BD4\u8F83\u597D\u7684 webpack \u603B\u7ED3\u7684\uFF0C\u7531\u4E8E\u6211\u60F3\u4E86\u89E3\u7684\u662F\u914D\u7F6E\u9879\u504F\u5B9E\u9645\u5E94\u7528\u7684\u6587\u7AE0\uFF0C\u5176\u4E2D\u5C31\u6709\u8FD9\u4E48\u4E00\u7BC7\u5F00\u5934\u5199\u7740\u9605\u8BFB\u6B64\u6587\u7AE0\u6700\u597D\u4E0B\u4ED6\u642D\u5EFA\u7684\u4E00\u4E2A\u811A\u624B\u67B6\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u914D\u5408\u6587\u7AE0\u4E00\u8D77\u98DF\u7528\u3002\u8BF6\uFF0C\u6211\u5C31\u4E0B\u4E86\uFF0C\u4F46\u662F\u540E\u9762\u6587\u7AE0\u5230\u6CA1\u548B\u770B\u3002\u5012\u662F\u5F15\u51FA\u4E86\u6211\u60F3\u8BB2\u7684\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165\u4E86\u4E00\u4E2A**npm run xxx**\u6307\u4EE4\u5230\u5E95\u5E72\u4E86\u5565\u3002

## \u6363\u9F13\u6363\u9F13

- \u90A3\u5C31\u6363\u9F13\u6363\u9F13\u5427\uFF0Cnpm i ykj-cli -g \u3002 \u5BF9\uFF0C\u811A\u624B\u67B6\u7684\u540D\u5B57\u53EB ykj-cli\uFF0C\u600E\u4E48\u4F7F\u7528\u5462\uFF0Cykj init webpack\u3002  
  ![\u4F7F\u7528](/public/img_2022_3_27/Snipaste_2022-03-28_00-09-51.png)

- \u8BF6\u6211\u5C31\u7EB3\u95F7\u4E86\uFF0C\u4ED6\u662F\u600E\u4E48\u505A\u5230\u53EF\u4EE5\u8BA9\u6211\u9009\u62E9\u7684\u5440\uFF01
  \u4E8E\u662F\u6211\u5C31\u5F00\u59CB\u4E00\u7CFB\u5217\u8BD5\u63A2\u3002
  \u9996\u5148\u6211\u627E\u5230\u4E86\u5B83\u6240\u5728\u5168\u5C40\u7684\u4F4D\u7F6E\u3002
  ![img](/public/img_2022_3_27/Snipaste_2022-03-27_22-40-00.png)
  \u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u751F\u6210\u4E86\u51E0\u4E2A\u76F8\u5173\u811A\u624B\u67B6\u7684\u6587\u4EF6\u3002
  \u5176\u4E2D\u8FD9\u4E2A\u5C31\u662F\u6240\u8C13\u7684 ykj.cmd \u6587\u4EF6
  _\uFF08CMD \u6587\u4EF6\u662F\u5728 1990 \u5E74\u4EE3\u521D\u968F Windows NT \u53D1\u884C\u800C\u5F15\u5165\u7684\uFF0C\u73B0\u5728\u4ECD\u53EF\u4EE5\u5728\u66F4\u9AD8\u7248\u672C\u7684 Windows \u64CD\u4F5C\u7CFB\u7EDF\u8FD0\u884C\u3002\u901A\u8FC7\u53CC\u51FB\u6587\u4EF6\u6216\u5728\u547D\u4EE4\u63D0\u793A\u7B26\uFF08CMD.EXE\uFF09\u4E2D\u6267\u884C\u8BE5\u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u5728 Windows \u4E2D\u8FD0\u884C CMD \u6587\u4EF6\u4E2D\u5B58\u50A8\u7684\u547D\u4EE4\u3002[\u6587\u4EF6\u767E\u79D1](https://www.wenjianbaike.com/cmd.html)\u8FD9\u91CC\u6709\u8BE6\u7EC6\u4ECB\u7ECD\u3002\uFF09_

- \u6253\u5F00\u8FD9\u4E2A\u6587\u4EF6
  ![img](/public/img_2022_3_27/Snipaste_2022-03-27_22-42-10.png)
  \u7EA2\u6846\u4E2D\u7B2C\u4E00\u4E2A\u5E94\u8BE5\u662F\u5224\u65AD node.exe \u6240\u5728\u73AF\u5883\u7684\uFF0C\u7B2C\u4E8C\u4E2A\u5219\u662F\u627E\u5230\u8981\u6267\u884C\u7684\u6587\u4EF6\u3002_\uFF08\u5927\u80C6\u731C\u6D4B\u8FD9\u4E2A\u5E94\u8BE5\u662F\u4E0B\u8F7D\u5168\u5C40\u5305\u81EA\u52A8\u751F\u6210\u7684\u6587\u4EF6\uFF0C\u81F3\u4E8E\u4E3A\u5565\u53EF\u4EE5\u51C6\u786E\u627E\u5230\u8981\u53BB\u6267\u884C\u7684\u6587\u4EF6\u5462 \u{1F914}\uFF0C\u80AF\u5B9A\u662F\u6709\u539F\u56E0\u7684\u3002\uFF09_

- \u7EE7\u7EED\u5F80\u4E0B\u627E
  ![img](/public/img_2022_3_27/Snipaste_2022-03-27_23-51-07.png)
  \u8FD9\u662F\u811A\u624B\u67B6\u7684 package.json \u6587\u4EF6\uFF0C\u8FD9\u91CC\u6709\u4E2A bin \u5B57\u6BB5\uFF0C**bin** \u9879\u7528\u6765\u6307\u5B9A\u5404\u4E2A\u5185\u90E8\u547D\u4EE4\u5BF9\u5E94\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002\u90A3\u4F1A\u4E0D\u4F1A\u5C31\u662F\u8FD9\u4E2A\u5B57\u6BB5\u63D0\u4F9B\u7684\u4FE1\u606F\u3002\uFF08_\u5927\u80C6\u731C\u6D4B\u5E94\u8BE5\u662F\u5427_\uFF09  
   \u4E8E\u662F\u6211\u53C8\u5168\u5C40\u5B89\u88C5\u4E86\u4E2A json-server \u6765\u9A8C\u8BC1\u9A8C\u8BC1
  ![img](/public/img_2022_3_27/Snipaste_2022-03-28_00-34-58.png)
  ![img](/public/img_2022_3_27/Snipaste_2022-03-28_00-35-56.png)
  \u57FA\u672C\u53EF\u4EE5\u65AD\u5B9A\u662F\u6211\u4E4B\u524D\u6240\u60F3\u8C61\u7684\u90A3\u6837\u4E86\u3002

## \u90A3\u4E48\u73B0\u5728\u8BA9\u6211\u4EEC\u634B\u4E00\u634B

\u7531\u4E8E\u5728\u5199\u8FD9\u4E2A\u811A\u624B\u67B6\u7684\u65F6\u5019\uFF0C\u5728 bin \u8FD9\u4E2A\u5B57\u6BB5\u91CC\u9762\u6307\u5B9A\u4E86\u8981\u53BB\u6267\u884C\u7684\u6587\u4EF6\uFF0C\u53D1\u5E03\u8FD9\u4E2A\u5305\uFF0C\u8BA9\u540E\u6211\u4EEC\u5168\u5C40\u4E0B\u4E0B\u6765\u4E86\uFF0C\u5728\u5BF9\u5E94\u7684\u5730\u65B9\uFF08_pnpm \u6587\u4EF6\u5939\u4E0B\uFF0C\u4E0D\u540C\u5305\u7BA1\u7406\u5668\u4F4D\u7F6E\u53EF\u80FD\u6709\u6240\u4E0D\u540C\uFF0C\u5982\u679C\u662F npm \u7684\u8BDD\u4F1A\u521B\u5EFA\u5728\u5168\u5C40\u7684 node_module/bin \u4E0B_\uFF09\u521B\u5EFA\u4E86.cmd \u6587\u4EF6\uFF0C\u800C\u8FD9\u4E2A\u6587\u4EF6\u662F\u901A\u8FC7 npm \u81EA\u52A8\u751F\u6210\u7684\u81F3\u4E8E\u4E0A\u6587\u4E2D\u63D0\u5230\u7684\u600E\u4E48\u51C6\u786E\u7684\u77E5\u9053\u8FD9\u4E2A\u8981\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u731C\u6D4B\u5C31\u662F bin \u5B57\u6BB5\u63D0\u4F9B\u7684\u4FE1\u606F\u3002\u6240\u4EE5\u5F53\u8F93\u5165 ykj init wepack \u7684\u65F6\u5019\u5C31\u901A\u8FC7 node.exe \u6267\u884C\u4E86\u8FD9\u4E2A index.js \u6587\u4EF6\u3002
![img](/public/img_2022_3_27/Snipaste_2022-03-28_00-08-28.png)
\u539F\u6765\u662F\u8FD9\u4E48\u8BA9\u6211\u9009\u62E9\u7684\u5440 \u{1F602}\uFF0C**\u90A3\u4E48\u8A00\u5F52\u6B63\u4F20\uFF0Cnpm run xxx \u5230\u5E95\u5E72\u4E86\u4E2A\u5565\u3002**

## \u8A00\u5F52\u6B63\u4F20

npm run xxx \u5230\u5E95\u5E72\u4E86\u4E2A\u5565\u3002\u65E5\u5E38\u5F00\u53D1\u4E2D\u6BCF\u6B21\u542F\u52A8\u9879\u76EE\uFF0C\u6253\u5305\u90FD\u8981\u7528\u5230\u8FD9\u79CD\u6307\u4EE4\u3002\uFF08_\u80AF\u5B9A\u4E0E\u4E0A\u6587\u63D0\u5230\u7684\u4E5F\u5DEE\u4E0D\u591A_\uFF09

\u9996\u5148\u4F1A\u627E\u5230 npm.cmd \u6587\u4EF6\uFF08_\u7531\u4E8E\u6211\u4E2A\u4EBA\u7535\u8111\u662F window \u7684_\uFF09\uFF0C\u6267\u884C\u5B83\u6240\u6307\u5B9A\u7684\u6587\u4EF6 npm-cli.js

\`\`\`js
#!/usr/bin/env node
require("../lib/cli.js")(process);
\`\`\`

\u53C8\u4F1A\u6267\u884C\u8FD9\u4E2A cli.js \u6587\u4EF6(_\u5C31\u4E0D\u6DF1\u7A76\u4E86 \u{1F923}_)\u3002
\u4F1A\u627E\u5230 package.json \u4E2D\u7684 script \u4E2D\u4E0E\u4E4B\u5339\u914D\u7684\u5B57\u6BB5\u6267\u884C\u3002

\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7 create-react-app \u6784\u5EFA\u7684 react \u9879\u76EE\uFF0C\u9879\u76EE\u4EE5\u53CA\u5B83\u7684 package.json
![img](/public/img_2022_3_27/Snipaste_2022-03-28_01-02-10.png)

\u53EF\u89C1\u90A3\u4E2A script \u4E2D\u7684\u5B57\u6BB5\u5C31\u662F\u6211\u4EEC\u65F6\u5E38\u8981\u7528\u5230\u7684\uFF0C\u8BF6\uFF0C\u4E3A\u5565\u8981\u7528 npm run\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u901A\u8FC7 react-scripts start \u6765\u542F\u52A8\u9879\u76EE\u5462\uFF0C\u56E0\u4E3A\u7EC8\u7AEF\u662F\u76F4\u63A5\u4ECE\u5168\u5C40\u6765\u67E5\u627E\u53EF\u8FD0\u884C\u7684\u6587\u4EF6\uFF0C\u800C\u5168\u5C40\u6CA1\u6709\u5BF9\u5E94\u7684.cmd

![img](/public/img_2022_3_27/Snipaste_2022-03-28_01-09-23.png)

\u4F46\u662F\u5168\u5C40\u6709 npm \u5440\uFF0C\u6240\u4EE5 npm run start \u627E\u5230

\`\`\`js
// test/package.json
  "scripts": {
    "start": "react-scripts start",// \u5C31\u662F\u8FD9\u6761\u54E6
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
\`\`\`

npm \u4F1A\u4ECE\u672C\u9879\u76EE\u627E\uFF0C\u672C\u9879\u76EE\u627E\u4E0D\u5230\u5C31\u5230\u5168\u5C40\u53BB\u627E\uFF0C\u663E\u7136\u672C\u9879\u76EE\u91CC\u9762\u5C31\u6709\u53EF\u8FD0\u884C\u7684 react-scripts.cmd \u6587\u4EF6\uFF0C\u81F3\u4E8E\u4E3A\u5565\u4EA7\u751F\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u6587\u8BB2\u5230\u7684\u4E00\u6837\uFF0C\u800C\u8FD9\u4E2A\u6587\u4EF6\u4E3A\u5565\u53C8\u80FD\u51C6\u786E\u7684\u6267\u884C\u5BF9\u5E94\u7684 react-scripts.js\uFF0C\u4E5F\u540C\u4E0A\u3002

\`\`\`js
// test/node_modules/.bin/react-scripts.cmd
@ECHO off
GOTO start
:find_dp0
SET dp0=%~dp0
EXIT /b
:start
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\\node.exe" (
  SET "_prog=%dp0%\\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & "%_prog%"  "%dp0%\\..\\react-scripts\\bin\\react-scripts.js" %*
\`\`\`

\`\`\`js
// test/node_modules/react-scripts/package.json
  "files": [
    "bin",
    "config",
    "lib",
    "scripts",
    "template",
    "template-typescript",
    "utils"
  ],
  "bin": {
    "react-scripts": "./bin/react-scripts.js"
  },
\`\`\`

**\u5982\u679C\u60F3\u8981\u77E5\u9053start\u5230\u5E95\u5E72\u4E86\u4E2A\u5565\uFF0C\u53EF\u4EE5\u6709\u7A7A\u81EA\u5DF1\u81EA\u884C\u7814\u7A76\u54DF**
\`\`\`js
// test/node_modules/react-scripts/bin/react-scripts.js

#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const spawn = require('react-dev-utils/crossSpawn');
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if (['build', 'eject', 'start', 'test'].includes(script)) {
  const result = spawn.sync(
    process.execPath,
    nodeArgs
      .concat(require.resolve('../scripts/' + script))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: 'inherit' }
  );
  if (result.signal) {
    if (result.signal === 'SIGKILL') {
      console.log(
        'The build failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '\`kill -9\` on the process.'
      );
    } else if (result.signal === 'SIGTERM') {
      console.log(
        'The build failed because the process exited too early. ' +
          'Someone might have called \`kill\` or \`killall\`, or the system could ' +
          'be shutting down.'
      );
    }
    process.exit(1);
  }
  process.exit(result.status);
} else {
  console.log('Unknown script "' + script + '".');
  console.log('Perhaps you need to update react-scripts?');
  console.log(
    'See: https://facebook.github.io/create-react-app/docs/updating-to-new-releases'
  );
}
\`\`\`
## \u6700\u540E
\u901A\u8FC7\u4EE5\u4E0A\u7684\u5206\u6790\uFF0C\u6211\u4EEC\u5927\u81F4\u4E86\u89E3\u4E86npm run start \u4EE5\u53CA \u5168\u5C40\u5305\u7684\u4E00\u4E2A\u6267\u884C\u6D41\u7A0B\uFF0C\u5176\u5B9E\u5C31\u662F\u627Ecmd\uFF08*\u4E0D\u540C\u7CFB\u7EDF\u4E0D\u540C*\uFF09\u6587\u4EF6\u4EE5\u53CA\u9700\u8981\u6267\u884C\u7684\u6587\u4EF6\uFF0C\u81F3\u4E8E\u600E\u4E48\u627E\uFF0C\u600E\u4E48\u751F\u6210\u4E0E\u4E4B\u5339\u914D\u7684\u6267\u884C\u6587\u4EF6\u8DEF\u5F84\u3002\u4E0A\u6587\u5DF2\u7ECF\u6709\u6240\u63D0\u53CA\uFF0C\u82E5\u8981\u6DF1\u7A76\u6709\u7A7A\u65F6\u53EF\u4EE5\u81EA\u884C\u7814\u7A76\u7814\u7A76\u6E90\u4EE3\u7801\u54DF\u3002
`,M=[{path:"date_2022_3_27",date:"2022_3_27",title:"npm run xxx \u5230\u5E95\u5E72\u4E86\u4E2A\u5565",summary:"\u4F5C\u4E3A\u4E00\u4E2A\u524D\u7AEF\uFF0C\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\u6211\u4EEC\u603B\u662F\u4F1A\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165npm run xxx \u8FD9\u6837\u7684\u6307\u4EE4\uFF0C\u8FD9\u4F3C\u4E4E\u5F88\u5E73\u5E38\uFF0C\u4F46\u662F\u4E0A\u4E2A\u661F\u671F\u6211\u5BF9\u6B64\u4EA7\u751F\u4E86\u7591\u60D1\uFF0C\u4E3A\u5565\u9879\u76EE\u5C31\u8FD9\u4E48\u8FD0\u884C\u4E86\u8D77\u6765\u5462\u{1F914}",tags:["\u811A\u672C","\u80E1\u626F\u7CFB\u5217"],content:_n},{path:"date_2022_3_1",date:"2022_3_1",title:"\u5E38\u7528\u7684 React hooks",summary:"\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u8D8A\u6765\u8D8A\u5C11\u5199 class \u7EC4\u4EF6\uFF0C\u800C\u662F\u8FD8\u7528 Function \u7EC4\u4EF6\u66FF\u4EE3\u4E4B\uFF0C\u8BF4\u5230\u51FD\u6570 Function \u7EC4\u4EF6\u5C31\u4E0D\u5F97\u4E0D\u63D0\u8D77 Hook\uFF0C\u8FD9\u4E5F\u662F 16.8 \u4EE5\u6765\u706B\u70ED\u8BA8\u8BBA\u5E76\u4E14 react \u5B98\u65B9\u56E2\u961F\u6240\u63A8\u5D07\u7684\u3002",tags:["React","Function componets","hooks","\u6D45\u6790\u7CFB\u5217"],content:gn},{path:"date_2022_2_24",date:"2022_2_24",title:"\u5C31\u4ECE\u8F93\u5165\u4E00\u4E2A url \u5F00\u59CB",summary:"\u672C\u7BC7\u5C06\u4ECB\u7ECD\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u5728\u5730\u5740\u680F\u8F93\u5165\u4E00\u4E2A url \u5230\u9875\u9762\u6E32\u67D3\u7684\u5927\u81F4\u6D41\u7A0B\u3002",tags:["\u901A\u4FE1","\u6D4F\u89C8\u5668","\u80E1\u626F\u7CFB\u5217"],content:hn},{path:"hello",date:"2022_2_4",title:"\u54C8\u55BD",summary:"\u4ECA\u5929\u662F\u7ACB\u6625\uFF0C\u4E5F\u662F\u5927\u5E74\u521D\u56DB\u3002\u4ECA\u540E\u5728\u6B64\u4E0E\u5927\u5BB6\u5206\u4EAB\u6211\u7684\u6240\u89C1\u6240\u611F\u{1F60A}",tags:["\u5176\u4ED6"],content:mn}],fn=()=>`## leafvein-catalogue

> \u4E00\u4E2A\u8BA9\u4F60\u7684\u7F51\u7AD9\u5185\u5BB9\u5177\u6709\u76EE\u5F55\u7684\u7EC4\u4EF6 \u{1F4D1}

## \u5FEB\u901F\u63A5\u5165

### \u5B89\u88C5 leafvein-catalogue

\u901A\u8FC7 **npm** or **pnpm**

\`\`\`shell
npm install leafvein-catalogue
or
pnpm install leafvein-catalogue
\`\`\`

### \u4EE3\u7801\u4F8B\u5B50

\`\`\`js
import React from "React";
import { LeafveinCatalogue } from "leafvein-catalogue";

const APP: React.FC = () => {
  return (
    <>
      <div className="doc">
        <h1>hello world</h1>
      </div>
      <LeafveinCatalogue contentMark=".doc" />
    </>
  );
};

export default APP;
\`\`\`

## API

| \u53C2\u6570                 | \u8BF4\u660E                                                           | \u7C7B\u578B               | \u9ED8\u8BA4\u503C   | \u7248\u672C   |
| -------------------- | -------------------------------------------------------------- | ------------------ | -------- | ------ |
| contentMark          | \u63D0\u4F9B\u4E00\u4E2A\u4E3B\u4F53\u5185\u5BB9\u7684\u9009\u62E9\u5668\uFF0C\u4F9B\u76EE\u5F55\u7EC4\u4EF6                           | string             | -        | latest |
| scrollHash           | \u6EDA\u52A8\u9875\u9762\u662F\u5426\u4F7F URL \u4E0A\u7684 hash \u503C\u4E00\u8D77\u8DDF\u7740\u53D8\u5316                    | boolean            | false    | latest |
| diyWrap              | \u81EA\u5B9A\u4E49\u76EE\u5F55 Wrap \u6837\u5F0F like \\\`width: 100px\\\` or {width: "100px"} | string \\| object   | -        | latest |
| diyItem              | \u81EA\u5B9A\u4E49\u76EE\u5F55 Item \u6837\u5F0F like \\\`width: 100px\\\` or {width: "100px"} | string \\| object   | -        | latest |
| scrollBehavior       | \u70B9\u51FB\u76EE\u5F55\u7684 Item, \u9875\u9762\u7684\u6EDA\u52A8\u884C\u4E3A                                | 'smooth' \\| 'none' | 'smooth' | latest |
| openMoveHorizontally | \u76EE\u5F55\u7EC4\u4EF6\u662F\u5426\u8DDF\u968F\u4E3B\u4F53\u5185\u5BB9\u968F\u7740\u5C4F\u5E55\u5BBD\u5EA6\u53D8\u5316\u800C\u4E00\u8D77\u79FB\u52A8             | boolean            | false    | latest |
`,O=[{path:"leafvein-catalogue",date:"2022_7_3",title:"leafveinCatalogue",summary:"leafveinCatalogue \u4E00\u4E2A\u80FD\u591F\u8BA9\u4F60\u7684\u7F51\u7AD9\u5FEB\u901F\u751F\u6210\u76EE\u5F55\u7684React\u7EC4\u4EF6",tags:["leafvein","React","\u7EC4\u4EF6","\u76EE\u5F55","\u5FEB\u901F\u63A5\u5165"],content:fn}],A={blogs:M,packages:O,all:[...M,...O]};const k=e=>A[e||"all"].map(s=>{const{path:n="",title:o="",date:a="",summary:r="",tags:i=[]}=s;return{path:n,title:o,date:a,summary:r,tags:i}}),xn=(e="",s)=>{var n;return((n=A[s||"all"].find(o=>o.path===e))==null?void 0:n.content())||!1},wn=e=>{const s=k("blogs");let n=[];return e?n=s.map(o=>{if(o.tags.indexOf(e)!==-1)return o}).filter(o=>o):n=s,c.exports.useMemo(()=>({renderList:n}),[e])},vn="_blogsWrap_1j2i7_1";var bn={blogsWrap:vn};function R({tagId:e}){const{renderList:s}=wn(e);return t("div",{className:bn.blogsWrap,children:s==null?void 0:s.map(n=>{var o;return d("div",{children:[t(g,{to:`${l}blogs/`+n.path,children:n.title}),d("div",{children:[t("p",{children:n.date}),(o=n==null?void 0:n.tags)==null?void 0:o.map(a=>t("span",{style:{cursor:"pointer"},onClick:()=>{_nav(`${l}tags/`+a)},children:a},a)),t("p",{children:n.summary})]})]},n.path)})})}const kn="_wrap_13ejb_1",Tn="_img404_13ejb_11";var P={wrap:kn,img404:Tn};function N(){return t("div",{className:P.wrap,children:t("div",{className:P.img404})})}function En(){const[e,s]=c.exports.useState(""),[n,o]=c.exports.useState(!1),a=r=>{var i;document.documentElement.style.overflowY="hidden",s((i=r==null?void 0:r.target)==null?void 0:i.src),o(!0)};return c.exports.useEffect(()=>{const r=document.getElementsByTagName("img"),i=Array.prototype.slice.call(r);return i==null||i.forEach(u=>{u==null||u.addEventListener("click",p=>a(p))}),window.removeEventListener("click",a)},[]),t("div",{className:"component-img-viewer",style:{display:n?"block":"none"},onClick:()=>{document.documentElement.style.overflowY="overlay",o(!1)},children:t("div",{className:"imgWrap",onClick:()=>{document.documentElement.style.overflowY="overlay",o(!1)},children:t("img",{srcSet:e+" .6x"})})})}const yn=()=>{const{detailId:e}=D(),s=xn(e);return c.exports.useEffect(()=>{const n=new CustomEvent("menuShowStatus",{detail:"hidden"});return window.dispatchEvent(n),()=>{const o=new CustomEvent("menuShowStatus",{detail:"show"});window.dispatchEvent(o)}},[]),c.exports.useMemo(()=>({source:s}),[e])},Sn="_reactMarkdown_tq7tv_1";var In={reactMarkdown:Sn},Cn=c.exports.memo(function({className:s,"data-animation":n,source:o}){const[a,r]=c.exports.useState("detail_init");return c.exports.useEffect(()=>{r("detail_refresh")},[]),console.log(a),t("div",{className:s,"data-animation":n,children:t(V,{children:o,className:In.reactMarkdown,remarkPlugins:[G,X,{singleTilde:!1}],rehypePlugins:[K,Y],transformImageUri:i=>window.location.origin+i.replace("/public",l),components:{code(h){var T=h,{node:i,inline:u,className:p,children:m}=T,_=L(T,["node","inline","className","children"]);const E=/language-(\w+)/.exec(p||"");return!u&&E?t(J,w({children:String(m).replace(/\n$/,""),style:Q,language:E[1],PreTag:"div"},_)):t("code",C(w({className:p},_),{children:m}))}}})})});const Ln="_detailContainer_1wkzo_1",Dn="_markdownContent_1wkzo_4",jn="_blogShow_1wkzo_1",Mn="_backToHome_1wkzo_19";var x={detailContainer:Ln,markdownContent:Dn,blogShow:jn,backToHome:Mn};function $(){const{source:e}=yn();return d("div",{children:[e?d("div",{className:x.wrap,children:[d("div",{className:x.detailContainer,children:[t(Cn,{className:x.markdownContent+" markdownContent","data-animation":!window.location.hostname.includes("localhost"),source:e}),t(Z,{contentMark:".markdownContent",openMoveHorizontally:!0})]}),t("div",{className:x.backToHome,children:t(g,{to:`${l}blogs`,children:"cd.."})})]}):t(N,{}),t(En,{})]})}const On=e=>{const s=k("packages");let n=[];return e?n=s.map(o=>{if(o.tags.indexOf(e)!==-1)return o}).filter(o=>o):n=s,c.exports.useMemo(()=>({renderList:n}),[e])},An="_packagesWrap_xxs83_1";var Rn={packagesWrap:An};function H({tagId:e}){const{renderList:s}=On(e);return t("div",{className:Rn.packagesWrap,children:s==null?void 0:s.map(n=>{var o;return d("div",{children:[t(g,{to:`${l}packages/`+n.path,children:n.title}),d("div",{children:[t("p",{children:n.date}),(o=n==null?void 0:n.tags)==null?void 0:o.map(a=>t("span",{style:{cursor:"pointer"},onClick:()=>{_nav(`${l}tags/`+a)},children:a},a)),t("p",{children:n.summary})]})]},n.path)})})}const Pn=()=>{const e=k(),n=Array.from(new Set(e.map(o=>o.tags).flat())).map(o=>{const a={};return a.name=o,a.count=0,e.map(r=>{r.tags.indexOf(o)!==-1&&a.count++}),a});return c.exports.useMemo(()=>({markdownList:e,renderList:n}),[])},Nn="_wrap_1c3f2_1",$n="_box1_1c3f2_22",Hn="_box2_1c3f2_25",Un="_box3_1c3f2_28",Bn="_box4_1c3f2_31",Wn="_box5_1c3f2_34",zn="_box6_1c3f2_37";var U={wrap:Nn,box1:$n,box2:Hn,box3:Un,box4:Bn,box5:Wn,box6:zn};function Fn(){const{markdownList:e,renderList:s}=Pn();return t(b,{children:t("div",{className:U.wrap,children:s.map((n,o)=>t(g,{to:`${l}tags/`+n.name,children:d("div",{className:U["box"+(o+1)],children:[t("span",{children:n.name}),d("span",{children:["(",n.count,"/",e.length,")"]})]})},n.name))})})}function qn(){const{tagId:e}=D();return d("div",{children:[t(R,{tagId:e}),t(H,{tagId:e})]})}function Vn(e){return t(b,{children:"TODO"})}function Gn(){return en([{path:`${l}`,element:t(un,{}),children:[{path:"home",element:t(pn,{})},{path:"blogs",children:[{path:"",element:t(R,{})},{path:":detailId",element:t($,{})}]},{path:"packages",children:[{path:"",element:t(H,{})},{path:":detailId",element:t($,{})}]},{path:"tags",children:[{path:"",element:t(Fn,{})},{path:":tagId",element:t(qn,{})}]},{path:"about",element:t(Vn,{})}]},{path:"*",element:t(N,{})}])}function Xn(){return t(nn,{children:t(Gn,{})})}var Kn=()=>t(Xn,{});tn.render(t(on.StrictMode,{children:t(Kn,{})}),document.getElementById("root"));
