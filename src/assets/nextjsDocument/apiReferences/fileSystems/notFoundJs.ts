export const notFoundJsTitle = '# not-found.js'
export const notFoundJsDescription1 = 'Next.js 提供了两种约定来处理未找到的情况：'
export const notFoundJsDescription1List = [
    'not-found.js：在路由段中调用 notFound 函数时使用。',
    'global-not-found.js：用于为整个应用中不匹配的路由定义一个全局的 404 页面。该页面在路由级别处理，不依赖于布局或页面的渲染。'
]
export const notFoundJsContent2 = '## not-found.js'
export const notFoundJsContent3 = '当路由段中抛出 notFound 函数时，not-found 文件用于渲染 UI。除了提供自定义 UI 之外，Next.js 还会为流式响应返回 200 HTTP 状态代码，为非流式响应返回 404。'
export const notFoundJsContent3Code = `~~~app/not-found.tsx~~~
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}`
export const notFoundJsContent4 = '## global-not-found.js (实验性)'
export const notFoundJsContent5 = 'global-not-found.js 文件允许您为整个应用程序定义一个 404 页面。与在路由级别工作的 not-found.js 不同，此文件用于请求的 URL 与任何路由都不匹配的情况。Next.js 会跳过渲染并直接返回此全局页面。'
export const notFoundJsContent6 = 'global-not-found.js 文件会绕过应用程序的正常渲染，这意味着您需要导入 404 页面所需的任何全局样式、字体或其他依赖项。'
export const notFoundJsContent6GTK = '较小版本的全局样式和更简单的字体系列可以提高此页面的性能。'
export const notFoundJsContent7 = '当你无法使用 layout.js 和 not-found.js 的组合构建 404 页面时，global-not-found.js 非常有用。这种情况可能发生在以下两种情况下：'
export const notFoundJsContent7List = [
    '您的应用有多个根布局（例如 app/(admin)/layout.tsx 和 app/(shop)/layout.tsx），因此没有单一布局可用于编写全局 404 错误代码。',
    '您的根布局是使用顶级动态段定义的（例如 app/[country]/layout.tsx），这使得编写一致的 404 页面变得更加困难。'
]
export const notFoundJsContent8 = '要启用它，请在 next.config.ts 中添加 globalNotFound 标志：'
export const notFoundJsContent8Code = `~~~next.config.ts~~~
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
}
 
export default nextConfig
`
export const notFoundJsContent9 = '与 not-found.js 不同，此文件必须返回完整的 HTML 文档，包括 <html> 和 <body> 标签。'

export const notFoundJsContent10 = '## 参考'
export const notFoundJsContent11 = '### Props'
export const notFoundJsContent12 = 'not-found.js 或 global-not-found.js 组件不接受任何 props。'
export const notFoundJsContent12GTK = '除了捕获预期的 notFound() 错误之外，根文件 app/not-found.js 和 app/global-not-found.js 还会处理整个应用内所有不匹配的 URL。这意味着，如果用户访问的是应用未处理的 URL，则会显示导出的 UI。'
export const notFoundJsContent13 = '## 示例'
export const notFoundJsContent14 = '### Data Fetching'
export const notFoundJsContent15 = '默认情况下，not-found 是一个服务器组件。你可以将其标记为异步，以便获取并显示数据：'
export const notFoundJsContent15Code = `~~~app/not-found.tsx~~~
import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}`
export const notFoundJsContent16 = '如果您需要使用客户端组件hook（如 usePathname）根据路径显示内容，则必须在客户端获取数据。'
export const notFoundJsContent17 = '### Metadata'
export const notFoundJsContent18 = '对于 global-not-found.js，您可以导出元数据对象或 generateMetadata 函数来自定义 404 页面的 <title>、<meta> 和其他 head 标签：'
export const notFoundJsContent18GTK = 'Next.js 会自动为返回 404 状态代码的页面注入 <meta name="robots" content="noindex" />，包括 global-not-found.js 页面。'
export const notFoundJsContent18Code = `~~~app/global-not-found.tsx~~~
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </body>
    </html>
  )
}`
