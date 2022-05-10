  goroutine是golang中在语言级别实现的轻量级线程，仅仅利用 go 就能立刻起一个新线程。多线程会引入线程之间的同步问题，在golang中可以使用channel作为同步的工具。

通过channel可以实现两个goroutine之间的通信。

**创建一个channel**， make(chan TYPE {, NUM}) , TYPE指的是channel中传输的数据类型，第二个参数是可选的，指的是channel的容量大小。

**向channel传入数据**， CHAN <- DATA , CHAN 指的是目的channel即收集数据的一方， DATA 则是要传的数据。

**从channel读取数据**， DATA := <-CHAN ，和向channel传入数据相反，在数据输送箭头的右侧的是channel，形象地展现了数据从‘隧道’流出到变量里。  