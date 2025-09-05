export const routeJsContent1 = '# route.js';
export const routeJsContent2 = 'Route Handlers允许您使用 Web Request和Response API 为给定路由创建自定义请求处理程序。';
export const routeJsContent2Code = `~~~route.ts~~~`

export async function GET() {
    return Response.json({message: 'Hello World'})
}

export const routeJsContent3 = '## 参考';
export const routeJsContent4 = '### HTTP 方法';
export const routeJsContent5 = 'route文件允许您为给定路由创建自定义请求处理程序。支持以下 HTTP 方法：GET、POST、PUT、PATCH、DELETE、HEAD 和 OPTIONS。';
export const routeJsContent5Code = `~~~route.ts~~~
export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If \`OPTIONS\` is not defined, Next.js will automatically implement \`OPTIONS\` and set the appropriate Response \`Allow\` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {}`;
export const routeJsContent6 = '### Parameters';
export const routeJsContent7 = '#### request (optional)';
export const routeJsContent8 = 'request对象是一个 NextRequest 对象，它是 Web Request API 的一个扩展。NextRequest 可以让你进一步控制传入的request，包括轻松访问 Cookie 以及一个扩展的、已解析的 URL 对象 nextUrl。';
export const routeJsContent8Code = `~~~route.ts~~~
import type { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const url = request.nextUrl
}`;
export const routeJsContent9 = '#### context (optional)';
export const routeJsContent10 = 'params：一个promise，解析为包含当前路由的动态路由参数的对象。';
export const routeJsContent10Code = `~~~app/dashboard/[team]/route.ts~~~
export async function GET(
  request: Request,
  { params }: { params: Promise<{ team: string }> }
) {
  const { team } = await params
}`;
export const routeJsContent10TableData = [
    {route: 'app/dashboard/[team]/route.js', url: '/dashboard/1', params: "Promise<{ team: '1' }>"},
    {route: 'app/shop/[tag]/[item]/route.js', url: '/shop/1/2', params: "Promise<{ tag: '1', item: '2' }>"},
    {route: 'app/blog/[...slug]/route.js', url: '/blog/1/2', params: "Promise<{ slug: ['1', '2'] }>"},
];
export const routeJsContent11 = '### Route Context Helper';
export const routeJsContent12 = '您可以使用 RouteContext 来设置Route Handler context，以便从路由字面量中获取强类型参数。RouteContext 是一个全局可用的辅助函数。';
export const routeJsContent12Code = `~~~app/users/[id]/route.ts~~~


export async function GET(_req: NextRequest, ctx: RouteContext<'/users/[id]'>) {
    const {id} = await ctx.params
    return Response.json({id})
}`

export const routeJsContent12GTK = '类型是在next dev, next build or next typegen期间生成的';
export const routeJsContent13 = '## 示例';
export const routeJsContent14 = '### Cookies';
export const routeJsContent15 = '您可以使用来自 next/headers 的 cookie 来读取或设置 cookie。';
export const routeJsContent15Code = `~~~route.ts~~~
import { cookies } from 'next/headers'
 
export async function GET(request: NextRequest) {
  const cookieStore = await cookies()
 
  const a = cookieStore.get('a')
  const b = cookieStore.set('b', '1')
  const c = cookieStore.delete('c')
}`;
export const routeJsContent16 = '或者，您可以使用 Set-Cookie 标头返回新的Response。';
export const routeJsContent16Code = `~~~route.ts~~~
import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': \`token=\${token.value}\` },
  })
}`;
export const routeJsContent17 = '您还可以使用底层 Web API 从请求（NextRequest）中读取 Cookie：';
export const routeJsContent17Code = `~~~app/api/route.ts~~~
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}`;
export const routeJsContent18 = '### Headers';
export const routeJsContent19 = '您可以从 next/headers 中使用headers读取headers的信息的。';
export const routeJsContent19Code = `~~~route.ts~~~
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const headersList = await headers()
  const referer = headersList.get('referer')
}`;
export const routeJsContent20 = '此标头实例是只读的。要设置标头，您需要返回一个包含新标头的新 Response。';
export const routeJsContent20Code = `~~~app/api/route.ts~~~
import { headers } from 'next/headers'
 
export async function GET(request: Request) {
  const headersList = await headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}`;
export const routeJsContent21 = '您还可以使用底层 Web API 从请求（NextRequest）中读取 headers：';
export const routeJsContent21Code = `~~~app/api/route.ts~~~
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
}
`;
export const routeJsContent22 = '### 重新验证缓存数据';
export const routeJsContent23 = '您可以使用revalidate路由段配置选项重新验证缓存数据。';
export const routeJsContent23Code = `~~~app/posts/route.ts~~~
export const revalidate = 60
 
export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return Response.json(posts)
}`;
export const routeJsContent24 = '### Redirects';
export const routeJsContent24Code = `~~~app/api/route.ts~~~
import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  redirect('https://nextjs.org/')
}`;
export const routeJsContent25 = '### 动态路由段';
export const routeJsContent26 = 'Route Handlers 可以使用动态段从动态数据创建请求处理程序。';
export const routeJsContent26Code = `~~~app/items/[slug]/route.ts~~~
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params // 'a', 'b', or 'c'
}`;
export const routeJsContent26TableData = [
    {route: 'app/items/[slug]/route.js', url: '/items/a', params: "Promise<{ slug: 'a' }>"},
    {route: 'app/items/[slug]/route.js', url: '/items/b', params: "Promise<{ slug: 'b' }>"},
];
export const routeJsContent27 = '### URL 查询参数';
export const routeJsContent28 = '传递给Route Handler的请求对象是一个 NextRequest 实例，它包含一些额外的便捷方法，例如那些用于更轻松地处理查询参数的方法。';
export const routeJsContent28Code = `~~~app/api/search/route.ts~~~
import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}`;
export const routeJsContent29 = '### Streaming';
export const routeJsContent30 = '流式传输通常与大型语言模型 (LLM)（例如 OpenAI）结合使用，用于 AI 生成内容。详细了解 [AI SDK](https://sdk.vercel.ai/docs/introduction)。';
export const routeJsContent30Code = `~~~app/api/chat/route.ts~~~
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
export const routeJsContent31 = '这些抽象使用 Web API 来创建流。您也可以直接使用底层 Web API。';
export const routeJsContent31Code = `~~~app/api/route.ts~~~
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
export const routeJsContent32 = '### 请求正文(request body)';
export const routeJsContent33 = '您可以使用标准 Web API 方法读取请求正文：';
export const routeJsContent33Code = `~~~app/items/route.ts~~~
export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}`;
export const routeJsContent34 = '### 请求主体 FormData';
export const routeJsContent35 = '您可以使用 request.formData() 函数读取 FormData：';
export const routeJsContent35Code = `~~~app/items/route.ts~~~
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}`;
export const routeJsContent36 = '由于 formData 数据都是字符串，您可能需要使用 [zod-form-data](https://www.npmjs.com/zod-form-data) 来验证请求并以您喜欢的格式（例如数字）检索数据。';
export const routeJsContent37 = '### 跨域资源共享 (CORS)';
export const routeJsContent38 = '您可以使用标准 Web API 方法为特定的Route Handler设置 CORS 标头：';
export const routeJsContent38Code = `~~~app/api/route.ts~~~
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
export const routeJsContent38GTK = [
    '要将 CORS 标头添加到多个Route Handler，您可以使用中间件或 next.config.js 文件。',
    '或者，请参阅我们的 [CORS 示例](https://github.com/vercel/examples/blob/main/edge-functions/cors/lib/cors.ts)。'
];
export const routeJsContent39 = '### Webhook';
export const routeJsContent40 = '您可以使用Route Handler从第三方服务接收 webhook：';
export const routeJsContent40Code = `~~~app/api/route.ts~~~
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
export const routeJsContent41 = '值得注意的是，与 Pages Router 的 API Routes 不同，您不需要使用 bodyParser 来使用任何其他配置。';
export const routeJsContent42 = '### 非 UI Responses';
export const routeJsContent43 = '您可以使用Route Handler返回非 UI 内容。请注意，sitemap.xml、robots.txt、app icons和open graph images 均已内置支持。';
export const routeJsContent43Code = `~~~app/rss.xml/route.ts~~~
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
export const routeJsContent44 = '### Segment Config Options';
export const routeJsContent45 = 'Route Handler使用与页面和布局相同的路由段配置。';
export const routeJsContent45Code = `~~~app/items/route.ts~~~
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'`;
export const routeJsContent46 = '有关详细信息，请参阅 [API 参考](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)。';
