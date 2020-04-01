import { connect } from 'react-redux';
import setUser from '../../state/ducks/Session/operations';
import Login from './Login.react';

const mapStateToProps = (state) => {
  return {
    users: Object.keys(state.users),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
