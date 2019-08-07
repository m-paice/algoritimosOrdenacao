module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
