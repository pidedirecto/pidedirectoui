import moment from 'moment';
import OpeningHours from 'opening_hours';
import { Day, Days } from 'src/constants/Day';

export function formatOpeningHours(openingHours: string): Result {
    const oh = new OpeningHours(openingHours || '24/7');
    const currentDate = moment();
    const currentWeekStart = currentDate.startOf('isoWeek').toDate();
    const currentWeekEnd = currentDate.endOf('isoWeek').toDate();
    const openIntervals = oh.getOpenIntervals(currentWeekStart, currentWeekEnd);

    return Object.values(Days).map((day) => {
        const filteredOpenIntervals = openIntervals.filter((openingInterval) => {
            const openingDate = openingInterval[0];
            const closingInterval = openingInterval[1];

            return transformDayNumber(openingDate.getDay()) <= DaysEquivalence[day] && transformDayNumber(closingInterval.getDay()) >= DaysEquivalence[day];
        });

        if (!filteredOpenIntervals.length) {
            return {
                day,
                openingHours: [],
            };
        }

        return {
            day,
            openingHours: filteredOpenIntervals.map((openingInterval) => {
                const openingDate = openingInterval[0];
                const closingDate = openingInterval[1];

                const isOpeningTimeOnThisDay = transformDayNumber(openingDate.getDay()) <= DaysEquivalence[day];
                const isClosingTimeOnThisDay = transformDayNumber(closingDate.getDay()) >= DaysEquivalence[day];

                return {
                    openingTime: isOpeningTimeOnThisDay ? moment(openingDate).format('HH:mm') : '00:00',
                    closingTime: isClosingTimeOnThisDay ? moment(closingDate).format('HH:mm') : '23:59',
                };
            }),
        };
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

type Result = Array<{
    day: Day;
    openingHours: Array<OpeningHoursInterval>;
}>;

type OpeningHoursInterval = {
    openingTime: string;
    closingTime: string;
};
