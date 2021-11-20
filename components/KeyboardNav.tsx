import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { navigationList } from "../lib/navigation";
import { useKeyboardNavigation } from "../lib/useKeyboardNavigation";
import { useKeyListener } from "../lib/useKeyListener";
import styles from "../styles/KeyboardNav.module.scss";
import { useOnClickOutside } from "../lib/useOnClickOutside";

const KeyboardNavInner = ({ onClose }: { onClose: () => void }) => {
  const [navItems, setNavItems] = useState(navigationList);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const ref = useRef<HTMLDivElement>();
  const activeKey = useKeyboardNavigation(
    navItems.length,
    (index) => {
      const selected = navItems[index];
      const val = navigationList.find(({ key }) => selected.key === key);
      if (val) {
        router.push(val.href);
      }
    },
    0,
    true
  );

  useOnClickOutside(ref, onClose);

  useEffect(() => {
    setNavItems(
      navigationList.filter((key) =>
        key.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h1 className={styles.title}>Navigate Content</h1>
      <input
        autoFocus
        className={styles.input}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <motion.ul className={styles.results}>
        {navItems.map(({ key, icon: Icon, name, href }, i) => {
          return (
            <li key={key} className={i === activeKey ? styles.active : null}>
              <Link href={href}>
                <a>
                  {Icon ? (
                    <Icon fill="#64b6ac" className={styles.icon} />
                  ) : (
                    <span className={styles.icon} />
                  )}
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export const KeyboardNav = () => {
  const [visible, setVisible] = useState(false);

  useKeyListener("/", () => setVisible(true), { disabled: visible });
  useKeyListener("Escape", () => setVisible(false), {
    disabled: !visible,
    enabledOnInput: true,
  });

  return (
    <AnimatePresence>
      {visible && <KeyboardNavInner onClose={() => setVisible(false)} />}
    </AnimatePresence>
  );
};
