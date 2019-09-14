import React, { useState } from 'react';
import Monitor from './Monitor';
import MonitorOptions from './MonitorOptions';
import MonitorStats from './MonitorStats';
import Draggable from 'react-draggable';
import { SlideDown } from 'react-slidedown';
import "react-slidedown/lib/slidedown.css";

const MonitorContainer = (props) => {

  const [hideMonitorOptions, setHideMonitorOptions] = useState(false);
  const [hideMonitorStats, setHideMonitorStats] = useState(false);

  const onToggleOptions = () => {
    setHideMonitorOptions(!hideMonitorOptions);
  }

  const onToggleStats = () => {
    setHideMonitorStats(!hideMonitorStats);
  }

  return (
    <section className="monitorContainer">
      <Draggable>
        <div>
          <Monitor {...props} />
        </div>
      </Draggable>
      <Draggable
        handle=".handle"
      >
        <div className="bg-white b-dark">
          <div className="handle w-100per t-center h-20px bg-medium my-1rem"></div>
          <button
            onClick={onToggleOptions}
            className="btn-dark w-100per">
            Monitor {props.monitor.index + 1} Options {hideMonitorOptions ? "▲" : "▼"}
          </button>
          <SlideDown
            closed={hideMonitorOptions}
            transitionOnAppear={false}
            classNames={'my-dropdown-slidedown'}>
            <MonitorOptions {...props} />
          </SlideDown>
          <button
            onClick={onToggleStats}
            className="btn-dark w-100per">
            Monitor {props.monitor.index + 1} Stats {hideMonitorStats ? "▲" : "▼"}
          </button>
          <SlideDown
            closed={hideMonitorStats}
            transitionOnAppear={false}
            classNames={'my-dropdown-slidedown'}>
            <MonitorStats monitor={props.monitor} />
          </SlideDown>
        </div>
      </Draggable>
    </section>
  );
};

export default MonitorContainer;
