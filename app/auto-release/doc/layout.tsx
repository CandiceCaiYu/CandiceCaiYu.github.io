/** @format */

"use client";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { autoMenuItems } from "./menuItems";

import styles from "./styles.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e);
	};
	return (
		<div className={styles.auto_doc}>
			<Menu
				onClick={onClick}
				style={{ width: 256 }}
				defaultOpenKeys={["welcome"]}
				defaultSelectedKeys={["introduce"]}
				mode="inline"
				items={autoMenuItems}
			/>
			<div className={styles.auto_children}>{children}</div>
		</div>
	);
}
