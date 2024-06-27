/**
 * @prettier
 */
import { Meta } from '@storybook/react';
import React, { useRef } from 'react';
import { useElementSize } from 'src/hooks/useElementSize';

const meta: Meta<typeof useElementSize> = {
    title: 'useElementSize',
    args: {},
    argTypes: {
        containerRef: {
            description: 'Ref to the container whose size needs to be measured',
            table: {
                type: { summary: 'MutableRefObject<HTMLElement | null>' },
            },
            control: false,
        },
    },
};
export default meta;

export const BasicUsage = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    const { width, height } = useElementSize(elementRef);

    return (
        <div style={{ width: '100%', height: '200px', border: '1px solid black' }} ref={elementRef}>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
};
