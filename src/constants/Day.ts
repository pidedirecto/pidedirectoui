/**
 * @prettier
 */
export const Days = Object.freeze({
    MONDAY: 'Mo',
    TUESDAY: 'Tu',
    WEDNESDAY: 'We',
    THURSDAY: 'Th',
    FRIDAY: 'Fr',
    SATURDAY: 'Sa',
    SUNDAY: 'Su',
});

export type Day = (typeof Days)[keyof typeof Days];
