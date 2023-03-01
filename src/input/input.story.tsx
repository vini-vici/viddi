import React, { ComponentProps } from 'react';

import { Story } from '@ladle/react';

import Input from './input.component';

const story: Story<ComponentProps<typeof Input>> = args => <Input {...args} />;

export const Default = story.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Placeholder',
  disabled: false,
  'aria-label': 'Hello'
};

export function ForwardStory(): React.ReactNode {
  const ref = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <Input ref={ref} placeholder="This should auto focus" />
  );
}

export function Disabled(): React.ReactNode {
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
        value="disabled with value"
      />
      <br />
      <Input disabled={disabled} placeholder="Disabled without value" />
    </React.Fragment>
  );
}

export function Invalid(): React.ReactNode {
  return (
    <Input invalid value="Invalid" />
  );
}