export const title = '# 中间件';
export const content1 = '中间件允许您在请求完成之前运行代码。然后，根据传入的请求，您可以通过重写、重定向、修改请求或响应标头或直接响应来修改响应。';
export const content2 = '中间件在缓存内容和路由匹配之前运行。有关更多详细信息，请参阅匹配路径。';
export const content3 = '## 用例';
export const content4 = '将中间件集成到您的应用程序中可以显著提高性能、安全性和用户体验。中间件特别有效的一些常见场景包括：';
export const content4List = [
    "身份验证和授权：在授予对特定页面或 API 路由的访问权限之前，确保用户身份并检查会话 cookie。",
    "服务器端重定向：根据某些条件（例如，区域设置、用户角色）在服务器级别重定向用户。",
    "路径重写：根据请求属性动态重写 API 路由或页面的路径，支持 A/B 测试、功能推出或遗留路径。",
    "机器人检测：通过检测和阻止机器人流量来保护您的资源。",
    "日志和分析：在页面或 API 处理之前捕获并分析请求数据以获取见解。",
    "功能标记：动态启用或禁用功能，以实现无缝的功能推出或测试。"
];
export const content5 = '认识到中间件可能不是最佳方法的情况同样至关重要。以下是一些需要注意的情况：';
export const content5List = [
    "复杂的数据获取和操作：中间件并非为直接数据获取或操作而设计，而应在路由处理程序或服务器端实用程序中完成此操作。",
    "繁重的计算任务：中间件应轻量级且响应迅速，否则可能会导致页面加载延迟。繁重的计算任务或长时间运行的进程应在专用的路由处理程序中完成。",
    "广泛的会话管理：虽然中间件可以管理基本的会话任务，但广泛的会话管理应由专用的身份验证服务或路由处理程序进行管理。",
    "直接数据库操作：不建议在中间件中执行直接数据库操作。数据库交互应在路由处理程序或服务器端实用程序中完成。",
];
export const content6 = '## 约定';
export const content7 = '使用项目根目录中的 middleware.ts（或 .js）文件来定义中间件。例如，与page或app处于同一级别，或者在 src 内（如果适用）。';
export const content7TipsTitle = '注意';
export const content7Tips = '虽然每个项目仅支持一个 middleware.ts 文件，但您仍然可以模块化地组织中间件逻辑。将中间件功能分解为单独的 .ts 或 .js 文件，然后将其导入主 middleware.ts 文件。这样可以更清晰地管理路由特定的中间件，这些中间件会汇总在 middleware.ts 中以便进行集中控制。通过强制使用单个中间件文件，可以简化配置、防止潜在冲突并通过避免多个中间件层来优化性能。';
export const content8 = '## 示例';
export const content8Code = `~~~middleware.ts~~~

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked \`async\` if using \`await\` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}`;
export const content9 = '## 匹配路径';
export const content10 =
    '中间件将针对项目中的每个路由进行调用。鉴于此，使用匹配器精确定位或排除特定路由至关重要。以下是执行顺序：';
export const content10List = [
    "next.config.js 中的 headers",
    "next.config.js 中的redirects",
    "中间件（rewrites、redirects等）",
    "next.config.js 中的 beforeFiles（rewrites）",
    "文件系统路由（public/、_next/static/、pages/、app/ 等）",
    "next.config.js 中的 afterFiles（rewrites）",
    "动态路由（/blog/[slug]）",
    "next.config.js 中的 fallback（rewrites）"
];
export const content11 = '有两种方法可以定义中间件将在哪些路径上运行：';
export const content11List = [
    "自定义匹配器配置",
    "条件语句"
];
export const content12 = '### 匹配器';
export const content13 =
    'matcher 允许您过滤中间件以在特定路径上运行。';
export const content13Code = `~~~middleware.js~~~

export const config = {
  matcher: '/about/:path*',
}`;
export const content14 = '您可以使用数组匹配单个路径或多个路径：';
export const content14Code = `~~~middleware.js~~~

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}`;
export const content15 = '匹配器配置允许使用完整正则表达式，因此支持负向前瞻或字符匹配等匹配。此处可以看到一个用于匹配除特定路径之外的所有内容的负向前瞻示例：';
export const content15Code = `~~~middleware.js~~~

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}`;
export const content16 = '您还可以使用 missing 或 has 数组，或者两者结合来绕过某些请求的中间件：';
export const content16Code = `~~~middleware.js~~~

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
 
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
 
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
    },
  ],
}`;
export const content16Tips = '匹配器值必须是常量，这样才能在构建时进行静态分析。变量等动态值将被忽略。';
export const content17 = '配置的匹配器：';
export const content17List = [
    "必须以 / 开头",
    "可以包含命名参数：/about/:path 匹配 /about/a 和 /about/b，但不匹配 /about/a/c",
    "可以在命名参数上使用修饰符（以 : 开头）：/about/:path* 匹配 /about/a/b/c，因为 * 为零或更多。? 为零或一，+ 为一或更多",
    "可以使用括号中的正则表达式：/about/(.*) 与 /about/:path* 相同"
];
export const content17More = '阅读有关 path-to-regexp 文档的更多详细信息。';
export const content17Tips = '为了向后兼容，Next.js 始终将 /public 视为 /public/index。因此，/public/:path 的匹配器将匹配。';
export const content18 = '### 条件语句';
export const content18Code = `~~~middleware.ts~~~

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}`;
export const content19 = '## NextResponse';
export const content20 = 'NextResponse API 允许您：';
export const content20List = [
    "将传入请求redirect到不同的 URL",
    "通过显示给定的 URL rewrite响应",
    "为 API 路由、getServerSideProps 和重写目标设置请求标头",
    "设置响应 cookies",
    "设置响应标 headers"
];
export const content21 = '要从中间件产生响应，您可以：';
export const content21List = [
    "重写为生成响应的路由（页面或路由处理程序）",
    "直接返回 NextResponse。请参阅生成响应"
];
export const content22 = '## 使用 Cookies';
export const content23 =
    'Cookies 是常规标头。在请求中，它们存储在 Cookie 标头中。在响应中，它们位于 Set-Cookie 标头中。Next.js 通过 NextRequest 和 NextResponse 上的 cookies 扩展提供了一种访问和操作这些 cookie 的便捷方法。';
export const content23List = [
    "对于传入请求，cookies 具有以下方法：get、getAll、set 和 delete cookies。您可以使用 has 检查 cookie 是否存在，或使用 clear 删除所有 cookie。",
    "对于传出响应，cookies 具有以下方法 get、getAll、set 和 delete。"
];
export const content23Code = `~~~middleware.ts~~~

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the \`RequestCookies\` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the \`ResponseCookies\` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a \`Set-Cookie:vercel=fast;path=/\` header.
 
  return response
}`;
export const content24 = '## 设置标头';
export const content25 = '您可以使用 NextResponse API 设置请求和响应标头（自 Next.js v13.0.0 起可以设置请求标头）。';
export const content25Code = `~~~middleware.ts~~~

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header \`x-hello-from-middleware1\`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')
 
  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header \`x-hello-from-middleware2\`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}`;
export const content25Tips = '避免设置较大的标头，因为根据您的后端 Web 服务器配置，这可能会导致 431 请求标头字段太大 (431 Request Header Fields Too Large) 错误。';
export const content26 = '### CORS';
export const content27 =
    '您可以在中间件中设置 CORS 标头以允许跨源请求，包括简单请求和预检请求。';
export const content27Code = `~~~middleware.ts~~~

import { NextRequest, NextResponse } from 'next/server'
 
const allowedOrigins = ['https://acme.com', 'https://my-app.org']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
 
export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)
 
  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
 
  // Handle simple requests
  const response = NextResponse.next()
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  return response
}
 
export const config = {
  matcher: '/api/:path*',
}`;
export const content27Tips = '您可以在路由处理程序中为各个路由配置 CORS 标头。';
export const content28 = '## 生成响应';
export const content29 =
    '您可以通过返回 Response 或 NextResponse 实例直接从中间件进行响应。（此功能自 Next.js v13.1.0 起可用）';
export const content29Code = `~~~middleware.ts~~~

import type { NextRequest } from 'next/server'
import { isAuthenticated } from '@lib/auth'
 
// Limit the middleware to paths starting with \`/api/\`
export const config = {
  matcher: '/api/:function*',
}
 
export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )
  }
}`;
export const content30 = '## waitUntil 和 NextFetchEvent';
export const content31 = 'NextFetchEvent 对象扩展了本机 FetchEvent 对象，并包含 waitUntil() 方法。';
export const content32 = 'waitUntil() 方法将promise作为参数，并延长中间件的生命周期，直到promise得以实现。这对于在后台执行工作非常有用。';
export const content32Code = `~~~middleware.ts~~~

import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
 
export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch('https://my-analytics-platform.com', {
      method: 'POST',
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  )
 
  return NextResponse.next()
}`;
export const content33 = '## 高级中间件标志';
export const content34 = '在 Next.js v13.1 中，为中间件引入了两个附加标志 skipMiddlewareUrlNormalize 和 skipTrailingSlashRedirect，用于处理高级用例。';
export const content35 = 'skipTrailingSlashRedirect 禁用 Next.js 重定向以添加或删除尾部斜杠。这允许在中间件内部进行自定义处理，以保留某些路径的尾部斜杠，但不保留其他路径，这可以使增量迁移更容易。';
export const content35Code1 = `~~~next.config.js~~~

module.exports = {
  skipTrailingSlashRedirect: true,
}`;
export const content35Code2 = `~~~middleware.ts~~~

const legacyPrefixes = ['/docs', '/blog']
 
export default async function middleware(req) {
  const { pathname } = req.nextUrl
 
  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }
 
  // apply trailing slash handling
  if (
    !pathname.endsWith('/') &&
    !pathname.match(/((?!\\.well-known(?:\\/.*)?)(?:[^/]+\\/)*[^/]+\\.\\w+)/)
  ) {
    return NextResponse.redirect(
      new URL(\`\${req.nextUrl.pathname}/\`, req.nextUrl)
    )
  }
}`;
export const content36 = 'skipMiddlewareUrlNormalize 允许禁用 Next.js 中的 URL 规范化，以使直接访问和客户端转换的处理相同。在某些高级情况下，此选项通过使用原始 URL 提供完全控制。';
export const content36Code1 = `~~~next.config.js~~~

module.exports = {
  skipMiddlewareUrlNormalize: true,
}`;
export const content36Code2 = `~~~middleware.ts~~~

export default async function middleware(req) {
  const { pathname } = req.nextUrl
 
  // GET /_next/data/build-id/hello.json
 
  console.log(pathname)
  // with the flag this now /_next/data/build-id/hello.json
  // without the flag this would be normalized to /hello
}`;
export const content37 = '## 单元测试（实验性）';
export const content38 = '从 Next.js 15.1 开始，next/experimental/testing/server 包包含可帮助对中间件文件进行单元测试的实用程序。单元测试中间件可帮助确保它仅在所需路径上运行，并且自定义路由逻辑在代码投入生产之前按预期工作。';
export const content39 = 'unstable_doesMiddlewareMatch 函数可用于断言中间件是否会针对提供的 URL、标头和 cookie 运行。';
export const content39Code = `~~~
import { unstable_doesMiddlewareMatch } from 'next/experimental/testing/server'
 
expect(
  unstable_doesMiddlewareMatch({
    config,
    nextConfig,
    url: '/test',
  })
).toEqual(false)
`;
export const content40 = '整个中间件功能也可以进行测试。';
export const content40Code = `~~~
import { isRewrite, getRewrittenUrl } from 'next/experimental/testing/server'
import {expect} from "sucrase/dist/types/parser/traverser/util";
 
const request = new NextRequest('https://nextjs.org/docs')
const response = await middleware(request)
expect(isRewrite(response)).toEqual(true)
expect(getRewrittenUrl(response)).toEqual('https://other-domain.com/docs')
// getRedirectUrl could also be used if the response were a redirect
`;
export const content41 = '## 运行时';
export const content42 =
    '中间件目前仅支持与 Edge 运行时兼容的 API。不支持 Node.js 独有的 API。';
export const content43 = '## 版本历史';
export const content43Table = [
    {version: 'v13.1.0', change: '添加了高级中间件标志'},
    {version: 'v13.0.0', change: '中间件可以修改请求标头、响应标头并发送响应'},
    {version: 'v12.2.0', change: '中间件已稳定，请参阅升级指南'},
    {version: 'v12.0.9', change: '在 Edge Runtime 中强制使用绝对 URL（PR）'},
    {version: 'v12.0.0', change: '添加了中间件（测试版）'}
];
