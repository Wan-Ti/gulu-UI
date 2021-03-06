module.exports = {
    base: '/gulu-UI/',
    title: '咕噜UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/READEME.md',
                    '/get-started/READEME.md'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/input',
                    '/components/popover',]
            }
        ]
    }
}