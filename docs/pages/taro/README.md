---
title: Taro自定义组件封装
date: 2019-06-26
tags:
- taro taro ui
---

参考案列：图片上传

::: warning 注意
需要注意的点：组件类名称为了不与`Taro` , `TaroUI`, `WX`自带的标签名字冲突，本项目中自定义的组件需要添加`S`,如：export default class `SImage` extends Component {}
`prop-types`:  '^15.7.2' 组件参数类型
命令：`npm install prop-types --save`
:::

## 创建组件

路径： `src/components/upload/image.js`

```js
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'
import PropTypes from 'prop-types'
import { http } from '../../config'
import { RES_STATUS } from '../../constant'
// 图片上传组件
class SImage extends Component {
  ...
}

export default SImage

```

## 组件参数默认值配置

注意：`SImage` 表示类名，与Taro UI 组件设计保持一致

```js
// 默认值
SImage.defaultProps = {
    showAddBtn: true,
    multiple: true,
    length: 4,
    onSuccess: () => {}
}
```

## 组件参数类型配置

注意：先安装`npm install prop-types --save`插件

```:js
// 参数类型检查
SImage.propTypes = {
    showAddBtn: PropTypes.bool,
    multiple: PropTypes.bool,
    length: PropTypes.number,
    onSuccess: PropTypes.func
  }

```

## 组件统一入口配置

注意：参考路径：`src/components.js`,自定义的所有组件都需要注册在这个文件，便于统一引用

```js
// eslint-disable-next-line import/prefer-default-export
export { default as SImage } from './components/upload/image'
```

## 组件自定义方法

支持传参

```js
this.props.onSuccess()
```



## 使用自定义的组件

使用方式同`Taro ui`组件一致

```js
// 引用自定义组件
import { SImage } from '../../components'

// 调用组件里的自定义方法
onSuccess (files) {
  console.log(files)
}

render () {
    return (
      <View className='index'>
       <SImage onSuccess={this.onSuccess.bind(this)} multiple></SImage>
      </View>
    )
}
```


