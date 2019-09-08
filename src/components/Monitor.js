import React from 'react';

const Monitor = ({ monitor, scale }) => {

  const INDEX = monitor.index;
  const SCALE = scale;
  const ORIENTATION = monitor.orientation;
  const THETA = Math.atan(parseFloat(monitor.resolution.verRes) / parseFloat(monitor.resolution.horRes));
  const BEZELWIDTH = parseFloat(monitor.bezelWidth);
  const BEZELCOLOR = monitor.bezelColor;
  const WIDTH = parseFloat(monitor.diagonal) * Math.cos(THETA) + BEZELWIDTH;
  const HEIGHT = parseFloat(monitor.diagonal) * Math.sin(THETA) + BEZELWIDTH;

  const monitorStyle = {
    width: `${(ORIENTATION === 'landscape' ? WIDTH : HEIGHT) * SCALE}px`,
    height: `${(ORIENTATION === 'landscape' ? HEIGHT : WIDTH) * SCALE}px`,
    borderWidth: `${BEZELWIDTH * SCALE / 2 }px`,
    borderColor: BEZELCOLOR
  };

  return (
    <div className="monitor m-auto" style={monitorStyle}>
      <p>
        {INDEX + 1}
      </p>
    </div>
  );
};

export default Monitor;
