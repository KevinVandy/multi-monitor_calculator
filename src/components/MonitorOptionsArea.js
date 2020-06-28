import React from 'react';
import { styled } from '@material-ui/core';
import { MonitorOptions } from './MonitorOptions';
import { useMonitors } from '../context/MonitorsContext';

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
  const { monitors } = useMonitors();
  return (
    <MonitorOptionsAreaCard>
      {monitors.map((monitor, i) => (
        <MonitorOptions index={i} key={i} monitor={monitor} />
      ))}
    </MonitorOptionsAreaCard>
  );
};
