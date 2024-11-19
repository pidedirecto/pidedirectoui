import React, { useEffect } from 'react';
import classes from 'src/styles/stepper.module.css';
import { StepperProps } from 'src/types/components/Stepper';
import { classNames } from 'src/utils/css/classNames';

export function Stepper({ activeStep, steps, orientation = 'vertical', classes: classesProp }: StepperProps): React.ReactElement {
    useEffect(() => {
        const doesStepExist = steps.some((step) => step.value === activeStep);
        if (!doesStepExist) console.error(`Component Stepper has an activeStep=${activeStep} but any of the defined steps have this value`);
    }, [activeStep, steps]);

    const hasBeenActiveStep = (stepValue: any) => {
        const currentStepIndex = steps.findIndex((step) => step.value === activeStep);
        const stepIndex = steps.findIndex((step) => step.value === stepValue);
        return stepIndex < currentStepIndex;
    };

    const isActiveStep = (stepValue: any) => {
        return stepValue === activeStep || hasBeenActiveStep(stepValue);
    };

    const isLastStep = (stepValue: any) => {
        const stepIndex = steps.findIndex((step) => step.value === stepValue);
        return stepIndex === steps.length - 1;
    };

    return (
        <div className={classes.stepper} data-orientation={orientation}>
            {steps.map((step, index) => (
                <React.Fragment key={step.value}>
                    <div className={classes.stepContent}>
                        <div className={classes.iconContent}>
                            <div className={classNames(classes.stepCircle, isActiveStep(step.value) && classes.activeStepCircle, classesProp?.stepIcon)}>{step.content ?? index + 1}</div>
                        </div>
                        <div className={classNames(classes.stepLabel, isActiveStep(step.value) && classes.activeStepLabel)}>{step.label}</div>
                    </div>
                    {!isLastStep(step.value) && <div className={classNames(classes.stepLine, isActiveStep(step.value) && classes.activeStepLine)} data-orientation={orientation} />}
                </React.Fragment>
            ))}
        </div>
    );
}
