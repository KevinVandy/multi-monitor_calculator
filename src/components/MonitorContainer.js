import React from 'react';
import Monitor from './Monitor';
import MonitorOptions from './MonitorOptions';
import MonitorStats from './MonitorStats';

const MonitorContainer = ({monitor}) => {
  return (
    <section className="monitorContainer">
      <Monitor monitor={monitor} />
      <MonitorOptions monitor={monitor} />
      <MonitorStats monitor={monitor} />
    </section>
  );
};

export default MonitorContainer;
