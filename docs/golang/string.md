### 官网文档 strings

https://golang.org/pkg/strings/

### 字符串拼接
```go
Go 允许你通过 "+" 的方式连接字符串，但这种方式在处理大量字符串连接的场景下将非常低效。使用 bytes.Buffer 连接字符串是一个更高效的方式，它会一次性将所有的内容连接起来转化成字符串
import (
    "bytes"
)

var b bytes.Buffer
for i := 0; i < 1000; i++ {
	b.WriteString(randString())
}
fmt.Println(b.String())
```

### 字符串切割 split

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Printf("%q\n", strings.Split("a,b,c", ","))
	fmt.Printf("%q\n", strings.Split("a man a plan a canal panama", "a "))
	fmt.Printf("%q\n", strings.Split(" xyz ", ""))
	fmt.Printf("%q\n", strings.Split("", "Bernardo O'Higgins"))
}

["a" "b" "c"]
["" "man " "plan " "canal panama"]
[" " "x" "y" "z" " "]
[""]

```

### string to int

The most common numeric conversions are Atoi (string to int) and Itoa (int to string).

```go
i, err := strconv.Atoi("-42")
```

ParseBool, ParseFloat, ParseInt, and ParseUint convert strings to values:

```go
b, err := strconv.ParseBool("true")
f, err := strconv.ParseFloat("3.1415", 64)
i, err := strconv.ParseInt("-42", 10, 64)
u, err := strconv.ParseUint("42", 10, 64)
```

### number to string

```go
s := strconv.Itoa(-42)
```

FormatBool, FormatFloat, FormatInt, and FormatUint convert values to strings:

```go
s := strconv.FormatBool(true)
s := strconv.FormatFloat(3.1415, 'E', -1, 64)
s := strconv.FormatInt(-42, 16)
s := strconv.FormatUint(42, 16)
```

### Convert string to bytes

When you convert a string to a byte slice, you get a new slice that contains the same bytes as the string.

```
b := []byte("ABC€")
fmt.Println(b) // [65 66 67 226 130 172]
```

Note that the character `€` is encoded in UTF-8 using 3 bytes. See the [Go rune article](https://yourbasic.org/golang/rune/) for more on UTF-8 encoding of Unicode code points.

### Convert bytes to string

When you convert a slice of bytes to a string, you get a new string that contains the same bytes as the slice.

```
s := string([]byte{65, 66, 67, 226, 130, 172})
fmt.Println(s) // ABC€
```
