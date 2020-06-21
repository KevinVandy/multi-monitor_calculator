import React, { useState, useEffect } from 'react';
import { MonitorsArea } from '../components/MonitorsArea';
import { MonitorOptionsArea } from '../components/MonitorOptionsArea';
import { Fab, styled, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ResetIcon from '@material-ui/icons/SettingsBackupRestore';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import defaultMonitor from '../util/defaultMonitor.json';

const FabGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 3rem 3rem 3rem 3rem 3rem auto',
  gridGap: '2rem',
  width: '100%'
});

export const MonitorSetup = () => {
  const [monitors, setMonitors] = useState(
    () => JSON.parse(window.localStorage.getItem('monitors')) ?? [{ ...defaultMonitor }]
  );
  const [scale, setScale] = useState(
    () => JSON.parse(window.localStorage.getItem('scale')) ?? 16
  );

  useEffect(() => {
    window.localStorage.setItem('monitors', JSON.stringify(monitors));
  }, [monitors]);

  useEffect(() => {
    window.localStorage.setItem('scale', scale);
  }, [scale]);

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
    }, 500);
  };

  const handleAddMonitor = () => {
    if (monitors.length >= 9) return;
    monitors.push({ ...defaultMonitor, index: monitors.length, visible: true });
    setMonitors([...monitors]);
  };

  const handleZoomOut = () => {
    if (scale <= 1) return;
    setScale(scale - 1);
  };

  const handleZoomIn = () => {
    if (scale > 25) return;
    setScale(scale + 1);
  };

  return (
    <div>
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
        <Tooltip arrow placement="top" title="Add Monitor">
          <Fab onClick={handleAddMonitor} color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip arrow placement="top" title="Zoom Out">
          <Fab onClick={handleZoomOut} color="secondary">
            <ZoomOutIcon />
          </Fab>
        </Tooltip>
        <Tooltip arrow placement="right" title="Zoom In">
          <Fab onClick={handleZoomIn} color="secondary">
            <ZoomInIcon />
          </Fab>
        </Tooltip> 
        <span />
      </FabGrid>
      <MonitorsArea monitors={monitors} scale={scale} setMonitors={setMonitors} />
      <MonitorOptionsArea monitors={monitors} setMonitors={setMonitors} />
    </div>
  );
};
