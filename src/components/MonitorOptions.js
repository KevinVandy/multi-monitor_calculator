import React, { useState } from 'react';
import {
  Card,
  Collapse,
  Fade,
  IconButton,
  ListSubheader,
  MenuItem,
  TextField,
  styled
} from '@material-ui/core';
import {
  calcResolution,
  calcAspectRatio,
  calcResolutionStandard
} from '../util/calc.util';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const MonitorOptionsCard = styled(Card)({
  padding: '2rem 1rem',
  margin: '0.5rem',
  width: '22rem'
});

const MonitorTitle = styled('h3')({
  textAlign: 'center',
  paddingBottom: '1rem'
});

const MonitorOptionsGrid2 = styled('div')({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: '10rem 10rem',
  justifyContent: 'center',
  padding: '0.5rem 0'
});

const MonitorField = styled(TextField)({});

export const MonitorOptions = ({
  expanded,
  index,
  monitors,
  setExpanded,
  setMonitors
}) => {
  const [resolutionStandard, setResolutionStandard] = useState(() =>
    calcResolutionStandard(monitors[index].resolution.vertical)
  );

  const handleOrientationChange = (e) => {
    monitors[index].orientation = e.target.value;
    setMonitors([...monitors]);
  };

  const handleAspectRatioChange = (e) => {
    monitors[index].aspectRatio = e.target.value;
    [
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    ] = calcResolution(monitors[index].aspectRatio, resolutionStandard) ?? [
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    ];
    setMonitors([...monitors]);
  };

  const handleDiagonalChange = (e) => {
    monitors[index].diagonal = parseInt(e.target.value);
    setMonitors([...monitors]);
  };

  const handleResolutionStandardChange = (e) => {
    setResolutionStandard(e.target.value);
    [
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    ] = calcResolution(monitors[index].aspectRatio, e.target.value) ?? [
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    ];
    setMonitors([...monitors]);
  };

  const handleHorizontalResolutionChange = (e) => {
    monitors[index].resolution.horizontal = parseInt(e.target.value);
    monitors[index].aspectRatio = calcAspectRatio(
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    );
    setMonitors([...monitors]);
  };

  const handleVerticallResolutionChange = (e) => {
    monitors[index].resolution.vertical = parseInt(e.target.value);
    monitors[index].aspectRatio = calcAspectRatio(
      monitors[index].resolution.horizontal,
      monitors[index].resolution.vertical
    );
    setResolutionStandard(calcResolutionStandard(monitors[index].resolution.vertical));
    setMonitors([...monitors]);
  };

  const handleBezelWidthChange = (e) => {
    monitors[index].bezelWidth = parseFloat(e.target.value);
    setMonitors([...monitors]);
  };

  const handleBezelColorChange = (e) => {
    monitors[index].bezelColor = e.target.value;
    setMonitors([...monitors]);
  };

  const handleDisplayTypeChange = (e) => {
    monitors[index].displayType = e.target.value;
    setMonitors([...monitors]);
  };

  const handleSyncTypeChange = (e) => {
    monitors[index].syncType = e.target.value;
    setMonitors([...monitors]);
  };

  return (
    <Fade timeout={500} in={monitors[index].visible}>
      <MonitorOptionsCard>
        <MonitorTitle>Monitor {index + 1}</MonitorTitle>
        <MonitorOptionsGrid2>
          <MonitorField
            label="Diagonal"
            onChange={handleDiagonalChange}
            type="number"
            variant="outlined"
            value={monitors[index].diagonal}
          />
          <MonitorField
            label="Orientation"
            onChange={handleOrientationChange}
            select
            value={monitors[index].orientation}
            variant="outlined"
          >
            <MenuItem value="landscape">Landscape</MenuItem>
            <MenuItem value="portrait">Portrait</MenuItem>
          </MonitorField>
          <MonitorField
            label="Aspect Ratio"
            onChange={handleAspectRatioChange}
            select
            value={monitors[index].aspectRatio}
            variant="outlined"
          >
            <MenuItem value="" style={{ display: 'none' }}>
              Custom
            </MenuItem>
            <ListSubheader>Wide</ListSubheader>
            <MenuItem value="16:9">
              <b>16:9</b>
            </MenuItem>
            <MenuItem value="16:10">
              <b>16:10</b>
            </MenuItem>
            <ListSubheader>UltraWide</ListSubheader>
            <MenuItem value="21:9">
              <b>21:9</b>
            </MenuItem>
            <MenuItem value="32:9">32:9</MenuItem>
            <ListSubheader>Other</ListSubheader>
            <MenuItem value="2:1">2:1</MenuItem>
            <MenuItem value="4:3">4:3</MenuItem>
            <MenuItem value="5:4">
              <b>5:4</b>
            </MenuItem>
            <MenuItem value="1:1">1:1</MenuItem>
          </MonitorField>
          <MonitorField
            label="Resolution Standard"
            onChange={handleResolutionStandardChange}
            select
            value={resolutionStandard}
            variant="outlined"
          >
            <MenuItem value="POTATO" style={{ display: 'none' }}>
              Potato
            </MenuItem>
            <MenuItem value="VGA">VGA</MenuItem>
            <MenuItem value="HD">
              <b>HD</b>
            </MenuItem>
            <MenuItem value="HD+">HD+</MenuItem>
            <MenuItem value="FHD">
              <b>FHD</b>
            </MenuItem>
            <MenuItem value="FHD+">FHD+</MenuItem>
            <MenuItem value="QHD">
              <b>QHD</b>
            </MenuItem>
            <MenuItem value="QHD+">QHD+</MenuItem>
            <MenuItem value="4K">
              <b>4K</b>
            </MenuItem>
            <MenuItem value="5K">5K</MenuItem>
            <MenuItem value="8K">8K</MenuItem>
          </MonitorField>
        </MonitorOptionsGrid2>
        <div style={{ width: '100%', textAlign: 'center' }}>
          Show Advanced Options
          <IconButton edge="end" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={expanded} timeout={500}>
          <MonitorOptionsGrid2>
            <MonitorField
              label="Horizontal Resolution"
              onChange={handleHorizontalResolutionChange}
              type="number"
              variant="outlined"
              value={monitors[index].resolution.horizontal}
            />
            <MonitorField
              label="Vertical Resolution"
              onChange={handleVerticallResolutionChange}
              type="number"
              variant="outlined"
              value={monitors[index].resolution.vertical}
            />
            <MonitorField
              label="Display Type"
              onChange={handleDisplayTypeChange}
              select
              value={monitors[index].displayType}
              variant="outlined"
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value="IPS">IPS</MenuItem>
              <MenuItem value="TN">TN</MenuItem>
              <MenuItem value="VA">VA</MenuItem>
              <MenuItem value="OLED">OLED</MenuItem>
            </MonitorField>
            <MonitorField
              label="Sync Type"
              onChange={handleSyncTypeChange}
              select
              value={monitors[index].syncType}
              variant="outlined"
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="G-Sync">G-Sync</MenuItem>
              <MenuItem value="FreeSync">FreeSync</MenuItem>
            </MonitorField>
            <MonitorField
              label="Bezel Width"
              inputProps={{ max: '2', min: '0.0', step: '0.25' }}
              name="bezelWidth"
              onChange={handleBezelWidthChange}
              title={`${monitors[index].bezelWidth}"`}
              type="range"
              value={monitors[index].bezelWidth}
              variant="outlined"
            />
            <MonitorField
              label="Bezel Color"
              onChange={handleBezelColorChange}
              type="color"
              variant="outlined"
              value={monitors[index].bezelColor}
            />
          </MonitorOptionsGrid2>
        </Collapse>
      </MonitorOptionsCard>
    </Fade>
  );
};
