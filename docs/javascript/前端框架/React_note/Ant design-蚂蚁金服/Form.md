### Form
// 经 Form.create() 包装过的组件会自带 this.props.form 属性

### Form.Item

### getFieldDecorator
// getFieldDecorator(id, options)

getFieldDecorator是一个方法，这个方法接收两个参数，第一个是表单的字段对象，第二个是验证规则。这个方法本身返回一个方法，需要将需要获取值的标签包裹进去

options.rules	校验规则，参考下方文档
    message	校验文案
    required 是否必选

```js
<FormItem>
  {
    getFieldDecorator('password', {
      rules: [{
        required: true,
        message: '请填入密码'
      }]
    })(
      <Input type='password' prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='Password' />
    )
  }
</FormItem>
```
