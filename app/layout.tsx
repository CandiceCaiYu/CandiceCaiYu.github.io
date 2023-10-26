import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Candice Yu blog',
  description: 'technical and life',
}

export default function RootLayout(props: {
  children: React.ReactNode,
  books:React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {props.children}
      {props.books}
      </body>
    </html>
  )
}
