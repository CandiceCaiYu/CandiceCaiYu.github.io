export const title = '# 服务器和客户端组合模式。';
export const content = '构建 React 应用程序时，您需要考虑应用程序的哪些部分应在服务器或客户端上呈现。本页介绍了使用服务器和客户端组件时的一些推荐组合模式。';

export const whenToUseServerAndClientComponentsTitle = '## 何时使用服务器和客户端组件？';
export const whenToUseServerAndClientComponentsContent = '以下是服务器和客户端组件的不同用例的快速摘要：';
export const whenToUseServerAndClientComponentsContentTable = [
    {case: 'fetch 数据', server: '✅', client: '❌'},
    {case: '访问后端资源（直接）', server: '✅', client: '❌'},
    {case: '在服务器上保存敏感信息（访问令牌、API 密钥等）', server: '✅', client: '❌'},
    {case: '保持对服务器的大量依赖/减少客户端 JavaScript', server: '✅', client: '❌'},
    {case: 'Add interactivity and event listeners (onClick(), onChange(), etc)', server: '❌', client: '✅'},
    {case: '使用状态和生命周期效果（useState()、useReducer()、useEffect() 等）', server: '❌', client: '✅'},
    {case: '使用仅限浏览器的 API', server: '❌', client: '✅'},
    {case: '使用依赖于状态、效果或仅限浏览器的 API 的自定义钩子', server: '❌', client: '✅'},
    {case: '使用 React Class 组件', server: '❌', client: '✅'},
];

export const serverComponentPatternsTitle = '## 服务器组件模式';
export const serverComponentPatternsContent1 = '在选择客户端渲染之前，您可能希望在服务器上执行一些工作，例如获取数据或访问数据库或后端服务。';
export const serverComponentPatternsContent2 = '以下是使用服务器组件时的一些常见模式：';
export const serverComponentPatternsContent3 = '### 在组件之间共享数据';
export const serverComponentPatternsContent4 = '在服务器上获取数据时，可能会出现需要跨不同组件共享数据的情况。例如，您可能有一个布局和一个页面依赖于相同的数据。';
export const serverComponentPatternsContent5 = '您可以使用 fetch 或 React 的 cache 功能在需要的组件中获取相同的数据，而不必担心对相同数据发出重复请求, 你无需使用 React Context（服务器上不可用）或将数据作为 props 传递。这是因为 React 扩展了 fetch 以自动记忆数据请求，并且在 fetch 不可用时可以使用 cache 功能。';
export const serverComponentPatternsContent6 = '查看此模式的一个示例。';
export const serverComponentPatternsContent7 = '### 将服务器专用代码排除在客户端环境之外';
export const serverComponentPatternsContent8 = '由于 JavaScript 模块可以在服务器和客户端组件模块之间共享，因此原本只打算在服务器上运行的代码可能会潜入客户端。';
export const serverComponentPatternsContent9 = '例如，采用以下data-fetching函数：';
export const serverComponentPatternsContent9Code = `~~~lib/data.ts

export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}`;
export const serverComponentPatternsContent10 = '乍一看，getData 似乎可以在服务器和客户端上运行。但是，此函数包含一个 API_KEY，其编写意图是让它只能在服务器上执行。';
export const serverComponentPatternsContent11 = '由于环境变量 API_KEY 没有以 NEXT_PUBLIC 为前缀，因此它是一个只能在服务器上访问的私有变量。为了防止环境变量泄露给客户端，Next.js 会将私有环境变量替换为空字符串。';
export const serverComponentPatternsContent12 = '因此，即使 getData() 可以在客户端上导入和执行，它也不会按预期工作。虽然将变量设为公共变量会使该函数在客户端上工作，但您可能不想向客户端公开敏感信息。';
export const serverComponentPatternsContent13 = '为了防止这种客户端意外使用服务器代码的情况，我们可以使用仅server-only的包，以便其他开发人员在意外将其中一个模块导入客户端组件时收到构建时错误。';
export const serverComponentPatternsContent14 = '要使用server-only，请首先安装该包：';
export const serverComponentPatternsContent14Code = `~~~ npm install server-only`;
export const serverComponentPatternsContent15 = '然后将包导入到任何包含仅限服务器代码的模块中：';
export const serverComponentPatternsContent15Code = `~~~ lib/data.js

import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}`;
export const serverComponentPatternsContent16 = '现在，任何导入 getData() 的客户端组件都将收到构建时错误，说明该模块只能在服务器上使用。';
export const serverComponentPatternsContent17 = '相应的包 client-only 可用于标记包含仅限客户端代码的模块 - 例如，访问window对象的代码。';
export const serverComponentPatternsContent18 = '### 使用第三方软件Packages和Providers';
export const serverComponentPatternsContent19 = '由于服务器组件是 React 的一项新功能，生态系统中的第三方包和提供商才刚刚开始向使用仅限客户端功能（如 useState、useEffect 和 createContext）的组件添加“use client”指令。';
export const serverComponentPatternsContent20 = '目前，npm 软件包中许多使用客户端专用功能的组件尚未包含该指令。这些第三方组件将在客户端组件中按预期工作，因为它们具有“use client”指令，但它们无法在服务器组件中工作。';
export const serverComponentPatternsContent21 = '例如，假设您安装了acme-carousel 包，其中包含一个 <Carousel /> 组件。此组件使用 useState，但尚未具有“use client”指令。';
export const serverComponentPatternsContent22 = '如果你在客户端组件中使用 <Carousel />，它将按预期工作：';
export const serverComponentPatternsContent22Code = `~~~ app/gallery.tsx;

'use client';
 
import { useState } from 'react'
import { Carousel } from 'acme-carousel'
 
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>
 
      {/* Works, since Carousel is used within a Client Component */}
      {isOpen && <Carousel />}
    </div>
  )
}`;
export const serverComponentPatternsContent23 = '但是，如果您尝试在服务器组件中直接使用它，您将看到错误：';
export const serverComponentPatternsContent23Code = `~~~ app/page.tsx

import { Carousel } from 'acme-carousel'
 
export default function Page() {
  return (
    <div>
      <p>View pictures</p>
 
      {/* Error: \`useState\` can not be used within Server Components */}
      <Carousel />
    </div>
  )
}`;
export const serverComponentPatternsContent24 = '这是因为 Next.js 不知道 <Carousel /> 正在使用仅限客户端的功能。';
export const serverComponentPatternsContent25 = '为了解决这个问题，您可以将依赖于仅客户端功能的第三方组件包装在您自己的客户端组件中：';
export const serverComponentPatternsContent25Code = `~~~ app/carousel.tsx

'use client'
 
import { Carousel } from 'acme-carousel'
 
export default Carousel`;
export const serverComponentPatternsContent26 = '现在，您可以在服务器组件中直接使用 <Carousel />：';
export const serverComponentPatternsContent26Code = `~~~ app/page.tsx

import Carousel from './carousel'
 
export default function Page() {
  return (
    <div>
      <p>View pictures</p>
 
      {/*  Works, since Carousel is a Client Component */}
      <Carousel />
    </div>
  )
}`;
export const serverComponentPatternsContent27 = '我们不希望您需要包装大多数第三方组件，因为您很可能会在客户端组件中使用它们。但是，Providers是一个例外，因为它们依赖于 React 状态和上下文，并且通常是应用程序的根目录所必需。请在下面详细了解第三方上下文提供程序。';
export const serverComponentPatternsContent28 = '#### 使用Context Providers';
export const serverComponentPatternsContent29 = 'Context providers通常呈现在应用程序的根目录附近，以共享全局关注点，例如当前主题。由于服务器组件不支持 React context，因此尝试在应用程序的根目录下创建context将导致错误：';
export const serverComponentPatternsContent29Code = `~~~ app/layout.tsx

import { createContext } from 'react'
 
//  createContext is not supported in Server Components
export const ThemeContext = createContext({})
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
      </body>
    </html>
  )
}`;
export const serverComponentPatternsContent30 = '要解决此问题，请创建context并在客户端组件内使用其provider：';
export const serverComponentPatternsContent30Code = `~~~ app/theme-provider.tsx

'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}`;
export const serverComponentPatternsContent31 = '您的服务器组件现在将能够直接使用您的provider，因为它已被标记为客户端组件：';

export const serverComponentPatternsContent31Code = `~~~ app/layout.tsx

import ThemeProvider from './theme-provider'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}`;
export const serverComponentPatternsContent32 = '通过在根目录呈现提供程序，应用程序中的所有其他客户端组件都将能够使用此上下文。';
export const serverComponentPatternsContent32TipsText = '您应该在树中尽可能深地渲染提供程序 - 请注意 ThemeProvider 仅包装 {children} 而不是整个 <html> 文档。这使 Next.js 更容易优化服务器组件的静态部分。';
export const serverComponentPatternsContent33 = '#### 给库作者的建议';
export const serverComponentPatternsContent34 = '类似地，库作者创建供其他开发人员使用的包时，可以使用“use client”指令来标记其包的客户端入口点。这允许包的用户将包组件直接导入其服务器组件，而无需创建包装边界。';
export const serverComponentPatternsContent35 = '您可以通过在树中更深层地使用“use client”来优化您的包，从而允许导入的模块成为服务器组件模块图的一部分。';
export const serverComponentPatternsContent36 = '值得注意的是，一些打包器可能会删除use client”指令。您可以在 React Wrap Balancer 和 Vercel Analytics 存储库中找到有关如何配置 esbuild 以包含use client”指令的示例。';

export const clientComponentPatternsTitle = '## 客户端组件';
export const clientComponentPatternsContent1 = '### 将客户端组件沿树向下移动';
export const clientComponentPatternsContent2 = '为了减少客户端 JavaScript 包的大小，我们建议将客户端组件从组件树中向下移动。';
export const clientComponentPatternsContent3 = '例如，您可能有一个包含静态元素（例如logo、link等）的布局和一个使用state的交互式搜索栏。';
export const clientComponentPatternsContent4 = '不要将整个布局设为客户端组件，而是将交互逻辑移至客户端组件（例如 <SearchBar />），并将布局保留为服务器组件。这意味着您不必将布局的所有组件 JavaScript 发送到客户端。';
export const clientComponentPatternsContent4Code = `~~~ app/layout.tsx

// SearchBar is a Client Component
import SearchBar from './searchbar'
// Logo is a Server Component
import Logo from './logo'
 
// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  )
}`;
export const clientComponentPatternsContent5 = '### 将 props 从服务器传递到客户端组件（序列化）';
export const clientComponentPatternsContent6 = '如果您在服务器组件中获取数据，则可能需要将数据作为 props 传递给客户端组件。从服务器传递到客户端组件的 props 需要由 React 序列化。';
export const clientComponentPatternsContent7 = '如果您的客户端组件依赖于不可序列化的数据，您可以使用第三方库在客户端上获取数据，或者使用Route Handler在服务器上获取数据。';

export const interleavingServerAndClientComponentsTitle = '## 交错服务器和客户端组件';
export const interleavingServerAndClientComponentsContent1 = '交错客户端和服务器组件时，将 UI 可视化为组件树可能会有所帮助。从根布局（即服务器组件）开始，然后可以通过添加“use client”指令在客户端上呈现某些组件子树。';
export const interleavingServerAndClientComponentsContent2 = '在这些客户端子树中，您仍然可以嵌套服务器组件或调用服务器操作，但是需要注意以下几点：';
export const interleavingServerAndClientComponentsContent2List = [
    '在请求-响应生命周期中，您的代码从服务器移动到客户端。如果您需要在客户端上访问服务器上的数据或资源，您将向服务器发出新请求 - 而不是来回切换。',
    '当向服务器发出新请求时，将首先渲染所有服务器组件，包括嵌套在客户端组件中的组件。渲染结果 (RSC Payload) 将包含对客户端组件位置的引用。然后，在客户端上，React 使用 RSC Payload 将服务器和客户端组件协调到单个树中。',
    '由于客户端组件是在服务器组件之后渲染的，因此您无法将服务器组件导入客户端组件模块（因为这需要向服务器发出新请求）。相反，您可以将服务器组件作为 props 传递给客户端组件。请参阅下面的不支持的模式和支持的模式部分。',
];
export const interleavingServerAndClientComponentsContent3 = '### 不支持的模式：将服务器组件导入客户端组件';
export const interleavingServerAndClientComponentsContent4 = '不支持以下模式。您无法将服务器组件导入到客户端组件：';
export const interleavingServerAndClientComponentsContent4Code = `~~~ app/client-component.tsx

'use client'
 
// You cannot import a Server Component into a Client Component.
import ServerComponent from './Server-Component'
 
export default function ClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
 
      <ServerComponent />
    </>
  )
}`;
export const interleavingServerAndClientComponentsContent5 = '### 支持的模式：将服务器组件作为 Props 传递给客户端组件';
export const interleavingServerAndClientComponentsContent6 = '支持以下模式。您可以将服务器组件作为 prop 传递给客户端组件。';
export const interleavingServerAndClientComponentsContent7 = '一种常见的模式是使用 React children prop 在客户端组件中创建一个“slot”。';
export const interleavingServerAndClientComponentsContent9 = '在下面的例子中， <ClientComponent> 接受一个 children prop：';
export const interleavingServerAndClientComponentsContent9Code = `~~~app/client-component.tsx~~~

'use client'
 
import { useState } from 'react'
 
export default function ClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </>
  )
}`;
export const interleavingServerAndClientComponentsContent10 = '<ClientComponent> 不知道子组件最终会由服务器组件的结果填充。<ClientComponent> 的唯一责任是决定子组件最终被放置在何处。';
export const interleavingServerAndClientComponentsContent11 = '在父服务器组件中，您可以同时导入 <ClientComponent> 和 <ServerComponent>，并将 <ServerComponent> 作为 <ClientComponent> 的子组件传递';
export const interleavingServerAndClientComponentsContent11Code = `~~~app/page.tsx~~~

// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
import ClientComponent from './client-component'
import ServerComponent from './server-component'
 
// Pages in Next.js are Server Components by default
export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}`;
export const interleavingServerAndClientComponentsContent12 = '通过这种方法，<ClientComponent> 和 <ServerComponent> 解耦，可以独立渲染。在这种情况下，子组件 <ServerComponent> 可以在服务器上渲染，远早于 <ClientComponent> 在客户端上渲染。';
export const interleavingServerAndClientComponentsContent12TipsList = [
    '“提升内容(lifting content up)”模式已用于避免在父组件重新渲染时重新渲染嵌套子组件。',
    '您不限于 children prop。您可以使用任何 prop 来传递 JSX。'
];

