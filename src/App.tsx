import * as React from 'react';
import { Card } from 'src/components/Card';
import { CircleIconContainer } from 'src/components/CircleIconContainer';
import { Table } from 'src/components/Table';
import { SaveIcon } from 'src/icons/SaveIcon';

export function App(): React.ReactElement {
    const columns = [
        {
            id: 'column1',
            content: 'Header 1',
        },
        {
            id: 'column2',
            content: 'Header 2',
        },
        {
            id: 'column3',
            content: 'Header 3',
        },
    ];
    const rows = [
        {
            key: '1',
            column1: 'Cell 1',
            column2: 'Cell 2',
            column3: 'Cell 3',
        },
        {
            key: '2',
            column1: 'Cell 4',
            column2: 'Cell 5',
            column3: 'Cell 6',
        },
        {
            key: '3',
            column1: 'Cell 7',
            column2: 'Cell 8',
            column3: 'Cell 9',
        },
    ];
    return (
        <div style={{ padding: 120 }}>
            <Card>
                <CircleIconContainer>
                    <SaveIcon />
                </CircleIconContainer>
            </Card>
            <Table columns={columns} rows={rows} filters={{ columns: true }} searchable />
        </div>
    );
}
