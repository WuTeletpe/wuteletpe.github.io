### demo
message.py 是最简单和全面的例子。
没有提到的点
1. 模板文件夹
```python
# 先要初始化一个 Flask 实例
app = Flask(__name__)
```
Flask函数的第二个参数是模板文件夹路径（用来存放 jinjia 的模板）
默认是`templates`（记得不要忘记最后的字母s）

2. 运行后无法响应
换一个端口试试

### demo2
1. 引用静态文件
静态文件夹用来存放静态的css、js文件
#### 默认情况
默认的Flask项目文件结构是这样的:
```
/app.py
/static
    /js
    /css
    /img
/templates
    /index.html
```
然后，你的前端访问后台静态资源，是通过这个 url: `/static/file.name`

```html
<link as=style href=/static/css/app.697eaad8.css rel=preload>
<img src="/static/img/mylogo.jpg" />
```
#### 参数配置
Flask函数的第三个参数 static_url_path 是 **前端访问静态文件夹时使用的路径,后端会将这个路径重定位到静态文件夹**，
static_url_path:
前端访问资源文件的前缀目录。默认是/static，就是前端必须这样访问：<img src="/static/img/mylogo.jpg" />
我们改成 ''，就可以这样访问了：<img src="/img/mylogo.jpg" />。就达到前端从根目录访问的目的了。


Flask函数的第四个参数 static_folder 是 **后端存储静态文件时使用的路径,指明哪一个文件夹是静态文件夹**，
static_folder:
后端存储资源文件的目录。默认是/static，就是指明你后端的资源文件，是放在<your project>/static/目录下，一般不需要改动。

```python
app = Flask(__name__,template_folder="templates",static_folder="static",static_url_path="/backend/static")
```

之后，在`templates`中的模板html中引用静态的css、js文件，只需写上面 第三个参数 static_url_path 的值即可。
/templates/index.html
```html
<head>
    <title>Todo</title>
    <link rel="stylesheet" href="/static/css/pure-min.css">
</head>
```
