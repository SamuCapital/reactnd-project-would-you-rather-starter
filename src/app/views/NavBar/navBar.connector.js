import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavBar from './NavBar.react';
import { createFilterStyle } from './mavBar.helper';

const ConnectedComponent = ({ isWide, isHome }) => {
  const style = createFilterStyle(isWide);
  return <NavBar isHome style={style} />;
};

ConnectedComponent.propTypes = {
  isWide: PropTypes.bool.isRequired,
  isHome: PropTypes.bool,
};
ConnectedComponent.defaultProps = {
  isHome: false,
};

const mapStateToProps = (state) => {
  return {
    isWide: state.ui.isWide,
    isHome: state.ui.isHome,
  };
};

export default connect(mapStateToProps)(ConnectedComponent);
