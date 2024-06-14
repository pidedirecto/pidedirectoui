/**
 * @prettier
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const hq = require('alias-hq');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    roots: ['./test'],
    moduleNameMapper: hq.get('jest'),
};
