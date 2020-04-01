import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import Button from './Button';
import 'react-dropdown/style.css';

const Login = ({ users, setUser }) => {
  const [username, setUsername] = useState();
  const options = Array.isArray(users) ? users : [];
  return (
    <div>
      <Dropdown
        options={options}
        onChange={setUsername}
        value={username}
        placeholder="Select an option"
      />
      <Button onClick={() => setUser(username.value)}>Login</Button>
    </div>
  );
};

Login.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  setUser: PropTypes.func.isRequired,
};

Login.defaultProps = {
  users: null,
};

export default Login;
