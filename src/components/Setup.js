import React, { useState } from 'react';
import MonitorContainer from './MonitorContainer';
import defaultMonitors from '../context/setup/defaultsetup.json';

const Setup = () => {

  const [monitors, setMonitors] = useState(defaultMonitors);

  const onDiagonalChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.diagonal = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onBezelWidthChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.bezelWidth = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onOrientationChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.orientation = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onAspectRatioChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.aspectRatio = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onResolutionChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.resolution.type = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onHorResChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.resolution.horRes = e.target.value;
    setMonitors(monitorsUpdate);
  }

  const onVerResChange = (index, e) => {
    const monitorsUpdate = [...monitors];
    monitorsUpdate[index].options.basic.resolution.verRes = e.target.value;
    setMonitors(monitorsUpdate);
  }

  return (
    <section className={"grid-" + monitors.length}>
      {
        monitors.map(monitor =>
          <MonitorContainer
            key={monitor.index}
            monitor={monitor}
            onDiagonalChange={onDiagonalChange}
            onBezelWidthChange={onBezelWidthChange}
            onOrientationChange={onOrientationChange}
            onAspectRatioChange={onAspectRatioChange}
            onResolutionChange={onResolutionChange}
            onHorResChange={onHorResChange}
            onVerResChange={onVerResChange}
          />)
      }
    </section>
  );
};

export default Setup;
