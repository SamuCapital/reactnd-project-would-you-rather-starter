import { connect } from 'react-redux';
import { uiOperations } from 'app/state/ducks/UI';
import { useLocation } from 'react-router-dom';

const Helper = ({ toggleIsHome, setIsFourOhFour, currErrorState, currHomeState, setPath }) => {
  const paths = ['/', '/add', '/leaderboard', '/questions/:question_id', '/login'];
  const location = useLocation();
  const { pathname: path } = location;
  console.log('HELPER LOCATION: ', path);
  setPath(path);

  const isFourOhFour = !paths.includes(path);
  // TODO: ADD SOME LOGIC TO DEFINE IF QUESTION IS IN STORE
  isFourOhFour !== currErrorState && setIsFourOhFour(isFourOhFour);

  currHomeState !== (path === '/') && toggleIsHome(path === '/');
  window.dispatchEvent(new Event('scroll'));

  return null;
};

const mapStateToProps = (state) => ({
  currErrorState: state.ui.isFourOhFour,
  currHomeState: state.ui.isHome,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsHome: (bool) => dispatch(uiOperations.setIsHome(bool)),
  setIsFourOhFour: (bool) => dispatch(uiOperations.setIsFourOhFour(bool)),
  setPath: (path) => dispatch(uiOperations.setNavPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Helper);
