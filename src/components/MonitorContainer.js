import React, { useState } from 'react';
import Monitor from './Monitor';
import MonitorOptions from './MonitorOptions';
import MonitorStats from './MonitorStats';
import { SlideDown } from 'react-slidedown';
import "react-slidedown/lib/slidedown.css";

const MonitorContainer = (props) => {

  const [hideMonitorOptions, setHideMonitorOptions] = useState(false);
  const [hideMonitorStats, setHideMonitorStats] = useState(false);

  return (
    <section className="monitorContainer">
      <Monitor {...props} />
      <SlideDown
        closed={hideMonitorOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <MonitorOptions {...props} />
      </SlideDown>
      <SlideDown
        closed={hideMonitorStats}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <MonitorStats {...props} />
      </SlideDown>
    </section>
  );
};

export default MonitorContainer;
