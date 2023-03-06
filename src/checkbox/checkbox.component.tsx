import React, { HTMLProps } from 'react';
import styles from './checkbox.module.css';

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
}

/**
 * 
 * @param props Props to pass down to the checkbox component.
 * @returns 
 */
export default function Checkbox({ checked, onChange, disabled }: CheckboxProps): React.ReactElement {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      fldkfjdlfd
      <div className={styles['checkbox-container']}>
        <div className={styles['checkbox-indicator']}></div>
      </div>
    </label>
  );
}