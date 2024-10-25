import {Menu} from "antd";
import {nextjsMenu} from "@/src/assets/nextjsDocument/menu";
import styles from './styles.module.scss'

export default function NextJSLayout(prop: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.layout}>
            <div>
                <Menu mode="inline"
                      items={nextjsMenu}
                    // defaultSelectedKeys={['11']}
                      defaultOpenKeys={['1', '2']}
                      style={{height: '100%'}}
                />
            </div>
            {prop.children}
            <div className={styles.right}>right</div>
        </section>
    )
}
