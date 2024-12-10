export const title = '# 运行时';
export const content1 = 'Next.js 有两个服务器运行时，您可以在应用程序中使用它们：';
export const content1List = [
    'Node.js 运行时（默认），可以访问生态系统中的所有 Node.js API 和兼容包。',
    'Edge 运行时包含一组更有限的 API。'
];
export const content2 = '## 使用案例';
export const content2List = [
    'Node.js 运行时用于渲染您的应用程序。',
    'Edge 运行时用于中间件（路由规则，如重定向、重写和设置标头(headers)）。'
];
export const content3 = '## 注意事项';
export const content3List = [
    'Edge Runtime 不支持所有 Node.js API。某些软件包可能无法按预期工作。详细了解 Edge Runtime 中不受支持的 API。\n' +
    'Edge Runtime 不支持增量静态再生 (ISR)。',
    '这两种运行时都可以支持流式传输，具体取决于您的部署基础架构。'
];

