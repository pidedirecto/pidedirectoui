/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { Table } from 'src/components/Table';
import { PlusIcon } from 'src/icons/PlusIcon';
import { RefreshIcon } from 'src/icons/RefreshIcon';

const meta: Meta<typeof Table> = {
    component: Table,
    args: {
        onRowClick: undefined,
        columns: [
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
        ],
        rows: [
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
        ],
    },
    argTypes: {
        columns: {
            description: 'Columns array',
            type: {
                required: true,
                name: 'Array' as any,
            },
            table: {
                type: { summary: 'array' },
            },
            control: false,
        },
        // @ts-ignore
        'columns.id': {
            description: 'Column id',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                subcategory: 'Column API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'columns.content': {
            description: 'Header cell content',
            type: {
                required: true,
                name: 'React.Node',
            },
            table: {
                subcategory: 'Column API',
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        'columns.size': {
            description: 'Column size, by default it is 1 ',
            table: {
                subcategory: 'Column API',
                type: { summary: 'number' },
            },
            control: false,
        },
        rows: {
            description: 'Rows array',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        'rows.[column.id]': {
            description: 'Cell content, the key should be one of the columns.id, if not it will be ignored, and the value can be any react node',
            type: {
                required: true,
                name: 'React.Node',
            },
            table: {
                subcategory: 'Row API',
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        'rows.className': {
            description: 'CSS class to override the current row style',
            table: {
                subcategory: 'Row API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'rows.onSearch': {
            description: 'Callback to know if the row match the search query',
            table: {
                subcategory: 'Row API',
                type: { summary: 'function' },
            },
            control: false,
        },
        'rows.rowId': {
            description: 'Row id',
            table: {
                subcategory: 'Row API',
                type: { summary: 'any' },
            },
            control: false,
        },
        'rows.key': {
            description: 'Row key',
            table: {
                subcategory: 'Row API',
                type: { summary: 'string' },
            },
            control: false,
        },
        title: {
            description: 'Table title',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        hideHeaders: {
            description: 'Hides table headers',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        virtualized: {
            description: 'Enables table virtualization',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        loading: {
            description: 'Shows a loading indicator',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        contentHeight: {
            description: 'Table body height, required when table is virtualized',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        rowHeight: {
            description: 'Table row height, required when table is virtualized',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        emptyMessage: {
            description: 'Message to show when there are not rows to show',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        searchable: {
            description: 'Sets if table should be searchable',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        selectable: {
            description: 'Sets if table rows should be selectable',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onSelect: {
            description: 'Callback function to be called each time table rows are selected',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        searchInputProps: {
            description: 'Input props for search input',
            table: {
                type: { summary: 'InputProps' },
            },
            control: false,
        },
        rowsPerPage: {
            description: 'Enables pagination and sets rows per page',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        onRowClick: {
            description: 'Function to be called when row is clicked',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override table style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.table': {
            description: 'CSS class to override the table element style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.row': {
            description: 'CSS class to override the rows style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.cell': {
            description: 'CSS class to override the cells style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.header': {
            description: 'CSS class to override the cell header style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.container': {
            description: 'CSS class to override the table container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const RowClick: Story = {
    args: {
        ...meta.args,
        onRowClick: (row) => alert(`Row clicked! ${JSON.stringify(row)}`),
    },
};

export const CellClick: Story = {
    args: {
        ...meta.args,
        rows: [
            {
                key: '1',
                column1: 'Cell 1',
                column2: 'Cell 2',
                column3: <span onClick={() => alert(`Cell clicked!`)}>Cell 3</span>,
            },
            {
                key: '2',
                column1: 'Cell 4',
                column2: 'Cell 5',
                column3: <span onClick={() => alert(`Cell clicked!`)}>Cell 6</span>,
            },
            {
                key: '3',
                column1: 'Cell 7',
                column2: 'Cell 8',
                column3: <span onClick={() => alert(`Cell clicked!`)}>Cell 9</span>,
            },
        ],
    },
};

export const Pagination: Story = {
    args: {
        ...meta.args,
        rowsPerPage: 1,
    },
};

export const SearchableTable: Story = {
    args: {
        ...meta.args,
        searchable: true,
        rows: [
            {
                key: '1',
                column1: 'Cell 1',
                column2: 'Cell 2',
                column3: 'Cell 3',
                onSearch: (query: string) => {
                    return 'row 1'.includes(query);
                },
            },
            {
                key: '2',
                column1: 'Cell 4',
                column2: 'Cell 5',
                column3: 'Cell 6',
                onSearch: (query: string) => {
                    return 'row 2'.includes(query);
                },
            },
            {
                key: '3',
                column1: <Input name={'name'}></Input>,
                column2: 'Cell 8',
                column3: 'Cell 9',
                onSearch: (query: string) => {
                    return 'row 3'.includes(query);
                },
            },
        ],
    },
};

export const Selectable: Story = {
    args: {
        ...meta.args,
        selectable: true,
        onSelect: () => {},
        rows: [
            {
                column1: 'Cell 1',
                column2: 'Cell 2',
                column3: 'Cell 3',
                rowId: '1',
            },
            {
                column1: 'Cell 4',
                column2: 'Cell 5',
                column3: 'Cell 6',
                rowId: '2',
            },
            {
                column1: 'Cell 7',
                column2: 'Cell 8',
                column3: 'Cell 9',
                rowId: '3',
            },
        ],
    },
};

export const CustomToolbar: Story = {
    args: {
        ...meta.args,
        title: 'Table title',
        toolbar: (
            <>
                <Button variant='secondary'>
                    <RefreshIcon size={20} />
                </Button>
                <Button variant='secondary'>
                    <PlusIcon size={20} />
                </Button>
            </>
        ),
        rows: [
            {
                column1: 'Cell 1',
                column2: 'Cell 2',
                column3: 'Cell 3',
            },
            {
                column1: 'Cell 4',
                column2: 'Cell 5',
                column3: 'Cell 6',
            },
            {
                column1: 'Cell 7',
                column2: 'Cell 8',
                column3: 'Cell 9',
            },
        ],
    },
};

export const Virtualized: Story = {
    args: {
        ...meta.args,
        virtualized: true,
        contentHeight: 100,
        rowHeight: 60,
    },
};
