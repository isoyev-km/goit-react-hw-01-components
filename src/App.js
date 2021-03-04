import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import user from "./user.json";
import Stats from "./components/Stats/Stats.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div className="container">
      <div className="profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Stats
          followers={user.stats.followers}
          likes={user.stats.likes}
          views={user.stats.views}
        />
      </div>
      <div className="statistics">
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div className="friendlist">
        <FriendList friends={friends} />
      </div>
      <div className="transactionHistory">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
