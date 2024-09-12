import * as React from 'react';
import { useCreateUserClickedButtonLogEvent } from 'src/services/logEvent/useCreateUserClickedButtonLogEvent';
import classes from 'src/styles/button.module.css';
import { ButtonProps } from 'src/types/components/Button';
import { classNames } from 'src/utils/css/classNames';
import { convertReactNodeToString } from 'src/utils/react/convertReactNodeToString';

export function Button({ classes: classesProp, type, children, onClick, variant, size, ...props }: ButtonProps): React.ReactElement {
    const createUserClickedButtonLogEvent = useCreateUserClickedButtonLogEvent();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        createUserClickedButtonLogEvent(convertReactNodeToString(children));
    };

    const getClassName = () => {
        let className = classes.button;

        if (variant === 'secondary') className = classNames(className, classes.buttonSecondary);
        if (variant === 'outline') className = classNames(className, classes.buttonOutline);
        if (variant === 'text') className = classNames(className, classes.buttonText);
        if (variant === 'icon') className = classNames(className, classes.buttonIcon);

        return classNames(className, classesProp?.button);
    };

    return (
        <button {...props} data-size={size} data-variant={variant} type={type ?? 'button'} onClick={handleClick} className={getClassName()}>
            {children}
        </button>
    );
}
