/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from 'src/components/Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    args: {},
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
    args: {},
};
