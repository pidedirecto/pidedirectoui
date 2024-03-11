/**
 * @prettier
 */

import * as React from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserClickedSelectOptionLogEvent } from 'src/services/logEvent/useCreateUserClickedSelectOptionLogEvent';
import classes from 'src/styles/select.module.css';
import { SelectProps } from 'src/types/components/Select';
import { isArray } from 'src/utils/array/isArray';
import { classNames } from 'src/utils/css/classNames';

// TODO: Implement searchable feature after adding Input component
export function Select({
    label,
    placeholder,
    name,
    value,
    options,
    helperText,
    multiselectable,
    disabled,
    error,
    preventClose,
    tooltip,
    classes: classesProp,
    onChange,
}: SelectProps): React.ReactElement {
    const createUserClickedSelectOptionLogEvent = useCreateUserClickedSelectOptionLogEvent();

    const getValue = () => {
        if (!value) return [];

        if (isArray(value)) {
            if (!multiselectable) {
                console.warn('Select component is receiving an array as value when it is not multiselectable');
                return [value[0]];
            }
            return value;
        }

        if (multiselectable) {
            console.warn('Select component is not receiving an array as value when it is multiselectable');
        }

        return [value];
    };

    const handleOnChange = (selectedValue: any) => {
        const selectedOption = options.find((option) => option.value === selectedValue);
        createUserClickedSelectOptionLogEvent(label ?? placeholder ?? '', selectedOption?.label ?? '');

        if (!multiselectable) {
            onChange(selectedValue);
            return;
        }

        if (getValue().includes(selectedValue)) {
            const newSelectedValues = selectedValues.filter((previousSelectedValue: any) => previousSelectedValue !== selectedValue);
            onChange(newSelectedValues);
            return;
        }

        onChange([...selectedValues, selectedValue]);
    };

    const getPlaceholder = () => {
        if (!selectedValues.length) return placeholder;
        if (!multiselectable) {
            const selectedOption = options.find((option) => option.value === selectedValues[0]);
            return selectedOption?.label ?? placeholder;
        }

        return selectedValues
            .map((selectedValue: any) => {
                const selectedOption = options.find((option) => option.value === selectedValue);
                return selectedOption?.label ?? '';
            })
            .join(', ');
    };

    const selectedValues = getValue();

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            {!!label && (
                <div className={classes.labelContainer}>
                    <Label aria-disabled={!!disabled} error={error}>
                        {label}
                    </Label>
                    {!!tooltip && <Tooltip text={tooltip} />}
                </div>
            )}
            <DropDown
                content={getPlaceholder()}
                disabled={disabled}
                classes={{ button: classNames(classes.select, classesProp?.button, error && classes.selectError), container: classNames(classes.selectContainer, classesProp?.selectContainer) }}
                preventClose={preventClose}
            >
                {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                        <DropDownItem key={option.value} classes={{ container: classNames(classes.option, classesProp?.item) }} selected={isSelected} onClick={() => handleOnChange(option.value)}>
                            {multiselectable && (
                                <Checkbox
                                    name={`${name}.${option.value}`}
                                    value={option.value || undefined}
                                    label={(option.content as string) ?? option.label}
                                    checked={isSelected}
                                    onChange={() => {}}
                                />
                            )}
                            {!multiselectable && (option.content ?? option.label)}
                        </DropDownItem>
                    );
                })}
            </DropDown>
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
        </div>
    );
}
