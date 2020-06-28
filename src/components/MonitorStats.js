import React, { useMemo } from 'react';
import { Table, TableBody, TableRow, TableCell, styled } from '@material-ui/core';
import { calcTheta, calcScreenWidth, calcScreenHeight, calcPPI } from '../util/calc.util';

export const MonitorStats = ({ monitor, fontColor }) => {
  const diagonal = parseFloat(monitor.diagonal);
  const theta = useMemo(
    () => calcTheta(monitor.resolution.horizontal, monitor.resolution.vertical),
    [monitor.resolution.horizontal, monitor.resolution.vertical]
  );
  const [screenWidth, screenHeight] = useMemo(
    () => [
      calcScreenWidth(diagonal, monitor.orientation, theta),
      calcScreenHeight(diagonal, monitor.orientation, theta)
    ],
    [diagonal, monitor.orientation, theta]
  );
  const physicalWidth = screenWidth + monitor.bezelWidth * 2;
  const physicalHeight = screenHeight + monitor.bezelWidth * 2;
  const screenArea = screenWidth * screenHeight;
  const numPixels =
    parseInt(monitor.resolution.horizontal) * parseInt(monitor.resolution.vertical);
  const ppi = calcPPI(
    monitor.resolution.horizontal,
    monitor.resolution.vertical,
    screenHeight,
    screenWidth
  );

  const commonTableCellStyles = {
    border: 'none',
    height: '2rem',
    padding: 0,
    fontSize: '1rem',
    color: fontColor
  };

  const TableHeadCell = styled(TableCell)({
    ...commonTableCellStyles,
    textAlign: 'right',
    paddingRight: '1rem',
    fontWeight: '500'
  });

  const TableDataCell = styled(TableCell)({
    ...commonTableCellStyles,
    textAlign: 'left'
  });

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeadCell component="th">Screen Diagonal:</TableHeadCell>
          <TableDataCell>{diagonal.toFixed(1)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Screen Width:</TableHeadCell>
          <TableDataCell>{screenWidth.toFixed(1)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Screen Height:</TableHeadCell>
          <TableDataCell>{screenHeight.toFixed(1)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Bezel Width:</TableHeadCell>
          <TableDataCell>{parseFloat(monitor.bezelWidth).toFixed(2)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Physical Width:</TableHeadCell>
          <TableDataCell>{physicalWidth.toFixed(1)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Physical Height:</TableHeadCell>
          <TableDataCell>{physicalHeight.toFixed(1)}"</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Screen Area:</TableHeadCell>
          <TableDataCell>
            {screenArea.toFixed(0)}"<sup>2</sup>
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Aspect Ratio:</TableHeadCell>
          <TableDataCell>{monitor.aspectRatio}</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Resolution:</TableHeadCell>
          <TableDataCell>
            {monitor.resolution.horizontal} x {monitor.resolution.vertical}
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Number Pixels:</TableHeadCell>
          <TableDataCell>{numPixels.toLocaleString()}</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeadCell component="th">Pixels Per Inch (PPI):</TableHeadCell>
          <TableDataCell>{ppi.toFixed(1)}</TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
