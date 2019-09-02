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
            <td className="nowrap">
              <input onChange={onDiagonalChange.bind(this, monitor.index)} value={monitor.options.basic.diagonal} type="number" min="1" max="100" step="1" name="diagonal" className="maxw-3rem t-center inline" /><span>in</span>
            </td>
          </tr>
          <tr>
            <th>
              <label>Bezel Width:</label>
            </th>
            <td>
              <input onChange={onBezelWidthChange.bind(this, monitor.index)} value={monitor.options.basic.bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-8rem t-center inline m" title={monitor.options.basic.bezelWidth} />
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
          <tr>
            <th colSpan="2"><h3>Features</h3></th>
          </tr>
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
          <tr>
            <th>
              <label>Refresh Rate:</label>
            </th>
            <td className="nowrap">
              <input onChange={onRefreshRateChange.bind(this, monitor.index)} value={monitor.options.advanced.refreshRate} type="number" step="5" min="30" max="1000" className="inline" /> <span>Hz</span>
            </td>
          </tr>
          <tr>
            <th>
              <label>Response Time:</label>
            </th>
            <td className="nowrap">
              <input onChange={onResponseTimeChange.bind(this, monitor.index)} value={monitor.options.advanced.responseTime} type="number" step="1" min="1" max="50" className="inline" /> <span>ms</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <table className="m-auto">
                <tbody>
                  <tr>
                    <td>
                      <input onChange={onHdrChange.bind(this, monitor.index)} type="checkbox" name="hdr" checked={monitor.options.advanced.features.hdr} />
                    </td>
                    <td>
                      <label className="text-left">HDR</label>
                    </td>
                    <td>
                      <input onChange={onSrgbChange.bind(this, monitor.index)} type="checkbox" name="srgb" checked={monitor.options.advanced.features.srgb} />
                    </td>
                    <td>
                      <label className="text-left">sRGB</label>
                    </td>
                    <td>
                      <input onChange={onCurvedChange.bind(this, monitor.index)} type="checkbox" name="curved" checked={monitor.options.advanced.features.curved} />
                    </td>
                    <td>
                      <label className="text-left">Curved</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input onChange={onWebcamChange.bind(this, monitor.index)} type="checkbox" name="webcam" checked={monitor.options.advanced.features.webcam} />
                    </td>
                    <td>
                      <label className="text-left">Webcam</label>
                    </td>
                    <td>
                      <input onChange={onTouchChange.bind(this, monitor.index)} type="checkbox" name="touch" checked={monitor.options.advanced.features.touch} />
                    </td>
                    <td>
                      <label className="text-left">Touch</label>
                    </td>
                    <td>
                      <input onChange={onSpeakersChange.bind(this, monitor.index)} type="checkbox" name="speakers" checked={monitor.options.advanced.features.speakers} />
                    </td>
                    <td>
                      <label className="text-left">Speakers</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th colSpan="2"><h3>Ports</h3></th>
          </tr>
          <tr>
            <td colSpan="2">
              <table className="m-auto">
                <tbody>
                  <tr>
                    <td>
                      <input onChange={onHdmiChange.bind(this, monitor.index)} type="checkbox" name="hdmi" checked={monitor.options.advanced.features.hdmi} />
                    </td>
                    <td>
                      <label className="text-left">HDMI</label>
                    </td>
                    <td>
                      <input onChange={onDisplayPortChange.bind(this, monitor.index)} type="checkbox" name="displayPort" checked={monitor.options.advanced.features.displayPort} />
                    </td>
                    <td colSpan="2">
                      <label className="text-left">Display Port</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input onChange={onUsbcChange.bind(this, monitor.index)} type="checkbox" name="usbc" checked={monitor.options.advanced.features.usbc} />
                    </td>
                    <td>
                      <label className="text-left">USBC</label>
                    </td>
                    <td>
                      <input onChange={onVgaChange.bind(this, monitor.index)} type="checkbox" name="vga" checked={monitor.options.advanced.features.vga} />
                    </td>
                    <td>
                      <label className="text-left">VGA</label>
                    </td>
                    <td>
                      <input onChange={onDviChange.bind(this, monitor.index)} type="checkbox" name="dvi" checked={monitor.options.advanced.features.dvi} />
                    </td>
                    <td>
                      <label className="text-left">DVI</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h3 className="text-center">Seller Info</h3>
            </td>
          </tr>
          <tr>
            <th>
              <label>Brand:</label>
            </th>
            <td>
              <input onChange={onBrandChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.brand} type="text" name="brand"  />
            </td>
          </tr>
          <tr>
            <th>
              <label>Price:</label>
            </th>
            <td className="nowrap">
              <span>$ </span><input onChange={onPriceChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.price} type="number" name="price" step="0.01" min="0" max="999999" className="inline" />
            </td>
          </tr>
          <tr>
            <th>
              <label>Link:</label>
            </th>
            <td>
              <input onChange={onLinkChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.link} type="url" name="link"  />
            </td>
          </tr>
           <tr>
             <td></td>
            <td>
            <a href={monitor.options.advanced.sellerInfo.link} target="_blank" rel="noopener noreferrer" className="text-right">
                {monitor.options.advanced.sellerInfo.link.replace('https://', '').replace('http://', '').replace('www.', '').replace('www', '').substring(0, 30)} {monitor.options.advanced.sellerInfo.link.length > 30 && <span>...</span>}
                </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MonitorOptions;
