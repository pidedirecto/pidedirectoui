/**
 * @prettier
 */
import moment from 'moment';
import OpeningHours from 'opening_hours';
import { Day, Days } from 'src/constants/Day';

export function getDaysFromOpeningHours(openingHours: string): Array<Day> {
    const oh = new OpeningHours(openingHours || '24/7');
    const currentDate = moment();
    const currentWeekStart = currentDate.startOf('isoWeek').toDate();
    const currentWeekEnd = currentDate.endOf('isoWeek').toDate();
    const openIntervals = oh.getOpenIntervals(currentWeekStart, currentWeekEnd);

    return Object.values(Days).filter((day) => {
        return openIntervals.some((openingInterval) => {
            const openingDate = openingInterval[0];
            const closingInterval = openingInterval[1];

            return transformDayNumber(openingDate.getDay()) <= DaysEquivalence[day] && transformDayNumber(closingInterval.getDay()) >= DaysEquivalence[day];
        });
    });
}

function transformDayNumber(dayNumber: number): number {
    if (dayNumber === 0) return 6;
    return dayNumber - 1;
}

const DaysEquivalence = {
    [Days.MONDAY]: 0,
    [Days.TUESDAY]: 1,
    [Days.WEDNESDAY]: 2,
    [Days.THURSDAY]: 3,
    [Days.FRIDAY]: 4,
    [Days.SATURDAY]: 5,
    [Days.SUNDAY]: 6,
} as const;
