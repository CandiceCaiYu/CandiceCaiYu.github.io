import React from "react";
import Header from "@/app/dashboard/components/head/header";
import style from './styles.module.scss'
import BlogList from "@/app/dashboard/components/blogList/page";
import Sidebar from "@/app/dashboard/components/sidebar/page";
import Footer from "@/app/dashboard/components/footer/page";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={style.dashboard}>
            <div className={style.header}><Header/></div>
            <div className={style.content}>
                <BlogList/>
                <Sidebar/>
            </div>
            <Footer/>
        </div>
    )
}
