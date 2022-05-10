```py
'''
1. generator
for i in range(1000000000)
for i in xrange(100000000)

l = [1...1000000000]
for i in l:
    print(i)

希望1就够了
'''

__iter__ 迭代器初始化的方法
__next__ 迭代器访问下一个元素的方法

# 1.for的初始化
# 调用iter方法时
# 内部会调用obj的__iter__方法
iter(obj)
obj.__iter__()

# 2.for的递进
# 调用next方法时
# 内部会调用obj的__next__方法
next(obj)
obj.__next__()

iterator 就是实现了 __iter__方法 和 __next__方法 的对象

以下两段代码等价
(a)
for i in range(10):
    pass


(b)
iter_obj = range(10)
iter(iter_obj)

while True:
    try:
        i = next(iter_obj)
    except StopIteration:
        break

以下是一个实现了两个迭代器方法的类

class Pow2(object):
    def __init__(self, max):
        self.max = max
        self.n = 0

    def __iter__(self):
        self.n = 0
        # 注意这里要返回自身
        return self

    def __next__(self):
        if self.n < self.max:
            self.n += 1
            return 2 ** self.n
        else:
            raise StopIteration


p = Pow2(10)
for i in p:
    print(i)



```
