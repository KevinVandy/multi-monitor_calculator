import React from 'react';

const MonitorOptions = ({
  monitor,
  onDiagonalChange,
  onBezelWidthChange,
  onBezelColorChange,
  onOrientationChange,
  onAspectRatioChange,
  onResolutionChange,
  onHorResChange,
  onVerResChange,
  onDisplayTypeChange,
  onSyncTypeChange,
  onRefreshRateChange,
  onResponseTimeChange,
  onHdrChange,
  onSrgbChange,
  onCurvedChange,
  onWebcamChange,
  onTouchChange,
  onSpeakersChange,
  onHdmiChange,
  onDisplayPortChange,
  onUsbcChange,
  onVgaChange,
  onDviChange,
  onBrandChange,
  onPriceChange,
  onLinkChange
}) => {

  return (
    <>
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
              <input onChange={onBezelWidthChange.bind(this, monitor.index)} value={monitor.options.basic.bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-8rem t-center inline m" />
              <input onChange={onBezelColorChange.bind(this, monitor.index)} value={monitor.options.basic.bezelColor} type="color" className="maxw-1rem inline m" />
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
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
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
                </optgroup>
                <optgroup label="Wide">
                  <option value="16:10">16:10</option>
                  <option value="16:9">16:9</option>
                </optgroup>
                <optgroup label="UltraWide">
                  <option value="21:9">21:9</option>
                  <option value="32:9">32:9</option>
                </optgroup>
                <optgroup label="Others Detected">
                  <option value="1:1" hidden>1:1</option>
                  <option value="4:3" hidden>4:3</option>
                  <option value="3:2" hidden>3:2</option>
                  <option value="5:3" hidden>5:3</option>
                  <option value="2:1" hidden>2:1</option>
                  <option value="32:10" hidden>32:10</option>
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
              <label>Preset:</label>
            </th>
            <td>
              <select onChange={onResolutionChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.type} className="maxw-10rem">
                <option value="custom">Custom</option>
                <option value="SVGA">SVGA ~ 600i</option>
                <option value="HD">HD ~ 768p</option>
                <option value="FHD">FHD ~ 1080p</option>
                <option value="FHD+">FHD+ ~ 1200p</option>
                <option value="QHD">QHD ~ 1440p</option>
                <option value="QHD+">QHD+ ~ 1600p</option>
                <option value="4K">4K ~ 2160p</option>
                <option value="5K">5K ~ 2880p</option>
                <option value="6K">6K ~ 3384p</option>
                <option value="8K">8K ~ 4320p</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <table className="maxw-200px float-right">
                <tbody>
                  <tr>
                    <td className="">
                      <input onChange={onHorResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.horRes} type="number" />
                    </td>
                    <td>
                      X
                  </td>
                    <td>
                      <input onChange={onVerResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.verRes} type="number" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="m-auto">
        <tbody>
          <tr>
            <th>
              <label>Display Type:</label>
            </th>
            <td>
              <select onChange={onDisplayTypeChange.bind(this, monitor.index)} value={monitor.options.advanced.displayType}>
                <option value="" defaultValue>Any</option>
                <option value="ips">IPS</option>
                <option value="tn">TN</option>
                <option value="va">VA</option>
                <option value="oled">OLED</option>
                <option value="ips">IPS</option>
                <option value="ips">IPS</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label>Sync Type:</label>
            </th>
            <td>
              <select onChange={onSyncTypeChange.bind(this, monitor.index)} value={monitor.options.advanced.syncType}>
                <option value="" defaultValue>Any</option>
                <option value="none">None</option>
                <option value="g-sync">G-Sync</option>
                <option value="freesync">FreeSync</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MonitorOptions;
