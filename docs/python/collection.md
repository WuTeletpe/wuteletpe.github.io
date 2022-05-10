### deque 对象
`class collections.deque([iterable[, maxlen]])``
返回一个新的双向队列对象，从左到右初始化(用方法 append()) ，从 iterable （迭代对象) 数据创建。如果 iterable 没有指定，新队列为空。

Deque队列是由栈或者queue队列生成的（发音是 “deck”，”double-ended queue”的简称）。Deque 支持线程安全，内存高效添加(append)和弹出(pop)，从两端都可以，两个方向的大概开销都是 O(1) 复杂度。

虽然 list 对象也支持类似操作，不过这里优化了定长操作和 pop(0) 和 insert(0, v) 的开销。它们引起 O(n) 内存移动的操作，改变底层数据表达的大小和位置。

如果 maxlen 没有指定或者是 None ，deques 可以增长到任意长度。否则，deque就限定到指定最大长度。一旦限定长度的deque满了，当新项加入时，同样数量的项就从另一端弹出。限定长度deque提供类似Unix filter tail 的功能。它们同样可以用与追踪最近的交换和其他数据池活动。

双向队列(deque)对象支持以下方法：

`append(x)`
添加 x 到右端。

`appendleft(x)`
添加 x 到左端。

`clear()`
移除所有元素，使其长度为0.

`copy()`
创建一份浅拷贝。

3.5 新版功能.

`count(x)`
计算deque中个数等于 x 的元素。

3.2 新版功能.

`extend(iterable)`
扩展deque的右侧，通过添加iterable参数中的元素。

`extendleft(iterable)`
扩展deque的左侧，通过添加iterable参数中的元素。注意，左添加时，在结果中iterable参数中的顺序将被反过来添加。

`index(x[, start[, stop]])`
返回第 x 个元素（从 start 开始计算，在 stop 之前）。返回第一个匹配，如果没找到的话，升起 ValueError 。

3.5 新版功能.

`insert(i, x)`
在位置 i 插入 x 。

如果插入会导致一个限长deque超出长度 maxlen 的话，就升起一个 IndexError 。

3.5 新版功能.

`pop()`
移去并且返回一个元素，deque最右侧的那一个。如果没有元素的话，就升起 IndexError 索引错误。

`popleft()`
移去并且返回一个元素，deque最左侧的那一个。如果没有元素的话，就升起 IndexError 索引错误。

`remove(value)`
移去找到的第一个 value。 如果没有的话就升起 ValueError 。

`reverse()`
将deque逆序排列。返回 None 。

3.2 新版功能.

`rotate(n=1)`
向右循环移动 n 步。 如果 n 是负数，就向左循环。

如果deque不是空的，向右循环移动一步就等价于 d.appendleft(d.pop()) ， 向左循环一步就等价于 d.append(d.popleft()) 。

Deque对象同样提供了一个只读属性:

`maxlen`
Deque的最大尺寸，如果没有限定的话就是 None 。
