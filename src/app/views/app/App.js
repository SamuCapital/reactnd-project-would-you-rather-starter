import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

import { LoadingBar } from 'react-redux-loading';
import { fetchInitialData } from 'app/state/Shared';
import { AppContainer } from 'app/views/app/App.styled';
import Home from '../Home';
import NavBar from '../NavBar';
import Question from '../Question';
import CreateQuestion from '../CreateQuestion';
import Login from '../Login';
import Helper, { FourOhFour } from '../Helper';

const App = (props) => {
  const { loading, isFourOhFour, dispatch, navBarHeight } = props;
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {/* <LoadingBar /> */}
        <NavBar />
        {/* {!loading && ( */}
        <AppContainer height={navBarHeight}>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={CreateQuestion} />
          <Route path="/leaderboard" exact component={null} />
          <Route path="/questions/:question_id" exact component={Question} />
          <Route path="/login" exact component={Login} />
          {isFourOhFour && <Route component={FourOhFour} />}
          <Helper />
        </AppContainer>
        {/* )} */}
      </Router>
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isFourOhFour: PropTypes.bool.isRequired,
  navBarHeight: PropTypes.number.isRequired,
};

const mapStateToProps = ({ session, ui }) => ({
  loading: session === null,
  isFourOhFour: ui.isFourOhFour,
  navBarHeight: ui.navBarHeight,
});
export default connect(mapStateToProps)(App);
