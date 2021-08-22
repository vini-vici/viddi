import React, { ComponentProps } from 'react';

import { Meta, Story} from '@storybook/react';

import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'How the button should be displayed.',
      defaultValue: 'primary'
    }
  }
} as Meta;

const S: Story<ComponentProps<typeof Button>> = args => <Button {...args}/>;

export const Default = S.bind({});

Default.args = {
  variant: 'primary',
  type: 'button',
  children: 'Default Button'
};

Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        'primary','secondary','custom'
      ]
    }
  }
};

export const Custom = S.bind({});
Custom.args = {
  variant: 'custom',
  className: 'bg-red-400 border-2 border-blue-500 text-white',
  children: 'Custom classes'
};