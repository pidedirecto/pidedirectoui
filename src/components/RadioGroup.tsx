/**
 * @prettier
 */
import * as React from 'react';
import { createContext } from 'react';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import classes from 'src/styles/radioGroup.module.css';
import { RadioGroupProps } from 'src/types/components/RadioGroup';
import { classNames } from 'src/utils/css/classNames';

export function RadioGroup({ label, value, onChange, name, tooltip, error, children, orientation = 'vertical', classes: classesProp }: RadioGroupProps): React.ReactElement {
    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            {!!label && (
                <div className={classes.labelContainer}>
                    <Label error={error}>{label}</Label>
                    {!!tooltip && <Tooltip text={tooltip} />}
                </div>
            )}
            <RadioGroupContext.Provider value={{ name, value, onChange }}>
                <div className={classNames(classes.radiosContainer, orientation === 'horizontal' && classes.radiosContainerHorizontal)}>{children}</div>
            </RadioGroupContext.Provider>
        </div>
    );
}

export const RadioGroupContext = createContext<Context>({ name: undefined, value: undefined });

type Context = {
    name: string | undefined;
    value: any;
    onChange?: (value: any) => void;
};
