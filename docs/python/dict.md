dict是存储key-value的数据类型
定义:
r = {
  'key1': value1,
  'key2': value2,
}
如上，注意key要写字符串，每一行都要加逗号
技巧：存储key-function而不要key-function()
因为如果存储的是key-function(),每次访问这个dict的时候，所有的function都会被调用
## 判断为空
```py
if bool(d) is True:
    print("the dict is not empty"):
else:
    print("the dict is empty")

"""way2"""

if not d:
    print("the dict is empty")
```
## 合并
```
>>> a = {"a": 1}
>>> b = {"g":2}
>>> a.update(b)
>>> a
{'a': 1, 'g': 2}
```
## 访问字典里的值
```
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print "dict['Name']: ", dict['Name']

dict.get('file', 'doge.gif') // 有默认值的访问方法,如果key不存在则返回默认值
```

## 遍历
```
for key in d:
    t = key + d[key]
```
```
for k, v in d.items():
    t = k + v
```
## key 是否在 dict 中
**in** is the intended way to test for the existence of a key in a dict.
```python
d = {"key1": 10, "key2": 23}

if "key1" in d:
    print("this will execute")

if "nonexistent key" in d:
    print("this will not")
```
## 只要 key
dict.keys()
以列表返回一个字典所有的键

## 只要 value
dict.values()
以列表返回字典中的所有值

## 删除元素
### 方法1
del d[key]

由于其他人可能有这个字段中的对象引用, 你应该copy一份
```python
def removekey(d, key):
    r = dict(d)
    del r[key]
    return r
```
### 方法2
```python
>>> lol = {"hello": "gdbye"}
>>> lol.pop("hello")
     'gdbye'
>>> lol
     {}
```