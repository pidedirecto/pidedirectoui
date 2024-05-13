/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { Days } from 'src/constants/Day';

export type FormScheduleDaySelectProps = {
    name: string;
    label: string;
    defaultValue?: string;
    disabled?: boolean;
    daysTranslations?: {
        [Days.MONDAY]?: string;
        [Days.TUESDAY]?: string;
        [Days.WEDNESDAY]?: string;
        [Days.THURSDAY]?: string;
        [Days.FRIDAY]?: string;
        [Days.SATURDAY]?: string;
        [Days.SUNDAY]?: string;
    };
    required?: ValidationRule<boolean>;
    rules?: Record<string, ValidationRule<any>>;
};

export type FormScheduleDaySelect = React.FunctionComponent<FormScheduleDaySelectProps>;
