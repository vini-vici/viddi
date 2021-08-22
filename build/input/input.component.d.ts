import React from 'react';
interface InputProps {
    type?: string;
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
/**
 *
 * @param props Input wrappers
 * @returns
 */
export default function Input(props: InputProps): React.ReactElement;
export {};
