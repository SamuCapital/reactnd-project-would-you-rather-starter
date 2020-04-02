import { useState, useEffect, useLayoutEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
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

// export const getComponentDimensions = (containerRef, dimensions, setDimensions) => (

export const useCompDimensions = (
  containerRef,
  dimensions,
  setDimensions,
  windowWidth,
  windowResized,
) =>
  useLayoutEffect(() => {
    if ((containerRef.current && dimensions.width === 0) || windowWidth !== windowResized) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
      console.log('Set Dimensions!');
    }
  }, [containerRef, dimensions.width, setDimensions, windowResized, windowWidth]);
