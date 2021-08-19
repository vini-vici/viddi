import React from 'react';
export interface LoadingProps {
    text?: string;
    size?: number;
    icon?: string;
}
export default function Loading({ text, size, icon }: LoadingProps): React.ReactElement;
