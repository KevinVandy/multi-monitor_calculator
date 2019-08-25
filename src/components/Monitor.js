import React from 'react';
import Draggable from 'react-draggable';

const Monitor = ({ monitor }) => {

  console.log(monitor.options.basic);
  const SCALE = 15;
  const ORIENTATION = monitor.options.basic.orientation;
  const THETA = Math.atan(parseFloat(monitor.options.basic.resolution.verRes) / parseFloat(monitor.options.basic.resolution.horRes));
  const WIDTH = parseFloat(monitor.options.basic.diagonal) * Math.cos(THETA);
  const HEIGHT = parseFloat(monitor.options.basic.diagonal) * Math.sin(THETA);
  const BEZELWIDTH = parseFloat(monitor.options.basic.bezelWidth);

  const monitorStyle = {
    width: `${WIDTH * SCALE}px`,
    height: `${HEIGHT * SCALE}px`,
    borderWidth: `${BEZELWIDTH * SCALE / 2}px`
  };

  return (
    <Draggable
      grid={[1, 1]}
    >
      <div className="monitor m-auto" style={monitorStyle}>
        scale: {SCALE} <br />
        orientation: {ORIENTATION} <br />
        theta: {THETA} <br />
        width: {WIDTH} <br />
        height: {HEIGHT} <br />
        bezel: {BEZELWIDTH} <br />
      </div>
    </Draggable>
  );
};

export default Monitor;
