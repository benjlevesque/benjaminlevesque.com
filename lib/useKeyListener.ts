import { useEffect } from "react";

export const useKeyListener = (
  key: string,
  callback: () => void,
  options: {
    enabledOnInput?: boolean;
    disabled?: boolean;
  } = {}
) => {
  const maybeCallCallback = (ev: KeyboardEvent) => {
    if (
      !options.enabledOnInput &&
      ["INPUT", "TEXTAREA", "SELECT"].includes(
        (ev.target as HTMLElement).tagName
      )
    ) {
      return;
    }
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
