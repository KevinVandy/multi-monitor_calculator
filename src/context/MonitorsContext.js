import React, { createContext, useContext, useEffect, useState } from 'react';
import defaultMonitor from '../util/defaultMonitor.json';

const MonitorsContext = createContext();

export const useMonitors = () => {
  return useContext(MonitorsContext);
};

export const MonitorsProvider = ({ children }) => {
  const [monitors, setMonitors] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('monitors')) ?? [
        JSON.parse(JSON.stringify(defaultMonitor))
      ]
  );

  const setMonitor = (newMonitor, index) => {
    monitors[index] = newMonitor;
    setMonitors([...monitors]);
  };

  useEffect(() => {
    window.localStorage.setItem('monitors', JSON.stringify(monitors));
  }, [monitors]);

  return (
    <MonitorsContext.Provider value={{ monitors, setMonitors, setMonitor }}>
      {children}
    </MonitorsContext.Provider>
  );
};
