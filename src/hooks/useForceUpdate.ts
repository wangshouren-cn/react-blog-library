import { useCallback, useRef, useState } from "react";

export default function useForceUpdate() {
  const [, $] = useState({});

  const forceUpdate = useCallback(() => {
    $({});
  }, []);

  return forceUpdate;
}
