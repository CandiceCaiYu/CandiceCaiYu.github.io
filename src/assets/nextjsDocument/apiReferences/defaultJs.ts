import {CustomTableProps} from "@/app/nextjs-docs/components/SectionWithTable";
import {CustomApiReferenceCardProps} from "@/app/nextjs-docs/components/CustomApiReferenceCard";

export const title = '# default.js'
export const defaultJsContent1 = '当 Next.js 在完整页面加载后无法恢复[插槽](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes#slots)的活动状态时，default.js 文件用于在[并行路由](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes)中呈现fallback。'
export const defaultJsContent2 = '在软导航期间，Next.js 会跟踪每个槽位的活动状态（子页面）。但是，对于硬导航（整页加载），Next.js 无法恢复活动状态。在这种情况下，系统会为与当前 URL 不匹配的子页面渲染 default.js 文件。'
export const defaultJsContent3 = '请考虑以下文件夹结构。@team 槽位有一个setting页面，但 @analytics 没有。'
export const defaultJsContent3Img = '![parallel-routes-unmatched-routes](/nextjsDoc/fileSystemConventions/parallel-routes-unmatched-routes.avif)'
export const defaultJsContent4 = '当导航到 /settings 时，@team 插槽将呈现setting页面，同时维护 @analytics 插槽的当前活动page。'
export const defaultJsContent5 = '刷新时，Next.js 将为 @analytics 渲染 default.js 文件。如果 default.js 不存在，则会渲染 404 错误。'
export const defaultJsContent6 = '此外，由于 children 是一个隐式插槽，因此当 Next.js 无法恢复父页面的活动状态时，您还需要创建一个 default.js 文件来为子页面提供fallback。'

export const defaultJsContent7 = '## 参考'
export const defaultJsContent8 = '### params（可选）'
export const defaultJsContent9 = '一个 Promise，解析为一个对象，其中包含从根段到slot子页面的动态路由参数。例如：'
export const defaultJsContent9Code = `~~~app/[artist]/@sidebar/default.js~~~
export default async function Default({
  params,
}: {
  params: Promise<{ artist: string }>
}) {
  const { artist } = await params
}`
export const defaultJsContent9Table: CustomTableProps = {
    columns: [
        {title: '示例', key: 'example', dataIndex: 'example'},
        {title: 'url', key: 'url', dataIndex: 'url'},
        {title: 'params', key: 'params', dataIndex: 'params'}
    ],
    dataSource: [
        {
            example: 'app/[artist]/@sidebar/default.js',
            url: '/zack',
            params: "Promise<{ artist: 'zack' }>"
        },
        {
            example: 'app/[artist]/[album]/@sidebar/default.js',
            url: '/zack/next',
            params: "Promise<{ artist: 'zack', album: 'next' }>"
        }
    ]
}
export const defaultJsContent9List = [
    '由于 params 属性是一个 Promise，因此您必须使用 async/await 或 React 的 use 函数来访问其值。',
    ['在 14 及更早版本中，params 是一个同步属性。为了实现向后兼容，您仍然可以在 Next.js 15 中以同步方式访问它，但此行为将来会被弃用。']
]

export const apiReferences: CustomApiReferenceCardProps[] = [
    {
        title: 'Parallel Routes',
        content: '在同一视图中同时渲染一个或多个可独立导航的页面。这是一种适用于高度动态应用程序的模式。',
        url: 'https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes'
    }
]
