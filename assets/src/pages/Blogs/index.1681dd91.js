import{L as p}from"../../../react-router-dom.50d3b09b.js";import{u as l}from"../../useHooks/blogs.486151e5.js";import{R as d}from"../../constants.2664b933.js";import{j as o,a as t}from"../../../react/jsx-runtime.9d3c09ab.js";import"../../../react-vendor.49242b7f.js";import"../../../react-syntax-highlighter.8afd9021.js";import"../../../_commonjsHelpers.b8add541.js";import"../../utils/handleMDS.092e0f6b.js";import"../../../mdSource/index.dd8df678.js";import"../../../mdSource/blogs/index.8e909a5a.js";import"../../../mdSource/blogs/hello.9be83ceb.js";import"../../../mdSource/blogs/date_2022_2_24.f1479de7.js";import"../../../mdSource/blogs/date_2022_3_27.ee62c6e1.js";import"../../../mdSource/blogs/date_2022_7_19.9afdbf71.js";import"../../../mdSource/packages/index.051241c1.js";import"../../../mdSource/packages/catalogue.ab9d196c.js";import"../../../vendor.cddda295.js";const n="_blogsWrap_1j2i7_1";var i={blogsWrap:n};function B({tagId:c}){const{renderList:s}=l(c);return o("div",{className:i.blogsWrap,children:s==null?void 0:s.map(r=>{var e;return t("div",{children:[o(p,{to:`${d}blogs/`+r.path,children:r.title}),t("div",{children:[o("p",{children:r.date}),(e=r==null?void 0:r.tags)==null?void 0:e.map(a=>o("span",{style:{cursor:"pointer"},onClick:()=>{_nav(`${d}tags/`+a)},children:a},a)),o("p",{children:r.summary})]})]},r.path)})})}export{B as default};
