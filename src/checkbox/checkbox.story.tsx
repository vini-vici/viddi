import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import Checkbox from './checkbox.component';

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta;

const story: Story<ComponentProps<typeof Checkbox>> = args => <Checkbox {...args} />;
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

export const Controlled = () => {
  const [checked, setChecked] = React.useState(true);
  return <Checkbox />;
};
