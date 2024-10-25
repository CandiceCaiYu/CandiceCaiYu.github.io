import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './css/globals.scss'
import React from "react";
import {RootStyleRegistry} from "@/src/components/root-style-registry";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Candice Yu blog',
    description: 'technical and life',
};

export default function RootLayout(props: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <RootStyleRegistry>
            {props.children}
        </RootStyleRegistry>
        </body>
        </html>
    )
}
