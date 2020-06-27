import React from 'react';
import { MonitorSetup } from '../components/MonitorSetup';
import { MonitorsProvider } from '../context/MonitorsContext';
import { ScaleProvider } from '../context/ScaleContext';

const Home = () => {
  return (
    <MonitorsProvider>
      <ScaleProvider>
        <MonitorSetup />
      </ScaleProvider>
    </MonitorsProvider>
  );
};

export default Home;
