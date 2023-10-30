'use client'

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import style from './styles.module.scss'
export default function Page() {
    const router = useRouter()

    return (
        <div className={style.dashboard}>
           <div className={style.header}>header</div>
            <div className={style.content}>content</div>
            <div className={style.footer}>footer</div>
        </div>
    )
}
