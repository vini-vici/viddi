import React, { ComponentProps } from 'react';

import { Story } from '@ladle/react';

import Input, { ForwardInput } from './input.component';

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

export const AutoFocus = forwardStory.bind({});
AutoFocus.args = {
  type: 'text',
  placeholder: 'auto focus?'
};

export function Disabled() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <React.Fragment>

      <div>
        Disable?
        <input type="checkbox" checked={disabled} onChange={() => setDisabled(!disabled)} />
      </div>
      <Input
        disabled={disabled}
        placeholder="disabled"
        value="Disabled value"
      />
    </React.Fragment>
  )
}