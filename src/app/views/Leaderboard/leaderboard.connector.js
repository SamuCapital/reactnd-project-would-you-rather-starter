import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LeaderBoard from './Leaderboard.react';

const ConnectedComponent = ({ users, session }) => {
  return session ? <LeaderBoard users={users} /> : <Redirect to="/login" />;
};

const mapStateToProps = (state) => ({
  users: state.users,
  session: !!state.session,
});

ConnectedComponent.propTypes = {
  users: PropTypes.object.isRequired,
  session: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ConnectedComponent);
