import React, { ComponentProps, useState } from 'react';

import { Story } from '@ladle/react';

import Button from './button.component';
import css from './buttonStory.custom.module.css';

const S: Story<ComponentProps<typeof Button>> = args => <Button {...args} />;

export const Default = S.bind({});

Default.args = {
  variant: 'primary',
  type: 'button',
  children: 'Default Button'
};

Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        'primary', 'secondary', 'custom']
    }
  }
};

export const Custom = S.bind({});
Custom.args = {
  variant: 'custom',
  className: 'bg-red-400 border-2 border-blue-500 text-white',
  children: 'Custom classes',
};

export function Disabled(): React.ReactNode {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <div className="flex gap-2">
        <label htmlFor="disabled">Disabled?</label>
        <input id="disabled" type="checkbox" onChange={() => setDisabled(!disabled)} checked={disabled} />
      </div>
      <Button disabled={disabled}>
        Primary Disabled State
      </Button>
      <Button variant="secondary" disabled={disabled}>
        Secondary Disabled State
      </Button>
      <div className="flex flex-col gap-2 items-start">
        Add "disabled:" if using tailwind css classes, or just ensure that "[disabled]" is in your style definitions.
        <Button variant="custom" disabled={disabled} className="p-1 bg-emerald-500 disabled:bg-emerald-300 disabled:cursor-not-allowed">
          Custom disabled
        </Button>
      </div>
      <Button variant="custom" disabled={disabled} className={css.button}>
        With CSS Module stylings.
      </Button>
    </div>
  );
}