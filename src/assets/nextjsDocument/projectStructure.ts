export const title = 'Next.js项目结构';
export const projectStructureDescription1 = '这个页面是对Next.js应用程序项目结构的概览。它涵盖了在app 和 pages 目录中的顶层文件和文件夹，配置文件和路由约定。';
export const projectStructureDescription2 = '点击文件或者文件夹名可以了解更多约定信息。';

export const topLevelFoldersTitle = '顶层文件夹';
export const topLevelFoldersDescription = '这些文件夹是Next.js应用程序的顶层文件夹。';
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

export const topLevelFilesTitle = '顶层文件';
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

export const appRoutingConventions = "app路由约定";
export const appRoutingConventionsDescription = "以下文件约定是用来定义路由和处理app路由器元数据的。";
export const appRoutingConventionsRoutingFilesTitle = '路由文件';
export const appRoutingConventionsRoutingFiles = [
    {
        name: 'layout',
        description: '布局'
    },
    {
        name: 'page',
        description: '页面'
    },
    {
        name: 'loading',
        description: '加载的界面'
    },
    {
        name: 'not-found',
        description: '未找到界面'
    }, {
        name: 'error',
        description: '错误界面'
    }, {
        name: 'global-error',
        description: '全局的错误界面'
    }, {
        name: 'route',
        description: 'API端点'
    }, {
        name: 'template',
        description: '重新渲染布局'
    }, {
        name: 'default',
        description: '并行路由回退页面'
    }
];
export const appRoutingConventionsNestedRoutesTitle = '嵌套路由';
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
export const appRoutingConventionsDynamicRoutesTitle = '动态路由';
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
export const appRoutingConventionsGroupAndPrivateRoutesTitle = "路由组和私有路由";
export const appRoutingConventionsGroupAndPrivateRoutes = [
    {
        name: '(folder)',
        description: '不影响路由的分组路由'
    },
    {
        name: '_folder',
        description: '选择路由外的所有路由和子路由'
    }
];
export const appRoutingConventionsParallelAndInterceptedRoutesTitle = '并行和拦截路由';
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
export const appRoutingConventionsRouteMetadataTitle = '元数据文件约定';
export const appRoutingConventionsRouteMetadataAppIconTitle = '应用程序图标';
export const appRoutingConventionsRouteMetadataAppIcon = [
    {
        name: 'favicon',
        description: '网站图标'
    },
    {
        name: 'icon',
        description: '应用程序图标文件'
    }
];

export const pageRoutingConventions = '页面路由约定';
export const pageRoutingConventionsDescription = '以下文件约定是用来定义页面Page路由器的路由的';
export const pageRoutingConventionsSpecialFileTitle = '特殊文件';
export const pageRoutingConventionsSpecialFiles = [
    {
        name: '_app',
        description: '自定义App组件'
    },
    {
        name: '_document',
        description: '自定义文档组件'
    },
    {
        name: '_error',
        description: '自定义错误组件'
    },
    {
        name: '_404',
        description: '404组件'
    },
    {
        name: '_500',
        description: '500组件'
    }
];
export const pageRoutingConventionsRoutesTitle = '路由';
export const pageRoutingConventionsRoutesFolderConventions = '文件夹约定';
export const pageRoutingConventionsRoutesFileConventions = '文件约定';
export const pageRoutingConventionsRoutesFolders = [
    {
        name: 'index',
        description: '主页页面'
    },
    {
        name: 'folder/index',
        description: '嵌套页面'
    },
];
export const pageRoutingConventionsRoutesFiles = [
    {
        name: 'index',
        description: '主页页面'
    },
    {
        name: 'file/index',
        description: '嵌套页面'
    },
];
export const pageRoutingConventionsRoutesDynamicTitle = "动态路由";
export const pageRoutingConventionsRoutesDynamicFolders = [
    {
        name: '[folder]/index',
        description: '动态路由段'
    },
    {
        name: '[...folder]/index',
        description: '全部捕获路由段'
    },
    {
        name: '[[...folder]]/index',
        description: '可选的全部捕获路由段'
    }
];
export const pageRoutingConventionsRoutesDynamicFiles = [
    {
        name: '[file]',
        description: '动态路由段'
    },
    {
        name: '[...file]',
        description: '全部捕获路由段'
    },
    {
        name: '[[...file]]',
        description: '可选的全部捕获路由段'
    }
];
