import React from "react";
import HeaderBackToHome from "@/app/dashboard/components/head/headerBackToHome";
import style from './styles.module.scss'
import BlogList from "@/app/dashboard/components/blogList/page";
import Sidebar from "@/app/dashboard/components/sidebar/page";
import Footer from "@/app/dashboard/components/footer/page";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={style.dashboard}>
            <div className={style.header}><h1>Cai Yu&#39;s Blog</h1><HeaderBackToHome/></div>
            <div className={style.content}>
                <BlogList/>
                <Sidebar/>
            </div>
            <Footer/>
        </div>
    )
}
