import React, { HTMLProps, PropsWithChildren} from 'react';
import Dc from '../classes/domClasses.class';
export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'custom';
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
}

export default function Button(props: PropsWithChildren<ButtonProps>): React.ReactElement {
  const { children, variant = 'primary', className = '', onClick, type = 'button', ...rest } = props;

  const classes = new Dc('px-2 py-1 rounded-sm');
  if(variant == 'primary') classes.add('bg-purple-400 disabled:bg-purple-200 disabled:cursor-not-allowed text-white-100'); 
  else if (variant == 'secondary') classes.add('bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed');

  if(className) classes.add(className);

  return (
    <button
      className={classes.toString()}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}