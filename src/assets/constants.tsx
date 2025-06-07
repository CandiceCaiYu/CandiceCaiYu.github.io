import {FileTextFilled, GithubFilled, UserOutlined} from "@ant-design/icons";

export const SIDEBAR_CATEGORY = [
    {name: 'React', link: ''},
    {name: 'Javascript', link: ''},
    {name: 'HTML', link: ''},
    {name: 'CSS', link: ''},
    {name: 'Typescript', link: ''},
];

export const BLOG_LIST = [
    {
        date: '', title: '博客园',
        content: '博客园中的随笔与博客，包含大量的这些年在工作中遇到的各种坑和解决方案，很多都是收集了大量信息总结出来的解决方案，可以作为参考。',
        link: 'https://www.cnblogs.com/cai-yu-candice'
    },
    {
        date: '', title: 'Next.js',
        content: '自己翻译(借助google transfer)的Next.js官方文档，包含了Next.js的基本概念，如何使用Next.js，以及一些高级特性的使用。',
        link: '/nextjs-docs/start'
    },
    {
        date: '', title: '阅读进度',
        content: '记录每本书何时阅读的，当时的阅读情况，总体的阅读进度',
        link: '/reading-progress'
    },
    {
        date: '', title: '参考资料',
        content: '提供各种文档，插件，库等高效开发',
        link: '/reference-material'
    },
];

export const FOOTER_INFO = [
    {
        title: 'Resources', id: 'fi1', details: [
            {name: '博客园', link: 'https://www.cnblogs.com/cai-yu-candice', id: 'fir1', icon: <FileTextFilled/>},
            {name: 'GitHub', link: 'https://github.com/CandiceCaiYu', id: 'fir2', icon: <GithubFilled/>},
        ]
    },
    {
        title: 'Help', id: 'fi2', details: [
            {name: 'About me', link: 'https://candicecaiyu.github.io/profile', id: 'fih1', icon: <UserOutlined/>}
        ]
    }
];
