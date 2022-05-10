### 在 package.json build 过程中移动生成文件至后端

使用跨平台命令，如 `rm -rf` --> `rimraf`, `mkdir` --> `mkdirp`

package.json

```json
"build": "rm -rf ./build && mkdir ./build && ./node_modules/.bin/babel -d ./build ./src"
```

That script was written for the UNIX shell, which does not work on windows. The correct way to do this in a cross-platform way is to use [rimraf](https://www.npmjs.com/package/rimraf) & [mkdirp](https://www.npmjs.com/package/mkdirp).

```json
"build": "rimraf ./build && mkdirp ./build && babel -d ./build ./src"
```

```json
"build": "rimraf ./ && mkdirp ./build && babel -d ./build ./src"
```



另一种方式:使用shx库

```powershell
npm i -D shx
```

在 package.json 中只需在使用Unix命令前加上 shx 即可

```json
    "prebuild": "rimraf ../backend/templates/index.html && rimraf ../backend/static/dist",
    "postbuild": "shx mv dist/index.html ../backend/templates/ && shx mv dist ../backend/static/"
```

### vue.config.js

对于vue项目，需要在前端根目录增加 vue.config.js。

![image-20200226111243517](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200226111243517.png)

进行一些设置，才能正常和后端合并。

官网地址：[https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE](https://cli.vuejs.org/zh/config/#全局-cli-配置)

设置项包括：

- publicPath

```js
    "publicPath": "/backend/static/dist",
```

在package.json中的homepage无效，应该改用 vue.config.js 中的 publicPath。

- chainWebpack

  ```js
      "chainWebpack": config => {
          /**
           * 删除懒加载模块的 prefetch preload，降低带宽压力
           */
          config.plugins
              .delete('prefetch')
              .delete('preload')
      }
  ```

用来代替webpack配置文件的选项。此处需要去掉 preload，否则在部署后端静态文件时css样式会不起效果。