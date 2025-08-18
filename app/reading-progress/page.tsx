import JavaThinking from "@/app/reading-progress/components/java-thinking";
import styles from './styles.module.scss'
import SelectedWorksOfMaoZedong1 from "@/app/reading-progress/components/SelectedWorksOfMaoZedong1";
import {Flex} from "antd";

export default function Page() {
    return (
        <div className={styles.readingProcess}>
            <h1>阅读进度图</h1>
            <Flex>
                <JavaThinking/>
                <SelectedWorksOfMaoZedong1/>
            </Flex>
        </div>
    )
}
