module.exports = {
    extends: 'airbnb-base',
    rules: {
        "no-undef": 1,             // [警告]不允许有未定义的变量
        "operator-assignment": 1,  // [警告]不允许赋值运算符速记
        "prefer-destructuring": 1, // [警告]强制使用解构而不是通过成员表达式访问属性
        "prefer-template": 1,      // [警告]使用模板文字而不是字符串连接
        "no-unused-vars": 1,       // [警告]未使用的变量或函数参数
        "no-use-before-define": 1, // [警告]对尚未声明的标识符的引用时发出警告。
        "consistent-return": 1,    // [警告]return语句总是或永远不指定值。
        "spaced-comment": 0,       // [关闭]注释开始后，此规则将强制间距的一致性
        "arrow-body-style": 0,     // [关闭]强制或禁止在箭头函数体的周围使用大括号
        "object-curly-newline": 0, // [关闭]对象文字或解构赋值的大括号内强制执行一致的换行符
        "no-lonely-if": 0,         // [关闭]不允许将if语句作为else块中的唯一语句
        "eol-last": 0,             // [关闭]非空文件的末尾至少执行一个换行符
        "comma-dangle": 0,         // [关闭]强制在对象和数组文字中一致地使用尾随逗号
        "no-plusplus": 0,          // [关闭]不允许一元运算符++和--
        "arrow-parens": 0          // [关闭]强制箭头函数中一致使用圆括号
    },
    "globals":{
        "document": true,
        // "localStorage": true,
        "window": true,
        "Audio":true
      }
};
