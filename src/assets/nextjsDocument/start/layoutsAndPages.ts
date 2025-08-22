export const layoutsAndPagesTitle = "# Layouts and Pages";
export const layoutsAndPagesDescription = "Next.js 使用基于文件系统的路由，这意味着您可以使用文件夹和文件来定义路由。本页面将指导您如何创建布局和页面，以及如何在它们之间建立链接。。";

export const pageTitle = '## 创建 page';
export const pageContent1 = "page是在特定路由上渲染的 UI。要创建page，请在 app 目录中添加一个page文件，并默认导出一个 React 组件。例如，要创建索引页 (/)：";
export const pageImage1 = "![page example](/nextjsDoc/layoutsAndPages/page-special-file.avif)";
export const pageCode1 = `~~~app/page.tsx~~~
export default function Page() {
  return <h1>Hello Next.js!</h1>
}`

export const layoutsTitle = "## 创建 layout";
export const layoutsDescription = "一个layout UI可以在多个路由里共享。导航时，layout会保留状态，保持交互性，而且不会重新渲染。Layouts还可以嵌套。";
export const layoutsContent1 = "你可以通过默认导出React组件的layout.js 文件定义一个布局。这个组件在渲染的时候可以接收一个children prop, 然后增加子布局（如果存在） 或者一个页面。";
export const layoutsContent2 = "比如，要创建接受page.js作为子页的layout，请在app目录中添加layout文件：";
export const layoutsContent2Image = "![layout example](/nextjsDoc/layoutsAndPages/layout-special-file.avif)";
export const layoutsContent2Code = `~~~app/layout.tsx~~~

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}`;
export const layoutsContent3 = '上面的布局称为[root layout](/api-reference/file-conventions/layout#root-layout)，因为它定义在app的根目录下。根布局是必需的，并且必须包含 html 和 body 标签。'

export const nestedRouteTitle = "## 创建嵌套路由";
export const nestedRouteContent1 = "嵌套路由是由多个 URL 段组成的路由。例如， /blog/[slug] 路由由三个段组成：";
export const nestedRouteContent1List = [
    '/（根段)',
    'blog（段)',
    '[slug]（叶段）'
];
export const nestedRouteContent2 = "在 Next.js 中：";
export const nestedRouteContent2List = [
    '文件夹: 用于定义映射到 URL 段的路由段。',
    '文件:（例如page和layout）用于创建针对某个段显示的 UI。'
]
export const nestedRouteContent3 = '要创建嵌套路由，您可以将文件夹嵌套在一起。例如，要为 /blog 添加路由，请在app目录中创建一个名为 blog 的文件夹。然后，要使 /blog 可公开访问，请添加一个 page.tsx 文件：'
export const nestedRouteContent3Image = "![nested layout example](/nextjsDoc/layoutsAndPages/blog-nested-route.avif)";
export const nestedRouteContent3Code = `~~~app/blog/page.tsx~~~

// Dummy imports
import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'
 
export default async function Page() {
  const posts = await getPosts()
 
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}`;
export const nestedRouteContent4 = "您可以继续嵌套文件夹来创建嵌套路由。例如，要为特定博客文章创建路由，请在 blog 中创建一个新的 [slug] 文件夹并添加一个页面文件：";
export const nestedRouteContent4Image = "![nested layout example](/nextjsDoc/layoutsAndPages/blog-post-nested-route.avif)";
export const nestedRouteContent4Code = `~~~app/blog/[slug]/page.tsx~~~
function generateStaticParams() {}
 
export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`
export const nestedRouteContent5 = '将文件夹名称括在方括号中（例如 [slug]）会创建一个动态路由段，用于根据数据生成多个页面，例如博客文章、产品页面等。'

export const nestedLayoutTitle = '## 嵌套布局';
export const nestedLayoutContent1 = '默认情况下，文件夹层次结构中的layout也是嵌套的，这意味着它们通过其 children 属性包裹子layout。您可以通过在特定的路由段（文件夹）内添加layout来嵌套layout。'
export const nestedLayoutContent2 = '例如，要为 /blog 路由创建layout，请在 blog 文件夹中添加一个新的layout文件。'
export const nestedLayoutContent2Image = '![nested-layouts](/nextjsDoc/layoutsAndPages/nested-layouts.avif)';
export const nestedLayoutContent2Code = `~~~app/blog/layout.tsx~~~
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}`
export const nestedLayoutContent3 = '如果您要组合上述两个布局，根布局（app/layout.js）将包装博客布局（app/blog/layout.js），后者将包装博客（app/blog/page.js）和博客文章页面（app/blog/[slug]/page.js）。'

export const creatingDynamicSegmentTitle = '## 创建动态段';
export const creatingDynamicSegmentContent1 = '[动态分段](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)允许您创建基于数据生成的路由。例如，您无需为每篇博客文章手动创建路由，而是可以创建一个动态分段，根据博客文章数据生成路由。'
export const creatingDynamicSegmentContent2 = '要创建动态片段，请将片段（文件夹）名称括在方括号中：[segmentName]。例如，在 app/blog/[slug]/page.tsx 路由中，[slug] 就是动态片段。'
export const creatingDynamicSegmentContent2Code = `~~~app/blog/[slug]/page.tsx~~~
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}`
export const creatingDynamicSegmentContent3 = '了解有关[动态段](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)和 params 属性的更多信息。'
export const creatingDynamicSegmentContent4 = '[动态段内的嵌套布局](https://nextjs.org/docs/app/api-reference/file-conventions/layout#params-optional)也可以访问 params 属性。'

export const renderingWithSearchParamsTitle = '## 使用搜索参数渲染';
export const renderingWithSearchParamsContent1 = '在Server Component页面中，您可以使用 searchParams 属性访问搜索参数：'
export const renderingWithSearchParamsContent1Code = `~~~app/page.tsx~~~
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams).filters
}`
export const renderingWithSearchParamsContent2 = '使用 searchParams 会将您的页面设置为[动态渲染](https://nextjs.org/docs/app/getting-started/partial-prerendering#dynamic-rendering)，因为它需要传入请求来读取搜索参数'
export const renderingWithSearchParamsContent3 = 'Client Component可以使用 [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params) 钩子读取搜索参数。'
export const renderingWithSearchParamsContent4 = '了解有关[静态渲染](https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering)和[动态渲染](https://nextjs.org/docs/app/api-reference/functions/use-search-params#dynamic-rendering)路由中的 useSearchParams 的更多信息。'
export const renderingWithSearchParamsContent5 = '### 何时使用'
export const renderingWithSearchParamsContent5List = [
    '当您需要搜索参数来加载页面数据（例如分页、从数据库过滤）时，请使用 searchParams 属性。',
    '当搜索参数仅在客户端使用时（例如，过滤已通过props加载的列表），请使用 useSearchParams 属性。',
    '作为一项小优化，您可以在回调或事件处理程序中使用 new URLSearchParams(window.location.search) 来读取搜索参数，而无需触发重新渲染。'
]

export const linkingBetweenPagesTitle = "## 在页面之间链接";
export const linkingBetweenPagesContent1 = '您可以使用 [<Link> 组件](https://nextjs.org/docs/app/api-reference/components/link)在路由之间导航。<Link> 是一个内置的 Next.js 组件，它扩展了 HTML <a> 标签，以提供[预取](https://nextjs.org/docs/app/getting-started/linking-and-navigating#prefetching)和[客户端导航](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions)功能。';
export const linkingBetweenPagesContent2 = '例如，要生成博客文章列表，请从 next/link 导入 <Link> 并将 href 属性传递给组件：';
export const linkingBetweenPagesContent2Code = `~~~app/ui/post.tsx~~~
import Link from 'next/link'
 
export default async function Post({ post }) {
  const posts = await getPosts()
 
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={\`/blog/\${post.slug}\`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}`;
export const linkingBetweenPagesContent2GoodToKnow = '<Link> 是 Next.js 中路由导航的主要方式。你还可以使用 useRouter 钩子进行更高级的导航。';

export const APIReferences = {
    description: '通过阅读 API 参考，了解有关此页面中提到的功能的更多信息。',
    apis: [
        {
            title: 'Linking and Navigating',
            content: '了解内置导航优化的工作原理，包括预取、预渲染和客户端导航，以及如何针对动态路线和慢速网络优化导航。',
            url: 'https://nextjs.org/docs/app/getting-started/linking-and-navigating'
        },
        {
            title: 'layout.js',
            content: 'layout.js 文件的 API 参考文档。',
            url: 'https://nextjs.org/docs/app/api-reference/file-conventions/layout'
        },
        {
            title: 'page.js',
            content: 'page.js的 API 参考文档。',
            url: 'https://nextjs.org/docs/app/api-reference/file-conventions/page'
        },
        {
            title: 'Link Component',
            content: '使用内置的“next/link”组件实现快速客户端导航。',
            url: 'https://nextjs.org/docs/app/api-reference/components/link'
        },
        {
            title: 'Dynamic Segments',
            content: '动态路线段可用于以编程方式从动态数据生成路线段。',
            url: 'https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes'
        }
    ]
}
