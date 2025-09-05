export const srcContent1 = '# src文件夹';
export const srcContent2 = '除了将 Next.js app 或 pages 目录放在项目根目录中之外，Next.js 还支持将应用程序代码放置在 src 文件夹下的常见模式。';
export const srcContent3 = '这将应用程序代码与项目配置文件（通常位于项目根目录中）分开，这也是一些个人和团队的偏好做法。';
export const srcContent4 = '要使用 src 文件夹，请将 app 路由器文件夹或 pages 路由器文件夹分别移动到 src/app 或 src/pages。';
export const srcContent4Img = '![project-organization-src-directory](/nextjsDoc/fileSystemConventions/project-organization-src-directory.avif)';
export const srcContent4GTK = [
    '/public 目录应保留在项目的根目录中。',
    '配置文件（例如 package.json、next.config.js 和 tsconfig.json）应保留在项目的根目录中。',
    '.env.* 文件应保留在项目的根目录中。',
    '如果 app 或 pages 位于根目录中，则 src/app 或 src/pages 将被忽略。',
    '如果您使用 src，您可能还会移动其他应用程序文件夹，例如 /components 或 /lib。',
    '如果您使用Middleware，请确保将其放置在 src 文件夹中。',
    '如果您使用 Tailwind CSS，则需要在内容部分中的 tailwind.config.js 文件中添加 /src 前缀。',
    '如果您使用 TypeScript 路径进行导入（例如 @/*），则应更新 tsconfig.json 中的路径对象以包含 src/。'
];
