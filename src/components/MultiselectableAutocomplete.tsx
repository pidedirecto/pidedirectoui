/**
 * @prettier
 */
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { Checkbox } from 'src/components/Checkbox';
import { HelperText } from 'src/components/HelperText';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import classes from 'src/styles/multiselectableAutocomplete.module.css';
import { MultiselectableAutocompleteProps } from 'src/types/components/MultiselectableAutoComplete';
import { classNames } from 'src/utils/css/classNames';
import { debounce } from 'src/utils/function/debounce';

export function MultiselectableAutocomplete({
    label,
    name,
    placeholder,
    helperText,
    data,
    renderOption,
    getOptionDisabled,
    getOptionLabel,
    getOptionValue,
    onChange,
    disabled,
    error,
    selectAllOption,
    classes: classesProp,
    selectedItems,
    productsSelectedLabel,
    selectAllOptionLabel,
}: MultiselectableAutocompleteProps): React.ReactElement {
    const listboxContainerRef = useRef<HTMLDivElement | null>(null);

    const [inputValue, setInputValue] = useState('');

    const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
        id: name,
        options: data,
        getOptionLabel,
        getOptionKey: getOptionValue,
        getOptionDisabled,
    });

    const { ref: inputRef, onChange: inputOnChange, ...inputProps } = getInputProps() ?? {};

    const handleItem = (itemId: string) => {
        if (getOptionDisabled?.(itemId)) return;
        if (selectedItems.includes(itemId)) {
            const updateSelectedItems = selectedItems.filter((item) => item !== itemId);
            onChange([...updateSelectedItems]);
            return;
        }
        onChange([...selectedItems, itemId]);
    };

    const handleSelectAllItem = () => {
        const itemsId = data.map((itemId) => getOptionValue(itemId));
        if (selectedItems.length === data.length) {
            onChange([]);
            return;
        }
        onChange(itemsId);
    };

    const getListboxTopPosition = () => {
        if (!listboxContainerRef.current) return 0;

        const clientRect = listboxContainerRef.current.getBoundingClientRect();
        return clientRect.top + 10;
    };

    const getListboxLeftPosition = () => {
        if (!listboxContainerRef.current) return 0;

        const clientRect = listboxContainerRef.current.getBoundingClientRect();
        return clientRect.left;
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        getInputProps().onChange?.(e);
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        getInputProps().onBlur?.(e);
    };

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        getInputProps().onFocus?.(e);
    };

    const debouncedOnChange = debounce(handleOnChange, 700);

    return (
        <div>
            <div {...getRootProps()}>
                <div className={classes.headContainer}>
                    <Label htmlFor={`use-autocomplete-customer`} classes={{ label: classes.label, error: classes.labelError }} error={!!error}>
                        {label}
                    </Label>
                    {<span className={classes.numberItemsSelectedContainer}>{productsSelectedLabel}</span>}
                </div>
                <Input
                    {...(inputProps as any)}
                    type='search'
                    classes={{ input: classes.input, label: classes.inputError }}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputRef={inputRef}
                    onChange={(value, e) => inputOnChange?.(e)}
                />
                {!!helperText && <HelperText classes={{ helperText: classes.helperText }}>{helperText}</HelperText>}
            </div>
            <div ref={listboxContainerRef} style={{ width: '100%' }}>
                {groupedOptions.length > 0 &&
                    createPortal(
                        <ul
                            className={classNames(classes.listbox, classesProp?.optionsContainer)}
                            {...getListboxProps()}
                            style={{ top: getListboxTopPosition(), left: getListboxLeftPosition(), width: listboxContainerRef.current?.offsetWidth }}
                        >
                            {selectAllOption && (
                                <li onClick={() => handleSelectAllItem()} className={classNames(classesProp?.optionContainer, classes.checkAllBoxRow)}>
                                    <Checkbox name={'selectAll'} label={selectAllOptionLabel} value={'all'} checked={selectedItems.length === data.length} onChange={() => handleSelectAllItem()} />
                                    <span className={classes.numberItemsSelectedContainer}>{productsSelectedLabel}</span>
                                </li>
                            )}
                            {groupedOptions.map((option: any, index: number) => (
                                <li {...getOptionProps({ option, index })} onClick={() => handleItem(getOptionValue(option))} className={classNames(classes.checkBoxRow, classesProp?.optionContainer)}>
                                    <Checkbox name={option.value} value={option.value || undefined} checked={selectedItems?.includes(getOptionValue(option))} onChange={() => handleItem(option)} />
                                    {renderOption(option)}
                                </li>
                            ))}
                        </ul>,
                        document.body,
                    )}
            </div>
        </div>
    );
}
