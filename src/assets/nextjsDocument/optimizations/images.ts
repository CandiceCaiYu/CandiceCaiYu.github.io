export const title = '# 图像优化';
export const content1 = '#### 示例';
export const content1List = [
    'Image Component'
];
export const content2 = '根据 Web Almanac 的说法，图像占典型网站页面重量的很大一部分，并且会对网站的 LCP 性能产生相当大的影响。';
export const content3 = 'Next.js 图像组件扩展了 HTML <img> 元素，具有自动图像优化功能：';
export const content3List = [
    '尺寸优化：使用 WebP 和 AVIF 等现代图像格式，自动为每台设备提供正确尺寸的图像。',
    '视觉稳定性：加载图像时自动防止布局偏移。',
    '更快的页面加载：仅当图像进入视口时，才使用本机浏览器延迟加载来加载图像，并带有可选的模糊占位符。',
    '资产灵活性：按需调整图像大小，即使对于存储在远程服务器上的图像也是如此'
];
export const content3TipTitle = '观看：';
export const content3TipText = '了解有关如何使用 next/image → YouTube（9 分钟）的更多信息。';

export const usageTitle = '## 用法';
export const usageContent1Code = `~~~import Image from 'next/image'`;
export const usageContent2 = '然后您可以定义图像的 src（本地或远程）属性。';
export const usageContent3 = '### 本地图片';
export const usageContent4 = '要使用本地图像，请导入 .jpg、.png 或 .webp 图像文件。';
export const usageContent5 = 'Next.js 将根据导入的文件自动确定图片的固有宽度和高度。这些值用于确定图片比例并防止在图片加载时出现累积布局偏移。';
export const usageContent5Code = `~~~app/page.js;~~~;

import Image from 'next/image'
import profilePic from './me.png'
 
export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}`;
export const usageContent5TipTitle = '警告：';
export const usageContent5TipText = '不支持动态 await import() 或 require()。导入必须是静态的，以便可以在构建时进行分析。';
export const usageContent6 = '您可以选择在 next.config.js 文件中配置 localPatterns，以允许特定图像并阻止所有其他图像。';
export const usageContent6Code = `~~~next.config.js~~~
module.exports = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
}`;

export const usageContent7 = '### 远程图像';
export const usageContent8 = '要使用远程图像，src 属性应该是一个 URL 字符串。';
export const usageContent9 = '由于 Next.js 在构建过程中无法访问远程文件，因此您需要手动提供宽度、高度和可选的 blurDataURL 属性。';
export const usageContent10 = '宽度和高度属性用于推断图像的正确纵横比，并避免图像加载时布局偏移。宽度和高度不确定图像文件的渲染大小。了解有关图像大小调整的更多信息。';
export const usageContent10Code = `~~~app/page.js;~~~;
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
`;
export const usageContent11 = '为了安全地允许优化图像，请在 next.config.js 中定义支持的 URL 模式列表。尽可能具体以防止恶意使用。例如，以下配置将仅允许来自特定 AWS S3 存储桶的图像：';
export const usageContent11Code = `~~~next.config.js~~~
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
}`;
export const usageContent12 = '了解有关 remotePatterns 配置的更多信息。如果您想对图像 src 使用相对 URL，请使用loader。';
export const usageContent13 = '### Domains';
export const usageContent14 = '有时您可能想要优化远程图像，但仍使用内置的 Next.js 图像优化 API。为此，请将加载器保留为其默认设置，并为 Image src 属性输入绝对 URL。';
export const usageContent15 = '为了保护您的应用程序免受恶意用户的攻击，您必须定义一个打算与 next/image 组件一起使用的远程主机名列表。';
export const usageContent15TipText = '了解有关 remotePatterns 配置的更多信息。';
export const usageContent16 = '### Loaders';
export const usageContent17 = '请注意，在前面的示例中，为本地图像提供了部分 URL（“/me.png”）。这是由于加载器架构而实现的。';
export const usageContent18 = '加载器是一种为您的图片生成 URL 的函数。它会修改提供的 src，并生成多个 URL 来请求不同大小的图片。这些 URL 用于自动生成 srcset，以便为访问您网站的访问者提供适合其视口大小的图片。';
export const usageContent19 = 'Next.js 应用程序的默认加载器使用内置的图像优化 API，该 API 可优化来自网络上任何位置的图像，然后直接从 Next.js Web 服务器提供这些图像。如果您想直接从 CDN 或图像服务器提供图像，则可以使用几行 JavaScript 编写自己的加载器函数。';
export const usageContent20 = '您可以使用 loader prop 为每个图像定义一个加载器，或者在应用程序级别使用 loaderFile 配置定义一个加载器。';

export const priorityTitle = '## Priority';
export const priorityContent1 = '您应该将priority属性添加到将成为每个页面的最大内容绘制 (LCP) 元素的图像中。这样做可让 Next.js 特别优先加载图像（例如通过预加载标签或优先级提示），从而显著提高 LCP。';
export const priorityContent2 = 'LCP 元素通常是页面视口内可见的最大图像或文本块。运行 next dev 时，如果 LCP 元素是没有优先级属性的 <Image>，您将看到控制台警告。';
export const priorityContent3 = '识别 LCP 图像后，您可以添加属性，如下所示：';
export const priorityContent3Code = `~~~app/page.js;~~~;
import Image from 'next/image'
import profilePic from '../public/me.png'
 
export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" priority />
}`;
export const priorityContent4 = '有关优先级的更多信息，请参阅 next/image 组件文档。';


export const imageSizeTitle = '## 图像大小';
export const imageSizeContent1 = '图像最常见的影响性能的方式之一是布局偏移，即图像在加载时会推动页面上的其他元素。这种性能问题对用户来说非常烦人，因此它有自己的核心 Web 关键点，称为Cumulative Layout Shift。避免基于图像的布局偏移的方法是始终调整图像大小。这允许浏览器在加载图像之前为其精确保留足够的空间。';
export const imageSizeContent2 = '因为 next/image 是为了保证良好的性能结果而设计的，所以它不能以会导致布局偏移的方式使用，并且必须按照以下三种方式之一调整大小：';
export const imageSizeContent2List = [
    '自动，使用静态导入',
    '手动，通过包含用于确定图像纵横比的宽度和高度属性。',
    '隐式，通过使用填充，使图像扩展以填充其父元素。'
];
export const imageSizeContent2TipTitle = '如果我不知道图片的大小怎么办？';
export const imageSizeContent2TipDescription = '如果您从源访问图片而不知道图片的大小，您可以采取以下几种措施：';
export const imageSizeContent2TipList = [
    'fill: fill属性允许您的图片按其父元素调整大小。考虑使用 CSS 为图片的父元素在页面上留出空间，并沿 size 属性匹配任何media query断点。您还可以将 object-fit 与 fill、contain 或 cover 一起使用，并使用 object-position 来定义图片应如何占据该空间。',
    '规范化您的图片: 如果您从自己控制的源提供图片，请考虑修改图片管道以将图片规范化为特定大小。',
    '修改您的 API 调用: 如果您的应用程序使用 API 调用（例如 CMS）检索图片 URL，您可能能够修改 API 调用以返回图片尺寸以及 URL。'
];
export const imageSizeContent3 = '如果建议的方法均不适用于调整图像大小，则 next/image 组件可与标准 <img> 元素一起在页面上正常工作。';


export const stylingTitle = '## Styling';
export const stylingContent1 = '图像组件的样式与普通 <img> 元素的样式类似，但需要牢记一些指导原则：';
export const stylingContent1List = [
    '使用 className 或 style，而不是 styled-jsx。',
    [
        '在大多数情况下，我们建议使用 className 属性。这可以是导入的 CSS 模块、全局样式表等。',
        '您还可以使用 style 属性来分配内联样式。',
        '您不能使用 styled-jsx，因为它的范围仅限于当前组件（除非您将样式标记为全局）。'
    ],
    '使用fill时，父元素必须具有 position:relative',
    [
        '这对于在该布局模式下正确呈现图像元素是必要的。'
    ],
    '使用fill时，父元素必须具有 display:block',
    ['这是 <div> 元素的默认值，但应另行指定。']
];


export const exampleTitle = '## 示例';
export const exampleContent1 = '### 响应式';

export const exampleContent1Img = '![responsive-image](/nextjsDoc/buildingYourApplication/optimizations/responsive-image.avif)';
export const exampleContent1Code = `~~~;
import Image from 'next/image'
import mountains from '../public/mountains.jpg'
 
export default function Responsive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={mountains}
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}`;
export const exampleContent2 = '### 填充容器';
export const exampleContent2Img = '![fill-container](/nextjsDoc/buildingYourApplication/optimizations/fill-container.avif)';
export const exampleContent2Code = `~~~;
import Image from 'next/image'
import mountains from '../public/mountains.jpg'
 
export default function Fill() {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
      }}
    >
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="Mountains"
          src={mountains}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
      </div>
      {/* And more images in the grid... */}
    </div>
  )
}`;
export const exampleContent3 = '### 背景图像';
export const exampleContent3Img = '![background-image](/nextjsDoc/buildingYourApplication/optimizations/background-image.avif)';

export const exampleContent3Code = `~~~;
import Image from 'next/image'
import mountains from '../public/mountains.jpg'
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}`;
export const exampleContent4 = '有关与各种样式一起使用的图像组件的示例，请参阅图像组件演示。';

export const otherPropertiesTitle = '## 其他属性';
export const otherPropertiesContent1 = '查看next/image组件可用的所有属性。';

export const configurationTitle = '## 配置';
export const configurationContent1 = 'next/image 组件和 Next.js 图像优化 API 可以在 next.config.js 文件中配置。这些配置允许您启用远程图像、定义自定义图像断点、更改缓存行为等。';
export const configurationContent2 = '阅读完整的图像配置文档以获取更多信息。';
