/**
 * @prettier
 */
import React, { useEffect, useRef } from 'react';
import { Text } from 'src/components/Text';
import classes from 'src/styles/loader.module.css';
import { LoaderProps } from 'src/types/components/Loader';
import { classNames } from 'src/utils/css/classNames';

export function Loader({ loading, text, size, classes: classesProp }: LoaderProps): React.ReactElement | null {
    const rootElement = useRef<HTMLElement | null>(null);

    const containerHeight = Math.floor((size ?? DefaultSize) * 1.5);
    const currentSize = size ?? DefaultSize;

    useEffect(() => {
        initializeSize();
    }, [size]);

    const initializeSize = () => {
        if (!rootElement.current) {
            rootElement.current = document.querySelector(':root') as any;
        }
        if (!rootElement.current) return;

        const newLoaderPosition = Math.floor((currentSize * DefaultPosition) / DefaultSize);
        rootElement.current.style.setProperty('--loader-initial-animation-position', `-${newLoaderPosition}px`);
        rootElement.current.style.setProperty('--loader-final-animation-position', `${newLoaderPosition}px`);
    };

    if (!loading) return null;

    return (
        <div className={classes.loaderContainer} style={{ width: currentSize * 3 + 40 }}>
            <div className={classes.slidingDots} style={{ height: containerHeight }}>
                <span style={{ width: size, height: size }}></span>
                <span style={{ width: size, height: size }}></span>
                <span style={{ width: size, height: size }}></span>
            </div>
            {!!text && <Text className={classNames(classes.textContainer, classesProp?.text)}>{text}</Text>}
        </div>
    );
}

const DefaultPosition = 30;
const DefaultSize = 18;
