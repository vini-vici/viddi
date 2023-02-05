import React, { ComponentProps } from 'react';

import { Story } from '@ladle/react';

import Checkbox from './checkbox.component';

const story: Story<ComponentProps<typeof Checkbox>> = args => <Checkbox {...args}/>;
// TODO: storybook breaks on this one. Will likely break on Modal as well.
export const Default = story.bind({});
Default.args = {
  checked: true,
  disabled: true
};

Default.argTypes = {
  onClick: {
    action: 'clicked'
  }
};