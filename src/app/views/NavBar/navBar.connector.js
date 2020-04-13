import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useDimensions from 'react-use-dimensions';

import NavBar from './NavBar.react';
import { createFilterStyle } from './mavBar.helper';
import { uiOperations } from '../../state/ducks/UI';

const ConnectedComponent = ({
  isWide,
  isHome,
  filter,
  setFilter,
  toggleIsHome,
  toggleIsFourOhFour,
  setNavBarHeight,
}) => {
  const style = createFilterStyle(isWide);
  const [ref, dimensions] = useDimensions();
  useEffect(() => {
    setNavBarHeight(dimensions.height);
  }, [dimensions.height, setNavBarHeight]);
  return (
    <NavBar
      isHome={isHome}
      style={style}
      filter={filter}
      setFilter={setFilter}
      toggleIsHome={toggleIsHome}
      toggleIsFourOhFour={toggleIsFourOhFour}
      containerRef={ref}
    />
  );
};

ConnectedComponent.propTypes = {
  isWide: PropTypes.bool.isRequired,
  isHome: PropTypes.bool,
  filter: PropTypes.bool,
  setFilter: PropTypes.func.isRequired,
  toggleIsHome: PropTypes.func.isRequired,
  toggleIsFourOhFour: PropTypes.func.isRequired,
  setNavBarHeight: PropTypes.func.isRequired,
};
ConnectedComponent.defaultProps = {
  isHome: false,
  filter: false,
};

const mapStateToProps = ({ ui }) => ({
  isWide: ui.isWide,
  isHome: ui.isHome,
  filter: ui.filter,
});
const mapDispatchToProps = (dispatch) => ({
  setFilter: (bool) => dispatch(uiOperations.setFilter(bool)),
  toggleIsHome: (bool) => dispatch(uiOperations.setIsHome(bool)),
  toggleIsFourOhFour: (bool) => dispatch(uiOperations.setIsFourOhFour(bool)),
  setNavBarHeight: (height) => dispatch(uiOperations.setNavBarHeight(height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
