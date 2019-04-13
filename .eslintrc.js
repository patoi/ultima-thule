module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: ['no-null'],
    rules: {
        'no-console': 'off',
        'no-null/no-null': 2,
    },
}
