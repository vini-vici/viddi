import React, { ComponentProps } from 'react';

import { Meta, Story} from '@storybook/react';

import Button from './button.component';

export default {
  title: 'Button',
  component: Button
} as Meta;

const S: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}/>;

export const Default = S.bind({});
Default.args = {
  variant: 'primary',
  type: 'button',
  children: 'Default Button'
}
