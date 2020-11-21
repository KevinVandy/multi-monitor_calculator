import React from 'react';
import { MonitorsArea } from './MonitorsArea';
import { MonitorOptionsArea } from './MonitorOptionsArea';
import { SettingsPanel } from './SettingsPanel';
import { ButtonsArea } from './ButtonsArea';

export const Setup = () => {
  return (
    <>
      
      <ButtonsArea />
      <MonitorsArea />
      <MonitorOptionsArea />
    </>
  );
};
