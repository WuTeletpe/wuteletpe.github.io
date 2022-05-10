- 依赖注入 Dependency Injection
- 元数据 Metadata
- 指令 Directives
- 数据绑定
- 服务 Services
- 模块 Modules
- 模板 Templates
- **组件 Components**

- **组件 Components**
js html css
输入接口  
@Input() data: IContact;
```ts
// 父组件
@Component({
 selector: "contact-list",
 template: `
  ...
  // 使用了子组件的标签
  // [] 输入
  <contact [data]="item">/<contact>
  ...
 `
})
// 子组件
@Component({
  selector: 'contact'
})
export class contactComponent {
  @Input() data: string;
}
```
输出接口
```ts
@Output() private outer = new EventEmitter<string>();
```
生命周期
- Constructor
- OnChanges
- OnInit --> ngOnInit
- OnChanges
- OnDestroy

组件例子
```ts
// 装饰器
@Component({
  // 元数据
  // css选择器-组件的标签名
  selector: "hello",
  // 模板
  // 插值-数据绑定
  template: "<p>{{greeting}}</p>"
})
// 组件类
export class HelloComponent {
  private greeting: string;
  constructor() {
    this.greeting = "Hello, Angular 2!";
  }
}
```
```html
<hello></hello> -->
<hello>
  <p>Hello, Angular 2! </p>
</hello>
```
