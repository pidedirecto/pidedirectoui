/**
 * @prettier
 */
import { createContext } from 'react';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';
import classes from 'src/styles/form.module.css';
import { FormProps } from 'src/types/form/Form';
import { classNames } from 'src/utils/css/classNames';

export function Form({ form, onSubmit, disabled, id, disableSubmitOnEnterKey, classes: classesProp, children }: FormProps): React.ReactElement {
    return (
        <FormProvider {...form}>
            <FormContext.Provider value={{ disabled: !!disabled }}>
                <form
                    role='form'
                    onSubmit={(event) => {
                        if (disabled) return;
                        form.handleSubmit(onSubmit)(event);
                    }}
                    onKeyDown={
                        disableSubmitOnEnterKey
                            ? (event) => {
                                  if ((event.key || event.code) === 'Enter') event.preventDefault();
                              }
                            : undefined
                    }
                    className={classNames(classes.form, classesProp?.form)}
                    noValidate
                    id={id}
                >
                    {children}
                </form>
            </FormContext.Provider>
        </FormProvider>
    );
}

export const FormContext = createContext<{ disabled: boolean }>({ disabled: false });
