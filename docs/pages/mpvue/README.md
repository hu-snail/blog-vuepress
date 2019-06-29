---
title: mpVue框架搭建小程序
date: 2019-04-16
tags:
- mpvue
- vue
---
[[toc]]
## 1.介绍
::: tip mpVue介绍
是一个使用 Vue.js 开发小程序的前端框架。框架基于 [Vue.js](https://cn.vuejs.org/v2/guide/index.html "vue") 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。
详情查看[mpVue文档](http://mpvue.com/mpvue/ "mpvue")
:::

## 2.主要特性
使用 mpvue 开发小程序，你将在小程序技术体系的基础上获取到这样一些能力：
::: tip mpVue主要特性
- 彻底的组件化开发能力：提高代码复用性
- 完整的 Vue.js 开发体验
- 方便的 Vuex 数据管理方案：方便构建复杂应用
- 快捷的 webpack 构建机制：自定义构建策略、开发阶段 hotReload
- 支持使用 npm 外部依赖
- 使用 Vue.js 命令行工具 vue-cli 快速初始化项目
- H5 代码转换编译成小程序目标代码的能力
:::

## 3.快速上手
搭建mpvue框架前，详细阅读官方文档。接下来开始介绍完整的搭建流程，会包括以下几点：
- <a href="#1">安装环境</a>
- <a href="#2">使用的技术栈</a>
- <a href="#3">路由配置</a>
- <a href="#4">小程序UI组件使用</a>
- <a href="#5">sass全局配置</a>
- <a href="#6">http请求封装</a>
- <a href="#7">vuex配置</a>
### <a name="1">1.1安装环境</a>
在安装之前，先确认是否安装了node环境，验证是否存在[node](https://nodejs.org/en/download/ "node")环境，终端命令：node -v 确保node在 v8.0以上。没有安装node的自行百度安装，这里不展开介绍了！记得安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html "微信开发者工具"),打开终端命令：
```javascript
# 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 全局安装 vue-cli
# Mac用户 一般是要 sudo 权限的
$ npm install --global vue-cli@2.9

# 创建一个基于 mpvue-quickstart 模板的新项目
# 新手一路回车选择默认就可以了
$ vue init mpvue/mpvue-quickstart my-project

# 安装依赖
$ cd my-project
$ npm install
$ npm run dev
```

### <a name="2">1.2使用的技术栈</a>
mpvue可以使用完整的vue语法开发，部分细节请阅读[官方文档](http://mpvue.com/mpvue/ "mpvue")，每个程序员都有不同的开发喜好，根据具体的需要使用相应的技术栈，本文介绍的是mpvue主要使用的技术栈如下：
::: tip 技术栈
- [vue-cli](https://github.com/vuejs/vue-cli "vue-cli") 脚手架
- [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch "mpvue-router-patch") 路由
- [fly](https://github.com/wendux/fly "fly") http 网络库
- [sass](https://www.sass.hk/ "sass") css预编译语言
- [wux](https://wux-weapp.github.io/wux-weapp-docs/#/ "wux") 小程序UI组件
:::

### <a name="3">1.3路由配置</a>
为了更接近使用vue路由语法，我们采用了[mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch "mpvue-router-patch")库，具体配置如下：
#### 1.3.1. 安装依赖：
```javascript
npm i mpvue-router-patch
```
#### 1.3.2. 使用
```javascript
// main.js
import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
```

#### 1.3.3. 项目中配置
在src目录下创建 router目录， 具体结构如下：
```json
├─ src
|  ├─ pages
|     ├─ index
|        ├─ index.vue
|  ├─ router
|     ├─ index.js
```
##### 1.3.3.1 index.js中的配置：
```javascript
注意： 每次修改路由后，记得重启项目，不然项目会报错
module.exports = [
    {
        path: '/pages/index/index', // 路径
        name: 'index',
        config: {
            navigationBarTitleText: '蜗友趣', // title
            backgroundColor: '#fff',
            usingComponents: { // UI组件，该页面需要用到的组件配置在这里
                'wux-row': '../../wux/row/index',
                'wux-col': '../../wux/col/index',
                'wux-button': '../../wux/button/index',
                'wux-floating-button': '../../wux/floating-button/index',
                'wux-popup': '../../wux/popup/index',
                'wux-icon': '../../wux/icon/index'
            }
        }
    },
]
```
##### 1.3.3.2 webpack.base.conf.js中的配置：
```javascript
设置：entry: MpvueEntry.getEntry('./src/router/index.js'),
module.exports = {
  entry: MpvueEntry.getEntry('./src/router/index.js'),
  target: require('mpvue-webpack-target'),
  ...
}
```


###  <a name="4">1.4小程序UI组件使用</a>
以[wux](https://wux-weapp.github.io/wux-weapp-docs/#/ "wux") 为例，下载到本地，将dist目录下的所有组件复制到自己的项目中的dist目录下的wux（自行创建）中，或者根据自己的需要拷贝需要的组件，部分组件存在依赖关系，自行测试使用！结构如下
```json
├─ dist
|  ├─ wux
|     ├─ alert
...
```
具体使用，请参考路由配置哦！

### <a name="5">1.5 sass全局配置</a>
项目开发中，我们经常会使用一些全局颜色主题配置，使用到的地方需要单独引用，这样很麻烦！所以采取全局配置的方式处理这个问题。具体步骤如下：
文件路径： build/utils.js
#### 1.5.1 文件结构如下
```json
├─ assets
|  ├─ style
|     ├─ style.scss
|     ├─ variable.scss
...
```
#### 1.5.2 variable.scss
项目开发建议使用全局变量存放主题，方便统一管理，后期更换主题也便于替换
```scss
// 主要配色
$base-color: #24DEA1;
$bg-color: #f5f5f5;
```

#### 1.5.3 style.scss
```scss
@import './variable.scss';
@import './wux-reset.scss';
@import './common.scss';
```
#### 1.5.4 具体配置
```javascript
设置scss, scss全局文件“../src/assets/style/style.scss”
 return {
    css: generateLoaders(),
    wxss: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass').concat({
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/style/style.scss')
        }
      }
    ),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
```
#### 1.5.5 具体使用
注意：文件中不需要单独引用！
```vue
<template>
    <div class="page">
       ...
    </div>
</template>
<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100%;
    color: $base-color;
    background-color: $bg-color;
}
</style>
```
### <a name="6">1.6 http请求封装</a>
api封装是项目开发中重要的环节，项目中使用的fly, 如果你习惯axios请自行查询使用！看看具体配置吧：
#### 1.6.1 文件结构
```json
├─ src
|  ├─ common
|     ├─ api.js // api文档文件
|     ├─ reqConfig.js // 请求配置文件
|     ├─ fetch // 配置文件
...
```
#### 1.6.2  reqConfig.js配置
根据平时喜好配置，仅供参考：
```javascript
import Api from './api'
import store from '../store/index'
export default {
    // 关于接口loading的配置
    loading: {
        limitTime: 200, // 接口请求在xxxms内完成则不展示loading
        loadingShow: () => {
            wx.showLoading({
                title: '加载中',
                mask: true
            })
        },
        loadingHide: () => {
            wx.hideLoading()
        }
    },
    // 接口请求的默认配置
    apiConfig: {
        isLoading: true, // 是否展示loading，默认为true
        isErrorDefaultTip: true, // 是否展示默认错误提示，默认为true
        errorAction: false // 是否使用自定义的错误处理方法，默认为false，如设置true则需在views层catch错误
    },
    // fly的默认配置
    flyConfig: {
        method: 'GET'
    },

    // 接口请求成功状态 status = 100 与后台规定的表示响应成功code
    resSuccess: {
        key: 'status',
        code: 100
    },
    // 异常情况
    resError: {
        // 异常默认提示的方法
        tipShow: (err) => {
            wx.showToast({
                title: (err && err.message) || '服务器异常，请稍后重试。',
                icon: 'none',
                mask: true
            })
        }
    },
    // 异常状态码
    resErrorCode: {
        '413': {
            msg: '用户已超时,请重新获取',
            code: 413
        }
    },
    // 登录配置，用户失效 令牌重置
    loginCofig: {
        reset: () => {
            let params = { currUserCode: store.getters.userInfo.currUserCode }
            Api.reset(params).then(res => {
                store.dispatch('setUserInfo', res)
            })
        }
    }
}

```

#### 1.6.3 fetch.js

```javascript
import Vue from 'vue'
import Fly from 'flyio'
import reqConfig from './reqConfig'
import qs from 'qs'
import { getToken } from 'utils/index' // 每个公司都用不懂token规则，按实际使用

var fly = new Fly()
Vue.prototype.$http = fly
const request = fly
// 实例级配置
request.config.timeout = 5 * 1000
// 服务地址
request.config.baseURL = process.env.SERVER_HOST

/**
 * 请求拦截器
 */
request.interceptors.request.use((config) => {
    console.log(reqConfig.apiConfig.isLoading)
    // 加载动画
    if (reqConfig.apiConfig.isLoading) {
        reqConfig.loading.loadingShow()
    } else reqConfig.apiConfig.isLoading = true
    // 时间戳
    let timestamp = new Date().getTime()
    config.body = {...config.body, timestamp}
    config.body = {
        ...config.body,
        token: getToken({...config.body})
    }
    config.body = qs.stringify(config.body)
    return config
})

/**
 * 数据返回拦截器，异常统一处理
 */
request.interceptors.response.use(
    (response, promise) => {
        reqConfig.loading.loadingHide()
        // code 100 请求成功
        if (response.status === reqConfig.resSuccess.code) {
            return promise.resolve(response.data)
        }
        // code 413 令牌重置
        if (response.data.status === 413) {
            reqConfig.loginCofig.reset()
        }
    },
    (err, promise) => {
        reqConfig.loading.loadingHide()
        return promise.reject(err)
    }
)

/**
 * ajax 请求
 * @param {*} url 路径
 * @param {*} params 参数列表 type Obejct
 * @param {*} type 类型 defualt ‘get’
 * @param {*} shouldHandle 是否需要对错误特殊处理 default false（不需要）
 *            为ture的时候 需要在请求后面加上 catch 方法捕获错误
 */
export function fetch (url, params, type = 'get', shouldHandle = false) {
    return new Promise((resolve, reject) => {
        request[type](url, params)
        .then(response => {
            resolve(response.data)
        }, err => {
            if (shouldHandle) {
                reject(err)
            }
        })
    })
};

```

#### 1.6.4 api.js
```javascript
注意： 推荐按模块区分Api 方便维护管理
import { fetch } from './fetch'
// 请求配置
import reqConfig from './reqConfig'

const POST = 'post'
const GET = 'get'

// 用户相关等模块操作
const userAPI = {
    // 注册
    register (params) {
        reqConfig.apiConfig.isLoading = false
        return fetch('/basic/register', params, POST)
    }
}
// 公共模块
const commonAPI = {
    ...
}
export default {
    ...userAPI,
    ...commonAPI
}
```

#### 1.6.5 具体使用
```vue
// 1. 引用
import API from 'common/api'
<script>
    export default {
        data() {
            return {
                userName: 'hu-snail',
                password: '123456'
            }
        },
        methods: {
            register() {
                let params = this.getParams()
                // 调用
                API.register(params).then(res => {
                    // 返回结果处理
                    ...
                }).catch(error => {
                    // 异常处理， 注意如果需要捕获异常
                    // 需要在api.js中的接口中设置 true, 默认为false,不拦截异常
                    /** register (params) {
                        reqConfig.apiConfig.isLoading = false
                        return fetch('/basic/register', params, POST, true)
                    }
                    */
                })
            },

            getParams() {
                return {
                    userName: this.userName,
                    password: this.password
                }
            }
        }
    }
</script>
```

### <a name="7">1.7 vuex配置</a>
在src目录下创建vuex文件，具体结构如下；
```json
├─ src
|  ├─ vuex
|     ├─ index.js
|     ├─ moudules 模块
|        ├─ user.js
|     ├─ mutation-types.js 
...
```

#### 1.7.1 index.js文件
```javascript
安装vuex-persistedstate依赖
npm install vuex-persistedstate

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user // 模块， 参考文件目录
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => wx.getStorageSync(key),
                setItem: (key, value) => wx.setStorageSync(key, value),
                removeItem: key => {}
            }
        })
    ]
})

```

#### 1.7.2 mutation-types.js
```javascript
export const SET_USER_INFO = 'SET_USER_INFO' // 设置用户信息

```

#### 1.7.3 user.js
```javascript
import * as types from '../mutation-types.js'
const state = {
    userInfo: {}
}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo ({commit}, res) {
        commit(types.SET_USER_INFO, res)
    }
}

const getters = {
    userInfo: state => state.userInfo
}

const mutations = {
    [types.SET_USER_INFO] (state, res) {
        state.userInfo = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}

```



