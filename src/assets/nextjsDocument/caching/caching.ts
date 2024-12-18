export const title = '# Next.js 中的缓存';
export const content = 'Next.js 通过缓存渲染工作和数据请求来提高应用程序的性能并降低成本。本页面详细介绍了 Next.js 缓存机制、可用于配置它们的 API 以及它们如何相互交互。';
export const contentTips = '本页可帮助您了解 Next.js 的底层工作原理，但并非提高 Next.js 效率的必备知识。Next.js 的大多数缓存启发式方法由您的 API 使用情况决定，并且具有默认值，可在零配置或最低配置的情况下获得最佳性能。如果您想跳到示例，请从此处开始。';
export const overviewTitle = '## 概述';
export const overviewContent1 = '以下是不同缓存机制及其用途的高级概述：';
export const overviewContent1Table = [
    {
        mechanism: '请求记忆(Request Memoization)',
        what: '函数的返回值',
        where: 'Server',
        purpose: '在 React 组件树中重用数据',
        duration: '每个请求的生命周期'
    },
    {
        mechanism: '数据缓存(Data Cache)',
        what: '数据',
        where: 'Server',
        purpose: '跨用户请求和部署存储数据',
        duration: '持久性（可以重新验证）'
    },
    {
        mechanism: '完整路由缓存(Full Route Cache)',
        what: 'HTML and RSC payload',
        where: 'Server',
        purpose: '降低渲染成本并提高性能',
        duration: '持久性（可以重新验证）'
    },
    {
        mechanism: '路由器缓存(Router Cache)',
        what: 'RSC Payload',
        where: 'Client',
        purpose: '减少导航时的服务器请求',
        duration: '用户会话或基于时间'
    },
];
export const overviewContent2 = '默认情况下，Next.js 会尽可能多地缓存以提高性能并降低成本。这意味着路由会静态渲染，并且数据请求会被缓存，除非您选择退出。下图显示了默认的缓存行为：在构建时静态渲染路由时以及首次访问静态路由时。';
export const overviewContent2Img = '![caching-overview](/nextjsDoc/buildingYourApplication/caching/caching-overview.avif)';
export const overviewContent3 = '缓存行为会根据路由是静态呈现还是动态呈现、数据是否缓存以及请求是初次访问还是后续导航而发生变化。您可以根据自己的使用情况，为各个路由和数据请求配置缓存行为。';

export const requestMemoizationTitle = '## 请求记忆';
export const requestMemoizationContent1 = 'React 扩展了 fetch API，以自动记住具有相同 URL 和选项的请求。这意味着您可以在 React 组件树中的多个位置针对相同数据调用 fetch 函数，而只需执行一次。';
export const requestMemoizationContent1Img = '![deduplicated-fetch-requests](/nextjsDoc/buildingYourApplication/caching/deduplicated-fetch-requests.avif)';
export const requestMemoizationContent2 = '例如，如果您需要在整个路由中使用相同的数据（例如在布局、页面和多个组件中），则不必在树的顶部获取数据，也不必在组件之间转发 props。相反，您可以在需要数据的组件中获取数据，而不必担心通过网络对同一数据进行多次请求对性能的影响。';
export const requestMemoizationContent2Code = `~~~app/example.tsx

async function getItem() {
  // The \`fetch\` function is automatically memoized and the result
  // is cached
  const res = await fetch('https://.../item/1')
  return res.json()
}
 
// This function is called twice, but only executed the first time
const item = await getItem() // cache MISS
 
// The second call could be anywhere in your route
const item = await getItem() // cache HIT`;
export const requestMemoizationContent3 = '#### 请求记忆的工作原理';
export const requestMemoizationContent3Img = '![request-memoization](/nextjsDoc/buildingYourApplication/caching/request-memoization.avif)';
export const requestMemoizationContent3List = [
    '在渲染路由时，第一次调用特定请求时，其结果将不会在内存中，并且将是缓存 MISS。',
    '因此，将执行getItem函数，从外部源获取数据，并将结果存储在内存中。',
    '同一次渲染过程中该请求的后续函数调用将会是一次缓存命中，数据将从内存中返回而不执行getItem函数。',
    '一旦路由被渲染并且渲染过程完成，内存就会“reset”并且所有请求记忆条目都会被清除。'
];
export const requestMemoizationContent3TipsList = [
    '请求记忆化是 React 的功能，而不是 Next.js 的功能。它包含在这里是为了展示它如何与其他缓存机制交互。',
    '记忆化仅适用于fetch请求中的 GET 方法。',
    '记忆化仅适用于 React 组件树，这意味着:',
    [
        '它适用于 generateMetadata、generateStaticParams、Layouts、Pages 和其他服务器组件中的获取请求。',
        '它不适用于路由处理程序中的fetch请求，因为它们不是 React 组件树的一部分。'
    ],
    '对于不适合获取的情况（例如某些数据库客户端、CMS 客户端或 GraphQL 客户端），您可以使用 React cache函数来记忆函数。'
];
export const requestMemoizationContent4 = '### 持续时间';
export const requestMemoizationContent5 = '缓存持续服务器请求的整个生命周期，直到 React 组件树完成渲染。';
export const requestMemoizationContent6 = '### 重新验证';
export const requestMemoizationContent7 = '由于记忆不会在服务器请求之间共享，并且仅在渲染期间适用，因此无需重新验证。';
export const requestMemoizationContent8 = '### 选择退出';
export const requestMemoizationContent9 = '记忆化仅适用于获取请求中的 GET 方法，其他方法（例如 POST 和 DELETE）不会被记忆化。此默认行为是 React 的优化，我们不建议选择退出。';
export const requestMemoizationContent10 = '要管理单个请求，您可以使用 AbortController 中的signal属性。但是，这不会使请求退出记忆，而是中止正在进行的请求。';
export const requestMemoizationContent10Code = `~~~app/example.tsx

const { signal } = new AbortController()
fetch(url, { signal })`;

export const dataCacheTitle = '## 数据缓存';
export const dataCacheContent1 = 'Next.js 具有内置数据缓存，可在传入的服务器请求和部署中持久化保存数据提取的结果。这是因为 Next.js 扩展了原生fetch API，允许服务器上的每个请求设置自己的持久化缓存语义。';
export const dataCacheContent1Tips = '在浏览器中，fetch 的缓存选项表示请求将如何与浏览器的 HTTP 缓存交互；在 Next.js 中，缓存选项表示服务器端请求将如何与服务器的数据缓存交互。';
export const dataCacheContent2 = '您可以使用 fetch 的 cache 和 next.revalidate 选项来配置缓存行为。';
export const dataCacheContent3 = '#### 数据缓存的工作原理';
export const dataCacheContent3Img = '![data-cache](/nextjsDoc/buildingYourApplication/caching/data-cache.avif)';
export const dataCacheContent3List = [
    '在渲染过程中第一次调用带有“force-cache”选项的fetch请求时，Next.js 会检查数据缓存中是否存在缓存response。',
    '如果发现缓存的响应，则会立即返回并记忆。',
    '如果未找到缓存的响应，则向数据源发出请求，将结果存储在数据缓存中并进行记忆。',
    '对于未缓存的数据（例如，未定义缓存选项或使用 { cache："no-store" }），结果始终从数据源获取并记忆。',
    '无论数据是否缓存，请求总是会被记住，以避免在 React 渲染过程中对相同数据进行重复请求。'
];
export const dataCacheContent3TipsTitle = '数据缓存和请求记忆之间的差异:';
export const dataCacheContent3TipsText = '虽然两种缓存机制都可以通过重复使用缓存数据来提高性能，但是数据缓存在传入的请求和部署中是持久的，而记忆仅持续请求的整个生命周期。';

export const durationTitle = '### 持续时间';
export const durationContent = '除非您重新验证或选择退出，否则数据缓存在传入请求和部署中是持久的。';

export const revalidatingTitle = '### 重新验证';
export const revalidatingContent1 = '可以通过两种方式重新验证缓存数据：';
export const revalidatingContent1List = [
    '基于时间的重新验证：经过一段时间并发出新请求后重新验证数据。这对于不经常更改且新鲜度不太重要的数据非常有用。',
    '按需重新验证：根据事件（例如表单提交）重新验证数据。按需重新验证可以使用基于标签或基于路径的方法一次性重新验证数据组。当您想确保尽快显示最新数据时（例如，当无头 CMS 中的内容更新时），这种方法非常有用。'

];
export const revalidatingContent2 = '#### 基于时间的重新验证';
export const revalidatingContent3 = '要在时间间隔内重新验证数据，您可以使用 fetch 的 next.revalidate 选项来设置资源的缓存寿命（以秒为单位）。';
export const revalidatingContent3Code = `~~~// Revalidate at most every hour
fetch('https://...', { next: { revalidate: 3600 } })`;
export const revalidatingContent4 = '或者，您可以使用路由段配置选项来配置段中的所有fetch请求，或者用于无法使用fetch的情况。';
export const revalidatingContent5 = '#### 基于时间的重新验证的工作原理';
export const revalidatingContent5Img = '![time-based-revalidation](/nextjsDoc/buildingYourApplication/caching/time-based-revalidation.avif)';
export const revalidatingContent5List = [
    '第一次调用带有 revalidate 的获取请求时，数据将从外部数据源获取并存储在数据缓存中。',
    '在指定时间范围内（例如 60 秒）调用的任何请求都将返回缓存数据。',
    '在该时间范围之后，下一个请求仍将返回缓存的（现在已过时的）数据。',
    [
        'Next.js 将在后台触发数据的重新验证。',
        '一旦成功获取数据，Next.js 将使用新数据更新数据缓存。',
        '如果后台重新验证失败，之前的数据将保持不变。'
    ]
];
export const revalidatingContent6 = '这类似于重新验证时过期(stale-while-revalidate)的行为。';
export const revalidatingContent7 = '#### 按需重新验证';
export const revalidatingContent8 = '可以根据路径（revalidatePath）或缓存标签（revalidateTag）按需重新验证数据。';
export const revalidatingContent9 = '#### 按需重新验证的工作原理';
export const revalidatingContent9Img = '![on-demand-revalidation](/nextjsDoc/buildingYourApplication/caching/on-demand-revalidation.avif)';
export const revalidatingContent9List = [
    '第一次调用获取请求时，数据将从外部数据源获取并存储在数据缓存中。',
    '当触发按需重新验证时，相应的缓存条目将从缓存中清除。',
    ['这与基于时间的重新验证不同，后者将陈旧数据保留在缓存中，直到获取新数据。'],
    '下次再请求时，又会是缓存MISS，从外部数据源中获取数据并存放到Data Cache中。'
];
export const revalidatingContent10 = '### 选择退出';
export const revalidatingContent11 = '如果您不想缓存来自 fetch 的响应，您可以执行以下操作：';
export const revalidatingContent11Code = `~~~let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })`;

export const fullRouteCacheTitle = '## 完整路由缓存';
export const fullRouteCacheContent1TipsTitle = '相关术语：';
export const fullRouteCacheContent1TipsText = '您可能会看到术语“自动静态优化”，“静态站点生成”或“静态渲染”交替使用，指的是在构建时渲染和缓存应用程序路由的过程。';
export const fullRouteCacheContent2 = 'Next.js 会在构建时自动渲染和缓存路由。这是一项优化，允许您提供缓存的路由，而不是针对每个请求在服务器上进行渲染，从而加快页面加载速度。';
export const fullRouteCacheContent3 = '要了解完整路由缓存的工作原理，了解 React 如何处理渲染以及 Next.js 如何缓存结果会很有帮助：';
export const fullRouteCacheContent4 = '### 1. 服务器上的 React 渲染';
export const fullRouteCacheContent5 = '在服务器上，Next.js 使用 React 的 API 来协调渲染。渲染工作被分成多个块：按单独的路由段和 Suspense 边界。';
export const fullRouteCacheContent6 = '每个块分两步渲染:';
export const fullRouteCacheContent6List = [
    'React 将服务器组件渲染为一种针对流式传输进行了优化的特殊数据格式，称为 React 服务器组件有效负载(RSC payload)。',
    'Next.js 使用 React Server Component Payload 和 Client Component JavaScript 指令在服务器上呈现 HTML。'
];
export const fullRouteCacheContent7 = '这意味着我们不必等待所有内容呈现完毕再缓存工作或发送响应。相反，我们可以在工作完成时流式传输响应。';
export const fullRouteCacheContent7TipsTitle = '什么是 React 服务器组件有效负载(RSC payload)?';
export const fullRouteCacheContent7TipsDescription = 'React 服务器组件负载是渲染的 React 服务器组件树的紧凑二进制表示。客户端上的 React 使用它来更新浏览器的 DOM。React 服务器组件负载包含：';
export const fullRouteCacheContent7TipsList = [
    '服务器组件的渲染结果',
    '客户端组件应呈现的位置的占位符以及对其 JavaScript 文件的引用',
    '从服务器组件传递到客户端组件的任何 props',
];
export const fullRouteCacheContent7TipsMore = '要了解更多信息，请参阅服务器组件文档。';
export const fullRouteCacheContent8 = '### 2. Next.js 服务器缓存（完整路由缓存）';
export const fullRouteCacheContent8Img = '![full-route-cache](/nextjsDoc/buildingYourApplication/caching/full-route-cache.avif)';
export const fullRouteCacheContent9 = 'Next.js 的默认行为是将路由的渲染结果（React Server Component Payload 和 HTML）缓存在服务器上。这适用于构建时或重新验证期间静态渲染的路由。';
export const fullRouteCacheContent10 = '### 3. 客户端上的 React Hydration 和 Reconciliation';
export const fullRouteCacheContent11 = '在请求时，在客户端上：';
export const fullRouteCacheContent11List = [
    'HTML 用于立即显示客户端和服务器组件的快速非交互式初始预览。',
    'React Server Components Payload 用于协调客户端和渲染的服务器组件树，并更新 DOM。',
    'JavaScript 指令用于补充客户端组件并使应用程序具有交互性。',
];
export const fullRouteCacheContent12 = '### 4. 客户端上的 Next.js 缓存（路由器缓存）';
export const fullRouteCacheContent13 = 'React 服务器组件有效负载存储在客户端路由器缓存中 - 一个单独的内存缓存，按单个路由段拆分。此路由器缓存用于通过存储之前访问过的路由和预取未来路由来改善导航体验。';
export const fullRouteCacheContent14 = '### 5. 后续导航';
export const fullRouteCacheContent15 = '在后续导航或预取期间，Next.js 将检查 React Server Components Payload 是否存储在路由器缓存(Router Cache)中。 如果是，它将跳过向服务器发送新请求。';
export const fullRouteCacheContent16 = '如果路由段不在缓存中，Next.js 将从服务器获取 React Server Components Payload，并填充客户端上的路由器缓存。';
export const fullRouteCacheContent17 = '### 静态和动态渲染';
export const fullRouteCacheContent18 = '路由在构建时是否缓存取决于它是静态还是动态渲染。静态路由默认缓存，而动态路由在请求时渲染，不缓存。';
export const fullRouteCacheContent19 = '这张图展示了静态和动态渲染的路由之间的区别，以及缓存和非缓存数据：';
export const fullRouteCacheContent19Img = '![static-and-dynamic-routes](/nextjsDoc/buildingYourApplication/caching/static-and-dynamic-routes.avif)';
export const fullRouteCacheContent20 = '了解有关静态和动态渲染的更多信息。';
export const fullRouteCacheContent21 = '### 持续时间';
export const fullRouteCacheContent22 = '默认情况下，完整路由缓存是持久性的。这意味着渲染输出会跨用户请求进行缓存。';
export const fullRouteCacheContent23 = '### 无效';
export const fullRouteCacheContent24 = '有两种方法可以使完整路由缓存无效：';
export const fullRouteCacheContent24List = [
    '重新验证数据：重新验证数据缓存，反过来会通过重新渲染服务器上的组件并缓存新的渲染输出使路由器缓存无效。',
    '重新部署：与在部署过程中仍然存在的数据缓存不同，完整路由缓存会在新的部署中被清除。'
];
export const fullRouteCacheContent25 = '### 选择退出';
export const fullRouteCacheContent26 = '您可以选择退出完整路由缓存，或者换句话说，为每个传入请求动态渲染组件，方法如下：';
export const fullRouteCacheContent26List = [
    '使用动态 API：这将从完整路由缓存中退出，并在请求时动态渲染它。数据缓存仍可使用。',
    '使用 dynamic = "force-dynamic" 或 revalidate = 0 路由段配置选项：这将跳过完整路由缓存和数据缓存。这意味着组件将在每次传入服务器的请求时渲染并获取数据。路由器缓存（Router cache）仍将适用，因为它是客户端缓存。',
    '选择退出数据缓存：如果路由有未缓存的fetch请求，这路由将选择退出完整路由缓存。对于每个传入请求，将获取特定fetch请求的数据。未选择退出缓存的其他获取请求仍将缓存在数据缓存中。这允许缓存数据和非缓存数据的混合。'
];

export const clientSideRouterCacheTitle = '## 客户端路由器缓存';
export const clientSideRouterCacheContent1 = 'Next.js 有一个内存客户端路由器缓存，用于存储路由段的 RSC payload，按布局、加载状态和页面拆分。';
export const clientSideRouterCacheContent2 = '当用户在路由之间导航时，Next.js 会缓存已访问的路由段并预取用户可能导航到的路由。这样可以实现即时的后退/前进导航，导航之间无需重新加载整个页面，并保留 React 状态和浏览器状态。';
export const clientSideRouterCacheContent3 = '使用路由器缓存：';
export const clientSideRouterCacheContent3List = [
    'Layouts被缓存并在导航（部分渲染）时重复使用。',
    'Loading states 被缓存并在导航中重复使用，以实现即时导航。',
    '默认情况下，Pages不会被缓存，但在浏览器向前和向后导航时会被重复使用。您可以使用实验性的 staleTimes 配置选项为页面启用缓存。'
];
export const clientSideRouterCacheContent3Tips = '此缓存专门适用于 Next.js 和服务器组件，与浏览器的 bfcache 不同，但结果类似。';
export const clientSideRouterCacheContent4 = '### 持续时间';
export const clientSideRouterCacheContent5 = '缓存存储在浏览器的临时内存中。两个因素决定了路由器缓存的持续时间：';
export const clientSideRouterCacheContent5List = [
    '会话(session)：缓存在导航过程中持续存在。但是，页面刷新后缓存会被清除。',
    '自动失效期：布局和加载状态的缓存会在特定时间后自动失效。持续时间取决于资源的预取方式，以及资源是否为静态生成：',
    ['默认预取（prefetch={null} 或未指定）：动态页面不缓存，静态页面缓存 5 分钟。',
        '完全预取（prefetch={true} 或 router.prefetch）：静态和动态页面都需要 5 分钟。'
    ]
];
export const clientSideRouterCacheContent6 = '虽然页面刷新将清除所有缓存的段，但自动失效期仅影响从预取时起的单个段。';
export const clientSideRouterCacheContent6Tips = '实验性的 staleTimes 配置选项可用于调整上面提到的自动失效时间。';
export const clientSideRouterCacheContent7 = '### 无效';
export const clientSideRouterCacheContent8 = '有两种方法可以使路由器缓存无效：';
export const clientSideRouterCacheContent8List = [
    '在服务器操作中：',
    [
        '使用 (revalidatePath) 按路径或使用 (revalidateTag) 按缓存标签按需重新验证数据',
        '使用 cookies.set 或 cookies.delete 会使路由器缓存无效，以防止使用 cookie 的路由变得陈旧（例如身份验证）。',
    ],
    '调用 router.refresh 将使路由器缓存无效，并向服务器发出当前路由的新请求。'
];
export const clientSideRouterCacheContent9 = '### 选择退出';
export const clientSideRouterCacheContent10 = '从 Next.js 15 开始，页面段默认处于退出状态。';
export const clientSideRouterCacheContent10Tips = '您还可以通过将 <Link> 组件的 prefetch 属性设置为 false 来选择退出预取。';

export const cacheInteractionsTitle = '## 缓存交互';
export const cacheInteractionsContent1 = '配置不同的缓存机制时，了解它们如何相互作用非常重要：';
export const cacheInteractionsContent2 = '### 数据缓存和完整路由缓存';
export const cacheInteractionsContent2List = [
    '重新验证或退出数据缓存将使完整路由缓存无效，因为渲染输出取决于数据。',
    '使完整路由缓存失效或选择退出不会影响数据缓存。您可以动态渲染包含缓存数据和未缓存数据的路由。当您的大多数页面都使用缓存数据，但有一些组件依赖于需要在请求时获取的数据时，这种方法非常有用。您可以动态渲染，而不必担心重新获取所有数据对性能的影响。'
];
export const cacheInteractionsContent3 = '### 数据缓存和客户端路由器缓存';
export const cacheInteractionsContent3List = [
    '要立即使数据缓存和路由器缓存无效，您可以在服务器操作中使用 revalidatePath 或 revalidateTag。',
    '重新验证路由处理程序中的数据缓存不会立即使路由器缓存失效，因为路由处理程序不与特定路由绑定。这意味着路由器缓存将继续提供先前的payload，直到硬刷新或自动失效期已过。'
];

export const apisTitle = '## APIs';
export const apisContent1 = '表概述了不同的 Next.js API 如何影响缓存：';
export const apisContent1Table = [
    {api: '<Link prefetch>', routerCache: 'Cache', fullRouteCache: '', dataCache: '', reactCache: ''},
    {api: 'router.prefetch', routerCache: 'Cache', fullRouteCache: '', dataCache: '', reactCache: ''},
    {api: 'router.refresh', routerCache: 'Revalidate', fullRouteCache: '', dataCache: '', reactCache: ''},
    {api: 'fetch', routerCache: '', fullRouteCache: '', dataCache: 'Cache', reactCache: 'Cache'},
    {api: 'fetch options.cache', routerCache: '', fullRouteCache: '', dataCache: 'Cache | Opt out', reactCache: ''},
    {
        api: 'fetch options.next.revalidate',
        routerCache: '',
        fullRouteCache: 'Revalidate',
        dataCache: 'Revalidate',
        reactCache: ''
    },
    {api: 'fetch options.next.tags', routerCache: '', fullRouteCache: 'Cache', dataCache: 'Cache', reactCache: ''},
    {
        api: 'revalidateTag',
        routerCache: 'Revalidate (Server Action)',
        fullRouteCache: 'Revalidate',
        dataCache: 'Revalidate',
        reactCache: ''
    },
    {
        api: 'revalidatePath',
        routerCache: 'Revalidate (Server Action)',
        fullRouteCache: 'Revalidate',
        dataCache: 'Revalidate',
        reactCache: ''
    },
    {
        api: 'const revalidate',
        routerCache: '',
        fullRouteCache: 'Cache | Opt out',
        dataCache: 'Cache | Opt out',
        reactCache: ''
    },
    {
        api: 'const dynamic',
        routerCache: '',
        fullRouteCache: 'Cache | Opt out',
        dataCache: 'Cache | Opt out',
        reactCache: ''
    },
    {
        api: 'cookies',
        routerCache: 'Revalidate (Server Action)',
        fullRouteCache: 'Opt out',
        dataCache: '',
        reactCache: ''
    },
    {api: 'headers, searchParams', routerCache: '', fullRouteCache: 'Opt out', dataCache: '', reactCache: ''},
    {api: 'generateStaticParams', routerCache: '', fullRouteCache: 'Cache', dataCache: '', reactCache: ''},
    {api: 'React.cache', routerCache: '', fullRouteCache: '', dataCache: '', reactCache: 'Cache'},
    {api: 'unstable_cache', routerCache: '', fullRouteCache: '', dataCache: 'Cache', reactCache: ''},

];
export const apisContent2 = '### <Link>';
export const apisContent3 = '默认情况下， <Link> 组件会自动从完整路由缓存中预获取路由，并将RSC payload添加到路由器缓存中。';
export const apisContent4 = '要禁用预取，可以将 prefetch 属性设置为 false。但这不会永久跳过缓存，当用户访问路由时，路由段仍会在客户端缓存。';
export const apisContent5 = '了解有关 <Link> 组件的更多信息。';
export const apisContent6 = '### router.prefetch';
export const apisContent7 = 'useRouter 钩子的 prefetch 选项可用于手动预取路由。这会将 React Server Component Payload 添加到路由器缓存中。';
export const apisContent8 = '参见 useRouter 钩子 API 参考。';
export const apisContent9 = '### router.refresh';
export const apisContent10 = 'useRouter 钩子的刷新选项可用于手动刷新路由。这将完全清除路由器缓存，并向服务器发出当前路由的新请求。刷新不会影响数据或完整路由缓存。';
export const apisContent10Text = '渲染的结果将在客户端上进行协调，同时保留 React 状态和浏览器状态。';
export const apisContent11 = '### fetch';
export const apisContent12 = '从 fetch 返回的数据会自动缓存在数据缓存中。';
export const apisContent13 = '如果您不想缓存来自 fetch 的响应，您可以执行以下操作：';
export const apisContent13Code = `~~~let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })`;
export const apisContent14 = '请参阅 fetch API 参考以获取更多选项。';
export const apisContent15 = '### fetch options.cache';
export const apisContent16 = '您可以通过将cache选项设置为force-cache来选择将单个fetch内容放入缓存中';
export const apisContent16Code = `~~~// Opt into caching
fetch(\`https://...\`, { cache: 'force-cache' })`;
export const apisContent17 = '### fetch options.next.revalidate';
export const apisContent18 = '您可以使用 fetch 的 next.revalidate 选项来设置单个 fetch 请求的重新验证期（以秒为单位）。这将重新验证数据缓存，进而重新验证完整路由缓存。将fetch新数据，并在服务器上重新渲染组件。';
export const apisContent18Code1 = `~~~// Revalidate at most after 1 hour
fetch(\`https://...\`, { next: { revalidate: 3600 } })`;
export const apisContent19Title = '### fetch options.next.tags and revalidateTag';
export const apisContent19 = 'Next.js 有一个缓存标记系统，用于细粒度的数据缓存和重新验证。';
export const apisContent19List = [
    '当使用 fetch 或 unstable_cache 时，您可以选择用一个或多个标签来标记缓存条目。',
    '然后，您可以调用 revalidateTag 来清除与该标签相关的缓存条目。'
];
export const apisContent20 = '例如，你可以在获取数据时设置标签：';
export const apisContent20Code = `~~~// Cache data with a tag
fetch(\`https://...\`, { next: { tags: ['a', 'b', 'c'] } })`;
export const apisContent21 = '然后，使用标签调用 revalidateTag 来清除缓存条目：';
export const apisContent21Code = `~~~// Revalidate entries with a specific tag
revalidateTag('a')`;
export const apisContent22 = '您可以在两个地方使用 revalidateTag，具体取决于您要实现的目标：';
export const apisContent22List = [
    '路由处理程序 - 用于响应第三方事件（例如 webhook）重新验证数据。这不会立即使路由器缓存失效，因为路由器处理程序不与特定路由绑定。',
    '服务器操作 - 在用户操作（例如表单提交）后重新验证数据。这将使相关路由的路由器缓存无效。'
];
export const apisContent23 = '### revalidatePath';
export const apisContent24 = 'revalidatePath 允许您手动重新验证数据，并在单个操作中重新渲染特定路径下的路由段。调用 revalidatePath 方法会重新验证数据缓存，进而使完整路由缓存失效。';
export const apisContent24Code = `~~~revalidatePath('/')`;
export const apisContent25 = '您可以在两个地方使用 revalidatePath，具体取决于您要实现的目标：';
export const apisContent25List = [
    '路由处理程序 - 响应第三方事件（例如 webhook）重新验证数据。',
    '服务器操作 - 在用户交互（例如表单提交、单击按钮）后重新验证数据。'
];
export const apisContent26 = '有关更多信息，请参阅 revalidatePath API 参考。';
export const apisContent26TipsTitle = 'revalidatePath vs. router.refresh:';
export const apisContent26TipsList = [
    '调用 router.refresh 将清除路由器缓存，并在服务器上重新渲染路由段，而不会使数据缓存或完整路由缓存失效。',
    '不同之处在于 revalidatePath 会清除数据缓存和完整路由缓存，而 router.refresh() 不会更改数据缓存和完整路由缓存，因为它是一个客户端 API。'
];
export const apisContent27 = '### 动态 API';
export const apisContent28 = '动态 API（例如 Cookie 和标头）以及 Pages 中的 searchParams 属性取决于运行时传入的请求信息。使用它们将使路由退出完整路由缓存，换句话说，路由将被动态渲染。';
export const apisContent29 = '#### cookie';
export const apisContent30 = '在服务器操作中使用 cookies.set 或 cookies.delete 会使路由器缓存无效，以防止使用 cookie 的路由变得陈旧（例如，反映身份验证的变化）。';
export const apisContent31 = '请参阅 cookies API 参考。';
export const apisContent32 = '### 段配置选项';
export const apisContent33 = '路由段配置选项可用于覆盖路由段默认值，或者当您无法使用获取 API（例如数据库客户端或第三方库）时使用。';
export const apisContent34 = '以下路由段配置选项将退出完整路由缓存：';
export const apisContent34Code = `~~~const dynamic = 'force-dynamic'`;
export const apisContent35 = '此配置选项将选择不从数据缓存中获取所有数据（即不存储）：';
export const apisContent35Code = `~~~ const fetchCache = 'default-no-store'`;
export const apisContent36 = '查看 fetchCache 来了解更多高级选项。';
export const apisContent37 = '有关更多选项，请参阅路由段配置文档。';
export const apisContent38 = '### generateStaticParams';
export const apisContent39 = '对于动态段（例如 app/blog/[slug]/page.js），generateStaticParams 提供的路径会在构建时缓存在完整路由缓存中。在请求时，Next.js 还会缓存首次访问时构建时未知的路径。';
export const apisContent40 = '要在构建时静态呈现所有路径，请向 generateStaticParams 提供完整的路径列表：';
export const apisContent40Code = `~~~app/blog/[slug]/page.js~~~


export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}`;
export const apisContent41 = '要在构建时静态渲染路径子集，并在运行时第一次访问其余路径时，返回部分路径列表：';
export const apisContent41Code = `~~~app/blog/[slug]/page.js~~~


export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  // Render the first 10 posts at build time
  return posts.slice(0, 10).map((post) => ({
    slug: post.slug,
  }))
}`;
export const apisContent42 = '若要在第一次访问时静态渲染所有路径，请返回一个空数组（构建时不会渲染任何路径）或利用';
export const apisContent43 = "export const dynamic = 'force-static':";
export const apisContent43Code = `~~~app/blog/[slug]/page.js~~~

export async function generateStaticParams() {
  return []
}`;
export const apisContent44Tips = '您必须从 generateStaticParams 返回一个数组，即使它是空的。否则，该路由将被动态呈现。';
export const apisContent45 = `~~~export const dynamic = 'force-static'`;
export const apisContent46 = '要在请求时禁用缓存，请在路由段中添加 export const dynamicParams = false 选项。使用此配置选项时，将仅提供 generateStaticParams 提供的路径，其他路由将 404 或匹配（在 catch-all 路由的情况下）。';
export const apisContent47 = '### React 缓存功能';
export const apisContent48 = 'React 缓存功能可以让你记住一个函数的返回值，这样你就可以多次调用同一个函数但只执行一次。';
export const apisContent49 = '由于 fetch 请求会自动记忆，因此您无需将其包装在 React cache中。但是，当 fetch API 不适合时，您可以使用cache手动记忆数据请求。例如，某些数据库客户端、CMS 客户端或 GraphQL 客户端。';
export const apisContent49Code = `~~~utils/get-item.ts~~~

import { cache } from 'react'
import db from '@/lib/db'
 
export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id })
  return item
})`;
