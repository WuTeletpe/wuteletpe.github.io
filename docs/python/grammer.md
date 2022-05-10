1.python中不叫null 叫None
```python
if foo != None:
    pass
```
2.type 知道一个值的类型
```python
a = "helloworld"
print(type(a))
```
3.可变参数与关键字参数
可变参数:  
定义：在参数前面加了一个*号  
在函数内部，参数numbers接收到的是一个tuple
```py
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
```
不传
```py
calc()
```
传入普通变量
```py
calc(1, 2, 3)
```
传入一个list或tuple
```py
#可以是一个list 或 tuple
nums = [1, 2, 3]
calc(*nums)
```
关键字参数:
定义:在参数前面加了一个**号  
```py
def person(name, age, **kw):
    print 'name:', name, 'age:', age, 'other:', kw
```
不传
```py
>>> person('Michael', 30)
name: Michael age: 30 other: {}
```
传入普通变量
```py
>>> person('Bob', 35, city='Beijing')
name: Bob age: 35 other: {'city': 'Beijing'}
>>> person('Adam', 45, gender='M', job='Engineer')
name: Adam age: 45 other: {'gender': 'M', 'job': 'Engineer'}
```
传入一个dict
```py
>>> kw = dict(city = 'Beijing', port = 'Engineer')
>>> person('Jack', 24, **kw)
name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}
```
4.断言
### assert 是一个语句, 名字叫 断言
### 如果断言成功, 条件成立, 则通过测试
### 否则为测试失败, 中断程序报错
```py
assert u == expected, e
```
5.super
函数super(Student, self)将返回当前类继承的父类,然后调用__init__()方法，注意self参数已在super()中传入，在__init__()中将隐式传递，不需要写出（也不能写）。

6.__dict__
```
object.__dict__
A dictionary or other mapping object used to store an object’s (writable) attributes.
```
7. 条件赋值
```py
a = A[half_k_i] if len(A) > (half_k_i) else None
```

8. if
```py
if a_half_k < b_half_k:
    return findKth(A_tail, B, k - k//2)
elif a_half_k > b_half_k:
    return findKth(A, B_tail, k - k//2)
else:
    return a_half_k
```
