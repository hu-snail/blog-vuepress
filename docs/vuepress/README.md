---
title: Vuepress使用教程
date: 2019-04-10
tags:
- vuepress vue
---
::: tip Vuepress介绍
VuePress是以Vue驱动的静态网站生成器，是一个由Vue、Vue Router和webpack驱动的单页应用。在VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。
详情查看[Vuepress文档](http://caibaojian.com/vuepress/guide/ "vuepress")
:::

## 1.安装前准备
使用vuepress前需要注意的几个点：
::: warning 注意
1. VuePress基于node 8.0+
2. 注册一个github账号，后续部署需要
3. 熟悉markdown语法
4. 了解Vue语法，vuepress支持组件开发模式
:::

友情链接： [node下载地址](https://nodejs.org/en/download/ "node") [MarkDown教程](http://www.markdown.cn/ "markdown") 

## 2.安装vuepress
安装准备好后，接下来开始Vuepress之旅吧！具体步骤如下：
##### 1. github上创建空仓库，如：blog-vuepress
##### 2. 拉取远程仓库到本地:
```javascript
git clone 远程仓库地址
```
##### 3. 添加package.json，在根目录下，终端执行：
```javascript
npm init
```
##### 4. 全局安装vuepress:
```javascript
npm install vuepress -g
```
##### 5. 创建基本文件夹目录， 结构如下:

```javascript
blog-vuepress
├─ docs
|  ├─ README.md    博客首页配置
|  ├─ .vuepress    主要文件，必须添加 ‘.’  
|     ├─ public    公共资源文件（style/css/images）
|     ├─ vue       测试文件
|        ├─ README.md 
|        ├─ vue基础知识.md
|        ├─ scss   css预编译文件 （可选项）
|     ├─ config.js    vuepress配置文件
|  ├─ pages        所有页面文件
├─ node-modules
├─ deploy.sh
├─ package-lock.json
├─ package.json
```

## 3.代码实现
文件目录的设计已经完成，接下来开始代码实现，具体步骤如下：
##### 1. 设置首页 文件路径：blog-vuepress/docs/README.md
```javascript
备注：属性名称所代表的含义，自行查阅文档
---
home: true
heroImage: /hero.png
actionText: vuePress使用教程 →
actionLink: /vuepress/
features:
- title: Simplicity First
  details: 描述
- title: Vue-Powered
  details: 描述
- title: Performant
  details: 描述
footer: MIT Licensed | Copyright © 2018-present Evan You
---

```
##### 2. config配置文件， 文件路径：blog-vuepress/docs/.vuepress/config.js
```javascript
module.exports = {
    theme: 'reco', // 主题
    title: 'hu-snail', // 网站title
    base: '/blog-vuepress/', // 仓库名，部署需要设置 保持和自己的仓库一致
    description: '前端笔记 javascript/Vue/React/css', // 网站描述
    // 主题设置
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
        // 头部导航配置， 详细配置查阅vuepress文档
        nav: [
            { text: 'demo', link: '/demo/', icon: 'reco-date' },
            { text: 'Vue', link: '/vue/', icon: 'reco-tag'},
            { text: 'JavaScript', link: '/JavaScript/', icon: 'reco-tag'}
        ],
        // 侧边栏 如下配置：根目录（‘/vue/’）
        // 保持和头部导航(/vue/)一致 可参考vue目录结构 自行修改
        sidebar: {
            '/vue/': [ // 子节点
                'vue基础知识'
            ]
        },
        sidebarDepth: 2,
        lastUpdated: '最后更新时间',
        serviceWorker: true,
    }
}

```
##### 3. 运行环境
```javascript
注意： package.json 配置
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
  
本地运行环境: npm run docs:dev
正式打包环境: npm run docs:build
部署环境：npm run deploy 
```
## 4. 部署
以上我们已经完成了前期的工作，只能本地运行，这样玩多没意思！那现在我们部署到github上去试试，不用购买服务器和域名，nice！看看具体步骤吧：
##### 1. 部署脚本 文件路径： blog-vuepress/deploy.sh
```javascript
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 本篇选择的上传方式
# 如果发布到 https://<USERNAME>.github.io/<REPO> 
# USERNAME：github用户名 REPO： 仓库名称（blog-vuepress）
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

##### 2.config 配置文件修改
```javascript
module.exports = {
    base: '/blog-vuepress/', // 仓库名，部署需要设置 保持和自己的仓库一致
}
```

#### 3.发布
```javascript
npm run deploy
```
