export const title = '# 优化';
export const content1 = 'Next.js 带有各种内置优化功能，旨在提高应用程序的速度和Core Web Vitals。本指南将介绍您可以利用哪些优化功能来增强用户体验。';

export const content2 = '## 内置组件';
export const content3 = '内置组件抽象了实现常见 UI 优化的复杂性。这些组件包括：';
export const content3List = [
    'Images：基于原生 <img> 元素构建。图像组件通过延迟加载和根据设备尺寸自动调整图像大小来优化图像性能。',
    'Link：基于原生 <a> 标签构建。Link 组件在后台预取页面，以实现更快、更流畅的页面转换。',
    'Scripts：基于原生 <script> 标签构建。脚本组件让您可以控制第三方脚本的加载和执行。'
];

export const content4 = '## Metadata';
export const content5 = '元数据可以帮助搜索引擎更好地理解您的内容（这可以带来更好的 SEO），并允许您自定义内容在社交媒体上的呈现方式，帮助您在各个平台上创建更具吸引力、更一致的用户体验。';
export const content6 = 'Next.js 中的元数据 API 允许您修改页面的 <head> 元素。您可以通过两种方式配置元数据：';
export const content6List = [
    '基于配置的元数据：在 layout.js 或 page.js 文件中导出静态元数据对象或动态 generateMetadata 函数。',
    '基于文件的元数据：向路由段添加静态或动态生成的特殊文件。'
];
export const content7 = '此外，您可以使用 JSX 和 CSS 以及 imageResponse 构造函数创建动态 Open Graph 图像。';

export const content8 = '## 静态资产（Static Assets）';
export const content9 = 'Next.js /public 文件夹可用于提供静态资产，例如图像、字体和其他文件。CDN 提供商还可以缓存 /public 中的文件，以便高效地交付它们。';

export const content10 = '## 分析和监控';
export const content11 = '对于大型应用程序，Next.js 集成了流行的分析和监控工具，以帮助您了解应用程序的运行情况。有关详细信息，请参阅 OpenTelemetry 和 Instrumentation 指南。';
