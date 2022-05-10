### 计算数学里的 C
```python
import math
n = 5
k = 3
math.comb(n, k)
"""
10
"""
```

### 计算数学里的阶乘
```python
import math
>>> math.factorial(5)
120
```

### 找出所有组合(数学排列组合里的C)
```python
"points 是一个数组"
points = [1, 2, 3, 4]
"从 points 中任取 3 个元素, 返回所有的取法. 返回值是一种特殊类型, 需要用 list( obj ) 转一下.或者直接 for in 展开"
itertools.combinations(points, 3)
"""
[(1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)]
"""
```

### 找出所有排列(数学排列组合里的A)
```python
points = [1, 2, 3, 4]
"返回值是一种特殊类型, 需要用 list( obj ) "
itertools.permutations(points, 3)
"""
[
(1, 2, 3), (1, 2, 4), (1, 3, 2), (1, 3, 4), (1, 4, 2), (1, 4, 3), 
(2, 1, 3), (2, 1, 4), (2, 3, 1), (2, 3, 4), (2, 4, 1), (2, 4, 3), 
(3, 1, 2), (3, 1, 4), (3, 2, 1), (3, 2, 4), (3, 4, 1), (3, 4, 2), 
(4, 1, 2), (4, 1, 3), (4, 2, 1), (4, 2, 3), (4, 3, 1), (4, 3, 2)
]
"""
```

### 计算一堆点里能组合出来的三角形的最大面积
```python
def largestTriangleArea(points: List[List[int]]) -> float:
    "给定三个点的 (x,y) 计算这个三角形的面积, 即使共线也只是返回 0, 不会有错"
    def area_of_tri(p1, p2, p3):
        x1, y1 = p1
        x2, y2 = p2
        x3, y3 = p3
        return 0.5 * abs(
            (x1 * y2 + x2 * y3 + x3 * y1) - 
            (y1 * x2 + y2 * x3 + y3 * x1)
        )
    area_list = [area_of_tri(*point_3) for point_3 in itertools.combinations(points, 3)]
    return max(area_list)
```

accumulate 是用来计算前缀和的
你可以自己传一个函数来定义什么叫 和
```python
import itertools
  
# import operator to work 
# with operator
import operator
  
# creating a list GFG
GFG = [1, 2, 3, 4, 5]
  
# using the itertools.accumulate() 
result = itertools.accumulate(GFG, 
                              operator.mul)
  
# printing each item from list
for each in result:
    print(each)
"""
1
2
6
24
120
"""
```

https://docs.python.org/zh-cn/3.6/library/bisect.html