/**
 * @prettier
 */
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { DraggableListContext } from 'src/components/DraggableList';
import { DragIcon } from 'src/icons/DragIcon';
import classes from 'src/styles/draggableListItem.module.css';
import { DraggableListItemProps } from 'src/types/components/DraggableListItem';
import { classNames } from 'src/utils/css/classNames';

export function DraggableListItem({ children, value, iconColor, classes: classesProp }: DraggableListItemProps): React.ReactElement {
    const itemRef = useRef<HTMLLIElement | null>(null);
    const context = useContext(DraggableListContext);
    const { onDragStart, onDragEnd, initializeItem, onUnmountItem } = context;

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        return () => {
            onUnmountItem(value);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsFocused(true);
        onDragStart?.(itemRef.current, value, e);
    };

    const handleMouseUp = () => {
        if (!isFocused) return;

        setIsFocused(false);
        onDragEnd?.(itemRef.current);
    };

    const initializeRef = (ref: HTMLLIElement) => {
        initializeItem?.(ref, value);
        itemRef.current = ref;
    };

    return (
        <li className={classNames(classes.container, classesProp?.container)} aria-selected={isFocused} ref={initializeRef} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
            <div
                className={classNames(classes.iconContainer, classesProp?.iconContainer)}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <DragIcon color={iconColor} />
            </div>
            {children}
        </li>
    );
}
