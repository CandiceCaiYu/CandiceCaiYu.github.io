export const title = "App路由器";
export const description = "Next.js App路由器引入了一个创建应用程序的新模型，它使用了react最新的功能，比如服务器组件，可以暂停的流式传输和服务器操作。";
export const tips = "通过创建你的第一个页面来开始App路由器吧。";

export const questionsTitle = "常见问题";
export const questions = [
    {
        question: "我如何在布局中访问请求对象？",
        answer1: "你不能之间访问原生的请求对象。但是，你可以通过服务器专有的函数去访问headers和cookies。 你也可以set cookies.",
        answer2: "布局不会重新渲染。它们可以被缓存和重复使用，从而避免在页面之间跳转的时候进行不必要的计算。通过限制布局去访问原始请求，Next.js可以阻止执行中使布局可能变慢和昂贵开销的用户代码，这样可能对性能产生负面影响。",
        answer3: "这个设计同样还需要不同的页面布局有着一致和可预测的行为。这样更容易开发的调试。",
        answer4: "根据你的创建的用户界面模式， 并行路由（parallel route）让你可以在同一个布局下渲染多个页面。页面可以访问路由段，就想URL搜索参数一样。"
    },
    {
        question: "我如何访问页面URL？",
        answer1: "默认情况下，页面是服务器组件。你可以通过params访问路由段和通过给定的页面的searchParams的URL搜索参数。",
        answer2: "如果你是用的客户端组件，你可以usePathname, useSelectedLayoutSegment, 和更复杂的路由 useSelectedLayoutSegments。",
        answer3: "更多的，根据你的创建的用户界面模式， 并行路由（parallel route）让你可以在同一个布局下渲染多个页面。页面可以访问路由段，就想URL搜索参数一样。",
    },
    {
        question: "我要如何从服务器组件重定向？",
        answer1: "你可以使用redirect进行重定向，从一个页面到另一个相对的或者绝对的URL。redirect是一个临时（307）的重定向， 而permanentRedirect是永久（308）重定向。当这些函数用于流式传输的用户界面时，它们会插入一个元标签从而在客户端发出重定向。",
    },
    {
        question: "我要如何使用App路由器处理身份验证？",
        answer1: "以下是一些支持App路由器的常见身份验证解决方案",
        answer2: ["NextAuth.js", "Clerk", "Lucia", "Auth0", "Stytch", "Kinde"],
        answer3: "或者手动处理sessions或者JWTs",
    },
    {
        question: "我要怎么设置cookie?",
        answer1: "可以在Server Actions或Route handlers里使用cookie函数设置cookie。",
        answer2: "由于HTTP 不允许在流式传输开始后设置cookie， 你不能在页面或者布局里直接设置cookie。你只能在Middleware中设置cookie.",
    },
    {
        question: "我要如何创建多个租户应用程序？",
        answer1: "如何你想要创建一个服务多个租户的Next.js应用程序。我们通过一个示例向你展示我们推荐的架构。",
    },
    {
        question: "如何让App路由器的缓存失效？",
        answer1: "Next.js里的缓存有多层，因此，有很多方法让不同部分的缓存失效。了解更多关于缓存的信息。",
    }, {
        question: "有没有基于App router构建的比较全面并且是开源的应用程序？",
        answer1: "有的。你可以查看 Next.js Commerce或者 Platforms Starter Kit，这是两个大型的基于App router的开源示例。",
    },];

