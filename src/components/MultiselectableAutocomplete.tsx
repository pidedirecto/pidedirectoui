/**
 * @prettier
 */
import { Button } from 'src/components/Button';
import { useAutocomplete } from '@material-ui/lab';
import { useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { Checkbox } from 'src/components/Checkbox';
import { HelperText } from 'src/components/HelperText';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import { useHasClickedOutside } from 'src/hooks/useHasClickedOutside';
import { CrossIcon } from 'src/icons/CrossIcon';
import classes from 'src/styles/multiselectableAutocomplete.module.css';
import { MultiselectableAutocompleteProps } from 'src/types/components/MultiselectableAutocomplete';
import { classNames } from 'src/utils/css/classNames';

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
    value,
    productsSelectedLabel,
    selectAllOptionLabel,
    variant,
}: MultiselectableAutocompleteProps): React.ReactElement {
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

    const { ref: inputRef, onChange: inputOnChange, ...inputProps }: any = getInputProps();

    useHasClickedOutside({
        element: containerRef.current,
        onClick: ({ hasClickedOutside, elementClicked }) => {
            if (hasClickedOutside && listOptionsContainerRef.current && !listOptionsContainerRef.current.contains(elementClicked)) setIsOpen(false);
        },
    });

    const handleOption = (optionId: string) => {
        if (getOptionDisabled?.(optionId)) return;
        if (value.includes(optionId)) {
            const updateValue = value.filter((option) => option !== optionId);
            onChange([...updateValue]);
            return;
        }
        onChange([...value, optionId]);
    };

    const handleSelectAllOptions = () => {
        const optionsId = data.map((optionId) => getOptionValue(optionId));
        if (value.length === data.length) {
            onChange([]);
            return;
        }
        onChange(optionsId);
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

    const removeRestaurantChannels = (selectedOptionValue: string) => {
        const optionsUpdated = value?.filter((option) => option !== selectedOptionValue);
        onChange(optionsUpdated);
    };

    return (
        <div ref={containerRef}>
            <div {...getRootProps()}>
                <div className={classes.headContainer}>
                    <Label htmlFor={`use-autocomplete-customer`} classes={{ label: classes.label, error: classes.labelError }} error={!!error}>
                        {label}
                    </Label>
                    {!!productsSelectedLabel && <span className={classes.numberOptionsSelectedContainer}>{productsSelectedLabel}</span>}
                </div>
                <Input
                    {...(inputProps as any)}
                    type='search'
                    classes={{ input: classes.input, label: classes.inputError }}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputRef={inputRef}
                    onChange={(value, e) => inputOnChange?.(e)}
                    onClick={() => {
                        setIsOpen(true);
                    }}
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
                                {selectAllOption && (
                                    <li onClick={() => handleSelectAllOptions()} className={classNames(classesProp?.optionContainer, classes.checkAllBoxRow)}>
                                        <Checkbox name={'selectAll'} label={selectAllOptionLabel} value={'all'} checked={value.length === data.length} onChange={() => handleSelectAllOptions()} />
                                        {!!productsSelectedLabel && <span className={classes.numberOptionsSelectedContainer}>{productsSelectedLabel}</span>}
                                    </li>
                                )}
                                {groupedOptions.map((option: any, index: number) => (
                                    <li
                                        {...getOptionProps({ option, index })}
                                        onClick={() => handleOption(getOptionValue(option))}
                                        className={classNames(classes.checkBoxRow, classesProp?.optionContainer)}
                                    >
                                        <Checkbox
                                            name={option.value}
                                            value={option.value || undefined}
                                            checked={value?.includes(getOptionValue(option))}
                                            onChange={() => handleOption(getOptionValue(option))}
                                        />
                                        {renderOption(option)}
                                    </li>
                                ))}
                            </ul>
                        </div>,
                        document.body,
                    )}
            </div>
            {variant === 'detailed' && (
                <div className={classes.chipsContainer}>
                    {value.map((valueItem) => {
                        const option = data.find((item) => getOptionValue(item) === valueItem);
                        return (
                            <div className={classes.chipContainer} key={valueItem}>
                                <div className={classes.chip}>
                                    <span>{getOptionLabel(option)}</span>
                                </div>
                                <Button variant={'icon'} onClick={() => removeRestaurantChannels(valueItem)} classes={{ button: classes.iconButton }}>
                                    <CrossIcon />
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
