/**
 * @prettier
 */
import { useAutocomplete } from '@material-ui/lab';
import { useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { HelperText } from 'src/components/HelperText';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import { useHasClickedOutside } from 'src/hooks/useHasClickedOutside';
import classes from 'src/styles/autocomplete.module.css';
import { AutocompleteProps } from 'src/types/components/Autocomplete';
import { classNames } from 'src/utils/css/classNames';

export function Autocomplete({
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
    onInputChange,
    disabled,
    error,
    defaultValue,
    classes: classesProp,
}: AutocompleteProps): React.ReactElement {
    const listboxContainerRef = useRef<HTMLDivElement | null>(null);
    const listOptionsContainerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
        id: name,
        options: data,
        getOptionLabel,
        getOptionDisabled,
    });

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>(defaultValue ?? '');

    const { ref: inputRef, onChange: inputOnChange, ...inputProps }: any = getInputProps();

    useHasClickedOutside({
        element: containerRef.current,
        onClick: ({ hasClickedOutside, elementClicked }) => {
            if (hasClickedOutside && listOptionsContainerRef.current && listOptionsContainerRef.current.contains(elementClicked)) setIsOpen(false);
        },
    });

    const handleOption = (option: string) => {
        if (getOptionDisabled?.(getOptionValue(option))) return;
        onChange(getOptionValue(option));
        setInputValue(getOptionLabel(option));
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

    return (
        <div ref={containerRef}>
            <div {...getRootProps()}>
                <div className={classes.headContainer}>
                    <Label htmlFor={`use-autocomplete-customer`} classes={{ label: classes.label, error: classes.labelError }} error={!!error}>
                        {label}
                    </Label>
                </div>
                <Input
                    {...(inputProps as any)}
                    type='search'
                    classes={{ input: classes.input, label: classes.inputError }}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputRef={inputRef}
                    onChange={(value, e) => {
                        setInputValue(e.target.value);
                        onInputChange?.(e.target.value);
                        inputOnChange?.(e);
                    }}
                    onClick={() => setIsOpen(true)}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    value={inputValue}
                />
                {!!helperText && <HelperText classes={{ helperText: classes.helperText }}>{helperText}</HelperText>}
            </div>
            <div ref={listboxContainerRef} style={{ width: '100%' }}>
                {groupedOptions.length > 0 &&
                    isOpen &&
                    createPortal(
                        <div ref={listOptionsContainerRef}>
                            <ul
                                className={classNames(classes.listbox, classesProp?.optionsContainer)}
                                {...getListboxProps()}
                                style={{ top: getListboxTopPosition(), left: getListboxLeftPosition(), width: listboxContainerRef.current?.offsetWidth }}
                            >
                                {groupedOptions.map((option: any, index: number) => (
                                    <li {...getOptionProps({ option, index })} onClick={() => handleOption(option)} className={classNames(classes.checkBoxRow, classesProp?.optionContainer)}>
                                        {renderOption(option)}
                                    </li>
                                ))}
                            </ul>
                        </div>,
                        document.body,
                    )}
            </div>
        </div>
    );
}
