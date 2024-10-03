import * as React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { HelperText } from 'src/components/HelperText';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserClickedSelectOptionLogEvent } from 'src/services/logEvent/useCreateUserClickedSelectOptionLogEvent';
import classes from 'src/styles/select.module.css';
import { SelectProps } from 'src/types/components/Select';
import { isArray } from 'src/utils/array/isArray';
import { classNames } from 'src/utils/css/classNames';
import { debounce } from 'src/utils/function/debounce';

export function Select({
    label,
    placeholder,
    name,
    value,
    options,
    helperText,
    multiselectable,
    disabled,
    searchable,
    error,
    position,
    preventClose,
    tooltip,
    classes: classesProp,
    onChange,
}: SelectProps): React.ReactElement {
    const [search, setSearch] = useState('');

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

        return `${placeholder ?? label} (${selectedValues.length})`;
    };

    const handleSearch = useCallback((value: string) => {
        setSearch(value);
    }, []);

    const getOptions = () => {
        if (!search) return options;
        return options.filter((option) => labelMatchSearch(option.label));
    };

    const labelMatchSearch = (label: string) => {
        try {
            const regExp = new RegExp(search, 'gi');
            return regExp.test(label);
        } catch (e) {
            return false;
        }
    };

    const selectedValues = getValue();

    const filteredOptions = getOptions();

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            {!!label && (
                <div className={classes.labelContainer}>
                    <Label aria-disabled={!!disabled} htmlFor={name} error={error}>
                        {label}
                    </Label>
                    {!!tooltip && <Tooltip text={tooltip} />}
                </div>
            )}
            <DropDown
                content={getPlaceholder()}
                disabled={disabled}
                classes={{
                    button: classNames(classes.select, classesProp?.button, error && classes.selectError),
                    container: classNames(classes.selectContainer, classesProp?.selectContainer),
                    dropdown: classesProp?.dropdown,
                }}
                preventClose={preventClose}
                id={name}
                position={position}
            >
                {searchable && (
                    <div className={classes.topContainer}>
                        <SearchInput onSearch={handleSearch} />
                    </div>
                )}
                {filteredOptions.map((option) => {
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

const SearchInput = memo(function ({ onSearch }: SearchInputProps): React.ReactElement {
    const [search, setSearch] = useState('');

    const handleSearch = (search: string) => {
        setSearch(search);
        debounceOnSearch(search);
    };

    const debounceOnSearch = useMemo(() => debounce(onSearch, 300), []);

    return <Input type='search' name='search' value={search} onChange={handleSearch} />;
});

type SearchInputProps = {
    onSearch: (search: string) => void;
};
