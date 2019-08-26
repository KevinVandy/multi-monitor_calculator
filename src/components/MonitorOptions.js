import React, { useState } from 'react';

const MonitorOptions = ({ monitor }) => {

  const [diagonal, setDiagonal] = useState(monitor.options.basic.diagonal);
  const [bezelWidth, setBezelWidth] = useState(monitor.options.basic.bezelWidth);
  const [orientation, setOrientation] = useState(monitor.options.basic.orientation);
  const [aspectRatio, setAspectRatio] = useState(monitor.options.basic.aspectRatio);
  const [resolution, setResolution] = useState(monitor.options.basic.resolution.type);
  const [horRes, setHorRes] = useState(monitor.options.basic.resolution.horRes);
  const [verRes, setVerRes] = useState(monitor.options.basic.resolution.verRes);

  const onDiagonalChange = (e) => {
    setDiagonal(e.target.value);
  }

  const onBezelWidthChange = (e) => {
    setBezelWidth(e.target.value);
  }

  const onOrientationChange = (e) => {
    setOrientation(e.target.value);
  }

  const onAspectRatioChange = (e) => {
    setAspectRatio(e.target.value);
  }

  const onResolutionChange = (e) => {
    setResolution(e.target.value);
  }

  const onHorResChange = (e) => {
    setHorRes(e.target.value);
  }

  const onVerResChange = (e) => {
    setVerRes(e.target.value);
  }

  return (
    
    <table className="m-auto">
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
          <input onChange={onDiagonalChange} value={diagonal} type="number" min="1" max="100" step="1" name="diagonal" className="maxw-3rem t-center" />
        </td>
      </tr>
      <tr>
        <th>
          <label>Bezel Width:</label>
        </th>
        <td>
          <input onChange={onBezelWidthChange} value={bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-10rem t-center" />
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
          <select onChange={onOrientationChange} value={orientation} className="maxw-10rem t-center">
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
          <select onChange={onAspectRatioChange} value={aspectRatio} className="maxw-10rem t-center">
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
          <select onChange={onResolutionChange} value={resolution} className="maxw-10rem t-center">
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
          <input onChange={onHorResChange} value={horRes} type="number" className="" />X
          <input onChange={onVerResChange} value={verRes} type="number" className="" />
        </td>
      </tr>
    </table>
  );
};

export default MonitorOptions;
