import React from 'react';

import Profile from './components/SocialProfile/SocialProfile';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import user from './user.json';

const App = () => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
);

export default App;
