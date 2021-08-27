import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <Container>
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
      <TransactionHistory
        title="Gluke's transaction history"
        items={transactions}
      />
      ;
    </Container>
  );
};

export default App;
