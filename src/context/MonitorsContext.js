import React, { createContext, useContext, useEffect, useState } from 'react';
import defaultMonitor from '../util/defaultMonitor.json';

const MonitorsContext = createContext();
const SetMonitorsContext = createContext();

export const useMonitors = () => {
  return useContext(MonitorsContext);
};

export const useSetMonitors = () => {
  return useContext(SetMonitorsContext);
};

export const MonitorsProvider = ({ children }) => {
  const [monitors, setMonitors] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('monitors')) ?? [
        JSON.parse(JSON.stringify(defaultMonitor))
      ]
  );

  useEffect(() => {
    window.localStorage.setItem('monitors', JSON.stringify(monitors));
  }, [monitors]);

  return (
    <MonitorsContext.Provider value={monitors}>
      <SetMonitorsContext.Provider value={setMonitors}>
        {children}
      </SetMonitorsContext.Provider>
    </MonitorsContext.Provider>
  );
};
