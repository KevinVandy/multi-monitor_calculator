import React, { useState } from 'react';
import { styled } from '@material-ui/core';
import { MonitorOptions } from './MonitorOptions';
import { useMonitors } from '../context/MonitorsContext';

const MonitorOptionsAreaCard = styled('div')({
  margin: '2rem auto',
  width: '90%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'wrap'
});

export const MonitorOptionsArea = () => {
  const monitors = useMonitors();
  const [expanded, setExpanded] = useState(false);
  return (
    <MonitorOptionsAreaCard>
      {monitors.map((monitor, i) => (
        <MonitorOptions
          expanded={expanded}
          index={i}
          key={i}
          setExpanded={setExpanded}
        />
      ))}
    </MonitorOptionsAreaCard>
  );
};
