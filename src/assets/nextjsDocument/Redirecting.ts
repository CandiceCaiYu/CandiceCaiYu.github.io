export const title = '# 重定向';
export const content1 = '您可以通过多种方式处理 Next.js 中的重定向。本页将介绍每个可用选项、用例以及如何管理大量重定向。';
export const content1Table = [
    {
        name: 'redirect',
        purpose: '发生突变或事件后重定向用户',
        where: '服务器组件、服务器操作、路由处理程序',
        statusCode: '307（临时）或 303（服务器操作）'
    },
    {
        name: 'permanentRedirect',
        purpose: '发生突变或事件后重定向用户',
        where: '服务器组件、服务器操作、路由处理程序',
        statusCode: '308 (永久)'
    }, {
        name: 'useRouter',
        purpose: '执行客户端导航',
        where: '客户端组件中的事件处理程序',
        statusCode: 'N/A'
    },
    {
        name: 'redirects in next.config.js',
        purpose: '根据路径重定向传入请求',
        where: 'next.config.js 文件',
        statusCode: '307（临时）或 308（永久）'
    }, {
        name: 'NextResponse.redirect',
        purpose: '根据条件重定向传入请求',
        where: '中间件',
        statusCode: 'Any'
    },
];

export const redirectingTitle = '## redirect 函数';
export const redirectingContent1 = '重定向功能允许您将用户重定向到另一个 URL。您可以在服务器组件、路由处理程序和服务器操作中调用重定向。';
export const redirectingContent2 = 'redirect通常在突变或事件之后使用。例如，创建帖子：';
export const redirectingContent2Code = `~~~app/actions.tsx

'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function createPost(id: string) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidatePath('/posts') // Update cached posts
  redirect(\`/post/${id}\`) // Navigate to the new post page
}`;
export const redirectingContent2Tips = [
    "默认情况下，redirect 返回 307（临时重定向）状态代码。在服务器操作中使用时，它会返回 303（参见其他），这通常用于在 POST 请求后重定向到成功页面。",
    "redirect内部会引发错误，因此应在 try/catch 块之外调用它。",
    "可以在客户端组件渲染过程中调用redirect，但不能在事件处理程序中调用。你可以改用 useRouter 钩子。",
    "redirect 也接受绝对 URL，可以用来重定向到外部链接。",
    "如果您想在渲染过程之前重定向，请使用 next.config.js 或中间件。"
];
export const redirectingContentMore = '有关详细信息，请参阅redirect API 参考。';
export const permanentRedirectTitle = 'permanentRedirect 函数';
export const permanentRedirectContent1 = 'permanentRedirect 函数允许您将用户永久重定向到另一个 URL。您可以在服务器组件、路由处理程序和服务器操作中调用 permanentRedirect。';
export const permanentRedirectContent2 = 'permanentRedirect 通常在实体的规范 URL 发生变更或事件后使用，例如在用户更改用户名后更新其个人资料 URL。';
export const permanentRedirectContent2Code = `~~~app/actions.tsx

'use server'
 
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
 
export async function updateUsername(username: string, formData: FormData) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidateTag('username') // Update all references to the username
  permanentRedirect(\`/profile/${username}\`) // Navigate to the new user profile
}`;
export const permanentRedirectContent2Tips = [
    "permanentRedirect 默认返回 308（永久重定向）状态代码。",
    "permanentRedirect 也接受绝对 URL，并且可以用来重定向到外部链接。",
    "如果您想在渲染过程之前重定向，请使用 next.config.js 或中间件。"
];
export const permanentRedirectContent3 = '有关详细信息，请参阅permanentRedirect API 参考';

export const useRouterTitle = '## useRouter() 钩子';
export const useRouterContent1 = '如果您需要在客户端组件的事件处理程序内进行重定向，则可以使用 useRouter 钩子的push方法。例如：';
export const useRouterContent1Code = `~~~app/page.tsx;

'use client';
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter();
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}`;
export const useRouterContent1Tips = [
    "如果您不需要以编程方式导航用户，则应该使用 <Link> 组件。"
];
export const useRouterContent1More = '有关详细信息，请参阅useRouter API 参考';

export const redirectsInNextConfigTitle = '## 在 next.config.js 中使用redirects';
export const redirectsInNextConfigContent1 = 'next.config.js 文件中的redirects选项允许您将传入的请求路径重定向到不同的目标路径。当您更改页面的 URL 结构或拥有预先知道的重定向列表时，这很有用。';
export const redirectsInNextConfigContent2 = '重定向支持 path, header, cookie, and query matching匹配，使您能够灵活地根据传入请求重定向用户。';
export const redirectsInNextConfigContent3 = '要使用redirects，请将选项添加到 next.config.js 文件中：';
export const redirectsInNextConfigContent3Code = `~~~next.config.js

module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ]
  },
}`;
export const redirectsInNextConfigContent3More = '请参阅redirects API 参考以了解更多信息。';
export const redirectsInNextConfigContent3Tips = [
    "redirects可以返回 307（临时重定向）或 308（永久重定向）状态代码（带有永久选项）。",
    "redirects可能在某些平台上有限制。例如，在 Vercel 上，重定向限制为 1,024 次。要管理大量重定向（1000 次以上），请考虑使用中间件创建自定义解决方案。有关更多信息，请参阅大规模管理重定向。",
    "redirects在中间件之前运行。",
];

export const nextResponseRedirectTitle = '## 中间件中的 NextResponse.redirect';
export const nextResponseRedirectContent1 = '中间件允许您在请求完成之前运行代码。然后，根据传入的请求，使用 NextResponse.redirect 重定向到不同的 URL。如果您想根据条件（例如身份验证、会话管理等）重定向用户或进行大量重定向，这将非常有用。';
export const nextResponseRedirectContent2 = '例如，如果用户未通过身份验证则将其重定向到 /login 页面：';
export const nextResponseRedirectContent2Code = `~~~app/middleware.ts

import { NextResponse, NextRequest } from 'next/server'
import { authenticate } from 'auth-provider'
 
export function middleware(request: NextRequest) {
  const isAuthenticated = authenticate(request)
 
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}`;
export const nextResponseRedirectContent3 = '中间件在 next.config.js 中的redirects之后和渲染之前运行。';
export const nextResponseRedirectContent3More = '有关详细信息，请参阅中间件文档。';


export const managementRedirectScaleTitle = '## 大规模管理重定向（高级）';
export const managementRedirectScaleContent1 = '要管理大量重定向（1000 次以上），您可以考虑使用中间件创建自定义解决方案。这样您就可以以编程方式处理重定向，而无需重新部署应用程序。';
export const managementRedirectScaleContent2 = "To do this, you'll need to consider:";
export const managementRedirectScaleContent2List = [
    "创建并存储重定向映射。",
    "优化数据查找性能。"
];
export const managementRedirectScaleContentTipsTitle = 'Next.js 示例：';
export const managementRedirectScaleContentTips = '请参阅我们的带有 Bloom 过滤器的中间件示例，了解以下建议的实现。';
export const managementRedirectScaleContent3 = '### 创建和存储重定向映射';
export const managementRedirectScaleContent4 = '重定向映射是可以存储在数据库（通常是键值存储）或 JSON 文件中的重定向列表。';
export const managementRedirectScaleContent5 = '考虑以下数据结构：';
export const managementRedirectScaleContent5Code = `~~~json

{
  "/old": {
    "destination": "/new",
    "permanent": true
  },
  "/blog/post-old": {
    "destination": "/blog/post-new",
    "permanent": true
  }
}`;
export const managementRedirectScaleContent6 = '在中间件中，您可以从数据库（例如 Vercel 的 Edge Config 或 Redis）读取数据，并根据传入的请求重定向用户：';
export const managementRedirectScaleContent6Code = `~~~middleware.ts

import { NextResponse, NextRequest } from 'next/server'
import { get } from '@vercel/edge-config'
 
type RedirectEntry = {
  destination: string
  permanent: boolean
}
 
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const redirectData = await get(pathname)
 
  if (redirectData && typeof redirectData === 'string') {
    const redirectEntry: RedirectEntry = JSON.parse(redirectData)
    const statusCode = redirectEntry.permanent ? 308 : 307
    return NextResponse.redirect(redirectEntry.destination, statusCode)
  }
 
  // No redirect found, continue without redirecting
  return NextResponse.next()
}`;
export const managementRedirectScaleContent7 = '### 优化数据查找性能';
export const managementRedirectScaleContent8 = '为每个传入请求读取大型数据集可能会很慢且成本高昂。您可以通过两种方式优化数据查找性能：';
export const managementRedirectScaleContent8List = [
    "使用针对快速读取进行了优化的数据库，例如 Vercel Edge Config 或 Redis。",
    "使用数据查找策略（例如Bloom filter）在读取较大的重定向文件或数据库之前有效地检查重定向是否存在。"
];
export const managementRedirectScaleContent9 = '考虑前面的例子，您可以将生成的bloom filter文件导入中间件，然后检查传入的请求路径名是否存在于bloom filter中。';
export const managementRedirectScaleContent10 = '如果是，则将请求转发到路由处理程序，路由处理程序将检查实际文件并将用户重定向到适当的 URL。这避免将大型重定向文件导入中间件，因为这可能会减慢每个传入请求的速度。';
export const managementRedirectScaleContent10Code = `~~~middleware.ts

import { NextResponse, NextRequest } from 'next/server'
import { ScalableBloomFilter } from 'bloom-filters'
import GeneratedBloomFilter from './redirects/bloom-filter.json'
 
type RedirectEntry = {
  destination: string
  permanent: boolean
}
 
// Initialize bloom filter from a generated JSON file
const bloomFilter = ScalableBloomFilter.fromJSON(GeneratedBloomFilter as any)
 
export async function middleware(request: NextRequest) {
  // Get the path for the incoming request
  const pathname = request.nextUrl.pathname
 
  // Check if the path is in the bloom filter
  if (bloomFilter.has(pathname)) {
    // Forward the pathname to the Route Handler
    const api = new URL(
      \`/api/redirects?pathname=${encodeURIComponent(request.nextUrl.pathname)}\`,
      request.nextUrl.origin
    )
 
    try {
      // Fetch redirect data from the Route Handler
      const redirectData = await fetch(api)
 
      if (redirectData.ok) {
        const redirectEntry: RedirectEntry | undefined =
          await redirectData.json()
 
        if (redirectEntry) {
          // Determine the status code
          const statusCode = redirectEntry.permanent ? 308 : 307
 
          // Redirect to the destination
          return NextResponse.redirect(redirectEntry.destination, statusCode)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
 
  // No redirect found, continue the request without redirecting
  return NextResponse.next()
}`;
export const managementRedirectScaleContent11 = '然后，在路由处理程序中：';
export const managementRedirectScaleContent11Code = `~~~app/redirects/route.ts;

import { NextRequest, NextResponse } from 'next/server'
import redirects from '@/app/redirects/redirects.json'
 
type; RedirectEntry = {
  destination: string
  permanent: boolean
};
 
export function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get('pathname');
  if (!pathname) {
    return new Response('Bad Request', { status: 400 })
  }
 
  // Get the redirect entry from the redirects.json file
  const redirect = (redirects; as; Record<string, RedirectEntry>;)[pathname];
 
  // Account for bloom filter false positives
  if (!redirect) {
    return new Response('No redirect', { status: 400 })
  }
 
  // Return the redirect entry
  return NextResponse.json(redirect)
}`;
export const managementRedirectScaleContent11Tips = [
    "要生成布隆过滤器，您可以使用类似 bloom-filters 的库。",
    "您应该验证对路由处理程序发出的请求，以防止恶意请求。"
];
