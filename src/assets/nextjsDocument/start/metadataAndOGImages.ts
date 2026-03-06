export const title = '# 元数据(metadata)和 OG 图像'
export const description1 = '元数据 API 可用于定义应用程序元数据，以提高 SEO 和网络共享性，其中包括：'
export const description1List = [
    '静态元数据对象',
    'generateMetadata元数据函数',
    '可用于添加静态或动态生成的网站图标和 OG 图像的特殊文件约定。'
]
export const description2 = '使用以上所有选项，Next.js 将自动为您的页面生成相关的 <head> 标签，您可以在浏览器的开发者工具中检查这些标签。'
export const description3 = 'metadata对象和 generateMetadata 函数导出仅在服务器组件中受支持。'

export const defaultFieldsTitle = '## 默认字段'
export const defaultFieldsContent1 = '即使路由未定义元数据，也始终会添加两个默认的 meta 标签：'
export const defaultFieldsContent1List = ['meta charset 标签用于设置网站的字符编码。',
    'meta viewport 标签用于设置网站的视口宽度和缩放比例，以便适应不同的设']
export const defaultFieldsContent1Code = `<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />`
export const defaultFieldsContent2 = '其他元数据字段可以使用 Metadata 对象（用于静态元数据）或 generateMetadata 函数（用于生成的元数据）进行定义。'

export const staticMetadataTitle = '## 静态元数据'
export const staticMetadataContent1 = '要定义静态元数据，请从静态 layout.js 或 page.js 文件导出 Metadata 对象。例如，要为博客路由添加标题和描述：'
export const staticMetadataContent1Code = `~~~app/blog/layout.js~~~
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Blog',
  description: '...',
}
 
export default function Layout() {}`
export const staticMetadataContent2 = '您可以在 generateMetadata 文档中查看所有可用选项的完整列表。'

export const generatedMetadataTitle = '## 生成的元数据'
export const generatedMetadataContent1 = '您可以使用 generateMetadata 函数来获取依赖于数据的元数据。例如，要获取特定博客文章的标题和描述：'
export const generatedMetadataContent1Code = `~~~app/blog/[slug]/page.js~~~
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  // fetch post information
  const post = await fetch(\`https://api.vercel.app/blog/\${slug}\`).then((res) =>
    res.json()
  )
 
  return {
    title: post.title,
    description: post.description,
  }
}
 
export default function Page({ params, searchParams }: Props) {}`

export const streamingMetadataTitle = '### 流式元数据'
export const streamingMetadataContent1 = '对于动态渲染的页面，Next.js 会单独传输元数据，并在 generateMetadata 解析后将其注入到 HTML 中，而不会阻塞 UI 渲染。'
export const streamingMetadataContent2 = '流媒体元数据通过允许视觉内容优先加载，提升了感知性能'
export const streamingMetadataContent3 = '对于那些期望元数据位于 <head> 标签中的机器人和爬虫（例如 Twitterbot、Slackbot、Bingbot），流式元数据功能已被禁用。这些机器人和爬虫是通过检测传入请求中的 User Agent 标头来识别的。'
export const streamingMetadataContent4 = '您可以使用 Next.js 配置文件中的 htmlLimitedBots 选项完全自定义或禁用流式元数据。'
export const streamingMetadataContent5 = '静态渲染页面不使用流式传输，因为元数据是在build时解析的。'
export const streamingMetadataContent6 = '了解更多关于流媒体元数据的信息。'

export const memoizingDataRequestsTitle = '### 记忆化数据请求'
export const memoizingDataRequestsContent1 = '有时您可能需要获取相同的元数据和页面数据。为了避免重复请求，您可以使用 React 的缓存功能来缓存返回值，从而只获取一次数据。例如，要获取博客文章的元数据和页面信息：'
export const memoizingDataRequestsContent1Code = `~~~app/lib/data.ts~~~
import { cache } from 'react'
import { db } from '@/app/lib/db'
 
// getPost will be used twice, but execute only once
export const getPost = cache(async (slug: string) => {
  const res = await db.query.posts.findFirst({ where: eq(posts.slug, slug) })
  return res
})`
export const memoizingDataRequestsContent2Code = `~~~app/blog/[slug]/page.js~~~
import { getPost } from '@/app/lib/data'
 
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.description,
  }
}
 
export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return <div>{post.title}</div>
}`

export const fileBasedMetadataTitle = '## 基于文件的元数据'
export const fileBasedMetadataContent1 = '以下特殊文件可用于存储元数据：'
export const fileBasedMetadataContent1List = [
    'favicon.ico, apple-icon.jpg, and icon.jpg',
    'opengraph-image.jpg and twitter-image.jpg',
    'robots.txt',
    'sitemap.xml'
]
export const fileBasedMetadataContent2 = '你可以将这些文件用于静态元数据，也可以通过代码以编程方式生成这些文件。'

export const faviconsTitle = '## 网站图标(Favicons)'
export const faviconsContent1 = '网站图标（Favicon）是代表您网站的小图标，用于在书签和搜索结果中显示。要为您的应用程序添加网站图标，请创建一个名为 favicon.ico 的文件，并将其添加到app文件夹的根目录。'
export const faviconsContent1Img = '![favicon-ico](/nextjsDoc/metadataAndOGImages/favicon-ico.avif)'
export const faviconsContent2 = '您还可以使用代码以编程方式生成网站图标。有关更多信息，请参阅网站图标文档。'

export const staticOpenGraphImagesTitle = '## 静态 Open Graph 图像'
export const staticOpenGraphImagesContent1 = 'Open Graph (OG) 图片是用于在社交媒体上展示您网站的图片。要向您的应用添加静态 OG 图片，请在app根目录下创建一个名为 opengraph-image.jpg 的文件。'
export const staticOpenGraphImagesContent1Img = '![opengraph-image](/nextjsDoc/metadataAndOGImages/opengraph-image.avif)'
export const staticOpenGraphImagesContent2 = '您还可以通过在文件夹结构更深层创建 opengraph-image.jpg 文件，为特定路由添加 OG 图像。例如，要为 /blog 路由创建 OG 图像，请在 blog 文件夹中添加一个 opengraph-image.jpg 文件。'
export const staticOpenGraphImagesContent2Img = '![opengraph-image-blog](/nextjsDoc/metadataAndOGImages/opengraph-image-blog.avif)'
export const staticOpenGraphImagesContent3 = '在子文件夹结构中的图像将优先于其上方的任何图像。'
export const staticOpenGraphImagesContent4 = '其他图像格式，例如 jpeg、png 和 gif 也支持。更多信息请参阅 Open Graph Image 文档。'

export const generatedOpenGraphImagesTitle = '## 生成的 Open Graph 图像'
export const generatedOpenGraphImagesContent1 = 'ImageResponse 构造函数允许您使用 JSX 和 CSS 生成动态图像。这对于依赖数据的OG图像非常有用。'
export const generatedOpenGraphImagesContent2 = '例如，要为每篇博客文章生成唯一的 OG 图像，请在博客文件夹中添加一个 opengraph-image.tsx 文件，并从 next/og 导入 ImageResponse 构造函数：'
export const generatedOpenGraphImagesContent2Code = `~~~app/blog/[slug]/opengraph-image.tsx~~~
import { ImageResponse } from 'next/og'
import { getPost } from '@/app/lib/data'
 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    )
  )
}`
export const generatedOpenGraphImagesContent3 = 'ImageResponse 支持常见的 CSS 属性，包括 flexbox 和绝对定位、自定义字体、文本换行、居中和嵌套图像。查看支持的 CSS 属性完整列表。'
export const generatedOpenGraphImagesContent3GTKList = [
    'Vercel OG Playground 中提供了示例。',
    'ImageResponse 使用 @vercel/og、satori 和 resvg 将 HTML 和 CSS 转换为 PNG。',
    '仅支持 flexbox 和部分 CSS 属性。高级布局（例如 display: grid）不支持。'
]

