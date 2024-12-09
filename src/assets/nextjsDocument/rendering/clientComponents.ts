export const title = '# 客户端组件';
export const content1 = '客户端组件允许您编写在服务器上预渲染的交互式 UI，并可使用客户端 JavaScript 在浏览器中运行。';
export const content2 = '本页将介绍客户端组件的工作原理、如何渲染以及何时使用它们。';

export const benefitsOfClientRenderingTitle = '## 客户端渲染的好处';
export const benefitsOfClientRenderingContent1 = '在客户端进行渲染工作有几个好处，包括：';
export const benefitsOfClientRenderingContent1List = [
    '交互性：客户端组件可以使用state、effect和event listeners，这意味着它们可以向用户提供即时反馈并更新 UI。',
    '浏览器 API：客户端组件可以访问浏览器 API，例如地理位置或 localStorage。'
];
export const usingClientComponentsInNextjsTitle = '## 在 Next.js 中使用客户端组件';
export const usingClientComponentsInNextjsContent1 = '要使用客户端组件，您可以在文件顶部（import上方）添加 React“use client”指令。';
export const usingClientComponentsInNextjsContent2 = '“use client”用于声明服务器和客户端组件模块之间的边界。这意味着，通过在文件中定义“use client”，导入到其中的所有其他模块（包括子组件）都被视为客户端包的一部分。';
export const usingClientComponentsInNextjsContent2Code = `~~~app/counter.tsx

'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}`;
export const usingClientComponentsInNextjsContent3 = '下图显示，如果未定义“use client”指令，则在嵌套组件 (toggle.js) 中使用 onClick 和 useState 将导致错误。这是因为默认情况下，App Router 中的所有组件都是服务器组件，这些 API 不可用。通过在 toggle.js 中定义“use client”指令，您可以告诉 React 进入这些 API 可用的客户端边界。';
export const usingClientComponentsInNextjsContent3Img = '![use-client-directive](/nextjsDoc/buildingYourApplication/rendering/use-client-directive.avif)';
export const usingClientComponentsInNextjsContent3TipsTitle = '定义多个use client入口点：';
export const usingClientComponentsInNextjsContent3TipsList = [
    '您可以在 React 组件树中定义多个“use client”入口点。这样您就可以将应用程序拆分为多个客户端包。',
    '但是，“use client”不需要在每个需要在客户端上呈现的组件中定义。定义边界后，导入到其中的所有子组件和模块都被视为客户端包的一部分。'
];
export const howAreClientComponentsRenderedTitle = '## 客户端组件如何渲染？';
export const howAreClientComponentsRenderedContent1 = '在 Next.js 中，客户端组件的渲染方式取决于请求是完整页面加载的一部分（对应用程序的首次访问或由浏览器刷新触发的页面重新加载）还是后续导航。';
export const howAreClientComponentsRenderedContent2 = '### 整个页面加载';
export const howAreClientComponentsRenderedContent3 = '为了优化初始页面加载，Next.js 将使用 React 的 API 在服务器上为客户端和服务器组件呈现静态 HTML 预览。这意味着，当用户首次访问您的应用程序时，他们将立即看到页面内容，而无需等待客户端下载、解析和执行客户端组件 JavaScript 包。';
export const howAreClientComponentsRenderedContent4 = '在服务器上：';
export const howAreClientComponentsRenderedContent4List = [
    'React 将服务器组件渲染为一种称为 React 服务器组件负载（RSC Payload）的特殊数据格式，其中包含对客户端组件的引用。',
    'Next.js 使用 RSC Payload 和客户端组件 JavaScript 指令在服务器上呈现路由的 HTML。'
];
export const howAreClientComponentsRenderedContent5 = '然后，在客户端上：';
export const howAreClientComponentsRenderedContent5List = [
    'HTML 用于立即显示路由的快速非交互式初始预览。',
    'React Server Components Payload 用于协调客户端和服务器组件树，并更新 DOM。',
    'JavaScript 指令用于补充客户端组件并使其 UI 具有交互性。'
];
export const howAreClientComponentsRenderedContent5TipsTitle = '什么是 Hydration？';
export const howAreClientComponentsRenderedContent5TipsText = 'Hydration 是将事件监听器附加到 DOM 的过程，以使静态 HTML 具有交互性。在后台，Hydration 是通过 hydrateRoot React API 完成的。';
export const howAreClientComponentsRenderedContent6 = '### 后续导航';
export const howAreClientComponentsRenderedContent7 = '在后续导航中，客户端组件完全在客户端上呈现，而无需服务器呈现的 HTML。';
export const howAreClientComponentsRenderedContent8 = '这意味着客户端组件 JavaScript 包已下载并解析。一旦包准备就绪，React 将使用 RSC Payload 协调客户端和服务器组件树，并更新 DOM。';

export const backToServerEnvironmentTitle = '## 回到服务器环境';
export const backToServerEnvironmentContent1 = '有时，在声明了“use client”边界后，您可能希望返回到服务器环境。例如，您可能希望减小客户端包大小、在服务器上获取数据或使用仅在服务器上可用的 API。';
export const backToServerEnvironmentContent2 = '尽管理论上代码嵌套在客户端组件中，但您可以通过交错客户端和服务器组件以及服务器操作将代码保留在服务器上。有关更多信息，请参阅组合模式页面。';
