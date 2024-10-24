export const definingRoutesTitle = '定义路由';
export const definingRoutesDescription = '我们建议您开始之前先阅读路由基础知识';
export const definingRoutesContent = "本页将引导你如何在Next.js应用程序中定义和组织你的路由。";

export const creatingRoutesTitle = "创建路由";
export const creatingRoutesDescription = "Next.js使用基于文件系统的路由器，文件夹就是用来定义路由的。";
export const creatingRoutesContent1 = "路由是嵌套文件夹的单一路径。遵循文件系统层次结构，从根文件到包含page.js文件的最后叶子文件夹。";
export const creatingRoutesContent2 = "每个文件夹代表时一个映射到URL段的路由段。要创建一个嵌套路由，你可以文件夹嵌套在一起, 比如app/dashboard/settings/page.js。";
export const creatingRoutesContent3 = "特殊文件page.js用来让路由给公众访问。";
export const creatingRoutesContent4 = "在这个示例中，/dashboard/analytics URL路径是不被公众访问的，因为它没有对应的page.js文件。这个文件夹可以用来存储组件，样式，图片或其他共享文件。";
export const creatingRoutesContent5 = "值得注意：.js, .jsx, 或.tsx文件扩展名可以用作特殊文件";

export const creatingUITitle = "创建UI文件";
export const creatingUIDescription = "每条路由段创建UI时会使用特殊文件约定。最常见的就是pages用来展示每个路由段独有的UI,  layouts用来展示多个路由共享的UI。";
export const creatingUIContent1 = "比如，创建你的第一个页面，在app目录下新建page.js文件并导出一个React组件。";
