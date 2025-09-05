export const templateJsContent1 = '# template.js';
export const templateJsContent2 = 'template文件类似于layout，因为它包装了layout或页面。与跨路由持久化和维护状态的layout不同，template被赋予一个唯一的键，这意味着子客户端组件会在导航时重置其状态。';
export const templateJsContent3 = '当您需要执行以下操作时，它们很有用：';
export const templateJsContent3List = [
    '在导航时重新同步 useEffect。',
    '在导航时重置子客户端组件的状态。例如，输入字段。',
    '更改默认框架行为。例如，layout内的 Suspense 边界仅在首次加载时显示fallback，而template在每次导航时都会显示fallback。'
];
export const templateJsContent4 = '## 约定';
export const templateJsContent5 = '可以通过从 template.js 文件导出默认的 React 组件来定义template。该组件应该接受 children 属性。';
export const templateJsContent5Img = '![template-special-file](/nextjsDoc/fileSystemConventions/template-special-file.avif)';
export const templateJsContent5Code = `~~~app/template.js~~~
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}`;
export const templateJsContent6 = '就嵌套而言，template.js 渲染在layout及其子元素之间。以下是简化的输出：';
export const templateJsContent6Code = `~~~
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>`;
export const templateJsContent7 = '## props';
export const templateJsContent8 = 'children (required)';
export const templateJsContent9 = 'template接受children prop。';
export const templateJsContent10 = '## 行为';
export const templateJsContent10List = [
    '服务器组件：默认情况下，template是服务器组件。',
    '导航时重新挂载：template会自动接收一个唯一键。导航到新路由会导致template及其子组件重新挂载。',
    '状态重置：template内的任何客户端组件都会在导航时重置其状态。',
    '效果重新运行：像 useEffect 这样的Effect会在组件重新挂载时重新同步。',
    'DOM 重置：template内的 DOM 元素将完全重新创建。'
];
