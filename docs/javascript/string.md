## 字符串拼接--模板字符串
// 得到一个你想要的字符串有多种方式  
// 但是现在有现代的方式, ES6(上课会解释什么是 ES6) 的 模板字符串  
// 注意, 书上如果和我不一样, 以我为准  
// 用法如下  
```javascript
var name = 'gua'
var a = `${name}, 你好`
log(a)
// 简单说来, 就是 ${} 会被变量替换行成新字符串
```

// 字符串相当于一个一定长度的 array，可以用数字下标访问  
// 看例子，看结果  
// s 的长度为7，但是下标是从 0 开始的，所以最大下标是6  
var s = 'iamgood'
log(s[0])
log(s[1])
log(s[2])
// ...
log(s[6])
//  
// 当然也就可以和 array 一样用循环遍历了  

## 子字符串
特殊:
usr_name[0] 也是 string 类型

最后一个字符：a.slice(-1)

// 字符串可以切片, 当然, array 也可以这样切片  
// 语法如下  
// s.slice(开始下标, 结束下标)  
```javascript
s.slice(0, 3)  // 'iam'
s.slice(1, 3)  // 'am'
```
// 省略下标参数意思是取到底
```javascript
s.slice(2)   // 'mgood'
```
## ——字符串操作——  
// 字符串可以判断相等、判断是否包含、相加、取子字符串  
// 例子：  
### 判断相等
```javascript
log('good' == 'good')
log('good' == 'bad')
log('good' != 'bad')
```
### 相加得到一个新字符串
```js
log('very' + 'good')
log('very ' + 'good')
```

### 判断包含
```js
var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
```
## 替换 replace

<!-- 简洁替换 -->
```js
'.1.2.3'.split('.').join('#')
```

str.replace(regexp|substr, newSubStr|function)
replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。
模式可以是一个字符串或者一个正则表达式,
替换值可以是一个字符串或者一个每次匹配都要调用的函数。
注意：原字符串不会改变。
```js
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```
```js
// 如果第二个参数使用一个函数--该函数的参数个数不定
// (精确的参数个数依赖于replace()的第一个参数是否是一个正则表达式对象， 以及这个正则表达式中指定了多少个括号子串。)
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```
## 数字化
```js
var int = parseInt('2')
>>> 2
```
## 数字字符串化
```js
var int = 1
int.toString()
>>> "1"
```
## 分割为 list
```js
var str = 'The quick brown fox jumped over the lazy dog.';
var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
```
## 判断为空
```js
function isEmpty(str) {
    return (!str || 0 === str.length);
}
```
