import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
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
    exclusions: '',
    inclusions: '',
  },
};

export const WithFilters: Story = {
  args: {
    size: 3,
    total: 10,
    exclusions: '7',
    inclusions: '1',
  },
};

export const ConflictingFilters: Story = {
  args: {
    size: 3,
    total: 10,
    exclusions: '1',
    inclusions: '1',
  },
};

export const EmptyResults: Story = {
  args: {
    size: 3,
    total: 10,
    exclusions: '',
    inclusions: '9',
  },
};

export const ExcludedRow: Story = {
  args: {
    size: 3,
    total: 10,
    exclusions: '',
    inclusions: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Toggle combination 1, 2, 7' }));
  },
};
