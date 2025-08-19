export const title = '# 如何使用 Next.js 设置 Vitest';
export const introduction = 'Vite 和 React Testing Library 经常一起用于单元测试。本指南将向您展示如何使用 Next.js 设置 Vitest 并编写您的第一个测试。'
export const goodToKnow = '由于异步服务器组件是 React 生态系统中的新成员，Vitest 目前不支持它们。虽然你仍然可以对同步服务器和客户端组件运行单元测试，但我们建议对异步组件使用端到端测试。'

export const quickStartTitle = '## 快速入门';
export const quickStartContent = '您可以将 create-next-app 与 Next.js with-vitest 示例结合使用以快速开始：';
export const quickStartCode = `~~~npx create-next-app@latest --example with-vitest with-vitest-app`;

export const manualSetupTitle = '## 手动设置';
export const manualSetupContent1 = '要手动设置 Vitest，请安装 vitest 和以下包作为开发依赖项：'
export const manualSetupCode1 = `~~~
# Using TypeScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
# Using JavaScript
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom`
export const manualSetupContent2 = '在项目根目录中创建一个 vitest.config.mts|js 文件，并添加以下选项：';
export const manualSetupCode2 = `~~~vitest.config.mts~~~
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
  },
})`
export const manualSetupContent3 = '有关配置 Vitest 的更多信息，请参阅 [Vitest 配置](https://vitest.dev/config/#configuration)文档。'
export const manualSetupContent4 = '然后，将test添加到你的 package.json script 中：';
export const manualSetupCode4 = `~~~package.json~~~
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest"
  }
}`;
export const manualSetupContent5 = '当您运行 npm run test 时，Vitest 将默认监视项目中的变化。'

export const creatingYourFirstTestTitle = '## 创建您的第一个 Vitest 单元测试';
export const creatingYourFirstTestContent1 = '通过create test来检查 <Page /> 组件是否成功渲染标题：'
export const creatingYourFirstTestCode1 = `~~~app/page.tsx~~~
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}`
export const creatingYourFirstTestCode2 = `~~~__tests__/page.test.tsx~~~
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})`
export const creatingYourFirstTestGoodToKnow2 = '上面的例子使用了常见的 __tests__ 约定，但测试文件也可以位于应用程序路由器内。上面的例子使用了常见的 __tests__ 约定，但测试文件也可以位于应用程序路由器内。'

export const runningYourTestsTitle = '## 运行您的 Vitest 测试';
export const runningYourTestsContent1 = '然后，运行以下命令来运行测试：'
export const runningYourTestsCode1 = `~~~
npm run test
# or
yarn test
# or
pnpm test
# or
bun test`

export const additionalResourcesTitle = '## 其他资源';
export const additionalResourcesContent = '您可能会发现这些资源很有帮助：'
export const additionalResourcesList = [
    '[Next.js with Vitest example](https://github.com/vercel/next.js/tree/canary/examples/with-vitest)',
    '[Vitest Docs](https://vitest.dev/guide/)',
    '[React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)']
