import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

import { StickyContainer, Sticky } from 'react-sticky';
import Home from '../Home';
import NavBar from '../NavBar';
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
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <NavBar />
              </div>
            )}
          </Sticky>
          {/* <Login /> */}
          <Home />
        </StickyContainer>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
