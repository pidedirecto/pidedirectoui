import * as React from 'react';
import classes from 'src/styles/skeletonLoader.module.css';
import { SkeletonLoaderProps } from 'src/types/components/SkeletonLoader';

export function SkeletonLoader({ variant }: SkeletonLoaderProps): React.ReactElement {
    const getRandomRowWidth = () => {
        const width = Math.random() * 100 + 20;
        return width > 100 ? '100%' : `${width}%`;
    };

    if (variant === 'text') {
        return <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>;
    }

    if (variant === 'notification') {
        return (
            <div data-variant={variant} className={classes.container}>
                <div className={classes.icon}></div>
                <div className={classes.column}>
                    <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                </div>
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <div data-variant={variant} className={classes.container}>
                <div className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.icon}></div>
                        <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                        <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                        <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                    </div>
                    <div className={classes.text} style={{ width: getRandomRowWidth() }}></div>
                </div>
            </div>
        );
    }

    return <></>;
}
