import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import { Background, Button, Container, Headline, Text } from './Login.styled';
import 'react-dropdown/style.css';

const Login = ({ users, setUser, username, setUsername }) => {
  const options = Array.isArray(Object.keys(users)) ? Object.keys(users) : [];
  return (
    <Background>
      <Headline>Welcome!</Headline>
      <Text>Please log in below to get full access to the app!</Text>
      <Container>
        <Dropdown
          options={options}
          onChange={setUsername}
          value={username}
          placeholder="Select an option"
        />
        <Button onClick={() => username && setUser(username.value, users)}>Login</Button>
      </Container>
    </Background>
  );
};

Login.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  setUser: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  setUsername: PropTypes.func.isRequired,
};

Login.defaultProps = {
  users: null,
};

export default Login;
