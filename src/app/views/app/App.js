import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

import { fetchInitialData } from 'app/state/Shared';
import { AppContainer } from 'app/views/app/App.styled';
import Home from 'app/views//Home';
import Leaderboard from 'app/views/Leaderboard';
import NavBar from 'app/views//NavBar';
import Question from 'app/views//Question';
import CreateQuestion from 'app/views//CreateQuestion';
import Login from 'app/views//Login';
import Helper, { FourOhFour } from 'app/views//Helper';

const App = (props) => {
  const { isFourOhFour, dispatch, navBarHeight } = props;
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);
  return (
    // <div className="App">
    <Router>
      <NavBar />
      <AppContainer height={navBarHeight}>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={CreateQuestion} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/questions/:question_id" exact component={Question} />
        <Route path="/login" exact component={Login} />
        {isFourOhFour && <Route component={FourOhFour} />}
        <Helper />
      </AppContainer>
    </Router>
    // {/* </div> */}
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFourOhFour: PropTypes.bool.isRequired,
  navBarHeight: PropTypes.number.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  isFourOhFour: ui.isFourOhFour,
  navBarHeight: ui.navBarHeight,
});
export default connect(mapStateToProps)(App);
