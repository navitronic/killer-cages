import type { Meta, StoryObj } from '@storybook/react';
import NumberTile from '../ui/NumberTile';
import '../index.css';

const meta: Meta<typeof NumberTile> = {
  component: NumberTile,
};

export default meta;
type Story = StoryObj<typeof NumberTile>;

export const Default: Story = {
  args: {
    num: 9,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    num: 9,
    isDisabled: true,
  },
};
