'use client'

import styles from './styles.module.scss'
import {CSSProperties} from "react";
import Link from "next/link";
import {HomeTwoTone} from "@ant-design/icons";

export default function HeaderBackToHome({style}: { style?: CSSProperties }) {
    return (
        <div className={styles.header} style={style}>
            <Link href={'/dashboard'}>
                <HomeTwoTone className={styles.homeIcon}/>
            </Link>
        </div>
    )
}
