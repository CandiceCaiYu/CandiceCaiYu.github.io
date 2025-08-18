export const title = '# 如何使用 Next.js 设置 Cypress';
export const introduction = 'Cypress 是一款用于端到端 (E2E) 和组件测试的测试运行器。本页面将向您展示如何使用 Next.js 设置 Cypress 并编写您的首个测试。'
export const introductionWarning = 'Cypress 13.6.3 以下版本不支持带有 moduleResolution:"bundler" 的 TypeScript 5 版本。不过，此问题已在 Cypress 13.6.3 及更高版本中得到解决。'

export const quickStartTitle = '## 快速入门';
export const quickStartContent = '您可以将 create-next-app 与 with-cypress 示例结合使用以快速开始。'
export const quickStartCode = `~~~npx create-next-app@latest --example with-cypress with-cypress-app`

export const manualSetupTitle = '## 手动设置';
export const manualSetupContent1 = '要手动设置 Cypress，请将 cypress 安装为开发依赖项：'
export const manualSetupCode1 = `~~~npm install -D cypress
# or
yarn add -D cypress
# or
pnpm install -D cypress`
export const manualSetupContent2 = '将 Cypress open 命令添加到 package.json script里：'
export const manualSetupCode2 = `~~~package.json~~~
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "cypress:open": "cypress open"
  }
}`
export const manualSetupContent3 = '首次运行 Cypress 即可打开 Cypress 测试套件：'
export const manualSetupCode3 = `~~~npm run cypress:open`
export const manualSetupContent4 = '您可以选择配置 E2E Testing和/Component Testing。选择任何选项都会自动在您的项目中创建一个 cypress.config.js 文件和一个 cypress 文件夹。'

export const creatingYourFirstCypressE2ETestTitle = '## 创建您的第一个 Cypress E2E 测试';
export const creatingYourFirstCypressE2ETestContent1 = '确保您的 cypress.config 文件具有以下配置：'
export const creatingYourFirstCypressE2ETestCode1 = `~~~cypress.config.js~~~
import { defineConfig } from 'cypress'
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
})`
export const creatingYourFirstCypressE2ETestContent2 = '然后，创建两个新的 Next.js 文件：'
export const creatingYourFirstCypressE2ETestCode2 = `~~~app/page.js~~~
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}`
export const creatingYourFirstCypressE2ETestCode3 = `~~~app/about/page.js~~~
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}`
export const creatingYourFirstCypressE2ETestContent3 = '添加测试来检查导航是否正常工作：'
export const creatingYourFirstCypressE2ETestCode4 = `~~~cypress/e2e/app.cy.js~~~
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/about')
 
    // The new page should contain an h1 with "About"
    cy.get('h1').contains('About')
  })
})`

export const runningE2ETestsTitle = '## 运行 E2E 测试';
export const runningE2ETestsContent1 = 'Cypress 将模拟用户浏览您的应用程序，这需要您的 Next.js 服务器处于运行状态。我们建议您针对生产代码运行测试，以更真实地模拟应用程序的行为。';
export const runningE2ETestsContent2 = '运行 npm run build && npm run start 来构建您的 Next.js 应用程序，然后在另一个终端窗口中运行 npm run cypress:open 来启动 Cypress 并运行您的 E2E 测试套件。';
export const runningE2ETestsContent2GoodToKnow = [
    '您可以通过将 baseUrl: \'http://localhost:3000\' 添加到 cypress.config.js 配置文件来使用 cy.visit("/") 而不是 cy.visit("http://localhost:3000/")。',
    '或者，您可以安装 start-server-and-test 软件包，以便与 Cypress 一起运行 Next.js 生产服务器。安装后，在 package.json 的 scripts 字段中添加 "test": "start-server-and-test start http://localhost:3000 cypress" 。请记住，在进行任何更改后重建应用程序。'
]

export const creatingYourFirstCypressComponentTestTitle = '## 创建您的第一个 Cypress 组件测试';
export const creatingYourFirstCypressComponentTestContent1 = '组件测试构建并安装特定组件，而无需捆绑整个应用程序或启动服务器。';
export const creatingYourFirstCypressComponentTestContent2 = '在 Cypress 应用中选择“Component Testing”，然后选择 Next.js 作为前端框架。项目中将创建一个 cypress/component 文件夹，并更新 cypress.config.js 文件以启用Component Testing。';
export const creatingYourFirstCypressComponentTestContent3 = '确保您的 cypress.config 文件具有以下配置：';
export const creatingYourFirstCypressComponentTestCode3 = `~~~cypress.config.js~~~
import { defineConfig } from 'cypress'
 
export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})`

export const creatingYourFirstCypressComponentTestContent4 = '假设与上一节中的组件相同，添加测试以验证组件是否呈现预期的输出：';
export const creatingYourFirstCypressComponentTestCode4 = `~~~cypress/component/home.cy.js~~~
import Page from '../../app/page'
 
describe('<Page />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the Home page
    cy.mount(<Page />)
 
    // The new page should contain an h1 with "Home"
    cy.get('h1').contains('Home')
 
    // Validate that a link with the expected URL is present
    // Following the link is better suited to an E2E test
    cy.get('a[href="/about"]').should('be.visible')
  })
})`;
export const creatingYourFirstCypressComponentTestGoodToKnow4 = [
    'Cypress 目前不支持异步服务器组件的组件测试。我们建议使用端到端测试。',
    '由于组件测试不需要 Next.js 服务器，因此像 <Image /> 这样依赖于服务器可用的功能可能无法开箱即用。'
];

export const runningComponentTestsTitle = '## 运行组件测试';
export const runningComponentTestsContent1 = '在终端中运行 npm run cypress:open 以启动 Cypress 并运行组件测试套件。'

export const continuousIntegrationTitle = '## 持续集成 (CI)';
export const continuousIntegrationContent1 = '除了交互式测试之外，您还可以使用 cypress run 命令无头运行 Cypress，这更适合 CI 环境：'
export const continuousIntegrationCode1 = `~~~package.json~~~
{
  "scripts": {
    //...
    "e2e": "start-server-and-test dev http://localhost:3000 \\"cypress open --e2e\\"",
    "e2e:headless": "start-server-and-test dev http://localhost:3000 \\"cypress run --e2e\\"",
    "component": "cypress open --component",
    "component:headless": "cypress run --component"
  }
}`
export const continuousIntegrationContent2 = '您可以从以下资源中了解有关 Cypress 和持续集成的更多信息：'
export const continuousIntegrationList2 = [
    '[Next.js with Cypress example](https://github.com/vercel/next.js/tree/canary/examples/with-cypress)',
    '[Cypress Continuous Integration Docs](https://docs.cypress.io/guides/continuous-integration/introduction)',
    '[Cypress GitHub Actions Guide](https://on.cypress.io/github-actions)',
    '[Official Cypress GitHub Action](https://github.com/cypress-io/github-action)',
    '[Cypress Discord](https://discord.com/invite/cypress)',
]

