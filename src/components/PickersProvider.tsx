/**
 * @prettier
 */
import * as React from 'react';
import { createContext } from 'react';
import { PickersProviderProps } from 'src/types/components/PickersProvider';

export function PickersProvider({ children, muiTheme, momentInstance }: PickersProviderProps): React.ReactNode {
    return <PickersProviderContext.Provider value={{ muiTheme, momentInstance }}>{children}</PickersProviderContext.Provider>;
}

export const PickersProviderContext = createContext<Context>({ muiTheme: undefined, momentInstance: undefined });

type Context = {
    muiTheme: any;
    momentInstance: any;
};
