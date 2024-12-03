export const title = '# 数据获取和缓存';
export const subTitle = '#### 示例';
export const content1List = [
    "Next.js Commerce",
    "On-Demand ISR",
    "Next.js Forms",
];
export const content2 = "本指南将引导您了解 Next.js 中数据提取和缓存的基础知识，并提供实际示例和最佳实践。";
export const content3 = "以下是 Next.js 中数据提取的一个简单示例：";
export const content3Code = `~~~app/page.tsx

export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const content4 = "此示例演示了使用异步 React 服务器组件中的fetch API 进行基本的服务器端数据获取。";
export const referenceTitle = "## 参考";
export const referenceContent1List = [
    "fetch" ,
    "React cache" ,
    "Next.js unstable_cache"
]
export const exampleTitle = "## 示例";
export const exampleContent1 = "### 使用 fetch API 获取服务器上的数据";
export const exampleContent1Code = content3Code;
export const exampleContent2 = "如果你没有在此路由的其他地方使用动态 API，则它将在下次构建时预渲染为静态页面。然后可以使用增量静态再生来更新数据。";
export const exampleContent3 = "为了防止页面预渲染，您可以将以下内容添加到文件中：";
export const exampleContent3Code = `~~~export const dynamic = 'force-dynamic'`;
export const exampleContent4 = "但是，您通常会使用 cookies、headers 或从页面 props 中读取传入的 searchParams 等函数，这些函数会自动使页面动态呈现。在这种情况下，您不需要明确使用 force-dynamic。";
export const exampleContent5 = "### 使用 ORM 或数据库从服务器上获取数据";
export const exampleContent6 = "此组件将获取并显示博客文章列表。默认情况下不会缓存来自数据库的响应，但可以通过其他配置进行缓存。";
export const exampleContent6Code = `~~~app/page.tsx

import { db, posts } from '@/lib/db'
 
export default async function Page() {
  let allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const exampleContent7 = exampleContent2;
export const exampleContent8 = exampleContent3;
export const exampleContent9 = exampleContent3Code;
export const exampleContent10 = exampleContent4;
export const exampleContent11= "### 在客户端获取数据";
export const exampleContent12 = "我们建议首先尝试在服务器端获取数据。";
export const exampleContent13 = "不过，在某些情况下，客户端数据获取还是有意义的。在这些情况下，您可以在 useEffect 中手动调用 fetch（不推荐），或者依靠社区中流行的 React 库（例如 SWR 或 React Query）进行客户端获取。";
export const exampleContent13Code = `~~~app/page.tsx

'use client'
 
import { useState, useEffect } from 'react'
 
export function Posts() {
  const [posts, setPosts] = useState(null)
 
  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('https://api.vercel.app/blog')
      let data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
 
  if (!posts) return <div>Loading...</div>
 
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const exampleContent14 = "### 使用 ORM 或数据库缓存数据";
export const exampleContent15 = "您可以使用 stable_cache API 来缓存response，以允许在运行下一个构建时预渲染页面。";
export const exampleContent15Code = `~~~app/page.tsx

import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'
 
const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)
 
export default async function Page() {
  const allPosts = await getPosts()
 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`;
export const exampleContent16 = "此示例将数据库查询的结果缓存 1 小时（3600 秒）。它还添加了缓存标记帖子，然后可以使用增量静态再生使其失效。";
export const exampleContent17 = "### 在多个函数中重复使用数据";
export const exampleContent18 = "Next.js 使用 generateMetadata 和 generateStaticParams 等 API，您需要使用在页面中获取的相同数据。";
export const exampleContent19 = "如果您使用 fetch，可以通过添加 cache: 'force-cache' 来记忆请求。这意味着您可以安全地使用相同的选项调用相同的 URL，并且只会发出一个请求。";
export const exampleContent19Tips =  [
    "在 Next.js 的早期版本中，使用 fetch 时，默认缓存值为 force-cache。在版本 15 中，该值已更改为默认的 cache: no-store。"
];
export const exampleContent19Code = `~~~app/page.tsx

import { notFound } from 'next/navigation'
 
interface Post {
  id: string
  title: string
  content: string
}
 
async function getPost(id: string) {
  let res = await fetch(\`https://api.vercel.app/blog/\${id}\`, {
    cache: 'force-cache',
  })
  let post: Post = await res.json()
  if (!post) notFound()
  return post
}
 
export async function generateStaticParams() {
  let posts = await fetch('https://api.vercel.app/blog', {
    cache: 'force-cache',
  }).then((res) => res.json())
 
  return posts.map((post: Post) => ({
    id: post.id,
  }))
}
 
export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getPost(params.id)
 
  return {
    title: post.title,
  }
}
 
export default async function Page({ params }: { params: { id: string } }) {
  let post = await getPost(params.id)
 
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`;
export const exampleContent20 = "如果你不使用 fetch，而是直接使用 ORM 或数据库，你可以使用 React 缓存功能包装数据提取。这将删除重复数据并仅进行一次查询。";
export const exampleContent20Code = `~~~
import { cache } from 'react'
import { db, posts, eq } from '@/lib/db' // Example with Drizzle ORM
import { notFound } from 'next/navigation'
 
export const getPost = cache(async (id) => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, parseInt(id)),
  })
 
  if (!post) notFound()
  return post
})`;
export const exampleContent21 = "### 重新验证缓存数据";
export const exampleContent22 = "了解有关使用增量静态再生重新验证缓存数据的更多信息。";
export const exampleContent23 = "## 模式";
export const exampleContent24 = "### 并行和顺序数据获取";
export const exampleContent25 = "在组件内部获取数据时，您需要了解两种数据获取模式：并行和顺序。";
export const exampleContent25Img = "![sequential-parallel-data-fetching](/nextjsDoc/buildingYourApplication/dataFetching/sequential-parallel-data-fetching.avif)";
export const exampleContent25List = [
"顺序性：组件树中的请求相互依赖。这可能会导致更长的加载时间。",
    "并行：路由中的请求会立即发起，并同时加载数据。这减少了加载数据所需的总时间。"
];
export const exampleContent26 = "#### 顺序数据获取";
export const exampleContent27 = "如果您有嵌套组件，并且每个组件都自己获取数据，那么如果这些数据请求没有被记忆，数据获取将按顺序进行。";
export const exampleContent28 = "在某些情况下，您可能需要这种模式，因为一个请求取决于另一个请求的结果。例如，播放列表组件仅在 Artist 组件完成请求数据后才开始请求，因为播放列表依赖于 artistID 属性：";
export const exampleContent28Code = `~~~app/artist/[username]/page.tsx

export default async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
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
export const exampleContent29 = "您可以使用 loading.js (用于路线段) 或 React <Suspense> (用于嵌套组件) 来显示即时加载状态，同时 React 在结果中流式传输。";
export const exampleContent30 = "这样可以避免整个路线被数据请求阻塞，用户将能够与页面中已经准备好的部分进行交互。";
export const exampleContent31 = "#### 并行数据获取";
export const exampleContent32 = "默认情况下，布局和页面片段是并行渲染的。这意味着请求将并行发起。";
export const exampleContent33 = "但是，由于 async/await 的性质，同一个段或组件内等待的请求将阻止其下方的任何请求。";
export const exampleContent34 = "要并行获取数据，您可以通过在使用数据的组件之外定义请求来立即发起请求。通过并行发起两个请求可以节省时间，但是，在两个promise请求都resolved之前，用户不会看到渲染结果。";
export const exampleContent34Text = "在下面的示例中，getArtist 和 getAlbums 函数在 Page 组件外部定义，并在组件内部使用 Promise.all 启动：";
export const exampleContent34Code = `~~~app/artist/[username]/page.tsx

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
  params: { username },
}: {
  params: { username: string }
}) {
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
}`;
export const exampleContent35 = "此外，您可以添加 Suspense Boundary 来分解渲染工作并尽快显示部分结果。";
export const exampleContent36 = "### 预加载数据";
export const exampleContent37 = "另一种防止瀑布流的方法是使用预加载模式，即创建一个实用函数，在阻塞请求之前立即调用该函数。例如，checkIsAvailable() 会阻止 <Item/> 渲染，因此您可以在它之前调用 preload() 以立即启动 <Item/> 数据依赖项。在渲染 <Item/> 时，其数据已被提取。";
export const exampleContent38 = "请注意，预加载功能不会阻止 checkIsAvailable() 运行。";
export const exampleContent38Code1 = `~~~components/Item.tsx

import { getItem } from '@/utils/get-item'
 
export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id)
}
export default async function Item({ id }: { id: string }) {
  const result = await getItem(id)
  // ...
}`;
export const exampleContent38Code2 = `~~~app/item/[id]/page.tsx

import Item, { preload, checkIsAvailable } from '@/components/Item'
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  // starting loading item data
  preload(id)
  // perform another asynchronous task
  const isAvailable = await checkIsAvailable()
 
  return isAvailable ? <Item id={id} /> : null
}`;
export const exampleContent38Tips = "'preload'函数也可以任意命名，因为它是一种模式，而不是 API。";
export const exampleContent39 = "#### 使用 React 缓存和服务器预加载模式";
export const exampleContent40 = "您可以结合cache、预加载模式和仅限服务器的包来创建可在整个应用程序中使用的数据请求实用程序。";
export const exampleContent41Code = `~~~utils/get-item.ts

import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void getItem(id)
}
 
export const getItem = cache(async (id: string) => {
  // ...
})`;
export const exampleContent42 = "通过这种方法，您可以立即获取数据，缓存响应，并保证此数据获取仅发生在服务器上。";
export const exampleContent43 = "布局、页面或其他组件可以使用 utils/get-item 导出，来控制何时获取项目的数据。";
export const exampleContent43Tips = ["我们建议使用server-only的包，以确保客户端永远不会使用服务器数据获取功能。"];
export const exampleContent44 = "### 防止敏感数据暴露给客户端";
export const exampleContent45 = "我们建议使用 React 的污点 API、taintObjectReference 和 taintUniqueValue，以防止整个对象实例或敏感值被传递给客户端。";
export const exampleContent46 = "要在应用程序中启用污染，请将 Next.js Config 的 experiments.taint 选项设置为 true：";
export const exampleContent46Code = `~~~next.config.js

module.exports = {
  experimental: {
    taint: true,
  },
}`;
export const exampleContent47 = "然后将您想要污染的对象或值传递给experimental_taintObjectReference或experimental_taintUniqueValue函数：";
export const exampleContent47Code1 = `~~~app/utils.ts

import { queryDataFromDB } from './api'
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from 'react'
 
export async function getUserData() {
  const data = await queryDataFromDB()
  experimental_taintObjectReference(
    'Do not pass the whole user object to the client',
    data
  )
  experimental_taintUniqueValue(
    "Do not pass the user's address to the client",
    data,
    data.address
  )
  return data
}`;
export const exampleContent47Code2 = `~~~app/page.tsx

import { getUserData } from './data'
 
export async function Page() {
  const userData = getUserData()
  return (
    <ClientComponent
      user={userData} // this will cause an error because of taintObjectReference
      address={userData.address} // this will cause an error because of taintUniqueValue
    />
  )
}`;
