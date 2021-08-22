import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import FormField from './formfield.component';
import Input from '../input/input.component';

export default {
  title: 'FormField',
  component: FormField
} as Meta;

const story: Story<ComponentProps<typeof FormField>> = args => <FormField {...args}/>;

export const Default = story.bind({});
Default.args = {
  label: 'With a string',
  description: '(optional) description',
  children: (
    <Input />
  )
};

export const Custom = story.bind({});

Custom.args = {
  label: (
    <div className="flex justify-between">
      <div>
        Text Content
      </div>
      <div className="text-yellow-500">
        Action items
      </div>
    </div>
  ),
  children: (
    <Input placeholder="Placeholder"/>
  )
};