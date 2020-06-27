import React, { useMemo } from 'react';
import Draggable from 'react-draggable';
import { Fade } from '@material-ui/core';
import { useScale } from '../context/ScaleContext';

export const Monitor = ({ monitor }) => {
  const scale = useScale();
  const theta = useMemo(
    () => Math.atan(monitor.resolution.vertical / monitor.resolution.horizontal),
    [monitor.resolution.vertical, monitor.resolution.horizontal]
  );
  const [width, height] = useMemo(
    () => [
      scale *
        (monitor.diagonal *
          (monitor.orientation === 'landscape' ? Math.cos(theta) : Math.sin(theta))),
      scale *
        (monitor.diagonal *
          (monitor.orientation === 'landscape' ? Math.sin(theta) : Math.cos(theta)))
    ],
    [monitor.diagonal, monitor.orientation, scale, theta]
  );
  const bezelWidth = useMemo(() => (monitor.bezelWidth * scale) / 2, [
    monitor.bezelWidth,
    scale
  ]);

  return (
    <Draggable>
      <Fade timeout={500} in={monitor.visible}>
        <span>
          <div
            style={{
              alignContent: 'center',
              backgroundImage: 'radial-gradient(#444, #111)',
              borderColor: monitor.bezelColor,
              borderRadius: `${0.1875 * scale}px`,
              borderStyle: 'solid',
              borderWidth: `${bezelWidth}px`,
              color: '#fff',
              cursor: 'move',
              display: 'grid',
              justifyContent: 'center',
              height: `${height}px`,
              margin: '1rem 2px',
              transition: 'all 500ms ease',
              transitionProperty: 'height, width, border',
              width: `${width}px`
            }}
          >
            <span>{monitor.index + 1}</span>
          </div>
        </span>
      </Fade>
    </Draggable>
  );
};
