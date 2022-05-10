typescript = type + javascript
```ts
var book: string = "Angular 2";
var num: number = 123;
function log(msg: string): void {
  console.log(msg)
}
```
类和接口
```ts
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private length: number
  ) { }

  area() {
    return this.width * this.length;
  }
}
```

装饰器
```ts
@SomeDecorator({
  // 配置
})
class SomeClass {}
```
```ts
function SomeDecorator(config: any) {
  return function(cls: any) {// cls 为类的构造函数
    cls.isSealed = true;
    return cls;
  }
}
```
