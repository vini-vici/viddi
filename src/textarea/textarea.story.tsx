import React, { ComponentType } from 'react';

import { Meta, Story } from '@storybook/react';
import Textarea, { ForwardTextarea } from './textarea.component';

const story: Story<ComponentType<typeof Textarea>> = args => <Textarea {...args} />;

export const Default = story.bind({});
Default.args = {
  placeholder: 'Placeholder text',
  value: 'very long text'.split('').join('\n'),
  disabled: false
};

export const FullWidth = story.bind({});
FullWidth.args = {
  value: 'very long text'.split('').join('\n'),
  className: 'w-full',
};

const forwardedStory: Story<ComponentType<typeof Textarea>> = args => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  React.useLayoutEffect(() => {
    if (ref.current !== null) ref.current.focus();
  }, [ref]);
  return <ForwardTextarea {...args} ref={ref} />;
};

export const ForwardStory = forwardedStory.bind({});

ForwardStory.args = {
  value: 'very long text'.split('').join('\n'),
};
