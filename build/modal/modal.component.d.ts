import React from 'react';
interface ModalProps {
    show?: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: React.ReactNode;
    dismissOnClick?: boolean;
    confirmText?: React.ReactNode;
    cancelText?: React.ReactNode;
}
export default function Modal(props: React.PropsWithChildren<ModalProps>): React.ReactNode;
export {};
