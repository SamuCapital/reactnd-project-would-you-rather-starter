import { useState, useEffect } from 'react';

/* -------------------------------------------------------------------------- */
/*                                    HOOKS                                   */
/* -------------------------------------------------------------------------- */

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

/* -------------------------------------------------------------------------- */
/*                                    STYLE                                   */
/* -------------------------------------------------------------------------- */

export const createBackGroundStyle = (flexDirection) => ({
  flexDirection: flexDirection ? 'row' : 'column',
  padding: flexDirection ? 10 : 20,
  width: flexDirection ? '60%' : '80%',
});

/* -------------------------------------------------------------------------- */
/*                                    Logic                                   */
/* -------------------------------------------------------------------------- */

export const handleDisplaySubmit = (
  setRenderQuestion,
  setAnswer,
  session,
  questionId,
  selected,
) => {
  setRenderQuestion(false);
  if (selected) {
    setAnswer(session, questionId, selected);
  }
};
