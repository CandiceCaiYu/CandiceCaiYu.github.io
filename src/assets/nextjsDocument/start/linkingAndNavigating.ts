import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 链接和导航';
export const description1 = '在 Next.js 中，路由默认在服务器上渲染。这通常意味着客户端必须等待服务器响应才能显示新的路由。Next.js 内置预取、流式传输和客户端转换功能，确保导航保持快速响应。';
export const description2 = '本指南介绍了 Next.js 中的导航工作原理以及如何针对动态路由和慢速网络对其进行优化。';

export const howNavigationWorksTitle = '## 导航的工作原理';
export const howNavigationWorksContent1 = '要了解 Next.js 中的导航工作原理，熟悉以下概念会有所帮助：';
export const howNavigationWorksContent1List = [
    '[Server Rendering](https://nextjs.org/docs/app/getting-started/linking-and-navigating#server-rendering)',
    '[Prefetching](https://nextjs.org/docs/app/getting-started/linking-and-navigating#prefetching)',
    '[Streaming](https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming)',
    '[Client-side transitions](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions)'
];
export const howNavigationWorksContentServerRendering1 = '### 服务器渲染';
export const howNavigationWorksContentServerRendering2 = '在 Next.js 中，[Layouts和Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)默认是 [React 服务器组件](https://react.dev/reference/rsc/server-components)。在初始和后续导航中，[服务器组件payload](https://nextjs.org/docs/app/getting-started/server-and-client-components#how-do-server-and-client-components-work-in-nextjs)会在发送到客户端之前在服务器上生成。';
export const howNavigationWorksContentServerRendering3 = '根据发生的时机，服务器渲染可分为两种类型：';
export const howNavigationWorksContentServerRendering3List = [
    '静态渲染（或预渲染）发生在构建时或[重新验证](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)期间，并且结果被缓存。',
    '动态渲染在请求时发生，以响应客户端请求。'
];
export const howNavigationWorksContentServerRendering4 = '服务器渲染的弊端在于，客户端必须等待服务器响应才能显示新路由。Next.js 通过[预加载](https://nextjs.org/docs/app/getting-started/linking-and-navigating#prefetching)用户可能访问的路由并执行[客户端转换](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions)来解决此延迟问题。';
export const howNavigationWorksContentServerRendering4GTK = '初次访问时也会生成 HTML。';
export const howNavigationWorksContentPrefetch1 = ' ### 预取';
export const howNavigationWorksContentPrefetch2 = '预加载是指在用户导航到路由之前，在后台加载该路由的过程。这使得应用中的路由间导航感觉非常即时，因为当用户点击链接时，渲染下一个路由所需的数据已经在客户端可用了。';
export const howNavigationWorksContentPrefetch3 = '当路由进入用户视口时，Next.js 会自动预取与 <Link> 组件链接的路由。';
export const howNavigationWorksContentPrefetch3Code = `~~~app/layout.tsx~~~
import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/blog">Blog</Link>
          {/* No prefetching */}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  )
}`;
export const howNavigationWorksContentPrefetch4 = '预取多少路由取决于它是静态的还是动态的：';
export const howNavigationWorksContentPrefetch4List = [
    '静态路由：预取完整路由。',
    '动态路由：跳过预取，或如果存在loading.tsx，则部分预取路由。'
];
export const howNavigationWorksContentPrefetch5 = '通过跳过或部分预提取动态路由，Next.js 避免了服务器对用户可能永远不会访问的路由进行不必要的处理。但是，在导航之前等待服务器响应可能会给用户留下应用没有响应的印象。';
export const howNavigationWorksContentPrefetch5Image = '![server-rendering-without-streaming](/nextjsDoc/linkingAndNavigating/server-rendering-without-streaming.avif)';
export const howNavigationWorksContentPrefetch6 = '为了改善动态路由的导航体验，您可以使用[流式传输](https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming)。';
export const howNavigationWorksContentStream1 = '### 流式传输';
export const howNavigationWorksContentStream2 = '流式传输允许服务器在动态路由的部分内容准备就绪后,立即将其发送到客户端，而无需等待整个路由内容渲染完成。这意味着即使页面的部分内容仍在加载，用户也能更快地看到内容。';
export const howNavigationWorksContentStream3 = '对于动态路由，这意味着它们可以部分预取。也就是说，可以提前请求共享布局和加载骨架（skeletons）。';
export const howNavigationWorksContentStream3Image = '![server-rendering-with-streaming](/nextjsDoc/linkingAndNavigating/server-rendering-with-streaming.avif)';
export const howNavigationWorksContentStream4 = '要使用流式传输，请在路由文件夹中创建loading.tsx：';
export const howNavigationWorksContentStream4Image = '![loading-special-file](/nextjsDoc/linkingAndNavigating/loading-special-file.avif)';
export const howNavigationWorksContentStream4Code = `~~~app/dashboard/loading.tsx~~~
export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LoadingSkeleton />
}`;
export const howNavigationWorksContentStream5 = '在后台，Next.js 会自动将 page.tsx 内容包裹在 <Suspense> 边界(boundary)中。预获取的 fallback UI 会在路由加载时显示，并在加载完成后替换为实际内容。';
export const howNavigationWorksContentStream5GTK = '您还可以使用 <Suspense> 为嵌套组件创建loading UI。';
export const howNavigationWorksContentStream6 = 'Loading.tsx 的好处：';
export const howNavigationWorksContentStream6List = [
    '立即导航和视觉反馈：为用户提供快速的导航和视觉提示。',
    '共享布局保持互动：共享的布局仍然具有交互性，导航可以被中断。',
    '改善核心网页指标：TTFB（首次字节时间）、FCP（首次内容绘制）和 TTI（交互时间）。'
];
export const howNavigationWorksContentStream7 = '为了进一步改善导航体验，Next.js 使用 <Link> 组件执行[客户端转换](https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions)。';
export const howNavigationWorksContentClientSideTransitions1 = '### 客户端转换';
export const howNavigationWorksContentClientSideTransitions2 = '传统上，导航到服务器渲染的页面会触发整个页面加载。这会清除状态、重置滚动位置并阻止交互。';
export const howNavigationWorksContentClientSideTransitions3 = 'Next.js 通过使用 <Link> 组件进行客户端转换来避免这种情况。它不会重新加载页面，而是通过以下方式动态更新内容：';
export const howNavigationWorksContentClientSideTransitions3List = [
    '保留所有共享的布局和 UI。',
    '将当前页面替换为预加载的加载状态，或替换为新页面（如果可用）。'
];

export const whatCanMakeTransitionsSlowTitle = '## 什么会导致转变缓慢？';
export const whatCanMakeTransitionsSlowContent1 = '这些 Next.js 优化使导航更加快速且响应迅速。然而，在某些情况下，过渡仍然会感觉缓慢。以下是一些常见原因以及如何改善用户体验：';
export const whatCanMakeTransitionsSlowContent2 = '### 不使用 loading.tsx 的动态路由';
export const whatCanMakeTransitionsSlowContent3 = '当导航到动态路由时，客户端必须等待服务器响应才能显示结果到页面上。这会给用户一种应用程序没有响应的印象。';
export const whatCanMakeTransitionsSlowContent4 = '我们建议将loading.tsx添加到动态路由以启用部分预取，触发即时导航，并在路由呈现时显示加载UI。';
export const whatCanMakeTransitionsSlowContent4Code = `~~~app/blog/[slug]/loading.tsx~~~
export default function Loading() {
  return <LoadingSkeleton />
}`;
export const whatCanMakeTransitionsSlowContent4GTK = '在开发模式下，您可以使用 Next.js Devtools 来识别路由是静态的还是动态的。有关更多信息，请参阅 [devIndicators](https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators)。';
export const whatCanMakeTransitionsSlowContent5 = '### 不带 generateStaticParams 的动态段';
export const whatCanMakeTransitionsSlowContent6 = '如果动态段可以[预渲染](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)，但由于缺少 [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) 而无法预渲染，则路由将在请求时回退到动态渲染。';
export const whatCanMakeTransitionsSlowContent7 = '通过添加 generateStaticParams 确保路由在构建时静态生成';
export const whatCanMakeTransitionsSlowContent7Code = `~~~app/blog/[slug]/page.tsx~~~
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}`;
export const whatCanMakeTransitionsSlowContent8 = '### 网络速度慢';
export const whatCanMakeTransitionsSlowContent9 = '在网络速度慢或不稳定的情况下，预加载可能在用户点击链接之前无法完成。这可能会影响静态路由和动态路由。在这种情况下，loading.js 的回退可能不会立即显示，因为它尚未完成预加载。';
export const whatCanMakeTransitionsSlowContent10 = '为了提高用户的感知性能，您可以使用 useLinkStatus 钩子在过渡进行时向用户显示内联视觉反馈（例如链接上的旋转图标或文本闪烁）。';
export const whatCanMakeTransitionsSlowContent10Code = `~~~app/ui/loading-indicator.tsx~~~
'use client'
 
import { useLinkStatus } from 'next/link'
 
export default function LoadingIndicator() {
  const { pending } = useLinkStatus()
  return pending ? (
    <div role="status" aria-label="Loading" className="spinner" />
  ) : null
}`;
export const whatCanMakeTransitionsSlowContent11 = '您可以通过添加初始动画delay（例如 100 毫秒）并将动画设置为不可见（例如 opacity: 0）来“消除”加载指示器的抖动(debounce)。这意味着只有当导航时间超过指定的延迟时间时，加载指示器才会显示。';
export const whatCanMakeTransitionsSlowContent11Code = `~~~
.spinner {
  /* ... */
  opacity: 0;
  animation:
    fadeIn 500ms 100ms forwards,
    rotate 1s linear infinite;
}
 
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
 
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}`;
export const whatCanMakeTransitionsSlowContent11GTK = '您可以使用其他视觉反馈模式，例如进度条。点击[此处](https://github.com/vercel/react-transition-progress)查看示例。';
export const whatCanMakeTransitionsSlowContent12 = '### 禁用预取';
export const whatCanMakeTransitionsSlowContent13 = '您可以通过将 <Link> 组件的 prefetch 属性设置为 false 来禁用预加载。这有助于避免在渲染大量链接列表（例如无限滚动表）时浪费不必要的资源。';
export const whatCanMakeTransitionsSlowContent13Code = `~~~
<Link prefetch={false} href="/blog">
  Blog
</Link>`;
export const whatCanMakeTransitionsSlowContent14 = '然而，禁用预取也会带来一些不利影响：';
export const whatCanMakeTransitionsSlowContent14List = [
    '静态路由仅在用户点击链接时才会被获取。',
    '动态路由需要先在服务器上渲染，然后客户端才能导航到该服务器。'
];
export const whatCanMakeTransitionsSlowContent15 = '为了在不完全禁用预取功能的情况下减少资源占用，您可以仅在鼠标悬停时进行预取。这样可以将预取限制在用户更有可能访问的路由上，而不是视口中的所有链接。';
export const whatCanMakeTransitionsSlowContent15Code = `~~~app/ui/hover-prefetch-link.tsx~~~
'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
function HoverPrefetchLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)
 
  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  )
}`;
export const whatCanMakeTransitionsSlowContent16 = '### 水合(hydration)未完成';
export const whatCanMakeTransitionsSlowContent17 = '<Link> 是一个客户端组件，必须先进行 hydrated 才能预取路由。在首次访问时，较大的 JavaScript 包可能会延迟 hydrated，导致无法立即启动预取。';
export const whatCanMakeTransitionsSlowContent18 = 'React 通过选择性水合来缓解这个问题，你可以通过以下方式进一步改进：';
export const whatCanMakeTransitionsSlowContent18List = [
    '使用 [@next/bundle-analyzer](https://nextjs.org/docs/app/guides/package-bundling#analyzing-javascript-bundles) 插件识别并移除大型依赖项以缩减 bundle 大小。',
    '尽可能将逻辑从客户端移至服务器。请参阅[服务器和客户端组件](https://nextjs.org/docs/app/getting-started/server-and-client-components)文档以获取指导。'
];
export const example1 = '## 示例';
export const example2 = '### 原生历史 API';
export const example3 = 'Next.js 允许您使用原生的 [window.history.pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) 和 [window.history.replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) 方法来更新浏览器的历史记录堆栈，而无需重新加载页面。';
export const example4 = 'pushState 和 replaceState 调用集成到 Next.js 路由器中，允许您与 [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname) 和 [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params) 同步。';
export const example5 = '#### window.history.pushState';
export const example6 = '使用它来向浏览器的历史记录堆栈添加新条目。用户可以导航回之前的状态。例如，要对产品列表进行排序：';
export const example6Code = `~~~
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', \`?\${params.toString()}\`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}`;
export const example7 = '#### window.history.replaceState';
export const example8 = '使用它来替换浏览器历史记录堆栈中的当前条目。用户无法返回到之前的状态。例如，要切换应用程序的语言环境：';
export const example8Code = `~~~
'use client'
 
import { usePathname } from 'next/navigation'
 
export function LocaleSwitcher() {
  const pathname = usePathname()
 
  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = \`/\${locale}\${pathname}\`
    window.history.replaceState(null, '', newPath)
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}`

export const APIReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'Link Component',
        content: '使用内置的“next/link”组件实现快速客户端导航。',
        url: 'https://nextjs.org/docs/app/api-reference/components/link'
    },

    {
        title: 'page.js',
        content: 'page.js的 API 参考文档。',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/page'
    },
    {
        title: 'Prefetching',
        content: '了解如何在 Next.js 中配置预取。',
        url: 'https://nextjs.org/docs/app/guides/prefetching'
    },

]
