export const pagesTitle = "页面";
export const pagesContent1 = "一个页面就是一个路由独有的UI。你可以通过page.js默认导出的组件来定义页面。";
export const pagesContent2 = "比如，要创建index页面，请在app目录下添加page.js文件。";
export const pagesContent3 = "然后，要创建更多的页面，请在新文件夹下添加page.js文件。比如，要为/dashboard路由创建一个页面，要先创建dashboard文件夹，然后在这文件夹下添加page.js文件。";
export const pagesContent4 = "值得注意：";
export const pagesContentTips = [
    {name: ".js, .jsx, 或 .tsx文件扩展名可用于Pages", link: ""},
    {name: "一个页面总是子树的叶子节点", link: ""},
    {name: "一个路由段要公开访问一定需要对应的page.js文件", link: ""},
    {name: "Pages默认是服务器组件，但是也可以设置成客户端组件", link: ""},
    {name: "Pages可以获取数据。请查看Data Fetching章节查看更多", link: ""},
];
