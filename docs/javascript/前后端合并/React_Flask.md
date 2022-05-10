# 一、搭建后台

## 1.安装Flask

```
pip3 install flask
```

## 2.安装virtualenv

virtualenv是一个用于创建虚拟环境的脚本。可以让不同的项目使用自己的一套环境，避免项目间的冲突或者与本地环境的冲突。
 使用
 `pip3 install virtualenv`
 然后创建虚拟环境
 `cd /var/www/WebSite`
 `virtualenv venv`     #创建虚拟环境
 `source venv/bin/activate` #运行虚拟环境
 此时命令提示符变了，有个(venv)前缀，表示当前环境是一个名为venv的Python环境
 然后正常安装各种包，在venv环境下，用pip安装的包都被安装到venv这个环境下，系统Python环境不受任何影响。
 使用`deactivate`命令可以退出当前环境。
 在venv环境下，可以使用`pip3 freeze > requirements.txt`导出当前venv环境中所用到的python第三方库。
 在部署到服务器的过程中，在服务器端运行`pip3 install -r requirements.txt`，可以直接安装项目所需库。

## 3.创建后台文件

创建一个python文件`hello.py`作为项目的入口文件



```python
from backend import creat_app

app = creat_app()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
```

然后创建一个目录为backend做为项目后台
 在backend中创建一个`__init__.py`



```python
from flask import Flask,render_template,g,session
from flask_cors import CORS
def creat_app():
    app = Flask(__name__,template_folder="templates",static_folder="static",static_url_path="/backend/static")
    #防止跨域攻击
    CORS(app)
    #注册蓝图
    from . import main
    app.register_blueprint(main.main)
    app.config['SECRET_KEY'] = '...自己生成的秘钥'
    app.debug = True
    db.init_app(app)
    return app
```

然后创建templates和static目录用于存放渲染模板和其他静态文件。
 创建一个main模块
 在其`__init__.py中`写入



```python
from flask import render_template
from flask import Blueprint
from flask import url_for

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def index(path):
  return render_template('index.html')
```

此时项目的目录如下



```css
WebSite
├──hello.py
└──backend
    ├── __init__.py
    ├── main
    │   └── __init__.py
    ├── static
    └── templates
```

# 二、搭建前台

### 1.init

创建React项目时。使用Facebook 提供的 creat react app 库进行创建。这个库为我们封装好了打包还有开发时要用到的基本库。
 `npm install -g create-react-app`
 `create-react-app frontend`
 创建后目录结构如下



```css
frontend
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
```

package.json中为以下内容



```json
{
  "name": "app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

发现package.json中没有webpack这样的打包工具。
 其实webpack已经安装在`node_modules`中，打包的工作现在全都通过scripts中build来完成。webpack配置文件在 `node_modules`中的react-scripts库内。已经帮我们完成了封装。
 package.json中的许多应用库都已经封装在了react-scripts库中。如果要查看，可以运行`npm run eject`来还原到package.json中。但是注意这个步揍是不可逆的。正常条件下帮我们封装的程序就足够我们打包调试和正常的开发。

可以通过 `npm run +`scripts中的指令来运行scrips中的脚本。
 `npm run start`会运行一个本地的server用于调试代码。

# 三、在Flask后台中运行前台程序

## 1.build目录

`npm run build`会在frontend目录下创建一个build目录。然后将react程序用到的资源以及打包压缩过的js、css文件放入其中。



```css
build
├── asset-manifest.json
├── favicon.ico
├── index.html
├── manifest.json
├── service-worker.js
└── static
    ├── css
    │   ├── main.c17080f1.css
    │   └── main.c17080f1.css.map
    ├── js
    │   ├── main.61911c33.js
    │   └── main.61911c33.js.map
    └── media
        └── logo.5d5d9eef.svg
```

浏览器中，如果文件名不发生变化，可能会导致不更新此文件而是使用本地的缓存文件。react-script的build脚本帮助我们解决了这个问题。
 static目录下的文件后面都有一串hash值。这个值是通过对文件进行md5后取了其中一段作为文件名字的。这样做只要文件发生变化。hash值也会发生变化。这样保证了文件有所更新后。build出来的文件的名字也会变化。

## 2.配置到服务器

虽然build文件已经生成。但是生成的路径是在frontend目录下。而要Flask后台上运行，需要把build中的入口文件index.html移动到backend的template目录下。而其他的js、css、图片等则要移动到backend中的static目录下方便外部访问。
 所以我们要在`npm run build`的前后加入一些命令或者脚本，移动文件到backend下的目录。
 移动好后，项目结构大致如下



```css
WebSite
├──hello.py
├──frontend
│   └── ...
└──backend
    ├── __init__.py
    ├── main
    │   └── __init__.py
    ├── static
    │   └── build
    │       ├── asset-manifest.json
    │       ├── favicon.ico
    │       ├── manifest.json
    │       ├── service-worker.js
    │       └── static
    │           ├── css
    │           │   ├── main.c17080f1.css
    │           │   └── main.c17080f1.css.map
    │           ├── js
    │           │   ├── main.040641a3.js
    │           │   └── main.040641a3.js.map
    │           └── media
    │               ├── 1.0ebbf763.jpg
    │               └── logo.5d5d9eef.svg
    └── templates
        └── index.html
```

编辑package.json,在script中加入钩子



```bash
"prebuild":"rm -rf ../backend/templates/index.html && rm -rf ../backend/static/build",
"postbuild": "mv build/index.html ../backend/templates/ &&  mv build ../backend/static/", 
```

作用分别为在build前后执行一些shell命令
 具体可以看一下Blog中的介绍
 http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
 这样。我们运行`npm run build`后。生成的文件就已经放入到了backend中。

但是此时运行`python hello.py`会发现。打开的网页是空白。查看templates下的index.html会发现，其中引用的文件的链接地址不正确



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/build/manifest.json">
    <link rel="shortcut icon" href="/build/favicon.ico">
    <title>My Web</title>
    <link href="/build/static/css/main.c17080f1.css" rel="stylesheet">
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="text/javascript" src="/build/static/js/main.040641a3.js"></script>
</body>
</html>
```

基于我们上面服务器的配置，



```python
app = Flask(__name__,template_folder="templates",static_folder="static",static_url_path="/backend/static")
```

我们staic文件的路径应该是`/backend/static/...`上面的js路径应该为
 `/backend/static/build/static/js/main.040641a3.js`时，才能访问到此文件。
 我们可以在package.json中指定homepage参数来指定生成文件的主页路径。
 在package.json中添加



```bash
  "homepage": "/backend/static/build"
```

此时的package.json如下



```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-scripts": "1.1.4",
  },
  "scripts": {
    "start": "react-scripts start",
    "prebuild":"rm -rf ../backend/templates/index.html && rm -rf ../backend/static/build",
    "build": "react-scripts build",
    "postbuild": "mv build/index.html ../backend/templates/ &&  mv build ../backend/static/", 
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "homepage": "/backend/static/build"
}
```

然后重新`npm run build`。再运行`python hello.py`页面就可以正常显示了。

实际上我们运行`npm run build`的时候使用的是`frontend/pubilc`目录下的文件做模板的。生成的index.html也是按照public下的index.html生成的。如果我们要改后端static文件下build文件的结构。需要同时修改public中的index.html文件。使其生成的入口文件中的静态文件地址能被找到。
 修改favicon.icon 可以改变文件标签上的图标。
 而manifest.json文件是控制将站点添加至主屏幕时的一些配置的。可以参照一下文章
 https://lavas.baidu.com/mip/doc/engage-retain-users/add-to-home-screen/introduction

至此。react+flask 开发网页的基本框架就完成了。



作者：AricWu
链接：https://www.jianshu.com/p/b348926fa628
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 补充

#### Flask函数的几个路径参数是相对于谁的路径

![image-20200222154442051](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200222154442051.png)

![image-20200222154446076](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200222154446076.png)

由图可知，Flask函数 template_folder、static_folder 的路径是`相对当前调用Flask函数的文件`的相对路径.

#### package.json homepage属性的作用

项目结构

![image-20200222153506839](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200222153506839.png)

package.json 的设置

![image-20200222153531405](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200222153531405.png)

最终结果：

1. index.html仍然生成在了hack_dxy_react/build文件夹下而不是homepage处。
2. 注意这里index.html是索引不到的静态资源的，后续应该把 build 移到/backend/static

![image-20200222153355283](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200222153355283.png)

3. 如图所示。index.html（React根据模板在build时生成的文件）会根据 homepage属性来索引静态文件。具体方法是 `homepage值/index到静态文件的相对路径`来拼接成一个绝对路径。