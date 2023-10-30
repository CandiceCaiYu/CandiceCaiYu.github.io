'use client'

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import style from './styles.module.scss'
import Header from "@/app/dashboard/components/head/header";
export default function Page() {
    const router = useRouter()

    return (
        <div className={style.dashboard}>
           <div className={style.header}><Header/></div>
            <div className={style.content}>content</div>
            <div className={style.footer}>footer</div>
        </div>
    )
}
