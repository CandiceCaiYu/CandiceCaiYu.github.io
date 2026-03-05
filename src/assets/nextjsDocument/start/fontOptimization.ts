export const title = '# 字体优化'
export const description1 = 'next/font 模块会自动优化您的字体，并移除外部网络请求，以提高隐私性和性能。'
export const description2 = '它内置了对任何字体文件的自托管功能。这意味着您可以以最佳方式加载网络字体，而不会出现布局偏移。'
export const description3 = '要开始使用 next/font，请从 next/font/local 或 next/font/google 导入它，然后使用适当的选项将其作为函数调用，并设置要应用该字体的元素的 className。例如：'
export const description3Code = `~~~app/layout.tsx~~~
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}`
export const description4 = '字体的作用域仅限于其所在的组件。要将字体应用于整个应用程序，请将其添加到根布局中。'

export const googleFontsTitle = '## Google fonts'
export const googleFontsContent1 = '您可以自动自行托管任何 Google 字体。字体以静态资源的形式存储，并从与您的部署相同的域名提供服务，这意味着当用户访问您的网站时，浏览器不会向 Google 发送任何请求。'
export const googleFontsContent2 = '要开始使用 Google 字体，请从 next/font/google 导入您选择的字体：'
export const googleFontsContent2Code = `~~~app/layout.tsx~~~
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}`
export const googleFontsContent3 = '我们建议使用可变字体以获得最佳性能和灵活性。但如果无法使用可变字体，则需要指定字重：'
export const googleFontsContent3Code = `~~~app/layout.tsx~~~
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}`


export const localFontsTitle = '## Local fonts'
export const localFontsContent1 = '要使用本地字体，请从 next/font/local 导入字体，并指定本地字体文件的 src 属性。字体可以存储在 public 文件夹中，也可以与app文件夹放在同一位置。例如：'
export const localFontsContent1Code = `~~~app/layout.tsx~~~
import localFont from 'next/font/local'
 
const myFont = localFont({
  src: './my-font.woff2',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}`
export const localFontsContent2 = '如果要为同一个字体系列使用多个文件，src 可以是一个数组：'
export const localFontsContent2Code = `~~~app/layout.tsx~~~
const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})`

