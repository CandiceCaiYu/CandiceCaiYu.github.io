import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 获取数据'
export const introduction = '本页将引导您了解如何在服务器组件和客户端组件中获取数据，以及如何流式传输依赖于数据的组件。'

export const fetchingDataTitle = '### 获取数据'
export const fetchingDataContent1 = '### 在服务器组件'
export const fetchingDataContent2 = '您可以使用以下方式获取服务器组件中的数据：'
export const fetchingDataContent2List = [
    'The [fetch](https://nextjs.org/docs/app/getting-started/fetching-data#with-the-fetch-api) API',
    'An [ORM or database](https://nextjs.org/docs/app/getting-started/fetching-data#with-an-orm-or-database)'
];
export const fetchingDataContent3 = '#### 使用 fetch API';
export const fetchingDataContent4 = '要使用 fetch API 获取数据，请将组件转换为异步函数，并等待 fetch 调用。例如：';
export const fetchingDataContent4Code = `~~~app/blog/page.tsx~~~
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const fetchingDataContent4GTK = [
    '默认情况下，fetch 响应不会被缓存。不过，Next.js 会预渲染路由，并将输出缓存以提高性能。如果您想启用动态渲染，请使用 { cache: \'no-store\' } 选项。请参阅 fetch API 参考。',
    '在开发过程中，您可以记录 fetch 调用，以便更好地查看和调试。请参阅日志记录 API 参考。'
];
export const fetchingDataContent5 = '#### 使用 ORM 或数据库';
export const fetchingDataContent6 = '由于服务器组件在服务器上渲染，因此您可以安全地使用 ORM 或数据库客户端进行数据库查询。将组件转换为异步函数，并等待调用：';
export const fetchingDataContent6Code = `~~~app/blog/page.tsx~~~
import { db, posts } from '@/lib/db'
 
export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const fetchingDataContent7 = '### 客户端组件';
export const fetchingDataContent8 = '有两种方法可以在客户端组件中获取数据：';
export const fetchingDataContent8List = [
    'React use 钩子',
    '像 SWR 或 React Query 这样的社区库'
];
export const fetchingDataContent9 = '#### 使用 use hook 进行流式传输数据';
export const fetchingDataContent10 = '你可以使用 React 的 use hook 将数据从服务器传输到客户端。首先在服务器组件中获取数据，然后将 promise 作为 prop 传递给客户端组件：';
export const fetchingDataContent10Code = `~~~app/blog/page.tsx~~~
import Posts from '@/app/ui/posts'
import { Suspense } from 'react'
 
export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}`;
export const fetchingDataContent11 = '然后，在您的客户端组件中，使用use钩子来读取promise：';
export const fetchingDataContent11Code = `~~~app/ui/posts.tsx~~~
'use client'
import { use } from 'react'

export default function Posts({
                                  posts,
                              }: {
    posts: Promise<{ id: string; title: string }[]>
}) {
    const allPosts = use(posts)

    return (
        <ul>
            {allPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
        </ul>
    )
};`
export const fetchingDataContent12 = '在上面的示例中， <Posts> 组件被包裹在 <Suspense> 边界中。这意味着在 Promise 被解析的过程中，fallback里的loading将会被显示。了解更多关于流式传输的信息。';
export const fetchingDataContent13 = '#### 社区库';
export const fetchingDataContent14 = '您可以使用 SWR 或 React Query 等社区库来获取客户端组件中的数据。这些库针对缓存、流式传输和其他功能拥有各自的语义。例如，使用 SWR：';
export const fetchingDataContent14Code = `~~~app/ui/posts.tsx~~~
'use client'
import useSWR from 'swr'
 
const fetcher = (url) => fetch(url).then((r) => r.json())
 
export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
 
  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;


export const deduplicateRequestsAndCacheDataTitle = ' ## 去重请求和缓存数据';
export const deduplicateRequestsAndCacheDataContent1 = '删除重复 fetch 请求的一种方法是使用[请求记忆化](https://nextjs.org/docs/app/guides/caching#request-memoization)(memoization)。使用此机制，在单个渲染过程中，使用 GET 或 HEAD 调用且 URL 和options相同的 fetch 调用会被合并为一个请求。此操作会自动执行，您也可以通过向 fetch 传递 Abort 信号来选择退出。';
export const deduplicateRequestsAndCacheDataContent2 = '请求记忆的范围限定在请求的生命周期内。';
export const deduplicateRequestsAndCacheDataContent3 = '您还可以使用 Next.js 的[Data Cache](https://nextjs.org/docs/app/guides/caching#data-cache)来删除重复的获取请求，例如在fetch选项中设置 cache: \'force-cache\'。';
export const deduplicateRequestsAndCacheDataContent4 = 'Data Cache允许在当前渲染过程和传入请求之间共享数据。';
export const deduplicateRequestsAndCacheDataContent5 = '如果您不使用 fetch，而是直接使用 ORM 或数据库，则可以使用 React 缓存功能包装数据访问。';
export const deduplicateRequestsAndCacheDataContent5Code = `~~~app/lib/data.ts~~~
import { cache } from 'react'
import { db, posts, eq } from '@/lib/db'
 
export const getPost = cache(async (id: string) => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, parseInt(id)),
  })
})`

export const streamingTitle = '## Streaming';
export const streamingContentWarning = '以下内容假定您的应用程序中已启用 cacheComponents 配置选项。该flag是在 Next.js 15 canary 版本中引入的。';
export const streamingContent1 = '在服务器组件中使用 async/await 时，Next.js 将启用动态渲染。这意味着每次用户请求时，数据都会在服务器上获取并渲染。如果有任何缓慢的数据请求，整个路由将被阻止渲染。';
export const streamingContent2 = '为了改善初始加载时间和用户体验，您可以使用流式传输将页面的 HTML 分解为更小的块，并逐步将这些块从服务器发送到客户端。';
export const streamingContent2Img = '![server-rendering-with-streaming](/nextjsDoc/fetchingData/server-rendering-with-streaming.avif)';
export const streamingContent3 = '您可以通过两种方式在应用程序中实现流式传输：';
export const streamingContent3List = [
    '使用loading.js包装页面',
    '使用<Suspense>包装组件'
];
export const streamingContent4 = '### 使用loading.js';
export const streamingContent5 = '您可以在页面所在的文件夹中创建一个loading.js文件，以便在数据获取过程中流式传输整个页面。例如，要流式传输app/blog/page.js，请将loading.js文件添加到app/blog文件夹中。';
export const streamingContent6Img = '![loading-file](/nextjsDoc/fetchingData/loading-file.avif)';
export const streamingContent6Code = `~~~app/blog/loading.js~~~
export default function Loading() {
  // Define the Loading UI here
  return <div>Loading...</div>
}`;
export const streamingContent7 = '导航时，用户将立即看到页面渲染时的layout和loading状态。渲染完成后，新内容将自动替换。';
export const streamingContent7Img = '![loading-ui](/nextjsDoc/fetchingData/loading-ui.avif)';
export const streamingContent8 = '在后台，loading.js 将嵌套在 layout.js 中，并自动将 page.js 及其下面的任何子文件包装在 <Suspense> 边界中。';
export const streamingContent8Img = '![loading-overview](/nextjsDoc/fetchingData/loading-overview.avif)';
export const streamingContent9 = '这种方法适用于route段（布局和页面），但对于更细粒度的流式传输，您可以使用 <Suspense>。';
export const streamingContent10 = '### 使用<Suspense>';
export const streamingContent11 = '<Suspense> 功能让您可以更精细地控制要流式传输的页面部分内容。例如，您可以立即显示 <Suspense> 边界之外的任何页面内容，并流式传输边界内的博客文章列表。';
export const streamingContent12Code = `~~~app/blog/page.js~~~
import { Suspense } from 'react'
import BlogList from '@/components/BlogList'
import BlogListSkeleton from '@/components/BlogListSkeleton'
 
export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  )
}`;
export const streamingContent13 = '### 创建有意义的加载状态';
export const streamingContent14 = '即时加载状态是指导航结束后立即向用户显示的后备界面(fallback ui)。为了获得最佳用户体验，我们建议设计一些有意义的加载状态，帮助用户了解应用正在响应。例如，您可以使用骨架和旋转图标，或者在后续页面中插入一些虽小但有意义的元素，例如封面照片、标题等。';
export const streamingContent15 = '在开发中，您可以使用 [React Devtools](https://react.dev/learn/react-developer-tools) 预览和检查组件的加载状态。';

export const exampleTitle = '## 示例';
export const exampleContent1 = '### 顺序数据获取';
export const exampleContent2 = '当树中的嵌套组件各自获取自己的数据并且请求不会被重复数据删除时，就会发生顺序数据获取，从而导致更长的响应时间。';
export const exampleContent3Img = '![sequential-parallel-data-fetching](/nextjsDoc/fetchingData/sequential-parallel-data-fetching.avif)';
export const exampleContent4 = '在某些情况下，您可能需要这种模式，因为一次fetch取决于另一次fetch的结果。';
export const exampleContent5 = '例如，<Playlists> 组件仅在 <Artist> 组件完成数据fetch后才会开始fetch数据，因为 <Playlists> 依赖于 artistID 属性：';
export const exampleContent5Code = `~~~app/artist/[username]/page.js~~~
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  // Get artist information
  const artist = await getArtist(username)
 
  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  )
}
 
async function Playlists({ artistID }: { artistID: string }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID)
 
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}`;
export const exampleContent6 = '为了提升用户体验，你应该使用 React <Suspense> 在数据获取过程中显示fallback ui。这将启用流式传输，并防止整个路由被连续的数据请求阻塞。';
export const exampleContent7 = '### 并行数据获取';
export const exampleContent8 = '当路由中的数据请求被急切地发起并同时开始时，就会发生并行数据获取。';
export const exampleContent9 = '默认情况下，layout和page是并行渲染的。因此每个段都会尽快开始获取数据。';
export const exampleContent10 = '但是，在任何组件中，多个 async/await 请求即使放在一起，仍然可以是连续的。例如，getAlbums 请求将被阻塞，直到 getArtist 请求被解析：';
export const exampleContent10Code = `~~~app/artist/[username]/page.js~~~
import { getArtist, getAlbums } from '@/app/lib/data'
 
export default async function Page({ params }) {
  // These requests will be sequential
  const { username } = await params
  const artist = await getArtist(username)
  const albums = await getAlbums(username)
  return <div>{artist.name}</div>
}`;
export const exampleContent11 = '您可以通过在使用数据的组件外部定义请求，并行发起请求后一起解析它们，例如使用 Promise.all：';
export const exampleContent11Code = `~~~app/artist/[username]/page.js~~~
import Albums from './albums'
 
async function getArtist(username: string) {
  const res = await fetch(\`https://api.example.com/artist/\${username}\`)
  return res.json()
}
 
async function getAlbums(username: string) {
  const res = await fetch(\`https://api.example.com/artist/\${username}/albums\`)
  return res.json()
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  const artistData = getArtist(username)
  const albumsData = getAlbums(username)
 
  // Initiate both requests in parallel
  const [artist, albums] = await Promise.all([artistData, albumsData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  )
}`
export const exampleContent11GTK = '使用 Promise.all 时，如果一个请求失败，则整个操作都会失败。要处理这种情况，您可以改用 [Promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) 方法。';
export const exampleContent12 = '### 预加载数据';
export const exampleContent13 = '您可以通过创建一个实用函数来预加载数据，并在阻塞请求之前立即调用该函数。<Item> 会根据 checkIsAvailable() 函数进行有条件的渲染。';
export const exampleContent14 = '您可以在 checkIsAvailable() 之前调用 preload() 函数，以便立即启动 <Item/> 的数据依赖关系。当 <Item/> 渲染时，其数据已经获取完毕。';
export const exampleContent14Code = `~~~app/item/[id]/page.js~~~
import { getItem, checkIsAvailable } from '@/lib/data'
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // starting loading item data
  preload(id)
  // perform another asynchronous task
  const isAvailable = await checkIsAvailable()
 
  return isAvailable ? <Item id={id} /> : null
}
 
export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id)
}
export async function Item({ id }: { id: string }) {
  const result = await getItem(id)
  // ...
}`;
export const exampleContent15 = '此外，你可以使用 React 的缓存功能和 server-only 包来创建可复用的实用函数。这种方法可以缓存数据获取函数，并确保它仅在服务器上执行。';
export const exampleContent15Code = `~~~utils/get-item.ts~~~
import { cache } from 'react'
import 'server-only'
import { getItem } from '@/lib/data'
 
export const preload = (id: string) => {
  void getItem(id)
}
 
export const getItem = cache(async (id: string) => {
  // ...
})`;
export const APIReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'Data Security',
        content: 'Learn the built-in data security features in Next.js and learn best practices for protecting your application\'s data.',
        url: 'https://nextjs.org/docs/app/guides/data-security'
    },
    {
        title: 'fetch',
        content: 'API reference for the extended fetch function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/fetch'
    },
    {
        title: 'loading.js',
        content: 'API reference for the loading.js file.',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/loading'
    },
    {
        title: 'logging',
        content: 'Configure how data fetches are logged to the console when running Next.js in development mode.',
        url: 'https://nextjs.org/docs/app/api-reference/config/next-config-js/logging'
    },
    {
        title: 'taint',
        content: 'Enable tainting Objects and Values.',
        url: 'https://nextjs.org/docs/app/api-reference/config/next-config-js/taint'
    }
];
