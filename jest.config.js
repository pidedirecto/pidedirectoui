/* eslint-disable @typescript-eslint/no-var-requires */
const hq = require('alias-hq');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    preset: 'ts-jest',
    roots: ['./test'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        ...hq.get('jest'),
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./test/setupTests.ts'],
};
