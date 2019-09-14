import React from 'react';

const MonitorStats = ({ monitor }) => {

  const THETA = Math.atan(parseFloat(monitor.resolution.verRes) / parseFloat(monitor.resolution.horRes));

  const diagonal = parseFloat(monitor.diagonal);
  const screenWidth = monitor.diagonal * (monitor.orientation === "landscape" ? Math.cos(THETA) : Math.sin(THETA));
  const screenHeight = monitor.diagonal * (monitor.orientation === "landscape" ? Math.sin(THETA) : Math.cos(THETA));
  const physicalWidth = screenWidth + monitor.bezelWidth * 2;
  const physicalHeight = screenHeight + monitor.bezelWidth * 2;
  const screenArea = screenWidth * screenHeight;
  const numPixels = monitor.resolution.horRes * monitor.resolution.verRes;
  const ppi = (monitor.resolution.verRes + monitor.resolution.horRes) / (screenHeight + screenWidth);

  return (
    <table className="monitorStats all-center">
      <tbody>
        <tr>
          <th>Screen Diagonal:</th>
          <td>{diagonal.toFixed(1)}"</td>
        </tr>
        <tr>
          <th>Screen Width:</th>
          <td>{screenWidth.toFixed(1)}"</td>
        </tr>
        <tr>
          <th>Screen Height:</th>
          <td>{screenHeight.toFixed(1)}"</td>
        </tr>
        <tr>
          <th>Bezel Width:</th>
          <td>{parseFloat(monitor.bezelWidth).toFixed(2)}"</td>
        </tr>
        <tr>
          <th>Physical Width:</th>
          <td>{physicalWidth.toFixed(1)}"</td>
        </tr>
        <tr>
          <th>Physical Height:</th>
          <td>{physicalHeight.toFixed(1)}"</td>
        </tr>
        <tr>
          <th>Screen Area:</th>
          <td>{screenArea.toFixed(0)}"<sup>2</sup></td>
        </tr>
        <tr>
          <th>Aspect Ratio:</th>
          <td>{monitor.aspectRatio}</td>
        </tr>
        <tr>
          <th>Resolution:</th>
          <td>{monitor.resolution.horRes} x {monitor.resolution.verRes}</td>
        </tr>
        <tr>
          <th>Number Pixels:</th>
          <td>{numPixels.toLocaleString()}</td>
        </tr>
        <tr>
          <th>Pixels Per Inch (PPI):</th>
          <td>{ppi.toFixed(1)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MonitorStats;
