/**
 * @prettier
 */
import React, { HTMLProps } from 'react';
import { SlidingDots } from 'src/components/SlidingDots';
import { Text } from 'src/components/Text';
import classes from 'src/styles/loader.module.css';

export function Loader({ loading }: Props): React.ReactElement {
    if (!loading) {
        return <></>;
    }

    return (
        <div className={classes.loaderContainer}>
            <SlidingDots />
            <Text weight='semiBold'>Cargando, espera...</Text>
        </div>
    );
}

type Props = Omit<HTMLProps<HTMLSpanElement>, 'className'> & {
    loading: boolean;
};
