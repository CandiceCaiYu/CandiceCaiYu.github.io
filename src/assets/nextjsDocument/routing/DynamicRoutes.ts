export const DynamicRoutesTitle = "# 动态路由";
export const DynamicRoutesContent1 = "当您事先不知道确切的段名称并想要从动态数据创建路由时，您可以使用在请求时填写或在构建时预渲染的动态段。";
export const DynamicRoutesContent2 = "## 约定";
export const DynamicRoutesContent3 = "可以通过将文件夹名称括在方括号中来创建动态段：[folderName]。例如，[id] 或 [slug]。";
export const DynamicRoutesContent4 = "动态段作为 params 属性传递给布局、页面、路由和 generateMetadata 函数。";
export const DynamicRoutesContent5 = "## 示例";
export const DynamicRoutesContent6 = "例如，博客可以包含以下路由 app/blog/[slug]/page.js，其中 [slug] 是博客文章的动态段。";
export const DynamicRoutesContent6Code = `~~~app/blog/[slug]/page.tsx~~~

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}`;
export const DynamicRoutesContent6Table = [
    {route: 'app/blog/[slug]/page.js', example: "/blog/a", params: "{slug: 'a'}"},
    {route: 'app/blog/[slug]/page.js', example: "/blog/b", params: "{slug: 'b'}"},
    {route: 'app/blog/[slug]/page.js', example: "/blog/c", params: "{slug: 'c'}"},
];
export const DynamicRoutesContent7 = "请参阅 generateStaticParams() 页面来了解如何为该段生成参数。";
export const DynamicRoutesContent8 = "## 值得了解";
export const DynamicRoutesContent8Tips = [
    "由于 params prop 是一个promise。您必须使用 async/await 或 React 的 use 函数来访问值。",
    ["在版本 14 及更早版本中，params 是一个同步 prop。为了帮助实现向后兼容性，您仍然可以在 Next.js 15 中同步访问它，但此行为将来会被弃用。",],
    "动态段相当于 pages 目录中的动态路由。"
];
export const DynamicRoutesContent9 = "## 生成静态参数";
export const DynamicRoutesContent10 = "generateStaticParams 函数可与动态路由段结合使用，在构建时静态生成路由，而不是在请求时按需生成。";
export const DynamicRoutesContent10Code = `~~~app/blog/[slug]/page.tsx~~~

export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}`;
export const DynamicRoutesContent11 = "generateStaticParams 函数的主要优点是其智能数据检索功能。如果使用提取请求在 generateStaticParams 函数中提取内容，则请求将自动被记住。这意味着在多个 generateStaticParams、布局和页面中具有相同参数的提取请求将仅进行一次，从而缩短了构建时间。";
export const DynamicRoutesContent12 = "如果您要从页面目录迁移，请使用迁移指南。";
export const DynamicRoutesContent13 = "有关更多信息和高级用例，请参阅 generateStaticParams 服务器函数文档。";
export const DynamicRoutesContent14 = '## 捕获所有段';
export const DynamicRoutesContent15 = '通过在括号 [...folderName] 内添加省略号，可以将动态段扩展为捕获所有后续段。';
export const DynamicRoutesContent16 = '例如，app/shop/[...slug]/page.js 将匹配 /shop/clothes，但也匹配 /shop/clothes/tops、/shop/clothes/tops/t-shirts 等。';
export const DynamicRoutesContent16Table = [
    {route: 'app/shop/[[...slug]]/page.js', example: "/shop/a", params: "{slug: ['a']}"},
    {route: 'app/shop/[[...slug]]/page.js', example: "/shop/a/b", params: "{slug: ['a', 'b']}"},
    {route: 'app/shop/[[...slug]]/page.js', example: "/shop/a/b/c", params: "{slug: ['a', 'b', 'c']}"},

];
export const DynamicRoutesContent17 = "## 可选的 捕获所有 段";
export const DynamicRoutesContent18 =
    "通过将参数包含在双方括号中，可以将 Catch-all 段设为可选：[[...folderName]]。";
export const DynamicRoutesContent19 =
    "例如，app/shop/[[...slug]]/page.js 除了匹配 /shop/clothes、/shop/clothes/tops、/shop/clothes/tops/t-shirts 之外，还将匹配 /shop。";
export const DynamicRoutesContent20 = "catch-all 段和可选的 catch-all 段之间的区别在于，如果是可选的，则不带参数的路由也会被匹配（上例中的 /shop）。";
export const DynamicRoutesContent21 = '## TypeScript';
export const DynamicRoutesContent22 = '使用 TypeScript 时，您可以根据配置的路由段添加参数的类型。';
export const DynamicRoutesContent22Code = `~~~app/blog/[slug]/page.tsx~~~

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <h1>My Page</h1>
}`;
export const DynamicRoutesContent23 = [
    {route: 'app/shop/[slug]/page.js', paramsType: '{slug: string}'},
    {route: 'app/shop/[...slug]/page.js', paramsType: '{slug: string[]}'},
    {route: 'app/shop/[[...slug]]/page.js', paramsType: '{slug?: string[]}'},
    {route: 'app/[category]/[[itemId]]/page.js', paramsType: '{category: string, itemId: string}'},

];
export const DynamicRoutesContent23Tips = '将来，这可能会由 TypeScript 插件自动完成。';
