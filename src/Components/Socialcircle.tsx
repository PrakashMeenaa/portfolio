'use client'
import React from 'react'
import Socials from './Socials'
import Circle from './Circle'
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: { matches: any; }) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Socialcircle = () => {
    const isBreakpoint = useMediaQuery(1440)
  return (
    <div>
      <Socials/>
      { isBreakpoint|| <Circle/>}
    </div>
  )
}

export default Socialcircle
