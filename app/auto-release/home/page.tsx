'use client';

import styles from './styles.module.scss'
export default function Page() {
    return (
        <div className={styles.auto_home}>
            <div className={styles.page_header}>
                <h1>Auto</h1>
                <p>简化您的发布工作流程并不断发布！</p>
            </div>
            <div className={styles.page_section}>
                <h4>添加自动发布应该不难，也不需要改变你的工作流程。</h4>
                <p>auto 让你的项目自动发布变得非常简单，只需在拉取请求中添加一个标签即可。如果你一直在发布，就能对发布更有信心。你的用户也可能会感谢你 😉</p>
            </div>

            <div className={styles.page_section}>
            <p><i>保持工作流程</i>: 
其他工具会要求您更改任何贡献者对项目的提交方式。有了自动功能，您就无需再为此操心了！</p>
            <p><i>精美的变更日志</i>: 
链接到 PR 和 Jira 故事，包含作者、Monorepo 感知、可自定义的标签部分、额外的发行说明等等！</p>
            <p><i>原子函数</i>:
每个命令只执行一项操作，并且效果出色。轻松使用它们来适应任何构建流程。</p>
            <p><i>极速发布</i>:
只需关注标签，即可快速投入工作！这种快速提交速度也有助于新贡献者。</p>
</div>
<div className={styles.page_section}>
            <p>适用于任何情况的release！
Auto 可以创建多种类型的release。每种release类型都能保证，无论在何种情况下，您都能发布并使用包含您更改的release。</p>
            <p><i>Canary</i>: 
PR 构建预览, 使项目的使用者能够轻松测试更改。</p>
            <p><i>Next</i>: 
在开发大型变更时，轻松创建和管理项目的预发布版本。</p>
            <p><i>Latest</i>:
发布项目的完整版本。创建变更日志、GitHub 版本等等！</p>
</div>
<div className={styles.page_section}>
            <h4>常见问题</h4>
            <h5>您真的发布了每个拉取请求吗？</h5>
            <p>是的！但如果你不想这么做，那就由你决定。自动发布的工具可以适应任何工作流程！你也可以使用 skip-release 标签，或者将自动发布配置为仅发布带有 release 标签的版本。</p>
            <h5>有没有办法连接到 Auto 并自定义我的发布流程？
</h5>
            <p>Auto 的许多功能都内置在插件中。您还可以使用这个插件系统在发布过程中执行几乎所有操作！</p>
            <h5>Auto 是否支持其他类型的发布？</h5>
            <p>想要测试版本？试试 Canary 版本吧！</p>

<p>想要预发布版本？试试创建一个预发布分支并使用 Next 版本吧！</p>

<p>需要修补旧的主要版本？Auto 可以自动为旧的主要版本创建分支！</p>

<p>或者，如果您不想费心思考需要什么命令，只需使用 Shipit 即可！此命令会根据其运行的上下文确定要发布的版本类型。</p>
</div>
<div className={styles.end}>
            <div className={styles.end_text}>不要再担心您的发布并点击合并按钮！</div>
            <button onClick={() => window.open('/auto-release/start')}>开始</button>
            </div>
        </div>
    )
}