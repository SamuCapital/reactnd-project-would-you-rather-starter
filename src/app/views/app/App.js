import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

import { StickyContainer, Sticky } from 'react-sticky';
import { LoadingBar } from 'react-redux-loading';
import { fetchInitialData } from 'app/state/Shared';
import FourOhFour from 'app/views/FourOhFour';
import Home from '../Home';
import NavBar from '../NavBar';
import Question from '../Question';
import CreateQuestion from '../CreateQuestion';
import Login from '../Login';

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
    const { loading } = this.props;
    return (
      <div className="App">
        <Router>
          <StickyContainer>
            <LoadingBar />
            <Sticky>
              {({ style }) => (
                <div style={style}>
                  <NavBar />
                </div>
              )}
            </Sticky>
            {loading === true ? null : (
              <div>
                <Route path="/" exact component={Home}>
                  {/* {({ match }) => console.log('IS MATCH HOME', match)} */}
                </Route>
                <Route path="/add" component={CreateQuestion} />
                <Route path="/leaderboard" component={null} />
                <Route path="/questions/:question_id" component={Question} />
                <Route path="/login" component={Login} />
                <Route component={FourOhFour} />
              </div>
            )}
          </StickyContainer>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ session, ui }) => ({
  loading: session === null,
});
export default connect(mapStateToProps)(App);
