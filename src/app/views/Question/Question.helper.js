import { useState, useEffect, useLayoutEffect } from 'react';

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

export const useContainerLayout = (
  containerRef,
  dimensions,
  initialLoaded,
  setDimensions,
  windowResized,
  windowWidth,
  setWindowResized,
  setInitialLoaded,
) =>
  useLayoutEffect(
    () => {
      if (!initialLoaded || containerRef.current.offsetWidth !== windowResized) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
        setWindowResized(containerRef.current.offsetWidth);
        setInitialLoaded(true);
      }
    },
    [containerRef, initialLoaded, setDimensions, setInitialLoaded, setWindowResized, windowResized],
    [dimensions],
    [dimensions].width,
    [initialLoaded],
    [setDimensions],
    [setInitialLoaded],
    [setWindowResized],
    [windowResized],
    [windowWidth],
  );
