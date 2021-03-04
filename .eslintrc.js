module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended', "@vue/standard"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        'vue/no-unused-vars': 'off',
        'vue/require-v-for-key': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-components': 'off',
        "space-before-function-paren": "off",
        indent: "off",
        semi: 2,

    },

};
