import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input, { ForwardInput } from './input.component';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    disabled: false,
    'aria-label': 'Hello'
  },
};

export const AutoFocus: Story = {
  render: (args) => {
    const ref = React.useRef<HTMLInputElement>(null);
    React.useLayoutEffect(() => {
      if (ref.current)
        ref.current.focus();
    }, [ref]);
    return <ForwardInput {...args} ref={ref} />;
  },
  args: {
    type: 'text',
    placeholder: 'auto focus?'
  },
};

export const Disabled: Story = {
  render: () => {
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
    );
  },
}; 