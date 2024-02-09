/**
 * @prettier
 */
module.exports = {
    '*.{js,jsx,ts,tsx}':
        'eslint --quiet --fix --rule "unused-imports/no-unused-imports: error" --rule "no-relative-import-paths/no-relative-import-paths: error" --format "node_modules/eslint-friendly-formatter"',
    '**/*': 'prettier --write --config .prettierrc.js --ignore-unknown',
};
