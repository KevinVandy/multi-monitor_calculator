import React from 'react';
import { Table, TableBody, TableRow, TableCell, styled } from '@material-ui/core';

const commonTableCellStyles = {
  border: 'none',
  height: '2rem',
  padding: 0,
  lineHeight: '2rem'
};

const TableHeadCell = styled(TableCell)({
  ...commonTableCellStyles,
  textAlign: 'right',
  paddingRight: '1rem',
  fontWeight: '600'
});

const TableDataCell = styled(TableCell)({
  ...commonTableCellStyles,
  textAlign: 'left',
});

export const MonitorStats = ({ monitor }) => {
  const THETA = Math.atan(
    parseFloat(monitor.resolution.vertical) / parseFloat(monitor.resolution.horizontal)
  );

  const diagonal = parseFloat(monitor.diagonal);
  const screenWidth =
    monitor.diagonal *
    (monitor.orientation === 'landscape' ? Math.cos(THETA) : Math.sin(THETA));
  const screenHeight =
    monitor.diagonal *
    (monitor.orientation === 'landscape' ? Math.sin(THETA) : Math.cos(THETA));
  const physicalWidth = screenWidth + monitor.bezelWidth * 2;
  const physicalHeight = screenHeight + monitor.bezelWidth * 2;
  const screenArea = screenWidth * screenHeight;
  const numPixels = monitor.resolution.horizontal * monitor.resolution.vertical;
  const ppi =
    (monitor.resolution.vertical + monitor.resolution.horizontal) /
    (screenHeight + screenWidth);

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
