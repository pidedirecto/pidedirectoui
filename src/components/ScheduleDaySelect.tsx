import * as React from 'react';
import { Button } from 'src/components/Button';
import { Label } from 'src/components/Label';
import { TimePicker } from 'src/components/TimePicker';
import { Day, Days } from 'src/constants/Day';
import classes from 'src/styles/scheduleDaySelect.module.css';
import type { ScheduleDaySelectProps } from 'src/types/components/ScheduleDaySelect';
import { formatOpeningHours } from 'src/utils/openingHours/formatOpeningHours';
import { getDaysFromOpeningHours } from 'src/utils/openingHours/getDaysFromOpeningHours';

export function ScheduleDaySelect({ label, scheduleLabel, value, disabled, error, daysTranslations, onChange }: ScheduleDaySelectProps): React.ReactElement {
    const selectedDays = getDaysFromOpeningHours(value);
    const formattedOpeningHours = formatOpeningHours(value);

    const openingTime = formattedOpeningHours[0].openingHours[0]?.openingTime ?? '00:00';
    const closingTime = formattedOpeningHours[0].openingHours[0]?.closingTime ?? '23:59';

    const handleSelectedDays = (day: Day) => {
        let newSelectedDays: Array<Day> = [];
        if (selectedDays.includes(day)) {
            newSelectedDays = selectedDays.filter((selectedDay) => selectedDay !== day);
        } else {
            newSelectedDays = [...selectedDays, day];
        }

        const updatedOpeningHours = newSelectedDays.map((selectedDay) => `${selectedDay} ${openingTime}-${closingTime}`).join(', ');
        onChange(updatedOpeningHours);
    };

    const handleFromInput = (from: Date | undefined, hours: string | undefined) => {
        const updatedOpeningHours = selectedDays.map((selectedDay) => `${selectedDay} ${hours ?? '00:00'}-${closingTime}`).join(', ');
        onChange(updatedOpeningHours);
    };

    const handleToInput = (to: Date | undefined, hours: string | undefined) => {
        const updatedOpeningHours = selectedDays.map((selectedDay) => `${selectedDay} ${openingTime}-${hours ?? '23:59'}`).join(', ');
        onChange(updatedOpeningHours);
    };

    const formatHoursToDate = (hoursString: string | undefined) => {
        if (!hoursString) return;

        const [hours, minutes] = hoursString.split(':');

        const date = new Date();
        date.setHours(Number(hours), Number(minutes));

        return date;
    };

    return (
        <div className={classes.container}>
            <div className={classes.inputSection}>
                <Label error={error}>{label}</Label>
                <div className={classes.inputsContainer}>
                    {Object.values(Days).map((day) => {
                        const isDaySelected = selectedDays.includes(day);
                        return (
                            <Button key={day} variant={isDaySelected ? undefined : 'secondary'} classes={{ button: classes.dayButton }} onClick={() => handleSelectedDays(day)} disabled={disabled}>
                                {daysTranslations?.[day] ?? day.slice(0, 1)}
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className={classes.inputSection}>
                {!!scheduleLabel && <Label>{scheduleLabel}</Label>}
                <div className={classes.inputsContainer}>
                    <TimePicker name='from' value={formatHoursToDate(openingTime)} onChange={handleFromInput} disabled={disabled} />
                    <TimePicker name='to' value={formatHoursToDate(closingTime)} onChange={handleToInput} disabled={disabled} />
                </div>
            </div>
        </div>
    );
}
