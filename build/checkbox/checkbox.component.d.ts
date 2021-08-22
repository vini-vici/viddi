import React from 'react';
export interface CheckboxProps {
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
/**
 *
 * @param props Props to pass down to the checkbox component.
 * @returns
 */
export default function Checkbox({ checked, onChange }: CheckboxProps): React.ReactElement;
