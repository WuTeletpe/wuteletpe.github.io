目标：页面中的'什么'元素：数据1，数据2
入口页：从'哪儿'进入
URL格式:
---页面中的URL格式（如href中的）
数据格式:
---数据1：<dd xxx>xxxx </dd>
---数据2：<dd xxx>xxxx </dd>
页面编码：如UTF-8

实际操作
## 1.get data
way 1 : requests库
```python
import requests
import urllib.request
r = requests.get(url)
print(r.content)
#或
print(r.text[-500:])
```
复杂(标准点)
```python
def getHTMLText(url):
	try:
		kv = {"user-agent": "Mozilla/5.0"}
		r = requests.get(url,headers = kv)
		r.raise_for_status()#确定是200否则抛异常
		r.encoding = r.apparent_encoding
		return r.text
	except:
		return "产生异常"
```

way 2 : urllib库
```python
request = urllib.request.Request(url)
request.add_header("user-agent","Mozilla/5.0")
response = urllib.request.urlopen(request)
#if response.getcode() != 200:
print(response.read())
```
## 2.parse data
way 1 BeautifulSoup库
```text
    1)soup = BeautifulSoup(r,"html.parser")//得到bs对象(汤)  
    #print(soup.prettify) 美化输出  
    2)soup.find, soup.find_all 参数是标签名、_class、
    （重点）href=re.compile(r'/item/')
    #得到元素后还可以
    #下行遍历 .contents .children 用于迭代的{.descendants}
    #平行遍历 .next_sibling .previous_sibling 用于迭代的{.next_siblings .previous_siblings}
    #上行遍历  .parent 用于迭代的{.parents}
```
way 2 re库(正则表达式)
