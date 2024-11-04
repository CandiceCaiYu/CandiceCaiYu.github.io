export const title = "# 安装";
export const systemRequirements = "系统要求:";
export const systemRequirementsContent1 = "[Node.js 18.18](https://nodejs.org/) 或更高版本";
export const systemRequirementsContent2 = "支持macOS, Windows (包含 WSL), 和 Linux 。";

export const automaticInstallation = "## 自动安装";
export const automaticInstallationContent1 = "我们推荐使用[create-next-app](/docs/app/api-reference/cli/create-next-app)开始一个Next.js的应用程序， 它会自动把所有东西都给你安装好。要创建一个项目，请运行：";
export const automaticInstallationContent2 = `~~~npx create-next-app@latest`;
export const automaticInstallationContent3 = "安装时，你可以看到以下提示：";
export const automaticInstallationContent3_1 = `~~~What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for \`next dev\`?  No / Yes
Would you like to customize the import alias (\`@/*\` by default)? No / Yes
What import alias would you like configured? @/*`;
export const automaticInstallationContent4 = "提示后，create-next-app会创建一个以你项目名称命名的文件夹并安装需要的依赖。";
export const automaticInstallationContent5 = "如果你是一个Next.js新手， 可以查看一下项目结构文挡，了解应用程序中所有可能用到的文件和文件夹。";
export const automaticInstallationGoodToKnownTitle = "值得了解：";
export const automaticInstallationGoodToKnownContent1 = "Next.js现在默认附带TypeScript, ESLint, 和 Tailwind CSS配置。";
export const automaticInstallationGoodToKnownContent2 = "你可以选择项目的根目录上的src目录来区分应用程序代码和配置文件代码。";

export const manualInstallation = "## 手动安装";
export const manualInstallationContent1 = "要手动创建一个新的Next.js应用程序，请安装所需的依赖包：";
export const manualInstallationContent2 = "~~~npm install next@latest react@latest react-dom@latest";
export const manualInstallationContent3 = "打开你的package.json文件并添加以下脚本:";
export const manualInstallationContent4 = `~~~{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    }
}`
;
export const manualInstallationContent5 = "这些脚本指的是开发一个应用程序的不同阶段:";
export const manualInstallationContent6 = "dev： 运行run dev， 在开发模式下启动Next.js。";
export const manualInstallationContent7 = "build： 运行run build， 构建一个应用程序给生产用。";
export const manualInstallationContent8 = "start： 运行run start，启动一个Next.js生产服务器。";
export const manualInstallationContent9 = "lint: 运行run lint， 设置Next.js的内置eslint 配置。";

export const createDirectories = "### 创建目录";
export const createDirectoriesContent1 = "Next.js使用文件系统路由，这意味着你应用程序的路由是由你文件结构决定的。";
export const createDirectoriesContent2 = "#### app目录";
export const createDirectoriesContent3 = "对于新的应用程序，我们推荐使用应用程序路由器。这个路由器可以让你使用react最新的功能，并且它是基于社区反馈的页面路由器的进阶版。";
export const createDirectoriesContent4 = "创建一个app/文件夹，然后添加layout.tsx和page.tsx文件。当用户访问这个应用程序根目录（/）时会渲染这些文件.";
export const createDirectoriesContent4_image = '![app目录结构](/nextjsDoc/installation/app-getting-started-installation.avif)';
export const createDirectoriesContent5 = "在app/layout.tsx里创建根布局， 并添加所需的<html>和<body>标签:";
export const createDirectoriesContent5_code = `~~~export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`;
export const createDirectoriesContent6 = "最后，创建一个主页app/CustomSection.tsx，其中包含一些初始内容:";
export const createDirectoriesContent6_code = `~~~export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`;
export const createDirectoriesContent8 = "如果你忘记创建layout.tsx，当运行next dev，启动开发服务器时 Next.js会自动创建这个文件。 ";
export const createDirectoriesContent9 = "学习更多应用程序路由器。";
export const createDirectoriesContent10 = "### pages目录（可选）";
export const createDirectoriesContent11 = "如果你更喜欢使用Pages路由器, 而不是App路由器，你可以在项目的根目录创建一个pages/目录。";
export const createDirectoriesContent12 = "然后，在你的pages文件夹里添加一个index.tsx文件，这将是你的主页（/）：";
export const createDirectoriesContent12_code = `~~~export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`;
export const createDirectoriesContent13 = "接下来，在pages/里添加_app.tsx文件去定义全局布局。了解更多关于自定义应用程序文件。";
export const createDirectoriesContent13_code = `~~~import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}`;
export const createDirectoriesContent14 = "最后，在pages/里添加一个_document.tsx文件去控制从服务器来的初始响应。了解更多关于自定义文档文件。";
export const createDirectoriesContent14_code = `~~~import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}`;
export const createDirectoriesContent15 = "了解更多关于使用页面路由器。";
export const createDirectoriesContent17 = "尽管你可以在同一个项目中使用两种路由器，应用程序的路由器优先级高于页面。我们还是推荐你在新项目中只使用一种路由，避免产生混淆。";
export const createDirectoriesContent18 = "### 公共文件夹（可选）";
export const createDirectoriesContent19 = "创建一个public文件夹去存放静态资源，比如图片，字体等。你的代码可以从基本路由（/）开始引用公共目录中的文件。";
export const createDirectoriesContent20 = "比如test.png存放在public/common/test.png, 你在代码中引入的时候可以这样写：/common/test.png。";
export const runDevelopmentServerTitle = "## 运行开发服务器";
export const runDevelopmentServerContent1 = "执行npm run dev，启动开发服务器";
export const runDevelopmentServerContent2 = "访问http://localhost:3000，查看你的应用程序";
export const runDevelopmentServerContent3 = "编辑app/CustomSection.tsx (或者 pages/index.tsx) 文件并保存它，再在浏览器查看更新后的结果。";
