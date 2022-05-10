**vue-cli-service lint**

```
使用：vue-cli-service lint [options] [...files]

选项：

  --format [formatter] 指定格式器 (默认值：codeframe)
  --no-fix             不修复错误
  --max-errors         指定使构建失败的错误数量 (默认值：0)
  --max-warnings       指定使构建失败的警告数量 (默认值：Infinity)
```

校验并修复文件中的错误。如果没有指定文件，则会校验 `src` 和 `test` 中的所有文件。

也支持其它 [ESLint CLI 的选项](https://eslint.org/docs/user-guide/command-line-interface#options)。

