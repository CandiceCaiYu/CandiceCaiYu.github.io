'use client';

import {Menu} from "antd";
import {nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function NextJSLayout(prop: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    for (let i = 0; i < nextjsMenu.length; i++) {
        const item = nextjsMenu[i];
        if (!item?.label) return;
        console.log('pathname...', item.label.props?.href);
        if (pathname === item.label.props?.href) {
            setSelectedKeys([item.key]);
            return;
        }
        if (item.children && item.children?.length > 0) {
            for (let j = 0; j < item.children.length; j++) {
                const subItem = item.children[j];
                console.log('pathname...2', subItem.label.props?.href);
                if (pathname === subItem.label.props?.href) {
                    setSelectedKeys([subItem.key]);
                    return;
                }
            }
        }
    }
    console.log('selectedKeys...', selectedKeys);
    return (
        <section className={styles.layout}>
            <div>
                <Menu mode="inline"
                      items={nextjsMenu}
                    // defaultSelectedKeys={["212"]}
                    //   defaultSelectedKeys={selectedKeys}
                      selectedKeys={selectedKeys}
                    // defaultOpenKeys={["2", "21",]}
                      style={{height: '100%'}}
                />

            </div>
            <div className={styles.center}>{prop.children}</div>
            <div className={styles.right}></div>
        </section>
    )
}
