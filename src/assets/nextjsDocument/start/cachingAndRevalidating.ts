import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# 缓存和重新验证'
export const descriptions1 = '缓存是一种存储获取的数据和其他计算结果的技术，以便将来对相同数据的请求能够更快地得到处理，而无需重复执行这些操作。而重新验证则允许您更新缓存条目，而无需重建整个应用程序。';
export const descriptions2 = 'Next.js 提供了一些 API 来处理缓存和重新验证。本指南将指导您何时以及如何使用它们。';
export const descriptions2List = [
    '[fetch](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#fetch)',
    '[unstable_cache](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#unstable_cache)',
    '[revalidatePath](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatepath)',
    '[revalidateTag](https://nextjs.org/docs/app/getting-started/caching-and-revalidating#revalidatetag)'
];
export const fetchTitle = '## fetch';
export const fetchContent1 = '默认情况下，fetch不会被缓存。您可以通过将缓存选项设置为“force-cache”来缓存单个请求。';
export const fetchContent1Code = `~~~app/page.tsx~~~
export default async function Page() {
  const data = await fetch('https://...', { cache: 'force-cache' })
}`;
export const fetchContent1GTK = '虽然默认情况下不缓存fetch请求，但 Next.js 会预渲染包含fetch请求的路由并缓存 HTML。如果要保证路由是动态的，请使用connect API。';
export const fetchContent2 = '要revalidation fetch请求返回的数据，可以使用 next.revalidate 选项。';
export const fetchContent2Code = `~~~app/page.tsx~~~
export default async function Page() {
  const data = await fetch('https://...', { next: { revalidate: 3600 } })
}`;
export const fetchContent3 = '这将在指定的秒数后重新验证数据。';
export const fetchContent4 = '请参阅 fetch API 以了解更多信息。';

export const unstableCacheTitle = '## unstable_cache';
export const unstableCacheContent1 = 'unstable_cache 允许你缓存database查询和其他async函数的结果。要使用它，请将 Unstable_cache 包装在该函数中。例如：';
export const unstableCacheContent1Code = `~~~
export async function getUserById(id: string) {
    return db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .then((res) => res[0])
}`

export const unstableCacheContent2Code = `~~~app/page.tsx~~~
import { unstable_cache } from 'next/cache'
import { getUserById } from '@/app/lib/data'
 
export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params
 
  const getCachedUser = unstable_cache(
    async () => {
      return getUserById(userId)
    },
    [userId] // add the user ID to the cache key
  )
}`;
export const unstableCacheContent3 = '该函数接受第三个可选对象来定义如何重新验证缓存。它接受以下参数：'
export const unstableCacheContent3List = [
    'tags：Next.js 用于重新验证缓存的标签数组。',
    'revalidate：重新验证缓存后应等待的秒数。'
]
export const unstableCacheContent3Code = `~~~app/page.tsx~~~
const getCachedUser = unstable_cache(
  async () => {
    return getUserById(userId)
  },
  [userId],
  {
    tags: ['user'],
    revalidate: 3600,
  }
)`;
export const unstableCacheContent4 = '请参阅unstable_cache API 了解更多信息。';


export const revalidateTagTitle = '## revalidateTag';
export const revalidateTagContent1 = 'revalidateTag 用于根据标签和事件重新验证缓存条目。要将其与 fetch 一起使用，请先使用 next.tags 选项标记该函数：';
export const revalidateTagContent1Code = `~~~app/lib/data.ts~~~
export async function getUserById(id: string) {
  const data = await fetch(\`https://...\`, {
    next: {
      tags: ['user'],
    },
  })
}`;
export const revalidateTagContent2 = '或者，您可以使用 tags 选项标记一个unstable_cache 函数：';
export const revalidateTagContent2Code = `~~~app/lib/data.ts~~~
export const getUserById = unstable_cache(
  async (id: string) => {
    return db.query.users.findFirst({ where: eq(users.id, id) })
  },
  ['user'], // Needed if variables are not passed as parameters
  {
    tags: ['user'],
  }
)`;
export const revalidateTagContent3 = '然后，在Route Handler或Server action中调用 revalidateTag：';
export const revalidateTagContent3Code = `~~~app/lib/actions.ts~~~
import { revalidateTag } from 'next/cache'
 
export async function updateUser(id: string) {
  // Mutate data
  revalidateTag('user')
}`;
export const revalidateTagContent4 = '您可以在多个函数中重复使用相同的标签，以便一次性重新验证它们。';
export const revalidateTagContent5 = '请参阅 revalidateTag API 以了解更多信息。';

export const revalidatePathTitle = '## revalidatePath';
export const revalidatePathContent1 = 'revalidatePath 用于在事件之后重新验证路由。要使用它，请在Route Handler或Server action中调用它：'
export const revalidatePathContent1Code = `~~~app/lib/actions.ts~~~
import { revalidatePath } from 'next/cache'
 
export async function updateUser(id: string) {
  // Mutate data
  revalidatePath('/profile')`;
export const revalidatePathContent2 = '请参阅 revalidatePath API 以了解更多信息。';

export const ApiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'fetch',
        content: 'API reference for the extended fetch function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/fetch'
    },
    {
        title: 'unstable_cache',
        content: 'API Reference for the unstable_cache function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/unstable_cache'
    },
    {
        title: 'revalidatePath',
        content: 'API Reference for the revalidatePath function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath'
    },
    {
        title: 'revalidateTag',
        content: 'API Reference for the revalidateTag function.',
        url: 'https://nextjs.org/docs/app/api-reference/functions/revalidateTag'
    }
];
