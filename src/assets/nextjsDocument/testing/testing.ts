export const title = '# 测试';
export const introduction = '在 React 和 Next.js 中，您可以编写几种不同类型的测试，每种测试都有各自的目的和用例。本页面概述了可用于测试应用程序的类型和常用工具。';
export const typesOfTestsTitle = '## 测试类型';
export const typesOfTestsContentList1 = [
    '单元测试: 涉及单独测试各个单元（或代码块）。在 React 中，单元可以是单个函数、hook或组件。',
    [
        '组件测试: 单元测试的更专注版本，其测试的主要对象是 React 组件。这可能涉及测试组件的渲染方式、它们与 props 的交互以及它们对用户事件的响应行为。',
        '集成测试: 测试多个单元如何协同工作。这可以是组件、钩子和函数的组合。'
    ],
    '端到端 (E2E) 测试: 模拟真实用户场景（例如浏览器）的环境中测试用户流程。这意味着在类似生产的环境中测试特定任务（例如注册流程）。',
    '快照测试: 捕获组件的渲染输出并将其保存到快照文件中。测试运行时，会将组件的当前渲染输出与已保存的快照进行比较。快照中的更改用于指示行为的意外变化。'
]
export const asyncServerComponentsTitle = '## 异步服务器组件';
export const asyncServerComponentsContent1 = '由于异步服务器组件是 React 生态系统中的新成员，一些工具尚未完全支持它们。同时，我们建议对异步组件使用端到端测试，而不是单元测试。'
