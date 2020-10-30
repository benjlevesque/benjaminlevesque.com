import React from "react";
import styles from "../styles/Terminal.module.scss";

const classnames = (...params: string[]) => params.join(" ");

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

export const TerminalRow: React.FC<{ title?: string; cursor?: boolean }> = ({
  title,
  cursor,
  children,
}) => {
  return (
    <div className={styles.line}>
      {title ? "> " + title : null}
      {cursor ? (
        <>
          {"> "}
          <span className={styles.cursor}>_</span>
        </>
      ) : null}
      {children}
    </div>
  );
};
