### 关于深拷贝浅拷贝
```py
def foo(a=[]):
    a.append(1)
    print(a)
foo()
foo()
>>> [1]
>>> [1, 1]
```
