```py
"""在 classmethod 中得到类的名字"""
classname = cls.__name__
"""在普通方法中得到类的名字"""
classname = self.__class__.__name__
""" __dict__ 是包含了对象所有属性和值的字典"""
dict = self.__dict__
```
```py
迭代器详见 generator.md
__iter__
__next__
```

```py
简单
__add__ 用来重写加法
__eq__ 判断两对象是否相等

复杂但有用
__getattribute__ 当读取该对象的某个属性(的确有这个属性)时，会先调用该方法
__setattribute__ 被去掉了

class LogAll(object):
    def __init__(self):
        self.a = 1
        self.b = 2
        self.c = 3
    def __getattribute__(self, item):
        print(item)

l = LogAll()
print(l.a)
l.a = 1
l.b
l.c

__getattr__ 最后的守门员，对象没有该属性且被读取的时候
__setattr__ 最后的守门员，对象没有该属性且被赋值的时候
missing method

class Any(object):
    def __getattr__(self, item):
        print(item)

    def __setattr__(self, key, value):
        print("set", key, value)

a = Any()
a.a
a.a = 1

# 一个对象
# 可以接受任何参数
# 可以接受任何函数
class Any(object):
    def __getattr__(self, item):
        # item 是被读取/调用的属性/函数的名字
        def _(*args, **kwargs):
            print("function name", item)
            print("args", args)
            print("kwargs", kwargs)

        # 保存一下，为了以后调用的时候直接读取结果，比较快
        setattr(self, item, _)
        # 如果是在调用函数，最后还需要将_返回出去才能调用
        return _


a = Any()
a.fuck(1, 2, 3)
a.shit(1, 2, [1, 2, 3], c=[])

```
## mixin


## getattr setattr
```py
func = getattr(self, func_name)

func(1, 2, 3)  
```
