export const title = '# 路由handler';
export const content1 = '路由处理程序允许您使用 Web 请求和响应 API 为给定路由创建自定义请求处理程序。';
export const content1Image = '![route-special-file](/nextjsDoc/buildingYourApplication/routing/route-special-file.avif)';
export const content1Tips = "路由处理程序仅在 app 目录中可用。它们相当于 pages 目录中的 API 路由，这意味着您不需要同时使用 API 路由和路由handler。";
export const content2 = "## 约定";
export const content3 = "路由处理程序在app目录内的 route.js|ts 文件中定义：";
export const content3Code = `~~~app/api/route.ts

export async function GET(request: Request) {}`;
export const content4 = "路由处理程序可以嵌套在应用程序目录中的任何位置，类似于 page.js 和 layout.js。但 page.js 和route.js 不能在同一层级";
export const content5 = "### 支持的 HTTP 方法";
export const content6 = "支持以下 HTTP 方法：GET、POST、PUT、PATCH、DELETE、HEAD 和 OPTIONS。如果调用不支持的方法，Next.js 将返回 405 Method Not Allowed 响应。";
export const content7 = "### 扩展的 NextRequest 和 NextResponse API";
export const content8 = "除了支持原生的 Request 和 Response API 之外，Next.js 还通过 NextRequest 和 NextResponse 对其进行了扩展，为高级用例提供了便捷的帮助程序。";
export const content9 = "## 行为";
export const content10 = "### 缓存";
export const content11 = "默认情况下，路由处理程序不会缓存。但是，您可以选择缓存 GET 方法。其他受支持的 HTTP 方法不会被缓存。要缓存 GET 方法，请在路由处理程序文件中使用route config option，例如 export const dynamic = 'force-static'。";
export const content11Code = `~~~app/items/route.ts

export const dynamic = 'force-static'
 
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}`;
export const content11Tips = "其他受支持的 HTTP 方法不会被缓存，即使它们与缓存的 GET 方法一起放在同一个文件中。";
export const content12 = "### 特殊路由处理程序";
export const content13 = "特殊路由处理程序（如 sitemap.ts、opengraph-image.tsx 和 icon.tsx）和其他元数据文件默认保持静态，除非它们使用动态 API 或动态配置选项。";
export const content14 = "### 路由解析";
export const content15 = "您可以将路由视为最低级别的路由原语。";
export const content15List = ["它们不参与布局或客户端导航（如page）。", "不能在与 page.js 相同的路由上存在 route.js 文件。"];
export const content15Table = [
    {page: 'app/page.js', route: "app/route.js", result: 'Conflict'},
    {page: 'app/page.js', route: "app/api/route.js", result: 'Valid'},
    {page: 'app/[user]/page.js', route: "app/api/route.js", result: 'Valid'},
];
export const content16 = "每个 route.js 或 page.js 文件接管该路由的所有 HTTP 动词。";
export const content16Code = `~~~app/api/route.ts

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
 
// ❌ Conflict
// \`app/route.ts\`
export async function POST(request: Request) {}`;
export const content17 = "## 示例";
export const content18 = "以下示例展示了如何将路由处理程序与其他 Next.js API 和功能相结合。";
export const content19 = "### 重新验证缓存数据";
export const content20 = "您可以使用增量静态再生 (Incremental Static Regeneration - ISR) 重新验证缓存数据：";
export const content20Code = `~~~app/posts/route.ts

export const revalidate = 60
 
export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return Response.json(posts)
}`;
export const content21 = "### Cookies";
export const content22 = "您可以使用 next/headers 中的 cookie 读取或设置 cookie。此服务器函数可以直接在路由处理程序中调用，也可以嵌套在另一个函数中。";
export const content23 = "或者，您可以使用 Set-Cookie 标头返回新的响应。";
export const content23Code = `~~~app/api/route.ts

import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': \`token=\${token.value}\` },
  })
}`;
export const content24 = "您还可以使用底层 Web API 从请求（NextRequest）中读取 Cookie：";
export const content24Code = `~~~app/api/route.ts

import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}`;
export const content25 = "### 标头";
export const content26 = "您可以从 next/headers 读取标头。此服务器函数可以直接在路由处理程序中调用，也可以嵌套在另一个函数中。";
export const content27 = "此标头实例是只读的。要设置标头，您需要返回一个带有新标头的新响应。";
export const content27Code = `~~~app/api/route.ts

import { headers } from 'next/headers'
 
export async function GET(request: Request) {
  const headersList = await headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}`;
export const content28 = "您还可以使用底层 Web API 从请求（NextRequest）中读取标头：";
export const content28Code = `~~~app/api/route.ts

import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
}`;
export const content29 = "### 重定向";
export const content29Code = `~~~app/api/route.ts

import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  redirect('https://nextjs.org/')
}`;
export const content30 = "### 动态路由段";
export const content30Tips = "我们建议在继续之前先阅读“定义路由”页面。";
export const content31 = "路由处理程序可以使用动态段从动态数据创建请求处理程序。";
export const content31Code = `~~~app/items/[slug]/route.ts

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug // 'a', 'b', or 'c'
}`;
export const content31Table = [
    {route: 'app/items/[slug]/route.js', example: '/items/a', params: 'Promise<{ slug: "a" }>'},
    {route: 'app/items/[slug]/route.js', example: '/items/b', params: 'Promise<{ slug: "b" }>'},
    {route: 'app/items/[slug]/route.js', example: '/items/c', params: 'Promise<{ slug: "c" }>'},
];
export const content32 = "### URL 查询参数";
export const content33 = "传递给路由处理程序的请求对象是 NextRequest 实例，它具有一些额外的便捷方法，包括更轻松地处理查询参数。";
export const content33Code = `~~~app/api/search/route.ts

import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}`;
export const content34 = "### 流式传输";
export const content35 = "流式传输通常与大型语言模型 (LLM)（例如 OpenAI）结合使用，用于 AI 生成的内容。了解有关 AI SDK 的更多信息。";
export const content35Code = `~~~app/api/chat/route.ts


import { openai } from '@ai-sdk/openai'
import { StreamingTextResponse, streamText } from 'ai'
 
export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  })
 
  return new StreamingTextResponse(result.toAIStream())
}`;
export const content36 = "这些抽象使用 Web API 来创建流。您也可以直接使用底层 Web API。";
export const content36Code = `~~~app/api/route.ts

// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
 
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
 
const encoder = new TextEncoder()
 
async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}
 
export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)
 
  return new Response(stream)
}`;
export const content37 = "### 请求正文";
export const content38 = "您可以使用标准 Web API 方法读取请求正文：";
export const content38Code = `~~~app/items/route.ts

export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}`;
export const content39 = "### 请求主体 FormData";
export const content40 = "您可以使用 request.formData() 函数读取 FormData：";
export const content40Code = `~~~app/items/route.ts

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}`;
export const content41 = "由于 formData 数据都是字符串，您可能需要使用 zod-form-data 来验证请求并以您喜欢的格式（例如数字）检索数据。";
export const content42 = "### CORS";
export const content43 = "您可以使用标准 Web API 方法为特定路由处理程序设置 CORS 标头：";
export const content43Code = `~~~app/api/route.ts

export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}`;
export const content43Tips = [
    "要将 CORS 标头添加到多个路由处理程序，您可以使用中间件或 next.config.js 文件。",
    "或者，查看我们的 CORS 示例包。"
];
export const content44 = "### Webhooks";
export const content45 = "您可以使用路由处理程序接收来自第三方服务的 webhook：";
export const content45Code = `~~~app/api/webhook/route.ts

export async function POST(request: Request) {
  try {
    const text = await request.text()
    // Process the webhook payload
  } catch (error) {
    return new Response(\`Webhook error: \${error.message}\`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}`;
export const content46 = "值得注意的是，与 Pages Router 的 API 路由不同，您不需要使用 bodyParser 来使用任何其他配置。";
export const content47 = "### 非 UI 响应";
export const content48 = "您可以使用路由处理程序返回非 UI 内容。请注意，sitemap.xml、robots.txt、应用图标和开放图形图像均具有内置支持。";
export const content48Code = `~~~app/rss.xml/route.ts

export async function GET() {
  return new Response(
    \`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
 
</rss>\`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    }
  )
}`;
export const content49 = "### 段配置选项";

export const content50 = "路由处理程序使用与页面和布局相同的路由段配置。";
export const content50Code = `~~~app/items/route.ts

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'`;
export const content50More = "有关更多详细信息，请参阅 API 参考。";
