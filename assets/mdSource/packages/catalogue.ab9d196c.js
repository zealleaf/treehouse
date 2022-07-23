var n=()=>`## @leafvein/catalogue

> \u4E00\u4E2A\u8BA9\u4F60\u7684\u7F51\u7AD9\u5185\u5BB9\u5177\u6709\u76EE\u5F55\u7684\u7EC4\u4EF6 \u{1F4D1}

## \u5FEB\u901F\u63A5\u5165

### \u5B89\u88C5 @leafvein/catalogue

\u901A\u8FC7 **npm** or **pnpm**

\`\`\`shell
npm install @leafvein/catalogue
or
pnpm install @leafvein/catalogue
\`\`\`

### \u4EE3\u7801\u4F8B\u5B50

\`\`\`js
import React from "React";
import Catalogue from "@leafvein/catalogue";

const APP: React.FC = () => {
  return (
    <>
      <div className="doc">
        <h1>hello world</h1>
      </div>
      <Catalogue contentMark=".doc" />
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
| diyWrapStyle         | \u81EA\u5B9A\u4E49\u76EE\u5F55 Wrap \u6837\u5F0F like \\\`width: 100px\\\` or {width: "100px"} | string \\| object   | -        | latest |
| diyItemStyle         | \u81EA\u5B9A\u4E49\u76EE\u5F55 Item \u6837\u5F0F like \\\`width: 100px\\\` or {width: "100px"} | string \\| object   | -        | latest |
| scrollBehavior       | \u70B9\u51FB\u76EE\u5F55\u7684 Item, \u9875\u9762\u7684\u6EDA\u52A8\u884C\u4E3A                                | 'smooth' \\| 'none' | 'smooth' | latest |
| openMoveHorizontally | \u76EE\u5F55\u7EC4\u4EF6\u662F\u5426\u8DDF\u968F\u4E3B\u4F53\u5185\u5BB9\u968F\u7740\u5C4F\u5E55\u5BBD\u5EA6\u53D8\u5316\u800C\u4E00\u8D77\u79FB\u52A8             | boolean            | false    | latest |
| isDebounce           | \u6EDA\u52A8\u5C4F\u5E55\u65F6\uFF0C\u76EE\u5F55 Item \u7684\u6FC0\u6D3B\u6A21\u5F0F                               | boolean            | true     | latest |
| loadingDuration      | \u76EE\u5F55\u52A0\u8F7D\u524D loading \u6301\u7EED\u65F6\u95F4                                    | number             | 500ms    | latest |
| diyLoadingStyle      | \u81EA\u5B9A\u4E49 loading \u6837\u5F0F like \\\`width: 100px\\\` or {width: "100px"}  | string \\| object   | true     | latest |
| diyLoadingChildren   | \u81EA\u5B9A\u4E49 loading \u7EC4\u4EF6                                            | ReactJSXElement    | -        | latest |

## changeLog

todo
`;export{n as c};
