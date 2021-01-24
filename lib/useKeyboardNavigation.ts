import { useCallback, useEffect, useState } from "react";

const useKeyListener = (key: string, callback: () => void) => {
  const maybeCallCallback = (ev: KeyboardEvent) => {
    if (ev.key === key && typeof callback === "function") {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", maybeCallCallback);
    return () => window.removeEventListener("keydown", maybeCallCallback);
  }, [key, callback]);
};

export const useKeyboardNavigation = (
  length: number,
  select?: (index: number | null) => void
) => {
  const [currentItem, setCurrentItem] = useState(-1);

  const next = useCallback(() => {
    setCurrentItem((item) => {
      if (item < length - 1) {
        return item + 1;
      }
      return item;
    });
  }, [length]);
  const previous = useCallback(() => {
    setCurrentItem((item) => {
      if (item > -1) {
        return item - 1;
      }
      return item;
    });
  }, []);

  useKeyListener("j", next);
  useKeyListener("k", previous);
  useKeyListener("Enter", () => {
    if (select) {
      select(currentItem);
    }
  });

  return currentItem === -1 ? null : currentItem;
};
