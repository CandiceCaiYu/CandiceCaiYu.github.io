import React from "react";
import Head from "next/head";


export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <section>{children}</section>
        </div>
    )
}
