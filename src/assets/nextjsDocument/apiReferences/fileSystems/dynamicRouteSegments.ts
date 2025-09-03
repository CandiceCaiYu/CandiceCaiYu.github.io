export const title = '# 动态路由段'
export const description = '当您事先不知道确切的路由段名称并想从动态数据创建路由时，您可以使用在请求时填写或在构建时预渲染的动态路由段。'
export const dynamicRouteSegmentsContent1 = '## 约定'
export const dynamicRouteSegmentsContent2 = '可以通过将文件夹名称括在方括号中来创建动态路由：[folderName]。例如，博客可以包含以下路由：app/blog/[slug]/page.js，其中 [slug] 是博客文章的动态路由。'
export const dynamicRouteSegmentsContent2Code = `~~~app/blog/[slug]/page.tsx~~~
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}`
export const dynamicRouteSegmentsContent3 = '动态段作为 params 属性传递给layout, page, route, 和 generateMetadata 函数。'
export const dynamicRouteSegmentsContent3TableColumn = [
    {title: 'Route', key: 'route', dataIndex: 'route'},
    {title: 'Example URL', key: 'exampleURL', dataIndex: 'exampleURL'},
    {title: 'params', key: 'params', dataIndex: 'params'},
]
export const dynamicRouteSegmentsContent3TableDataSource = [
    {route: 'app/blog/[slug]/page.js', exampleURL: '/blog/a', params: "{slug: 'a'}"},
    {route: 'app/blog/[slug]/page.js', exampleURL: '/blog/b', params: "{slug: 'b'}"}
]
export const dynamicRouteSegmentsContent4 = '### 在客户端组件中'
export const dynamicRouteSegmentsContent5 = '在客户端组件页面中，可以使用use hook访问来自 props 的动态段。'
export const dynamicRouteSegmentsContent5Code = `~~~app/blog/[slug]/page.tsx~~~
'use client'
import { use } from 'react'
 
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
 
  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}`
export const dynamicRouteSegmentsContent6 = '或者，客户端组件可以使用 useParams hook来访问客户端组件树中任何位置的params。'
export const dynamicRouteSegmentsContent7 = '### Catch-all Segments'
export const dynamicRouteSegmentsContent8 = '通过在括号 [...folderName] 内添加省略号，可以将动态段扩展为捕获所有后续段。'
export const dynamicRouteSegmentsContent9 = '例如，app/shop/[...slug]/page.js 将匹配 /shop/clothes，还会匹配 /shop/clothes/tops、/shop/clothes/tops/t-shirts 等等。'
export const dynamicRouteSegmentsContent9TableDataSource = [
    {route: 'app/blog/[...slug]/page.js', exampleURL: '/blog/a', params: "{slug: 'a'}"},
    {route: 'app/blog/[...slug]/page.js', exampleURL: '/blog/a/b', params: "{slug: ['a', 'b']}"}
]
export const dynamicRouteSegmentsContent10 = '### (可选)Catch-all Segments'
export const dynamicRouteSegmentsContent11 = '通过将参数包含在双方括号中，可以使 Catch-all 段成为可选项：[[...folderName]]。'
export const dynamicRouteSegmentsContent12 = '例如，app/shop/[[...slug]]/page.js 除了匹配 /shop/clothes、/shop/clothes/tops、/shop/clothes/tops/t-shirts 之外，还会匹配 /shop。'
export const dynamicRouteSegmentsContent13 = 'catch-all 段和可选 catch-all 段之间的区别在于，如果是可选的，则不带参数的路由也会匹配（上面示例中的 /shop）。'
export const dynamicRouteSegmentsContent13TableDataSource = [
    {route: 'app/blog/[[...slug]]/page.js', exampleURL: '/blog', params: "{slug: undefined}"},
    {route: 'app/blog/[[...slug]]/page.js', exampleURL: '/blog/a', params: "{slug: 'a'}"},
    {route: 'app/blog/[[...slug]]/page.js', exampleURL: '/blog/a/b', params: "{slug: ['a', 'b']}"}
]
export const dynamicRouteSegmentsContent14 = '### TypeScript'
export const dynamicRouteSegmentsContent15 = "使用 TypeScript 时，您可以根据配置的路由段为参数添加类型 - 使用 PageProps<'/route'>、LayoutProps<'/route'> 或 RouteContext<'/route'> 分别在page、layout和route中输入参数。"
export const dynamicRouteSegmentsContent15TableColumn = [
    {title: 'Route', key: 'route', dataIndex: 'route'},
    {title: 'params 类型定义', key: 'params', dataIndex: 'params'},
]
export const dynamicRouteSegmentsContent15TableDataSource = [
    {route: 'app/blog/[slug]/page.tsx', params: '{ slug: string }'},
    {route: 'app/blog/[...slug]/page.js', params: '{ slug: string[] }'},
    {route: 'app/blog/[[...slug]]/page.js', params: '{ slug?: string[] }'},
    {route: 'app/[categoryId]/[itemId]/page.js', params: '{ categoryId: string, itemId: string }'}
]
export const dynamicRouteSegmentsContent16 = '## 行为'
export const dynamicRouteSegmentsContent16List = [
    '由于 params 属性是一个 Promise，因此您必须使用 async/await 或 React 的 use 函数来访问其值。',
    ['在 14 及更早版本中，params 是一个同步属性。为了实现向后兼容，您仍然可以在 Next.js 15 中以同步方式访问它，但此行为将来会被弃用。']
]
export const dynamicRouteSegmentsContent17 = '## 示例'
export const dynamicRouteSegmentsContent18 = '### 使用 generateStaticParams'
export const dynamicRouteSegmentsContent19 = 'generateStaticParams 函数可用于在构建时静态生成路由，而不是在请求时按需生成。'
export const dynamicRouteSegmentsContent19Code = `~~~app/blog/[slug]/page.tsx~~~
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}`
export const dynamicRouteSegmentsContent20 = '在 generateStaticParams 函数中使用 fetch 时，请求会自动去重。这避免了对相同数据layout、page和其他 generateStaticParams 函数进行多次网络调用，从而加快了构建时间。'
export const apiReference = [
    {
        title: 'generateStaticParams',
        content: 'API reference for the generateStaticParams function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/generate-static-params'
    }
]
