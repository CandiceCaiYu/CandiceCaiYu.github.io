import React from "react";


export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <h1>header</h1>
                <section>{children}</section>
            <footer>footer</footer>
        </div>
    )
}