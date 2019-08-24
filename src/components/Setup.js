import React, { useContext, useEffect } from 'react';
import SetupContext from '../context/setup/SetupContext';
import MonitorContainer from './MonitorContainer';
import Spinner from './Spinner';

const Setup = () => {

  const setupContext = useContext(SetupContext);
  const { loading, monitors, loadDefaultSetup } = setupContext;

  useEffect(() => {
    console.log("useEffect");
    return () => {
      loadDefaultSetup();
    };
    // eslint-disable-next-line
  }, []);


  if (loading) {
    return (
      <Spinner />
    );
  } else {
    return (
      monitors.map(
        monitor => <MonitorContainer monitor={monitor} key={monitor.id} />
      )
    );
  }

};

export default Setup;
