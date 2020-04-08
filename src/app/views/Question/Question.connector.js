import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question.react';
import { useWindowDimensions, useContainerLayout } from './Question.helper';

const ConnectedComponent = ({ url }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { width: windowWidth } = useWindowDimensions();
  const [windowResized, setWindowResized] = useState(0);
  const [initialLoaded, setInitialLoaded] = useState(false);

  useContainerLayout(
    containerRef,
    dimensions,
    initialLoaded,
    setDimensions,
    windowResized,
    windowWidth,
    setWindowResized,
    setInitialLoaded,
  );

  return (
    <Question
      url={url}
      windowWidth={windowWidth}
      containerRef={containerRef}
      dimensions={dimensions}
    />
  );
};

ConnectedComponent.propTypes = { url: PropTypes.string };
// TODO: REMOVE BEFORE PUBLISH
ConnectedComponent.defaultProps = {
  url: 'https://i.pinimg.com/564x/c3/98/41/c398410b49f5a52a7b566c3f9a9c0bf6.jpg',
  //   url: 'https://i.pinimg.com/564x/f1/f4/9c/f1f49ce816d324b40bf7b5c07e464854.jpg',
};

// export default ConnectedComponent;
const mapStateToProps = ({ questions }) => {
  return questions;
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
