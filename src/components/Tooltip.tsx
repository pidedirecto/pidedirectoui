/**
 * @prettier
 */
import * as React from 'react';
import { ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { QuestionIcon } from 'src/icons/QuestionIcon';
import { RequiredIcon } from 'src/icons/RequiredIcon';
import classes from 'src/styles/tooltip.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Tooltip({ text, id, forceOpen, children, type, position, classes: classesProp }: Props): React.ReactElement {
    const tooltipContainerRef = useRef<HTMLDivElement | null>(null);

    const [showText, setShowText] = useState(false);

    const isTooltipError = !children && type === 'error';
    const visibleTooltip = showText || forceOpen;

    const handleMouseEnter = () => {
        if (forceOpen !== null && forceOpen !== undefined) return;
        setShowText(true);
    };

    const getTooltipStyle = () => {
        const containerRect = tooltipContainerRef?.current?.getBoundingClientRect();
        if (!containerRect) return {};
        let top = 0;
        let left = 0;
        top = containerRect.top + window.scrollY + (position === 'bottom' ? 20 : -25);
        left = containerRect.right + window.scrollX + (position === 'bottom' ? -100 : 10);

        return {
            top,
            left,
            zIndex: 9999,
        };
    };

    return (
        <div ref={tooltipContainerRef} id={id} className={classNames(classes.tooltip, isTooltipError && classes.errorTooltip)} onMouseEnter={handleMouseEnter} onMouseLeave={() => setShowText(false)}>
            {children && children}
            {isTooltipError && <RequiredIcon color={'#E32F45'} />}
            {!children && <QuestionIcon color={'#A4AAAD'} />}
            {createPortal(
                <p aria-hidden={!visibleTooltip} style={getTooltipStyle()} role={'tooltip'} className={classNames(classes.text, classesProp?.text, visibleTooltip && classes.visible)}>
                    {text}
                </p>,
                document.body,
            )}
        </div>
    );
}

type Props = {
    id?: string;
    text?: string;
    type?: 'error' | 'success';
    forceOpen?: boolean;
    classes?: {
        text?: string;
    };
    position?: 'top' | 'bottom' | 'left' | 'right';
    children?: ReactNode;
};
