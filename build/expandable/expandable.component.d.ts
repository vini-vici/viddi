import React from 'react';
interface ToggleCustomDetail {
    expanded: boolean;
}
export interface ExpandableProps {
    id?: string;
    onToggle?: (e: CustomEvent<ToggleCustomDetail>) => void;
    expanded?: boolean;
    header?: React.ReactNode;
}
export default function Expandable(props: React.PropsWithChildren<ExpandableProps>): React.ReactElement;
export {};
