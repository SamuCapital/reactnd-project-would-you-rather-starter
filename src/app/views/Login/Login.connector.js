import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sessionOperations } from '../../state/ducks/Session';
import Login from './Login.react';

const ConnectedComponent = ({ users, session, setUser, redirect }) => {
  const [didLogout, setDidLogout] = useState(false);
  const [username, setUsername] = useState();
  useEffect(() => {
    !didLogout && session && setUser(null, {});
    setDidLogout(true);
  }, [didLogout, session, setUser]);

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <Login users={users} setUser={setUser} username={username} setUsername={setUsername} />
  );
};

ConnectedComponent.propTypes = {
  users: PropTypes.object.isRequired,
  session: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired,
  setUser: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    session: state.session,
    redirect: state.ui.redirectToIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user, userState) => dispatch(sessionOperations.setUser(user, userState)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
