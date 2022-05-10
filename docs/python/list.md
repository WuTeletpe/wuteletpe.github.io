## 去空格 line is a string
line.strip()

## 访问元素
list 是从下标0开始的
所以
a = [1,2,3,4]
a[0] == 1
而list的[:4]这样指定结尾的操作是不包含结尾的
所以[1:4]不包含下标a[4]
a[1:4] == [2,3]
综上,a[:4]指的是前4个元素
a[:4] == a[0:4] == [1,2,3,4]

a[1:] == a[1:结尾]

## 反向
nums[-1::-1]

## 将 l 的 `[i..j]` 的部分翻转
```python
>>> l = list(range(0, 7))
>>> l
[0, 1, 2, 3, 4, 5, 6]
>>> i, j = 2, 5
>>> l[i:j+1]
[2, 3, 4, 5]
>>> l[j:i-1:-1]
[5, 4, 3, 2]
>>> l[i:j+1] = l[j:i-1:-1]
>>> l
[0, 1, 5, 4, 3, 2, 6]
```
## filter
a = filter(lambda x: x % 2 == 0, range(10))
list(a)
## 复制一个数组（copy）
list.slice(0)
## 假的深拷贝
l2 = l1[:] # 当数组l1内元素仍然是数组时就会错
## 深拷贝
```py
from copy import deepcopy
l1 = []
l2 = deepcopy(l1)
l1.append(1)
print(l2)
```

//得到list的操作
## 字符串分片得到子数组 --> get a list
words = stuff.split(" ")
特别的 每个字符作为一个元素
```py
s = "12345"
l = list(s)
```
## 添加元素
list = []          ## 空列表
list.append('Google')   ## 使用 append() 添加元素
list.append('Runoob')
## 插入元素
list.insert(index, obj)
参数
index -- 对象 obj 需要插入的索引位置。
obj -- 要插入列表中的对象。
## 取最大值
```python
list1, list2 = ['123', 'xyz', 'zara', 'abc'], [456, 700, 200]

print "Max value element : ", max(list1);
print "Max value element : ", max(list2);
```
## 取最小值对应的索引
```py
a = [1,2,5,3,4,-1]
index_min = min(range(len(a)), key=a.__getitem__)
# index_min == 5
```
## 取最大的 2 个值

```python
integers = [1, 16, 3, 39, 26, 4, 8, 16]

largest_integer = max(integers)  #  39
integers.remove(largest_integer)

second_largest_integer = max(integers)  # 26
```

## any 接收一个存储bool的list，

当list全为False, any返回Fasle
否则(有至少一个为True), any返回True
```py
if any([rule[0] == symbol for rule in grammer]):
	pass
```

## 列表推导
```py
list comprehension
[i for i in range(10)]
dict comprehension
{k:1 for k in range(10)}

直接产生数组太占内存，用 generator
list generator
(i for i in range(10))
dict generator


filter method
[i for i in range(10) if i % 2 == 0]
```
## 对list的操作
>>> a = "h e l l o w o r l d".split(' ')
>>> a
['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
### 排序
```python
>>> sorted(a)
['d', 'e', 'h', 'l', 'l', 'l', 'o', 'o', 'r', 'w']

data = [[8,2],[4,2],[4,5],[2,0],[7,2],[1,4],[9,1],[3,1],[9,0],[1,0]]

data.sort(key = lambda x: (-x[0], x[1]))
result [[9, 0], [9, 1], [8, 2], [7, 2], [4, 2], [4, 5], [3, 1], [2, 0], [1, 0], [1, 4]]
就是按第一个元素降序排列，如果相等就按第二个元素升序排列

如果你需要指定这个函数的参数为 要比较的两个元素，应该这么写
import functools
def sort_rule(x, y):
    a, b = x, y
    if a > b: return 1 # 会认为 x > y 排序时 【1, 2, 3, y, x】
    elif a < b: return -1 # 会认为 x < y 排序时 【1, 2, 3, x, y】
    else: return 0 # 会认为 x == y

strs = [str(num) for num in nums]
strs.sort(key = functools.cmp_to_key(sort_rule))
return ''.join(strs)

```
### 弹出栈
>>> a.pop(0)
'h'
>>> a
['e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
### yield
```py
def my_range(n):
    i = 0
    while i != n:
        i += 1
        # yield 中断
        yield i


r = my_range(10)
for i in r:
    print(i)
```

### map 对数组每一个元素做操作组成新的数组
```py
>>> def square(x) :         # 计算平方数
...     return x ** 2
...
>>> map(square, [1,2,3,4,5])    # 计算列表各个元素的平方
<map object at 0x100d3d550>     # 返回迭代器
>>> list(map(square, [1,2,3,4,5]))   # 使用 list() 转换为列表
[1, 4, 9, 16, 25]
>>> list(map(lambda x: x ** 2, [1, 2, 3, 4, 5]))   # 使用 lambda 匿名函数
[1, 4, 9, 16, 25]
>>>
```