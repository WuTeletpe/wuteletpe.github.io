### 开启 module
GO111MODULE=off，go命令行将不会支持module功能，寻找依赖包的方式将会沿用旧版本那种通过vendor目录或者GOPATH模式来查找。
GO111MODULE=on，go命令行会使用modules，而一点也不会去GOPATH目录下查找。
GO111MODULE=auto，默认值，go命令行将会根据当前目录来决定是否启用module功能。这种情况下可以分为两种情形：
- 当前目录在GOPATH/src之外且该目录包含go.mod文件
- 当前文件在包含go.mod文件的目录下面。

当modules 功能启用时，依赖包的存放位置变更为$GOPATH/pkg，允许同一个package多个版本并存，且多个项目可以共享缓存的 module。

### 换源(CDN 加速代理)
#### 启用 Go Modules 功能
go env -w GO111MODULE=on

#### 配置 GOPROXY 环境变量，以下三选一

1. 七牛 CDN
go env -w  GOPROXY=https://goproxy.cn,direct

2. 阿里云
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct

3. 官方
go env -w  GOPROXY=https://goproxy.io,direct

### 初始化 在 GOPATH 外创建一个新的项目
```shell
go mod init hello # 创建一个 go.mod 文件
```
go toolchain 会在各类命令执行时，比如go get、go build、go mod等修改和维护go.mod文件


### 在代码中 import 包
```golang
package main

import (
	"net/http"
	
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
```
### 运行
执行 go run server.go 运行代码会发现 go mod 会自动查找依赖自动下载，并且 go.mod会更新
```go.mod
module hello

go 1.12

require (
	github.com/labstack/echo v3.3.10+incompatible // indirect
	github.com/labstack/gommon v0.2.8 // indirect
	github.com/mattn/go-colorable v0.1.1 // indirect
	github.com/mattn/go-isatty v0.0.7 // indirect
	github.com/valyala/fasttemplate v1.0.0 // indirect
	golang.org/x/crypto v0.0.0-20190313024323-a1f597ede03a // indirect
)
```
#### go.mod 语法解释
每行包含一个指令，由一个前导动词后跟参数组成。
所有前导动词的作用如下：

- module：定义模块路径。
- go：设置预期的语言版本。
- require：要求给定版本或更高版本的特定模块。
- exclude：排除特定版本模块的使用，不允许的模块版本被视为不可用，并且查询无法返回。
- replace：使用不同的模块版本替换原有模块版本。

Go 命令行工具会自动处理 go.mod 中指定的模块版本。当源代码中 import 指向的模块不存在于 go.mod 文件中时，Go 命令行工具会自动搜索这个模块，并将最新版本（最后一个 tag 且非预发布的稳定版本）添加到 go.mod 文件中。

如果没有 tag，则使用伪版本，这是一种版本语法，专门用于标记没有 tag 的提交（一些 golang.org/x/ 下的包就是没有 tag 的）。如：v0.0.0-20190603091049-60506f45cf65。

前面部分为语义化版本号，用于标记版本；中间部分为 UTC 的提交时间，用于比较两个伪版本以其确定先后顺序；后面部分是 commit 哈希的前缀，用于标记该版本位于哪个 commit。

### 升级已引入的包
可以使用命令 go list -m -u all 来检查可以升级的 package ，同时也会更新 go.mod
使用go get -u need-upgrade-package 升级 单个 package
 
### go mod命令解释
命令	        含义
go mod download	下载依赖的module到本地cache
go mod edit	    编辑go.mod文件
go mod graph	打印模块依赖图
go mod init	    当前文件夹下初始化一个新的module, 创建go.mod文件
go mod vendor	将依赖复制到vendor下
go mod tidy	    增加丢失的module，去掉未用的module
go mod verify	校验依赖
go mod why	    解释为什么需要依赖

### go vendor
go mod vendor
go mod vendor 会复制modules下载到vendor中, 貌似只会下载你代码中引用的库，而不是go.mod中定义全部的module。

### 清除本地GOPATH下的的库文件
go clean --modcache # 把 go/pkg/mod 下的 连 cache目录 带其他下载库 一块删掉 然后把 mod 也删掉