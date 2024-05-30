/**
 * @prettier
 */
import React from 'react';
import classes from 'src/styles/slidingDots.module.css';

export function SlidingDots(): React.ReactElement {
    return (
        <div className={classes.slidingDots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
