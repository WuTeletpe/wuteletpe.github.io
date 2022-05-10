1. 计算机存储数字很方便
2. 想要存储 字符 需要将 字符 通过 '字符集' 对应为数字
-> 出现 'ASCII 字符集'来将英文字符对应为 7bit
-->Python
ord('p') 在ASCII中得到 字符 对应的 数字  实际上是查看在 Unicode 中对应的数字
chr(112) 在ASCII中得到 数字 对应的 字符  实际上是查看在 Unicode 中对应的字符
到此，
step 1 '将 字符 映射为 数字' 称之为 字符集映射
step 2 '将 数字 存储为 二进制' 称之为 编码(encoding)
3. 世界上多种语言
-> 出现了以 ASCII 为基础的多种 '字符集'，如 GB2312(用区位码实现 字符集映射 )
--> 在之后有所扩展: 国内的 GB18030, 台湾的 BIG5
---> 各国字符集互不兼容, 互为乱码
4. 出现了 Unicode 统一字符集
字符集映射 规则：
1) 00000 ~ 10FFFF 前2个十六进制位 用作 字符平面索引 后4个用作 字符 第 0 平面兼容 ACSII
编码(存储) 规则：
1) 2字节 直接存 UTF-16 浪费 大小端
2) 4字节 UTF-32 太过浪费 基本不用
3) 1~4字节变长 UTF-8
    首字节                     其余字节
    ASCII = 1字节             头部均为10 其余位置用于存储
    110   = 2字节
    1110  = 3字节
    11110 = 4字节
5. python 中的 字符串 和 字节字面量
字符串 -->
```py
a = 'python'
print(type(a))
# < class 'str'>
```
字节字面量 -->
1)\xff 代表十六进制 0xff
2)python 特性 当 字节字面量 属于ASCII 范围内 print会输出对应字符而不是十六进制数 如 print(b'\x70\x79') --> b'py'
3讨厌\x，可以用by.hex() 得到纯16进制数字的形式，但结果的类型其实是str
```py
by = b'\xff\xee\xcc'
print(by)
# b'\xff\xee\xcc'
print(type(by))
# < class 'bytes' >
```
encode :字符串 to 字节字面量
decode :字节 to 字符串
encode
```py
a = 'hello'
bytes = a.encode()
print(bytes)
# b'hello'
```
```py
a = '我'
print(a.encode('UTF-16'))
print(a.encode('UTF-32'))
print(a.encode('GB2312'))

```
decode
```py
print(b'\xe6\x88\x91'.decode())
# 我  字符串类型
print(b'\xce\xd2'.decode('GB18030'))
# 我  字符串类型
```
6. 有些 Unicode 字符 无法打印，这时我们用\u 来表示
```py
a = '\u6211' # a是字符串类型 其实跟 '我' 是同一个东西
print(a)
# 我
```
7. 想直接看到某个字符 encode 后没有 \x 的十六进制数
```py
>>> a
'我'
>>> print(a.encode())
b'\xe6\x88\x91'
>>> print(a.encode('raw_unicode_escape'))
```
