import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 并行路由（Parallel Routes）';
export const parallelRoutesDescription1 = '并行路由允许您在同一布局中同时或有条件地渲染一个或多个页面。它们对于应用中高度动态的部分非常有用，例如dashboard和社交网站上的动态。'
export const parallelRoutesDescription2 = '例如dashboard，您可以使用并行路由同时呈现team和analytics页面：'
export const parallelRoutesDescription2Img = '![parallel-routes](/nextjsDoc/fileSystemConventions/parallel-routes.avif)'
export const parallelRoutesConventionTitle = '## 约定'
export const parallelRoutesConventionContent1 = '### 插槽(slot)'
export const parallelRoutesConventionContent2 = '并行路由使用命名插槽创建。slots使用 @folderName 定义。例如，以下文件结构定义了两个槽位：@analytics 和 @team：'
export const parallelRoutesConventionContent2Img = '![parallel-routes-file-system](/nextjsDoc/fileSystemConventions/parallel-routes-file-system.avif)'
export const parallelRoutesConventionContent3 = '插槽作为 props 传递给共享的父布局。对于上面的示例，app/layout.js 现在接受 @analytics 和 @team 插槽 props，并且可以与 children props 并行渲染：'
export const parallelRoutesConventionContent3Code = `~~~app/layout.js~~~
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
}`
export const parallelRoutesConventionContent4 = '但是，插槽并非路由段，也不会影响 URL 结构。例如，对于 /@analytics/views，由于 @analytics 是一个插槽，因此 URL 将为 /views。插槽会与常规页面组件组合，以构成与路由段关联的最终页面。因此，您不能在同一路由段上分别使用静态插槽和动态插槽。如果一个插槽是动态的，则该级别路由段上的所有插槽都必须是动态的。'
export const parallelRoutesConventionContent4GTK = 'children 属性是一个隐式插槽，无需映射到文件夹。这意味着 app/page.js 等同于 app/@children/page.js。'
export const parallelRoutesConventionContent5 = '### default.js'
export const parallelRoutesConventionContent6 = '您可以定义一个 default.js 文件，作为初始加载或整页重新加载期间不匹配插槽的fallback。'
export const parallelRoutesConventionContent7 = '请考虑以下文件夹结构。@team 槽位有一个 /settings 页面，但 @analytics 没有。'
export const parallelRoutesConventionContent7Img = '![parallel-routes-unmatched-routes](/nextjsDoc/fileSystemConventions/parallel-routes-unmatched-routes.avif)'
export const parallelRoutesConventionContent8 = '当导航到 /settings 时，@team 插槽将呈现 /settings 页面，同时维护 @analytics 插槽的当前活动页面。'
export const parallelRoutesConventionContent9 = '刷新时，Next.js 将为 @analytics 渲染 default.js 文件。如果 default.js 不存在，则会渲染 404 错误。'
export const parallelRoutesConventionContent10 = '此外，由于 children 是一个隐式插槽，因此当 Next.js 无法恢复父页面的活动状态时，您还需要创建一个 default.js 文件来为子页面提供fallback。'

export const parallelRoutesBehaviorTitle = '## 行为'
export const parallelRoutesBehaviorContent1 = '默认情况下，Next.js 会跟踪每个插槽的活动状态（或子页面）。但是，插槽内渲染的内容取决于导航类型：'
export const parallelRoutesBehaviorContent1List = [
    '软导航：在客户端导航期间，Next.js 将执行部分渲染，更改插槽内的子页面，同时保留其他插槽的活动子页面，即使它们与当前 URL 不匹配。',
    '硬导航：在完整页面加载（浏览器刷新）后，Next.js 无法确定与当前 URL 不匹配的插槽的活动状态。相反，它将为不匹配的插槽渲染 default.js 文件，如果 default.js 不存在，则返回 404 错误。'
]
export const parallelRoutesBehaviorContent1GTK = '不匹配的路由的 404 有助于确保您不会意外地在非预期的页面上呈现并行路线。'

export const parallelRoutesExamplesTitle = '## 示例'
export const parallelRoutesExamplesContent1 = '### 使用 useSelectedLayoutSegment'
export const parallelRoutesExamplesContent2 = '[useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) 和 [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) 都接受 parallelRoutesKey 参数，该参数允许您读取slots内的active路由段。'
export const parallelRoutesExamplesContent2Code = `~~~app/layout.tsx~~~
'use client'
 
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function Layout({ auth }: { auth: React.ReactNode }) {
  const loginSegment = useSelectedLayoutSegment('auth')
  // ...
}`
export const parallelRoutesExamplesContent3 = '当用户导航到 app/@auth/login（或 URL 栏中的 /login）时，loginSegment 将等于字符串“login”。'
export const parallelRoutesExamplesContent4 = '### 条件路由'
export const parallelRoutesExamplesContent5 = '你可以使用并行路由根据特定条件（例如用户角色）有条件地渲染路由。例如，要为 /admin 或 /user 角色渲染不同的dashboard页面：'
export const parallelRoutesExamplesContent5Img = '![conditional-routes-ui](/nextjsDoc/fileSystemConventions/conditional-routes-ui.avif)'
export const parallelRoutesExamplesContent5Code = `~~~app/dashboard/layout.tsx~~~
import { checkUserRole } from '@/lib/auth'
 
export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const role = checkUserRole()
  return role === 'admin' ? admin : user
}`
export const parallelRoutesExamplesContent6 = '### 选项卡组(Tab Groups)'
export const parallelRoutesExamplesContent7 = '您可以在插槽内添加布局，以允许用户独立导航插槽。这对于创建选项卡非常有用。'
export const parallelRoutesExamplesContent8 = '例如，@analytics 插槽有两个子页面：/page-views 和 /visitors。'
export const parallelRoutesExamplesContent8Img = '![parallel-routes-tab-groups](/nextjsDoc/fileSystemConventions/parallel-routes-tab-groups.avif)'
export const parallelRoutesExamplesContent9 = '在@analytics中，创建一个layout文件来在两个页面之间共享标签：'
export const parallelRoutesExamplesContent9Code = `~~~app/@analytics/layout.tsx~~~
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
}`
export const parallelRoutesExamplesContent10 = '### 模态框(Modals)'
export const parallelRoutesExamplesContent11 = '并行路由可以与拦截路由一起使用，以创建支持深度链接的模态框。这可以帮助您解决构建模态框时遇到的常见挑战，例如：'
export const parallelRoutesExamplesContent11List = [
    '使模态框内容可通过 URL 共享。',
    '页面刷新时保留上下文，而不是关闭模态框。',
    '向后导航时关闭模态框，而不是返回上一个路径。',
    '向前导航时重新打开模态框。'
]
export const parallelRoutesExamplesContent12 = '考虑以下 UI 模式，用户可以使用客户端导航从layout打开登录模式，或访问单独的 /login 页面：'
export const parallelRoutesExamplesContent12Img = '![parallel-routes-auth-modal](/nextjsDoc/fileSystemConventions/parallel-routes-auth-modal.avif)'
export const parallelRoutesExamplesContent13 = '要实现此模式，首先创建一个展示主登录页面的 /login 路由。'
export const parallelRoutesExamplesContent13Img = '![parallel-routes-modal-login-page](/nextjsDoc/fileSystemConventions/parallel-routes-modal-login-page.avif)'
export const parallelRoutesExamplesContent13Code = `~~~app/login/page.tsx~~~
import { Login } from '@/app/ui/login'
 
export default function Page() {
  return <Login />
}
`
export const parallelRoutesExamplesContent14 = '然后，在 @auth 槽内，添加返回 null 的 default.js 文件。这确保模态框在非活动状态时不会被渲染。'
export const parallelRoutesExamplesContent14Code = `~~~app/@auth/default.js~~~
export default function Default() {
  return null
}`
export const parallelRoutesExamplesContent15 = '在 @auth 槽内，通过将 <Modal> 组件及其子组件导入 @auth/(.)login/page.tsx 文件并将文件夹名称更新为 /@auth/(.)login/page.tsx 来拦截 /login 路由。'
export const parallelRoutesExamplesContent15Code = `~~~app/@auth/(.)login/page.tsx~~~
import { Modal } from '@/app/ui/modal'
import { Login } from '@/app/ui/login'
 
export default function Page() {
  return (
    <Modal>
      <Login />
    </Modal>
  )
}`
export const parallelRoutesExamplesContent15GTK = [
    '约定 (.) 用于拦截路由。更多信息，请参阅拦截路由文档。',
    '通过将 <Modal> 功能与模态框内容 (<Login>) 分离，您可以确保模态框内的任何内容（例如表单）都是服务器组件。更多信息，请参阅交叉客户端和服务器组件。'
]
export const parallelRoutesExamplesContent16 = '#### 打开模态框'
export const parallelRoutesExamplesContent17 = '现在，您可以利用 Next.js 路由器来打开和关闭模态框。这可确保在模态框打开时以及向前和向后导航时，URL 能够正确更新。'
export const parallelRoutesExamplesContent18 = '要打开modal，请将 @auth 插槽作为props传递给父layout并将其与children prop一起展示。'
export const parallelRoutesExamplesContent18Code = `~~~app/layout.tsx~~~
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
}`
export const parallelRoutesExamplesContent19 = '当用户点击 <Link> 时，模态框会打开，而不是导航到 /login 页面。但是，在刷新或初始加载时，导航到 /login 会将用户带到主登录页面。'
export const parallelRoutesExamplesContent20 = '#### 关闭模态框'
export const parallelRoutesExamplesContent21 = '您可以通过调用 router.back() 或使用 Link 组件来关闭模态框。'
export const parallelRoutesExamplesContent21Code = `~~~app/ui/modal.tsx~~~
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
}`
export const parallelRoutesExamplesContent22 = '当使用 Link 组件导航离开不再需要渲染 @auth 插槽的页面时，我们需要确保并行路由匹配到返回 null 的组件。例如，当导航回根页面时，我们创建一个 @auth/page.tsx 组件：'
export const parallelRoutesExamplesContent22Code = `~~~app/ui/modal.tsx~~~
import Link from 'next/link'
 
export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">Close modal</Link>
      <div>{children}</div>
    </>
  )
}`
export const parallelRoutesExamplesContent23Code = `~~~app/@auth/page.tsx~~~
export default function Page() {
  return null
}`
export const parallelRoutesExamplesContent24 = '或者如果导航到任何其他页面（例如 /foo、/foo/bar 等），您可以使用一个 catch-all 插槽：'
export const parallelRoutesExamplesContent24Code = `~~~app/@auth/[...catchall].tsx~~~
export default function CatchAll() {
  return null
}`
export const parallelRoutesExamplesContent24GTK = [
    '由于并行路由的行为方式，我们在 @auth 槽中使用了一个 catch-all 路由来关闭模态框。由于客户端导航到不再与slot匹配的路由仍然可见，因此我们需要将该slot与返回 null 的路由匹配以关闭模态框。',
    '其他示例包括在图库中打开照片模态框，同时还拥有一个专用的 /photo/[id] 页面，或者在侧边模态框中打开购物车。',
    '查看使用拦截路由和并行路由的模态框示例。'
]
export const parallelRoutesExamplesContent25 = '### Loading and Error UI'
export const parallelRoutesExamplesContent26 = '并行路线可以独立流式传输，允许您为每条路由定义独立的错误和加载状态：'
export const parallelRoutesExamplesContent26Img = '![parallel-routes-cinematic-universe](/nextjsDoc/fileSystemConventions/parallel-routes-cinematic-universe.avif)'
export const parallelRoutesExamplesContent27 = '请参阅[Loading UI](https://nextjs.org/docs/app/api-reference/file-conventions/loading) 和 [Error Handling](https://nextjs.org/docs/app/getting-started/error-handling)文档以了解更多信息。'
export const apiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'default.js',
        content: 'API Reference for the default.js file.',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/default'
    },
]
