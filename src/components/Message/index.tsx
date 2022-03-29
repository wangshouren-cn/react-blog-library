import styles from "./index.module.less";

const Message = (function () {
  let dom: Element,
    id = Math.random().toString() + "message";

  function initDom() {
    dom = document.createElement("div");
    dom.id = id;
  }

  function success(msg: string) {
    if (!dom) initDom();
    dom.className = `${styles["message"]} ${styles["success"]}`;
    dom.innerHTML = `${msg}`;
    show(dom);
  }

  function error(msg: string) {
    if (!dom) initDom();
    dom.className = `${styles["message"]} ${styles["error"]}`;
    dom.innerHTML = `${msg}`;
    show(dom);
  }

  function show(dom: Element) {
    if (dom.parentNode === document.body) document.body.removeChild(dom);
    document.body.appendChild(dom);
  }

  return {
    success,
    error,
  };
})();

export default Message;
