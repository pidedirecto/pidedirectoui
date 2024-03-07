import * as React from "react";

export type DraggableListProps = {
    children: React.ReactNode,
    onDragEnd?: Function,
    classes?: {
        container: string,
    },
}

export type DraggableList = React.FunctionComponent<DraggableListProps>
