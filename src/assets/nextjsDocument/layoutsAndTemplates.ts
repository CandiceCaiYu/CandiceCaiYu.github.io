export const layoutsAndTemplatesTitle = "# 布局和模版";
export const layoutsAndTemplatesDescription = "特殊文件layout.js和 template.js创建的UI可以在路由之间共享。本页面将会引导你如何以及何时用这些特殊文件。";

export const layoutsTitle = "## 布局";
export const layoutsDescription = "一个layout UI可以在多个路由里共享。导航时，layout会保留状态，保持交互性，而且不会重新渲染。Layouts还可以嵌套。";
export const layoutsContent1 = "你可以通过默认导出React组件的layout.js 文件定义一个布局。这个组件在渲染的时候可以接收一个children prop, 然后增加子布局（如果存在） 或者一个页面。";
export const layoutsContent2 = "比如，这个布局（layout.js）将会被共享到/dashboard和/dashboard/setting页面。";
export const layoutsContent2Image = "![layout example](/nextjsDoc/buildingYourApplication/routing/layout-special-file.avif)";
export const layoutsContent2Code = `~~~app/dashboard/layout.tsx

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
 
      {children}
    </section>
  )
}`;

export const rootLayout = "## 根布局（必需）";
export const rootLayoutContent = "根布局定义在app目录下的顶层，然后应到所有路由。根布局必需包含html和body标签，你可以修改从服务器返回的初始的HTML。";
export const rootLayoutContentCode = `~~~app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}`;
export const nestedLayoutTitle = "## 嵌套布局";
export const nestedLayoutContent1 = "默认的，布局在文件夹层次结构里是嵌套的，这意味着它们通过children 属性去包裹子布局。你可以通过在特定的路由段（文件夹）里添加layout.js来嵌套布局。";
export const nestedLayoutContent2 = "比如，要在/dashboard路由下创建布局，请在dashboard文件夹里添加一个新的layout.js文件。";
export const nestedLayoutContent2Image = "![nested layout example](/nextjsDoc/buildingYourApplication/routing/nested-layout.avif)";
export const nestedLayoutContent2Code = `~~~app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}`;
export const nestedLayoutContent3 = "如果你要组合上面两个布局，根布局(app/layout.js)将会包裹住dashboard布局（app/dashboard/layout.js）, 路由段也在根路由段下（app/dashboard/*。";
export const nestedLayoutContent4 = "这两个布局将会嵌套如下:";
export const nestedLayoutContent4Image = "![nested layout example](/nextjsDoc/buildingYourApplication/routing/nested-layouts-ui.avif)";
export const nestedLayoutContentTips = [
    ".js, .jsx, 或者.tsx文件扩展名可以用于Layouts。",
    "只有根布局包含html 和 body标签。",
    "如果将layout.js和page.js定义在同一个文件夹下，这个布局会包裹住这个页面。",
    "Layouts默认是服务器组件，但可以设置为客户端组件。",
    "Layouts可以获取数据，查看Data Fetching了解更多。",
    "不能将父布局及其子组件之间传递数据。不过，你可以在路由里面再请求一次同样的数据，React会自动对请求去重，不会影响性能。",
    "Layouts无法访问pathname(了解更多)。不过你可以引入客户端组件，然后通过它的usePathname钩子访问pathname。",
    "Layouts无法访问子路由段。要访问所有路由段，你可以使用客户端组件的useSelectedLayoutSegment 或 useSelectedLayoutSegments。",
    "你可以使用路由组去选择路由段在或者不在共享布局里。",
    "你可以使用路由组去创建多个根布局，查看示例。",
    "从pages目录迁移过来：根布局（layout.js）会替换掉_app.js和_document.js文件。查看迁移指南。",
];

export const templatesTitle = "# 模版";
export const templatesContent1 = '模版跟布局类似，模版会包裹子布局或者页面，跟布局的跨路由持久化和维持状态不同；在导航的时，模版为每个子项创建新示例。这意味着用户在共享模版的路由间跳转的时，子元素的新示例被挂载，DOM元素被创建，客户端组件里状态不会保留，并且效果会重新同步。';
export const templatesContent2 = "在这些特定的行为下，模版比布局更适合你，比如：";

export const templatesContent2List = [
    "在导航时，重新同步useEffect。", "在导航时，重置子客户端组件的状态。"
];
export const templatesContent3 = "可以通过template.js文件导出默认React组件俩定义模板。该组件应接受children prop";
export const templatesContent3Image = "![template example](/nextjsDoc/buildingYourApplication/routing/template-special-file.avif)";
export const templatesContent3Code = `~~~app/template.tsx

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}`;
export const templatesContent4 = "在嵌套方面，template.js 渲染在布局和其子元素之间。以下是简化的输出：";
export const templatesContent4Code = `~~~Output

<Layout>
  {/* Note that the template is given a unique key. */};
  <Template key={routeParam}>{children}</Template>;
</Layout>`;
export const templatesContentExampleTitle = "## 示例";
export const templatesContentExampleMetadataTitle = "### 元数据";
export const templatesContentExampleMetadataContent1 = "你可以通过Metadata APIs 修改<head>HTML元素，比如title和Meta.";
export const templatesContentExampleMetadataContent2 = "通过在layout.js或page.js文件导出metadata对象或者generateMetadata函数来定义元数据";
export const templatesContentExampleMetadataContent2Code = `~~~app/page.tsx

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return '...'
}`;
export const templatesContentExampleMetadataTips = "你不能手动添加<head>标签到根布局，比如title和meta. 相反的，使用Metadata API 会自动处理高级请求，比如流式传输和对<head>元素去重。";
export const templatesContentExampleMetadataContent3 = "在API参考文档中了解更多元数据可用选项。";


export const activeNavLinkTitle = "### 激活导航链接";
export const activeNavLinkContent1 = "你可以使用usePathname()钩子来决定是否激活一个导航链接。";
export const activeNavLinkContent2 = "由于usePathname()是客户端钩子，你需要将导航链接提取到客户端组件， 该组件可以导入到布局或者模板中：";
export const activeNavLinkContent2Code1 = `~~~app/ui/nav-links.tsx;
 
 'use client';
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname();
 
  return (
    <nav>
      <Link className={\`link \${pathname === '/' ? 'active' : ''}\`} href="/">
        Home
      </Link>
 
      <Link
        className={\`link \${pathname === '/about' ? 'active' : ''}\`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}`;
export const activeNavLinkContent2Code2 = `~~~app/layout.tsx

import { NavLinks } from '@/app/ui/nav-links'
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  )
}`;
