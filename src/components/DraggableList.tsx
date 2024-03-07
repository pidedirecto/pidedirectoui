/**
 * @prettier
 */
import * as React from 'react';
import { createContext, useEffect, useRef } from 'react';
import { SECONDS } from 'src/constants/TimeUnit';
import classes from 'src/styles/draggableList.module.css';
import { DraggableListProps } from 'src/types/components/DraggableList';
import { classNames } from 'src/utils/css/classNames';
import { wait } from 'src/utils/wait';

let previousEvent: React.TouchEvent<HTMLUListElement> | React.MouseEvent<HTMLUListElement> | undefined = undefined;
export function DraggableList({ children, onDragEnd, classes: classesProp }: DraggableListProps): React.ReactElement {
    let organizeListAfterItemEliminationTimeOut = useRef<number | null>(null);
    let container = useRef<HTMLUListElement | null>(null);
    let currentListItem = useRef<CurrentListItem | null>(null);
    let finishingDragging = useRef(false);
    let dragging = useRef(false);
    let mouseMovement = useRef<string | undefined>(undefined);
    let list = useRef<Array<CurrentListItem>>([]);

    const ANIMATION_DURATION_IN_SECONDS = 0.2;

    useEffect(() => {
        return () => {
            clear();
        };
    }, []);

    const handleStartDragElement = (element: HTMLLIElement, value: any, e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
        previousEvent = e;
        dragging.current = true;
        list.current = list.current.filter((listItem) => !!listItem.listItem);
        const sortedList = getListItemsSorted();
        const currentListItemIndex = sortedList.findIndex((listItem) => listItem.value === value);

        currentListItem.current = { listItem: element, value, startingPositionIndex: currentListItemIndex, startingTopPosition: getElementTopPosition(element) };
    };

    const handleDragElement = (e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
        setMouseMovementValue(e);

        if (!currentListItem.current || finishingDragging.current) {
            return;
        }
        const { listItem } = currentListItem.current;

        const newYPosition = getMovementY(e as React.MouseEvent<HTMLUListElement>) + getElementTopPosition(listItem);
        listItem.style.top = `${newYPosition}px`;
        previousEvent = e;
    };

    const getMovementY = (e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
        const mouseEvent: React.MouseEvent<HTMLUListElement> = e as React.MouseEvent<HTMLUListElement>;
        if (mouseEvent.movementY) return mouseEvent.movementY;
        if (!previousEvent) return 0;

        const previousTouchEvent: React.TouchEvent<HTMLUListElement> = previousEvent as React.TouchEvent<HTMLUListElement>;
        if (!previousTouchEvent.touches) return 0;

        const touchEvent: React.TouchEvent<HTMLUListElement> = e as React.TouchEvent<HTMLUListElement>;
        return touchEvent.touches[0].pageY - previousTouchEvent.touches[0].pageY;
    };

    const handleEndDragElement = async () => {
        if (!currentListItem.current || finishingDragging.current) return;
        finishingDragging.current = true;

        const sortedList = getListItemsSorted();

        await organizeList(sortedList);

        previousEvent = undefined;
        dragging.current = false;
        const sortedValues = sortedList.map((listItem) => listItem.value);
        await onDragEnd?.(sortedValues);
    };

    const setMouseMovementValue = (e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
        if (getMovementY(e) === 0) return;

        mouseMovement.current = getMovementY(e) < 0 ? MOUSE_MOVEMENT.UP : MOUSE_MOVEMENT.DOWN;
    };

    const getElementTopPosition = (element: HTMLLIElement) => {
        if (!element) return 0;

        const top = element.style.top;
        if (!top) return 0;

        return Number(top.replace(/px/, ''));
    };

    const getElementHeight = (element: HTMLLIElement | undefined) => {
        if (!element) return 0;

        const offsetHeight = element.offsetHeight;
        const elementStyle = getComputedStyle(element);

        const marginTop = formatPixelToNumber(elementStyle.marginTop);
        const marginBottom = formatPixelToNumber(elementStyle.marginBottom);

        return offsetHeight + marginTop + marginBottom;
    };

    const formatPixelToNumber = (cssProperty: string) => {
        return Number(cssProperty.replace(/[^0-9]/g, '') || 0);
    };

    const isMouseMovingUp = () => mouseMovement.current === MOUSE_MOVEMENT.UP;

    const isMouseMovingDown = () => mouseMovement.current === MOUSE_MOVEMENT.DOWN;

    const getListItemsSorted = () => {
        const arraySorted = [...list.current].sort((listItemA, listItemB) => {
            return listItemA.listItem.offsetTop - listItemB.listItem.offsetTop;
        });
        return arraySorted;
    };

    const organizeList = async (sortedList: Array<CurrentListItem>) => {
        if (!currentListItem.current) return;
        const currentListItemValue = currentListItem.current?.value;

        const currentListItemIndex = sortedList.findIndex((listItem) => listItem.value === currentListItemValue);
        if (currentListItemIndex < 0) return;

        await Promise.allSettled([
            moveItemToItsNewPosition(currentListItem.current?.listItem, getCurrentListItemNewTopPosition(sortedList, currentListItemIndex)),
            moveAboveItemsToItsNewPositions(sortedList, currentListItemIndex),
            moveBelowItemsToItsNewPositions(sortedList, currentListItemIndex),
        ]);

        clear();
    };

    const getCurrentListItemNewTopPosition = (sortedList: Array<CurrentListItem>, finishingPositionIndex: number) => {
        if (!currentListItem.current) return 0;

        const startingPositionIndex = currentListItem.current?.startingPositionIndex ?? 0;
        const startingTopPosition = currentListItem.current?.startingTopPosition ?? 0;

        if (startingPositionIndex > finishingPositionIndex) {
            let newTopPosition = 0;
            for (let i = startingPositionIndex; i > finishingPositionIndex; i--) {
                const listItem = sortedList[i].listItem;
                const elementHeight = getElementHeight(listItem);
                newTopPosition -= elementHeight;
            }

            return newTopPosition + startingTopPosition;
        }

        let newTopPosition = 0;
        for (let i = startingPositionIndex; i < finishingPositionIndex; i++) {
            const listItem = sortedList[i].listItem;
            const elementHeight = getElementHeight(listItem);
            newTopPosition += elementHeight;
        }

        return newTopPosition + startingTopPosition;
    };

    const moveItemToItsNewPosition = async (element: HTMLLIElement, newPosition: number) => {
        if (!element) return;

        element.style.transition = `top ${ANIMATION_DURATION_IN_SECONDS}s linear`;
        element.style.top = `${newPosition}px`;

        await wait(ANIMATION_DURATION_IN_SECONDS * SECONDS);

        element.style.transition = '';
    };

    const moveAboveItemsToItsNewPositions = async (sortedList: Array<CurrentListItem>, currentListItemIndex: number) => {
        if (isMouseMovingUp() || !currentListItem.current) return;

        const aboveListItems = sortedList.slice(currentListItem.current.startingPositionIndex, currentListItemIndex);
        await Promise.allSettled(
            aboveListItems.map((aboveListItem) => {
                const currentPosition = getElementTopPosition(aboveListItem.listItem);
                const currentElementHeight = getElementHeight(currentListItem.current?.listItem);
                const newPosition = currentPosition - currentElementHeight;
                return moveItemToItsNewPosition(aboveListItem.listItem, newPosition);
            }),
        );
    };

    const moveBelowItemsToItsNewPositions = async (sortedList: Array<CurrentListItem>, currentListItemIndex: number) => {
        if (isMouseMovingDown() || !currentListItem.current) return;
        const belowListItems = sortedList.slice(currentListItemIndex + 1, (currentListItem.current.startingPositionIndex ?? 0) + 1);
        await Promise.allSettled(
            belowListItems.map((belowListItem) => {
                const currentPosition = getElementTopPosition(belowListItem.listItem);
                const currentElementHeight = getElementHeight(currentListItem.current?.listItem);
                return moveItemToItsNewPosition(belowListItem.listItem, currentPosition + currentElementHeight);
            }),
        );
    };

    const clear = () => {
        currentListItem.current = null;
        mouseMovement.current = undefined;
        finishingDragging.current = false;
        list.current.forEach(({ listItem }) => (listItem.style.transition = ''));
    };

    const handleListItemRef = (ref: HTMLLIElement, value: any) => {
        if (!ref || !value || dragging.current) return;

        const listItemIndex = list.current.findIndex((listItem) => listItem.value === value);
        const listItemHasBeenAdded = listItemIndex >= 0;
        if (listItemHasBeenAdded) {
            list.current[listItemIndex].listItem.style.top = '0px';
            return;
        }

        list.current.push({ listItem: ref, value });
    };

    const handleRemoveListItem = (value: any) => {
        list.current = list.current.filter((listItem) => listItem.value !== value);

        if (organizeListAfterItemEliminationTimeOut.current) clearTimeout(organizeListAfterItemEliminationTimeOut.current);

        organizeListAfterItemEliminationTimeOut.current = setTimeout(() => {
            organizeItemsList();
            organizeListAfterItemEliminationTimeOut.current = null;
        }, 50) as any;
    };

    const organizeItemsList = () => {
        let position = 0;
        for (const listItem of list.current ?? []) {
            listItem.listItem.style.top = `0px`;
            position += getElementHeight(listItem.listItem);
        }
    };

    return (
        <ul className={classNames(classes.container, classesProp?.container)} onMouseMove={handleDragElement} onTouchMove={handleDragElement} ref={(ref) => (container.current = ref)}>
            <DraggableListContext.Provider value={{ onDragStart: handleStartDragElement, onDragEnd: handleEndDragElement, initializeItem: handleListItemRef, onUnmountItem: handleRemoveListItem }}>
                {children}
            </DraggableListContext.Provider>
        </ul>
    );
}

export const DraggableListContext = createContext<Context>({
    onDragStart: () => {},
    onDragEnd: () => {},
    initializeItem: () => {},
    onUnmountItem: () => {},
});

const MOUSE_MOVEMENT = {
    UP: 'UP',
    DOWN: 'DOWN',
};

type Context = {
    onDragStart: Function;
    onDragEnd: Function;
    initializeItem: Function;
    onUnmountItem: Function;
};

type CurrentListItem = {
    listItem: HTMLLIElement;
    value: any;
    startingPositionIndex?: number;
    startingTopPosition?: number;
};
