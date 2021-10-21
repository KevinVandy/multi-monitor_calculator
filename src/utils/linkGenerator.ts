import { getNewMonitor } from '../stores/SetupStore';
import { ShortCode } from './enums';
import type { IMonitor } from './interfaces';
import queryString from 'query-string';

export const parseSetupFromUrl = (urlSetup: {
  [x: string]: string | number;
}): IMonitor[] => {
  const parsedMonitors: IMonitor[] = [];
  for (let i = 0; i < Math.min(+urlSetup?.num ?? 10, 10); i++) {
    const parsedMonitor: IMonitor = getNewMonitor(i);
    parsedMonitors.push({
      ...parsedMonitor,
      aspectRatio: String(
        urlSetup[`${ShortCode.aspectRatio}${i}`] ?? parsedMonitor.aspectRatio
      ),
      bezelColor: String(
        urlSetup[`${ShortCode.bezelColor}${i}`] ?? parsedMonitor.bezelColor
      ),
      bezelWidth: Number(
        urlSetup[`${ShortCode.bezelWidth}${i}`] ?? parsedMonitor.bezelWidth
      ),
      diagonal: Number(
        urlSetup[`${ShortCode.diagonal}${i}`] ?? parsedMonitor.diagonal
      ),
      displayType: String(
        urlSetup[`${ShortCode.displayType}${i}`] ?? parsedMonitor.displayType
      ),
      offsetX: Number(
        urlSetup[`${ShortCode.offsetX}${i}`] ?? parsedMonitor.offsetX
      ),
      offsetY: Number(
        urlSetup[`${ShortCode.offsetY}${i}`] ?? parsedMonitor.offsetY
      ),
      orientation: (urlSetup[`${ShortCode.orientation}${i}`] ??
        parsedMonitor.orientation) as 'l' | 'p',
      refreshRate: Number(
        urlSetup[`${ShortCode.refreshRate}${i}`] ?? parsedMonitor.refreshRate
      ),
      responseTime:
        Number(urlSetup[`${ShortCode.responseTime}${i}`]) ??
        parsedMonitor.responseTime,
      resolution: {
        horizontal: Number(
          urlSetup[`${ShortCode.horizontalResolution}${i}`] ??
            parsedMonitor.resolution.horizontal
        ),
        standard: String(
          urlSetup[`${ShortCode.resolutionStandard}${i}`] ??
            parsedMonitor.resolution.standard
        ),
        vertical: Number(
          urlSetup[`${ShortCode.verticalResolution}${i}`] ??
            parsedMonitor.resolution.vertical
        )
      },
      syncType: String(
        urlSetup[`${ShortCode.syncType}${i}`] ?? parsedMonitor.syncType
      )
    });
  }
  return parsedMonitors;
};

/**
 * flatten monitors array into 1 new object with every property of all monitors
 * filter out default values since they are redundant info
 * encode as url params
 */
export const encodeSetupToUrl = (monitors: IMonitor[]): string => {
  const defaultMonitor = getNewMonitor();

  return queryString.stringify(
    Object.fromEntries(
      Object.entries(
        Object.assign(
          { num: monitors.length },
          ...monitors.map((m: IMonitor, i: number) => ({
            [`${ShortCode.aspectRatio}${i}`]: m.aspectRatio,
            [`${ShortCode.bezelColor}${i}`]: m.bezelColor,
            [`${ShortCode.bezelWidth}${i}`]: m.bezelWidth,
            [`${ShortCode.diagonal}${i}`]: m.diagonal,
            [`${ShortCode.displayType}${i}`]: m.displayType,
            [`${ShortCode.horizontalResolution}${i}`]: m.resolution.horizontal,
            [`${ShortCode.offsetX}${i}`]: m.offsetX,
            [`${ShortCode.offsetY}${i}`]: m.offsetY,
            [`${ShortCode.orientation}${i}`]: m.orientation,
            [`${ShortCode.refreshRate}${i}`]: m.refreshRate,
            [`${ShortCode.resolutionStandard}${i}`]: m.resolution.standard,
            [`${ShortCode.responseTime}${i}`]: m.responseTime,
            [`${ShortCode.syncType}${i}`]: m.syncType,
            [`${ShortCode.verticalResolution}${i}`]: m.resolution.vertical
          }))
        )
      ).filter(([key, value]) => {
        if (
          key[0] === ShortCode.aspectRatio &&
          value === defaultMonitor.aspectRatio
        )
          return false;
        if (
          key[0] === ShortCode.bezelWidth &&
          value === defaultMonitor.bezelWidth
        )
          return false;
        if (
          key[0] === ShortCode.bezelColor &&
          value === defaultMonitor.bezelColor
        )
          return false;
        if (key[0] === ShortCode.diagonal && value === defaultMonitor.diagonal)
          return false;
        if (
          key[0] === ShortCode.horizontalResolution &&
          value === defaultMonitor.resolution.horizontal
        )
          return false;
        if (key[0] === ShortCode.syncType && value === defaultMonitor.syncType)
          return false;
        if (
          key[0] === ShortCode.orientation &&
          value === defaultMonitor.orientation
        )
          return false;
        if (
          key[0] === ShortCode.displayType &&
          value === defaultMonitor.displayType
        )
          return false;
        if (
          key[0] === ShortCode.refreshRate &&
          value === defaultMonitor.refreshRate
        )
          return false;
        if (
          key[0] === ShortCode.resolutionStandard &&
          value === defaultMonitor.resolution.standard
        )
          return false;
        if (
          key[0] === ShortCode.responseTime &&
          value === defaultMonitor.responseTime
        )
          return false;
        if (
          key[0] === ShortCode.verticalResolution &&
          value === defaultMonitor.resolution.vertical
        )
          return false;
        if (key[0] === ShortCode.offsetX && value === defaultMonitor.offsetX)
          return false;
        if (key[0] === ShortCode.offsetY && value === defaultMonitor.offsetY)
          return false;
        return true;
      })
    ),
    { skipEmptyString: true, skipNull: true }
  );
};
