import React from "react";
import styles from "../styles/Terminal.module.scss";

export const Terminal = ({ children }) => {
  return (
    <>
      <div className={styles.fakeMenu}>
        <div className={styles.fakeClose}></div>
        <div className={styles.fakeMinimize}></div>
        <div className={styles.fakeZoom}></div>
      </div>
      <div className={styles.fakeScreen}>{children}</div>
    </>
  );
};

export const TerminalRow: React.FC<{
  title?: string;
  children?: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className={styles.line}>
      {"> "}
      {title}
      {children}
    </div>
  );
};

export const TerminalCursor = () => <span className={styles.cursor}>_</span>;
