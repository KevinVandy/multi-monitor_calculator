<script lang="ts">
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import { inputUnits, statUnits } from '../stores/SettingsStore';
  import {
    calcPPI,
    calcScreenHeight,
    calcScreenWidth,
    calcTheta
  } from '../utils/calc';
  import type { IMonitor } from '../utils/interfaces';
  export let monitor: IMonitor;

  $: convert =
    $inputUnits === 'Imperial' && $statUnits === 'Metric'
      ? 2.54
      : $inputUnits === 'Metric' && $statUnits === 'Imperial'
      ? 1 / 2.54
      : 1;

  $: diagonal = convert * monitor.diagonal;
  $: bezelWidth =
    $statUnits === 'Metric' ? 2.54 * monitor.bezelWidth : monitor.bezelWidth;
  $: theta = calcTheta(
    monitor.resolution.horizontal,
    monitor.resolution.vertical
  );
  $: screenWidth = calcScreenWidth(diagonal, theta, monitor.orientation);
  $: screenHeight = calcScreenHeight(diagonal, theta, monitor.orientation);
  $: physicalWidth = screenWidth + bezelWidth * 2;
  $: physicalHeight = screenHeight + bezelWidth * 2;
  $: screenArea = screenWidth * screenHeight;
  $: numPixels = +monitor.resolution.horizontal * +monitor.resolution.vertical;
  $: pps = numPixels * +monitor.refreshRate;
  $: ppi = calcPPI(
    monitor.resolution.horizontal,
    monitor.resolution.vertical,
    screenHeight,
    screenWidth
  );
</script>

<DataTable style="width: 100%;">
  <Body>
    <Row>
      <Cell>Aspect Ratio</Cell>
      <Cell numeric>{monitor.aspectRatio || 'unknown'}</Cell>
    </Row>
    <Row>
      <Cell>Resolution</Cell>
      <Cell numeric
        >{monitor.resolution.horizontal} x {monitor.resolution.vertical}</Cell
      >
    </Row>
    <Row>
      <Cell>Number Pixels</Cell>
      <Cell numeric>{numPixels.toLocaleString()}</Cell>
    </Row>
    <Row>
      <Cell>Refresh Rate</Cell>
      <Cell numeric>{monitor.refreshRate} Hz</Cell>
    </Row>
    <Row>
      <Cell>Pixels Per Second (PPS)</Cell>
      <Cell numeric>{pps.toLocaleString()}</Cell>
    </Row>
    <Row>
      <Cell
        >{$statUnits === 'Metric'
          ? 'Pixels Per Centimeter (PPCM)'
          : 'Pixels Per Inch (PPI)'}</Cell
      >
      <Cell numeric>{ppi.toFixed(1)}</Cell>
    </Row>
    <Row>
      <Cell>Screen Diagonal</Cell>
      <Cell numeric
        >{diagonal.toFixed(1)}{$statUnits === 'Metric' ? ' cm' : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Screen Width</Cell>
      <Cell numeric
        >{screenWidth.toFixed(1)}{$statUnits === 'Metric' ? ' cm' : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Screen Height</Cell>
      <Cell numeric
        >{screenHeight.toFixed(1)}{$statUnits === 'Metric' ? ' cm' : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Bezel Width</Cell>
      <Cell numeric
        >{bezelWidth.toFixed(2)}{$statUnits === 'Metric' ? ' cm' : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Physical Width</Cell>
      <Cell numeric
        >{physicalWidth.toFixed(1)}{$statUnits === 'Metric' ? ' cm' : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Physical Height</Cell>
      <Cell numeric
        >{physicalHeight.toFixed(1)}{$statUnits === 'Metric'
          ? ' cm'
          : '"'}</Cell
      >
    </Row>
    <Row>
      <Cell>Screen Area</Cell>
      <Cell numeric>
        {screenArea.toFixed(1)}{$statUnits === 'Metric' ? ' cm' : '"'}
        <sup>2</sup>
      </Cell>
    </Row>
  </Body>
</DataTable>
