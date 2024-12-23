export const videoOptimizationTitle = '# 视频优化';
export const videoOptimizationContent1 = '本页概述了如何在 Next.js 应用程序中使用视频，展示了如何在不影响性能的情况下存储和显示视频文件。';

export const videoOptimizationContent2 = '## 使用 <video> 和 <iframe>';
export const videoOptimizationContent3 = '可以使用 HTML <video> 标签将视频嵌入页面（对于直接视频文件）和 <iframe> 标签（对于外部平台托管的视频）。';
export const videoOptimizationContent4 = '### <video>';
export const videoOptimizationContent5 = 'HTML <video> 标签可以嵌入自托管或直接提供的视频内容，从而可以完全控制播放和外观。';
export const videoOptimizationContent5Code = `~~~app/ui/video.jsx~~~
export function Video() {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="/path/to/video.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}`;
export const videoOptimizationContent6 = '### 常见的 <video> 标签属性';
export const videoOptimizationContent6Table = [
    {
        attribute: 'src',
        description: '指定视频文件的来源。',
        exampleValue: '<video src="/path/to/video.mp4" />'
    },
    {attribute: 'width', description: '设置视频播放器的宽度。', exampleValue: '<video width="320" />'},
    {attribute: 'height', description: '设置视频播放器的高度。', exampleValue: '<video height="240" />'},
    {attribute: 'controls', description: '如果存在，它会显示默认的播放控件集。', exampleValue: '<video controls />'},
    {
        attribute: 'autoPlay',
        description: '页面加载时自动开始播放视频。注意：自动播放政策因浏览器而异。',
        exampleValue: '<video autoPlay />'
    },
    {attribute: 'loop', description: '循环播放视频。', exampleValue: '<video loop />'},
    {attribute: 'muted', description: '默认静音。通常与自动播放一起使用。', exampleValue: '<video muted />'},
    {
        attribute: 'preload',
        description: '指定如何预加载视频。值：none、metadata、auto。',
        exampleValue: '<video preload="none" />'
    },
    {
        attribute: 'playsInline',
        description: '在 iOS 设备上启用内联播放，这通常是 iOS Safari 上自动播放所必需的。',
        exampleValue: '<video playsInline />'
    },
];
export const videoOptimizationContent6TipText = '使用 autoPlay 属性时，还必须包含 muted 属性以确保视频在大多数浏览器中自动播放，并包含 playsInline 属性以确保与 iOS 设备的兼容性。';
export const videoOptimizationContent7 = '有关视频属性的完整列表，请参阅 MDN 文档。';
export const videoOptimizationContent8 = '### 视频最佳实践';
export const videoOptimizationContent8List = [
    '后备内容（Fallback Content）：使用 <video> 标签时，请在标签内包含后备内容，以适应不支持视频播放的浏览器。',
    '字幕或说明文字：为失聪或听力障碍的用户添加字幕或说明文字。使用 <track> 标签和 <video> 元素指定说明文字文件源。',
    '无障碍的控件（Accessible Controls:）：建议使用标准 HTML5 视频控件，以实现键盘导航和屏幕阅读器兼容性。对于高级需求，请考虑使用 react-player 或 video.js 等第三方播放器，它们提供无障碍的控件和一致的浏览器体验。'
];
export const videoOptimizationContent9 = '### <iframe>';
export const videoOptimizationContent10 = 'HTML <iframe> 标签允许您嵌入来自外部平台（如 YouTube 或 Vimeo）的视频。';
export const videoOptimizationContent10Code = `~~~app/page.jsx~~~
export default function Page() {
  return (
    <iframe src="https://www.youtube.com/embed/19g66ezsKAg" allowFullScreen />
  )
}`;
export const videoOptimizationContent10Text = '### 常见的 <iframe> 标签属性';
export const videoOptimizationContent10Table = [
    {attribute: 'src', description: '要嵌入的页面的 URL。', exampleValue: '<iframe src="https://example.com" />'},
    {attribute: 'width', description: '设置 iframe 的宽度。', exampleValue: '<iframe width="500" />'},
    {attribute: 'height', description: '设置 iframe 的高度。', exampleValue: '<iframe height="300" />'},
    {
        attribute: 'allowFullScreen',
        description: '允许 iframe 内容以全屏模式显示。',
        exampleValue: '<iframe allowFullScreen />'
    },
    {attribute: 'sandbox', description: '对 iframe 中的内容启用一组额外的限制。', exampleValue: '<iframe sandbox />'},
    {attribute: 'loading', description: '优化加载行为（例如延迟加载）。', exampleValue: '<iframe loading="lazy" />'},
    {
        attribute: 'title',
        description: '为 iframe 提供标题以支持可访问性。',
        exampleValue: '<iframe title="Description" />'
    }
];
export const videoOptimizationContent11 = '有关 iframe 属性的完整列表，请参阅 MDN 文档。';
export const videoOptimizationContent12 = '### 选择视频嵌入方法';
export const videoOptimizationContent12Text = '您可以通过两种方式将视频嵌入 Next.js 应用程序：';
export const videoOptimizationContent12List = [
    '自托管或直接视频文件：对于需要对播放器的功能和外观进行详细控制的场景，可以使用 <video> 标签嵌入自托管视频。Next.js 中的这种集成方法允许自定义和控制视频内容。',
    '使用视频托管服务（YouTube、Vimeo 等）：对于 YouTube 或 Vimeo 等视频托管服务，您可以使用 <iframe> 标签嵌入基于 iframe 的播放器。虽然这种方法限制了对播放器的一些控制，但它提供了这些平台提供的易用性和功能。'
];
export const videoOptimizationContent13 = '选择符合您的应用程序要求和您想要提供的用户体验的嵌入方法。';
export const videoOptimizationContent14 = '### 嵌入外部托管的视频';
export const videoOptimizationContent15 = '要嵌入来自外部平台的视频，您可以使用 Next.js 获取视频信息，并使用 React Suspense 处理加载时的回退状态。';
export const videoOptimizationContent16 = '#### 1. 创建用于视频嵌入的服务器组件';
export const videoOptimizationContent17 = '第一步是创建一个服务器组件，该组件生成适当的 iframe 以嵌入视频。此组件将获取视频的源 URL 并呈现 iframe。';
export const videoOptimizationContent17Code = `~~~app/ui/video-component.jsx;~~~;
export default async function VideoComponent() {
  const src = await getVideoSrc();
 
  return <iframe src={src} allowFullScreen />
}`;
export const videoOptimizationContent18 = '#### 2. 使用 React Suspense 流式传输视频组件';
export const videoOptimizationContent19 = '创建用于嵌入视频的服务器组件后，下一步是使用 React Suspense 来流式传输组件。';
export const videoOptimizationContent19Code = `~~~app/page.jsx;~~~;
import { Suspense } from 'react'
import VideoComponent from '../ui/VideoComponent.jsx'
 
export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      {/* Other content of the page */}
    </section>
  )
}`;
export const videoOptimizationContent19TipDescription = '嵌入来自外部平台的视频时，请考虑以下最佳做法：';
export const videoOptimizationContent19TipList = [
    '确保嵌入的视频具有响应性。使用 CSS 使 iframe 或视频播放器适应不同的屏幕尺寸。',
    '根据网络状况实施加载视频的策略，尤其是针对数据计划有限的用户。'
];
export const videoOptimizationContent20 = '这种方法可以防止页面阻塞，从而带来更好的用户体验，这意味着用户可以在视频组件流入时与页面进行交互。';
export const videoOptimizationContent21 = '为了获得更具吸引力和信息量的加载体验，请考虑使用加载骨架作为后备 UI。因此，您可以显示类似于视频播放器的骨架，而不是显示简单的加载消息，如下所示：';
export const videoOptimizationContent21Code = `~~~app/page.jsx;~~~;
import { Suspense } from 'react'
import VideoComponent from '../ui/VideoComponent.jsx'
import VideoSkeleton from '../ui/VideoSkeleton.jsx'
 
export default function Page() {
  return (
    <section>
      <Suspense fallback={<VideoSkeleton />}>
        <VideoComponent />
      </Suspense>
      {/* Other content of the page */}
    </section>
  )
}`;
export const videoOptimizationContent22 = '## 自托管视频';
export const videoOptimizationContent23 = '由于以下几个原因，自行托管视频可能更可取：';
export const videoOptimizationContent23List = [
    '完全控制和独立：自托管让您直接管理视频内容，从播放到外观，确保完全所有权和控制权，不受外部平台的限制。',
    '针对特定需求的定制：非常适合独特要求，例如动态背景视频，它允许进行量身定制以符合设计和功能需求。',
    '性能和可扩展性考虑：选择高性能且可扩展的存储解决方案，以有效支持不断增加的流量和内容大小。',
    '成本和集成：平衡存储和带宽成本与轻松集成到 Next.js 框架和更广泛的技术生态系统的需求。'
];
export const videoOptimizationContent24 = '### 使用 Vercel Blob 进行视频托管';
export const videoOptimizationContent25 = 'Vercel Blob 提供了一种高效的视频托管方式，它提供了一种可扩展的云存储解决方案，可与 Next.js 很好地配合使用。以下是使用 Vercel Blob 托管视频的方法：';
export const videoOptimizationContent26 = '#### 1. 将视频上传至 Vercel Blob';
export const videoOptimizationContent27 = '在 Vercel Dashboard中，导航到“storage”选项卡并选择您的 Vercel Blob store。在 Blob 表的右上角，找到并单击“Upload”按钮。然后，选择您要上传的视频文件。上传完成后，视频文件将显示在 Blob 表中。';
export const videoOptimizationContent28 = '或者，您可以使用服务器操作上传视频。有关详细说明，请参阅 Vercel 文档中的服务器端上传。Vercel 还支持客户端上传。对于某些用例，此方法可能更可取。';
export const videoOptimizationContent29 = '#### 2. 在 Next.js 中显示视频';
export const videoOptimizationContent30 = '上传并存储视频后，您可以在 Next.js 应用程序中显示它。以下是使用 <video> 标签和 React Suspense 执行此操作的示例：';
export const videoOptimizationContent30Code = `~~~app/page.jsx;~~~;
import { Suspense } from 'react'
import { list } from '@vercel/blob'
 
export default function Page() {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent fileName="my-video.mp4" />
    </Suspense>
  )
}
 
async function VideoComponent({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];
 
  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}`;
export const videoOptimizationContent31 = '在此方法中，页面使用视频的 @vercel/blob URL 通过 VideoComponent 显示视频。React Suspense 用于显示回退，直到获取视频 URL 并准备好显示视频为止。';
export const videoOptimizationContent32 = '### 为视频添加字幕';
export const videoOptimizationContent33 = '如果您的视频有字幕，您可以使用 <video> 标签内的 <track> 元素轻松添加字幕。您可以像获取视频文件一样从 Vercel Blob 获取字幕文件。以下是更新 <VideoComponent> 以包含字幕的方法。';
export const videoOptimizationContent33Code = `~~~app/page.jsx;~~~;
async function VideoComponent({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 2,
  });
  const { url } = blobs[0];
  const { url: captionsUrl } = blobs[1];
 
  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      <track src={captionsUrl} kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  )
}`;
export const videoOptimizationContent34 = '通过遵循这种方法，您可以有效地自行托管并将视频集成到您的 Next.js 应用程序中。';
export const videoOptimizationContent35 = '## 资源';
export const videoOptimizationContent36 = '要继续了解有关视频优化和最佳实践的更多信息，请参阅以下资源：';
export const videoOptimizationContent36List = [
    '了解视频格式和编解码器：根据您的视频需求选择正确的格式和编解码器，例如 MP4（用于兼容性）或 WebM（用于网络优化）。有关更多详细信息，请参阅 Mozilla 的视频编解码器指南。',
    '视频压缩：使用 FFmpeg 等工具有效压缩视频，在质量和文件大小之间取得平衡。在 FFmpeg 的官方网站上了解压缩技术。',
    '分辨率和码率调整：根据观看平台调整分辨率和码率，移动设备的设置较低。',
    '内容分发网络 (CDN)：利用 CDN 来提高视频分发速度并管理高流量。使用某些存储解决方案（例如 Vercel Blob）时，CDN 功能会自动为您处理。详细了解 CDN 及其优势。'
];
export const videoOptimizationContent37 = '探索这些视频流平台，将视频集成到你的 Next.js 项目中：';
export const videoOptimizationContent38 = '### 开源 next-video 组件';
export const videoOptimizationContent38List = [
    '为 Next.js 提供 <Video> 组件，兼容各种托管服务，包括 Vercel Blob、S3、Backblaze 和 Mux。',
    '有关将 next-video.dev 与不同托管服务结合使用的详细文档。'
];
export const videoOptimizationContent39 = '### Cloudinary 集成';
export const videoOptimizationContent39List = [
    '有关将 Cloudinary 与 Next.js 结合使用的官方文档和集成指南。',
    '包含用于插入式视频支持的 <CldVideoPlayer> 组件。',
    '查找将 Cloudinary 与 Next.js 集成的示例，包括自适应比特率流。',
    '还提供其他 Cloudinary 库，包括 Node.js SDK。'
];
export const videoOptimizationContent40 = '### Mux 视频 API';
export const videoOptimizationContent40List = [
    'Mux 提供了一个使用 Mux 和 Next.js 创建视频课程的入门模板。',
    '了解 Mux 关于在 Next.js 应用程序中嵌入高性能视频的建议。',
    '探索一个演示 Mux 与 Next.js 的示例项目。'
];
export const videoOptimizationContent41 = '### Fastly';
export const videoOptimizationContent41List = [
    '了解有关将 Fastly 的视频点播和流媒体解决方案集成到 Next.js 的更多信息。'
];
export const videoOptimizationContent42 = '### ImageKit.io 集成';
export const videoOptimizationContent42List = [
    '查看将 ImageKit 与 Next.js 集成的官方快速入门指南。',
    '该集成提供了一个 <IKVideo> 组件，可提供无缝视频支持。',
    '您还可以探索其他 ImageKit 库，例如同样可用的 Node.js SDK。'
];
