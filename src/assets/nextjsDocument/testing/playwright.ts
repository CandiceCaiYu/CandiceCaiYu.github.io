export const title = '# 如何使用 Next.js 设置 Playwright'
export const introduction = 'Playwright 是一个测试框架，它允许您使用单个 API 自动化 Chromium、Firefox 和 WebKit。您可以使用它来编写端到端 (E2E) 测试。本指南将向您展示如何使用 Next.js 设置 Playwright 并编写您的第一个测试。'

export const quickStartTitle = '## 快速入门'
export const quickStartContent = '最快的入门方法是使用 create-next-app 和 with-playwright 示例。这将创建一个已配置 Playwright 的完整 Next.js 项目。'
export const quickStartCode = `~~~npx create-next-app@latest --example with-playwright with-playwright-app`

export const manualSetupTitle = '## 手动设置'
export const manualSetupContent1 = '要安装 Playwright，请运行以下命令：'
export const manualSetupCode1 = `~~~
npm init playwright
# or
yarn create playwright
# or
pnpm create playwright`

export const manualSetupContent2 = '这将引导您完成一系列提示，为您的项目设置和配置 Playwright，包括添加 playwright.config.ts 文件。请参阅 (Playwright 安装指南)[https://playwright.dev/docs/intro#installation]，获取分步指南。'

export const creatingYourFirstTestTitle = '## 创建您的第一个 Playwright E2E 测试'
export const creatingYourFirstTestContent1 = '创建两个新的 Next.js 页面：'
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
export const creatingYourFirstTestCode2 = `~~~app/about/page.tsx~~~
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  )
}`

export const creatingYourFirstTestContent2 = '然后，添加测试来验证导航是否正常工作：'
export const creatingYourFirstTestCode3 = `~~~tests/navigation.test.ts~~~
    import { test, expect } from '@playwright/test'
 
test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=About')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/about')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h1')).toContainText('About')
})`
export const creatingYourFirstTestingGoodToKnow = '如果您将“baseURL”：“http://localhost:3000”添加到playwright.config.ts配置文件，则可以使用page.goto（“/”）而不是page.goto（“http://localhost:3000/”）。'

export const runningYourTestsTitle = '## 运行您的Playwright测试'
export const runningYourTestsContent1 = 'Playwright 将模拟用户使用三种浏览器（Chromium、Firefox 和 Webkit）浏览您的应用程序，这需要您的 Next.js 服务器处于运行状态。我们建议您针对生产代码运行测试，以便更真实地模拟应用程序的实际行为。'
export const runningYourTestsContent2 = '运行 npm run build 和 npm run start，然后在另一个终端窗口中运行 npx playwright test 来运行 Playwright 测试。'
export const runningYourTestsContent3 = '或者，您可以使用 webServer 功能让 Playwright 启动开发服务器并等待它完全可用。'

export const continuousIntegrationTitle = '## 持续集成'
export const continuousIntegrationContent1 = 'Playwright 默认会以无头模式运行你的测试。要安装所有 Playwright 依赖项，请运行 npx playwright install-deps。'
export const continuousIntegrationContent2 = 'You can learn more about Playwright and Continuous Integration from these resources:'
export const continuousIntegrationResourcesList = [
    '[Next.js with Playwright example](https://github.com/vercel/next.js/tree/canary/examples/with-playwright)',
    '[Playwright on your CI provider](https://playwright.dev/docs/ci)',
    '[Playwright Discord](https://discord.com/invite/playwright-807756831384403968)'
]
