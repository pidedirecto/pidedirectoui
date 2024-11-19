import * as React from 'react';

export type AccordionProps = {
    open?: boolean;
    defaultOpened?: boolean;
    keepMounted?: boolean;
    title?: string;
    iconTitle?: string;
    subText?: string;
    children: React.ReactNode | (({ resizeAccordion }: { resizeAccordion: () => void }) => React.ReactNode);
    tools?: React.ReactNode | (({ isOpen }: { isOpen: boolean }) => React.ReactNode);
    classes?: {
        title?: string;
        subText?: string;
        container?: string;
        accordion?: string;
        toolsContainer?: string;
    };
    onChange?: (open: boolean) => void | Promise<void>;
    renderIcon?: Function;
};

export type Accordion = React.FunctionComponent<AccordionProps>;
