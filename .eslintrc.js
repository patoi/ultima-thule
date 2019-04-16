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
    plugins: ['no-null', 'jsdoc', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
        'no-null/no-null': 2,
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 0,
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-returns-description': 1,
        'jsdoc/require-returns-type': 1,
    },
}
