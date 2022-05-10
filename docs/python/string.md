## 除去空格
strip() function will remove leading and trailing whitespaces. 
If you want to remove only leading or trailing spaces, 
use lstrip() or rstrip() function instead.

## 改变某一位char
```python
Don't modify strings.

Work with them as lists; turn them into strings only when needed.

>>> s = list("Hello zorld")
>>> s
['H', 'e', 'l', 'l', 'o', ' ', 'z', 'o', 'r', 'l', 'd']
>>> s[6] = 'W'
>>> s
['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
>>> "".join(s)
'Hello World'
```
```python
text = 'abcdefg'; 
text = text[:1] + 'Z' + text[2:]
```

详见  [python/string_format]
## join: list to string
```
>>> li = ['h','e','l','l','o']
>>> li
['h', 'e', 'l', 'l', 'o']
>>> str = "_".join(li)
>>> str
'h_e_l_l_o'
```

## find index
1. 第一次
```py
>>> s = "hello"
>>> s.find("l")
2
```
2. 最后一次
rfind
```py
>>> s = 'hello'
>>> s.rfind('l')
3
```
3. 所有index
没有,请用find自己写循环

## char to ASCII num
ord: 'a' -> 97
chr: 97 -> 'a'
function ord() would get the int value of the char. And in case you want to convert back after playing with the number, function chr() does the trick.

ord('a')
97
chr(97)
'a'
chr(ord('a') + 3)
'd'
>>>
## split string to list
## 是根据 某字符串切分 给定字符串，可以指定切分次数
>>> string = 'http://g.cn'
#第一个参数不填默认是以空格为分界线
>>> string.split(':')
['http', '//g.cn']
#split有第二个参数，是指定切分次数

## 子字符串
>>> a = "helloworld"
>>> a[1:-4]
'ellow'

## 模板字符串
```py
five = 10 - 2 + 3 - 6
print(f"This should be five: {five}")

question_id = 1
"You're looking at question %s." % question_id
```
## 替换
```py
body = body.replace('{{result}}', result)
```
### 替换第一次出现的部分
```python
>>> u'longlongTESTstringTEST'.replace('TEST', '?', 1)
u'longlong?stringTEST'
```
## 是否包含某子字符串
`You can use the in operator:`
```py
if "blah" not in somestring:
    continue
```
## 包含多少个某字符串
```py
if ip.count('.') != 3:
```


### 是否是回文
```python

def isP(s):
    p = 0
    q = len(s) - 1
    while p < q:
        if s[p] == s[q]:
            p = p + 1
            q = q - 1
        else:
            return False
    return True

            
```

```python
    # s[p...q] is P
    def isP(self, s, p, q):
        while p < q:
            if s[p] == s[q]:
                p = p + 1
                q = q - 1
            else:
                return False
        return True
```