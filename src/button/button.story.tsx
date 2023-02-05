import React, { ComponentProps } from 'react';

import { Meta, Story} from '@storybook/react';

import Button from './button.component';

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
  children: 'Custom classes',
};