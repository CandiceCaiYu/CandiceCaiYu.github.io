export const routeGroupsTitle = "# 路由组";
export const routeGroupsContent1 = "在app目录中，嵌套文件夹通常会映射到 URL 路径。但是，您可以将文件夹标记为路由组，以防止该文件夹包含在路由的 URL 路径中。";
export const routeGroupsContent2 = "这使得您可以将路由段和项目文件组织成逻辑组，而不会影响 URL 路径结构。";
export const routeGroupsContent3 = "路由组适用于：";
export const routeGroupsContent3List = [
    "将路由组织成组，例如按站点部分、意图或团队。",
    "在同一路由段级别启用嵌套布局：",
    ["在同一段中创建多个嵌套布局，包括多个根布局",
        "将布局添加到公共段中的路由子集",],
    "将加载骨架添加到公共段中的特定路由",
];
export const routeGroupsContent4 = "## 约定";
export const routeGroupsContent5 = "可以通过将文件夹名称括在括号中来创建路由组：（文件夹名称）";
export const routeGroupsContent6 = "## 示例";
export const routeGroupsContent7 = "### 在不影响 URL 路径的情况下组织路由";
export const routeGroupsContent8 = "若要在不影响 URL 的情况下组织路由，请创建一个组以将相关路由放在一起。括号中的文件夹将从 URL 中省略（例如 (marketing) 或 (shop)。";
export const routeGroupsContent8Image = '![route-group-organisation](/nextjsDoc/buildingYourApplication/routing/route-group-organisation.avif)';
export const routeGroupsContent9 = "尽管 (marketing) 和 (shop) 内的路由共享相同的 URL 层次结构，您也可以通过在其文件夹中添加 layout.js 文件为每个组创建不同的布局。";
export const routeGroupsContent9Image = '![route-group-multiple-layouts](/nextjsDoc/buildingYourApplication/routing/route-group-multiple-layouts.avif)';

export const routeGroupsContent10 = "### 将特定路段选入布局";
export const routeGroupsContent11 = "要将特定路由选入布局，请创建一个新的路由组（例如（商店）），并将共享相同布局的路由移入该组（例如帐户和购物车）。组外的路由不会共享布局（例如结帐）。";

export const routeGroupsContent11Image = '![route-group-opt-in-layouts](/nextjsDoc/buildingYourApplication/routing/route-group-opt-in-layouts.avif)';
export const routeGroupsContent12 = "### 选择在特定路由上加载骨架";
export const routeGroupsContent13 = "要通过 loading.js 文件将加载骨架应用于特定路由，请创建一个新的路由组（例如 /(overview)），然后将您的 loading.tsx 移动到该路由组内。";
export const routeGroupsContent13Image = '![route-group-loading](/nextjsDoc/buildingYourApplication/routing/route-group-loading.avif)';

export const routeGroupsContent14 = "现在，loading.tsx 文件将仅适用于您的仪表板→概览页面，而不是所有仪表板页面，而不会影响 URL 路径结构。";
export const routeGroupsContent15 = "### 创建多个根布局";
export const routeGroupsContent16 = "要创建多个根布局，请删除顶层 layout.js 文件，并在每个路由组内添加一个 layout.js 文件。这对于将应用程序划分为具有完全不同 UI 或体验的部分非常有用。需要将 <html> 和 <body> 标签添加到每个根布局。";
export const routeGroupsContent16Image = '![route-group-multiple-root-layouts](/nextjsDoc/buildingYourApplication/routing/route-group-multiple-root-layouts.avif)';

export const routeGroupsContent17 = "在上面的例子中，(marketing) 和 (shop) 都有自己的根布局。";
export const routeGroupsContentTips = [
    "路由组的命名除了组织之外没有其他特殊意义。它们不会影响 URL 路径。",
    "包含路由组的路由不应解析为与其他路由相同的 URL 路径。例如，由于路由组不影响 URL 结构，因此 (marketing)/about/page.js 和 (shop)/about/page.js 都将解析为 /about 并导致错误。",
    "如果您使用多个根布局而没有顶级 layout.js 文件，则您的主页 page.js 文件应在其中一个路由组中定义，例如：app/(marketing)/page.js。",
    "跨多个根布局导航将导致整页加载（而不是客户端导航）。例如，从使用 app/(shop)/layout.js 的 /cart 导航到使用 app/(marketing)/layout.js 的 /blog 将导致整页加载。这仅适用于多个根布局。"
];
