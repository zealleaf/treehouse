var y=Object.defineProperty,v=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var j=(r,a,e)=>a in r?y(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,n=(r,a)=>{for(var e in a||(a={}))g.call(a,e)&&j(r,e,a[e]);if(o)for(var e of o(a))h.call(a,e)&&j(r,e,a[e]);return r},k=(r,a)=>v(r,M(a));var u=(r,a)=>{var e={};for(var t in r)g.call(r,t)&&a.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&o)for(var t of o(r))a.indexOf(t)<0&&h.call(r,t)&&(e[t]=r[t]);return e};import{a as i}from"../../../react-vendor.49242b7f.js";import{r as R}from"../../../remark-gfm.96fb925e.js";import{r as _,m as P}from"../../../async-vendor.bad776aa.js";import{r as S}from"../../../rehype-katex.420919e7.js";import{r as C}from"../../../rehype-raw.3a8b1abe.js";import{R as E}from"../../constants.2664b933.js";import{j as s}from"../../../react/jsx-runtime.9d3c09ab.js";import{R as N}from"../../../react-markdown.7e46fb5b.js";import{S as T}from"../../../react-syntax-highlighter.8afd9021.js";const q="_reactMarkdown_tq7tv_1";var D={reactMarkdown:q},J=i.exports.memo(function({className:a,"data-animation":e,source:t}){const[w,x]=i.exports.useState("detail_init");return i.exports.useEffect(()=>{x("detail_refresh")},[]),console.log(w),s("div",{className:a,"data-animation":e,children:s(N,{children:t,className:D.reactMarkdown,remarkPlugins:[R,_,{singleTilde:!1}],rehypePlugins:[S,C],transformImageUri:m=>window.location.origin+m.replace("/public",E),components:{code(G){var f=G,{node:m,inline:b,className:c,children:d}=f,l=u(f,["node","inline","className","children"]);const p=/language-(\w+)/.exec(c||"");return!b&&p?s(T,n({children:String(d).replace(/\n$/,""),style:P,language:p[1],PreTag:"div"},l)):s("code",k(n({className:c},l),{children:d}))}}})})});export{J as C};
