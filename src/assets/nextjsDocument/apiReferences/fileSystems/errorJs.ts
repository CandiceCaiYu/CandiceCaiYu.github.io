import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const errorJsTitle = '# error.js'
export const errorJsDescription1 = 'error文件允许您处理意外的运行时错误并显示回退 UI。'
export const errorJsDescription1Img = '![error-special-file](/nextjsDoc/fileSystemConventions/error-special-file.avif)'
export const errorJsDescription1Code = `~~~app/dashboard/error.tsx~~~
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
export const errorJsDescription2 = 'error.js 将路由段及其嵌套的子组件包裹在 [React Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)中。当边界内抛出错误时，错误组件会显示为回退 UI。'
export const errorJsDescription2Img = '![error-overview](/nextjsDoc/fileSystemConventions/error-overview.avif)'
export const errorJsDescription2GTK = [
    'React DevTools 允许您切换Error Boundary来测试错误状态。',
    '如果您希望错误冒泡到父级Error Boundary，则可以在渲染错误组件时抛出错误。'
]
export const errorJsReferenceTitle = '## 参考'
export const errorJsReferenceContent1 = '### Props'
export const errorJsReferenceContent2 = '#### error'
export const errorJsReferenceContent3 = '转发到客户端组件error.tsx 的Error对象实例。'
export const errorJsReferenceContent3GTK = '在开发过程中，转发到客户端的 Error 对象将被序列化，并包含原始错误的消息，以便于调试。然而，在生产环境中，此行为有所不同，以避免将错误中包含的潜在敏感信息泄露给客户端。'
export const errorJsReferenceContent4 = '#### error.message'
export const errorJsReferenceContent4List = [
    '从客户端组件转发的Errors会显示原始error message。',
    '从服务器组件转发的Errors会显示带有标识符的通用消息。这是为了防止泄露敏感信息。您可以在errors.digest下使用该标识符来匹配相应的服务器端日志。'
]
export const errorJsReferenceContent5 = '#### error.digest'
export const errorJsReferenceContent6 = '自动生成的error哈希值，可用于匹配服务器端日志中对应的错误。'
export const errorJsReferenceContent7 = '#### reset'
export const errorJsReferenceContent8 = '错误原因有时可能是暂时的。在这种情况下，重试或许可以解决问题。'
export const errorJsReferenceContent9 = 'Error组件可以使用 reset() 函数提示用户尝试从错误中恢复。执行该函数时，它会尝试重新渲染错误边界的内容。如果成功，则重新渲染的结果将替换回退Error组件。'
export const errorJsReferenceContent9Code = `~~~app/dashboard/error.tsx~~~
'use client' // Error boundaries must be Client Components
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}`
export const errorJsExamplesTitle = '## 示例'
export const errorJsExamplesContent1 = '### 全局错误'
export const errorJsExamplesContent2 = '虽然不太常见，但您可以使用位于应用根目录中的 global-error.jsx 来处理根布局或模板中的错误，即使在利用国际化功能时也是如此。全局错误 UI 必须定义其自己的 <html> 和 <body> 标签、全局样式、字体或错误页面所需的其他依赖项。此文件在激活时会替换根布局或模板。'
export const errorJsExamplesContent2GTK = '错误边界必须是客户端组件，这意味着 global-error.jsx 不支持导出元数据和 generateMetadata。你可以使用 React <title> 组件作为替代方案。'
export const errorJsExamplesContent2Code = `~~~app/global-error.tsx~~~
'use client' // Error boundaries must be Client Components
 
export default function errorJs({
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
export const errorJsExamplesContent3 = '### 使用自定义错误边界实现优雅的错误恢复'
export const errorJsExamplesContent4 = '当客户端渲染失败时，显示最后已知的服务器渲染的 UI 可能会有助于获得更好的用户体验。'
export const errorJsExamplesContent5 = 'GracefullyDegradingErrorBoundary 是一个自定义错误边界的示例，它会在错误发生之前捕获并保存当前的 HTML。如果发生渲染错误，它会重新渲染捕获的 HTML，并显示一个持久通知栏来通知用户。'

export const apiReference: CustomApiReferenceCardProps[] = [
    {
        title: 'Error Handling',
        content: 'Learn how to display expected errors and handle uncaught exceptions.',
        url: 'https://nextjs.org/docs/app/getting-started/error-handling'
    }
]
