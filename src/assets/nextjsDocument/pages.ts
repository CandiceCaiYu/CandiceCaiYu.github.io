export const pagesTitle = "# 页面";
export const pagesContent1 = "一个页面就是一个路由独有的UI。你可以通过page.js默认导出的组件来定义页面。";
export const pagesContent2 = "比如，要创建index页面，请在app目录下添加page.js文件。";
export const pagesContent2Image = "![page example](/nextjsDoc/buildingYourApplication/routing/page-special-file.avif)";
export const pagesContent2Code = `~~~// \`app/page.tsx\` is the UI for the \`/\` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>
}`;
export const pagesContent3 = "然后，要创建更多的页面，请在新文件夹下添加page.js文件。比如，要为/dashboard路由创建一个页面，要先创建dashboard文件夹，然后在这文件夹下添加page.js文件。";
export const pagesContentTips = [".js, .jsx, 或 .tsx文件扩展名可用于Pages",
    "一个页面总是子树的叶子节点",
    "一个路由段要公开访问一定需要对应的page.js文件",
    "Pages默认是服务器组件，但是也可以设置成客户端组件",
    "Pages可以获取数据。请查看Data Fetching章节查看更多",
];
