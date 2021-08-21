import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import Input from './input.component';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      type: 'select',
      options: [
        'text',
        'search',
        'email',
        'password',
        'number',
        'range',
        'time',
        'date',
        'datetime-local'
      ]
    }
  }
} as Meta;

const story: Story<ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Default = story.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Placeholder'
};