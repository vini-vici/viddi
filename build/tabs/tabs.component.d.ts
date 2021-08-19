import React, { PropsWithChildren } from 'react';
interface TabChangeDetail {
    previousTab?: string;
    currentTab?: string;
}
interface TabsProps {
    className?: string;
    activeTab?: string;
    onTabChange?: (e: CustomEvent<TabChangeDetail>) => void;
}
export interface TabsContext {
    addTab(id: string, header: string): void;
    removeTab(id: string): void;
    currentTab: string;
}
/**
 *
 * @returns React Element
 * @description React tab group element.
 */
export default function Tabs(props: PropsWithChildren<TabsProps>): React.ReactElement;
export declare function useTabs(): TabsContext;
export {};
