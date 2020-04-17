import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeaderBoard from './Leaderboard.react';

const ConnectedComponent = ({ users }) => {
  return <LeaderBoard users={users} />;
};

const mapStateToProps = (state) => ({
  users: state.users,
});

ConnectedComponent.propTypes = {
  users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ConnectedComponent);
