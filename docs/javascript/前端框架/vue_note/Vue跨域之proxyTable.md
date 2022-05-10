### 原理

该种方式基于 vue 的一个插件 http-proxy-middleware而这个插件又依赖于node-http-proxy, 

node-http-proxy 模块用于转发 http 请求，其实现的大致原理为使用 http 或 https 模块搭建 node 代理服务器，将客户端发送的请求数据转发到目标服务器

所以http-proxy-middleware是在开启反向代理



1. vue-cli 3 项目node_modules中默认会有，无需在package.json声明或手动npm安装

![1570591735962](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570591735962.png)

2. 在 vue-cli 3 版本中使用该插件的方法是在根目录创建vue.config.js文件，具体写法如下

```js
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/haha': {//此处为了区分我在8080端口的请求路径用haha
                target: 'http://localhost:9000/api',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/haha': ''  // rewrite path
                }
            }

        }
    }
}
```

以上配置做到的事：

1. 8080端口发出了请求(如ajax), 地址为http://localhost:8080/haha/log（这里应该分为两部分看,http://localhost:8080是一部分，/haha/log是一部分）
2. 由于路径包含/haha，所以被proxy下的 '/haha' 匹配
3. 由于配置了 pathRewrite，所以 '^/haha' 匹配的部分被替换为 ''(空串)， 此时第二部分的路径变为 /log
4. 由于配置了target，所以第一部分的路径被替换为'http://localhost:9000/api',此时总路径为

'http://localhost:9000/api/log'，该路径正好为后端服务器api的路径

tip：实测时发现，`target: 'http://localhost:9000/api'` 后面如果多加了 反斜杠`/`，

变成`target: 'http://localhost:9000/api/'` 也能正确处理



下面是两种测试案例

测试1(没有配置 pathRewrite ，/haha被保留到了最后)


![1570591404712](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570591404712.png)

![1570591443617](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570591443617.png)





测试2（配置了pathRewrite，路径只保留了haha后的部分）

![1570591597239](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570591597239.png)

![1570591576249](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570591576249.png)

### 使用多个路由转发

```json
// vue.config.js
let proxyObj = {};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://localhost:8081"
};

proxyObj['/haha'] = {//配置跨域
    target: 'http://localhost:9000/api/',//这里后台的地址模拟的;应该填写你们真实的后台接口
    ws: true,
    changeOrigin: true,//允许跨域
    pathRewrite: {
        '^/haha': ''  // rewrite path
    }
}

proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}

module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: proxyObj,
    }
}
```

千万要注意的一点是，proxyObj 这个字典加入路由的顺序是有影响的。

对于'/'这样的匹配必须放到最后，否则所有其他请求都会先被这个匹配到。

即先写`proxyObj['/haha'] = {...}`后写`proxyObj['/'] = {...}`那么能匹配haha的就按haha的转发，不能的就按/转发。

如果先写`proxyObj['/'] = {...}`后写`proxyObj['/haha'] = {...}`。那haha等于白写，所有的请求都从/转发。

