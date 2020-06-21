import React, { useState } from 'react';
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
  const [expanded, setExpanded] = useState(false);
  return (
    <MonitorOptionsAreaCard>
      {monitors.map((monitor, i) => (
        <MonitorOptions
          expanded={expanded}
          index={i}
          key={i}
          monitors={monitors}
          setExpanded={setExpanded}
          setMonitors={setMonitors}
        />
      ))}
    </MonitorOptionsAreaCard>
  );
};
