import Dc from '../classes/domClasses.class';
import React, { HTMLProps } from 'react';

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  value?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Textarea({ value, className, onChange, placeholder, disabled = false, ...rest }: TextareaProps): React.ReactElement {
  const classes = new Dc('border border-gray-300 py-1 px-2 rounded');
  if(className !== undefined) classes.add(className);
  return (
    <textarea
      {...rest}
      className={classes.toString()}
      onChange={e => onChange?.(e)}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}