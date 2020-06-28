import React, { useState } from 'react';
import { useMonitors } from '../context/MonitorsContext';
import { useScale } from '../context/ScaleContext';
import { MonitorsArea } from './MonitorsArea';
import { MonitorOptionsArea } from './MonitorOptionsArea';
import { Fab, styled, Tooltip, Slider, Typography, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ResetIcon from '@material-ui/icons/SettingsBackupRestore';
import defaultMonitor from '../util/defaultMonitor.json';

const FabGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 3rem 3rem 3rem auto',
  gridGap: '2rem',
  width: '100%'
});

const SettingsPanel = styled(Card)({
  display: 'grid',
  gridGap: '0.5rem',
  width: '10rem',
  padding: '1.5rem',
  position: 'absolute',
  top: '5rem',
  right: '1rem',
  zIndex: '2'
});

export const Setup = () => {
  const { monitors, setMonitors } = useMonitors();
  const { scale, setScale } = useScale();
  const [deskWidth, setDeskWidth] = useState(6);

  const handleResetMonitors = () => {
    setMonitors([{ ...defaultMonitor }]);
    setScale(16);
  };

  const handleRemoveMonitor = () => {
    if (monitors.length <= 0) return;
    monitors[monitors.length - 1].visible = false;
    setMonitors([...monitors]);
    setTimeout(() => {
      monitors.pop();
      setMonitors([...monitors]);
    }, 300);
  };

  const handleAddMonitor = () => {
    if (monitors.length >= 9) return;
    monitors.push({
      ...JSON.parse(JSON.stringify(defaultMonitor)),
      index: monitors.length,
      visible: true
    });
    setMonitors([...monitors]);
  };

  const handleScaleChange = (e, newValue) => {
    setScale(newValue);
  };

  const handleDeskWidthChange = (e, newValue) => {
    setDeskWidth(newValue);
  };

  return (
    <div>
      <SettingsPanel>
        <Typography>
          Zoom
          <Slider
            marks={[
              { value: 4, label: '25%' },
              { value: 16, label: '100%' },
              { value: 32, label: '200%' }
            ]}
            max={32}
            min={4}
            onChange={handleScaleChange}
            scale={(x) => ((x * 100) / 16).toFixed() + '%'}
            step={2}
            value={scale}
            valueLabelDisplay="auto"
          />
        </Typography>

        <Typography>
          Desk Width
          <Slider
            marks={[
              { value: 2, label: "2'" },
              { value: 6, label: "6'" },
              { value: 20, label: "20'" }
            ]}
            max={20}
            min={2}
            onChange={handleDeskWidthChange}
            scale={(x) => x + "'"}
            step={0.5}
            value={deskWidth}
            valueLabelDisplay="auto"
          />
        </Typography>
      </SettingsPanel>
      <FabGrid>
        <span />
        <Tooltip arrow placement="left" title="Reset">
          <Fab onClick={handleResetMonitors} color="secondary">
            <ResetIcon />
          </Fab>
        </Tooltip>
        <Tooltip arrow placement="top" title="Remove Monitor">
          <Fab onClick={handleRemoveMonitor} color="secondary">
            <RemoveIcon />
          </Fab>
        </Tooltip>
        <Tooltip arrow placement="right" title="Add Monitor">
          <Fab onClick={handleAddMonitor} color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
        <span />
      </FabGrid>
      <MonitorsArea deskWidth={deskWidth} />
      <MonitorOptionsArea />
    </div>
  );
};
