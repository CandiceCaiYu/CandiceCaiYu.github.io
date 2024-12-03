export const title = '# 国际化';
export const content1 = 'Next.js 可让您配置内容的路由和渲染以支持多种语言。让您的网站适应不同的语言环境包括翻译内容（本地化）和国际化路由。';
export const content2 = "## 术语";
export const content2List = [
    "区域设置：一组语言和格式偏好的标识符。这通常包括用户的首选语言及其可能所在的地理区域。",
    ["en-US：美国使用的英语",
        "nl-NL：荷兰使用的荷兰语",
        "nl：荷兰语，无特定区域"]];
export const content3 = "## 路由概述";
export const content4 = "建议使用浏览器中用户的语言偏好来选择要使用的语言环境。更改首选语言将修改传入应用程序的 Accept-Language 标头。";
export const content5 = "例如，使用以下库，您可以查看传入的请求，根据标头、您计划支持的语言环境和默认语言环境来确定要选择的语言环境。";
export const content5Code = `~~~middleware.js

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'`;
export const content6 = '路由可以通过子路径 (/fr/products) 或域 (my-site.fr/products) 实现国际化。有了这些信息，您现在可以根据中间件中的语言环境重定向用户。';
export const content6Code = `~~~middleware.js

import { NextResponse } from "next/server";
 
let locales = ['en-US', 'nl-NL', 'nl']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) { ... }
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = \`/\${locale}\${pathname}\`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}`;
export const content7 =
    '最后，确保 app/ 内的所有特殊文件都嵌套在 app/[lang] 下。这使 Next.js 路由器能够动态处理路由中的不同语言环境，并将 lang 参数转发到每个布局和页面。例如：';
export const content7Code = `~~~app/[lang]/page.js

// You now have access to the current locale
// e.g. /en-US/products -> \`lang\` is "en-US"
export default async function Page({ params: { lang } }) {
  return ...
}`;
export const content8 = '根布局也可以嵌套在新文件夹中（例如 app/[lang]/layout.js）。';
export const content9 = '## 本地化';
export const content10 =
    '根据用户的首选语言环境或本地化更改显示的内容并不是 Next.js 独有的。下面描述的模式适用于任何 Web 应用程序。';
export const content11 = '假设我们想在应用程序中同时支持英语和荷兰语内容。我们可能会维护两个不同的“字典”，它们是为我们提供从某个键到本地化字符串的映射的对象。例如：';
export const content11Code1 = `~~~dictionaries/en.json

{
  "products": {
    "cart": "Add to Cart"
  }
}`;
export const content11Code2 = `~~~dictionaries/nl.json

{
  "products": {
    "cart": "Toevoegen aan Winkelwagen"
  }
}`;
export const content12 = '然后我们可以创建一个 getDictionary 函数来加载所请求语言环境的翻译：';
export const content12Code = `~~~app/[lang]/getDictionary.js

import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()`;
export const content13 = '根据当前选择的语言，我们可以获取布局或页面内的字典。';
export const content13Code = `~~~app/[lang]/page.js

import { getDictionary } from './dictionaries'
 
export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.products.cart}</button> // Add to Cart
}`;
export const content14 = '由于 app/ 目录中的所有布局和页面都默认为服务器组件，因此我们不必担心翻译文件的大小会影响客户端 JavaScript 包的大小。此代码将仅在服务器上运行，并且只有生成的 HTML 才会发送到浏览器。';
export const content15 = '## 静态生成';
export const content16 =
    '要为给定的一组语言环境生成静态路由，我们可以将 generateStaticParams 与任何页面或布局结合使用。这可以是全局的，例如，在根布局中：';
export const content16Code = `~~~app/[lang]/layout.js;

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
 
export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}`;
export const content17 = '## 资源';
export const content17List = [
    "Minimal i18n routing and translations",
    "next-intl",
    "next-international",
    "next-i18n-router",
    "paraglide-next",
    "lingui"];
