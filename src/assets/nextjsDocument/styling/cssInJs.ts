export const title = '# CSS-in-JS';
export const content1TipTitle = '警告';
export const content1TipList = [
    '目前，服务器组件不支持需要运行时 JavaScript 的 CSS-in-JS 库。将 CSS-in-JS 与较新的 React 功能（如服务器组件和流式传输）结合使用需要库作者支持最新版本的 React，包括并发渲染。',
    '我们正在与 React 团队合作开发上游 API，以处理 CSS 和 JavaScript 资产，并支持 React 服务器组件和流式传输架构。'
];
export const content2 = 'app目录中的客户端组件支持以下库（按字母顺序排列）：';
export const content2List = [
    'ant-design',
    'chakra-ui',
    '@fluentui/react-components',
    'kuma-ui',
    '@mui/material',
    '@mui/joy',
    'pandacss',
    'styled-jsx',
    'styled-components',
    'stylex',
    'tamagui',
    'tss-react',
    'vanilla-extract'
];
export const content3 = '目前正在进行以下支持工作：';
export const content3List = [
    'emotion'
];

export const content3TipText = '我们正在测试不同的 CSS-in-JS 库，并将为支持 React 18 功能和/或app目录的库添加更多示例。';
export const content4 = '如果您想要设置服务器组件的样式，我们建议使用 CSS 模块或其他输出 CSS 文件的解决方案，例如 PostCSS 或 Tailwind CSS。';
export const content5 = '## 在app中配置 CSS-in-JS';
export const content6 = '配置 CSS-in-JS 是一个三步选择加入过程，包括：';
export const content6List = [
    '用于收集渲染中的所有 CSS 规则的样式注册表。',
    '新的 useServerInsertedHTML 钩子可在任何可能使用它们的内容之前注入规则。',
    '在初始服务器端渲染期间使用样式注册表包装您的app客户端组件。'
];
export const content7 = '### styled-jsx';
export const content8 = '在客户端组件中使用 styled-jsx 需要使用 v5.1.0。首先，创建一个新的注册表：';
export const content8Code = `~~~app/registry.tsx

'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'
 
export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())
 
  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  })
 
  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}`;
export const content9 = '然后，用注册表包装你的根布局：';
export const content9Code = `~~~app/layout.tsx

import StyledJsxRegistry from './registry'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}`;
export const content10 = '在此处查看示例。';
export const content11 = '### Styled Components';
export const content12 = '下面是如何配置 styled-components@6 或更新版本的示例：';
export const content13 = '首先，在 next.config.js 中启用 styled-components。';
export const content13Code = `~~~next.config.js

module.exports = {
  compiler: {
    styledComponents: true,
  },
}`;
export const content14 = '然后，使用 styled-components API 创建一个全局注册表组件来收集渲染期间生成的所有 CSS 样式规则，并创建一个函数来返回这些规则。然后使用 useServerInsertedHTML 钩子将注册表中收集的样式注入到根布局中的 <head> HTML 标记中。';
export const content14Code = `~~~lib/registry.tsx

'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}`;
export const content15 = '使用样式注册表(style registry)组件包装根布局的children：';
export const content15TipList = [
    '在服务器渲染期间，样式将被提取到全局注册表并刷新到 HTML 的 <head>。这可确保样式规则放置在可能使用它们的任何内容之前。将来，我们可能会使用即将推出的 React 功能来确定在何处注入样式。',
    '在流式传输期间，将收集每个块的样式并将其附加到现有样式中。客户端水化完成后，styled-components 将照常接管并注入任何其他动态样式。',
    '我们专门在样式注册表的树顶层使用客户端组件，因为以这种方式提取 CSS 规则更有效率。它避免在后续服务器渲染时重新生成样式，并防止它们在服务器组件有效负载中发送。',
    '对于需要配置 styled-components 编译的各个属性的高级用例，您可以阅读我们的 Next.js styled-components API 参考以了解更多信息。'
];
