import React, { createContext, useContext, useEffect, useState } from 'react';
import defaultMonitor from '../util/defaultMonitor.json';

const MonitorsContext = createContext();
const SetMonitorsContext = createContext();
const SetMonitorContext = createContext();

export const useMonitors = () => {
  return useContext(MonitorsContext);
};

export const useSetMonitors = () => {
  return useContext(SetMonitorsContext);
};

export const useSetMonitor = () => {
  return useContext(SetMonitorContext);
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
    <MonitorsContext.Provider value={monitors}>
      <SetMonitorsContext.Provider value={setMonitors}>
        <SetMonitorContext.Provider value={setMonitor}>
          {children}
        </SetMonitorContext.Provider>
      </SetMonitorsContext.Provider>
    </MonitorsContext.Provider>
  );
};
