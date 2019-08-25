import React, { useContext } from 'react';
import SetupContext from '../context/setup/SetupContext';
import MonitorContainer from './MonitorContainer';
//import Spinner from './Spinner';
import monitors from '../context/setup/defaultsetup.json';

const Setup = () => {

  const setupContext = useContext(SetupContext);
  //const { loading, /*monitors, loadDefaultSetup */} = setupContext;

  // useEffect(() => {
  //   return () => {
  //     loadDefaultSetup();
  //   };
  //   // eslint-disable-next-line
  // }, []);

  // if (loading) {
  //   return (
  //     <Spinner />
  //   );
  // } else {
    return (
      <section className={"grid-" + monitors.length}>
        {
          monitors.map(monitor => <MonitorContainer monitor={monitor} key={monitor.id} />)
        }
      </section>
    );
  // }

};

export default Setup;
