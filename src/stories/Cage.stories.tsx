import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Cage from '../ui/Cage';

const meta: Meta<typeof Cage> = {
  component: Cage,
};

export default meta;
type Story = StoryObj<typeof Cage>;

export const Default: Story = {
  args: {
    size: 3,
    total: 10,
  },
};
