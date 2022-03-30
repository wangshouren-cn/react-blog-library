export default function throttle(
  this: any,
  callback: Function,
  space: number = 200
) {

  let lastCallTime = null;

  return (...args: any[]) => {
    callback.call(this, ...args);
    lastCallTime = Date.now();
  };
}
