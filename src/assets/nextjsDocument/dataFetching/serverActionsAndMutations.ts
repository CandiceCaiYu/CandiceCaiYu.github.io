export const title = "# 服务器操作和变更";
export const content1 = "服务器操作是在服务器上执行的异步函数。它们可以在服务器和客户端组件中调用，以处理 Next.js 应用程序中的表单提交和数据变更。";
export const content2 = "了解有关通过服务器操作与变更的更多信息 → YouTube（10 分钟）。";
export const conventionTitle = "## 约定";
export const conventionContent1 = "可以使用 React “use server” 指令定义服务器操作。您可以将该指令放在异步函数的顶部，以将该函数标记为服务器操作，或放在单独文件的顶部，以将该文件的所有导出标记为服务器操作。";
export const conventionContent2 = "### 服务器组件";
export const conventionContent3 = "服务器组件可以使用内联函数级别或模块级别的'use server'指令。要内联服务器操作，请将'use server'添加到函数主体的顶部：";
export const conventionContent3Code = `~~~app/page.tsx

export default function Page() {
  // Server Action
  async function create() {
    'use server'
    // Mutate data
  }
 
  return '...'
}`;
export const conventionContent4 = "### 客户端组件";
export const conventionContent5 = "要在客户端组件中调用服务器操作，请创建一个新文件并在其顶部添加'use server'指令。文件内的所有导出函数都将被标记为可在客户端和服务器组件中重复使用的服务器操作：";
export const conventionContent5Code1 = `~~~app/actions.ts

'use server'
 
export async function create() {}`;
export const conventionContent5Code2 = `~~~app/page.tsx

'use client'
 
import { create } from '@/app/actions'
 
export function Button() {
  return <button onClick={() => create()}>Create</button>
}`;
export const conventionContent = "### 将操作作为 props 传递";
export const conventionContent = "您还可以将服务器操作作为 prop 传递给客户端组件：";
export const conventionContent =    `~~~<ClientComponent updateItemAction={updateItem} />`;
export const conventionContent = `~~~app/client-component.tsx

'use client'
 
export default function ClientComponent({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void
}) {
  return <form action={updateItemAction}>{/* ... */}</form>
}`;
export const conventionContent6 = "通常，Next.js TypeScript 插件会在 client-component.tsx 中标记 updateItemAction，因为它是一个通常无法跨客户端-服务器边界序列化的函数。但是，名为 action 或以 Action 结尾的 props 被假定为接收服务器操作。这只是一种启发式方法，因为 TypeScript 插件实际上并不知道它接收的是服务器操作还是普通函数。运行时类型检查仍将确保您不会意外将函数传递给客户端组件。";
export const behaviorTitle = "## 行为";
export const behaviorContentList = [
    "可以使用 <form> 元素中的 action 属性来调用服务器操作：",
    ["服务器组件默认支持渐进式增强，这意味着即使 JavaScript 尚未加载或被禁用，表单也会被提交。",
        "在客户端组件中，如果 JavaScript 尚未加载，则调用服务器操作的表单将对提交进行排队，并优先考虑客户端水合。",
        "水合后，浏览器不会在表单提交时刷新。",
    ],
    "服务器操作不仅限于 <form>，还可以从事件处理程序、useEffect、第三方库和其他表单元素（如 <button>）调用。",
    "服务器操作与 Next.js 缓存和重新验证架构集成。调用操作时，Next.js 可以在一次服务器往返中返回更新后的 UI 和新数据。",
    "在后台，操作使用 POST 方法，并且只有此 HTTP 方法可以调用它们。",
    "服务器操作的参数和返回值必须可由 React 序列化。请参阅 React 文档以获取可序列化参数和值的列表。",
    "服务器操作是函数。这意味着它们可以在应用程序的任何地方重复使用。",
    "服务器操作从其所使用的页面或布局继承runtime。",
    "服务器操作从其所使用的页面或布局继承路由段配置，包括诸如 maxDuration 之类的字段。",
];
export const exampleTitle = "## 示例";
export const exampleContent1 = "### 表单";
export const exampleContent2 =  "React 扩展了 HTML <form> 元素，以允许使用 action prop 调用服务器操作。";
export const exampleContent3 = "在表单中调用时，该操作会自动接收 FormData 对象。您不需要使用 React useState 来管理字段，而是可以使用原生 FormData 方法提取数据：";
export const exampleContent4 = `~~~app/invoices/page.tsx

export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'
 
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }
 
    // mutate data
    // revalidate cache
  }
 
  return <form action={createInvoice}>...</form>
}`;
export const exampleContent4Tips = [
    "示例：带有加载和错误状态的表单" ,
    "处理包含许多字段的表单时，您可能需要考虑使用带有 JavaScript 的 Object.fromEntries() 的 entities() 方法。例如：const rawFormData = Object.fromEntries(formData)。需要注意的一点是 formData 将包含额外的 $ACTION_ 属性。" ,
    "请参阅 React <form> 文档以了解更多信息。"
];
export const exampleContent5 = "### 传递附加参数";
export const exampleContent6 = "您可以使用 JavaScript 绑定方法将其他参数传递给服务器操作。";
export const exampleContent6Code = `~~~app/client-component.tsx

'use client'
 
import { updateUser } from './actions'
 
export function UserProfile({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId)
 
  return (
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  )
}`;
export const exampleContent7 = "除了表单数据之外，服务器操作还将接收 userId 参数：";
export const exampleContent7Code = `~~~app/actions.ts

'use server'
 
export async function updateUser(userId: string, formData: FormData) {}`;
export const exampleContent7Tips = [
    '另一种方法是将参数作为表单中的隐藏输入字段传递（例如 <input type="hidden" name="userId" value={userId} />）。但是，该值将成为呈现的 HTML 的一部分，不会被编码。',
    '.bind 适用于服务器和客户端组件。它还支持渐进式增强。'
];
export const exampleContent8 = "### 嵌套表单元素";
export const exampleContent9 =  '您还可以在嵌套在 <form> 中的元素（例如 <button>、<input type="submit"> 和 <input type="image">）中调用服务器操作。这些元素接受 formAction 属性或事件处理程序。';
export const exampleContent10 = "如果您想要在表单中调用多个服务器操作，这非常有用。例如，除了发布帖子草稿外，您还可以创建一个特定的 <button> 元素来保存帖子草稿。有关更多信息，请参阅 React <form> 文档。";
export const exampleContent11 = "### 程序化表单提交";
export const exampleContent12 = "您可以使用 requestSubmit() 方法以编程方式触发表单提交。例如，当用户使用 ⌘ + Enter 键盘快捷键提交表单时，您可以监听 onKeyDown 事件：";
export const exampleContent12Code = `~~~app/entry.tsx

'use client'
 
export function Entry() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'Enter' || e.key === 'NumpadEnter')
    ) {
      e.preventDefault()
      e.currentTarget.form?.requestSubmit()
    }
  }
 
  return (
    <div>
      <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
    </div>
  )
}`;
export const exampleContent13 = "这将触发最近的 <form> 祖先的提交，从而调用服务器操作。";
export const exampleContent14 = "### 服务器端表单验证";
export const exampleContent15 = "您可以使用 HTML 属性（例如 required 和 type=\"email\"）进行基本的客户端表单验证。";
export const exampleContent16 = "对于更高级的服务器端验证，您可以使用 zod 这样的库在改变数据之前验证表单字段：";
export const exampleContent17 = `~~~app/actions.ts

'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})
 
export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Mutate data
}`;
export const exampleContent18 = "一旦字段在服务器上得到验证，您就可以在操作中返回一个可序列化的对象，并使用 React useFormState 钩子向用户显示一条消息。";
export const exampleContent18List = [
    "通过将操作传递给 useFormState，操作的函数签名会发生变化，以接收新的 prevState 或 initialState 参数作为其第一个参数。",
    "useFormState 是一个 React 钩子，因此必须在客户端组件中使用。"
];
export const exampleContent18Code = `~~~app/action.ts

'use server'
 
import { redirect } from 'next/navigation'
 
export async function createUser(prevState: any, formData: FormData) {
  const res = await fetch('https://...')
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }
 
  redirect('/dashboard')
}`;
export const exampleContent19 = "然后，您可以将您的操作传递给 useFormState 钩子并使用返回的状态来显示错误消息。";
export const exampleContent19Code = `~~~app/ui/signup.tsx

'use client'
 
import { useFormState } from 'react-dom'
import { createUser } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Signup() {
  const [state, formAction] = useFormState(createUser, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button>Sign up</button>
    </form>
  )
}`;
export const exampleContent19Tips = [
    "这些示例使用 React 的 useFormState 钩子，该钩子与 Next.js App Router 捆绑在一起。如果您使用的是 React 19，请改用 useActionState。有关更多信息，请参阅 React 文档。"
];
export const exampleContent20 = "### 待定状态";
export const exampleContent21 = "在改变数据之前，你应该始终确保用户也有权执行该操作。请参阅身份验证和授权。";
export const exampleContent22 = "useFormStatus 钩子公开一个待定布尔值，可用于在执行操作时显示加载指示器。";
export const exampleContent22Code = `~~~app/submit-button.tsx

'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button disabled={pending} type="submit">
      Sign Up
    </button>
  )
}`;
export const exampleContent22List = [
    "在 React 19 中，useFormStatus 在返回的对象上包含其他键，例如数据、方法和操作。如果您未使用 React 19，则只有待处理键可用。" ,
    "在 React 19 中，useActionState 在返回的状态上还包含待处理键。"
];
export const exampleContent23 = "### 乐观的更新";
export const exampleContent24 = "您可以使用 React useOptimistic 钩子在服务器操作完成执行之前乐观地更新 UI，而不是等待响应：";
export const exampleContent24Code = `~~~app/page.tsx

'use client'
 
import { useOptimistic } from 'react'
import { send } from './actions'
 
type Message = {
  message: string
}
 
export function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }])
 
  const formAction = async (formData) => {
    const message = formData.get('message') as string
    addOptimisticMessage(message)
    await send(message)
  }
 
  return (
    <div>
      {optimisticMessages.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}`;
export const exampleContent25 = "### 事件处理程序";
export const exampleContent26 = "虽然在 <form> 元素中使用服务器操作很常见，但也可以使用 onClick 等事件处理程序来调用它们。例如，要增加点赞计数：";
export const exampleContent26Code = `~~~app/like-button.tsx

'use client'
 
import { incrementLike } from './actions'
import { useState } from 'react'
 
export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
 
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}`;
export const exampleContent27 = "您还可以向表单元素添加事件处理程序，例如，在 onChange 时保存表单字段：";
export const exampleContent27Code = `~~~app/ui/edit-post.tsx

'use client'
 
import { publishPost, saveDraft } from './actions'
 
export default function EditPost() {
  return (
    <form action={publishPost}>
      <textarea
        name="content"
        onChange={async (e) => {
          await saveDraft(e.target.value)
        }}
      />
      <button type="submit">Publish</button>
    </form>
  )
}`;
export const exampleContent28 = "对于这种可能快速连续触发多个事件的情况，我们建议进行去抖动以防止不必要的服务器操作调用。";
export const exampleContent29 = "### useEffect";
export const exampleContent30 = "您可以使用 React useEffect 钩子在组件挂载或依赖项发生更改时调用服务器操作。这对于依赖于全局事件或需要自动触发的突变非常有用。例如，应用快捷方式的 onKeyDown、无限滚动的交叉观察器钩子，或者在组件挂载时更新视图计数：";
export const exampleContent31 = `~~~app/view-count.tsx

'use client'
 
import { incrementViews } from './actions'
import { useState, useEffect } from 'react'
 
export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)
 
  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    }
 
    updateViews()
  }, [])
 
  return <p>Total Views: {views}</p>
}`;
export const exampleContent32 = "记住考虑 useEffect 的行为和注意事项。";
export const exampleContent33 = "### 错误处理";
export const exampleContent34 = "当错误被抛出时，它将被客户端上最近的 error.js 或 <Suspense> 边界捕获。我们建议使用 try/catch 返回错误以供您的 UI 处理。";
export const exampleContent34Code = `~~~app/actions.ts

'use server'
 
export async function createTodo(prevState: any, formData: FormData) {
  try {
    // Mutate data
  } catch (e) {
    throw new Error('Failed to create task')
  }
}`;
export const exampleContentTips = [
    "除了抛出错误之外，你还可以返回一个对象供 useFormState 处理。请参阅服务器端验证和错误处理。"
];
export const exampleContent35 = "### 重新验证数据";
export const exampleContent36 = "您可以使用 revalidatePath API 重新验证服务器操作中的 Next.js 缓存：";
export const exampleContent36Code = `~~~app/actions.ts

'use server'
 
import { revalidatePath } from 'next/cache'
 
export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }
 
  revalidatePath('/posts')
}`;
export const exampleContent37 = "或者使用 revalidateTag 使带有缓存标签的特定数据提取无效：";
export const exampleContent37Code = `~~~app/actions.ts

'use server'
 
import { revalidateTag } from 'next/cache'
 
export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }
 
  revalidateTag('posts')
}`;
export const exampleContent38 = "### 重定向";
export const exampleContent39 = "如果您希望在服务器操作完成后将用户重定向到其他路由，则可以使用重定向 API。重定向需要在 try/catch 块之外调用：";
export const exampleContent39Code = `~~~app/actions.ts

'use server'
 
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
 
export async function createPost(id: string) {
  try {
    // ...
  } catch (error) {
    // ...
  }
 
  revalidateTag('posts') // Update cached posts
  redirect(\`/post/${id}\`) // Navigate to the new post page
}`;
export const exampleContent40 = "### Cookies";
export const exampleContent41 = "您可以使用 cookies API 在服务器操作中get、set和delete cookie：";
export const exampleContent41Code = `~~~app/actions.ts

'use server'
 
import { cookies } from 'next/headers'
 
export async function exampleAction() {
  const cookieStore = await cookies()
 
  // Get cookie
  cookieStore.get('name')?.value
 
  // Set cookie
  cookieStore.set('name', 'Delba')
 
  // Delete cookie
  cookieStore.delete('name')
}`;
export const exampleContent42 = "请参阅从服务器操作中删除 cookie 的其他示例。";
export const securityTitle = "## 安全";
export const securityContent1 = "默认情况下，创建和导出服务器操作时，它会创建一个公共的 HTTP 端点，并应使用相同的安全假设和授权检查来处理。这意味着，即使服务器操作或实用程序函数未导入到代码中的其他地方，它仍然是可公开访问的。";
export const securityContent2 = "为了提高安全性，Next.js 具有以下内置功能：";
export const securityContent2List = [
    "安全操作 ID：Next.js 创建加密的非确定性 ID，以允许客户端引用和调用服务器操作。这些 ID 会在构建之间定期重新计算，以增强安全性。",
    "消除死代码：从客户端包中删除未使用的服务器操作（通过其 ID 引用），以避免第三方公开访问。"
];
export const securityContent2Tips = "ID 在编译期间创建，最多缓存 14 天。当启动新构建或构建缓存失效时，将重新生成 ID。此安全改进降低了缺少身份验证层时的风险。但是，您仍应将服务器操作视为公共 HTTP 端点。";
export const securityContent2Code = `~~~
// app/actions.js
'use server'
 
// This action **is** used in our application, so Next.js
// will create a secure ID to allow the client to reference
// and call the Server Action.
export async function updateUserAction(formData) {}
 
// This action **is not** used in our application, so Next.js
// will automatically remove this code during \`next build\`
// and will not create a public endpoint.
export async function deleteUserAction(formData) {}`;
export const securityContent3 = "### 身份验证和授权";
export const securityContent4 = "您应该确保用户有权执行该操作。例如：";
export const securityContent4Code = `~~~app/actions.ts

'use server'
 
import { auth } from './lib'
 
export function addItem() {
  const { user } = auth()
  if (!user) {
    throw new Error('You must be signed in to perform this action')
  }
 
  // ...
}`;
export const securityContent5 = "### 闭包和加密";
export const securityContent6 = "在组件内部定义服务器操作会创建一个闭包，其中操作可以访问外部函数的范围。例如，publish操作可以访问 publishVersion 变量：";
export const securityContent7 = "当您需要在渲染时捕获数据快照（例如 publishVersion）以便稍后调用操作时使用它时，闭包很有用。";
export const securityContent8 = "但是，为了实现这一点，捕获的变量会在调用操作时发送到客户端并返回到服务器。为了防止敏感数据暴露给客户端，Next.js 会自动加密封闭变量。每次构建 Next.js 应用程序时，都会为每个操作生成一个新的私钥。这意味着只能为特定的构建调用操作。";
export const securityContent8Tips = "我们不建议仅依赖加密来防止敏感数据在客户端上暴露。相反，您应该使用 React taint API 来主动阻止特定数据发送到客户端。";
export const securityContent9 = "### 覆盖加密密钥（高级）";
export const securityContent10 = "当在多台服务器上自行托管 Next.js 应用程序时，每个服务器实例可能会拥有不同的加密密钥，从而导致潜在的不一致。";
export const securityContent11 = "为了缓解这种情况，您可以使用 process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY 环境变量覆盖加密密钥。指定此变量可确保您的加密密钥在构建过程中保持不变，并且所有服务器实例都使用相同的密钥。";
export const securityContent12 = "这是一个高级用例，其中跨多个部署的一致加密行为对您的应用程序至关重要。您应该考虑密钥轮换和签名等标准安全做法。";
export const securityContent12Tips = "部署到 Vercel 的 Next.js 应用程序会自动处理这个问题。";
export const securityContent13 = "### 允许的来源（高级）";
export const securityContent14 = "由于可以在 <form> 元素中调用服务器操作，因此这使得它们容易受到 CSRF 攻击。";
export const securityContent15 = "在后台，服务器操作使用 POST 方法，并且只允许此 HTTP 方法调用它们。这可以防止现代浏览器中的大多数 CSRF 漏洞，尤其是在 SameSite cookie 为默认设置的情况下。";
export const securityContent16 = "作为额外的保护，Next.js 中的服务器操作还会将 Origin 标头与 Host 标头（或 X-Forwarded-Host）进行比较。如果它们不匹配，则请求将被中止。换句话说，服务器操作只能在与托管它的页面相同的host上调用。";
export const securityContent17 = "对于使用反向代理或多层后端架构的大型应用程序（其中服务器 API 与生产域不同），建议使用配置选项 serverActions.allowedOrigins 选项来指定安全来源列表。该选项接受一个字符串数组。";
export const securityContent17Code = `~~~next.config.js

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    },
  },
}`;
export const securityContent = "了解有关安全和服务器操作的更多信息。";
export const additionalResourceTitle = "## 其他资源";
export const additionalResourceTitleContent1 = "有关更多信息，请查看以下 React 文档：";
export const additionalResourceTitleContent1List = ['Server Actions',
'"use server"',
'<form>',
'useFormStatus',
'useActionState',
'useOptimistic']
