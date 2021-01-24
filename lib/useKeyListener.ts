import { useEffect } from "react";

export const useKeyListener = (
  key: string,
  callback: () => void,
  options: {
    disabled?: boolean;
  } = {}
) => {
  const maybeCallCallback = (ev: KeyboardEvent) => {
    if (ev.key === key && typeof callback === "function") {
      ev.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    if (!options.disabled) {
      window.addEventListener("keydown", maybeCallCallback);
    }
    return () => window.removeEventListener("keydown", maybeCallCallback);
  }, [options.disabled, key, callback]);
};
