集合（set）是一个无序的不重复元素序列。
0. 定义
 thisset = set(("Google", "Runoob", "Taobao"))

1、添加元素
语法格式如下：

s.add( x )

还有一个方法，也可以添加元素，且参数可以是列表，元组，字典等，语法格式如下：

s.update( x )

2、移除元素
语法格式如下：

s.remove( x )

此外还有一个方法也是移除集合中的元素，且如果元素不存在，不会发生错误。格式如下所示：

s.discard( x )

我们也可以设置随机删除集合中的一个元素，语法格式如下：

s.pop()

3、判断元素是否在集合中存在
语法格式如下：

x in s

### 合并
union() 方法返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。

语法
union() 方法语法：

set.union(set1, set2...)

### 其他
```python
a = t | s          # t 和 s的并集  
  
b = t & s          # t 和 s的交集  
  
c = t – s          # 求差集（项在t中，但不在s中）  
  
d = t ^ s          # 对称差集（项在t或s中，但不会同时出现在二者中）  
```