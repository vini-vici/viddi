import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import Expandable from './expandable.component';

const story: Story<ComponentProps<typeof Expandable>> = args => <Expandable {...args}/>;

export const Default = story.bind({});
Default.args = {
  header: 'hello',
  expanded: true,
  children: 'Show me'
};

Default.argTypes = {
  onToggle: {
    action: 'toggle'
  }
};

export const Fancy = story.bind({});

Fancy.args = {
  header: <strong>Bold Header</strong>,
  expanded: true,
  children: <>
    These things can hold <em>React</em> components. Any valid JSX is fine for either the header
    or the children.
  </>
};