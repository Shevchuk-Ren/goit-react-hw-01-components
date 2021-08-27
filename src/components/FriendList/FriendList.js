import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ title, friends }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    <ul class={styles.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          {isOnline ? (
            <span
              className={styles.status}
              style={{ backgroundColor: `rgb(0, 204, 0)` }}
            ></span>
          ) : (
            <span className={styles.status}>{isOnline}</span>
          )}
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  </div>
);

FriendList.defaultProps = {
  isOnline: false,
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([false, true]),
  id: PropTypes.string.isRequired,
};

export default FriendList;
