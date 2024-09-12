import * as React from 'react';
import { Days } from 'src/constants/Day';

export type ScheduleDaySelectProps = {
    label: string;
    scheduleLabel?: string;
    value: string;
    disabled?: boolean;
    error?: boolean;
    daysTranslations?: {
        [Days.MONDAY]?: string;
        [Days.TUESDAY]?: string;
        [Days.WEDNESDAY]?: string;
        [Days.THURSDAY]?: string;
        [Days.FRIDAY]?: string;
        [Days.SATURDAY]?: string;
        [Days.SUNDAY]?: string;
    };
    onChange: (openingHours: string) => void | Promise<void>;
};

export type ScheduleDaySelect = React.FunctionComponent<ScheduleDaySelectProps>;
