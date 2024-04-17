/**
 * @prettier
 */
import * as React from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Table } from 'src/components/Table';
import classes from 'src/styles/selectableList.module.css';
import { SelectableListProps } from 'src/types/components/SelectableList';
import { isArray } from 'src/utils/array/isArray';
import { classNames } from 'src/utils/css/classNames';

export function SelectableList({ label, helperText, options, onChange, value, disabled, error, multiselectable, classes: classesProp }: SelectableListProps): React.ReactElement {
    const getValue = () => {
        if (!value) return [];

        if (isArray(value)) {
            if (!multiselectable) {
                console.warn('SelectableList component is receiving an array as value when it is not multiselectable');
                return [value[0]];
            }
            return value;
        }

        if (multiselectable) {
            console.warn('SelectableList component is not receiving an array as value when it is multiselectable');
        }

        return [value];
    };

    const handleSelectOption = (selectedValue: any) => {
        if (disabled) return;

        if (!multiselectable) {
            onChange(selectedValue);
            return;
        }

        if (selectedValues.includes(selectedValue)) {
            const newSelectedValues = selectedValues.filter((previousSelectedValue: any) => previousSelectedValue !== selectedValue);
            onChange(newSelectedValues);
            return;
        }

        onChange([...selectedValues, selectedValue]);
    };

    const isRowChecked = (selectedValue: any) => {
        return selectedValues.includes(selectedValue);
    };

    const selectedValues = getValue();

    return (
        <div className={classes.container}>
            {!!label && (
                <Label classes={{ label: classesProp?.label }} error={error}>
                    {label}
                </Label>
            )}
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
            <div className={classesProp?.listContainer}>
                <Table
                    classes={{ row: disabled && classes.disabled }}
                    columns={[{ id: 'row', content: '' }]}
                    rows={options.map((option) => ({
                        row: (
                            <div className={classNames(classes.row, classesProp?.row)}>
                                <Checkbox name={option.value} value={option.value} checked={isRowChecked(option.value)} onChange={() => {}} />
                                {option.content}
                            </div>
                        ),
                        value: option.value,
                        className: isRowChecked(option.value) ? classes.optionSelected : '',
                    }))}
                    onRowClick={(row) => handleSelectOption(row.value)}
                    hideHeaders
                />
            </div>
        </div>
    );
}
