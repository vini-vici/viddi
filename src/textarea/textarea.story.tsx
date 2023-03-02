import React, { ComponentType, useState } from 'react';

import { Story } from '@ladle/react';
import Textarea from './textarea.component';

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
  return <Textarea {...args} ref={ref} />;
};

export const AutoFocus = forwardedStory.bind({});

AutoFocus.args = {
  value: 'very long text'.split('').join('\n'),
  readOnly: true,
};

export function Disabled(): React.ReactNode {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-2">
        <label htmlFor="disabled">Disable</label>
        <input type="checkbox" id="disabled" checked={disabled} onChange={() => setDisabled(!disabled)} />
      </div>
      <Textarea disabled={disabled} placeholder="I'm the placeholderiest" />
    </div>
  );
}

export function Invalid(): React.ReactNode {
  return (
    <Textarea value="Testing" invalid />
  );
}