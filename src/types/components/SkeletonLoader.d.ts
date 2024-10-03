import * as React from 'react';

export type SkeletonLoaderProps = {
    variant: 'notification' | 'card' | 'text';
};

export type SkeletonLoader = React.FunctionComponent<SkeletonLoaderProps>;
