> npm i glob -S

可以使用 * 匹配某个路径下所有文件
```js
glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)
```
