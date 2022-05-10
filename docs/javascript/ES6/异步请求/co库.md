### 阮一峰老师博客的例子

手动执行 generator 函数

![image-20201026124315181](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201026124315181.png)

```
❯ node .\test4.js
before gen()
before next1
before read f1
before next2 data =  <Buffer 7b 66 65 77 7d 0d 0a 7b 65 66 77 71 7d 0d 0a 7b 64 73 66 65 77 7d 0d 0a> 
// {few}
// {efwq}
// {dsfew}
//  
before read f2
before next3 data =  <Buffer 6a 6b 69 75 6c 67 74 67 75 63 66 79 72>
before toString
{few}
{efwq}
{dsfew}

jkiulgtgucfyr
```

疑问: yield 的地方似乎分了两支,一支作为外边g.next()的返回值, 一支等待下一个 g.next()的时候交给 = 左边的变量,如这里的 f1 和 f2.

可是从实际的值来看, 作为返回值的这一支是一个字典 {value: Promise对象,  done: false或 true}, 而作为内部变量的这一支 跟 Promise对象.then(function(data) {...}) 里的 data 是同样的东西.

所以,问题就是, yield 是对这一支做了拆解了吗?

