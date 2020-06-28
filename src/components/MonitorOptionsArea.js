import React from 'react';
import { styled } from '@material-ui/core';
import { MonitorOptions } from './MonitorOptions';
import { useSetup } from '../context/SetupContext';

const MonitorOptionsAreaCard = styled('div')({
  margin: '2rem auto',
  width: '90%',
  alignItems: 'flex-start',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'wrap'
});

export const MonitorOptionsArea = () => {
  const { monitors } = useSetup();
  return (
    <MonitorOptionsAreaCard>
      {monitors.map((monitor, i) => (
        <MonitorOptions index={i} key={i} monitor={monitor} />
      ))}
    </MonitorOptionsAreaCard>
  );
};
