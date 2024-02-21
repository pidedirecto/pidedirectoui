/**
 * @prettier
 */
import { createContext } from 'react';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';
import { FormProps } from 'src/types/components/form/Form';

export function Form({ form, onSubmit, disabled, disableSubmitOnEnterKey, classes: classesProp, children }: FormProps): React.ReactElement {
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
                    className={classesProp?.form}
                    noValidate
                >
                    {children}
                </form>
            </FormContext.Provider>
        </FormProvider>
    );
}

export const FormContext = createContext<{ disabled: boolean }>({ disabled: false });
