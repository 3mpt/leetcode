import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import globals from 'globals'
export default [
  eslintPluginPrettierRecommended,
  {
    name: 'global config',
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node,
      },
      // 配置解析器支持的语法相关的选项
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false, // 不针对不支持的 TypeScript 版本发出警告
      },
    },
    rules: {
      'no-debugger': 'error', // 禁止使用 debugger
      'no-console': 'warn', // 只警告使用 console
      'space-infix-ops': ['error', { int32Hint: false }], // 规则：运算符周围要有空格，除非是 int32Hint
      'default-case-last': 'error', // switch 语句中的 default 必须在最后
      'max-depth': ['error', 5], // 代码块嵌套的深度禁止超过 5 层
      'array-callback-return': 'off', // 禁用数组回调函数没有返回值的警告
      'no-dupe-else-if': 'error', // 禁止 if-else 语句中出现重复的条件
      'no-duplicate-imports': 'off', // 禁止重复导入模块
      'no-eq-null': 'error', // 禁止使用 foo == null，必须使用 foo === null
      eqeqeq: 'off', // 不强制使用严格等于 (===)，可以使用宽松等于 (==)
      semi: ['error', 'never'], // 禁止使用分号结尾
      'no-inner-declarations': ['error', 'both'], // 禁止在代码块内声明函数和 var 变量
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true, // 允许字符串中的特殊空白符
          skipComments: false, // 禁止注释中的特殊空白符
          skipRegExps: true, // 允许正则表达式中的特殊空白符
          skipTemplates: true, // 允许模板字符串中的特殊空白符
        },
      ],
      'no-empty-function': 'error', // 禁止空函数
      'no-var': 'error', // 禁止使用 var，推荐使用 let 和 const
      'no-loss-of-precision': 'error', // 禁止使用超出 JS 精度范围的数字
      'no-unused-vars': [
        // 已定义的变量必须使用
        'error',
        {
          vars: 'all', // 所有变量都需要使用
          args: 'none', // 不检查函数参数
          ignoreRestSiblings: false, // 不忽略对象中剩余的成员
          caughtErrors: 'none', // 不忽略捕获的错误
        },
      ],
      'no-useless-concat': 'error', // 禁止出现不必要的字符串连接
      'one-var': ['error', 'never'], // 禁止一次性声明多个变量
      'prefer-const': 'off',
      'prefer-promise-reject-errors': 'error', // Promise 的 reject 中必须传入 Error 对象，而不是字面量
      'comma-dangle': 'off', // 不校验是否具有拖尾逗号
      'multiline-ternary': 'off', // 禁止强制要求三元表达式换行
      'no-prototype-builtins': 'off', // 允许直接使用内置属性
      curly: 'off', // 允许单条代码块不使用大括号
      'no-extra-boolean-cast': 'off', // 允许额外的布尔值转换
      'no-new': 'warn', // 禁止使用 `new` 创建实例化对象后不赋值，给出警告
      'no-useless-escape': 'off', // 允许某些字符转义
      'space-before-function-paren': 'off', // 允许或禁止函数圆括号之前有一个空格
    },
  },
]
