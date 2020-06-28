import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import _ from 'lodash';
import defaultSetup from '../util/defaultSetup.json';

const SetupContext = createContext();

export const useSetup = () => {
  return useContext(SetupContext);
};

const saveSetup = (setup) => {
  window.localStorage.setItem('setup', JSON.stringify(setup));
};

export const SetupProvider = ({ children }) => {
  const [setup] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('setup')) ??
      JSON.parse(JSON.stringify(defaultSetup))
  );
  const [scale, setScale] = useState(() => setup.scale);
  const [deskWidth, setDeskWidth] = useState(() => setup.deskWidth);
  const [monitors, setMonitors] = useState(() => setup.monitors);
  const delayedSave = useCallback(
    _.debounce((s) => saveSetup(s), 2000),
    []
  );

  const setMonitor = (newMonitor, index) => {
    monitors[index] = newMonitor;
    setMonitors([...monitors]);
  };

  useEffect(() => {
    setup.deskWidth = deskWidth;
    setup.scale = scale;
    delayedSave(setup);
  }, [delayedSave, deskWidth, scale, setup]);

  useEffect(() => {
    setup.monitors = monitors;
    delayedSave(setup);
  }, [delayedSave, monitors, setup]);

  return (
    <SetupContext.Provider
      value={{
        deskWidth,
        monitors,
        scale,
        setDeskWidth,
        setMonitor,
        setMonitors,
        setScale
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};
