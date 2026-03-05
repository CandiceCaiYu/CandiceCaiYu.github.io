export const title = '# CSS'
export const description1 = 'Next.js 提供了多种使用 CSS 来设置应用程序样式的方法，包括：'
export const description1List = [
    'Tailwind CSS',
    'CSS Modules',
    'Global CSS',
    'External Stylesheets',
    'Sass',
    'CSS-in-JS']

export const tailwindcssTitle = '## Tailwind CSS'
export const tailwindcssContent1 = 'Tailwind CSS 是一个实用性优先的 CSS 框架，它提供底层实用类来构建自定义设计。'
export const tailwindcssContent2 = '安装Tailwind CSS:'
export const tailwindcssContent2Code = `~~~bash~~~
npm install -D tailwindcss @tailwindcss/postcss
`
export const tailwindcssContent3 = '将 PostCSS 插件添加到 postcss.config.mjs 文件中：'
export const tailwindcssContent3Code = `~~~postcss.config.mjs~~~
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`
export const tailwindcssContent4 = '在全局 CSS 文件中导入 Tailwind：'
export const tailwindcssContent4Code = `~~~app/globals.css~~~
@import 'tailwindcss';`
export const tailwindcssContent5 = '将 CSS 文件导入到根布局中：'
export const tailwindcssContent5Code = `~~~app/layout.tsx~~~
import './globals.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`
export const tailwindcssContent6 = '现在你可以在应用程序中开始使用 Tailwind 的实用工具类了：'
export const tailwindcssContent6Code = `~~~app/page.tsx~~~
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  )
}`
export const tailwindcssContent6GTK = '如果您需要对非常老旧的浏览器提供更广泛的支持，请参阅 Tailwind CSS v3 设置说明。'

export const cssModulesTitle = '## CSS Modules'
export const cssModulesContent1 = 'CSS Modules 通过生成唯一的类名来限定 CSS 的作用域。这样，你就可以在不同的文件中使用同一个类，而无需担心命名冲突。'
export const cssModulesContent2 = '要开始使用 CSS Modules，请创建一个扩展名为 .module.css 的新文件，并将其导入到app目录下的任何组件中：'
export const cssModulesContent2Code = `~~~app/blog/blog.module.css~~~
.blog {
  padding: 24px;
}`
export const cssModulesContent3Code = `~~~app/blog/page.tsx~~~
import styles from './blog.module.css'
 
export default function Page() {
  return <main className={styles.blog}></main>
}`

export const globalCSSTitle = '## Global CSS'
export const globalCSSContent1 = '您可以使用Global CSS 在整个应用程序中应用样式。'
export const globalCSSContent2 = '创建 app/global.css 文件，并将其导入到root layout中，以便将样式应用于app中的每个路由：'
export const globalCSSContent2Code = `~~~app/global.css~~~
body {
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}`
export const globalCSSContent3Code = `~~~app/layout.tsx~~~
// These styles apply to every route in the application
import './global.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`
export const globalCSSContent3GTK = '全局样式可以导入到应用目录下的任何布局、页面或组件中。但是，由于 Next.js 使用 React 内置的样式表支持来集成 Suspense，因此在路由切换时，样式表不会被移除，这可能会导致冲突。我们建议使用全局样式来设置真正的全局 CSS（例如 Tailwind 的基础样式），使用 Tailwind CSS 来设置组件样式，并在需要时使用 CSS Modules 来设置自定义作用域的 CSS。'

export const externalStylesheetsTitle = '## External stylesheets'
export const externalStylesheetsContent1 = '外部软件包发布的样式表可以导入到aoo目录中的任何位置，包括位于同一位置的组件：'
export const externalStylesheetsContent1Code = `~~~app/page.tsx~~~
import 'bootstrap/dist/css/bootstrap.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  )
}`
export const externalStylesheetsContent1GTK = '在 React 19 中，也可以使用 `<link rel="stylesheet" href="..." />`。更多信息请参阅 React 链接文档。'

export const orderingAndMergingTitle = '## Ordering and Merging'
export const orderingAndMergingContent1 = 'Next.js 在生产构建过程中通过自动分块（合并）样式表来优化 CSS。CSS 的顺序取决于你在代码中导入样式的顺序。'
export const orderingAndMergingContent2 = '例如，由于 <BaseButton> 是在 page.module.css 之前导入的，因此 base-button.module.css 的排序将高于 page.module.css：'
export const orderingAndMergingContent2Code = `~~~app/page.tsx~~~
import { BaseButton } from './base-button'
import styles from './page.module.css'
 
export default function Page() {
  return <BaseButton className={styles.primary} />
}`
export const orderingAndMergingContent3Code = `~~~app/base-button.module.css~~~
import styles from './base-button.module.css'
 
export function BaseButton() {
  return <button className={styles.primary} />
}`
export const orderingAndMergingContent4 = '### 推荐建议'
export const orderingAndMergingContent5 = '为了保持 CSS 排序的可预测性：'
export const orderingAndMergingContent5List = [
    '尽量将 CSS 导入限制在单个 JavaScript 或 TypeScript 入口文件中。',
    '在应用程序根目录导入全局样式和 Tailwind 样式表。',
    '使用 Tailwind CSS 来满足大多数样式需求，因为它涵盖了常见的设计模式和实用类。',
    '当 Tailwind 的实用类不足以满足需求时，可以使用 CSS Modules 来创建组件特定的样式。',
    '为 CSS 模块使用一致的命名约定。例如，使用 "<name>.module.css" 而不是 "<name>.tsx"。',
    '将共享样式提取到共享组件中，以避免重复导入。',
    '关闭 ESLint 等会自动对导入进行排序的代码检查器或格式化程序（例如 sort-imports）。',
    '您可以使用 next.config.js 中的 cssChunking 选项来控制 CSS 的分块方式。'
]

export const developmentVSProductionTitle = '## Development vs Production'
export const developmentVSProductionContent1List = [
    '在开发环境（next dev）中，CSS 更新会通过快速刷新立即生效。',
    '在生产环境（next build）中，所有 CSS 文件都会自动合并成多个经过压缩和代码分割的 .css 文件，确保每个路由加载的 CSS 文件量最少。',
    '在生产环境中，即使 JavaScript 被禁用，CSS 仍然会加载；但在开发环境中，快速刷新功能需要启用 JavaScript。',
    'CSS 的加载顺序在开发环境中可能有所不同，请务必检查构建版本（next build）以确认最终的 CSS 加载顺序。'
]
