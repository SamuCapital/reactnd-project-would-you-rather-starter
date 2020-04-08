import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import setUser from '../../state/ducks/Session/operations';
import fetchInitialData from '../../state/sharedActions';

import Login from '../Login';
import Question from '../Question';

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
    const { dispatch } = this.props;
    return (
      <div className="App">
        <Login />
        <Question />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div onClick={() => dispatch(setUser('HELLO'))}>DISPATCH</div>
        </header>
      </div>
    );
  }
}

export default connect()(App);
