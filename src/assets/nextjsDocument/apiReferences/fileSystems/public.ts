export const publicFolderContent1 = '# public 文件夹'
export const publicFolderContent2 = 'Next.js 可以在根目录中的 public 的文件夹下提供静态文件（例如图像）。您的代码可以从基本 URL (/) 开始引用 public 文件夹中的文件。'
export const publicFolderContent2Code = `~~~avatar.js~~~
import Image from 'next/image'
 
export function Avatar({ id, alt }) {
  return <Image src={\`/avatars/\${id}.png\`} alt={alt} width="64" height="64" />
}
 
export function AvatarOfMe() {
  return <Avatar id="me" alt="A portrait of me" />
}`

export const publicFolderContent3 = '## 缓存'
export const publicFolderContent4 = 'Next.js 无法安全地将资源缓存在public文件夹中，因为它们可能会更改。默认应用的缓存标头如下：'
export const publicFolderContent5Code = `~~~Cache-Control: public, max-age=0`
export const publicFolderContent6 = '## Robots, Favicons, and others'
export const publicFolderContent7 = '对于静态元数据文件，例如 robots.txt、favicon.ico 等，您应该使用app文件夹内的[特殊元数据文件](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)。'
