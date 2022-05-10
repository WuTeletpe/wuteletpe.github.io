```py
import math

#向上取整
print "math.ceil---"
print "math.ceil(2.3) => ", math.ceil(2.3)
print "math.ceil(2.6) => ", math.ceil(2.6)

#向下取整
print "\nmath.floor---"
print "math.floor(2.3) => ", math.floor(2.3)
print "math.floor(2.6) => ", math.floor(2.6)

#四舍五入
print "\nround---"
print "round(2.3) => ", round(2.3)
print "round(2.6) => ", round(2.6)
```

## 余数
3 % 2 == 1

### 最大最小及其索引
```python
import operator
value = [1,2,3,4,5]
min_index, min_value = min(enumerate(value), key=operator.itemgetter(1))
max_index, max_value = max(enumerate(value), key=operator.itemgetter(1))
```

```python

"""
1. 传入可迭代对象时，取其元素最大值
"""
s = '12345'
print(max(s))

"""
2. 传入可迭代对象为空时，必须指定参数default，用来返回默认值
"""
print(max((),default=1))

"""
3.传入命名参数key，其为一个函数，用来指定取最大值的方法
"""
s = [
  {'name': 'sumcet', 'age': 18},
  {'name': 'bbu', 'age': 11}
]
a = max(s, key=lambda x: x['age'])
print(a)

"""
{'name': 'sumcet', 'age': 18}
"""
min()函数与max()用法相同，返回最小值
```
