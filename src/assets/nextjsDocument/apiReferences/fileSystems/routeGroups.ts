export const routeGroupsContent1 = '# 路由组(route groups)';
export const routeGroupsContent2 = '路由组是一种文件夹约定，可让您按类别或团队组织路由。';
export const routeGroupsContent3 = '## 约定';
export const routeGroupsContent4 = '可以通过将文件夹名称括在括号中来创建路由组：（folderName）。';
export const routeGroupsContent5 = '此约定表示该文件夹用于组织目的，不应包含在路由的 URL 路径中。';
export const routeGroupsContent5Img = '![project-organization-route-groups](/nextjsDoc/fileSystemConventions/project-organization-route-groups.avif)';
export const routeGroupsContent6 = '## 用例';
export const routeGroupsContent6List = [
    '按团队、关注点或功能组织路由。',
    '定义多个根布局。',
    '选择将特定路由段共享到布局中，同时将其他路由段排除在外。'
];
export const routeGroupsContent7 = '## 注意事项';
export const routeGroupsContent7List = [
    'full page 加载：如果您在使用不同根布局的路由之间导航，则会触发完整页面重新加载。例如，从使用 app/(shop)/layout.js 的 /cart 导航到使用 app/(marketing)/layout.js 的 /blog。这仅适用于多个根布局的情况。',
    '路径冲突：不同组中的路由不应解析为相同的 URL 路径。例如，(marketing)/about/page.js 和 (shop)/about/page.js 都可能解析为 /about，从而导致错误。',
    '顶级根布局：如果您使用多个根布局，但没有顶级 layout.js 文件，请确保您的主路由 (/) 在其中一个路由组中定义，例如 app/(marketing)/page.js。'
];
