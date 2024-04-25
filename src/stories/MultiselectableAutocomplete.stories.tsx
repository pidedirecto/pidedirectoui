/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { HelperText } from 'src/components/HelperText';
import { MultiselectableAutocomplete } from 'src/components/MultiselectableAutocomplete';

const meta: Meta<typeof MultiselectableAutocomplete> = {
    component: MultiselectableAutocomplete,
    args: {
        label: 'This is an label',
        name: 'multiselectableAutocompleteExample',
        placeholder: 'I am a Placeholder',
        data: [{ value: 'I am a value', label: 'I am a label' }],
        productsSelectedLabel: '8 products selected',
        selectAllOptionLabel: 'I am an label for select all',
        onChange: undefined,
        value: [],
        renderOption: (option) => <div>Hi I am the option rendered : {option}</div>,
        getOptionValue: () => {},
        getOptionLabel: () => {},
    },
    argTypes: {
        label: {
            description: 'This is an label',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        name: {
            description: 'Name for the autocomplete input',
            table: {
                required: true,
                type: { summary: 'string' },
            },
        },
        placeholder: {
            description: 'autocomplete placeholder',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'Helper text to be displayed below the autocomplete input',
            table: {
                type: { summary: 'string' },
            },
        },
        productsSelectedLabel: {
            description: 'Description Label of items selected',
            table: {
                type: { summary: 'string' },
            },
        },
        selectAllOptionLabel: {
            description: 'Description Label of selectAll option',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'Items selected by default, it should be one of the tabs value',
            table: {
                required: false,
                type: { summary: 'Array<string>' },
            },
        },
        data: {
            description: 'Items rendered by Multiselect',
            table: {
                required: true,
                type: { summary: 'Array<any>' },
            },
        },
        getOptionValue: {
            description: 'Function used to have access at the value for each option',
            table: {
                required: true,
                type: { summary: 'Function' },
            },
        },
        getOptionLabel: {
            description: 'Function used to have access at the label for each option',
            table: {
                required: true,
                type: { summary: 'Function' },
            },
        },
        getOptionDisabled: {
            description: 'Function used to have access at disable option',
            table: {
                required: false,
                type: { summary: 'Function' },
            },
        },
        renderOption: {
            description: 'Function used how indicator how must render each option',
            table: {
                required: true,
                type: { summary: 'Function' },
            },
        },
        disabled: {
            description: 'Disables the input',
            table: {
                required: false,
                type: { summary: 'boolean' },
            },
        },
        error: {
            description: 'Used to show error indicator on input',
            table: {
                required: false,
                type: { summary: 'boolean' },
            },
        },
        selectAllOption: {
            description: 'Used to render selectAll option',
            table: {
                required: false,
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: 'Sets input as required',
            table: {
                required: false,
                type: { summary: 'boolean | {value:number, message:string}' },
            },
        },
        InputProps: {
            description: 'Take all input properties',
            table: {
                required: false,
                type: { summary: 'any' },
            },
        },
        onChange: {
            description: 'Callback to be called after the user hides or shows the accordion',
            table: {
                required: true,
                type: { summary: 'function' },
            },
        },
        tooltip: {
            description: 'Renders a tooltip next to the label',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        value: {
            description: 'Take this value for has a controlled the options selected',
            table: {
                required: true,
                type: { summary: 'Array<string>' },
            },
        },
        classes: {
            description: 'Classes object to override MultiselectableAutocomplete style',
            table: {
                required: false,
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.optionsContainer': {
            description: 'CSS class to override the options container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.optionContainer': {
            description: 'CSS class to override the option container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof MultiselectableAutocomplete>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledMultiselectableAutocomplete />,
};

const ControlledMultiselectableAutocomplete = () => {
    const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

    const itemsFiltered = [
        { value: 'value1', label: 'Example 1' },
        { value: 'value2', label: 'Example 2' },
        { value: 'value3', label: 'Example 3' },
        { value: 'value4', label: 'Example 4' },
        { value: 'value5', label: 'Example 5' },
        { value: 'value6', label: 'Example 6' },
        { value: 'value7', label: 'Example 7' },
        { value: 'value8', label: 'Example 8' },
        { value: 'value9', label: 'Example 9', restaurantName: 'popeye' },
    ];

    const handleChange = (itemsId: Array<string>) => {
        setSelectedItems(itemsId);
    };

    return (
        <MultiselectableAutocomplete
            name={'example'}
            selectAllOption
            selectAllOptionLabel={'seleccionar todos'}
            productsSelectedLabel={`${selectedItems.length} productos seleccionados`}
            data={itemsFiltered}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 4px',
                        gap: '12px',
                    }}
                >
                    <p>{option.label}</p>
                    <HelperText>{option?.restaurantName}</HelperText>
                </div>
            )}
            onChange={(itemIds: any) => handleChange(itemIds)}
            value={selectedItems}
        />
    );
};
