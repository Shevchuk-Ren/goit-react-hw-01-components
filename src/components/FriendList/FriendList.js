import React from 'react';
import PropTypes from 'prop-types';
// import styles from './FriendList.module.css';
import {
  FriendWrapper,
  Title,
  RosterFriends,
  Item,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

const FriendList = ({ title, friends }) => (
  <FriendWrapper>
    {title && <Title>{title}</Title>}

    <RosterFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </RosterFriends>
  </FriendWrapper>
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
