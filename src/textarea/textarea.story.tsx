import React, { ComponentType } from 'react';

import { Meta, Story } from '@storybook/react';
import Textarea from './textarea.component';

export default {
  title: 'Textarea',
  component: Textarea
} as Meta;

const story: Story<ComponentType<typeof Textarea>> = args => <Textarea {...args} />;

export const Default = story.bind({});
Default.args = {
  placeholder: 'Placeholder text',
  value: 'very long text'.split('').join('\n')
};

export const FullWidth = story.bind({});
FullWidth.args = {
  value: 'very long text'.split('').join('\n'),
  className: 'w-full'
};