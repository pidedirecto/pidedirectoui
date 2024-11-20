import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { Button } from 'src/components/Button';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { useCreateUserToggledAccordionLogEvent } from 'src/services/logEvent/useCreateUserToggledAccordionLogEvent';
import classes from 'src/styles/accordion.module.css';
import { AccordionProps } from 'src/types/components/Accordion';
import { classNames } from 'src/utils/css/classNames';
import { isFunction } from 'src/utils/function/isFunction';

export function Accordion({ open, title, defaultOpened, keepMounted, children, classes: classesProp, subText, renderIcon, onChange, iconTitle, tools }: AccordionProps): React.ReactElement {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const accordionId = useRef(getId());
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);
    const createUserToggledAccordionLogEvent = useCreateUserToggledAccordionLogEvent();

    const [currentHeight, setCurrentHeight] = useState('0px');
    const [accordionOpened, setAccordionOpened] = useState(!!defaultOpened || false);
    const [shouldKeepMounted, setShouldKeepMounted] = useState(!!defaultOpened && !!keepMounted);

    useEffect(() => {
        if ((open || accordionOpened) && keepMounted) setShouldKeepMounted(true);
    }, [keepMounted, open, accordionOpened]);

    useEffect(() => {
        resizeAccordion();
    }, [accordionOpened, open, children]);

    const resizeAccordion = useCallback(() => {
        const height = containerRef.current?.scrollHeight ?? 0;
        setCurrentHeight(`${height}px`);
    }, []);

    const handleOnClickAccordion = () => {
        createUserToggledAccordionLogEvent(title ?? '');
        onChange?.(!accordionOpened);
        setAccordionOpened(!accordionOpened);
    };

    const addAccordionToStackTrace = () => {
        addElementToStackTrace({
            element: title ?? '',
            uiLogEventType: UiLogEventTypes.USER_TOGGLED_ACCORDION,
        });
    };

    if (title) {
        return (
            <div className={classNames(classes.container, classesProp?.container)} onClickCapture={addAccordionToStackTrace}>
                <Button
                    variant={'secondary'}
                    asDiv
                    classes={{ button: classes.titleContainer }}
                    onClick={handleOnClickAccordion}
                    aria-expanded={accordionOpened}
                    aria-controls={`accordion-${accordionId.current}`}
                    type={'button'}
                >
                    <div className={classes.titleSubContainer}>
                        {!renderIcon && (
                            <div data-opened={accordionOpened} className={classNames(classes.button)}>
                                <ArrowDownIcon title={iconTitle} />
                            </div>
                        )}
                        {!!renderIcon && <div className={classes.icon}>{renderIcon(accordionOpened)}</div>}
                        <div>
                            <h2 className={classNames(classes.title, classesProp?.title)}>{title}</h2>
                            {subText && <p className={classNames(classes.caption, classesProp?.subText)}>{subText}</p>}
                        </div>
                    </div>
                    {tools && (
                        <div className={classNames(classes.toolsContainer, classesProp?.toolsContainer)}>
                            {/*@ts-ignore*/}
                            {isFunction(tools) ? tools({ isOpen: accordionOpened }) : tools}
                        </div>
                    )}
                </Button>
                <div
                    ref={containerRef}
                    className={classNames(classes.accordion, classesProp?.accordion)}
                    style={{ height: accordionOpened ? currentHeight : 0 }}
                    id={`accordion-${accordionId.current}`}
                    aria-hidden={!accordionOpened}
                >
                    {/*@ts-ignore*/}
                    {(accordionOpened || shouldKeepMounted) && (isFunction(children) ? children({ resizeAccordion }) : children)}
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className={classNames(classes.accordion, classesProp?.accordion)} style={{ height: !!open ? currentHeight : 0 }} onClickCapture={addAccordionToStackTrace}>
            {/*@ts-ignore*/}
            {(open || shouldKeepMounted) && (isFunction(children) ? children({ resizeAccordion }) : children)}
        </div>
    );
}

const getId = () => {
    return Math.round(Date.now() * Math.random());
};
