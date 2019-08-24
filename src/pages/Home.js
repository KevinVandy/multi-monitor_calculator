import React from 'react';
import Header from '../layout/Header';
import ButtonArea from '../components/ButtonArea';
import Setup from '../components/Setup';
import Analysis from '../components/Analysis';

const Home = () => {
  return (
    <main>
      <Header />
      <ButtonArea />
      <Setup />
      <Analysis />
    </main>
  );
};

export default Home;
