import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import Input, { ForwardInput } from './input.component';

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

const story: Story<ComponentProps<typeof Input>> = args => <Input {...args} />;

export const Default = story.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Placeholder',
  disabled: false,
  'aria-label': 'Hello'
};

const forwardStory: Story<ComponentProps<typeof Input>> = args => {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useLayoutEffect(() => {
    if (ref.current)
      ref.current.focus();
  }, [ref]);
  return <ForwardInput {...args} ref={ref} />;
};

export const ForwardStory = forwardStory.bind({});
ForwardStory.args = {
  type: 'text',
  placeholder: 'auto focus?'
};