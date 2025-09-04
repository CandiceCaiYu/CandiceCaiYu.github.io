export const pageJsContent1 = '# page.js'
export const pageJsContent2 = 'page文件允许您定义路由独有的 UI。您可以默认创建一个页面，并从文件中导出一个组件：'
export const pageJsContent2Code = `~~~app/blog/[slug]/page.tsx~~~
export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <h1>My Page</h1>
}`
export const pageJsContent3 = '## 值得了解'
export const pageJsContent3List = [
    'page可以使用 .js、.jsx 或 .tsx 文件扩展名。',
    'page始终是路由子树的叶子节点。',
    '要使路由段可公开访问，必须使用page文件。',
    'page默认为服务器组件，但可以设置为客户端组件。'
]
export const pageJsContent4 = '## 参考'
export const pageJsContent5 = '### Props'
export const pageJsContent6 = '#### params (可选)'
export const pageJsContent7 = '一个promise，解析为一个对象，其中包含从根段到该页面的动态路由参数。'
export const pageJsContent7Code = `~~~app/shop/[slug]/page.tsx~~~
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
}`
export const pageJsContent7TableColumn = [
    {title: 'Example Route', key: 'route', dataIndex: 'route'},
    {title: 'URL', key: 'url', dataIndex: 'url'},
    {title: 'params', key: 'params', dataIndex: 'params'},
]
export const pageJsContent7TableData = [
    {route: 'app/shop/[slug]/page.tsx', url: '/shop/1', params: "Promise<{ slug: '1' }>"},
    {route: 'app/shop/[category]/[item]/page.tsx', url: '/shop/1/2', params: "Promise<{ category: '1', item: '2' }>"},
    {route: 'app/shop/[...slug]/page.tsx', url: '/blog/1/2', params: "Promise<{ slug: ['1', '2'] }>"}
]
export const pageJsContent7List = [
    '由于 params 属性是一个 Promise，因此您必须使用 async/await 或 React 的 use 函数来访问其值。',
    ['在 14 及更早版本中，params 是一个同步属性。为了实现向后兼容，您仍然可以在 Next.js 15 中以同步方式访问它，但此行为将来会被弃用。']
]
export const pageJsContent8 = '#### searchParams (可选)'
export const pageJsContent9 = '解析为包含当前 URL 搜索参数的对象的promise。例如：'
export const pageJsContent9Code = `~~~app/shop/page.tsx~~~
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams).filters
}`
export const pageJsContent10 = '客户端组件page还可以使用 React 的use hook访问 searchParams：'
export const pageJsContent10Code = `~~~app/shop/page.tsx~~~
'use client'
import { use } from 'react'
 
export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = use(searchParams).filters
}`
export const pageJsContent10TableColumn = [
    {title: 'URL', key: 'url', dataIndex: 'url'},
    {title: 'params', key: 'params', dataIndex: 'params'},
]
export const pageJsContent10TableData = [
    {url: '/shop?a=1', params: "Promise<{ a: '1' }>"},
    {url: '/shop?a=1&b=2', params: "Promise<{ a: '1' , b: '2' }>"},
    {url: '/shop?a=1&a=2', params: "Promise<{ a: ['1', '2'] }>"}
]
export const pageJsContent10List = [
    '由于 params 属性是一个 Promise，因此您必须使用 async/await 或 React 的 use 函数来访问其值。',
    ['在 14 及更早版本中，params 是一个同步属性。为了实现向后兼容，您仍然可以在 Next.js 15 中以同步方式访问它，但此行为将来会被弃用。'],
    'searchParams 是一个动态 API，其值无法提前知道。使用它会在请求时选择页面进行动态渲染。',
    'searchParams 是一个普通的 JavaScript 对象，而不是 URLSearchParams 实例。'
]
export const pageJsContent11 = '### Page Props Helper'
export const pageJsContent12 = '您可以使用 PageProps 来定义page类型，以便从路由字面量中获取强类型参数和搜索参数。PageProps 是一个全局可用的辅助函数。'
export const pageJsContent12Code = `~~~app/blog/[slug]/page.tsx~~~
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const query = await props.searchParams
  return <h1>Blog Post: {slug}</h1>
}`
export const pageJsContent12GTK = [
    '使用字面量路由（例如“/blog/[slug]”）可启用参数的自动补全和严格键。',
    '静态路由将params解析为 {}。',
    '类型在next dev, next build或next typegen期间生成。'
]
export const pageJsContent13 = '## 示例'
export const pageJsContent14 = '### 根据params显示内容'
export const pageJsContent15 = '使用动态路由段，您可以根据 params 属性显示或获取页面的特定内容。'
export const pageJsContent15Code = `~~~app/blog/[slug]/page.tsx~~~
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <h1>Blog Post: {slug}</h1>
}`
export const pageJsContent16 = '### 使用 searchParams 处理过滤'
export const pageJsContent17 = '您可以使用 searchParams 属性根据 URL 的查询字符串处理过滤、分页或排序。'
export const pageJsContent17Code = `~~~app/shop/page.tsx~~~
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { page = '1', sort = 'asc', query = '' } = await searchParams
 
  return (
    <div>
      <h1>Product Listing</h1>
      <p>Search query: {query}</p>
      <p>Current page: {page}</p>
      <p>Sort order: {sort}</p>
    </div>
  )
}`
export const pageJsContent18 = '### 读取客户端组件中的 searchParams 和 params'
export const pageJsContent19 = '要在客户端组件（不能异步）中使用 searchParams 和 params，您可以使用 React 的 use 函数来读取Promise：'
export const pageJsContent19Code = `~~~app/page.tsx~~~
'use client'
 
import { use } from 'react'
 
export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { slug } = use(params)
  const { query } = use(searchParams)
}`
