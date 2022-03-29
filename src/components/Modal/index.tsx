import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import styles from "./index.module.less";

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

const Modal = (function () {
  const id = Math.random().toString() + "modal-container";

  let container: HTMLElement;

  let _options: ModalConfirmOptions;

  // container.id = id;
  // container.className = styles["modal-container"];

  function close() {
    if (!container) init();

    ReactDOM.unmountComponentAtNode(container);

    container.style.display = "none";

    container.removeEventListener("click", closeEventHandler);

    _options && _options.onCancel && _options.onCancel();
  }

  function onConfirm(
    options: ModalConfirmOptions,
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    options.onOk && options.onOk(e);
    close();
  }

  function closeEventHandler(e: any) {
    if (e.target === container) close();
  }

  function confirm(options: ModalConfirmOptions) {
    if (!container) init();

    _options = options;

    container.style.display = "flex";

    const reactElement = (
      <>
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>{options.content}</div>
          <div className={styles["modal-footer"]}>
            <Button onClick={(e) => onConfirm(options, e)}>确认</Button>
            <Button onClick={close}>取消</Button>
          </div>
        </div>
      </>
    );

    if (options.autoClose)
      container.addEventListener("click", closeEventHandler);

    ReactDOM.render(reactElement, container);
  }

  function init() {
    container = document.createElement("div");
    container.className = styles["modal-container"];
    container.id = id;
    document.body.appendChild(container);
  }

  /**
   * @description: 自定义的模态框：没有确定和取消按钮，只做弹出模态框渲染options.content的作用，可以调用Modal.close关闭
   * @param {*}
   * @return {*}
   */
  function open(options: ModalOpenOptions) {
    if (!container) init();

    if (options.autoClose)
      container.addEventListener("click", closeEventHandler);

    container.style.display = "flex";

    ReactDOM.render(
      <div className={styles["modal"]}>
        <div className={styles["modal-content"]}>{options.content}</div>
      </div>,
      container
    );
  }

  return { confirm, close, open };
})();

export default Modal;
