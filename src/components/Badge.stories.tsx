import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Badge',
  },
};

export const CustomColor: Story = {
    args: {
      label: 'Badge',
      backgroundColor: 'red',
    },
  };
