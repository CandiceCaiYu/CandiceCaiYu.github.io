export const title = "# Next.js介绍";
export const welcome = "欢迎来到Next.js文档!";
export const conceptTitle = "## Next.js的概念";
export const concept1 = "Next.js是一个用于构建全栈Web应用程序的React框架。你可以用React组件去构建用户界面，并用Next.js实现附加功能和优化。";
export const concept2 = "在底层，Next.js 还抽象并自动配置了React所需的工具，比如打包， 编译，等等。这样你就可以专注于构建你的应用程序， 不用花时间在配置应用上。";
export const concept3 = "不管你是个人开发者还是大型团队中的一部分，Next.js都可以帮助你构建交互式，动态且快速的react应用程序。";

export const mainFeaturesTitle = "## 主要功能：";
export const mainFeaturesDescription = "Next.js的一些主要的功能包括：";
const mainFeaturesRouting = "建立在服务器组件之上的基于文件系统的路由器，它支持布局，嵌套布局，加载状态，错误处理等。";
const mainFeaturesRendering = "使用客户端组件和服务器组件对客户端和服务器进行渲染，使用Next.js在服务器上进一步优化静态和动态渲染。在Edge和Node.js运行时进行流式传输。";
const mainFeaturesDataFetching = "使用服务器组件中的async/await简化了数据获取，并扩展的fetch API， 用于请求记忆化，数据缓存和重新验证。";
const mainFeaturesStyling = "支持你喜欢的样式方法，包括css module, Tailwind CSS, and CSS-in-JS。";
const mainFeaturesOptimizations = "通过优化图片，字体，脚本来提高你应用程序的核心Web功能的生命力和用户体验。";
const mainFeaturesTypescript = "改善了对Typescript的支持, 提供更好的类型检查和更高效的编译，以及自定义Typescript插件和类型检查器。";
export const mainFeaturesContents = [
    {key: '1', feature: '路由', description: mainFeaturesRouting},
    {key: '2', feature: '渲染', description: mainFeaturesRendering},
    {key: '3', feature: '数据获取', description: mainFeaturesDataFetching},
    {key: '4', feature: '样式', description: mainFeaturesStyling},
    {key: '5', feature: '优化', description: mainFeaturesOptimizations},
    {key: '6', feature: 'Typescript', description: mainFeaturesTypescript},
];

export const howToUseDocsTitle = '## 如何使用这些文档';
export const howToUseDocsContent1 = "这个文档分成3个部分"
export const howToUseDocsContentList = [
    "- 入门：一步一步的帮助创建一个新的应用和学习nextJS的核心功能",
    "- 指南：有关特定用例的教程，选择与您相关的内容。",
    "- API 参考：每个功能的详细技术参考。"
];
export const howToUseDocsRight = '在屏幕的右边，你可以看到一个目录，它可以让你更容易在这个页面的各个章节之间导航。如果你想要更快得找到一个页面，你可以使用页面顶部的搜索栏，也可以使用搜索快捷键（ctrl + K或者command + K）。';


export const routerTitle = '## 应用程序路由器(App router) VS 页面路由器(Page router)';
export const routerSection1 = 'Next.js有两种不同的路由器：'
export const routerSectionList1 = [
    '应用程序路由器: 是新的路由器。它支持react最新的功能，比如服务器组件。',
    '页面路由器: 是原来的路由器，它目前仍然支持使用并正在改进。'];
export const routerSection2 = '在侧边栏的顶部，你可以看到一个下拉菜单，它可以让你在应用程序路由器和页面路由器的功能之间进行切换。这两个路由器的功能都是独有的，所以跟踪你的选项卡很重要。';
export const routerSection3 = '页面顶部的面包屑同样会指示你当前正在查看的是应用程序路由器还是页面路由器的文档。';

export const reactVersionHandlingTitle = '## React版本处理';
export const reactVersionHandlingContent1 = 'App router 与 Page router 处理React版本不同：'
export const reactVersionHandlingList1 = [
    'App router: 使用最新的React Canary版本。其中包括所有稳定的 React 19 更改，以及在新 React 版本发布之前在框架中验证的较新功能。',
    'Page router: 使用项目 package.json 中安装的 React 版本。'
]
export const reactVersionHandlingContent2 = '这种方法确保新的 React 功能在 App Router 中可靠运行，同时保持现有 Pages Router 应用程序的向后兼容性。';

export const preRequireTitle = '## 必备知识';
export const preRequireSection1 = '我们的文档假设您熟悉 Web 开发。在开始之前，如果您已了解以下内容，将会对您有所帮助：';
export const preRequireSectionList1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React'
]
export const preRequireSection2 = '如果您是 React 新手或需要复习，我们建议您从我们的 React Foundations 课程和 Next.js Foundations 课程开始，这些课程可让您在学习的同时构建应用程序。';


export const accessibilityTitle = '## 可访问性';
export const accessibilityContent = '为了在使用屏幕阅读器阅读文档时获得最佳的可访问性，我们推荐使用Firefox 和NVDA, 或者Safari 和 VoiceOver。';


export const communityTitle = "## 加入我们的社区。";
export const communityContent = "如果你有任何关于Next.js的问题，欢迎来我们的社区 GitHub Discussions, Discord, Twitter, and Reddit提问。";
