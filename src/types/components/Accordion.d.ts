import * as React from "react";

export type AccordionProps = {
    open?: boolean,
    defaultOpened?: boolean,
    title?: string,
    iconTitle?: string,
    subText?: string,
    children: React.ReactNode,
    classes?: {
        title?: string,
        subText?: string,
        container?: string,
        accordion?: string,
    },
    onChange?: Function,
    renderIcon?: Function,
};

export type Accordion = React.FunctionComponent<AccordionProps>
