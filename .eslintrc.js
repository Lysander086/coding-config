{
  "extends": "standard",
  "plugins": [
    "html"
  ],
  "parser": "babel-eslint",
  // babel处理的语法, eslint可能不太支持
  "rules": {
    "no-new": "off",
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": 1,
    "no-unused-vars": [
      1,
      {
        // 允许声明未使用变量
        "vars": "local",
        // 参数不检查
        "args": "none"
      }
    ],
    // 关闭语句强制分号结尾
    "semi": [
      0
    ],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [
      0,
      {
        "max": 100
      }
    ],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [
      0
    ],
    "space-before-function-paren": "off"
  }
}
