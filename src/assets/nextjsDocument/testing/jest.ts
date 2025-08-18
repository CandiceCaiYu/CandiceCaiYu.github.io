export const title = '# How to set up Jest with Next.js'
export const introduction = 'Jest 和 React Testing Library经常一起用于单元测试和快照测试。本指南将向您展示如何在 Next.js 中设置 Jest 并编写您的第一个测试。'
export const goodToKnow = '由于异步服务器组件是 React 生态系统中的新成员，Jest 目前不支持它们。虽然你仍然可以对同步服务器和客户端组件运行单元测试，但我们建议对异步组件使用端到端测试。'


export const quickStartTitle = '## 快速入门'
export const quickStartContent = '您可以将 create-next-app 与 Next.js with-jest 示例结合使用以快速开始：'
export const quickStartCode = `~~~npx create-next-app@latest --example with-jest with-jest-app`


export const manualSetupTitle = '## 手动设置'
export const manualSetupContent1 = '自 Next.js 12 发布以来，Next.js 现在已经内置了 Jest 的配置。'
export const manualSetupContent2 = '要设置 Jest，请安装 jest 和以下包作为开发依赖项：'
export const manualSetupCode2 = `~~~npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
# or
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
# or
pnpm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest`

export const manualSetupContent3 = '通过运行以下命令生成基本的 Jest 配置文件：'
export const manualSetupCode3 = `~~~npm init jest@latest
# or
yarn create jest@latest
# or
pnpm create jest@latest`
export const manualSetupContent4 = '这将引导您完成一系列提示，为您的项目设置 Jest，包括自动创建 jest.config.ts|js 文件。'
export const manualSetupContent5 = '更新配置文件以使用 next/jest。此转换器包含 Jest 与 Next.js 配合使用所需的所有配置选项：'
export const manualSetupCode5 = `~~~jest.config.js~~~
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)`
export const manualSetupContent6 = '在底层，next/jest 会自动为您配置 Jest，包括：'
export const manualSetupContent6List = [
    "使用 Next.js 编译器设置转换。",
    "自动模拟样式表（.css、.module.css 及其 scss 变体）、图片导入和 next/font。",
    "将 .env（及其所有变体）加载到 process.env 中。",
    "在测试解析和转换中忽略 node_modules。",
    "在测试解析中忽略 .next。",
    "加载 next.config.js 文件以获取启用 SWC 转换的标志。"]
export const manualSetupContent6GoodToKnow = '要直接测试环境变量，请在单独的设置脚本或 jest.config.ts 文件中手动加载它们。更多信息，请参阅测试环境变量。'

export const handlingAbsoluteImportsAndModulePathAliasesTitle = '## 可选：处理绝对导入和模块路径别名'
export const handlingAbsoluteImportsAndModulePathAliasesContent1 = '如果您的项目使用模块路径别名，您需要配置 Jest 以通过将 jsconfig.json 文件中的 paths 选项与 jest.config.js 文件中的 moduleNameMapper 选项匹配来解析导入。例如：'
export const handlingAbsoluteImportsAndModulePathAliasesCode1 = `~~~tsconfig.json or jsconfig.json~~~
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler",
    "baseUrl": "./",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}`

export const handlingAbsoluteImportsAndModulePathAliasesCode2 = `~~~jest.config.js~~~
moduleNameMapper: {
  // ...
  '^@/components/(.*)$': '<rootDir>/components/$1',
}`

export const extendJestWithCustomMatchersTitle = '## 可选：使用自定义匹配器扩展 Jest'
export const extendJestWithCustomMatchersContent1 = '@testing-library/jest-dom 包含一组便捷的自定义匹配器，例如 .toBeInTheDocument()，使编写测试更加轻松。您可以通过在 Jest 配置文件中添加以下选项，为每个测试导入自定义匹配器：'
export const extendJestWithCustomMatchersCode1 = `~~~jest.config.js~~~
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']`
export const extendJestWithCustomMatchersContent2 = '然后，在 jest.setup 内部，添加以下导入：'
export const extendJestWithCustomMatchersCode2 = `~~~jest.setup.ts~~~
import '@testing-library/jest-dom'`
export const extendJestWithCustomMatchersGoodToKnow2 = 'extends-expect 在 v6.0 中被删除，因此如果您在版本 6 之前使用 @testing-library/jest-dom，则需要导入 @testing-library/jest-dom/extend-expect。'
export const extendJestWithCustomMatchersContent3 = '如果您需要在每次测试之前添加更多设置选项，您可以将它们添加到上面的 jest.setup 文件中。'

export const addTestScriptToPackageJsonTitle = '## 可选：将测试脚本添加到 package.json'
export const addTestScriptToPackageJsonContent1 = '最后，将 Jest 测试脚本添加到你的 package.json 文件：'
export const addTestScriptToPackageJsonCode1 = `~~~package.json~~~
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}`
export const addTestScriptToPackageJsonContent2 = 'jest --watch 将在文件更改时重新运行测试。有关更多 Jest CLI 选项，请参阅 Jest 文档。'

export const creatingYourFirstTestTitle = '## 创建您的第一个测试'
export const creatingYourFirstTestContent1 = '您的项目现在可以运行测试了。在项目的根目录中创建一个名为 __tests__(test前后带双下划线) 的文件夹。'
export const creatingYourFirstTestContent2 = '例如，我们可以添加一个测试来检查 <Page /> 组件是否成功呈现标题：'
export const creatingYourFirstTestCode1 = `~~~app/page.js~~~
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}`
export const creatingYourFirstTestCode2 = `~~~__tests__/page.test.jsx~~~
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})`
export const creatingYourFirstTestContent3 = '或者，添加快照测试来跟踪组件中的任何意外更改：'
export const creatingYourFirstTestCode3 = `~~~__tests__/snapshot.jsx~~~
import { render } from '@testing-library/react'
import Page from '../app/page'
 
it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})`

export const runningYourTestsTitle = '## 运行您的测试'
export const runningYourTestsCode = `~~~npm run test
# or
yarn test
# or
pnpm test`

export const additionalResourcesTitle = '## 其他资源'
export const additionalResourcesContent = '如需进一步阅读，您可能会发现以下资源很有帮助：'
export const additionalResourcesList = [
    '(Next.js with Jest example)[https://github.com/vercel/next.js/tree/canary/examples/with-jest]',
    '(Jest Docs)[https://jestjs.io/docs/getting-started]',
    '(React Testing Library Docs)[https://testing-library.com/docs/react-testing-library/intro/]',
    '(Testing Playground)[https://testing-playground.com/] - use good testing practices to match elements.'
];
