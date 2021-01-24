import React from "react";
import styles from "../styles/Timeline.module.scss";

export const Timeline = ({ children }) => {
  return <div className={styles.timeline}>{children}</div>;
};

export const Line = () => {
  return <div className={styles.line} />;
};
export const Dot = () => {
  return <div className={styles.dot} />;
};

export const TimelineItem: React.FC<{
  left?: boolean;
  right?: boolean;
}> = ({ left, right, children }) => {
  return (
    <>
      <div className={styles.timelineItem}>
        <div className={styles.left}>{left ? children : null}</div>
        <Dot />
        <div className={styles.right}>{right ? children : null}</div>
      </div>
      <Line />
    </>
  );
};
