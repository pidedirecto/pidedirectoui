import * as React from 'react';

export type DraggableListItemProps = {
    children: React.ReactNode;
    value: any;
    iconColor?: string;
    classes?: {
        container?: string;
        iconContainer?: string;
    };
};

export type DraggableListItem = React.FunctionComponent<DraggableListItemProps>;
