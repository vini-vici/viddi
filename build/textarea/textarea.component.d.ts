import React from 'react';
export interface TextareaProps {
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}
export default function Textarea({ value, className, onChange, placeholder }: TextareaProps): React.ReactElement;
