import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 服务器组件和客户端组件'
export const introduction1 = '默认情况下，布局和页面都是服务器组件，它允许您在服务器上获取数据并渲染部分 UI，还可以选择缓存结果并将其流式传输到客户端。当您需要交互功能或浏览器 API 时，可以使用客户端组件来添加功能。'
export const introduction2 = '本页面说明了服务器和客户端组件在 Next.js 中的工作方式以及何时使用它们，并提供了如何在应用程序中将它们组合在一起的示例。'

export const whenUseTitle = '## 何时使用服务器和客户端组件？'
export const whenUseContent1 = '客户端和服务器环境具有不同的功能。客户端和服务器组件允许您根据情况在各个环境中运行逻辑。'
export const whenUseContent2 = '使用客户端组件的情况：'
export const whenUseContent2List = [
    '[State](https://react.dev/learn/managing-state) and [event handlers](https://react.dev/learn/responding-to-events). E.g. onClick, onChange.',
    '[Lifecycle logic](https://react.dev/learn/lifecycle-of-reactive-effects). E.g. useEffect.',
    'Browser-only APIs. E.g. localStorage, window, Navigator.geolocation, etc.',
    '[Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks).'
]
export const whenUseContent3 = '使用服务器组件的情况：'
export const whenUseContent3List = [
    '从靠近源头的数据库或 API 获取数据。',
    '使用 API 密钥、令牌和其他机密信息，但不要将其暴露给客户端。',
    '减少发送到浏览器的 JavaScript 代码量。',
    '改进[首次内容绘制](https://web.dev/fcp/) (FCP)，并将内容逐步流式传输到客户端。'
]
export const whenUseContent4 = '例如，<Page> 组件是一个服务器组件，它获取有关post的数据，并将其作为props传递给处理客户端交互的 <LikeButton>。'
export const whenUseContent4Code = `~~~app/[id]/page.tsx~~~
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(id)
 
  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  )
}`
export const whenUseContent5Code = `~~~app/ui/like-button.tsx~~~
'use client'
 
import { useState } from 'react'
 
export default function LikeButton({ likes }: { likes: number }) {
  // ...
}`


export const howWorkTitle = '## 服务器和客户端组件如何在 Next.js 中工作？'
export const howWorkContent1 = '### 在服务器上'
export const howWorkContent2 = '在服务器上，Next.js 使用 React 的 API 来编排渲染。渲染工作被拆分成多个块，每个块由不同的路由段（布局和页面）组成：'
export const howWorkContent2List = [
    '服务器组件被渲染成一种称为 React 服务器组件有效负载（RSC Payload）的特殊数据格式。',
    '客户端组件和 RSC Payload 用于预渲染 HTML。'
]
export const howWorkContent2GTKTitle = '什么是 React 服务器组件有效负载 (RSC payload)？'
export const howWorkContent2GTKDescription = 'RSC Payload 是已渲染的 React 服务器组件树的紧凑二进制表示。React 在客户端使用它来更新浏览器的 DOM。RSC Payload 包含：'
export const howWorkContent2GTKList = [
    '服务器组件的渲染结果',
    '客户端组件渲染位置的占位符及其 JavaScript 文件的引用',
    '从服务器组件传递到客户端组件的任何 props'
]
export const howWorkContent3 = '### 在客户端（首次加载）'
export const howWorkContent4 = '然后，在客户端上：'
export const howWorkContent4List = [
    'HTML 用于立即向用户显示route的快速非交互式预览。',
    'RSC Payload 用于协调客户端和服务器组件树。',
    'JavaScript 用于补充客户端组件并使应用程序具有交互性。'
]
export const howWorkContent4GTKTitle = '什么是水合作用？'
export const howWorkContent4GTKDescription = 'Hydration 是 React 将事件处理程序附加到 DOM 的过程，以使静态 HTML 具有交互性。'
export const howWorkContent5 = '### 后续导航'
export const howWorkContent6 = '在后续导航中：'
export const howWorkContent6List = [
    'RSC payload已预取并缓存，以实现即时导航。',
    '客户端组件完全在客户端上渲染，无需服务器渲染的 HTML。'
]
export const exampleTitle = '## 示例'
export const serverAndClientComponentExampleContent1 = '### 使用客户端组件'
export const serverAndClientComponentExampleContent2 = '您可以通过在文件顶部（imports 上方）添加[“use client”](https://react.dev/reference/react/use-client)指令来创建客户端组件。'
export const serverAndClientComponentExampleContent2Code = `~~~app/ui/counter.tsx~~~
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>{count} likes</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}`
export const serverAndClientComponentExampleContent3 = '“use client”用于声明服务器和客户端模块图（树）之间的边界。'
export const serverAndClientComponentExampleContent4 = '一旦文件被标记为“use client”，其所有导入和子组件都将被视为客户端包的一部分。这意味着您无需将该指令添加到每个用于客户端的组件中。'
export const serverAndClientComponentExampleContent5 = '### 减少 JS 包大小'
export const serverAndClientComponentExampleContent6 = '为了减少客户端 JavaScript 包的大小，请将“use client”添加到特定的交互式组件，而不是将 UI 的大部分标记为客户端组件。'
export const serverAndClientComponentExampleContent7 = '例如，<Layout> 组件主要包含静态元素，例如logo和导航链接，但也包含一个交互式搜索栏。<Search /> 是交互式的，需要是客户端组件，但其余layout可以保留为服务器组件。'
export const serverAndClientComponentExampleContent7Code = `~~~app/layout.tsx~~~
// Client Component
import Search from './search'
// Server Component
import Logo from './logo'
 
// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <Search />
      </nav>
      <main>{children}</main>
    </>
  )
}`
export const serverAndClientComponentExampleContent8Code = `~~~app/[id]/page.tsx~~~
'use client'
 
export default function Search() {
  // ...
}`
export const serverAndClientComponentExampleContent9 = '### 将数据从服务器传递到客户端组件'
export const serverAndClientComponentExampleContent10 = '您可以使用 props 将数据从服务器组件传递到客户端组件。'
export const serverAndClientComponentExampleContent10Code = `~~~app/ui/like-button.tsx~~~
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(id)
 
  return <LikeButton likes={post.likes} />
}`
export const serverAndClientComponentExampleContent11Code = `~~~app/ui/like-button.tsx~~~
'use client'
 
export default function LikeButton({ likes }: { likes: number }) {
  // ...
}`
export const serverAndClientComponentExampleContent12 = '或者，您可以使用 use Hook 将数据从服务器组件传输到客户端组件。查看[示例](https://nextjs.org/docs/app/getting-started/fetching-data#streaming-data-with-the-use-hook)。'
export const serverAndClientComponentExampleContent12GTK = '传递给客户端组件的 Prop 需要通过 React 进行序列化。'
export const serverAndClientComponentExampleContent13 = '### 交错服务器和客户端组件'
export const serverAndClientComponentExampleContent14 = '您可以将服务器组件作为 prop 传递给客户端组件。这样您就可以在客户端组件中直观地嵌套服务器渲染的 UI。'
export const serverAndClientComponentExampleContent15 = '一种常见的模式是使用children在 <ClientComponent> 中创建一个插槽。例如，一个从服务器获取数据的 <Cart> 组件，位于一个使用客户端状态切换可见性的 <Modal> 组件内。'
export const serverAndClientComponentExampleContent15Code = `~~~app/ui/modal.tsx~~~
'use client'
 
export default function Modal({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}`
export const serverAndClientComponentExampleContent16 = '然后，在父服务器组件（例如 <Page>）中，您可以将 <Cart> 作为 <Modal> 的子项传递：'
export const serverAndClientComponentExampleContent16Code = `~~~app/page.tsx~~~
import Modal from './ui/modal'
import Cart from './ui/cart'
 
export default function Page() {
  return (
    <Modal>
      <Cart />
    </Modal>
  )
}`
export const serverAndClientComponentExampleContent17 = '在此模式中，所有服务器组件（包括作为 props 的组件）都将提前在服务器上渲染。生成的 RSC payload将包含客户端组件在组件树中渲染位置的引用。'
export const serverAndClientComponentExampleContent18 = '### Context providers'
export const serverAndClientComponentExampleContent19 = 'React context通常用于共享全局状态，例如当前theme。但是，服务器组件不支持 React context。'
export const serverAndClientComponentExampleContent20 = '要使用context，请创建一个接受children的客户端组件：'
export const serverAndClientComponentExampleContent20Code = `~~~app/theme-provider.tsx~~~
'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}`
export const serverAndClientComponentExampleContent21 = '然后，将其导入到服务器组件（例如layout）：'
export const serverAndClientComponentExampleContent21Code = `~~~app/layout.tsx~~~
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
}
`
export const serverAndClientComponentExampleContent22 = '您的服务器组件现在将能够直接呈现您的provider，并且您应用程序中的所有其他客户端组件都将能够使用此context。'
export const serverAndClientComponentExampleContent22GTK = '您应该在树中尽可能深地渲染provider——请注意 ThemeProvider 仅包装了 {children} 而不是整个 <html> 文档。这使得 Next.js 更容易优化服务器组件的静态部分。'
export const serverAndClientComponentExampleContent23 = '### 第三方组件'
export const serverAndClientComponentExampleContent24 = '当使用依赖于仅客户端功能的第三方组件时，您可以将其包装在客户端组件中以确保其按预期工作。'
export const serverAndClientComponentExampleContent25 = '例如，可以从 acme-carousel 包中导入 <Carousel />。该组件使用了 useState，但尚未包含 "use client" 指令。'
export const serverAndClientComponentExampleContent26 = '如果您在客户端组件中使用 <Carousel />，它将按预期工作：'
export const serverAndClientComponentExampleContent26Code = `~~~app/gallery.tsx~~~
'use client'
 
import { useState } from 'react'
import { Carousel } from 'acme-carousel'
 
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>
      {/* Works, since Carousel is used within a Client Component */}
      {isOpen && <Carousel />}
    </div>
  )
}`
export const serverAndClientComponentExampleContent27 = '但是，如果您尝试直接在服务器组件中使用它，则会看到错误。这是因为 Next.js 不知道 <Carousel /> 正在使用仅限客户端的功能。'
export const serverAndClientComponentExampleContent28 = '为了解决这个问题，您可以将依赖于仅客户端功能的第三方组件包装在您自己的客户端组件中：'
export const serverAndClientComponentExampleContent28Code = `~~~app/ui/carousel.tsx~~~
'use client'
 
import { Carousel } from 'acme-carousel'
 
export default Carousel`
export const serverAndClientComponentExampleContent29 = '现在，您可以直接在服务器组件中使用 <Carousel />：'
export const serverAndClientComponentExampleContent29Code = `~~~app/page.tsx~~~
import Carousel from './carousel'
 
export default function Page() {
  return (
    <div>
      <p>View pictures</p>
      {/*  Works, since Carousel is a Client Component */}
      <Carousel />
    </div>
  )
}`
export const serverAndClientComponentExampleContent29GTKTitle = '给库作者的建议'
export const serverAndClientComponentExampleContent29GTKList = [
    '如果您正在构建组件库，请将“use client”指令添加到依赖仅客户端功能的入口点。这样，您的用户无需创建包装器即可将组件导入服务器组件。',
    '值得注意的是，某些打包工具可能会删除“use client”指令。您可以在 React Wrap Balancer 和 Vercel Analytics 仓库中找到如何配置 esbuild 以包含“use client”指令的示例。'
]
export const serverAndClientComponentExampleContent30 = '### 预防环境中毒'
export const serverAndClientComponentExampleContent31 = 'JavaScript 模块可以在服务器和客户端组件模块之间共享。这意味着可能会意外地将服务器专用代码导入到客户端。例如，考虑以下函数：'
export const serverAndClientComponentExampleContent31Code = `~~~lib/data.ts~~~
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}`
export const serverAndClientComponentExampleContent32 = '此函数包含一个永远不应暴露给客户端的 API_KEY。'
export const serverAndClientComponentExampleContent33 = '在 Next.js 中，只有以 NEXT_PUBLIC_ 为前缀的环境变量才会包含在客户端包中。如果变量没有前缀，Next.js 会将其替换为空字符串。'
export const serverAndClientComponentExampleContent34 = '因此，即使 getData() 可以在客户端导入并执行，也无法按预期工作。';
export const serverAndClientComponentExampleContent35 = '为防止在客户端组件中意外使用，您可以使用服务器专用包。'
export const serverAndClientComponentExampleContent36 = '然后，将包导入到包含server-only代码的文件中：'
export const serverAndClientComponentExampleContent36Code = `~~~lib/data.ts~~~
import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}`
export const serverAndClientComponentExampleContent37 = '现在，如果您尝试将模块导入客户端组件，则会出现构建时错误。'
export const serverAndClientComponentExampleContent38 = '相应的client-only的包可用于标记包含仅限客户端逻辑的模块，例如window对象的代码。'
export const serverAndClientComponentExampleContent39 = '在 Next.js 中，安装server-only或client-only是可选的。但是，如果您的 linting 规则标记了无关的依赖项，您可以安装它们以避免出现问题。'
export const serverAndClientComponentExampleContent39Code = `~~~
npm install server-only`
export const serverAndClientComponentExampleContent40 = 'Next.js 内部处理server-only和client-only的导入，以便在错误的环境中使用模块时提供更清晰的错误消息。Next.js 不会使用这些来自 NPM 的软件包的内容。'
export const serverAndClientComponentExampleContent41 = '当 TypeScript 配置 noUncheckedSideEffectImports 处于active状态时 ，Next.js 还为server-only和client-only提供了自己的类型声明。'

export const apiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'use client',
        content: 'Learn how to use the use client directive to render a component on the client.',
        url: 'https://nextjs.org/docs/app/api-reference/directives/use-client'
    },
]
