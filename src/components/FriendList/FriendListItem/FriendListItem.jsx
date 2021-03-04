import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item} key={friend.id}>
      <span
        className={friend.isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
