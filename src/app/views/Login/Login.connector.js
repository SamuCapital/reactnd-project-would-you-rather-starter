import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { sessionOperations } from '../../state/ducks/Session';
import Login from './Login.react';

const ConnectedComponent = ({ users, session, setUser }) => {
  useEffect(() => {
    session && setUser(null);
  }, [session, setUser]);
  return <Login users={users} setUser={setUser} />;
};

const mapStateToProps = (state) => {
  return {
    users: Object.keys(state.users),
    session: state.session,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(sessionOperations.setUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
