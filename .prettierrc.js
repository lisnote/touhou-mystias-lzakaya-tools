module.exports = {
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
  endOfLine: 'lf', // 使用\n作为换行符
  htmlWhitespaceSensitivity: 'css', // 对HTML全局空白敏感
  printWidth: 80, // 单行长度
  proseWrap: 'preserve', // markdown 中不进行自动换行
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  tabWidth: 2, // 缩进长度
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  useTabs: false, // 使用空格代替tab缩进
  vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
};
