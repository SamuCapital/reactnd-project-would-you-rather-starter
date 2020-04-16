import { connect } from 'react-redux';
import { uiOperations } from 'app/state/ducks/UI';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Helper = ({
  toggleIsHome,
  dispatchFourOhFour,
  currErrorState,
  currHomeState,
  currPath,
  setPath,
  questions,
}) => {
  // ? Could also dynamically get all Router paths but that'd be too much for this project
  const paths = ['/', '/add', '/leaderboard', '/login'];
  const location = useLocation();
  const [isFourOhFour, setIsFourOhFour] = useState(true);
  const { pathname: path } = location;
  useEffect(() => {
    if (currPath !== path) setPath(path);
  }, [currPath, path, setPath]);

  useEffect(() => {
    let temp = !paths.includes(path);
    if (temp) {
      const pathArray = path.split('/');
      temp = !(pathArray[1] === 'questions' && questions.includes(pathArray[2]));
    }
    setIsFourOhFour(temp);
  }, [path, paths, questions, setIsFourOhFour]);

  isFourOhFour !== currErrorState && dispatchFourOhFour(isFourOhFour);
  currHomeState !== (path === '/') && toggleIsHome(path === '/');
  window.dispatchEvent(new Event('scroll'));

  return null;
};

const mapStateToProps = (state) => ({
  currErrorState: state.ui.isFourOhFour,
  currHomeState: state.ui.isHome,
  questions: Object.keys(state.questions),
  currPath: state.ui.navigationPath,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsHome: (bool) => dispatch(uiOperations.setIsHome(bool)),
  dispatchFourOhFour: (bool) => dispatch(uiOperations.setIsFourOhFour(bool)),
  setPath: (path) => dispatch(uiOperations.setNavPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Helper);
