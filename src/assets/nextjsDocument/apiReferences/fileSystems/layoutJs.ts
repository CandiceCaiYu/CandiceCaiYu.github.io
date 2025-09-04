export const layoutJsContent1 = '# layout.js'
export const layoutJsContent2 = 'layout文件用于定义 Next.js 应用程序中的布局。'
export const layoutJsContent2Code = `~~~app/dashboard/layout.tsx~~~
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}`
export const layoutJsContent3 = '根布局是应用根目录中最顶层的布局。它用于定义 <html> 和 <body> 标签以及其他全局共享的 UI。'
export const layoutJsContent3Code = `~~~app/layout.tsx~~~
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
export const layoutJsContent4 = '## 参考'
export const layoutJsContent5 = '### Props'
export const layoutJsContent6 = '#### children（必填）'
export const layoutJsContent7 = 'Layout组件应该接受并使用 children 属性。在渲染过程中，布局所包裹的路由段将被填充到子组件中。这些路由段主要是子布局（如果存在）或page组件，但也可能是其他特殊文件，例如“Loading”或“Error”（如适用）。'
export const layoutJsContent8 = '#### params（可选）'
export const layoutJsContent9 = '一个promise，解析为一个对象，该对象包含从根段到该布局的动态路由参数对象。'
export const layoutJsContent9Code = `~~~app/dashboard/[team]/layout.tsx~~~
export default async function Layout({
  children
  params,
}: {
  children: React.ReactNode
  params: Promise<{ team: string }>
}) {
  const { team } = await params
}`
export const layoutJsContent9TableColumn = [
    {title: 'Example Route', key: 'route', dataIndex: 'route'},
    {title: 'URL', key: 'url', dataIndex: 'url'},
    {title: 'params', key: 'params', dataIndex: 'params'},
]
export const layoutJsContent9TableData = [
    {route: 'app/dashboard/[team]/layout.tsx', url: '/dashboard/1', params: "Promise<{ team: '1' }>"},
    {route: 'app/shop/[tag]/[item]/layout.js', url: '/shop/1/2', params: "Promise<{ tag: '1', item: '2' }>"},
    {route: 'app/blog/[...slug]/layout.js', url: '/blog/1/2', params: "Promise<{ slug: ['1', '2'] }>"}
]
export const layoutJsContent9List = [
    '由于 params 属性是一个 Promise，因此您必须使用 async/await 或 React 的 use 函数来访问其值。',
    ['在 14 及更早版本中，params 是一个同步属性。为了实现向后兼容，您仍然可以在 Next.js 15 中以同步方式访问它，但此行为将来会被弃用。']
]
export const layoutJsContent10 = '### Layout Props Helper'
export const layoutJsContent11 = '您可以使用 LayoutProps 来定义布局类型，从而获取从目录结构推断出的强类型参数和命名插槽。LayoutProps 是一个全局可用的辅助函数。'
export const layoutJsContent11Code = `~~~app/dashboard/layout.tsx~~~
export default function Layout(props: LayoutProps<'/dashboard'>) {
  return (
    <section>
      {props.children}
      {/* If you have app/dashboard/@analytics, it appears as a typed slot: */}
      {/* {props.analytics} */}
    </section>
  )
}`
export const layoutJsContent11GTK = '类型是在next dev, next build或next typegen期间生成的。'
export const layoutJsContent12 = '### Root Layout'
export const layoutJsContent13 = '应用目录必须包含一个根布局，它是应用根目录中最顶层的布局。通常，根布局是 app/layout.js。'
export const layoutJsContent13Code = `~~~app/layout.tsx~~~
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}`
export const layoutJsContent13List = [
    '根布局必须定义 <html> 和 <body> 标签。',
    ['您不应手动将 <head> 标签（例如 <title> 和 <meta>）添加到根布局。您应该使用 Metadata API，它可以自动处理高级需求，例如流式传输和重复元素删除。',],
    '您可以使用路由组创建多个根布局。',
    ['跨多个根布局导航将导致完整页面加载（与客户端导航不同）。例如，从使用 app/(shop)/layout.js 的 /cart 导航到使用 app/(marketing)/layout.js 的 /blog 将导致完整页面加载。这仅适用于多个根布局。'],
    '根布局可以位于动态段下，例如使用 app/[lang]/layout.js 实现国际化时。'
]
export const layoutJsContent14 = '## 注意事项'
export const layoutJsContent15 = '### 请求对象'
export const layoutJsContent16 = '导航期间Layout会缓存在客户端中，以避免不必要的服务器请求。'
export const layoutJsContent17 = 'Layout不会重新渲染。它们可以被缓存并重复使用，以避免在页面之间导航时进行不必要的计算。通过限制布局访问原始请求，Next.js 可以防止在布局中执行可能速度缓慢或开销巨大的用户代码，从而避免对性能产生负面影响。'
export const layoutJsContent18 = '要访问请求对象，您可以使用服务器组件和函数中的标头和 cookie API。'
export const layoutJsContent18Code = `~~~app/shop/layout.tsx~~~
import { cookies } from 'next/headers'
 
export default async function Layout({ children }) {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  return '...'
}`
export const layoutJsContent19 = '### 查询参数'
export const layoutJsContent20 = '布局在导航时不会重新渲染，因此它们无法访问可能会变得过时的搜索参数'
export const layoutJsContent21 = '要访问更新的查询参数，您可以使用页面的 searchParams 属性，或使用 useSearchParams hook在客户端组件中读取它们。由于客户端组件会在导航时重新渲染，因此它们可以访问最新的查询参数。'
export const layoutJsContent21Code = `~~~app/ui/search.tsx~~~
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function Search() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  return '...'
}`
export const layoutJsContent22Code = `~~~app/shop/layout.tsx~~~
import Search from '@/app/ui/search'
 
export default function Layout({ children }) {
  return (
    <>
      <Search />
      {children}
    </>
  )
}`
export const layoutJsContent23 = '### 路径名'
export const layoutJsContent24 = 'Layout不会在导航时重新渲染，因此它们不会访问可能会变得陈旧的路径名。'
export const layoutJsContent25 = '要访问当前路径名，您可以使用 usePathname hook在客户端组件内部读取它。由于客户端组件在导航期间会重新渲染，因此它们可以访问最新的路径名。'
export const layoutJsContent25Code = `~~~app/ui/breadcrumbs.tsx~~~
'use client'
 
import { usePathname } from 'next/navigation'
 
// Simplified breadcrumbs logic
export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/')
 
  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {' > '}
          {segment}
        </span>
      ))}
    </nav>
  )
}`
export const layoutJsContent26Code = `~~~app/docs/layout.tsx~~~
import { Breadcrumbs } from '@/app/ui/Breadcrumbs'
 
export default function Layout({ children }) {
  return (
    <>
      <Breadcrumbs />
      <main>{children}</main>
    </>
  )
}`
export const layoutJsContent27 = '### 获取数据'
export const layoutJsContent28 = 'Layout无法将数据传递给其子项。但是，您可以在路由中多次获取相同的数据，并使用 React 缓存来消除请求重复，而不会影响性能。'
export const layoutJsContent29 = '或者，当使用 fetchin Next.js 时，请求会自动删除重复数据。'
export const layoutJsContent29Code = `~~~app/lib/data.ts~~~
export async function getUser(id: string) {
  const res = await fetch(\`https://.../users/\${id}\`)
  return res.json()
}`
export const layoutJsContent30Code = `~~~app/dashboard/layout.tsx~~~
import { getUser } from '@/app/lib/data'
import { UserName } from '@/app/ui/user-name'
 
export default async function Layout({ children }) {
  const user = await getUser('1')
 
  return (
    <>
      <nav>
        {/* ... */}
        <UserName user={user.name} />
      </nav>
      {children}
    </>
  )
}`
export const layoutJsContentCode31Code = `~~~app/dashboard/page.tsx~~~
import { getUser } from '@/app/lib/data'
import { UserName } from '@/app/ui/user-name'
 
export default async function Page() {
  const user = await getUser('1')
 
  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  )
}`
export const layoutJsContent32 = '### 访问child segments'
export const layoutJsContent33 = '布局无法访问其下方的路由段。要访问所有路由段，您可以在客户端组件中使用 useSelectedLayoutSegment 或 useSelectedLayoutSegments。'
export const layoutJsContent33Code = `~~~app/ui/nav-link.tsx~~~
'use client'
 
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function NavLink({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = slug === segment
 
  return (
    <Link
      href={\`/blog/\${slug}\`}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </Link>
  )
}`
export const layoutJsContentCode34Code = `~~~app/blog/layout.tsx~~~
import { NavLink } from './nav-link'
import getPosts from './get-posts'
 
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const featuredPosts = await getPosts()
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <NavLink slug={post.slug}>{post.title}</NavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  )
}`
export const layoutJsContent35 = '## 示例'
export const layoutJsContent36 = '### Metadata'
export const layoutJsContent37 = '您可以使用metadata对象或generateMetadata函数修改<head> HTML元素，例如title和meta。'
export const layoutJsContent37Code = `~~~app/layout.tsx~~~
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return '...'
}`
export const layoutJsContent37GTK = '您不应手动将 <head> 标签（例如 <title> 和 <meta>）添加到根布局。相反，请使用metadata API，它可以自动处理高级需求，例如流式传输和删除重复的 <head> 元素。'
export const layoutJsContent38 = '### Active Nav Links'
export const layoutJsContent39 = '您可以使用 usePathname hook来确定导航链接是否处于活动状态。'
export const layoutJsContent40 = '由于 usePathname 是一个客户端hook，您需要将导航链接提取到客户端组件中，然后将其导入到您的Layout中：'
export const layoutJsContent40Code = `~~~app/ui/nav-link.tsx~~~
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
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
}`
export const layoutJsContent41Code = `~~~app/layout.tsx~~~
import { NavLinks } from '@/app/ui/nav-links'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  )
}`
export const layoutJsContent42 = '### 根据参数显示内容'
export const layoutJsContent43 = '使用动态路由段，您可以根据 params 属性显示或获取特定内容。'
export const layoutJsContent43Code = `~~~app/dashboard/layout.tsx~~~
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ team: string }>
}) {
  const { team } = await params
 
  return (
    <section>
      <header>
        <h1>Welcome to {team}'s Dashboard</h1>
      </header>
      <main>{children}</main>
    </section>
  )
}`
export const layoutJsContent44 = '### 在客户端组件中读取params'
export const layoutJsContent45 = '要在客户端组件（不能异步）中使用参数，您可以使用 React 的 use 函数来读取promise：'
export const layoutJsContent45Code = `~~~app/page.tsx~~~
'use client'
 
import { use } from 'react'
 
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
}`
