/**
 * @prettier
 */
import * as React from 'react';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { QuestionIcon } from 'src/icons/QuestionIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import classes from 'src/styles/tooltip.module.css';
import { TooltipProps } from 'src/types/components/Tooltip';
import { classNames } from 'src/utils/css/classNames';
import { removeNulls } from 'src/utils/object/removeNulls';

export function Tooltip({ text, id, forceOpen, children, type, position, classes: classesProp }: TooltipProps): React.ReactElement {
    const tooltipContainerRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLParagraphElement | null>(null);

    const [showText, setShowText] = useState(false);

    const isTooltipError = !children && type === 'error';

    useEffect(() => {
        if (forceOpen) setShowText(true);
    }, [forceOpen]);

    const handleMouseEnter = () => {
        if (forceOpen !== null && forceOpen !== undefined) return;
        setShowText(true);
    };

    const handleMouseLeave = () => {
        if (forceOpen !== null && forceOpen !== undefined) return;
        setShowText(false);
    };

    const getTooltipStyle = () => {
        const containerRect = tooltipContainerRef?.current?.getBoundingClientRect();
        if (!containerRect) return {};
        console.log('hereee');

        return removeNulls({
            top: getTopPosition(containerRect),
            left: getLeftPosition(containerRect),
            bottom: getBottomPosition(containerRect),
            right: getRightPosition(containerRect),
            zIndex: 9999,
        });
    };

    const getTopPosition = (containerRect: DOMRect) => {
        if (position === 'top') return;
        if (position === 'bottom') return containerRect.top + containerRect.height + 6;
        if (position === 'left') return containerRect.top;
        return containerRect.top;
    };

    const getLeftPosition = (containerRect: DOMRect) => {
        if (position === 'left') return;
        if (position === 'bottom') return containerRect.left;
        if (position === 'top') return containerRect.left;
        return containerRect.right + 6;
    };

    const getBottomPosition = (containerRect: DOMRect) => {
        if (position !== 'top') return;
        return window.innerHeight - containerRect.top + 6;
    };

    const getRightPosition = (containerRect: DOMRect) => {
        if (position !== 'left') return;
        return window.innerWidth - containerRect.left + 6;
    };

    return (
        <div ref={tooltipContainerRef} id={id} className={classNames(classes.tooltip, isTooltipError && classes.errorTooltip)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!!children && children}
            {!children && isTooltipError && <WarningIcon size={14} color={'#E32F45'} />}
            {!children && !isTooltipError && <QuestionIcon size={12} color={'#A4AAAD'} />}
            {createPortal(
                <p aria-hidden={!showText} style={getTooltipStyle()} role={'tooltip'} className={classNames(classes.text, classesProp?.text)} ref={tooltipRef}>
                    {text}
                </p>,
                document.body,
            )}
        </div>
    );
}
