module.exports = {
    extends: ['plugin:vue/vue3-recommended', 'airbnb', '@vue/eslint-config-typescript'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/html-self-closing': 'off',
        'arrow-body-style': 'off',
        'no-param-reassign': 'off',
    },
    node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
            },
        },
    },
};