### 位运算


### import
from bitmap import BitMap

### new
bm = BitMap(32)

### to string
bm.tostring()

### set No.k bit
bm.set(4)
print(bm.tostring())
// 00000000000000000000000000010000

### string to bitmap object
bm = BitMap.fromstring("00011101")
print(bm.tostring())
// 00011101

### 翻转某一位
bm.flip(1)
print bm.tostring()
// 00011111

### 最高位是第几位
```python
>>> X = 99
>>> bin(X), X.bit_length()
('0b1100011', 7)
```

### api
- BitMap(maxnum): construct a BitMap object with maxnum bits
- set(pos): set the bit at position pos to 1
- reset(pos): reset the bit at position pos to 0
- flip(pos): flip the bit at position pos
- count(): return the number of 1s
- size(): return the size of the BitMap
- test(pos): check if bit at position pos has been set to 1
- any(): check if any bit in the BitMap has been set to 1
- none(): check if none of the bits in the BitMap has been set to 1
- all(): check if all bits in the BitMap has been set to 1
- nonzero(): return indexes of all non-zero bits
- tostring(): convert a BitMap object to 0 and 1 string
- fromstring(bitstring): create a BitMap object from 0 and 1 string