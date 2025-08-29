import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 错误处理 (Error Handling)'
export const description = '错误可以分为两类：预期错误和未捕获异常。本页将指导您如何在 Next.js 应用程序中处理这些错误。'
export const handlingExpectedErrorsTitle = '## 处理预期错误(Handling expected errors)'
export const handlingExpectedErrorsContent1 = '预期错误是指应用程序正常运行期间可能发生的错误，例如来自[服务器端表单验证](https://nextjs.org/docs/app/guides/forms)或失败的请求。这些错误应该被明确处理并返回给客户端。'
export const handlingExpectedErrorsContent2 = '### Server Functions'
export const handlingExpectedErrorsContent3 = '您可以使用 useActionState 钩子来处理服务器函数中的预期错误。'
export const handlingExpectedErrorsContent4 = '对于这些错误，请避免使用 try/catch 并抛出错误。相反，应将预期错误建模为返回值。'
export const handlingExpectedErrorsContent4Code = `~~~app/actions.ts~~~
'use server'
 
export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}`
export const handlingExpectedErrorsContent5 = '您可以将您的action传递给 useActionState 钩子并使用返回的状态来显示错误消息。'
export const handlingExpectedErrorsContent5Code = `~~~app/ui/form.tsx~~~
'use client'
 
import { useActionState } from 'react'
import { createPost } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}`
export const handlingExpectedErrorsContent6 = '### 服务器组件'
export const handlingExpectedErrorsContent7 = '当在服务器组件内部获取数据时，您可以使用response有条件地呈现错误消息或[redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)。'
export const handlingExpectedErrorsContent7Code = `~~~app/page.tsx~~~
export default async function Page() {
  const res = await fetch(\`https://...\`)
  const data = await res.json()
 
  if (!res.ok) {
    return 'There was an error.'
  }
 
  return '...'
}`
export const handlingExpectedErrorsContent8 = '### Not found'
export const handlingExpectedErrorsContent9 = '您可以在路由段内调用 notFound 函数并使用 not-found.js 文件显示 404 UI。'
export const handlingExpectedErrorsContent9Code = `~~~app/blog/[slug]/page.tsx~~~
import { getPostBySlug } from '@/lib/posts'
 
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
 
  if (!post) {
    notFound()
  }
 
  return <div>{post.title}</div>
}`
export const handlingExpectedErrorsContent10Code = `~~~app/blog/[slug]/not-found.js~~~
export default function NotFound() {
  return <div>404 - Page Not Found</div>
}`
export const handlingUncaughtExceptionTitle = '## 处理未捕获异常(Handling uncaught exceptions)'
export const handlingUncaughtExceptionContent1 = '未捕获异常是意外的错误，表示应用程序正常流程中不应发生的错误或bugs。这些错误应该通过抛出错误来处理，然后由错误边界捕获。'
export const handlingUncaughtExceptionContent2 = '### 嵌套错误边界(Nested error boundaries)'
export const handlingUncaughtExceptionContent3 = 'Next.js 使用错误边界来处理未捕获的异常。错误边界会捕获其子组件中的错误，并显示fallback UI，而不是崩溃的组件树。'
export const handlingUncaughtExceptionContent4 = '通过在路由段内添加 error.js 文件并导出 React 组件来创建错误边界：'
export const handlingUncaughtExceptionContent4Code = `~~~app/dashboard/error.js~~~
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}`
export const handlingUncaughtExceptionContent5 = '错误会向上冒泡到最近的父错误边界。通过将 error.tsx 文件放置在路由层次结构的不同层级，可以实现更细粒度的错误处理。'
export const handlingUncaughtExceptionContent5Img = '![nested-error-component-hierarchy](/nextjsDoc/errorHandling/nested-error-component-hierarchy.avif)'
export const handlingUncaughtExceptionContent6 = '错误边界不会捕获事件处理程序内部的错误。它们的设计目的是在渲染过程中捕获错误，以便显示回退 UI，而不是导致整个应用崩溃。'
export const handlingUncaughtExceptionContent7 = '通常，事件处理程序或异步代码中的错误不会被错误边界处理，因为它们在渲染之后运行。'
export const handlingUncaughtExceptionContent8 = '要处理这些情况，请手动捕获错误并使用 useState 或 useReducer 存储它，然后更新 UI 以通知用户。'
export const handlingUncaughtExceptionContent8Code = `~~~
'use client'
 
import { useState } from 'react'
 
export function Button() {
  const [error, setError] = useState(null)
 
  const handleClick = () => {
    try {
      // do some work that might fail
      throw new Error('Exception')
    } catch (reason) {
      setError(reason)
    }
  }
 
  if (error) {
    /* render fallback UI */
  }
 
  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  )
}`
export const handlingUncaughtExceptionContent9 = '请注意，useTransition 中 startTransition 内未处理的错误将会冒泡到最近的错误边界。'
export const handlingUncaughtExceptionContent9Code = `~~~
'use client'
 
import { useTransition } from 'react'
 
export function Button() {
  const [pending, startTransition] = useTransition()
 
  const handleClick = () =>
    startTransition(() => {
      throw new Error('Exception')
    })
 
  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  )
}`
export const handlingUncaughtExceptionContent10 = '### 全局错误(Global errors)'
export const handlingUncaughtExceptionContent11 = '虽然不太常见，但您可以使用位于应用根目录中的 global-error.js 文件来处理root layout中的错误，即使在利用国际化功能时也是如此。全局错误 UI 必须定义自己的 <html> 和 <body> 标签，因为它在激活时会替换根布局或模板。'
export const handlingUncaughtExceptionContent11Code = `~~~app/global-error.js~~~
'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}`

export const apiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'redirect',
        content: 'API Reference for the redirect function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/redirect'
    },
    {
        title: 'error.js',
        content: 'API reference for the error.js special file.',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/error'
    },
    {
        title: 'notFound',
        content: 'API Reference for the notFound function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/not-found'
    },
    {
        title: 'not-found.js',
        content: 'API reference for the not-found.js file.',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/not-found'
    },
]
