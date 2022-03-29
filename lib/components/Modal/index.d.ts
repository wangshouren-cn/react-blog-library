import React, { ReactNode } from "react";
interface ModalOptions {
    onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onCancel?: Function;
    /**
     * @description: 点击modal外面可以关闭modal
     */
    autoClose?: boolean;
}
export interface ModalConfirmOptions extends ModalOptions {
    content: ReactNode;
}
export interface ModalOpenOptions extends ModalOptions {
    content: ReactNode;
}
declare const Modal: {
    confirm: (options: ModalConfirmOptions) => void;
    close: () => void;
    open: (options: ModalOpenOptions) => void;
};
export default Modal;
