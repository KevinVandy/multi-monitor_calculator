import React from 'react';
import { Setup } from '../components/Setup';
import { MonitorsProvider } from '../context/MonitorsContext';
import { ScaleProvider } from '../context/ScaleContext';

const Home = () => {
  return (
    <MonitorsProvider>
      <ScaleProvider>
        <Setup />
      </ScaleProvider>
    </MonitorsProvider>
  );
};

export default Home;
