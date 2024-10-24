module.exports = {
    extends: ['react-app', 'plugin:vitest/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'prettier', 'plugin:storybook/recommended'],
    plugins: ['unused-imports', 'no-relative-import-paths', 'import', 'prettier', 'vitest'],
    rules: {
        'prettier/prettier': 'off',
        // 'flowtype/require-valid-file-annotation': ['error', 'always', { annotationStyle: 'block' }],
        'unused-imports/no-unused-imports': 'off',
        // 'import/no-default-export': 'error',
        'no-relative-import-paths/no-relative-import-paths': ['off', { allowSameFolder: false }],
        'no-use-before-define': 'off', // turn off since it does not work with types
        'no-unused-expressions': 'off',
        'no-undef': 'off',
        'no-restricted-globals': 'off',
        'react-hooks/rules-of-hooks': 'off',
    },
    settings: {
        'import/resolver': {
            // make absolute path available for typescript
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    ignorePatterns: ['dist'],
};
