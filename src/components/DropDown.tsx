/**
 * @prettier
 */
import { createContext, useRef, useState } from 'react';
import * as React from 'react';
import { Button } from 'src/components/Button';
import { useHasClickedOutside } from 'src/hooks/useHasClickedOutside';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import classes from 'src/styles/dropDown.module.css';
import { DropDownProps } from 'src/types/components/DropDown';
import { classNames } from 'src/utils/css/classNames';

export function DropDown({ content, variant, position, children, disabled, preventClose, classes: classesProp }: DropDownProps): React.ReactElement {
    const dropDownContainerRef = useRef<HTMLDivElement | null>(null);
    const dropDownRef = useRef<HTMLDivElement | null>(null);
    const id = useRef(normalizeContent(content));

    const [isOpen, setIsOpen] = useState(false);

    useHasClickedOutside({
        element: dropDownContainerRef.current,
        onClick: ({ hasClickedOutside, elementClicked }) => {
            if (hasClickedOutside && dropDownRef.current && !dropDownRef.current.contains(elementClicked)) setIsOpen(false);
        },
    });

    const handleCloseDropDown = () => {
        if (preventClose) return;
        setIsOpen(false);
    };

    return (
        <div ref={dropDownContainerRef} className={classNames(classes.container, classesProp?.container)}>
            <Button
                id={`listbox-${id.current}-button`}
                classes={{ button: classNames(classes.button, classesProp?.button) }}
                disabled={disabled}
                variant={variant ?? 'secondary'}
                onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                data-open={isOpen}
            >
                {typeof content === 'object' ? (
                    content
                ) : (
                    <div className={classes.contentContainer}>
                        <div className={classes.content}>{content}</div>
                        <ArrowDownIcon className={classes.icon} />
                    </div>
                )}
            </Button>
            {isOpen && (
                <div role='listbox' className={classNames(classes.dropdown, classesProp?.dropdown)} aria-labelledby={`listbox-${id.current}-button`} aria-readonly={true} ref={dropDownRef}>
                    <DropDownContext.Provider value={{ closeDropDown: handleCloseDropDown }}>{children}</DropDownContext.Provider>
                </div>
            )}
        </div>
    );
}

function normalizeContent(label: React.ReactNode): string {
    if (!label) return '';
    if (typeof label !== 'string') return Math.random().toString();
    return label.replace(/\s+/g, '').toLowerCase();
}

export const DropDownContext = createContext<Context>({ closeDropDown: () => {} });

type Context = {
    closeDropDown: () => void;
};
