export const title = '# Sass';
export const content1 = 'Next.js 内置了与 Sass 集成的支持, 使用 .scss 和 .sass 扩展安装软件包后。您可以通过 CSS 模块和 .module.scss 或 .module.sass 扩展使用组件级 Sass。';
export const content2 = '首先，安装 sass：';
export const content2Code = `~~~
npm install --save-dev sass`;
export const content2TipsList = [
    'Sass 支持两种不同的语法，每种语法都有自己的扩展名。.scss 扩展名要求您使用 SCSS 语法，而 .sass 扩展名要求您使用缩进语法（“Sass”）。',
    '如果您不确定选择哪种，请从 .scss 扩展名开始，它是 CSS 的超集，不需要您学习缩进语法（“Sass”）。'
];
export const content3 = '## 自定义 Sass 选项';
export const content4 = '如果您想配置 Sass 选项，请在 next.config 中使用 sassOptions。';
export const content4Code = `~~~next.config.js

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: \`$var: red;\`,
  },
}
 
export default nextConfig`;
export const content5 = '### Implementation';
export const content6 = '您可以使用 implementation 属性指定要使用的 Sass 实现。默认情况下，Next.js 使用 sass 包。';
export const content6Code = `~~~next.config.js

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
}
 
export default nextConfig`;
export const content7 = '## Sass 变量';
export const content8 = 'Next.js 支持从 CSS 模块文件导出的 Sass 变量。';
export const content9 = '例如，使用导出的 primaryColor Sass 变量：';
export const content9Code1 = `~~~app/variables.module.scss

$primary-color: #64ff00;
 
:export {
  primaryColor: $primary-color;
}`;
export const content9Code2 = `~~~app/page.js;

// maps to root \`/\` URL
 
import variables from './variables.module.scss'
 
export default function Page() {
  return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
}`;

