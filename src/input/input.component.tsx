import DomClasses from '../classes/domClasses.class';
import React, { HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  invalid?: boolean;
}

/**
 * @description This is to be used when you need access to the underlying input element created
 * so that you may call JS DOM methods. This will become the default in the next major release.
 */
export const ForwardInput = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  placeholder, onChange,
  value, type = 'text',
  ...rest
}: InputProps, ref) => {
  const classes = new DomClasses('px-2 py-1 bg-gray-50 border rounded disabled:cursor-not-allowed disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:text-gray-500');

  if (typeof className === 'string' && className != '')
    classes.add(className);

  if (rest.invalid)
    classes.add('border-red-400');

  return (
    <input
      ref={ref}
      type={type}
      className={classes.toString()}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e)}
      value={value}
      {...rest}
    />
  );

});

export default ForwardInput;
