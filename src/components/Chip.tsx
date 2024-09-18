import * as React from 'react';
import classes from 'src/styles/chip.module.css';
import { ChipProps } from 'src/types/components/Chip';
import { classNames } from 'src/utils/css/classNames';

export function Chip({ children, onClick, disabled, classes: classesProp, variant, style }: ChipProps): React.ReactElement {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        onClick?.(e);
    };

    return (
        <div data-variant={variant} aria-disabled={disabled} data-clickable={!!onClick} className={classNames(classes.chip, classesProp?.chip)} onClick={handleClick} style={style}>
            {children}
        </div>
    );
}
