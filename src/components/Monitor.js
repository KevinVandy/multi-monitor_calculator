import React, { useMemo } from 'react';
import Draggable from 'react-draggable';
import { Fade, Tooltip } from '@material-ui/core';
import { calcTheta, calcScreenWidth, calcScreenHeight } from '../util/calc.util';
import { MonitorStats } from './MonitorStats';
import { useSetup } from '../context/SetupContext';

export const Monitor = ({ monitor }) => {
  const { scale } = useSetup();
  const theta = useMemo(
    () => calcTheta(monitor.resolution.horizontal, monitor.resolution.vertical),
    [monitor.resolution.horizontal, monitor.resolution.vertical]
  );
  const [width, height] = useMemo(
    () => [
      scale * calcScreenWidth(monitor.diagonal, monitor.orientation, theta),
      scale * calcScreenHeight(monitor.diagonal, monitor.orientation, theta)
    ],
    [monitor.diagonal, monitor.orientation, scale, theta]
  );
  const bezelWidth = useMemo(() => (monitor.bezelWidth * scale) / 2, [
    monitor.bezelWidth,
    scale
  ]);

  return (
    <Draggable>
      <Fade timeout={300} in={monitor.visible}>
        <div style={{ margin: '1rem 2px', height: `${height + bezelWidth * 2}px` }}>
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
              transition: 'all 300ms ease',
              transitionProperty: 'height, width, border',
              width: `${width}px`
            }}
          >
            <Tooltip
              title={<MonitorStats monitor={monitor} fontColor="#fff" />}
              enterDelay={500}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 500 }}
            >
              <div style={{ cursor: 'help' }}>{monitor.index + 1}</div>
            </Tooltip>
          </div>
        </div>
      </Fade>
    </Draggable>
  );
};
