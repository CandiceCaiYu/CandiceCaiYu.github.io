export const title = '# 链接和导航';
export const description = '在Next.js中，有四种方法可以在路由之间导航:';
export const content = [
    "使用<Link>组件",
    "使用useRouter钩子(客户端组件)",
    "使用redirect函数(服务端组件)",
    "使用原生History API",
];
export const more = '本页将会介绍如何使用这些选项，并深入了解导航的工作原理。';

export const linkComponentTitle = '## <Link>组件';
export const linkComponentContent1 = '<Link>是一个内置的组件，它扩展HTML<a>标签，包括提供路由间的预取数据和客户端导航。这是Next.js中主要和推荐的路由间导航方式。';
export const linkComponentContent2 = '通过导入next/link就可以使用Link组件，然后传入href prop到这个component里';
export const linkComponentContent2Code = `~~~app/page.tsx

import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}`;
export const linkComponentContent3 = '更多<Link>的其他props可以参看API文档。';

export const useRouterHookTitle = '## useRouter()钩子';
export const useRouterHookContent1 = 'useRouter钩子以编程方式从客户端组件改变路由';
export const useRouterHookContent1Code = `~~~app/page.js;

'use client';
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter();
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}`;
export const useRouterHookContent3 = '通过API 文档查看全部的useRouter方法。';
export const useRouterHookContentRecommendTitle = '推荐';
export const useRouterHookContentRecommend = '使用 <Link> 组件在路由之间导航，除非您对使用 useRouter 有特殊要求。';


export const redirectFunctionTitle = '## redirect函数';
export const redirectFunctionContent1 = '如果是服务端组件，请使用redirect函数代替。';
export const redirectFunctionContent1Code =
    `~~~app/team/[id]/page.tsxapp/team/[id]/page.tsx

import { redirect } from 'next/navigation'
 
async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }
 
  // ...
}`;
export const redirectFunctionContentTips = [
    "默认情况下，redirect 返回 307（临时重定向）状态代码。在服务器操作中使用时，它会返回 303（参见其他），这通常用于在 POST 请求后重定向到成功页面。",
    "重定向内部会抛出错误，因此应在 try/catch 块之外调用它。",
    "可以在客户端组件中渲染过程中调用重定向，但不能在事件处理程序中调用。你可以改用 useRouter 钩子。",
    "redirect 也接受绝对路径 URL，可以用来重定向到外部链接。",
    "如果您想在渲染过程之前重定向，请使用 next.config.js 或中间件。",
];
export const redirectFunctionContentMore = '有关详细信息，请参阅重定向 API 参考。';

export const nativeHistoryApiTitle = '## 原生History API';
export const nativeHistoryApiContent1 = 'Next.js 允许您使用原生的 window.history.pushState 和 window.history.replaceState 方法来更新浏览器的历史记录堆栈，而无需重新加载页面。';
export const nativeHistoryApiContent2 = 'pushState 和 replaceState 已经集成到 Next.js 路由器中，允许您与 usePathname 和 useSearchParams 同步。';
export const nativeHistoryApiContent3 = '### window.history.pushState';
export const nativeHistoryApiContent4 = '使用它来向浏览器的历史记录堆栈添加新条目。用户可以导航回上一个状态。例如，要对产品列表进行排序：';
export const nativeHistoryApiContent5 = '### window.history.replaceState';
export const nativeHistoryApiContent6 = '使用它来替换浏览器历史记录堆栈中的当前条目。用户无法导航回之前的状态。例如，要切换应用程序的语言环境：';
export const nativeHistoryApiContent7 = '';

export const routingAndNavigationWorkTitle = '## 路线和导航的工作原理';
export const routingAndNavigationWorkContent1 = 'App Router 使用混合方法进行路由和导航。在服务器上，您的应用程序代码会自动按路由段进行代码拆分。而在客户端，Next.js 会预取并缓存路由段。这意味着，当用户导航到新路由时，浏览器不会重新加载页面，只有更改的路由段会重新渲染 - 从而改善导航体验和性能。';
export const routingAndNavigationWorkContent2 = '#### 代码分割';
export const routingAndNavigationWorkContent3 = '代码分割允许您将应用程序代码分割成更小的包，以供浏览器下载和执行。这减少了每个请求的传输数据量和执行时间，从而提高了性能。\n';
export const routingAndNavigationWorkContent4 = '服务器组件允许您的应用程序代码按路由段自动进行代码分割。这意味着导航时仅加载当前路由所需的代码。';
export const routingAndNavigationWorkContent5 = '#### 预取';
export const routingAndNavigationWorkContent6 = '预取是一种在用户访问路由之前在后台预加载路由的方法。';
export const routingAndNavigationWorkContent7 = 'Next.js 中有两种预取路由的方法：';
export const routingAndNavigationWorkContent8 = ['<Link> 组件：当路由在用户视口中可见时，会自动预取路由。预取发生在页面首次加载时或通过滚动进入视图时。', 'router.prefetch()： useRouter 钩子可用于以编程方式预取路由。'];
export const routingAndNavigationWorkContent9 = '<Link> 的默认预取行为（即当 prefetch 属性未指定或设置为 null 时）会根据您对 loading.js 的使用情况而有所不同。只有共享布局（沿着渲染的组件“树”向下直到第一个 loading.js 文件）才会被预取并缓存 30 秒。这降低了获取整个动态路由的成本，这意味着您可以显示即时加载状态，以便向用户提供更好的视觉反馈。';
export const routingAndNavigationWorkContent10 = '您可以通过将 prefetch 属性设置为 false 来禁用预取。或者，您可以通过将 prefetch 属性设置为 true 来预取超出加载边界的整个页面数据。';
export const routingAndNavigationWorkContent11 = '有关更多信息，请参阅 <Link> API 参考。';
export const routingAndNavigationWorkContent12 = '预取未在开发中启用，仅在生产中启用。';
export const routingAndNavigationWorkContent13 = '### 缓存';
export const routingAndNavigationWorkContent14 = 'Next.js 有一个内存客户端缓存叫Router Cache。当用户在应用程序中导航时，预取过的路由段和访问过的路由的React Server Component Payload会被存到缓存中。\n';
export const routingAndNavigationWorkContent15 = '这意味着在导航时，尽可能地重复使用缓存，而不是向服务器发出新请求——通过减少请求和传输的数据数量来提高性能。';
export const routingAndNavigationWorkContent16 = '了解更多关于Router cache的工作原理和配置';
export const routingAndNavigationWorkContent17 = '### 部分渲染';
export const routingAndNavigationWorkContent18 = '部分渲染意味着只有在导航时发生变化的路由段才会在客户端重新渲染，并且任何共享的段都会被保留。';
export const routingAndNavigationWorkContent19 = '例如，当在两个同级路由之间导航时，dashboard/setting和dashboard/analytics， setting页面会被卸载，而analytics页面会基于新的状态挂载，并且共享的dashboard布局将被保留。这种行为同样表现在连个同样的动态路由段上，比如/blog/[slug]/page， 从/blog/first导航到 /blog/second。';
export const routingAndNavigationWorkContent20 = '如果没有部分渲染，每次导航将会导致整个页面在客户端重新渲染。只渲染发生改变的可减少传输的数据量和执行时间，从而提升性能。';
export const routingAndNavigationWorkContent21 = '### 软导航';
export const routingAndNavigationWorkContent22 = '浏览器在页面之间导航时会执行“硬导航”。Next.js App Router 可在页面之间启用“软导航”，确保仅重新渲染已更改的路由段（部分渲染）。这样可以在导航期间保留客户端 React 状态。';
export const routingAndNavigationWorkContent23 = '### 后退和前进导航';
export const routingAndNavigationWorkContent24 = '默认情况下，Next.js 将维护向前和向后导航的滚动位置，并重新使用路由器缓存中的路由段。\n';
export const routingAndNavigationWorkContent25 = '### pages/ 和 app/ 之间的路由';
export const routingAndNavigationWorkContent26 = '当从 pages/ 逐步迁移到 app/ 时，Next.js 路由器将自动处理两者之间的硬导航。为了检测从 pages/ 到 app/ 的转换，有一个客户端路由器过滤器利用应用路由的概率检查，这有时会导致误报。默认情况下，这种情况应该非常罕见，因为我们将误报可能性配置为 0.01%。此可能性可以通过 next.config.js 中的experimental.clientRouterFilterAllowedRate 选项进行自定义。需要注意的是，降低误报率会增加客户端包中生成的过滤器的大小。';
export const routingAndNavigationWorkContent27 = '或者，如果您希望完全禁用此处理并手动管理 pages/ 和 app/ 之间的路由，则可以在 next.config.js 中将experimental.clientRouterFilter 设置为 false。禁用此功能后，默认情况下，与应用路由重叠的页面中的任何动态路由都不会正确导航到。';

