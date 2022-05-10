## 定义和使用
```go
var n [10]int /* n 是一个长度为 10 的数组 */
var i,j int
dp := make([]int, n) // 如果n是变量，只能用make来预定义长度

/* 为数组 n 初始化元素 */         
for i = 0; i < 10; i++ {
   n[i] = i + 100 /* 设置元素为 i + 100 */
}
```


## 得到长度
```go
numbers := []int{0,1,2,3,4,5,6,7,8}   
var l = len(numbers)
```

## 拷贝
```go
/* 拷贝 numbers 的内容到 numbers1 */
copy(numbers1,numbers)
```
## 添加元素
```go
/* 添加一个元素 */
numbers := []int{0,1,2,3,4,5,6,7,8}   

numbers = append(numbers, 1)
printSlice(numbers)

/* 同时添加多个元素 */
numbers = append(numbers, 2,3,4)
printSlice(numbers)


/* 往头部添加 */ 
var x []int
for i := 2; i < 10; i += 2 {
   x = append(x, i)
}
fmt.Println(x)

x = append([]int{1}, x...)
```


## 切片
```go
/* 创建切片 */
numbers := []int{0,1,2,3,4,5,6,7,8}   
/* 打印原始切片 */
fmt.Println("numbers ==", numbers)

/* 打印子切片从索引1(包含) 到索引4(不包含)*/
fmt.Println("numbers[1:4] ==", numbers[1:4])

/* 默认下限为 0*/
fmt.Println("numbers[:3] ==", numbers[:3])

numbers == [0 1 2 3 4 5 6 7 8]
numbers[1:4] == [1 2 3]
numbers[:3] == [0 1 2]
numbers[4:] == [4 5 6 7 8]
```

## 遍历
```go

```

### make

内建函数 make 用来为 slice，map 或 chan 类型分配内存和初始化一个对象(注意：只能用在这三种类型上)，跟 new 类似，第一个参数也是一个类型而不是一个值，跟 new 不同的是，make 返回类型的引用而不是指针，而返回值也依赖于具体传入的类型

```go
var slice_ []int = make([]int,5,10)
fmt.Println(slice_)

var slice_1 []int = make([]int,5)
fmt.Println(slice_1)

var slice_2 []int = []int{1,2}
fmt.Println(slice_2)

打印结果：
[0 0 0 0 0]
[0 0 0 0 0]
[1,2]
```


# 容器库
一个可以PushFront的容器
```go
func reversePrint(head *ListNode) []int {
   // 用普通数组会慢
	// var array []int
	// p := head
	// for p != nil {
	//     array = append([]int{p.Val}, array...)
	//     p = p.Next
	// }
	// return array
	array := list.New()
	p := head
	for p != nil {
		array.PushFront(p.Val)
		p = p.Next
	}
	res := []int{}
	for e := array.Front(); e != nil; e = e.Next() {
		res = append(res, e.Value.(int))
	}
	return res
}
```
