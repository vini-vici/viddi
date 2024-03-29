import Dc from '../classes/domClasses.class';
import React, { HTMLProps } from 'react';

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  value?: string;
  className?: string;
  invalid?: boolean;
}

export const ForwardTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const classes = new Dc('border border-gray-300 py-1 px-2 rounded bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:text-gray-500');
  if (typeof props.className === 'string') classes.add(props.className);
  if (props.invalid) classes.replace('border-gray-300', 'border-red-600 text-red-600');

  return (
    <textarea
      {...props}
      className={classes.toString()}
      ref={ref}
    />
  );
});

export default ForwardTextarea;
