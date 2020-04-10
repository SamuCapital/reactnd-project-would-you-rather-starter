import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

import Home from '../Home';
import Login from '../Login';
import { fetchInitialData } from '../../state/Shared';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInitialData());
  }

  render() {
    return (
      <div className="App">
        <Login />
        <Home />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
