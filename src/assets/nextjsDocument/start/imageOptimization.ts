export const title = '# 图像优化'
export const description1 = 'Next.js 的 <Image> 组件扩展了 HTML 的 <img> 元素，提供了以下功能：'
export const description1List = [
    '尺寸优化：使用 WebP 等现代图像格式，自动为每种设备提供尺寸合适的图像。',
    '视觉稳定性：防止图像加载时布局发生偏移。',
    '更快的页面加载速度：仅在图像进入视口时才加载，采用浏览器原生懒加载机制，并可选择添加模糊效果占位符。',
    '资源灵活性：按需调整图像大小，即使是存储在远程服务器上的图像也可以。'
]
export const description2 = '要开始使用 <Image>，请从 next/image 导入它，并在您的组件中渲染它。'
export const description2Code = `~~~app/page.tsx~~~
import Image from 'next/image'
 
export default function Page() {
  return <Image src="" alt="" />
}`
export const description3 = 'src 属性可以是本地图像或远程图像。'
export const description3GTKTitle = 'Watch'
export const description3GTKText = '了解更多关于如何使用 next/image → YouTube（9 分钟）。'

export const localImagesTitle = '## 本地图像'
export const localImagesContent1 = '您可以将静态文件（例如图像和字体）存储在根目录下的名为 public 的文件夹中。然后，您的代码可以从基本 URL (/) 开始引用 public 文件夹中的文件。'
export const localImagesContent1Img = '![public-folder](/nextjsDoc/imageOptimization/public-folder.avif)'
export const localImagesContent1Code = `~~~app/page.tsx~~~
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}`
export const localImagesContent2 = '如果图片是静态导入的，Next.js 会自动确定图片的固有宽度和高度。这些值用于确定图片的宽高比，并防止图片加载时出现累积布局偏移 (CLS)。'
export const localImagesContent2Code = `~~~app/page.tsx~~~
import Image from 'next/image'
import ProfileImage from './profile.png'
 
export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}`

export const remoteImagesTitle = '## 远程图像'
export const remoteImagesContent1 = '要使用远程图像，您可以为 src 属性提供 URL 字符串。'
export const remoteImagesContent1Code = `~~~app/page.tsx~~~
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}`
export const remoteImagesContent2 = '由于 Next.js 在构建过程中无法访问远程文件，因此您需要手动提供 width、height 和可选的 blurDataURL 属性。width 和 height 用于推断图像的正确宽高比，避免图像加载时导致布局偏移。或者，您可以使用 fill 属性使图像填充父元素的大小。'
export const remoteImagesContent3 = '为了安全地允许来自远程服务器的图片，您需要在 next.config.js 中定义一个受支持的 URL 模式列表。请尽可能具体地定义，以防止恶意使用。例如，以下配置将仅允许来自特定 AWS S3 存储桶的图片：'
export const remoteImagesContent3Code = `~~~next.config.js~~~
import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
}
 
export default config`
