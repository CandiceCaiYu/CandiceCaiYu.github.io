export const title = '# 渲染';
export const content1 = '渲染是将您编写的代码转换为用户界面。React 和 Next.js 允许您创建混合 Web 应用程序，其中部分代码可以在服务器或客户端上渲染。本节将帮助您了解这些渲染环境、策略和运行时之间的差异。';
export const content2 = '## 基础知识' ;
export const content3 = '首先，熟悉三个基础网络概念会很有帮助：';
export const content3List = [
    '您的应用程序代码可以在以下环境中执行：服务器和客户端。',
    '当用户访问或与您的应用程序交互时启动的请求-响应生命周期。',
    '分隔服务器和客户端代码的网络边界。'
];
export const content4 = '### 渲染环境';
export const content5 = '有两种环境可以呈现 Web 应用程序：客户端和服务器。';
export const content5Img = '![client-and-server-environments](/nextjsDoc/buildingYourApplication/rendering/client-and-server-environments.avif)';
export const content5List = [
    '客户端是指用户设备上的浏览器，它会向服务器发送请求以获取应用程序代码。然后，它会将服务器的响应转换为用户界面。',
    '服务器是指数据中心中存储应用程序代码、接收客户端的请求并发回适当响应的计算机。'
];
export const content6 = '过去，开发人员在为服务器和客户端编写代码时必须使用不同的语言（例如 JavaScript、PHP）和框架。使用 React，开发人员可以使用相同的语言（JavaScript）和相同的框架（例如 Next.js 或您选择的框架）。这种灵活性让您可以无缝地为两种环境编写代码，而无需切换上下文。';
export const content7 = '但是，每个环境都有自己的一套功能和约束。因此，您为服务器和客户端编写的代码并不总是相同的。某些操作（例如数据获取或管理用户状态）更适合一种环境而不是另一种环境。';
export const content8 = '了解这些差异是有效使用 React 和 Next.js 的关键。我们将在服务器和客户端组件页面上更详细地介绍差异和用例，现在，让我们继续构建基础。';
export const content9 = '### 请求-响应生命周期';
export const content10 = '广义上讲，所有网站都遵循相同的请求-响应生命周期：';
export const content10List = [
    '用户操作：用户与 Web 应用程序交互。这可能是单击链接、提交表单或直接在浏览器的地址栏中输入 URL。',
    'HTTP 请求：客户端向服务器发送 HTTP 请求，其中包含有关正在请求哪些资源、使用什么方法（例如 GET、POST）以及必要时附加数据等必要信息。'  ,
    '服务器：服务器处理请求并使用适当的资源进行响应。此过程可能需要几个步骤，例如路由、获取数据等。',
    '处理完请求后，服务器会向客户端发送 HTTP 响应。此响应包含状态代码（告知客户端请求是否成功）和请求的资源（例如 HTML、CSS、JavaScript、静态资产等）。',
    '客户端：客户端解析资源以呈现到用户界面。',
    '用户操作：一旦用户界面被渲染，用户就可以与其交互，整个过程重新开始。'
];
export const content11 = '构建混合 Web 应用程序的主要部分是决定如何在生命周期中分割工作，以及在何处放置网络边界。';
export const content12 = '## 网络边界';
export const content13 = '在 Web 开发中，网络边界是分隔不同环境的概念线。例如，客户端和服务器，或服务器和数据存储。';
export const content14 = '在 React 中，您可以选择将客户端-服务器网络边界放置在最合理的位置。';
export const content15 = '在后台，工作分为两部分：客户端模块图和服务器模块图。服务器模块图包含在服务器上渲染的所有组件，客户端模块图包含在客户端上渲染的所有组件。';
export const content16 = '将模块图视为应用程序中的文件如何相互依赖的直观呈现,可能会有所帮助。';
export const content17 = '你可以使用 React 的“use client”约定来定义边界。还有一个“use server”约定，它告诉 React 在服务器上执行一些计算工作。';
export const content18 = '## 构建混合应用程序';
export const content19 = '在这些环境中工作时，将应用程序中的代码流视为单向的会很有帮助。换句话说，在响应期间，应用程序代码会单向流动：从服务器流向客户端。';
export const content20 = '如果需要从客户端访问服务器，您可以向服务器发送新请求，而不是重复使用相同的请求。这样可以更轻松地了解在何处渲染组件以及在何处放置网络边界。';
export const content21 = '实际上，该模型鼓励开发人员首先考虑他们想要在服务器上执行什么，然后再将结果发送到客户端并使应用程序进行交互。';
export const content22 = '当我们研究如何在同一组件树中交错客户端和服务器组件时，这个概念将变得更加清晰。';
