import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Form } from 'src/form/Form';
import { FormMultiselectableAutocomplete } from 'src/form/FormMultiselectableAutocomplete';
import { useForm } from 'src/hooks/useForm';

const meta: Meta<typeof FormMultiselectableAutocomplete> = {
    component: FormMultiselectableAutocomplete,
    args: {
        label: 'This is an label',
        name: 'FormMultiselectableAutocompleteExample',
        placeholder: 'I am a Placeholder',
        data: [{ value: 'I am a value', label: 'I am a label' }],
        productsSelectedLabel: '8 products selected',
        selectAllOptionLabel: 'I am an label for select all',
        renderOption: (option: any) => <div>Hi I am the option rendered : {option}</div>,
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
        variant: {
            description: 'autocomplete variant',
            table: {
                required: false,
                type: { summary: 'detailed' },
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

type Story = StoryObj<typeof FormMultiselectableAutocomplete>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledMultiselectableAutocomplete />,
};

export const ControlledVariant: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledMultiselectableAutocompleteVariant />,
};

const ControlledMultiselectableAutocomplete = () => {
    const form = useForm();

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

    return (
        <Form form={form} onSubmit={() => {}}>
            <FormMultiselectableAutocomplete
                name={'example'}
                selectAllOption
                selectAllOptionLabel={'seleccionar todos'}
                data={itemsFiltered}
                getOptionValue={(option: any) => option.value}
                getOptionLabel={(option: any) => option.label}
                renderOption={(option: any) => (
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
            />
        </Form>
    );
};
const ControlledMultiselectableAutocompleteVariant = () => {
    const form = useForm();

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

    return (
        <Form form={form} onSubmit={() => {}}>
            <FormMultiselectableAutocomplete
                name={'example'}
                variant={'detailed'}
                selectAllOption
                selectAllOptionLabel={'seleccionar todos'}
                data={itemsFiltered}
                getOptionValue={(option: any) => option.value}
                getOptionLabel={(option: any) => option.label}
                renderOption={(option: any) => (
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
            />
        </Form>
    );
};
