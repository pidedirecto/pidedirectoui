module.exports = {
    printWidth: 200,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'all',
    arrowParens: 'always',
    requirePragma: false,
    bracketSpacing: true,
    quoteProps: 'as-needed',
    overrides: [
        {
            files: 'src/constants/*.ts',
            options: {
                quoteProps: 'consistent',
            },
        },
        {
            files: 'src/i18n/*.ts',
            options: {
                quoteProps: 'consistent',
            },
        },
    ],
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: ['<THIRD_PARTY_MODULES>', '^rootpath$', '^(scripts/.*)$', '(^src/.*)$', '^(test/.*)$'],
    importOrderParserPlugins: ['typescript', 'jsx', 'importAssertions'],
    importOrderTypeScriptVersion: '5.5.4',
};
