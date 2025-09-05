export const loadingJsContent1 = '# loading.js'
export const loadingJsContent2 = '特殊文件loading.js可以帮助你使用React Suspense创建有意义的loading UI。通过此约定，你可以在路由段内容流入时显示来自服务器的即时加载状态。新内容会在加载完成后自动替换。'
export const loadingJsContent2Img = '![loading-ui](/nextjsDoc/fileSystemConventions/loading-ui.avif)'
export const loadingJsContent2Code = `~~~app/feed/loading.js~~~
export default function Loading() {
  // Or a custom loading skeleton component
  return <p>Loading...</p>
}`
export const loadingJsContent3 = '在loading.js文件中，你可以添加任何轻量级的loading UI。使用[React Developer Tools](https://react.dev/learn/react-developer-tools)手动切换Suspense边界会很有帮助。'
export const loadingJsContent4 = '默认情况下，该文件是服务器组件 - 但也可以通过“use client”指令用作客户端组件。'

export const loadingJsContent5 = '## 参考'
export const loadingJsContent6 = '### Parameters'
export const loadingJsContent7 = 'loading UI组件不接受任何参数。'

export const loadingJsContent8 = '## 行为'
export const loadingJsContent9 = '### 导航'
export const loadingJsContent9List = [
    'fallback UI 已预加载，因此除非预加载尚未完成，否则导航将立即生效。',
    '导航可中断，这意味着更改路由时无需等待路由内容完全加载即可导航至其他路由。',
    '共享layout在新路由段加载期间保持交互。'
]
export const loadingJsContent10 = '### 即时加载状态'
export const loadingJsContent11 = '即时加载状态是指导航后立即显示的fallback UI。您可以预渲染加载指示器（例如骨架和旋转图标），或者未来屏幕中一些虽小但有意义的部分（例如封面照片、标题等）。这有助于用户了解应用的响应情况，并提供更好的用户体验。'
export const loadingJsContent12 = '通过在文件夹中添加loading.js文件来创建加载状态。'
export const loadingJsContent12Img = '![loading-special-file](/nextjsDoc/fileSystemConventions/loading-special-file.avif)'
export const loadingJsContent12Code = `~~~app/dashboard/loading.js~~~
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}`
export const loadingJsContent13 = '在同一个文件夹中，loading.js 将嵌套在 layout.js 中。它会自动将 page.js 文件及其下面的所有子文件包裹在 <Suspense> 边界内。'
export const loadingJsContent13Img = '![loading-overview](/nextjsDoc/fileSystemConventions/loading-overview.avif)'
export const loadingJsContent14 = '### SEO'
export const loadingJsContent14List = [
    'Next.js 会等待 generateMetadata 内部的数据提取完成后，再将 UI 流式传输到客户端。这保证了流式响应的第一部分包含 <head> 标签。',
    '由于流式传输是服务器渲染的，因此不会影响 SEO。您可以使用 Google 的 [Rich Results Test](https://search.google.com/test/rich-results) 工具来查看您的网页在 Google 爬虫中的显示效果，并查看序列化的 HTML（源代码）。'
]
export const loadingJsContent15 = '### 状态代码'
export const loadingJsContent16 = '流式传输时，将返回 200 状态代码以表示请求成功。'
export const loadingJsContent17 = '服务器仍然可以在流内容本身中向客户端传达错误或问题，例如使用重定向或 notFound 时。由于响应标头已发送到客户端，因此无法更新响应的状态码。这不会影响 SEO。'
export const loadingJsContent18 = '### 浏览器限制'
export const loadingJsContent19 = '某些浏览器会缓冲流式响应。您可能要等到响应超过 1024 字节后才能看到流式响应。这通常只会影响“hello world”应用程序，而不会影响真正的应用程序。'
export const loadingJsContent20 = '## 平台支持'
export const loadingJsContent20TableColumn = [
    {title: '部署选项', key: 'deployment', dataIndex: 'deployment'},
    {title: '支持', key: 'support', dataIndex: 'support'},
]
export const loadingJsContent20TableData = [
    {deployment: 'Node.js server', support: 'Yes'},
    {deployment: 'Docker container', support: 'Yes'},
    {deployment: 'Static export', support: 'No'},
    {deployment: 'Adapters', support: '特定平台'},
]
export const loadingJsContent21 = '了解如何在自托管 Next.js 时[配置流式传输](https://nextjs.org/docs/app/guides/self-hosting#streaming-and-suspense)。'

export const loadingJsContent22 = '## 示例'
export const loadingJsContent23 = '### 使用 Suspense 进行流式传输'
export const loadingJsContent24 = '除了loading.js之外，您还可以为自己的UI组件手动创建Suspense Boundaries。App Router支持使用Suspense进行流式传输。'
export const loadingJsContent25 = '<Suspense> 的工作原理是包装一个执行异步操作（例如获取数据）的组件，在操作发生时显示fallback UI（例如skeleton, spinner），然后在操作完成后替换组件。'
export const loadingJsContent25Code = `~~~app/dashboard/page.js~~~
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}`
export const loadingJsContent26 = '通过使用 Suspense，您可以获得以下好处：'
export const loadingJsContent26List = [
    '流式服务器渲染 - 从服务器逐步将 HTML 渲染到客户端。',
    '选择性渲染 - React 根据用户交互情况确定优先使哪些组件可交互。'
]
export const loadingJsContent27 = '有关更多 Suspense 示例和用例，请参阅 [React 文档](https://react.dev/reference/react/Suspense)'
