```js
import { writeFile } from 'fs'
```
### 注意

#### 需要写在最前面
import 语句 必须写在文件的最开头，import 语句和import 语句之间不能有别的 如 `require("moment")`语句

#### 需要设置 babel
1. 安装
> npm i babel-cli babel-preset-env -D
>
> npm i nodemon -D
2. 新增 .babelrc
```.babelrc
{
	"presets": [
		[
			"env",
			{
				"targets": {
					"node": "current"
				}
			}
		]
	]
}

```

3. 添加 package.json

```json
"dev": "nodemon -w src --exec \"babel-node src --presets env\""
```

---

其他写法

```js
import { promisify } from 'util'
import { resolve as r} from 'path' // 使用别名
import { readFile, writeFileSync as wfs } from 'fs' // 引用多个
import * as qs from 'querystring' // 引用所有

promisify(readFile)(r(__dirname, '../package.json'))
	.then(data => {
   		data = JSON.parse(data)
    	console.log(data.name)
    	wfs(r(__dirname, './name'), String(data.name), 'uft8')
	})

```
