<script lang="ts">
  import DataTable, { Body, Row, Cell } from '@smui/data-table';
  import {
    calcPPI,
    calcScreenHeight,
    calcScreenWidth,
    calcTheta
  } from '../utils/calc';
  import type { IMonitor } from '../utils/interfaces';
  export let monitor: IMonitor;

  $: diagonal = monitor.diagonal;
  $: theta = calcTheta(
    monitor.resolution.horizontal,
    monitor.resolution.vertical
  );
  $: screenWidth = calcScreenWidth(diagonal, monitor.orientation, theta);
  $: screenHeight = calcScreenHeight(diagonal, monitor.orientation, theta);
  $: physicalWidth = screenWidth + monitor.bezelWidth * 2;
  $: physicalHeight = screenHeight + monitor.bezelWidth * 2;
  $: screenArea = screenWidth * screenHeight;
  $: numPixels = +monitor.resolution.horizontal * +monitor.resolution.vertical;
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
      <Cell>Screen Diagonal:</Cell>
      <Cell numeric>{diagonal.toFixed(1)}"</Cell>
    </Row>
    <Row>
      <Cell>Screen Width:</Cell>
      <Cell numeric>{screenWidth.toFixed(1)}"</Cell>
    </Row>
    <Row>
      <Cell>Screen Height:</Cell>
      <Cell numeric>{screenHeight.toFixed(1)}"</Cell>
    </Row>
    <Row>
      <Cell>Bezel Width</Cell>
      <Cell numeric>{monitor.bezelWidth.toFixed(2)}"</Cell>
    </Row>
    <Row>
      <Cell>Physical Width</Cell>
      <Cell numeric>{physicalWidth.toFixed(1)}"</Cell>
    </Row>
    <Row>
      <Cell>Physical Height</Cell>
      <Cell numeric>{physicalHeight.toFixed(1)}"</Cell>
    </Row>
    <Row>
      <Cell>Screen Area</Cell>
      <Cell numeric>{screenArea.toFixed(1)}"<sup>2</sup></Cell>
    </Row>
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
      <Cell>Number Pixels:</Cell>
      <Cell numeric>{numPixels.toLocaleString()}</Cell>
    </Row>
    <Row>
      <Cell>Pixels Per Inch (PPI)</Cell>
      <Cell numeric>{ppi.toFixed(1)}</Cell>
    </Row>
  </Body>
</DataTable>
