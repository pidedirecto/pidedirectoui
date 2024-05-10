/**
 * @prettier
 */
import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { HelperText } from 'src/components/HelperText';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import { Table } from 'src/components/Table';
import classes from 'src/styles/selectableList.module.css';
import { SelectableListProps } from 'src/types/components/SelectableList';
import { isArray } from 'src/utils/array/isArray';
import { classNames } from 'src/utils/css/classNames';
import { debounce } from 'src/utils/function/debounce';

export function SelectableList({
    label,
    helperText,
    options,
    onChange,
    value,
    disabled,
    error,
    variant,
    multiselectable,
    searchable,
    classes: classesProp,
    virtualized,
    height,
}: SelectableListProps): React.ReactElement {
    const [search, setSearch] = useState('');

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

    const handleSearch = (search: string) => {
        setSearch(search);
    };

    const labelMatchSearch = (label: string) => {
        try {
            const regExp = new RegExp(search, 'gi');
            return regExp.test(label);
        } catch (e) {
            return false;
        }
    };

    const getOptions = () => {
        if (!search) return options;
        return options.filter((option) => labelMatchSearch(option.label));
    };

    const selectedValues = getValue();

    const handleSearchDebounce = debounce(handleSearch, 300);

    return (
        <div className={classes.container}>
            {!!label && (
                <Label classes={{ label: classesProp?.label }} error={error}>
                    {label}
                </Label>
            )}
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
            {!!searchable && <SearchInput onChange={handleSearchDebounce} />}
            <div className={classesProp?.listContainer}>
                <Table
                    classes={{
                        row: classNames(disabled && classes.disabled, variant === 'underline' && classes.underlineVariantTableRow),
                        table: variant === 'underline' && classes.underlineVariantTable,
                    }}
                    columns={[{ id: 'row', content: '' }]}
                    rows={getOptions().map((option) => ({
                        row: (
                            <div className={classNames(classes.row, classesProp?.row)}>
                                <Checkbox name={option.value} value={option.value} checked={isRowChecked(option.value)} onChange={() => {}} />
                                {option.label ?? option.content}
                            </div>
                        ),
                        value: option.value,
                        className: isRowChecked(option.value) ? classes.optionSelected : '',
                    }))}
                    onRowClick={(row) => handleSelectOption(row.value)}
                    hideHeaders
                    virtualized={virtualized}
                    rowHeight={67}
                    contentHeight={height}
                />
            </div>
        </div>
    );
}

function SearchInput({ onChange }: SearchInputProps): React.ReactElement {
    const [search, setSearch] = useState('');

    const handleSearch = (search: string) => {
        setSearch(search);
        onChange(search);
    };

    return <Input type='search' name='search' value={search} onChange={handleSearch} />;
}

type SearchInputProps = {
    onChange: (search: string) => void;
};
