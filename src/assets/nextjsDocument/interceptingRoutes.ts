export const title = '# 拦截路由';
export const content1 = '拦截路由允许您在当前布局中从应用程序的另一部分加载路由。当您想显示路由内容而无需用户切换到其他上下文时，此路由范例非常有用。';
export const content2 = '例如，当单击 Feed 中的照片时，您可以在模态框中显示照片，覆盖 Feed。在这种情况下，Next.js 会拦截 /photo/123 路由，屏蔽 URL，并将其覆盖在 /feed 上。';
export const content2Image = '![intercepting-routes-soft-navigate](/nextjsDoc/buildingYourApplication/routing/intercepting-routes-soft-navigate.avif)';
export const content3 = '但是，当通过单击可共享 URL 或刷新页面导航到照片时，应该呈现整个照片页面，而不是模态框。不应发生路由拦截。';
export const content3Image = '![intercepting-routes-hard-navigate](/nextjsDoc/buildingYourApplication/routing/intercepting-routes-hard-navigate.avif)';

export const content4 = '## 约定';
export const content5 = '拦截路线可以用 (..) 约定来定义，它类似于相对路径约定 ../，但针对的是段。';
export const content6 = '您可以使用：';
export const content6List = [
    '(.) 匹配同一级别的段',
    '(..) 匹配上一级的段',
    '(..)(..) 匹配上两级的段',
    '(...) 匹配来自根应用目录的段'];
export const content7 = '例如，您可以通过创建 (..)photo 目录来从 feed 片段中拦截照片片段。';
export const content7Image = "![intercepted-routes-files](/nextjsDoc/buildingYourApplication/routing/intercepted-routes-files.avif)";
export const content7Tips = '请注意，(..) 约定基于路线段，而不是文件系统。';
export const content8 = '## 示例';
export const content9 = '### 模态框';
export const content10 = '拦截路由可以与并行路由一起使用来创建模态框。这可让您解决构建模态框时遇到的常见挑战，例如：';
export const content10List = ['使模态框内容可通过 URL 共享。',
    '刷新页面时保留上下文，而不是关闭模态框。',
    '向后导航时关闭模态框，而不是转到上一个路由。',
    '向前导航时重新打开模态框。'];
export const content11 = '考虑以下 UI 模式，用户可以使用客户端导航从图库打开照片模态框，或直接从可共享 URL 导航到照片页面：';
export const content11Image = '![intercepted-routes-modal-example](/nextjsDoc/buildingYourApplication/routing/intercepted-routes-modal-example.avif)';
export const content12 = '在上面的例子中，照片片段的路径可以使用 (..) 匹配器，因为 @modal 是一个插槽而不是片段。这意味着照片路由仅比片段高一个级别，尽管比文件系统高两个级别。';
export const content13 = '请参阅并行路由文档以获取分步示例，或查看我们的图片库示例。';
export const content13Tips = ['其他示例可能包括在顶部导航栏中打开登录模式，同时还具有专用的 /login 页面，或在侧面模式中打开购物车。'];
