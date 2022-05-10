select 是 Go 中的一个控制结构，类似于用于通信的 switch 语句。每个 case 必须是一个通信操作，要么是发送要么是接收。

select 随机执行一个可运行的 case。如果没有 case 可运行，它将阻塞，直到有 case 可运行。一个默认的子句应该总是可运行的。

### 语法

Go 编程语言中 select 语句的语法如下：

```go
select {
  case communication clause  :
    statement(s);    
  case communication clause  :
    statement(s);
  /* 你可以定义任意数量的 case */
  default : /* 可选 */
    statement(s);
}
```
以下描述了 select 语句的语法：

- 每个 case 都必须是一个通信

- 所有 channel 表达式都会被求值

- 所有被发送的表达式都会被求值

- 如果任意某个通信可以进行，它就执行，其他被忽略。

- 如果有多个 case 都可以运行，Select 会随机公平地选出一个执行。其他不会执行。

  否则：

  1. 如果有 default 子句，则执行该语句。
  2. 如果没有 default 子句，select 将阻塞，直到某个通信可以运行；Go 不会重新对 channel 或值进行求值。

### 实例

select 语句应用演示：

## 实例

```go

package main

import "fmt"

func main() {
  var c1, c2, c3 chan int
  var i1, i2 int
  select {
   case i1 = <-c1:
     fmt.Printf("received ", i1, " from c1\n")
   case c2 <- i2:
     fmt.Printf("sent ", i2, " to c2\n")
   case i3, ok := (<-c3): // same as: i3, ok := <-c3
     if ok {
      fmt.Printf("received ", i3, " from c3\n")
     } else {
      fmt.Printf("c3 is closed\n")
     }
   default:
     fmt.Printf("no communication\n")
  }   
}
```
以上代码执行结果为：

```
no communication
```

对于 select 中的通道进行写操作的时候,怎么理解 https://golangbyexample.com/select-send-operation-go/
```golang
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    go goOne(ch1)
    go goTwo(ch2)
    select {
    case ch1 <- "To goOne goroutine":
    case ch2 <- "To goTwo goroutine":
    }
    time.Sleep(time.Second * 1)
}

func goOne(ch chan string) {
    msg := <-ch
    fmt.Println(msg)
}    

func goTwo(ch chan string) {
    msg := <-ch
    fmt.Println(msg)
}
```
```Output
To goTwo goroutine
```

In the above program, both case statements is sending data to the ch1 and ch2 channel respectively. The data from the ch1 channel is being received in goOne goroutine and the data from the ch2 channel is being received in goTwo goroutine. None of the send operation in each of the case statement is blocked.  So the program can either output this
在上面这个程序里, 两个 case 各自将数据发到 ch1 和 ch2, 写入到 ch1 通道的数据在被 goOne 协程中被接收, ch2数据同理.
两个case语句里的写操作都没有被阻塞,  所以这个程序有可能输出下面的任何一种情况 (具体是哪一种是随机的)
```
To goOne goroutine
```
or this
```
To goTwo goroutine
```