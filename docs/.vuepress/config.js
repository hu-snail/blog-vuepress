module.exports = {
    theme: 'reco',
    title: 'hu-snail',
    base: '/blog-vuepress/',
    description: '前端笔记 javascript/Vue/React/css',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // ['link', { rel: 'icon', href: `/favicon.ico` }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        blogConfig: {
            category: {
                location: 2,
                text: 'Category'
            },
            tag: {
                location: 3,
                text: 'Tag'
            }
        },
        nav: [
            { text: 'demo', link: '/demo/', icon: 'reco-date' },
            { text: 'Vue', link: '/vue/', icon: 'reco-tag'},
            { text: 'JavaScript', link: '/JavaScript/', icon: 'reco-tag'}
        ],
        sidebar: {
            '/vue/': [
                'vue基础知识'
            ]
        },
        sidebarDepth: 2,
        lastUpdated: '最后更新时间',
        serviceWorker: true,
    }
}