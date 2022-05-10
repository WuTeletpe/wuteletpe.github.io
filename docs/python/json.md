## json的编码和译码
```py
# 编码成 json
json.dumps(data, ensure_ascii = False, indent = 2)
data: 数据
ensure_ascii: 让其正确处理中文
indent: 表示格式化缩进,方便好看用的
```
```py
>>> import json
>>> json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
'["foo", {"bar": ["baz", null, 1.0, 2]}]'
```
```py
# 译码成 python 对象 -->
>>> import json
>>> json.loads('["foo", {"bar":["baz", null, 1.0, 2]}]')
['foo', {'bar': ['baz', None, 1.0, 2]}]
```

## 对于类的json化
.toJSON() Method（并不是什么关键词，只是一个易懂的名字）
```py
import json

class Object:
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,
            sort_keys=True, indent=4)
me = Object()
me.name = "Onur"
me.age = 35
me.dog = Object()
me.dog.name = "Apollo"

print(me.toJSON())
```

## json 文件
```py
import json

with open('strings.json') as json_data:
    d = json.load(json_data)
    print(d)

```
