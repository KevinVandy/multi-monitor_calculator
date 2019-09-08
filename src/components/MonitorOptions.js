import React from 'react';
import { SlideDown } from 'react-slidedown';
import "react-slidedown/lib/slidedown.css";

const MonitorOptions = ({
  monitor,
  hideSizeOptions,
  hideBezelOptions,
  hideAspectRatioOptions,
  hideResolutionOptions,
  hideFeatureOptions,
  hidePortOptions,
  hideSellerInfoOptions,
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
  onLinkChange,
  onToggleSizeOptions,
  onToggleBezelOptions,
  onToggleAspectRatioOptions,
  onToggleResolutionOptions,
  onToggleFeatureOptions,
  onTogglePortOptions,
  onToggleSellerInfoOptions
}) => {

  return (
    <div className="monitorOptions maxw-450px">
      <hr />
      <h3>Size<span onClick={onToggleSizeOptions} className="toggleButton">{hideSizeOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideSizeOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="sizeOptions" className="text-center">
          <p>
            <input onChange={onDiagonalChange.bind(this, monitor.index)} value={monitor.diagonal} type="number" min="1" max="100" step="1" name="diagonal" list="sizes" className="maxw-3rem t-center inline" /><span> "</span>
            <datalist id="sizes">
              <option value="17"/>
              <option value="19"/>
              <option value="21"/>
              <option value="22"/>
              <option value="24"/>
              <option value="27"/>
              <option value="30"/>
              <option value="32"/>
              <option value="34"/>
            </datalist>
          </p>
        </div>
      </SlideDown>
      <hr />
      <h3>Bezel<span onClick={onToggleBezelOptions} className="toggleButton">{hideBezelOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideBezelOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="bezelOptions" className="text-center">
          <p>
            <input onChange={onBezelWidthChange.bind(this, monitor.index)} value={monitor.bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-10rem t-center inline m" title={monitor.bezelWidth} />
            <input onChange={onBezelColorChange.bind(this, monitor.index)} value={monitor.bezelColor} type="color" className="maxw-2rem inline m" />
          </p>
        </div>
      </SlideDown>
      <hr />
      <h3>Aspect Ratio<span onClick={onToggleAspectRatioOptions} className="toggleButton">{hideAspectRatioOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideAspectRatioOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="aspectRatioOptions" className="text-center">
          <p>
            <select onChange={onAspectRatioChange.bind(this, monitor.index)} value={monitor.aspectRatio} className="w-10rem t-center">
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
          </p>
          <p>
            <select onChange={onOrientationChange.bind(this, monitor.index)} value={monitor.orientation} className="w-10rem t-center">
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
            </select>
          </p>
        </div>
      </SlideDown>
      <hr />
      <h3>Resolution<span onClick={onToggleResolutionOptions} className="toggleButton">{hideResolutionOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideResolutionOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="resolutionOptions" className="text-center">
          <p>
            <select onChange={onResolutionChange.bind(this, monitor.index)} value={monitor.resolution.type} className="w-10rem">
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
          </p>
          <p>
            <input onChange={onHorResChange.bind(this, monitor.index)} value={monitor.resolution.horRes} type="number" className="w-5rem" />
            <span className="p">X</span>
            <input onChange={onVerResChange.bind(this, monitor.index)} value={monitor.resolution.verRes} type="number" className="w-5rem" />
          </p>
        </div>
      </SlideDown>
      <hr />
      <h3>Features<span onClick={onToggleFeatureOptions} className="toggleButton">{hideFeatureOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideFeatureOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="featureOptions" className="text-center">
          <p>
            <label>Display Type:</label>
            <select onChange={onDisplayTypeChange.bind(this, monitor.index)} value={monitor.displayType} className="w-8rem">
              <option value="" defaultValue>Any</option>
              <option value="ips">IPS</option>
              <option value="tn">TN</option>
              <option value="va">VA</option>
              <option value="oled">OLED</option>
            </select>
          </p>
          <p>
            <label>Sync Type:</label>
            <select onChange={onSyncTypeChange.bind(this, monitor.index)} value={monitor.syncType} className="w-8rem">
              <option value="" defaultValue>Any</option>
              <option value="none">None</option>
              <option value="g-sync">G-Sync</option>
              <option value="freesync">FreeSync</option>
            </select>
          </p>
          <p>
            <label>Refresh Rate:</label>
            <input onChange={onRefreshRateChange.bind(this, monitor.index)} value={monitor.refreshRate} type="number" step="5" min="30" max="1000" className="w-8rem inline" />
            <span>Hz</span>
          </p>
          <p>
            <label>Response Time:</label>
            <input onChange={onResponseTimeChange.bind(this, monitor.index)} value={monitor.responseTime} type="number" step="1" min="1" max="50" className="w-8rem inline" />
            <span>ms</span>
          </p>
          <div id="featureChecks" className="grid-3-f text-left px-1rem">
            <p className="nowrap">
              <input onChange={onHdrChange.bind(this, monitor.index)} type="checkbox" name="hdr" checked={monitor.features.hdr} />
              <label className="text-left">HDR</label>
            </p>
            <p className="nowrap">
              <input onChange={onSrgbChange.bind(this, monitor.index)} type="checkbox" name="srgb" checked={monitor.features.srgb} />
              <label className="text-left">sRGB</label>
            </p>
            <p className="nowrap">
              <input onChange={onCurvedChange.bind(this, monitor.index)} type="checkbox" name="curved" checked={monitor.features.curved} />
              <label className="text-left">Curved</label>
            </p>
            <p className="nowrap">
              <input onChange={onWebcamChange.bind(this, monitor.index)} type="checkbox" name="webcam" checked={monitor.features.webcam} />
              <label className="text-left">Webcam</label>
            </p>
            <p className="nowrap">
              <input onChange={onTouchChange.bind(this, monitor.index)} type="checkbox" name="touch" checked={monitor.features.touch} />
              <label className="text-left">Touch</label>
            </p>
            <p className="nowrap">
              <input onChange={onSpeakersChange.bind(this, monitor.index)} type="checkbox" name="speakers" checked={monitor.features.speakers} />
              <label className="text-left">Speakers</label>
            </p>
          </div>
        </div>
      </SlideDown>
      <hr />
      <h3>Ports<span onClick={onTogglePortOptions} className="toggleButton">{hidePortOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hidePortOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="portOptions" className="grid-3-f px-1rem">
          <p className="nowrap">
            <input onChange={onHdmiChange.bind(this, monitor.index)} type="checkbox" name="hdmi" checked={monitor.features.hdmi} />
            <label className="text-left">HDMI</label>
          </p>
          <p className="nowrap">
            <input onChange={onDisplayPortChange.bind(this, monitor.index)} type="checkbox" name="displayPort" checked={monitor.features.displayPort} />
            <label className="text-left">Display Port</label>
          </p>
          <p className="nowrap">
            <input onChange={onDviChange.bind(this, monitor.index)} type="checkbox" name="dvi" checked={monitor.features.dvi} />
            <label className="text-left">DVI</label>
          </p>
          <p className="nowrap">
            <input onChange={onVgaChange.bind(this, monitor.index)} type="checkbox" name="vga" checked={monitor.features.vga} />
            <label className="text-left">VGA</label>
          </p>
          <p className="nowrap">
            <input onChange={onUsbcChange.bind(this, monitor.index)} type="checkbox" name="usbc" checked={monitor.features.usbc} />
            <label className="text-left">USB Type-C</label>
          </p>
        </div>
      </SlideDown>
      <hr />
      <h3>Seller Info<span onClick={onToggleSellerInfoOptions} className="toggleButton">{hideSellerInfoOptions ? "▲" : "▼"}</span></h3>
      <SlideDown
        closed={hideSellerInfoOptions}
        transitionOnAppear={false}
        className={'my-dropdown-slidedown'}>
        <div id="sellerInfoOptions" className="text-center">
          <p>
            <label>Brand:</label>
            <input onChange={onBrandChange.bind(this, monitor.index)} value={monitor.sellerInfo.brand} type="text" name="brand" className="w-10rem" />
          </p>
          <p>
            <label>Price:</label>
            <span>$</span>
            <input onChange={onPriceChange.bind(this, monitor.index)} value={monitor.sellerInfo.price} type="number" name="price" step="0.01" min="0" max="999999" className="w-9rem" />
          </p>
          <p>
            <label>Link:</label>
            <input onChange={onLinkChange.bind(this, monitor.index)} value={monitor.sellerInfo.link} type="url" name="link" className="w-10rem" />
            <a href={monitor.sellerInfo.link} target="_blank" rel="noopener noreferrer" className="text-center block w-10rem link">
              {monitor.sellerInfo.link.replace('https://', '').replace('http://', '').replace('www.', '').replace('www', '').substring(0, 30)} {monitor.sellerInfo.link.length > 30 ? <span>...</span> : <></>}
            </a>
          </p>
        </div>
      </SlideDown>
      <hr />
    </div>
  );
};

export default MonitorOptions;