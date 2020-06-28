import React from 'react';
import { Setup } from '../components/Setup';
import { SetupProvider } from '../context/SetupContext';

const Home = () => {
  return (
    <SetupProvider>
      <Setup />
    </SetupProvider>
  );
};

export default Home;
