/**
 * @prettier
 */
import * as React from 'react';
import { useCreateUserClickedButtonLogEvent } from 'src/services/logEvent/useCreateUserClickedButtonLogEvent';
import classes from 'src/styles/button.module.css';
import { ButtonProps } from 'src/types/components/Button';
import { classNames } from 'src/utils/css/classNames';
import { convertReactNodeToString } from 'src/utils/react/convertReactNodeToString';

export function Button({ classes: classesProp, type, children, onClick, variant, ...props }: ButtonProps): React.ReactElement {
    const createUserClickedButtonLogEvent = useCreateUserClickedButtonLogEvent();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        createUserClickedButtonLogEvent(convertReactNodeToString(children));
    };

    return (
        <button {...props} data-variant={variant} type={type ?? 'button'} onClick={handleClick} className={classNames(classes.button, classesProp?.button)}>
            {children}
        </button>
    );
}
