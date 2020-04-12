/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { uiOperations } from 'app/state/ducks/UI';

const Error = ({ toggleIsHome }) => {
  toggleIsHome(false);
  return (
    <div style={{ margin: 'auto', width: '100%', height: '100%' }}>
      <p style={{ fontSize: 200 }}>404</p>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleIsHome: (bool) => dispatch(uiOperations.setIsHome(bool)),
});

export default connect(null, mapDispatchToProps)(Error);
