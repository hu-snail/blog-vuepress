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
            { text: '笔记标签', link: '/pages/tags/' },
            { text: '前端资源', link: '/pages/links/' },
        ],
        sidebar: {
            '/vue/': [
                'vue基础知识'
            ],
            
        },
        sidebarDepth: 2,
        lastUpdated: '最后更新时间',
        serviceWorker: true,
        postcss: [require('autoprefixer')],
        sass: { indentedSyntax: true },
        scss: {
            includePaths: ["./public/scss/variable.scss"]
        },
        markdown: {
            lineNumbers: true,
            anchor: {
                permalink: true
            },
            toc: {
                includeLevel: [1, 2]
            },
            config: md => {
                // 使用更多 markdown-it 插件！
                md.use(require('markdown-it-task-lists'))
                .use(require('markdown-it-imsize'), { autofill: true })
            }
        },
        chainWebpack: (config, isServer) => {
            config.resolveLoader
                .modules
                .add(path.resolve(__dirname, './node_modules'))
        },
        configureWebpack: {
            resolve: {
              alias: {
                '@alias': './public/images/'
              }
            }
          }
    }
}
