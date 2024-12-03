export const title = '# 平行路线';
export const content1 = '并行路由允许您同时或有条件地在同一布局中呈现一个或多个页面。它们对于应用程序中高度动态的部分非常有用，例如仪表板和社交网站上的提要。';
export const content2 = '例如，考虑仪表板，您可以使用并行路由同时呈现团队和分析页面：';
export const content2Image = '![parallel-routes](/nextjsDoc/buildingYourApplication/routing/parallel-routes.avif)';
export const slotTitle = '## 插槽';
export const slotContent1 =
    '并行路由使用命名插槽创建。插槽使用 @folder 约定定义。例如，以下文件结构定义了两个插槽：@analytics 和 @team：';
export const slotContent1Image = '![parallel-routes-file-system](/nextjsDoc/buildingYourApplication/routing/parallel-routes-file-system.avif)';
export const slotContent2 = '插槽作为 props 传递给共享父布局。对于上面的示例，app/layout.js 中的组件现在接受 @analytics 和 @team 插槽 props，并且可以与 children prop 并行渲染它们：';
export const slotContent2Code = `~~~app/layout.tsx

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}`;
export const slotContent3 = '但是，插槽不是路由段，不会影响 URL 结构。例如，对于 /@analytics/views，URL 将为 /views，因为 @analytics 是一个插槽。插槽与常规页面组件组合在一起，形成与路由段关联的最终页面。因此，您不能在同一路由段级别拥有单独的静态和动态插槽。如果一个插槽是动态的，则该级别的所有插槽都必须是动态的。';
export const slotContent3Tips = ['children prop 是一个隐式插槽，不需要映射到文件夹。这意味着 app/page.js 相当于 app/@children/page.js。'];

export const activeStateAndNavigationTitle = '## 活动状态和导航';
export const activeStateAndNavigationContent1 = '默认情况下，Next.js 会跟踪每个插槽的活动状态（或子页面）。但是，插槽内呈现的内容将取决于导航类型：';
export const activeStateAndNavigationContent1List = [
    '软导航：在客户端导航期间，Next.js 将执行部分渲染，更改插槽内的子页面，同时保留其他插槽的活动子页面，即使它们与当前 URL 不匹配。',
    '硬导航：在完整页面加载（浏览器刷新）后，Next.js 无法确定与当前 URL 不匹配的插槽的活动状态。相反，它将为不匹配的插槽呈现 default.js 文件，如果 default.js 不存在，则显示 404。'];
export const activeStateAndNavigationContent1Tips = ['不匹配路线的 404 有助于确保您不会在非预期的页面上意外呈现并行路由。'];
export const activeStateAndNavigationContent2 = '### default.js';
export const activeStateAndNavigationContent3 = '您可以定义一个 default.js 文件，在初始加载或整页重新加载期间作为不匹配插槽的后备进行渲染。';
export const activeStateAndNavigationContent4 = '考虑以下文件夹结构。@team 插槽有一个 /settings 页面，但 @analytics 没有。';
export const activeStateAndNavigationContent4Image = '![parallel-routes-unmatched-routes](/nextjsDoc/buildingYourApplication/routing/parallel-routes-unmatched-routes.avif)';
export const activeStateAndNavigationContent5 = '导航到 /settings 时，@team 插槽将呈现 /settings 页面，同时为 @analytics 插槽保留当前活动的页面。';
export const activeStateAndNavigationContent6 = '刷新时，Next.js 将为 @analytics 呈现 default.js。如果 default.js 不存在，则会呈现 404。';
export const activeStateAndNavigationContent7 = '此外，由于 children 是隐式插槽，因此当 Next.js 无法恢复父页面的活动状态时，您还需要创建一个 default.js 文件来为子级呈现后备。';
export const activeStateAndNavigationContent8 = '### useSelectedLayoutSegment(s)';
export const activeStateAndNavigationContent9 = 'useSelectedLayoutSegment 和 useSelectedLayoutSegments 都接受 parallelRoutesKey 参数，该参数允许您读取插槽内的活动路线段。';
export const activeStateAndNavigationContent9Code = `~~~app/layout.tsx

'use client'
 
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function Layout({ auth }: { auth: React.ReactNode }) {
  const loginSegment = useSelectedLayoutSegment('auth')
  // ...
}`;
export const activeStateAndNavigationContent10 = '当用户导航到 app/@auth/login（或 URL 栏中的 /login）时，loginSegment 将等于字符串“login”。';
export const activeStateAndNavigationContent11 = '## 示例';
export const activeStateAndNavigationContent12 = '### 条件路线';
export const activeStateAndNavigationContent13 = '您可以使用并行路由根据特定条件（例如用户角色）有条件地呈现路由。例如，要为 /admin 或 /user 角色呈现不同的仪表板页面：';
export const activeStateAndNavigationContent13Image = '![conditional-routes-ui](/nextjsDoc/buildingYourApplication/routing/conditional-routes-ui.avif)';
export const activeStateAndNavigationContent13Code = `~~~app/dashboard/layout.tsx

import { checkUserRole } from '@/lib/auth'
 
export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const role = checkUserRole()
  return <>{role === 'admin' ? admin : user}</>
}`;
export const activeStateAndNavigationContent14 = '### 标签组';
export const activeStateAndNavigationContent15 = '您可以在插槽内添加布局，以允许用户独立导航插槽。这对于创建选项卡很有用。';
export const activeStateAndNavigationContent16 = '例如，@analytics 插槽有两个子页面：/page-views 和 /visitors。';
export const activeStateAndNavigationContent16Image = '![parallel-routes-tab-groups](/nextjsDoc/buildingYourApplication/routing/parallel-routes-tab-groups.avif)';
export const activeStateAndNavigationContent17 = '在@analytics中，创建一个布局文件来在两个页面之间共享标签：';
export const activeStateAndNavigationContent17Code = `~~~app/@analytics/layout.tsx

import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/page-views">Page Views</Link>
        <Link href="/visitors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}`;
export const activeStateAndNavigationContent18 = '### 模态框';
export const activeStateAndNavigationContent19 = '并行路由可以与拦截路由一起使用，以创建支持深度链接的模态框。这可让您解决构建模态框时遇到的常见挑战，例如：';
export const activeStateAndNavigationContent19List = [
    '使模态框内容可通过 URL 共享。',
    '刷新页面时保留上下文，而不是关闭模态框。',
    '向后导航时关闭模态框，而不是转到上一个路由。',
    '向前导航时重新打开模态框。'];
export const activeStateAndNavigationContent20 = '考虑以下 UI 模式，用户可以使用客户端导航从布局打开登录模态框，或访问单独的 /login 页面：';
export const activeStateAndNavigationContent20Image = '![parallel-routes-auth-modal](/nextjsDoc/buildingYourApplication/routing/parallel-routes-auth-modal.avif)';
export const activeStateAndNavigationContent21 = '要实现这种模式，首先要创建一个呈现主登录页面的 /login 路由。';
export const activeStateAndNavigationContent21Image = '![parallel-routes-modal-login-page](/nextjsDoc/buildingYourApplication/routing/parallel-routes-modal-login-page.avif)';
export const activeStateAndNavigationContent21Code = `~~~app/login/page.tsx

import { Login } from '@/app/ui/login'
 
export default function Page() {
  return <Login />
}`;
export const activeStateAndNavigationContent22 = '然后，在 @auth 槽内，添加返回 null 的 default.js 文件。这可确保当模式未处于活动状态时不会呈现该模式。';
export const activeStateAndNavigationContent22Code = `~~~app/@auth/default.tsx

export default function Default() {
  return null
}`;
export const activeStateAndNavigationContent23 = '在 @auth 插槽中，通过更新 /(.)login 文件夹来拦截 /login 路由。将 <Modal> 组件及其子组件导入到 /(.)login/page.tsx 文件中：';
export const activeStateAndNavigationContent23Code = `~~~app/@auth/(.)login/page.tsx

import { Modal } from '@/app/ui/modal'
import { Login } from '@/app/ui/login'
 
export default function Page() {
  return (
    <Modal>
      <Login />
    </Modal>
  )
}`;
export const activeStateAndNavigationContent23Tips = [
    "用于拦截路由的约定（例如 (.)）取决于您的文件系统结构。请参阅拦截路由约定。",
    "通过将 <Modal> 功能与模态内容 (<Login>) 分开，您可以确保模态内的任何内容（例如表单）都是服务器组件。有关更多信息，请参阅交错客户端和服务器组件。"
];
export const activeStateAndNavigationContent24 = '### 打开模态框';
export const activeStateAndNavigationContent25 = '现在，您可以利用 Next.js 路由器打开和关闭模态框。这可确保在模态框打开时以及向前和向后导航时正确更新 URL。';
export const activeStateAndNavigationContent26 = '要打开模态框，请将 @auth 插槽作为 prop 传递给父布局，并将其与子 prop 一起渲染。';
export const activeStateAndNavigationContent26Code = `~~~app/layout.tsx

import Link from 'next/link'
 
export default function Layout({
  auth,
  children,
}: {
  auth: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <Link href="/login">Open modal</Link>
      </nav>
      <div>{auth}</div>
      <div>{children}</div>
    </>
  )
}`;
export const activeStateAndNavigationContent27 = '当用户点击 <Link> 时，模态框会打开，而不是导航到 /login 页面。但是，在刷新或初始加载时，导航到 /login 会将用户带到主登录页面。';
export const activeStateAndNavigationContent28 = '### 关闭模态框';
export const activeStateAndNavigationContent29 = '您可以通过调用 router.back() 或使用 Link 组件来关闭模态框。';
export const activeStateAndNavigationContent29Code = `~~~app/ui/modal.tsx

'use client'
 
import { useRouter } from 'next/navigation'
 
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
 
  return (
    <>
      <button
        onClick={() => {
          router.back()
        }}
      >
        Close modal
      </button>
      <div>{children}</div>
    </>
  )
}`;
export const activeStateAndNavigationContent30 = '当使用 Link 组件离开不再应呈现 @auth 插槽的页面时，我们需要确保并行路由与返回 null 的组件匹配。例如，当导航回根页面时，我们创建一个 @auth/page.tsx 组件：';
export const activeStateAndNavigationContent30Code1 = `~~~app/ui/modal.tsx

import Link from 'next/link'
 
export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">Close modal</Link>
      <div>{children}</div>
    </>
  )
}`;
export const activeStateAndNavigationContent30Code2 = `~~~app/@auth/page.tsx

export default function Page() {
  return null
}`;
export const activeStateAndNavigationContent31 = '或者如果导航到任何其他页面（例如 /foo、/foo/bar 等），您可以使用一个 catch-all 插槽：';
export const activeStateAndNavigationContent31Code = `~~~app/@auth/[...catchAll]/page.tsx

export default function CatchAll() {
  return null
}`;
export const activeStateAndNavigationContent31Tips = [
    "由于活动状态和导航中描述的行为，我们在 @auth 槽中使用了一条捕获所有路由来关闭模式。由于客户端导航到不再与槽匹配的路由将保持可见，因此我们需要将槽与返回 null 的路由匹配以关闭模式。",
    "其他示例包括在图库中打开照片模式，同时还拥有专用的 /photo/[id] 页面，或者在侧面模式中打开购物车。",
    "查看具有拦截和并行路由的模式示例。"
];
export const activeStateAndNavigationContent32 = '## 加载和错误 UI';
export const activeStateAndNavigationContent33 = '并行路线可以独立流式传输，允许您为每条路线定义独立的错误和加载状态：';
export const activeStateAndNavigationContent33Image = '![parallel-routes-cinematic-universe](/nextjsDoc/buildingYourApplication/routing/parallel-routes-cinematic-universe.avif)';
export const activeStateAndNavigationContent34 = '请参阅加载 UI 和错误处理文档以了解更多信息。';
