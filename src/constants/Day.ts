export const Days = {
    MONDAY: 'Mo',
    TUESDAY: 'Tu',
    WEDNESDAY: 'We',
    THURSDAY: 'Th',
    FRIDAY: 'Fr',
    SATURDAY: 'Sa',
    SUNDAY: 'Su',
} as const;

export type Day = (typeof Days)[keyof typeof Days];
