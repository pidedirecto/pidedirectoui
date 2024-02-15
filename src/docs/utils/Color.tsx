/**
 * @prettier
 */
import * as React from 'react';

export function Color({ color }: Props): React.ReactElement {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <div
                style={{
                    width: 10,
                    height: 10,
                    backgroundColor: color,
                }}
            />
            <span style={{ fontSize: 10 }}>{color}</span>
        </div>
    );
}

type Props = {
    color: string;
};
