import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react';
import _ from 'lodash';
import defaultSetup from '../util/defaultSetup.json';

const SetupContext = createContext();

export const useSetup = () => {
  return useContext(SetupContext);
};

const saveSetup = (newSetup) => {
  window.localStorage.setItem('setup', JSON.stringify(newSetup));
};

export const SetupProvider = ({ children }) => {
  const { current: setup } = useRef(
    JSON.parse(window.localStorage.getItem('setup')) ??
      JSON.parse(JSON.stringify(defaultSetup))
  );
  const [scale, setScaleState] = useState(() => setup.scale);
  const [deskWidth, setDeskWidthState] = useState(() => setup.deskWidth);
  const [monitors, setMonitors] = useState(() => setup.monitors);
  const delayedSave = useCallback(
    _.debounce((newSetup) => saveSetup(newSetup), 2000),
    // eslint-disable-next-line
    []
  );

  const setScale = useCallback(
    _.debounce((newScale) => setScaleState(newScale), 10),
    // eslint-disable-next-line
    []
  );

  const setDeskWidth = useCallback(
    _.debounce((newDeskWidth) => setDeskWidthState(newDeskWidth), 10),
    // eslint-disable-next-line
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
