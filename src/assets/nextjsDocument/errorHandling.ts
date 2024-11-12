export const title = 'Error 处理';
export const content1 = '错误可以分为两类：预期错误和未捕获异常：';
export const content2 = ['将预期错误建模为返回值：避免在服务器操作中使用 try/catch 来处理预期错误。使用 useFormState 来管理这些错误并将其返回给客户端。',
    '使用错误边界来处理意外错误：使用 error.tsx 和 global-error.tsx 文件实现错误边界来处理意外错误并提供后备 UI。'];
export const handleExpectedErrorTitle = '## 处理预期错误';
export const handleExpectedErrorContent1 = '预期错误是指应用程序正常运行期间可能发生的错误，例如来自服务器端表单验证或失败的请求的错误。这些错误应明确处理并返回给客户端。';
export const handleExpectedErrorContent2 = '### 处理服务器操作的预期错误';
export const handleExpectedErrorContent3 = '使用 useFormState 钩子来管理服务器操作的状态，包括处理错误。此方法可避免使用 try/catch 块来处理预期错误，这些错误应被建模为返回值，而不是抛出的异常。';
export const handleExpectedErrorContent4 = '然后，您可以将您的操作传递给 useFormState 钩子并使用返回的状态来显示错误消息。';
export const handleExpectedErrorContentTips = '这些示例使用 React 的 useFormState 钩子，该钩子与 Next.js App Router 捆绑在一起。如果您使用的是 React 19，请改用 useActionState。有关更多信息，请参阅 React 文档。';
export const handleExpectedErrorContent5 = '您还可以使用返回的状态来显示来自客户端组件的 toast 消息。';
export const handleExpectedErrorContent6 = '## 处理服务器组件的预期错误';
export const handleExpectedErrorContent7 = '在服务器组件内部获取数据时，您可以使用返回数据，有条件地呈现错误消息或重定向。';
export const handleUncaughtExceptionsTitle = 'Uncaught Exceptions';
export const handleUncaughtExceptionsContent1 = '未捕获异常是意外错误，表示应用程序正常流程中不应发生的错误或问题。这些应该通过抛出错误来处理，然后由错误边界捕获。';
export const handleUncaughtExceptionsContent2 = ["常见：使用 error.js 处理根布局下未捕获的错误。",
    "可选：使用嵌套的 error.js 文件（例如 app/dashboard/error.js）处理细粒度的未捕获错误",
    "不常见：使用 global-error.js 处理根布局中未捕获的错误。"];
export const handleUncaughtExceptionsContent3 = '### 使用错误边界';
export const handleUncaughtExceptionsContent4 = 'Next.js 使用错误边界来处理未捕获的异常。错误边界会捕获其子组件中的错误并显示后备 UI，而不是崩溃的组件树。';
export const handleUncaughtExceptionsContent5 = '通过在路由段内添加 error.tsx 文件并导出 React 组件来创建错误边界：';
export const handleUncaughtExceptionsContent6 = '如果您希望错误冒泡至父错误边界，则可以在渲染错误组件时抛出。';
export const handleUncaughtExceptionsContent7 = '### 处理嵌套路由中的错误';
export const handleUncaughtExceptionsContent8 = '错误将冒泡到最近的父错误边界。通过将 error.tsx 文件放置在路由层次结构中的不同级别，可以实现细粒度的错误处理。';
export const handleUncaughtExceptionsContent9 = '### 处理全局错误';
export const handleUncaughtExceptionsContent10 = '虽然不太常见，但您可以使用位于根应用目录中的 app/global-error.js 处理根布局中的错误，即使在利用国际化时也是如此。全局错误 UI 必须定义自己的 <html> 和 <body> 标签，因为它在活动时会替换根布局或模板。';
