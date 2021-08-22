import React, { PropsWithChildren } from 'react';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'custom';
    className?: string;
    onClick?: () => void;
    type?: 'submit' | 'button';
}
export default function Button(props: PropsWithChildren<ButtonProps>): React.ReactElement;
