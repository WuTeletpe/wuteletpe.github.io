## socket(需要引入socket库)
### HTTP 格式
### 请求
```
(首部行)POST /login HTTP/1.1
(header)Host: localhost:3000
Content-Length: 25
Cookie: user=8siksdsbkjdac4ea
\r\n
(body part)username=gua&password=123
---------------
(首部行)GET /login HTTP/1.1
(header)Host: localhost:3000
Cookie: user=8siksdsbkjdac4ea
\r\n
(body part)空
```
### 响应
```
HTTP/1.1 200 OK
content-type: text/html\r\n
content-length: ...\r\n
\r\n
(body part)<html>
...
</html>
```
### 请求
1. 创建一个 socket 对象
```python
# 参数 socket.AF_INET 表示是 ipv4 协议
# 参数 socket.SOCK_STREAM 表示是 tcp 协议
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 这两个其实是默认值, 所以你可以不写, 如下
# s = socket.socket()
# 如果用HTTPS
# import ssl
# s = ssl.wrap_socket(socket.socket())
```
2. 用 connect 函数连接上主机, 参数是一个 tuple
```python
# 主机(域名或者ip)和端口
host = 'g.cn'
port = 80
s.connect((host, port))
# 下面是没用的，看看就可以
# 连接上后, 可以通过这个函数得到本机的 ip 和端口
ip, port = s.getsockname()
print('本机 ip 和 port {} {}'.format(ip, port))
```
3. 构造一个 HTTP 请求
```python
http_request = 'GET / HTTP/1.1\r\nhost:{}\r\n\r\n'.format(host)
```
4. 发送 HTTP 请求给服务器
```python
# send 函数只接受 bytes 作为参数
# str.encode 把 str 转换为 bytes, 编码是 utf-8
request = http_request.encode('utf-8')
print('请求', request)
s.send(request)
```
5. 接受服务器的响应数据
```python
# 参数是长度, 这里为 1023 字节
# 所以这里如果服务器返回的数据中超过 1023 的部分你就得不到了
response = s.recv(1023)

# 输出响应的数据, bytes 类型
print('响应', response)
# 转成 str 再输出
print('响应的 str 格式', response.decode('utf-8'))
```
### 响应
1.创建一个 socket 实例

```python
s = socket.socket()
```

2.s.bind 用于绑定

```python
# 注意 bind 函数的参数是一个 tuple
host = ''
port = 2000
s.bind((host, port))
```

3.用一个无限循环来处理请求  
1)套路, 先要 s.listen 开始监听

```python
s.listen(5)
```

2) 当有客户端过来连接的时候, s.accept 函数就会返回 2 个值

```python
# 分别是 连接 和 客户端 ip 地址
connection, address = s.accept()
```

3) recv 可以接收客户端发送过来的数据

```python
# 参数是要接收的字节数
# 返回值是一个 bytes 类型
request = connection.recv(1024)
# 以下的只是看看
# bytes 类型调用 decode('utf-8') 来转成一个字符串(str)
print('ip and request, {}\n{}'.format(address, request.decode('utf-8')))
# b'' 表示这是一个 bytes 对象
```

4) 用 sendall 发送给客户端

```python
response = b'<h1>Hello World!</h1>'
connection.sendall(response)
# 发送完毕后, 关闭本次连接(还在while true里，进行下一次循环)
connection.close()
```
### url encode
百分比编码（也称为URL编码）
url中只允许出现的字符有限，其他字符均转义为%xxxx的形式传递
python 中可以用 unquote_plus(url) 译码
unquote函数功能相同但无法转义 空格 变成的+,会保持该+
空格在某些不规范的编码方式中被处理为+
