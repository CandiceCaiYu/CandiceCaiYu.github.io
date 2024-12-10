export const title = '# 部分预渲染（实验）';
export const content1TipsTitle = '注意:';
export const content1TipsText = '部分预渲染是一项实验性功能，仅在 Canary 上可用，可能会发生变化。它尚未准备好用于生产。';
export const content2 = '部分预渲染 (PPR) 使您能够在同一路由中将静态和动态组件组合在一起。';
export const content3 = '在构建过程中，Next.js 会尽可能多地预渲染路由。如果检测到动态代码（例如从传入请求中读取），您可以使用 React Suspense 边界包裹相关组件。然后，Suspense 边界回退将包含在预渲染的 HTML 中。';
export const content3Img = '![thinking-in-ppr](/nextjsDoc/buildingYourApplication/rendering/thinking-in-ppr.avif)';
export const content3TipsTitle = '🎥 观看';
export const content3TipsText = '为什么要使用 PPR 以及它如何工作 → YouTube（10 分钟）。';

export const backgroundTitle = '## 背景';
export const backgroundContent1 = 'PPR 使您的 Next.js 服务器能够立即发送预渲染的内容。';
export const backgroundContent2 = '为了防止客户端到服务器的瀑布流，动态组件在提供初始预渲染的同时开始从服务器并行流式传输。这确保了动态组件可以在浏览器中加载客户端 JavaScript 之前开始渲染。';
export const backgroundContent3 = '为了避免为每个动态组件创建许多 HTTP 请求，PPR 能够将静态预渲染和动态组件合并为一个 HTTP 请求。这确保每个动态组件不需要多次网络往返。';

export const usePartialPrerenderingTitle = '## 使用部分预渲染';
export const usePartialPrerenderingContent1 = '### 逐步采用（版本 15）';
export const usePartialPrerenderingContent2 = '在 Next.js 15 中，你可以通过将 next.config.js 中的 ppr 选项设置为增量，并在文件顶部导出 experiment_ppr 路由配置选项，在布局和页面中逐步采用部分预渲染：';
export const usePartialPrerenderingContent2Code1 = `~~~next.config.ts

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
}
 
export default nextConfig`;
export const usePartialPrerenderingContent2Code2 = `~~~app/page.tsx


import { Suspense } from "react"
import { StaticComponent, DynamicComponent, Fallback } from "@/app/ui"
 
export const experimental_ppr = true
 
export default function Page() {
  return {
     <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
     </>
  };
}`;
export const usePartialPrerenderingContent2TipsList = [
    '没有experimental_ppr的路由将默认为false，并且不会使用PPR进行预渲染。您需要明确选择每个路由的PPR。',
    'experimental_ppr将应用于路由段的所有子段，包括嵌套布局和页面。您不必将其添加到每个文件，只需添加到路由的顶部段即可。',
    '要禁用子段的PPR，您可以在子段中将experimental_ppr设置为false。'
];
export const dynamicComponentsTitle = '## 动态组件';
export const dynamicComponentsContent1 = '在next build为路由创建预渲染时，Next.js 要求使用 React Suspense 包装动态 API。然后将回退包含在预渲染中。';
export const dynamicComponentsContent2 = '例如，使用 cookies 或 headers 之类的功能：';
export const dynamicComponentsContent2Code = `~~~app/user.tsx

import { cookies } from 'next/headers'
 
export async function User() {
  const session = (await cookies()).get('session')?.value
  return '...'
}`;
export const dynamicComponentsContent3 = '此组件需要查看传入的请求以读取 cookie。要将其与 PPR 一起使用，您应该使用 Suspense 包装该组件：';
export const dynamicComponentsContent3Code = `~~~app/page.tsx

import { Suspense } from 'react'
import { User, AvatarSkeleton } from './user'
 
export const experimental_ppr = true
 
export default function Page() {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Suspense fallback={<AvatarSkeleton />}>
        <User />
      </Suspense>
    </section>
  )
}`;
export const dynamicComponentsContent4 = '仅当访问值时，组件才会选择动态渲染。';
export const dynamicComponentsContent5 = '例如，如果你正在从页面读取searchParams，则可以将该值作为prop转发到另一个组件：';
export const dynamicComponentsContent5Code = `~~~app/page.tsx

import { Table } from './table'
 
export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ sort: string }>
}) {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Table searchParams={searchParams} />
    </section>
  )
}`;
export const dynamicComponentsContent6 = '在表组件内部，访问 searchParams 的值将使组件动态运行：';
export const dynamicComponentsContent6Code = `~~~app/table.tsx

export async function Table({
  searchParams,
}: {
  searchParams: Promise<{ sort: string }>
}) {
  const sort = (await searchParams).sort === 'true'
  return '...'
}`;
