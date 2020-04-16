import React from 'react';

import { connect } from 'react-redux';
import LeaderBoard from './Leaderboard.react';

const ConnectedComponent = ({ users }) => {
  return <LeaderBoard users={users} />;
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(ConnectedComponent);
