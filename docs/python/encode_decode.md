```
 bytes 是 python3新增的数据类型
 有些函数需要用到这样类型的参数
 所以需要用string转化
 方法是encode 可以将string转化为bytes
 从bytes转化为string的方法是decode
 具体用法参见[python/decodeBytes_encodeString]
```
简单用法
# encode string --> bytes
```python
str = "helloworld"
bs = str.encode("utf-8")
#具体看的话,bs 打印出来前面会有个b 代表bytes
```
# decode bytes --> string
```python
str2 = bs.decode("utf-8")
```
### python 的 取反符号 ~
我无法理解. 但的确是这样
特点: ~x == -x-1

110 == 6

~6 == -7 == 111

并不是 001(-_-|||)

111 == -7
```python
如果 a 是一个数, 我想让 python 认为它是一个负数
即认为把最高位 bit 31 当做符号位.
0b1111111111111111111111111101111 不是一个很大的数 2147483631
而是 -17
~(a ^ 0x7fff_ffff)
```
