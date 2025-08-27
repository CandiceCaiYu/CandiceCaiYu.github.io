export const title = '# 项目结构和组织';
export const projectStructureDescription1 = '本页概述了 Next.js 中所有文件夹和文件约定，以及组织项目的建议。';

export const foldersAndFileTitle = '## 文件夹和文件约定';
export const topLevelFoldersTitle = '### 顶层文件夹';
export const topLevelFoldersDescription = '顶层文件夹用于组织应用程序的代码和静态资源。';
export const topLevelFoldersImage = "![topLevelFolders](/nextjsDoc/projectStructure/top-level-folders.avif)";
export const topLevelFolders = [
    {
        name: 'app',
        description: '应用程序路由器'
    },
    {
        name: 'pages',
        description: '页面路由器'
    },
    {
        name: 'public',
        description: '提供静态资源'
    },
    {
        name: 'src',
        description: '可选的应用程序资源文件'
    }
];

export const topLevelFilesTitle = '### 顶层文件';
export const topLevelFilesDescription = '顶层文件用来配置你的应用程序，管理依赖，跑中间件，集成监控工具和定义环境变量。';
export const topLevelFiles = [
    {
        name: 'next.config.js',
        description: 'Next.js配置文件'
    },
    {
        name: 'package.json',
        description: '项目依赖和脚本'
    },
    {
        name: 'instrumentation.js',
        description: '开发遥测和仪表文件'
    },
    {
        name: 'middleware.js',
        description: 'Next.js请求中间件'
    },
    {
        name: '.env',
        description: '环境变量'
    },
    {
        name: '.env.local',
        description: '本地环境变量'
    },
    {
        name: '.env.development',
        description: '开发环境变量'
    },
    {
        name: '.env.production',
        description: '生产环境变量'
    },
    {
        name: '.eslintrc.json',
        description: 'ESLint的配置文件'
    },
    {
        name: '.gitigore',
        description: ' 忽略git的文件和文件夹'
    },
    {
        name: 'next-env.d.ts',
        description: 'next.js 的类型声明文件'
    },
    {
        name: 'tsconfig.json',
        description: 'TypeScript配置文件'
    },
    {
        name: 'jsconfig.json',
        description: 'Javascript的配置文件'
    }
];

export const appRoutingConventionsRoutingFilesTitle = '### 路由文件';
export const appRoutingConventionsRoutingFiles = [
    {
        name: 'layout',
        extension: '.js .jsx .tsx',
        description: '布局'
    },
    {
        name: 'page',
        extension: '.js .jsx .tsx',
        description: '页面'
    },
    {
        name: 'loading',
        extension: '.js .jsx .tsx',
        description: '加载的界面'
    },
    {
        name: 'not-found',
        extension: '.js .jsx .tsx',
        description: '未找到界面'
    }, {
        name: 'error',
        extension: '.js .jsx .tsx',
        description: '错误界面'
    }, {
        name: 'global-error',
        extension: '.js .jsx .tsx',
        description: '全局的错误界面'
    }, {
        name: 'route',
        extension: '.js .jsx',
        description: 'API端点'
    }, {
        name: 'template',
        extension: '.js .jsx .tsx',
        description: '重新渲染布局'
    }, {
        name: 'default',
        extension: '.js .jsx .tsx',
        description: '并行路由回退页面'
    }
];
export const appRoutingConventionsNestedRoutesTitle = '### 嵌套路由';
export const appRoutingConventionsNestedRoutes = [
    {
        name: 'folder',
        description: '路由段'
    },
    {
        name: 'folder/folder',
        description: ' 嵌套路由段'
    },
];
export const appRoutingConventionsDynamicRoutesTitle = '### 动态路由';
export const appRoutingConventionsDynamicRoutes = [
    {
        name: '[folder]',
        description: '动态路由段'
    },
    {
        name: '[...folder]',
        description: '全部捕获路由段'
    },
    {
        name: '[[...folder]]',
        description: '可选的全部捕获路由段'
    },
];
export const appRoutingConventionsGroupAndPrivateRoutesTitle = "### 路由组和私有文件夹";
export const appRoutingConventionsGroupAndPrivateRoutes = [
    {
        name: '(folder)',
        description: '不影响路由的分组路由'
    },
    {
        name: '_folder',
        description: '路由外的所有文件和子文件'
    }
];
export const appRoutingConventionsParallelAndInterceptedRoutesTitle = '### 并行和拦截路由';
export const appRoutingConventionsParallelAndInterceptedRoutes = [
    {
        name: '@folder',
        description: '命名插槽'
    },
    {
        name: '(.)folder',
        description: '拦截同一级路由'
    },
    {
        name: '(..)folder',
        description: '拦截高一级以上路由'
    },
    {
        name: '(..)(..)folder',
        description: '拦截高两级以上路由'
    },
    {
        name: '(...)folder',
        description: '从根路由拦截'
    }
];
export const appRoutingConventionsRouteMetadataTitle = '### 元数据文件约定';
export const appRoutingConventionsRouteMetadataAppIconTitle = '#### 应用程序图标(App icons)';
export const appRoutingConventionsRouteMetadataAppIcon = [
    {
        name: 'favicon',
        extension: '.ico',
        description: '网站图标'
    },
    {
        name: 'icon',
        extension: '.ico .jpg .jpeg .png .svg',
        description: '应用程序图标文件'
    }, {
        name: 'icon',
        extension: '.js .ts .tsx',
        description: '生成应用程序图标文件'
    },
    {
        name: 'apple-icon',
        extension: '.jpg .jpeg .png',
        description: 'apple图标'
    }, {
        name: 'apple-icon',
        extension: '.js .ts .tsx',
        description: '生成apple图标'
    }
];
export const appRoutingConventionsRouteOpenGraphAndTwitterTitle = '#### Open Graph 和 Twitter图片';
export const appRoutingConventionsRouteOpenGraphAndTwitter = [
    {
        name: 'opengraph-image',
        extension: '.jpg .jpeg .png .gif',
        description: 'Open Graph图片文件'
    },
    {
        name: 'opengraph-image',
        extension: '.js .ts .tsx',
        description: '生成Open Graph图片'
    },
    {
        name: 'Twitter-image',
        extension: '.jpg .jpeg .png .gif',
        description: 'Twitter图片文件'
    },
    {
        name: 'Twitter-image',
        extension: '.js .ts .tsx',
        description: '生成Twitter图片'
    }
];
export const appRoutingConventionsRouteSEOTitle = '#### SEO';
export const appRoutingConventionsRouteSEO = [
    {
        name: 'sitemap',
        extension: '.xml',
        description: 'sitemap文件'
    },
    {
        name: 'sitemap',
        extension: '.js .ts',
        description: '生成sitemap文件'
    },
    {
        name: 'robots',
        extension: '.txt',
        description: 'Robots图片文件'
    },
    {
        name: 'robots',
        extension: '.js .ts',
        description: '生成Robots图片'
    }
];


export const organizingYourProjectTitle = '## 组织你的项目';
export const organizingYourProjectContent1 = 'Next.js 对于如何组织和托管项目文件并没有明确的要求。但它确实提供了一些功能来帮助你组织项目。';
export const organizingYourProjectContent2 = '### 组件层次结构';
export const organizingYourProjectContent3 = '特殊文件中定义的组件按照特定的层次结构进行渲染：';
export const organizingYourProjectContent3List = [
    'layout.js',
    'template.js',
    'error.js (React error boundary)',
    'loading.js (React suspense boundary)',
    'not-found.js (React error boundary)',
    'page.js or nested layout.js'
];
export const organizingYourProjectContent3Img = '![file-conventions-component-hierarchy](/nextjsDoc/projectStructure/file-conventions-component-hierarchy.avif)';
export const organizingYourProjectContent4 = '组件在嵌套路由中以递归方式呈现，这意味着路由段的组件将嵌套在其父段的组件内。';
export const organizingYourProjectContent4Img = '![nested-file-conventions-component-hierarchy](/nextjsDoc/projectStructure/nested-file-conventions-component-hierarchy.avif)';

export const organizingYourProjectContent5 = '### Colocation(主机托管)';
export const organizingYourProjectContent6 = '在 app 目录中，嵌套文件夹定义了路由结构。每个文件夹代表一个路由段，该段映射到 URL 路径中的相应段。'
export const organizingYourProjectContent7 = '然而，即使路由结构是通过文件夹定义的，在将 page.js 或 route.js 文件添加到路由段之前，路由都是不可公开访问的。';
export const organizingYourProjectContent7Img = '![project-organization-not-routable](/nextjsDoc/projectStructure/project-organization-not-routable.avif)';
export const organizingYourProjectContent8 = '并且，即使路由公开可访问，也只有 page.js 或 route.js 返回的内容才会发送到客户端。';
export const organizingYourProjectContent8Img = '![project-organization-routable](/nextjsDoc/projectStructure/project-organization-routable.avif)';
export const organizingYourProjectContent9 = '这意味着项目文件可以安全地放置app目录中的路由段内，而不会意外成为可路由的内容。';
export const organizingYourProjectContent9Img = '![project-organization-colocation](/nextjsDoc/projectStructure/project-organization-colocation.avif)';
export const organizingYourProjectContent9GTK = '虽然您可以将项目文件放在 app 目录下，但这并不是必须的。如果您愿意，也可以将它们放在 app 目录之外。';

export const organizingYourProjectContent10 = '### 私有文件夹';
export const organizingYourProjectContent11 = '可以通过在文件夹前添加下划线来创建私有文件夹：_folderName';
export const organizingYourProjectContent11Img = '![project-organization-private-folders](/nextjsDoc/projectStructure/project-organization-private-folders.avif)';
export const organizingYourProjectContent12 = '由于app目录中的文件默认可以安全地放置，因此私有文件夹并不是强制要求。然而，它们可以用于以下目的：'
export const organizingYourProjectContent12List = [
    '将 UI 逻辑与路由逻辑分开：有助于保持代码的清晰和可维护性。',
    '在整个项目和 Next.js 生态系统中一致地组织内部文件。：促进团队协作和项目结构的一致性。',
    '在代码编辑器中对文件进行排序和分组：提高开发效率，便于快速查找和管理文件。',
    '避免与未来 Next.js 文件约定的潜在命名冲突：确保项目的可扩展性和兼容性。'
];
export const organizingYourProjectContent12GTK = [
    '虽然这不是框架约定，但您也可以考虑使用相同的下划线模式将私有文件夹之外的文件标记为“私有”。',
    '您可以通过在文件夹名称前添加 %5F（下划线的 URL 编码形式）来创建以下划线开头的 URL 段：%5FfolderName。',
    '如果您不使用私有文件夹，了解 Next.js 的特殊文件约定将有助于防止意外的命名冲突。'
];

export const organizingYourProjectContent13 = '### 路由组';
export const organizingYourProjectContent14 = '可以通过将文件夹括在括号中来创建路由组：(文件夹名称)';
export const organizingYourProjectContent15 = '这表示该文件夹用于组织目的，不应包含在路由的 URL 路径中。';
export const organizingYourProjectContent15Img = '![project-organization-route-groups](/nextjsDoc/projectStructure/project-organization-route-groups.avif)';
export const organizingYourProjectContent16 = '路由组适用于：'
export const organizingYourProjectContent16List = [
    '按站点部分、意图或团队组织路由，例如营销页面、管理页面等。',
    '在同一路由段级别启用嵌套布局：',
    ['在同一路由段中创建多个嵌套布局，包括多个根布局',
        '将布局添加到公共路由段中的路由子集']
];

export const organizingYourProjectContent17 = '### src文件夹';
export const organizingYourProjectContent18 = 'Next.js 支持将应用程序代码（包括 app）存储在可选的 [src 文件夹](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder)中。这将应用程序代码与项目配置文件（主要位于项目根目录中）分开。';
export const organizingYourProjectContent18Img = '![project-organization-src-directory](/nextjsDoc/projectStructure/project-organization-src-directory.avif)';

export const projectStructureExamplesTitle = '## 示例';
export const projectStructureExampleContent1 = '以下部分概述了常见的策略。最简单的方法是选择一种适合您和您的团队的策略，并在整个项目中保持一致。';
export const projectStructureExampleContent1GTK = '在下面的示例中，我们使用components和 lib 文件夹作为placeholder，它们的命名没有特殊的框架意义，您的项目可能会使用其他文件夹，如 ui、utils、hooks、styles 等。';
export const projectStructureExampleContent2 = '### 将项目文件存储在app之外';
export const projectStructureExampleContent3 = '此策略将所有应用程序代码存储在项目根目录中的共享文件夹中，并将app目录纯粹用于路由目的。';
export const projectStructureExampleContent3Img = '![project-organization-project-root](/nextjsDoc/projectStructure/project-organization-project-root.avif)';
export const projectStructureExampleContent4 = '### 将项目文件存储在app内的顶级文件夹中';
export const projectStructureExampleContent5 = '此策略将所有应用程序代码存储在app目录顶层中的共享文件夹中。';
export const projectStructureExampleContent6 = '### 按功能或路由拆分项目文件';
export const projectStructureExampleContent7 = '该策略将全局共享的应用程序代码存储在app目录顶层，并将更具体的应用程序代码拆分到使用它们的路由段中。';
export const projectStructureExampleContent7Img = '![project-organization-app-root-split](/nextjsDoc/projectStructure/project-organization-app-root-split.avif)';
export const projectStructureExampleContent8 = '### 组织路由而不影响 URL 路径';
export const projectStructureExampleContent9 = '为了在不影响 URL 的情况下组织路由，请创建一个路由组以将相关路由放在一起。括号中的文件夹将从 URL 中省略（例如，(marketing) 或 (shop)）。';
export const projectStructureExampleContent9Img = '![route-group-organisation](/nextjsDoc/projectStructure/route-group-organisation.avif)';
export const projectStructureExampleContent10 = '尽管 (marketing) 和 (shop) 内的路由共享相同的 URL 层次结构，您也可以通过在其文件夹中添加 layout.js 文件为每个组创建不同的布局。';
export const projectStructureExampleContent10Img = '![route-group-multiple-layouts](/nextjsDoc/projectStructure/route-group-multiple-layouts.avif)';
export const projectStructureExampleContent11 = '### 选择在特定路线上loading skeleton';
export const projectStructureExampleContent12 = '要通过loading.js文件将[loading skeleton](https://nextjs.org/docs/app/api-reference/file-conventions/loading)应用于特定路由，请创建一个新的路由组（例如，/(overview)），然后将loading.tsx移动到该路由组内。';
export const projectStructureExampleContent12Img = '![route-group-loading](/nextjsDoc/projectStructure/route-group-loading.avif)';
export const projectStructureExampleContent13 = '现在，loading.tsx 文件将仅适用于您的Dashboard→overview页面，而不是所有dashboard页面，而不会影响 URL 路径结构。';
export const projectStructureExampleContent14 = '### 创建多个根布局';
export const projectStructureExampleContent15 = '要创建多个根布局，请移除顶层的 layout.js 文件，并在每个路由组内添加一个 layout.js 文件。这对于将应用程序划分为具有完全不同 UI 或experience的部分非常有用。每个根布局都需要添加 <html> 和 <body> 标签。';
export const projectStructureExampleContent15Img = '![route-group-multiple-root-layouts](/nextjsDoc/projectStructure/route-group-multiple-root-layouts.avif)';
export const projectStructureExampleContent16 = '在上面的例子中，（marketing）和（shop）都有自己的根布局。';


