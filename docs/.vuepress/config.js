module.exports = {
    theme: 'reco',
    title: 'hu-snail', 
    description: '前端笔记 javascript/Vue/React/css',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        // 博客设置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        nav: [
            { text: 'demo', link: '/demo/', icon: 'reco-date' }
        ]
    }
}