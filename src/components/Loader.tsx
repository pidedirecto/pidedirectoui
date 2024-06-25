/**
 * @prettier
 */
import React from 'react';
import { SlidingDots } from 'src/components/SlidingDots';
import { Text } from 'src/components/Text';
import classes from 'src/styles/loader.module.css';
import { LoaderProps } from 'src/types/components/Loader';

export function Loader({ loading, loadingText }: LoaderProps): React.ReactElement | null {
    if (!loading) return null;

    return (
        <div className={classes.loaderContainer}>
            <SlidingDots />
            <Text weight='semiBold'>{loadingText}</Text>
        </div>
    );
}
