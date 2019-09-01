import React from 'react';
import Draggable from 'react-draggable';

const Monitor = ({ monitor, scale }) => {

  const INDEX = monitor.index;
  const SCALE = scale;
  const ORIENTATION = monitor.options.basic.orientation;
  const THETA = Math.atan(parseFloat(monitor.options.basic.resolution.verRes) / parseFloat(monitor.options.basic.resolution.horRes));
  const BEZELWIDTH = parseFloat(monitor.options.basic.bezelWidth);
  const BEZELCOLOR = monitor.options.basic.bezelColor;
  const WIDTH = parseFloat(monitor.options.basic.diagonal) * Math.cos(THETA) + BEZELWIDTH;
  const HEIGHT = parseFloat(monitor.options.basic.diagonal) * Math.sin(THETA) + BEZELWIDTH;


  const monitorStyle = {
    width: `${(ORIENTATION === 'landscape' ? WIDTH : HEIGHT) * SCALE}px`,
    height: `${(ORIENTATION === 'landscape' ? HEIGHT : WIDTH) * SCALE}px`,
    borderWidth: `${BEZELWIDTH * SCALE / 2}px`,
    borderColor: BEZELCOLOR
  };

  return (
    <Draggable>
      <div className="monitor m-auto" style={monitorStyle}>
        <div className="text-right p">
          {INDEX}
        </div>
      </div>
    </Draggable>
  );
};

export default Monitor;
