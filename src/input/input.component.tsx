import DomClasses from '../classes/domClasses.class';
import React, { HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}

/**
 * 
 * @param props Input wrappers
 */
export default function Input(props: InputProps): React.ReactElement {
  const { 
    className,
    placeholder,
    onChange,
    value,
    type = 'text',
    ...rest
  } = props;
  
  const classes = new DomClasses('px-2 py-1 border rounded disabled:bg-gray-200');

  if(typeof className === 'string' && className != '') 
    classes.add(className);
  

  return (
    <input
      type={type}
      className={classes.toString()}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e)}
      value={value}
      {...rest}
    />
  );
}
/**
 * @description This is to be used when you need access to the underlying input element created
 * so that you may call JS DOM methods. This will become the default in the next major release.
 */
export const ForwardInput = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { className } = props;
  const classes = new DomClasses('px-2 py-1 border rounded disabled:bg-gray-200');
  if(typeof className === 'string' && className !== '') classes.add(className);

  return (
    <input
      {...props}
      className={classes.toString()}
      ref={ref}
    />
  );
  
});