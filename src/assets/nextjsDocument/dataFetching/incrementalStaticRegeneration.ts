export const title = '# 增量静态再生(ISR)';
export const content1 = '示例：';
export const content2 = [
    'Next.js Commerce',
    'On-Demand ISR',
    'Next.js Forms'
];
export const content3 = '增量静态再生 (ISR) 可让您：';
export const content3List = [
    '无需重建整个网站即可更新静态内容',
    '通过为大多数请求提供预渲染的静态页面来减少服务器负载',
    '确保自动将正确的缓存控制标头添加到页面',
    '无需较长的下一次构建时间即可处理大量内容页面'
];
export const content4 = '这是一个简单的例子：';
export const content4Code = `~~~app/blog/[id]/page.tsx~~~

interface Post {
  id: string
  title: string
  content: string
}
 
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60
 
// We'll prerender only the params from \`generateStaticParams\` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths
 
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}
 
export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await fetch(
    \`https://api.vercel.app/blog/\${params.id}\`
  ).then((res) => res.json())
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}`;
export const content5 = '此示例的工作原理如下：';
export const content5List = [
    '在next build期间，将生成所有已知的博客文章（此示例中有 25 篇）',
    '对这些页面（例如 /blog/1）的所有请求都将被缓存并立即执行',
    '60 秒后，下一个请求仍将显示缓存（过时）的页面',
    '缓存失效，新版本的页面开始在后台生成',
    '生成成功后，Next.js 将显示并缓存更新后的页面',
    '如果请求 /blog/26，Next.js 将按需生成并缓存此页面'
];
export const content6 = '## 参考';
export const content7 = '### Route segment config';
export const content7List = [
    'revalidate',
    'dynamicParams'
];
export const content8 = '### Functions';
export const content8List = [
    'revalidatePath',
    'revalidateTag'
];
export const exampleTitle = '## 示例';
export const exampleContent1 = '#### 基于时间的重新验证';
export const exampleContent2 = '这将获取并显示 /blog 上的博客文章列表。一小时后，此页面的缓存将在下次访问时失效。然后，在后台，将使用最新的博客文章生成页面的新版本。';
export const exampleContent2Code = `~~~app/blog/page.tsx;~~~

interface; Post; {
  string;
  string;
  string
}
 
export const revalidate = 3600; // invalidate every hour
 
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await data.json();
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  )
}`;
export const exampleContent3 = '我们建议设置较长的重新验证时间。例如，1 小时而不是 1 秒。如果您需要更高的精度，请考虑使用按需重新验证。如果您需要实时数据，请考虑切换到dynamic rendering。';
export const exampleContent4 = '#### 使用 revalidatePath 进行按需重新验证';
export const exampleContent5 = '为了获得更精确的重新验证方法，请使用 revalidatePath 函数按需使页面无效。';
export const exampleContent6 = '例如，添加新帖子后将调用此服务器操作。无论您如何在服务器组件中检索数据（使用 fetch 或连接到数据库），这都会清除整个路由的缓存并允许服务器组件获取新数据。';
export const exampleContent6Code = `~~~app/actions.ts~~~

'use server'
 
import { revalidatePath } from 'next/cache'
 
export async function createPost() {
  // Invalidate the /posts route in the cache
  revalidatePath('/posts')
}`;
export const exampleContent7 = '查看演示并探索源代码。';
export const exampleContent8 = '#### 使用 revalidateTag 进行按需重新验证';
export const exampleContent9 = '对于大多数用例，最好重新验证整个路径。如果您需要更精细的控制，可以使用 revalidateTag 函数。例如，您可以标记单个fetch调用：';
export const exampleContent9Code = `~~~app/blog/page.tsx~~~

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog', {
    next: { tags: ['posts'] },
  })
  const posts = await data.json()
  // ...
}`;
export const exampleContent10 = '如果您正在使用 ORM 或连接到数据库，则可以使用 unstable_cache：';
export const exampleContent10Code = `~~~app/blog/page.tsx~~~

import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'
 
const getCachedPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)
 
export default async function Page() {
  const posts = getCachedPosts()
  // ...
}`;
export const exampleContent11 = '然后您可以在服务器操作或路由处理程序中使用 revalidateTag：';
export const exampleContent11Code = `~~~app/actions.ts~~~

'use server'
 
import { revalidateTag } from 'next/cache'
 
export async function createPost() {
  // Invalidate all data tagged with 'posts' in the cache
  revalidateTag('posts')
}`;
export const exampleContent12 = '#### 处理未捕获的异常';
export const exampleContent13 = '如果在尝试重新验证数据时抛出错误，则上次成功生成的数据将继续从缓存中提供。在下一个后续请求中，Next.js 将重试重新验证数据。详细了解错误处理。';
export const exampleContent14 = '#### 自定义缓存位置';
export const exampleContent15 = '缓存和重新验证页面（使用增量静态再生）使用相同的共享缓存。部署到 Vercel 时，ISR 缓存会自动保存到持久存储中。';
export const exampleContent16 = '自托管时，ISR 缓存将存储到 Next.js 服务器上的文件系统（磁盘上）。当使用 Pages 和 App Router 进行自托管时，此功能会自动运行。';
export const exampleContent17 = '如果要将缓存的页面和数据保存到持久存储中，或者在 Next.js 应用程序的多个容器或实例之间共享缓存，则可以配置 Next.js 缓存位置。了解详情。';
export const troubleshootingTitle = '### 故障排除';
export const troubleshootingContent1 = '#### 在本地开发中调试缓存数据';
export const troubleshootingContent2 = '如果您使用的是 fetch API，则可以添加额外的日志记录以了解哪些请求已缓存或未缓存。详细了解logging记录选项。';
export const troubleshootingContent2Code = `~~~next.config.js~~~

module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}`;
export const troubleshootingContent3 = '#### 验证正确的生产行为';
export const troubleshootingContent4 = '要验证您的页面在生产中是否被正确缓存和重新验证，您可以通过运行 next build 然后运行 ​​next start 来在本地进行测试以运行生产 Next.js 服务器。';
export const troubleshootingContent5 = '这将允许您测试 ISR 行为，就像它在生产环境中一样。如需进一步调试，请将以下环境变量添加到您的 .env 文件中：';
export const troubleshootingContent5Code = `~~~.env~~~

NEXT_PRIVATE_DEBUG_CACHE=1`;
export const troubleshootingContent6 = '这将使 Next.js 服务器控制台记录 ISR 缓存命中和未命中。您可以检查输出以查看在下一次构建期间生成了哪些页面，以及在按需访问路径时页面如何更新。';
export const caveatsTitle = '### 注意事项';
export const caveatsContentList = [
    '仅在使用 Node.js 运行时（默认）时支持 ISR。',
    '创建静态导出时不支持 ISR。',
    '如果静态渲染路由中有多个fetch请求，并且每个请求的重新验证频率不同，则 ISR 将使用时间最短的那个。不过，数据缓存仍会遵循这些重新验证频率。',
    '如果路由上使用的任何fetch请求的重新验证时间为 0，或明确no-store，则路由将被动态呈现。',
    '中间件不会针对按需 ISR 请求执行，这意味着中间件中的任何路径重写或逻辑都不会应用。请确保重新验证准确的路径。例如，/post/1，而不是重写的 /post-1。',
];
export const caveatsContent1 = '## 版本历史记录';
export const caveatsContentTable = [
    {version: 'v14.1.0', changes: '自定义cacheHandler比较稳定。'},
    {version: 'v13.0.0', changes: '引入了 App Router。'},
    {version: 'v12.2.0', changes: 'Pages Router：按需 ISR 稳定'},
    {version: 'v12.0.0', changes: '页面路由器：添加了机器人感知 ISR 回退。'},
    {version: 'v9.5.0', changes: '页面路由器：引入稳定的 ISR。'},
];
