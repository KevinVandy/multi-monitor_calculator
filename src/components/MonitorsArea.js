import React from 'react';
import { Card } from '@material-ui/core';
import { Monitor } from './Monitor';
import { useSetup } from '../context/SetupContext';

export const MonitorsArea = () => {
  const {  monitors, scale, deskWidth } = useSetup();
  return (
    <Card
      style={{
        width: `${deskWidth * 12 * scale}px`,
        minHeight: `${scale + 5}rem`,
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem auto',
        maxHeight: '50rem',
        overflow: 'auto',
        resize: 'vertical',
        transition: 'all 300ms ease',
        transitionProperty: 'height, width'
      }}
      variant="outlined"
    >
      {monitors.map((monitor, i) => (
        <Monitor key={i} monitor={monitor} />
      ))}
    </Card>
  );
};
