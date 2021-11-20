import { useCallback, useState } from "react";
import { useKeyListener } from "./useKeyListener";

export const useKeyboardNavigation = (
  length: number,
  select?: (index: number | null) => void,
  initialSelection: number = -1,
  enabledOnInput = false
) => {
  const [currentItem, setCurrentItem] = useState(initialSelection);

  const next = useCallback(() => {
    setCurrentItem((item) => {
      if (item < length - 1) {
        return item + 1;
      }
      return 0;
    });
  }, [length]);
  const previous = useCallback(() => {
    setCurrentItem((item) => {
      if (item > 0) {
        return item - 1;
      }
      return length - 1;
    });
  }, [length]);

  useKeyListener("j", next, { enabledOnInput });
  useKeyListener("ArrowDown", next, { enabledOnInput });
  useKeyListener("k", previous, { enabledOnInput });
  useKeyListener("ArrowUp", previous, { enabledOnInput });
  useKeyListener(
    "Enter",
    () => {
      if (select) {
        select(currentItem);
      }
    },
    { enabledOnInput }
  );

  return currentItem === -1 ? null : currentItem;
};
