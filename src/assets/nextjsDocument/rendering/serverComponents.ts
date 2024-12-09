export const title = '# 服务器组件';
export const content = 'React 服务器组件允许你编写可在服务器上渲染并且可以选择缓存的 UI。在 Next.js 中，渲染工作进一步按路由段拆分，以实现流式渲染和部分渲染，并且有三种不同的服务器渲染策略：';
export const contentList = [
    'Static Rendering',
    'Dynamic Rendering',
    'Streaming'
];
export const content2 = '本页将介绍服务器组件的工作原理、何时使用它们以及不同的服务器渲染策略。';
export const benefitsOfServerRenderingTitle = '## 服务器渲染的好处';
export const benefitsOfServerRenderingContent = '在服务器上进行渲染工作有几个好处，包括：';
export const benefitsOfServerRenderingContentList = [
    '数据获取：服务器组件允许您将数据获取移至更靠近数据源的服务器。这可以减少获取渲染所需数据的时间以及客户端需要发出的请求数量，从而提高性能。',
    '安全性：服务器组件允许您将敏感数据和逻辑（例如令牌(tokens)和 API 密钥）保存在服务器上，而不会有将其暴露给客户端的风险。',
    '缓存：通过在服务器上渲染，结果可以被缓存并在后续请求和跨用户中重复使用。这可以通过减少每个请求的渲染和数据获取量来提高性能并降低成本。',
    '性能：服务器组件为您提供了额外的工具，可从基线优化性能。例如，如果您开始使用完全由客户端组件组成的应用，则将 UI 的非交互式部分移至服务器组件可以减少所需的客户端 JavaScript 数量。这对于网速较慢或设备性能较差的用户来说非常有利，因为浏览器需要下载、解析和执行的客户端 JavaScript 更少。',
    '初始页面加载和首次内容绘制 (FCP)：在服务器上，我们可以生成 HTML，以允许用户立即查看页面，而无需等待客户端下载、解析和执行呈现页面所需的 JavaScript。',
    '搜索引擎优化和社交网络可共享性：搜索引擎机器人可以使用呈现的 HTML 来索引您的页面，社交网络机器人可以使用呈现的 HTML 为您的页面生成社交卡预览。',
    '流式传输：服务器组件允许您将渲染工作拆分成多个块，并在准备就绪时将其流式传输到客户端。这样，用户就可以提前看到页面的各个部分，而不必等待整个页面在服务器上渲染完成。'
];
export const usingServerComponentsInNextjsTitle = '## 在 Next.js 中使用服务器组件';
export const usingServerComponentsInNextjsContent = '默认情况下，Next.js 使用服务器组件。这允许您自动实现服务器渲染而无需额外配置，并且您可以在需要时选择使用客户端组件，请参阅客户端组件。';

export const howAreServerComponentsRenderedTitle = '## 服务器组件如何渲染?';
    export const howAreServerComponentsRenderedContent1 = '在服务器上，Next.js 使用 React 的 API 来协调渲染。渲染工作被分成多个部分：按单个路由段和 Suspense Boundaries 进行。';
export const howAreServerComponentsRenderedContent2= '每个块的渲染分为两个步骤：';
export const howAreServerComponentsRenderedContent2List = [
    'React 将服务器组件渲染为一种特殊的数据格式，称为 React 服务器组件负载（RSC Payload）。',
    'Next.js 使用 RSC Payload 和客户端组件 JavaScript 指令在服务器上呈现 HTML。'
];
export const howAreServerComponentsRenderedContent3 = '然后，在客户端上：';
export const howAreServerComponentsRenderedContent3List = [
    'HTML 用于立即显示路线的快速非交互式预览 - 这仅适用于初始页面加载。',
    'React 服务器组件有效负载用于协调客户端和服务器组件树，并更新 DOM。',
    'JavaScript 指令用于补充客户端组件并使应用程序具有交互性。'
];
export const howAreServerComponentsRenderedContent3TipsTitle = '什么是 React 服务器组件负载 (RSC)？';
export const howAreServerComponentsRenderedContent3TipsDescription= 'RSC 负载是渲染的 React 服务器组件树的紧凑二进制表示。客户端上的 React 使用它来更新浏览器的 DOM。RSC 负载包含：';
export const howAreServerComponentsRenderedContent3TipsList = [
    '服务器组件的渲染结果',
    '客户端组件应渲染位置的占位符及其 JavaScript 文件的引用',
    '从服务器组件传递到客户端组件的任何 props'
];
    export const serverRenderingStrategiesTitle='## 服务器渲染策略';
export const serverRenderingStrategiesContent1 = '服务器渲染有三个子集：静态、动态和流式。';
export const serverRenderingStrategiesContent2 = '### 静态渲染（默认）';
export const serverRenderingStrategiesContent3 = '使用静态渲染，路由会在构建时渲染，或在数据重新验证后在后台渲染。结果会被缓存并推送到内容分发网络 (CDN)。这种优化可让您在用户和服务器请求之间共享渲染工作的结果。';
export const serverRenderingStrategiesContent4 = '当路由没有针对用户个性化且可以在构建时知道的数据（例如静态博客文章或产品页面）时，静态渲染很有用。';
export const serverRenderingStrategiesContent5 = '### 动态渲染';
export const serverRenderingStrategiesContent6 = '通过动态渲染，可以在请求时为每个用户渲染路由。';
export const serverRenderingStrategiesContent7 = '当路由具有针对用户个性化的数据或具有只能在请求时知道的信息（例如 cookie 或 URL 的搜索参数）时，动态渲染很有用。';
export const serverRenderingStrategiesContent7TipsTitle ='带有缓存数据的动态路由';
export const serverRenderingStrategiesContent7TipsList =[
    '在大多数网站中，路由并非完全静态或完全动态 - 它是一个范围。例如，您有一个电子商务页面，该页面使用缓存的产品数据（每隔一段时间重新验证一次），但也有未缓存的个性化客户数据。',
    '在 Next.js 中，您可以拥有动态渲染的路由，这些路由既包含缓存数据，又包含未缓存数据。这是因为 RSC Payload 和数据是分开缓存的。这样您就可以选择动态渲染，而不必担心在请求时获取所有数据对性能的影响。',
    '了解有关全路由缓存和数据缓存的更多信息。',
];
export const serverRenderingStrategiesContent8 ='#### 切换到动态渲染';
export const serverRenderingStrategiesContent9 ='在渲染过程中，如果发现动态 API 或未缓存的数据请求，Next.js 将切换到动态渲染整个路由。下表总结了动态 API 和数据缓存如何影响路由是静态渲染还是动态渲染：';
export const serverRenderingStrategiesContent9Table =[
    {api:'No',data:'Cached', route: 'Statically Rendered'},
    {api:'Yes',data:'Cached', route: 'Dynamically Rendered'},
    {api:'No',data:'Not Cached', route: 'Dynamically Rendered'},
    {api:'Yes',data:'Not Cached', route: 'Dynamically Rendered'},
];
export const serverRenderingStrategiesContent10 ='在上表中，要使路由完全静态，必须缓存所有数据。但是，您可以拥有一个使用缓存和非缓存数据提取的动态呈现路由。';
export const serverRenderingStrategiesContent11 ='作为开发者，您无需在静态渲染和动态渲染之间做出选择，因为 Next.js 会根据所使用的功能和 API 自动为每条路由选择最佳渲染策略。相反，您可以选择何时缓存或重新验证特定数据，还可以选择流式传输 UI 的某些部分。';
export const serverRenderingStrategiesContent12 ='#### 动态 API';
export const serverRenderingStrategiesContent13 ='动态 API 依赖于只能在请求时知道的信息（而不是在预渲染期间提前知道的信息）。使用任何这些 API 都表明了开发者的意图，并将在请求时选择将整个路由转为动态渲染。这些 API 包括：';
export const serverRenderingStrategiesContent13List =[
    'cookies',
    'headers',
    'connection',
    'draftMode',
    'searchParams prop',
    'unstable_noStore',
    'unstable_after',
];
export const serverRenderingStrategiesContent14 ='#### 流式传输';
export const serverRenderingStrategiesContent14Img ='![sequential-parallel-data-fetching](/nextjsDoc/buildingYourApplication/rendering/sequential-parallel-data-fetching.avif)';
export const serverRenderingStrategiesContent15 ='流式传输可让您从服务器逐步渲染 UI。工作被拆分成多个块，并在准备就绪时流式传输到客户端。这样，用户就可以在整个内容渲染完成之前立即看到页面的某些部分。';
export const serverRenderingStrategiesContent15Img ='![server-rendering-with-streaming](/nextjsDoc/buildingYourApplication/rendering/server-rendering-with-streaming.avif)';
export const serverRenderingStrategiesContent16 ='默认情况下，流式传输内置于 Next.js 应用路由器中。这有助于改善初始页面加载性能，以及依赖于较慢数据提取的 UI，因为较慢的数据提取会阻止渲染整个路由。例如，产品页面上的评论。';
export const serverRenderingStrategiesContent17 ='您可以使用 React Suspense 中的 loading.js 和 UI 组件开始流式传输路线段。有关更多信息，请参阅加载 UI 和流式传输部分。';

