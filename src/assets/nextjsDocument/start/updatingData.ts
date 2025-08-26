import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 更新数据';
export const intro = '您可以使用 React 的服务器函数更新 Next.js 中的数据。本页将介绍如何创建和调用服务器函数。'
export const whatServerFunctionTitle = '## 什么是服务器函数(Server Function)？';
export const whatServerFunctionContent1 = 'Server Function是一个在服务器上运行的异步函数。客户端通过网络请求调用它们，因此必须是异步的。'
export const whatServerFunctionContent2 = '在action或可变context中，它们也称为Server Action。'
export const whatServerFunctionContent3 = '按照惯例，Server Action是一个与 startTransition 一起使用的异步函数。当函数执行以下操作时，会自动执行此操作：'
export const whatServerFunctionContent3List = [
    '<form> 有action 属性。',
    '<button> 有formAction 属性。',
]
export const whatServerFunctionContent4 = '在 Next.js 中，Server Action与框架的缓存架构集成。调用操作时，Next.js 可以在一次服务器往返中同时返回更新后的 UI 和新数据。'
export const whatServerFunctionContent5 = '在后台，Server Action使用 POST 方法，并且只有此 HTTP 方法才能调用它们。'

export const createServerFunctionTitle = '## 创建服务器函数(Server Function)';
export const createServerFunctionContent2 = '可以使用 "use server" 指令来定义服务器函数。您可以将该指令放在异步函数的顶部，以将该函数标记为服务器函数；或者，您可以将其放在单独文件的顶部，以标记该文件的所有导出内容。'
export const createServerFunctionContent2Code = `~~~app/lib/actions.ts~~~
export async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Update data
  // Revalidate cache
}
 
export async function deletePost(formData: FormData) {
  'use server'
  const id = formData.get('id')
 
  // Update data
  // Revalidate cache
}`
export const createServerFunctionContent3 = '### Server Components'
export const createServerFunctionContent4 = '通过在函数体顶部添加“use server”指令，可以将服务器函数内联到服务器组件中：'
export const createServerFunctionContent4Code = `~~~app/page.tsx~~~
export default function Page() {
  // Server Action
  async function createPost(formData: FormData) {
    'use server'
    // ...
  }
 
  return <></>
}`
export const createServerFunctionContent4GTK = '服务器组件默认支持渐进式增强，这意味着即使 JavaScript 尚未加载或被禁用，调用服务器操作的表单也会被提交。'
export const createServerFunctionContent5 = '### Client Components'
export const createServerFunctionContent6 = '在客户端组件中无法定义服务器函数。但是，你可以通过在客户端组件中调用在顶部包含“use server”指令的文件'
export const createServerFunctionContent6Code = `~~~app/actions.ts~~~
'use server'
 
export async function createPost() {}`
export const createServerFunctionContent7Code = `~~~app/ui/button.tsx~~~
'use client'
 
import { createPost } from '@/app/actions'
 
export function Button() {
  return <button formAction={createPost}>Create</button>
}`
export const createServerFunctionContent7GTK = '在客户端组件中，如果 JavaScript 尚未加载，调用服务器操作的表单将排队提交，并优先进行水合。水合后，浏览器不会在表单提交时刷新。'
export const createServerFunctionContent8 = '### 将action作为prop传递'
export const createServerFunctionContent9 = '您还可以将操作作为 prop 传递给客户端组件：'
export const createServerFunctionContent9Code = `~~~app/page.tsx~~~
<ClientComponent updateItemAction={updateItem} />`
export const createServerFunctionContent10Code = `~~~app/client-component.tsx~~~
'use client'
 
export default function ClientComponent({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void
}) {
  return <form action={updateItemAction}>{/* ... */}</form>
}`


export const invokeServerFunctionTitle = '## 调用服务器函数(Server Function)';
export const invokeServerFunctionContent1 = '调用服务器函数的主要方式有两种：'
export const invokeServerFunctionContent1List = [
    '服务器组件和客户端组件中的[Forms](https://nextjs.org/docs/app/getting-started/updating-data#forms)',
    '客户端组件中的[Event Handler](https://nextjs.org/docs/app/getting-started/updating-data#event-handlers)和 [useEffect](https://nextjs.org/docs/app/getting-started/updating-data#useeffect)'
]
export const invokeServerFunctionContent1GTK = '服务器函数旨在用于服务器端的变更。客户端目前一次调度并等待一个服务器函数的执行。这是一个实现细节，可能会有所变化。如果需要并行数据获取，可以在服务器组件中进行data fetching，或者在单个服务器函数或Route Handler内执行并行工作。'
export const invokeServerFunctionContent2 = '### Forms'
export const invokeServerFunctionContent3 = 'React 扩展了 HTML [<form>](https://react.dev/reference/react-dom/components/form) 元素，以允许使用 HTML action prop 调用服务器函数。'
export const invokeServerFunctionContent4 = '在表单中调用时，该函数会自动接收 FormData 对象。您可以使用 FormData 的原生方法提取数据：'
export const invokeServerFunctionContent4Code = `~~~app/ui/form.tsx~~~
import { createPost } from '@/app/actions'
 
export function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  )
}`
export const invokeServerFunctionContent5Code = `~~~app/actions.ts~~~
'use server'
 
export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Update data
  // Revalidate cache
}`
export const invokeServerFunctionContent6 = '### Event Handlers'
export const invokeServerFunctionContent7 = '您可以使用事件处理程序（例如 onClick）在客户端组件中调用服务器函数。'
export const invokeServerFunctionContent7Code = `~~~app/like-button.tsx~~~
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
}`
export const serverFunctionExampleTitle = '## 示例';
export const serverFunctionExampleContent1 = '### 显示待处理状态'
export const serverFunctionExampleContent2 = '在执行服务器函数时，你可以使用 React 的 useActionState hook 显示loading indicator。此 hook 返回一个 pending 布尔值：'
export const serverFunctionExampleContent2Code = `~~~app/ui/button.tsx~~~
'use client'
 
import { useActionState, startTransition } from 'react'
import { createPost } from '@/app/actions'
import { LoadingSpinner } from '@/app/ui/loading-spinner'
 
export function Button() {
  const [state, action, pending] = useActionState(createPost, false)
 
  return (
    <button onClick={() => startTransition(action)}>
      {pending ? <LoadingSpinner /> : 'Create Post'}
    </button>
  )
}`
export const serverFunctionExampleContent3 = '### 重新验证(Revalidating)'
export const serverFunctionExampleContent4 = '在update Data后，您可以通过在服务器函数中调用 revalidatePath 或 revalidateTag 来重新验证 Next.js 缓存并显示更新的数据：'
export const serverFunctionExampleContent4Code = `~~~app/lib/actions.ts~~~
import { revalidatePath } from 'next/cache'
 
export async function createPost(formData: FormData) {
  'use server'
  // Update data
  // ...
 
  revalidatePath('/posts')
}`
export const serverFunctionExampleContent5 = '### Redirecting'
export const serverFunctionExampleContent6 = '执行更新后，您可能希望将用户重定向到其他页面。您可以通过在服务器函数中调用重定向来实现。'
export const serverFunctionExampleContent6Code = `~~~app/lib/actions.ts~~~
'use server'
 
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
 
export async function createPost(formData: FormData) {
  // Update data
  // ...
 
  revalidatePath('/posts')
  redirect('/posts')
}`
export const serverFunctionExampleContent7 = '调用重定向会引发框架处理的控制流异常。该异常之后的任何代码都不会执行。如果您需要更新数据，请事先调用 revalidatePath 或 revalidateTag。'
export const serverFunctionExampleContent8 = '### Cookies'
export const serverFunctionExampleContent9 = '您可以使用 cookies API 在服务器操作中get, set, and delete cookie：'
export const serverFunctionExampleContent9Code = `~~~app/actions.ts~~~
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
}`
export const serverFunctionExampleContent10 = '## useEffect'
export const serverFunctionExampleContent11 = '您可以使用 React 的 useEffect 钩子在组件挂载或依赖项变化时调用服务器操作。这对于依赖于全局事件或需要自动触发的变更非常有用。例如：'
export const serverFunctionExampleContent11List = [
    '按键事件：在按下特定键时触发服务器操作，如应用快捷键的 onKeyDown 事件。',
    '交叉观察者：使用交叉观察者钩子来实现无限滚动，监测用户何时滚动到页面底部并触发数据加载。',
    '组件挂载：在组件挂载时更新视图计数，确保用户访问时数据是最新的'
]
export const serverFunctionExampleContent11Code = `~~~app/view-count.tsx~~~
'use client'
 
import { incrementViews } from './actions'
import { useState, useEffect, useTransition } from 'react'
 
export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)
  const [isPending, startTransition] = useTransition()
 
  useEffect(() => {
    startTransition(async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    })
  }, [])
 
  // You can use \`isPending\` to give users feedback
  return <p>Total Views: {views}</p>
}`

export const apiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'revalidatePath',
        content: 'API Reference for the revalidatePath function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath'
    },
    {
        title: 'revalidateTag',
        content: 'API Reference for the revalidateTag function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/revalidateTag'
    },
    {
        title: 'redirect',
        content: 'API Reference for the redirect function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/redirect'
    },
]
