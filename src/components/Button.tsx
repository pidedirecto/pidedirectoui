import * as React from 'react';
import { useRef } from 'react';
import { useCreateUserClickedButtonLogEvent } from 'src/services/logEvent/useCreateUserClickedButtonLogEvent';
import classes from 'src/styles/button.module.css';
import { ButtonProps } from 'src/types/components/Button';
import { classNames } from 'src/utils/css/classNames';
import { convertReactNodeToString } from 'src/utils/react/convertReactNodeToString';

export function Button({ classes: classesProp, type, children, onClick, variant, size, badge, asDiv, disabled, ...props }: ButtonProps): React.ReactElement {
    const divButtonRef = useRef<HTMLDivElement | null>(null);
    const createUserClickedButtonLogEvent = useCreateUserClickedButtonLogEvent();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        onClick?.(e);
        createUserClickedButtonLogEvent(convertReactNodeToString(children));
    };

    const getClassName = () => {
        let className = classes.button;

        if (asDiv) className = classNames(className, classes.buttonEquivalence);
        if (asDiv && disabled) className = classNames(className, classes.buttonEquivalenceDisabled);
        if (variant === 'secondary') className = classNames(className, classes.buttonSecondary);
        if (variant === 'outline') className = classNames(className, classes.buttonOutline);
        if (variant === 'text') className = classNames(className, classes.buttonText);
        if (variant === 'icon') className = classNames(className, classes.buttonIcon);

        return classNames(className, classesProp?.button);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        if (disabled) return;
        divButtonRef.current?.click();
    };

    if (asDiv) {
        return (
            <div
                ref={divButtonRef}
                role='button'
                tabIndex={disabled ? -1 : 0}
                aria-disabled={disabled}
                data-size={size}
                data-variant={variant}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                className={getClassName()}
            >
                {/*@ts-ignore*/}
                {!!badge && <div className={classes.badgeContainer}>{badge}</div>}
                {children}
            </div>
        );
    }

    return (
        <button {...props} data-size={size} disabled={disabled} data-variant={variant} type={type ?? 'button'} onClick={handleClick} className={getClassName()}>
            {/*@ts-ignore*/}
            {!!badge && <div className={classes.badgeContainer}>{badge}</div>}
            {children}
        </button>
    );
}
