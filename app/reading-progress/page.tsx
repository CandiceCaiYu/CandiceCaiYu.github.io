import JavaThinking from "@/app/reading-progress/components/java-thinking";
import styles from './styles.module.scss'
export default function Page() {
    return (
        <div className={styles.readingProcess}>
            <h1>阅读进度图</h1>
            <JavaThinking />
        </div>
    )
}