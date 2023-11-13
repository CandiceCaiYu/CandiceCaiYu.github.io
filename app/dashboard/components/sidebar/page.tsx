import { Card } from 'antd'
import styles from './styles.module.scss'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Card title="Notice" className={styles.notice}>
                <p>Freshman~</p>
            </Card>
        </div>
    )
}
