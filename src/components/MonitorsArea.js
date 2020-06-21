import React, { useState } from 'react';
import { Card, styled } from '@material-ui/core';
import { Monitor } from './Monitor';

const MonitorsAreaCard = styled(Card)({
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem auto',
  maxHeight: '40rem',
  minHeight: '20rem',
  minWidth: '480px',
  overflow: 'auto',
  resize: 'vertical',
});

export const MonitorsArea = ({ monitors, scale }) => {
  const [deskWidth, setDeskWidth] = useState(6);

  return (
    <MonitorsAreaCard style={{width: `${deskWidth * 12 * scale}px`}} variant="outlined">
      {monitors.map((monitor, i) => (
        <Monitor key={i} monitor={monitor} scale={scale} />
      ))}
    </MonitorsAreaCard>
  );
};
