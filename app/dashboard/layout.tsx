import React from "react";
import Head from "next/head";
import Header from "@/app/dashboard/components/head/header";
import style from './styles.module.scss'

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
    <div className={style.dashboard}>
        <div className={style.header}><Header/></div>
        <div className={style.content}>
            <section>{children}</section>
        </div>
        <div className={style.footer}>footer</div>
    </div>
    )
}
