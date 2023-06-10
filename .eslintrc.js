module.exports = {
    // 继承eslint规则
    extends: ['eslint:recommended'],
    env: {
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    rules: {
        "no-var": 2, // 不能使用 var 定义变量
    }
}