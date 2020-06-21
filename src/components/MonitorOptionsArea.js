import React from 'react';
import { styled } from '@material-ui/core';
import { MonitorOptions } from './MonitorOptions';

const MonitorOptionsAreaCard = styled('div')({
  margin: '2rem auto',
  width: '90%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'wrap'
});

export const MonitorOptionsArea = ({ monitors, setMonitors }) => {
  return (
    <MonitorOptionsAreaCard>
      {monitors.map((monitor, i) => (
        <MonitorOptions monitors={monitors} index={i} setMonitors={setMonitors} key={i} />
      ))}
    </MonitorOptionsAreaCard>
  );
};
