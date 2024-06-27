/**
 * @prettier
 */
import React from 'react';
import { Text } from 'src/components/Text';
import classes from 'src/styles/loader.module.css';
import { LoaderProps } from 'src/types/components/Loader';

export function Loader({ loading, text }: LoaderProps): React.ReactElement | null {
    if (!loading) return null;

    return (
        <div className={classes.loaderContainer}>
            <div className={classes.slidingDots}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Text className={classes.textContainer}>{text}</Text>
        </div>
    );
}
