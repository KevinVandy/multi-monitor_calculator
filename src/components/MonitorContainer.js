import React from 'react';
import Monitor from './Monitor';
import MonitorOptions from './MonitorOptions';
import MonitorStats from './MonitorStats';

const MonitorContainer = (props) => {

  return (
    <section className="monitorContainer">
      <Monitor {...props} />
      <MonitorOptions {...props} />
      <MonitorStats {...props} />
    </section>
  );
};

export default MonitorContainer;
