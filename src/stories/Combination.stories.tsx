import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Combination from '../ui/Combination';

const meta: Meta<typeof Combination> = {
  component: Combination,
};

export default meta;
type Story = StoryObj<typeof Combination>;

export const Default: Story = {
  args: {
    size: 3,
    total: 10,
    inclusions: [],
    exclusions: [],
    group: false,
  },
};

export const Grouped: Story = {
  args: {
    size: 3,
    total: 10,
    inclusions: [],
    exclusions: [],
    group: true,
  },
};
