module.exports = {
    '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}':
        'eslint --quiet --fix --rule "unused-imports/no-unused-imports: error" --rule "no-relative-import-paths/no-relative-import-paths: error" --format "node_modules/eslint-friendly-formatter"',
    '**/*': 'prettier --write --config .prettierrc.js --ignore-unknown --ignore-path .prettierignore',
};
