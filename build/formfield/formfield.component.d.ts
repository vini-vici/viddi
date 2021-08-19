import React from 'react';
export interface FormFieldProps {
    className?: string;
    label: string | React.ReactElement;
    description?: string | React.ReactElement;
}
export default function FormField({ label, description, children }: React.PropsWithChildren<FormFieldProps>): React.ReactElement;
