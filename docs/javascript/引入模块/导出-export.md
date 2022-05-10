#### 注意 import 的使用需要 babel

ex.js

```js
export const name = 'Luke'
export const getName = () => {
	return name
}

```


对应 index.js
```js
import { name } from './ex'
import { getName } from './ex'
// import { name, getName } from './ex'
// 必须有大括号
// 不可以这么写 import name from './ex'
console.log(name)
console.log(getName())
```
---

ex.js
```js
const age = 19

export default age
```

对应 index.js
```js
import age from './ex'
console.log(age)
// 只有这种default的才可以不带大括号导出

// 其实此时都不需要名字一致
// import ageee from './ex'
// console.log(ageee)
```

---
批量导出
ex.js
```js
export {
	name as name2,
	getName as getName2,
	age
}
```

对应 index.js
```js
import {
	name2 as name3,
	getName2 as getName3,
	age as age2
} from './ex'
console.log(name3)
console.log(getName3())
console.log(age2)
```
