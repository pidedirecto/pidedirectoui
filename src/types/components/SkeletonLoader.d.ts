import * as React from 'react';

export type SkeletonLoaderProps = {
    variant: 'notification' | 'card';
};

export type SkeletonLoader = React.FunctionComponent<SkeletonLoaderProps>;
