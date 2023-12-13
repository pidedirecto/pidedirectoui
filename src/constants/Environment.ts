/**
 * @prettier
 */
export const Environments = Object.freeze({
    LOCALHOST: 'LOCALHOST',
    DEVECOM: 'DEVECOM',
    DEVINTEG: 'DEVINTEG',
    DEVMAN: 'DEVMAN',
    DEVPOS: 'DEVPOS',
    DEVTECH: 'DEVTECH',
    DEV: 'DEV',
    QA: 'QA',
    NEXT: 'NEXT',
    TEST: 'TEST',
    PROD: 'PROD',
});

export type Environment = (typeof Environments)[keyof typeof Environments];
