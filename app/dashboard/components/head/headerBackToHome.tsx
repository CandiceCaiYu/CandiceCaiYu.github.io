'use client'

import Image from "next/image";
import styles from './styles.module.scss'
import avatar from '@/public/avatar.png'
import {CSSProperties} from "react";
import Link from "next/link";

export default function HeaderBackToHome({style}: { style?: CSSProperties }) {
    return (
        <div className={styles.header} style={style}>
            <Link href={'/dashboard'}>
                <Image src={avatar} width={60} height={72} className={styles.avatar} title={'contact me'}
                       alt={'contact me'}/>
            </Link>
        </div>
    )
}
