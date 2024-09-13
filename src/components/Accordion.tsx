import { useContext, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { useCreateUserToggledAccordionLogEvent } from 'src/services/logEvent/useCreateUserToggledAccordionLogEvent';
import classes from 'src/styles/accordion.module.css';
import { AccordionProps } from 'src/types/components/Accordion';
import { classNames } from 'src/utils/css/classNames';

export function Accordion({ open, title, defaultOpened, children, classes: classesProp, subText, renderIcon, onChange, iconTitle }: AccordionProps): React.ReactElement {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const accordionId = useRef(getId());
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);
    const createUserToggledAccordionLogEvent = useCreateUserToggledAccordionLogEvent();

    const [currentHeight, setCurrentHeight] = useState('0px');
    const [accordionOpened, setAccordionOpened] = useState(!!defaultOpened || false);

    useEffect(() => {
        const height = containerRef.current?.scrollHeight ?? 0;
        setCurrentHeight(`${height}px`);
        if (accordionOpened) setTimeout(() => setCurrentHeight('max-content'), 500);
    }, [accordionOpened, open, children]);

    const handleOnClickAccordion = () => {
        createUserToggledAccordionLogEvent(title ?? '');

        if (onChange) onChange(!accordionOpened);
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
                <button className={classes.titleContainer} onClick={handleOnClickAccordion} aria-expanded={accordionOpened} aria-controls={`accordion-${accordionId.current}`} type={'button'}>
                    {!renderIcon && (
                        <div data-opened={accordionOpened} className={classNames(classes.button)}>
                            <ArrowDownIcon title={iconTitle} />
                        </div>
                    )}
                    {!!renderIcon && <div className={classes.icon}>{renderIcon(accordionOpened)}</div>}
                    <div className={classes.textContainer}>
                        <h2 className={classNames(classes.title, classesProp?.title)}>{title}</h2>
                        {subText && <p className={classNames(classes.caption, classesProp?.subText)}>{subText}</p>}
                    </div>
                </button>
                <div
                    ref={containerRef}
                    className={classNames(classes.accordion, classesProp?.accordion)}
                    style={{ height: accordionOpened ? currentHeight : 0 }}
                    id={`accordion-${accordionId.current}`}
                    aria-hidden={!accordionOpened}
                >
                    {accordionOpened && children}
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className={classNames(classes.accordion, classesProp?.accordion)} style={{ height: !!open ? currentHeight : 0 }} onClickCapture={addAccordionToStackTrace}>
            {open && children}
        </div>
    );
}

const getId = () => {
    return Math.round(Date.now() * Math.random());
};
