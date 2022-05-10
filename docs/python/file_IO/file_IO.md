## save file
```python
import os
## 创建文件夹
folder_path = "f://testImg//"
file_path = folder_path + 'test.gif'
if os.path.exists(folder_path) == False:  # 判断文件夹是否已经存在
    os.makedirs(folder_path)  # 创建文件夹
## 保存
with open(file_path, 'wb') as file:
    file.write(img)
    file.flush()
    pass


def log(*args, **kwargs):
    # time.time() 返回 unix time
    # 如何把 unix time 转换为普通人类可以看懂的格式呢？
    format = '%H:%M:%S'
    value = time.localtime(int(time.time()))
    dt = time.strftime(format, value)
    with open('log.gua.txt', 'a', encoding='utf-8') as f:
        print(dt, *args, file=f, **kwargs)


def write(data, path):
    """
    本函数把 data 写入文件
    path 是保存文件的路径
    """
    with open(path, 'w+', encoding='utf-8') as f:
        f.write(data)


def read(path):
    """
    本函数从一个文件中载入数据
    path 是保存文件的路径
    """
    with open(path, 'r', encoding='utf-8') as f:
        s = f.read()
        return s


## json 格式的读写
import json
def save(data, path):
    """
    本函数把一个 dict 或者 list 写入文件
    data 是 dict 或者 list
    path 是保存文件的路径
    """
    # json 是一个序列化/反序列化(上课会讲这两个名词) list/dict 的库
    # indent 是缩进
    # ensure_ascii=False 用于保存中文
    s = json.dumps(data, indent=2, ensure_ascii=False)
    with open(path, 'w+', encoding='utf-8') as f:
        # log('save', path, s, data)
        f.write(s)


def load(path):
    """
    本函数从一个文件中载入数据并转化为 dict 或者 list
    path 是保存文件的路径
    """
    with open(path, 'r', encoding='utf-8') as f:
        s = f.read()
        # log('load', s)
        return json.loads(s)
```

## 获得路径下所有文件名
```
os.listdir()
```

## 打开图片

```py
from PIL import Image

img = Image.open('F://image//007ZKdkxgy1gbcc8f0p21j30lc0tuju5.jpg')
img.show()
```

