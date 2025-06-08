/** @format */

import React from "react";

import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export const autoMenuItems: MenuItem[] = [
	{
		key: "welcome",
		label: "欢迎",
		icon: <MailOutlined />,
		children: [
			{ key: "introduce", label: "介绍" },
			{ key: "start", label: "入门" },
			{ key: "quikly_merge", label: "快速合并" },
		],
	},
	{
		key: "config",
		label: "配置",
		icon: <AppstoreOutlined />,
		children: [
			{ key: "config_base", label: ".autorc" },
			{ key: "config_plugin", label: "插件" },
			{ key: "config_non_npm", label: "非 npm 使用" },
			{ key: "config_troubleshooting", label: "故障排除" },
		],
	},
	{
		type: "divider",
	},
	{
		key: "tools",
		label: "工具 API",
		icon: <SettingOutlined />,
		children: [
			{
				key: "tools_setting",
				label: "设置",
				children: [
					{ key: "tools_setting_init", label: "auto init" },
					{ key: "tools_setting_create_labels", label: "auto create-labels" },
					{ key: "tools_setting_info", label: "auto info" },
				],
			},
			{
				key: "tools_publish",
				label: "发布",
				children: [
					{ key: "tools_publish_version", label: "auto version" },
					{ key: "tools_publish_changelog", label: "auto changelog" },
					{ key: "tools_publish_release", label: "auto release" },
					{ key: "tools_publish_shipit", label: "auto shipit" },
					{ key: "tools_publish_latest", label: "auto latest" },
					{ key: "tools_publish_next", label: "auto next" },
					{ key: "tools_publish_canary", label: "auto canary" },
				],
			},
			{
				key: "tools_pr",
				label: "PR互动",
				children: [
					{ key: "tools_pr_label", label: "auto label" },
					{ key: "tools_pr_status", label: "auto pr-status" },
					{ key: "tools_pr_check", label: "auto pr-check" },
					{ key: "tools_pr_body", label: "auto pr-body" },
					{ key: "tools_pr_comment", label: "auto comment" },
				],
			},
		],
	},
	{
		key: "package_manager",
		label: "包管理器插件",
		children: [
			{ key: "package_manager_homebrew", label: "Homebrew" },
			{ key: "package_manager_chrome_web_store", label: "Chrome Web Store" },
			{ key: "package_manager_cocoapod", label: "Cocoapod" },
			{ key: "package_manager_crates", label: "Crates" },
			{ key: "package_manager_docker", label: "Docker" },
			{ key: "package_manager_gem", label: "Gem" },
			{ key: "package_manager_git_tag", label: "Git Tag" },
			{ key: "package_manager_gradle", label: "Gradle" },
			{ key: "package_manager_maven", label: "Maven" },
			{ key: "package_manager_npm", label: "NPM" },
			{ key: "package_manager_sbt", label: "sbt" },
			{ key: "package_manager_vscode", label: "VSCode" },
		],
	},
	{
		key: "functionality_plugins",
		label: "功能插件",
		children: [
			{
				key: "functionality_plugins_all_contributors",
				label: "All Contributors",
			},
			{ key: "functionality_plugins_amazon_s3", label: "Amazon S3" },
			{
				key: "functionality_plugins_conventional_commits",
				label: "Conventional Commits",
			},
			{ key: "functionality_plugins_exec", label: "Exec" },
			{
				key: "functionality_plugins_first_time_contributor",
				label: "First Time Contributor",
			},
			{ key: "functionality_plugins_github_pages", label: "GitHub Pages" },
			{ key: "functionality_plugins_jira", label: "Jira" },
			{ key: "functionality_plugins_magic_zero", label: "Magic Zero" },
			{
				key: "functionality_plugins_microsoft_teams",
				label: "Microsoft Teams",
			},
			{ key: "functionality_plugins_omit_commits", label: "Omit Commits" },
			{
				key: "functionality_plugins_omit_release_notes",
				label: "Omit Release Notes",
			},
			{ key: "functionality_plugins_pr_body_labels", label: "PR Body Labels" },
			{ key: "functionality_plugins_released", label: "Released" },
			{ key: "functionality_plugins_slack", label: "Slack" },
			{ key: "functionality_plugins_twitter", label: "Twitter" },
			{ key: "functionality_plugins_upload_assets", label: "Upload Assets" },
		],
	},
	{
		key: "plugin_creation",
		label: "插件创作",
		children: [
			{ key: "plugin_creation_create", label: "编写插件" },
			{ key: "plugin_creation_publish", label: "创建发布插件" },
			{
				key: "plugin_creation_hook_apis",
				label: "Hook APIs",
				children: [
					{ key: "plugin_creation_hook_config", label: "配置hooks" },
					{ key: "plugin_creation_hook_init", label: "初始化hooks" },
					{ key: "plugin_creation_hook_log_parser", label: "日志解析器hooks" },
					{ key: "plugin_creation_hook_changelog", label: "变更日志hooks" },
					{ key: "plugin_creation_hook_lifecycle", label: "发布生命周期hooks" },
				],
			},
		],
	},
	{
		key: "grp",
		label: "CI",
		children: [
			{ key: "CI_circleci", label: "CircleCI" },
			{ key: "CI_travis", label: "Travis CI" },
			{ key: "CI_github_actions", label: "GitHub Actions" },
			{ key: "CI_jenkins2", label: "Jenkins 2" },
		],
	},
];
