import React from 'react';
import Container from '../Container/Container';
import Profile from '../SocialProfile/SocialProfile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../Transaction/TransactionHistory';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

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
    </Container>
  );
};

export default App;
