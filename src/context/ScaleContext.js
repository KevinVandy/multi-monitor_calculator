import React, { createContext, useContext, useEffect, useState } from 'react';

const ScaleContext = createContext();
const SetScaleContext = createContext();

export const useScale = () => {
  return useContext(ScaleContext);
};

export const useSetScale = () => {
  return useContext(SetScaleContext);
};

export const ScaleProvider = ({ children }) => {
  const [scale, setScale] = useState(
    () => JSON.parse(window.localStorage.getItem('scale')) ?? 16
  );

  useEffect(() => {
    window.localStorage.setItem('scale', JSON.stringify(scale));
  }, [scale]);

  return (
    <ScaleContext.Provider value={scale}>
      <SetScaleContext.Provider value={setScale}>{children}</SetScaleContext.Provider>
    </ScaleContext.Provider>
  );
};
