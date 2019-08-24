import React from 'react';

const MonitorContainer = (props) => {
  const {id, options, stats } = props;
  const {basic, advanced} = options;
  const {diagonal, bezelWidth, orientation, aspectRatio, resolution } = basic;
  const {horRes, vertRes} = resolution;
  return (
    <div>
      monitor: {id}
    </div>
  );
};

export default MonitorContainer;
