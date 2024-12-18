export const title = '# 加载 UI 和流式传输';
export const content1 = '特殊文件 loading.js 可帮助您使用 React Suspense 创建有意义的加载 UI。使用此约定，您可以在加载路由段的内容时显示来自服务器的即时加载状态。渲染完成后，新内容将自动交换。';
export const content1Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/loading-ui.avif)';
export const instantLoadingStateTitle = '## 即时加载状态';
export const instantLoadingStateContent1 = '即时加载状态是导航后立即显示的UI。您可以预渲染加载指示器（例如骨架和旋转器），或未来屏幕中较小但有意义的部分（例如封面照片、标题等）。这有助于用户了解应用正在响应并提供更好的用户体验。';
export const instantLoadingStateContent2 = '通过在文件夹中添加 loading.js 文件来创建加载状态。';
export const instantLoadingStateContent2Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/loading-special-file.avif)';
export const instantLoadingStateContent2Code = `~~~app/dashboard/loading.tsx~~~

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}`;
export const instantLoadingStateContent3 = '在同一个文件夹中，loading.js 将嵌套在 layout.js 中。它将自动将 page.js 文件及其下面的所有子文件包裹在 <Suspense> 边界中。';
export const instantLoadingStateContent3Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/loading-overview.avif)';

export const instantLoadingStateTips1 = [
    "即使使用以服务器为中心的路由，导航也是即时的。",
    "导航是可中断的，这意味着更改路由时无需等待路由内容完全加载即可导航到另一条路由。",
    "在加载新路由时，共享布局仍保持交互性。"
];
export const instantLoadingStateTips2 = "推荐";
export const instantLoadingStateTips3 = "对路由段（布局和页面）使用 loading.js 约定，因为 Next.js 优化了此功能。";

export const streamingWithSuspenseTitle = '## 使用 Suspense 进行流式传输';
export const streamingWithSuspenseContent1 = "除了 loading.js 之外，您还可以为自己的UI组件手动创建 Suspense Boundaries。App Router 支持在 Node.js 和 Edge 运行时使用 Suspense 进行流式传输。";
export const streamingWithSuspenseTips = "某些浏览器会缓冲流式响应。您可能在响应超过 1024 字节之前看不到流式响应。这通常只会影响“hello world”应用程序，而不会影响实际应用程序。";
export const streamingWithSuspenseContent2 = "### 什么是流式传输？";
export const streamingWithSuspenseContent3 = "要了解流式传输在 React 和 Next.js 中的工作方式，了解服务器端渲染 (SSR) 及其局限性会很有帮助。";
export const streamingWithSuspenseContent4 = "使用 SSR，用户需要完成一系列步骤才能看到页面并与之交互：";
export const streamingWithSuspenseContent4List = [
    "首先，在服务器上获取给定页面的所有数据。",
    "然后，服务器渲染页面的 HTML。",
    "页面的 HTML、CSS 和 JavaScript 被发送到客户端。",
    "使用生成的 HTML 和 CSS 显示非交互式用户界面。",
    "最后，React 补充用户界面以使其具有交互性。"
];
export const streamingWithSuspenseContent4Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/server-rendering-without-streaming-chart.avif)';

export const streamingWithSuspenseContent5 = "这些步骤是连续且阻塞的，这意味着服务器只有在获取所有数据后才能渲染页面的 HTML。而且，在客户端上，React 只有在下载完页面中所有组件的代码后才能补充 UI。";
export const streamingWithSuspenseContent6 = "通过 React 和 Next.js 的 SSR，可以尽快向用户显示非交互式页面，从而帮助提高感知的加载性能。";
export const streamingWithSuspenseContent6Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/server-rendering-without-streaming.avif)';
export const streamingWithSuspenseContent7 = "然而，它仍然很慢，因为在向用户显示页面之前需要完成服务器上的所有数据提取。";
export const streamingWithSuspenseContent7Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/server-rendering-with-streaming.avif)';
export const streamingWithSuspenseContent8 = "通过流式传输，您可以将页面的 HTML 分解为更小的块，然后逐步将这些块从服务器发送到客户端。";
export const streamingWithSuspenseContent9 = "这使得页面的各个部分能够更快地显示，而无需等待所有数据加载后才能呈现任何 UI。";
export const streamingWithSuspenseContent10 = "流式传输非常适合 React 的组件模型，因为每个组件都可以被视为一个块。优先级较高的组件（例如产品信息）或不依赖数据的组件（例如布局）可以先发送，React 可以更早开始处理。优先级较低的组件（例如评论、相关产品）可以在其数据被获取后在同一服务器请求中发送。";
export const streamingWithSuspenseContent10Image = '![loading-ui](/nextjsDoc/buildingYourApplication/routing/server-rendering-with-streaming-chart.avif)';
export const streamingWithSuspenseContent11 = "当您想防止长数据请求阻止页面渲染时，流式传输尤其有用，因为它可以减少首次字节时间 (TTFB) 和首次内容绘制 (FCP)。它还有助于缩短交互时间 (TTI)，尤其是在较慢的设备上。";
export const streamingWithSuspenseContent12 = "### 示例";
export const streamingWithSuspenseContent13 = "<Suspense> 的工作原理是包装一个执行异步操作（例如获取数据）的组件，在操作发生时显示loading UI（例如骨架、微调器），然后在操作完成后交换组件。";
export const streamingWithSuspenseContent13Code = `~~~app/dashboard/page.tsx;~~~;

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
}`;
export const streamingWithSuspenseContent14 = "通过使用 Suspense，您可以获得以下好处：";
export const streamingWithSuspenseContent14List = [
    "流式服务器渲染 - 从服务器向客户端逐步渲染 HTML。",
    "选择性水合 - React 根据用户交互确定首先使哪些组件具有交互性的优先级。"
];
export const streamingWithSuspenseContent15 = "有关更多 Suspense 示例和用例，请参阅 React 文档。";
export const streamingWithSuspenseContent16 = "### SEO";
export const streamingWithSuspenseContent16List = [
    "Next.js 将等待 generateMetadata 中的数据提取完成后再将 UI 流式传输到客户端。这可确保流式传输响应的第一部分包含 <head> 标记。",
    "由于流式传输是服务器呈现的，因此不会影响 SEO。您可以使用 Google 的 Rich Results Test 工具查看您的网页在 Google 的网络爬虫中的显示方式，并查看序列化的 HTML（源代码）。"
];
export const streamingWithSuspenseContent17 = "### 状态码";
export const streamingWithSuspenseContent18 = "流式传输时，将返回 200 状态代码以表示请求成功。";
export const streamingWithSuspenseContent19 = "服务器仍可以在流式传输内容本身中向客户端传达错误或问题，例如，在使用重定向或 notFound 时。由于响应标头已发送到客户端，因此无法更新响应的状态代码。这不会影响 SEO。";
