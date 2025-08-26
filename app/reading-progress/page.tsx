'use client';

import JavaThinking from "@/app/reading-progress/components/java-thinking";
import styles from './styles.module.scss'
import SelectedWorksOfMaoZedong1 from "@/app/reading-progress/components/SelectedWorksOfMaoZedong1";
import {Flex} from "antd";
import SomeoneToTalkTo from "@/app/reading-progress/components/SomeoneToTalkTo";

export default function Page() {
    return (
        <div className={styles.readingProcess}>
            <h1>阅读进度图</h1>
            <Flex align={"center"} className={styles.legend}>图例：
                <div className={styles.inProgress}/> 阅读中
                <div className={styles.done}/> 已读完
            </Flex>
            <Flex>
                <JavaThinking/>
                <SelectedWorksOfMaoZedong1/>
                <SomeoneToTalkTo/>
            </Flex>
        </div>
    )
}
