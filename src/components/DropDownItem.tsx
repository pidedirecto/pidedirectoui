/**
 * @prettier
 * @flow
 */
import * as React from 'react';
import { useContext } from 'react';
import { DropDownContext } from 'src/components/DropDown';
import classes from 'src/styles/dropDownItem.module.css';
import { DropDownItemProps } from 'src/types/components/DropDownItem';
import { classNames } from 'src/utils/css/classNames';

export function DropDownItem({ children, classes: classesProp, selected, onClick }: DropDownItemProps): React.ReactElement {
    const { closeDropDown } = useContext(DropDownContext);

    const handleClick = () => {
        onClick?.();
        closeDropDown();
    };

    return (
        <div className={classNames(classes.container, classesProp?.container)} role='option' aria-selected={selected} onClick={handleClick}>
            {children}
        </div>
    );
}
