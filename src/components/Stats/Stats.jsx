import React from "react";
import styles from "./Stats.module.css";

const Stats = (props) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.statsitem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{props.followers}</span>
      </li>
      <li className={styles.statsitem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{props.views}</span>
      </li>
      <li className={styles.statsitem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{props.likes}</span>
      </li>
    </ul>
  );
};

export default Stats;
