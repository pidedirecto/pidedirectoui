/**
 * @prettier
 */
const hq = require('alias-hq');

module.exports = {
    webpack: function (config, env) {
        // fix "Compiled with warnings." issues during pd start
        // example of compilation warning it removes "Failed to parse source map from 'Failed to parse source map from '/Users/anders/Workspace/swedishtechnologies/pidedirectoui/node_modules/rrule/src/weekday.ts' file: Error: ENOENT: no such file or directory, open '/Users/anders/Workspace/swedishtechnologies/pidedirectoui/node_modules/rrule/src/weekday.ts'"
        // see https://github.com/jkbrzt/rrule/issues/522#issuecomment-1753241419
        return {
            ...config,
            ignoreWarnings: [
                {
                    message: /source-map-loader/,
                    module: /node_modules/,
                },
            ],
        };
    },
    jest: function (config) {
        return {
            ...config,
            moduleNameMapper: hq.get('jest'),
            roots: ['./test'],
            setupFilesAfterEnv: ['./test/setupTests.ts'],
        };
    },
};
