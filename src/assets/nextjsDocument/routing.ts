export const title = '路由基本知识';
export const description = '每个应用程序的骨架都是路由。本页将会向你介绍Web路由的基本概念和如何在Next.js中处理路由.';
export const terminologyTitle = '术语';
export const terminologyDescription = '首先，你将会看到以下这些术语在整个文档中使用。以下是一个快速参考。';
export const terminology = [
    {name: '树', description: '一种可视化层次的结构惯例。比如，组件树有父组件和子组件，文件夹结构等。'},
    {name: '子树', description: '树的一部分，开始于新根，结束于叶子。'},
    {name: '根', description: '是树或者子树的第一个节点，比如根布局。'},
    {name: '叶子', description: '子树中没有子节点的节点，比如URL路径的最后一段。'},
    {name: 'URL段', description: '通过/分割的URL的一部分。'},
    {name: 'URL路径', description: '在域名后的URL的一部分（是由段的组成）。'},
];

export const appRouterTitle = '应用程序路由器';
export const appRouterContent1 = '在13版本中，Next.js引入了一个新的基于React 服务器组件构建的应用程序路由器，它支持共享布局，嵌套路由，加载状态，错误处理等。';
export const appRouterContent2 = 'App 路由器在名为app的新目录中运行。app目录和pages目录一起工作，这样可以逐步采用。这样你就可以选择在你的应用程序中一部分用新的app路由，一部分用以前pages路由。如果你的应用程序使用的pages目录，请查看页面路由器的文档';
export const appRouterContent3 = '值得注意：应用路由器的优先级高于页面路由器。路由跨目录解析为同一URL路径，否则会导致构时建错误， 从而避免发生冲突。';
export const appRouterContent4 = '默认情况下app内的组件是React服务器组件。这是一项性能优化，可以让你更容易采纳它，你也可以使用客户端组件。';
export const appRouterContent5 = '推荐：如果你是服务器组件的新手，请查看服务器页面。';

export const roleOfFoldersAndFiles = '文件夹和文件的角色';
export const roleOfFoldersAndFilesContent1 = 'Next.js使用基于路由器的文件系统。';
export const roleOfFoldersAndFilesContent2 = '文件夹被用来定义路由。路由是嵌套文件夹的单一路径。遵循文件系统层次结构，从根文件到包含page.js文件的最后叶子文件夹。查看定义路由。';
export const roleOfFoldersAndFilesContent3 = '文件用于创建针对路由段显示的用户界面。查看特殊文件。';

export const routeSegment = '路由段';
export const routeSegmentContent1 = '路由中的每个文件夹代表的是一个路由段。每个路由段都是映射到URL路径对应的段。';

export const nestedRoutesTitle = '嵌套路由';
export const nestedRoutesContent1 = '要创建一个嵌套路由，你可以将文件夹嵌套在一起。比如，你可以通过在app目录下嵌套两个文件来新增一个路由/dashboard/settings。';
export const nestedRoutesContent2 = 'dashboard/settings路由是由三个段组成的';
export const nestedRoutesContent3 = [
    {name: '/', description: '根段'},
    {name: 'dashboard', description: '段'},
    {name: 'settings', description: '叶子段'},
];


export const filesConventionsTitle = '文件约定';
export const filesConventionsContent1 = 'Next.js提供了一套特殊的文件，用于在嵌套路中创建特殊的行为的UI。';
export const filesConventionsContent2 = [
    {name: 'layout', description: '段和子段的共享UI'},
    {name: 'page', description: '路由的唯一UI，并使路由可以公开访问'},
    {name: 'loading', description: '段和子段的加载UI'},
    {name: 'not-found', description: '段和子段的未找到UI'},
    {name: 'error', description: '段和子段的错误UI'},
    {name: 'global-error', description: '全局的错误UI'},
    {name: 'route', description: '服务端API端点'},
    {name: 'template', description: '专门重新渲染布局UI'},
    {name: 'default', description: '并行路由的回退UI。'},
];
export const filesConventionsContent3 = '值得注意：.js, .jsx或者.tsx文件扩展名可应用到特殊文件。';


export const componentHierarchyTitle = '组件层次结构';
export const componentHierarchyContent1 = '路由段文件中定义的react组件是按照特定的层次结构进行渲染的。';
export const componentHierarchyContent2 = [
    {name: 'layout.js ', description: ''},
    {name: 'template.js', description: ''},
    {name: 'error.js (ErrorBoundary 组件内)', description: ''},
    {name: 'loading.js (ErrorBoundary 组件内)', description: ''},
    {name: 'not-found.js (ErrorBoundary 组件内)', description: ''},
    {name: 'page.js或者再嵌套一层layout.js ', description: ''},
];
export const componentHierarchyContent3 = '在嵌套路由里，段的组件会被嵌套在它父段的组件里。';


export const colocationTitle = '托管';
export const colocationContent1 = '除了特殊的文件外，你可以选择将你自己的文件（比如： components, styles, tests等）放到app目录下的文件夹里。';
export const colocationContent2 = '这是因为虽然文件夹定义路由，但只有page.js或route.js返回的内容才是可以公开寻址的。';
export const colocationContent3 = '了解更多关于项目组织和托管';

export const advancedRoutingPatternsTitle = '高级路由模式';
export const advancedRoutingPatternsContent1 = 'App Router还提供了一套帮助你执行更高级路由模式的约定，它们包括：';
export const advancedRoutingPatternsContent2 = '并行路由：你可以在同一个视图下同时展示多个可以独立导航的页面，你可以将它们用于具有自己子导航的拆分视图，例如dashboards。';
export const advancedRoutingPatternsContent3 = '拦截路由：你可以拦截一个路由，并将其展示在另一个路由的上下文中。当上下文保持在当前页面对你来说很重要的时候，你就可以这么用。比如当你编辑任务需要查看所有任务或者在feed中展开照片';
export const advancedRoutingPatternsContent4 = '这些模式可以帮助你构建更丰富和更复杂的UI，这让过去的小团队或者个人开发人员难以实现的功能变得简单易实现了。';

