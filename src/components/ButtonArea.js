import React from 'react';

const ButtonArea = ({onAdd, onRemove, onZoomIn, onZoomOut, numMonitors}) => {
  return (
    <div className="grid-4 maxw-800px m-auto">
      <button className="btn-dark m" onClick={onAdd} disabled={numMonitors === 9}>Add</button>
      <button className="btn-dark m" onClick={onRemove} disabled={numMonitors === 0}>Remove</button>
      <button className="btn-dark m" onClick={onZoomIn}>Zoom In</button>
      <button className="btn-dark m" onClick={onZoomOut}>Zoom Out</button>
    </div>
  );
};

export default ButtonArea;
