import {Calendar, Card} from 'antd'
import styles from './styles.module.scss'
import {SIDEBAR_CATEGORY} from "@/src/assets/constants";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Card title="Notice" className={styles.notice}>
                <p>Freshman~</p>
            </Card>
            <div className={styles.wrapperStyle}>
                <Calendar fullscreen={false}/>
            </div>
            <div>
                <h2 className={styles.category_title}>Category</h2>
                <ul>
                    {SIDEBAR_CATEGORY.map(item => (
                        <li key={item.name} className={styles.category_item}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
