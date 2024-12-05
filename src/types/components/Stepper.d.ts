import * as React from 'react';

export type StepperProps = {
    activeStep: any;
    steps: Array<{
        value: any;
        label: string;
        content?: React.ReactNode;
    }>;
    orientation?: 'vertical' | 'horizontal';
    classes?: {
        stepIcon?: string;
        stepLabel?: string;
        stepLine?: string;
        activeStepLabel?: string;
    };
};

export type Stepper = React.FunctionComponent<StepperProps>;
