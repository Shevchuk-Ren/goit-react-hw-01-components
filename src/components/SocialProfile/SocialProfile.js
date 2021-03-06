import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialProfile.module.css';
import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './SocialProfile.styled';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
  <ProfileWrapper>
    <Description>
      <Avatar src={avatar} alt="Аватар пользователя" width="150" height="150" />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location className={styles.location}>{location}</Location>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </Stats>
  </ProfileWrapper>
);

// const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
//   <div className={styles.profile}>
//     <div className={styles.description}>
//       <img
//         src={avatar}
//         alt="Аватар пользователя"
//         className={styles.avatar}
//         width="150"
//         height="150"
//       />
//       <p className={styles.name}>{name}</p>
//       <p className={styles.tag}>@{tag}</p>
//       <p className={styles.location}>{location}</p>
//     </div>

//     <ul className={styles.stats}>
//       <li>
//         <span className={styles.label}>Followers</span>
//         <span className={styles.quantity}>{followers}</span>
//       </li>
//       <li>
//         <span className={styles.label}>Views</span>
//         <span className={styles.quantity}>{views}</span>
//       </li>
//       <li>
//         <span className={styles.label}>Likes</span>
//         <span className={styles.quantity}>{likes}</span>
//       </li>
//     </ul>
//   </div>
// );

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
