import React from 'react';

const ButtonArea = ({onAdd, onRemove}) => {
  return (
    <div className="grid-4 maxw-800px m-auto">
      <button className="btn-dark m" onClick={onAdd}>Add</button>
      <button className="btn-dark m" onClick={onRemove}>Remove</button>
      <button className="btn-dark m">Zoom In</button>
      <button className="btn-dark m">Zoom Out</button>
    </div>
  );
};

export default ButtonArea;
