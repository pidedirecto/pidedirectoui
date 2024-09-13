import * as React from 'react';

export type PickersProviderProps = {
    muiTheme?: any;
    momentInstance?: any;
    children: React.ReactNode;
};

export type PickersProvider = React.FunctionComponent<PickersProviderProps>;
