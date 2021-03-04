import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className={styles.description}>
      <img
        src={props.avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.tag}>@{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
