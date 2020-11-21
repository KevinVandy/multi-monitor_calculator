import React from 'react';
import { styled, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ResetIcon from '@material-ui/icons/SettingsBackupRestore';
import defaultSetup from '../util/defaultSetup.json';
import { useSetup } from '../context/SetupContext';
import { SettingsPanel } from './SettingsPanel';

const FabGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '3rem 3rem 3rem 12rem',
  gridGap: '2rem',
  width: '100%',
  justifyContent: 'center'
});

export const ButtonsArea = () => {
  const { monitors, setDeskWidth, setMonitors, setScale } = useSetup();

  const handleResetMonitors = () => {
    setMonitors([{ ...defaultSetup.monitors[0] }]);
    setScale(16);
    setDeskWidth(6);
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
      ...JSON.parse(JSON.stringify(defaultSetup.monitors[0])),
      index: monitors.length,
      visible: true
    });
    setMonitors([...monitors]);
  };
  
  return (
    <FabGrid>
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
      <SettingsPanel />
    </FabGrid>
  );
};
