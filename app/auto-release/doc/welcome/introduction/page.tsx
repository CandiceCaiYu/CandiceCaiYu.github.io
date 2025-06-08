/** @format */

"use client";
/** @format */

import { Button } from "antd";
import styles from "../../styles.module.scss";

export default function Page() {
	return (
		<div className={styles.introduction}>
			<h1 className={styles.mb24}>欢迎使用 Auto</h1>
			<h4 className={styles.mb12}>由拉取请求标签支持的自动发布</h4>
			<div className={styles.mb12}>
				<p>简化您的发布工作流程并不断发布！</p>
				<p>auto 主要在持续集成 (CI) 环境中运行，但所有命令也可以在本地运行。</p>
			</div>
			<div className={styles.mb12}>
				Auto
				试图解决的两个主要问题是：发布自动化和拉取请求交互。借助我们提供的工具集，您可以自动化贡献的每个环节！
			</div>
			<div>
				<h4>发布特点：</h4>
				<ul>
					<li>根据 PR 计算版本变化</li>
					<li>直接从 PR 或本地发布canaries（测试版本）</li>
					<li>生成带有精美标题、作者和详细发行说明的变更日志</li>
					<li>发布 GitHub 版本</li>
				</ul>
			</div>
			<div>
				<h4>PR交互功能：</h4>
				<ul>
					<li>获取 PR 的标签</li>
					<li>设置 PR 的状态</li>
					<li>使用 markdown 对 PR 进行评论</li>
					<li>使用上下文构建元数据更新 PR 主体</li>
				</ul>
			</div>
			<div>
				<h2>工作流程</h2>
				<p className={styles.mb12}>
					auto 的主要用途是自动化项目的发布流程。这可以分解为三个核心步骤:
				</p>
				<ul className={styles.mb12}>
					<p>pre:（可选）检查是否有新版本</p>
					<li>生成 CHANGELOG.md</li>
					<li>发布代码</li>
					<li>生成 GitHub 发行说明</li>
				</ul>
			</div>
			<p className={styles.mb24}>
				auto
				不会对您的发布流程做出任何假设。每个工具都是一个可以独立运行的函数，并且只专注于一项功能。例如，您可以只使用
				auto changelog 来生成变更日志，而不执行其他任何操作，或者使用 auto
				version 来计算 semver 的提升。
			</p>
			<Button
				size="large"
				color="pink"
				type="primary"
				className={styles.start_button}
				onClick={() =>
					(window.location.href = "/auto-release/doc/welcome/start")
				}>
				开始
			</Button>
		</div>
	);
}
