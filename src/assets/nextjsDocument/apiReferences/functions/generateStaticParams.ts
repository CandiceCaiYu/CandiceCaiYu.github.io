import category from "@antv/component/src/legend/category";

export const generateStaticParamsContent1 = '# generateStaticParams'
export const generateStaticParamsContent2 = 'generateStaticParams 函数可以与动态路由段结合使用，在构建时静态生成路由，而不是在请求时按需生成。'
export const generateStaticParamsContent2Code = `~~~app/blog/[slug]/page.tsx~~~
// Return a list of \`params\` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the \`params\` returned by \`generateStaticParams\`
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}`
export const generateStaticParamsContent2GTK = [
    '您可以使用 dynamicParams segments配置选项来控制访问未使用 generateStaticParams 生成的动态段时发生的情况。',
    '您必须从 generateStaticParams 返回一个空数组，或使用 export const dynamic = \'force-static\' 以便在运行时重新验证 (ISR) 路径。',
    '在next dev中，当您导航到某个路由时，generateStaticParams 将被调用。',
    '在next build中，generateStaticParams 会在生成相应的布局或页面之前运行。',
    '在重新验证 (ISR) 期间，generateStaticParams 将不会再次被调用。',
    'generateStaticParams 取代了页面路由器中的 getStaticPaths 函数。'
]
export const generateStaticParamsContent3 = '## 参数'
export const generateStaticParamsContent4 = 'options.params (可选)'
export const generateStaticParamsContent5 = '如果路由中的多个动态段使用generateStaticParams，则子generateStaticParams函数会为父级生成的每组参数执行一次。'
export const generateStaticParamsContent6 = 'params 对象包含来自父级 generateStaticParams 的填充参数，可用于[生成子段中的参数](https://nextjs.org/docs/app/api-reference/functions/generate-static-params#multiple-dynamic-segments-in-a-route)。'
export const generateStaticParamsContent7 = '## 返回值'
export const generateStaticParamsContent8 = 'generateStaticParams 应该返回一个对象数组，其中每个对象代表单个路由中已填充的动态段。'
export const generateStaticParamsContent8List = [
    '对象中的每个属性都是要为路由填充的动态段。',
    '属性名称是段的名称，属性值是该段应填充的内容。'
]
export const generateStaticParamsContent8TableColumn = [
    {title: 'Example Route', key: 'route', dataIndex: 'route'},
    {title: 'generateStaticParams Return Type', key: 'type', dataIndex: 'type'},
]
export const generateStaticParamsContent8TableDataSource = [
    {route: '/project/[id]', type: '{ id: string }[]'},
    {route: '/project/[category][product]', type: '{ category: string, product }[]'},
    {route: '/project/[...slug]', type: '{ slug: string[] }[]'},
]
export const generateStaticParamsContent9 = '## 单个动态段'
export const generateStaticParamsContent9Code = `~~~app/project/[id]/page.tsx~~~
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
 
// Three versions of this page will be statically generated
// using the \`params\` returned by \`generateStaticParams\`
// - /product/1
// - /product/2
// - /product/3
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // ...
}`
export const generateStaticParamsContent10 = '## 多个动态段'
export const generateStaticParamsContent10Code = `~~~app/project/[category][product]/page.tsx~~~
export function generateStaticParams() {
  return [
    { category: 'a', product: '1' },
    { category: 'b', product: '2' },
    { category: 'c', product: '3' },
  ]
}
 
// Three versions of this page will be statically generated
// using the \`params\` returned by \`generateStaticParams\`
// - /products/a/1
// - /products/b/2
// - /products/c/3
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; product: string }>
}) {
  const { category, product } = await params
  // ...
}`
export const generateStaticParamsContent11 = '## 捕获所有动态段(Catch-all Dynamic Segments)'
export const generateStaticParamsContent11Code = `~~~app/project/[...slug]/page.tsx~~~
export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
}
 
// Three versions of this page will be statically generated
// using the \`params\` returned by \`generateStaticParams\`
// - /product/a/1
// - /product/b/2
// - /product/c/3
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  // ...
}`
export const generateStaticParamsContent12 = '## 示例'
export const generateStaticParamsContent13 = '### 静态渲染'
export const generateStaticParamsContent14 = '#### 构建时的所有路径'
export const generateStaticParamsContent15 = '要在构建时静态渲染所有路径，请向 generateStaticParams 提供完整的路径列表：'
export const generateStaticParamsContent16 = '#### 构建时的路径子集'
export const generateStaticParamsContent17 = '要在构建时静态渲染路径子集，并在运行时第一次访问其余路径时，返回部分路径列表：'
export const generateStaticParamsContent17Code = `~~~app/blog/[id]/page.tsx~~~
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  // Render the first 10 posts at build time
  return posts.slice(0, 10).map((post) => ({
    slug: post.slug,
  }))
}`
export const generateStaticParamsContent18 = '然后，通过使用 dynamicParams 段配置选项，您可以控制访问未使用 generateStaticParams 生成的动态段时发生的情况'
export const generateStaticParamsContent18Code = `~~~app/slug/[id]/page.tsx~~~
// All posts besides the top 10 will be a 404
export const dynamicParams = false
 
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
  const topPosts = posts.slice(0, 10)
 
  return topPosts.map((post) => ({
    slug: post.slug,
  }))
}`
export const generateStaticParamsContent19 = '#### 运行时的所有路径'
export const generateStaticParamsContent20 = '要在第一次访问时静态渲染所有路径，请返回一个空数组（构建时不会渲染任何路径）或利用 export const dynamic = \'force-static\'：'
export const generateStaticParamsContent20Code = `~~~app/blog/[slug]/page.tsx~~~
export async function generateStaticParams() {
  return []
}`
export const generateStaticParamsContent20GTK = 'generateStaticParams必须返回一个数组，即使它是空的。否则，路由将被动态渲染。'
export const generateStaticParamsContent21Code = `~~~app/changelog/[slug]/page.tsx~~~
export const dynamic = 'force-static'`
export const generateStaticParamsContent22 = '### 禁用未指定路径的渲染'
export const generateStaticParamsContent23 = '为了防止未指定的路径在运行时被静态渲染，请在路由段中添加 export const dynamicParams = false 选项。使用此配置选项时，仅提供由 generateStaticParams 提供的路径，未指定的路由将返回 404 错误或匹配（在 catch-all 路由的情况下）。'
export const generateStaticParamsContent24 = '### 路由中的多个动态路段'
export const generateStaticParamsContent25 = '您可以为当前布局或页面上方的动态段生成参数，但不能为下方的动态段生成参数。例如，假设 app/products/[category]/[product] 路由：'

export const generateStaticParamsContent25List = [
    'app/products/[category]/[product]/page.js 可以为 [category] 和 [product] 生成参数。',
    'app/products/[category]/layout.js 只能为 [category] 生成参数。'
]
export const generateStaticParamsContent26 = '有两种方法可以为具有多个动态段的路线生成参数：'
export const generateStaticParamsContent27 = '#### 自下而上生成参数'
export const generateStaticParamsContent28 = '从子路由段生成多个动态段。'
export const generateStaticParamsContent28Code = `~~~app/products/[category]/[product]/page.tsx~~~
// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const products = await fetch('https://.../products').then((res) => res.json())
 
  return products.map((product) => ({
    category: product.category.slug,
    product: product.id,
  }))
}
 
export default function Page({
  params,
}: {
  params: Promise<{ category: string; product: string }>
}) {
  // ...
}`
export const generateStaticParamsContent29 = '#### 从上到下生成参数'
export const generateStaticParamsContent30 = '首先生成父段，然后使用结果生成子段。'
export const generateStaticParamsContent30Code = `~~~app/products/[category]/layout.tsx~~~
// Generate segments for [category]
export async function generateStaticParams() {
  const products = await fetch('https://.../products').then((res) => res.json())
 
  return products.map((product) => ({
    category: product.category.slug,
  }))
}
 
export default function Layout({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  // ...
}`
export const generateStaticParamsContent31 = '对于父路由段生成的每个段，子路由段的generateStaticParams函数都会执行一次。'
export const generateStaticParamsContent32 = '子函数generateStaticParams可以使用父函数generateStaticParams返回的参数来动态生成自己的段。'
export const generateStaticParamsContent32Code = `~~~app/products/[category]/[product]/page.tsx~~~
// Generate segments for [product] using the \`params\` passed from
// the parent segment's \`generateStaticParams\` function
export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string }
}) {
  const products = await fetch(
    \`https://.../products?category=${category}\`
  ).then((res) => res.json())
 
  return products.map((product) => ({
    product: product.id,
  }))
}
 
export default function Page({
  params,
}: {
  params: Promise<{ category: string; product: string }>
}) {
  // ...
}`
export const generateStaticParamsContent33 = '请注意，params 参数可以同步访问，并且仅包含父段参数。'
export const generateStaticParamsContent34 = '对于类型完成，您可以将 TypeScript Awaited Helper与 [Page Props Helper](https://nextjs.org/docs/app/api-reference/file-conventions/page#page-props-helper)或 [Layout Props Helper](https://nextjs.org/docs/app/api-reference/file-conventions/layout#layout-props-helper)结合使用：'
export const generateStaticParamsContent34Code = `~~~app/products/[category]/[product]/page.tsx~~~
export async function generateStaticParams({
  params: { category },
}: {
  params: Awaited<LayoutProps<'/products/[category]'>['params']>
}) {
  const products = await fetch(
    "https://.../products?category=\${category}"
  ).then((res) => res.json())
 
  return products.map((product) => ({
    product: product.id,
  }))
}`
export const generateStaticParamsContent34GTK = '所有以 generate 为前缀的函数、布局、页面和服务器组件都会自动为相同的数据添加 fetch 请求的记忆。如果 fetch 不可用，可以使用 React 缓存。'
