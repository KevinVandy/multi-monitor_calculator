import React from 'react';

const MonitorOptions = ({ monitor, onDiagonalChange, onBezelWidthChange, onOrientationChange, onAspectRatioChange, onResolutionChange, onHorResChange, onVerResChange }) => {

  return (
    
    <table className="m-auto">
      <tbody>
        <tr>
          <th colSpan="2">
            <h3>Size</h3>
          </th>
        </tr>
        <tr>
          <th>
            <label>Diagonal:</label>
          </th>
          <td>
            <input onChange={onDiagonalChange.bind(this, monitor.index)} value={monitor.options.basic.diagonal} type="number" min="1" max="100" step="1" name="diagonal" className="maxw-3rem t-center" />
          </td>
        </tr>
        <tr>
          <th>
            <label>Bezel Width:</label>
          </th>
          <td>
            <input onChange={onBezelWidthChange.bind(this, monitor.index)} value={monitor.options.basic.bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-10rem t-center" />
          </td>
        </tr>
        <tr>
          <th colSpan="2">
            <h3>Aspect Ratio</h3>
          </th>
        </tr>
        <tr>
          <th>
            <label>Orientation:</label>
          </th>
          <td>
            <select onChange={onOrientationChange.bind(this, monitor.index)} value={monitor.options.basic.orientation} className="maxw-10rem t-center">
              <option value="Landscape">Landscape</option>
              <option value="Portrait">Portrait</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>
            <label>Aspect Ratio:</label>
          </th>
          <td>
            <select onChange={onAspectRatioChange.bind(this, monitor.index)} value={monitor.options.basic.aspectRatio} className="maxw-10rem t-center">
              <option value="custom">Custom</option>
              <optgroup label="Tall">
                <option value="5:4">5:4</option>
                <option value="4:3">4:3</option>
              </optgroup>
              <optgroup label="Wide">
                <option value="16:10">16:10</option>
                <option value="16:9">16:9</option>
              </optgroup>
              <optgroup label="UltraWide">
                <option value="21:9">21:9</option>
                <option value="32:9">32:9</option>
              </optgroup>
            </select>
          </td>
        </tr>
        <tr>
          <th colSpan="2">
            <h3>Resolution</h3>
          </th>
        </tr>
        <tr>
          <th>
            <label>Resolution:</label>
          </th>
          <td>
            <select onChange={onResolutionChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.type} className="maxw-10rem t-center">
              <option value="custom">Custom</option>
              <option value="SVGA">SVGA ~ 600i</option>
              <option value="HD">HD ~ 768p</option>
              <option value="FHD">FHD ~ 1080p</option>
              <option value="FHD+">FHD+ ~ 1200p</option>
              <option value="QHD">QHD ~ 1440p</option>
              <option value="QHD+">QHD+ ~ 1600p</option>
              <option value="4K">4K ~ 2160p</option>
              <option value="5K">5K ~ 2880p</option>
              <option value="6K">6K ~ 3,384</option>
              <option value="8K">8K ~ 4320p</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className="">
            <input onChange={onHorResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.horRes} type="number" className="" />X
            <input onChange={onVerResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.verRes} type="number" className="" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MonitorOptions;
