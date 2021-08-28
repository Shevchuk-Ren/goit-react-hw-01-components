import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ title, friends }) => (
  <div className={styles.wrapper}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span
            className={isOnline ? `${styles.online}` : `${styles.offline}`}
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
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([false, true]),
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
