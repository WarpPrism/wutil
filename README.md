# wutils 通用前端工具库

主要封装 **业务中常用** 的函数，特别是lodash未实现的一些业务函数，但一定程度上和lodash有交集。如果lodash已实现同样功能的函数，建议采用lodash。

## 技术选型
rollup打包、ES6编码、babel7.0转译、jest测试
~~~
# 构建
npm run build
# 测试
npm run test
# 只测试某一个模块 e.g.
npm run test array.test.js
~~~

## 使用方法
wutils模块的默认构建方式是 **es**，即ES6模块。如果想要生成commonjs或amd模块，请修改 ```rollup.config.js``` 文件里的 ```OUTPUT_MODULE_TYPE``` 属性即可。

ES6模块使用举例

~~~js
// 整个模块引入
import wutils from 'wutils.js'

wutils.getBrowser()
~~~

~~~js
// 按需引入
import { getBrowser, getOS } from 'wutils.js'

getBrowser()
getOS()
~~~

## 模块分类说明

### array

- isArr
- quickSortArr
- uniqueArr
- shuffleArr
- binarySearchArr

### date

- formatDate
- getDateObj

### dom

- setClass
- hasClass
- addClass
- removeClass

### function

- debounce (同 lodash.debounce)
- throttle (同 lodash.throttle)
- poll
- once

### object

- isPlainObj
- isEmptyObj
- extend (同 jQuery.extend)
- stringfyQueryString

### platform

- getOS
- getBrowser
- isWeixin

### print

- chalkPrint

### random

- randomColor
- randomInt
- randomString

### regexp

- isEmail
- isIdCard
- isPhoneNum
- isUrl

### storage

- setCookie
- getCookie
- removeCookie

### string

- cutString
- upcaseMoney
- replaceXSS
- parseQueryString
- b64EncodeUnicode
- b64DecodeUnicode

> 持续更新中