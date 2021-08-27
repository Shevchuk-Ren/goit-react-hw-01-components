import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ title, friends }) => (
  <div className={styles.wrapper}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul class={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span
            className={styles.status}
            style={{
              backgroundColor: isOnline ? `rgb(0, 204, 0)` : `rgb(230, 0, 0)`,
            }}
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
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
