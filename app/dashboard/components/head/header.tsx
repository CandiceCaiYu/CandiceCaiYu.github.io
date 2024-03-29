'use client'

import Image from "next/image";
import styles from './styles.module.scss'
import avatar from '@/public/avatar.png'
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter()

    function handleChange() {
        router.push('/profile')
    }

    return (
        <div className={styles.header}>
            <h1>Cai Yu&#39;s Blog</h1>
            <Image src={avatar} width={60} height={72} className={styles.avatar} title={'contact me'} alt={'contact me'}
                   onClick={handleChange}/>
        </div>
    )
}
