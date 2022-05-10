1. npm install css-loader style-loader --save-dev
2. ![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567152431256.png)
3. (css-loader引入了样式文件。style-loader让样式可以生效,其实就是新建了一个style标签并插入)
4. ![1567152190160](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567152190160.png)

4. webpack hello.js -o hello.bundle.js

---

方式二：在命令行中指定loader(不需要在require里指定)

1. `require("./style.css")`

2. webpack hello.js -o hello.bundle.js --module-bind 'css=style-loader!css-loader'