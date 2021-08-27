import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import Profile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList title="Gluke's friends" friends={friends} />
    </div>
  );
};

export default App;
