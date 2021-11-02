import { getNewMonitor, parsedDefaultSetup } from '../stores/SetupStore';
import { ShortCode } from './enums';
import type { IMonitor } from './interfaces';
import queryString from 'query-string';

export const parseSetupFromUrl = (urlSetup: {
  [x: string]: string | number;
}): { parsedMonitors: IMonitor[]; parsedScale: number; parsedId: string } => {
  const parsedId = String(urlSetup[ShortCode.SETUP_ID]) ?? null;
  const parsedScale = +urlSetup[ShortCode.SCALE] || parsedDefaultSetup.scale;
  const parsedMonitors: IMonitor[] = [];
  for (let i = 0; i < Math.min(+urlSetup?.num ?? 10, 10); i++) {
    const parsedMonitor: IMonitor = getNewMonitor(i);
    parsedMonitors.push({
      ...parsedMonitor,
      aspectRatio: String(
        urlSetup[`${ShortCode.ASPECT_RATIO}${i}`] ?? parsedMonitor.aspectRatio
      ),
      bezelColor: String(
        urlSetup[`${ShortCode.BEZEL_COLOR}${i}`] ?? parsedMonitor.bezelColor
      ),
      bezelWidth: Number(
        urlSetup[`${ShortCode.BEZEL_WIDTH}${i}`] ?? parsedMonitor.bezelWidth
      ),
      diagonal: Number(
        urlSetup[`${ShortCode.DIAGONAL}${i}`] ?? parsedMonitor.diagonal
      ),
      displayType: String(
        urlSetup[`${ShortCode.DISPLAY_TYPE}${i}`] ?? parsedMonitor.displayType
      ),
      name: String(urlSetup[`${ShortCode.NAME}${i}`] ?? parsedMonitor.name),
      offsetX: Number(
        urlSetup[`${ShortCode.OFFSET_X}${i}`] ?? parsedMonitor.offsetX
      ),
      offsetY: Number(
        urlSetup[`${ShortCode.OFFSET_Y}${i}`] ?? parsedMonitor.offsetY
      ),
      orientation: (urlSetup[`${ShortCode.ORIENTATION}${i}`] ??
        parsedMonitor.orientation) as 'l' | 'p',
      refreshRate: Number(
        urlSetup[`${ShortCode.REFRESH_RATE}${i}`] ?? parsedMonitor.refreshRate
      ),
      responseTime:
        Number(urlSetup[`${ShortCode.RESPONSE_TIME}${i}`]) ??
        parsedMonitor.responseTime,
      resolution: {
        horizontal: Number(
          urlSetup[`${ShortCode.HORIZONTAL_RESOLUTION}${i}`] ??
            parsedMonitor.resolution.horizontal
        ),
        standard: String(
          urlSetup[`${ShortCode.RESOLUTION_STANDARD}${i}`] ??
            parsedMonitor.resolution.standard
        ),
        vertical: Number(
          urlSetup[`${ShortCode.VERTICAL_RESOLUTION}${i}`] ??
            parsedMonitor.resolution.vertical
        )
      },
      syncType: String(
        urlSetup[`${ShortCode.SYNC_TYPE}${i}`] ?? parsedMonitor.syncType
      )
    });
  }
  return { parsedId, parsedMonitors, parsedScale };
};

/**
 * flatten monitors array into 1 new object with every property of all monitors
 * filter out default values since they are redundant info
 * encode as url params
 */
export const encodeSetupToUrl = (
  monitors: IMonitor[],
  scale: number,
  id: string
): string => {
  const defaultMonitor = getNewMonitor();

  return queryString.stringify(
    Object.fromEntries(
      Object.entries(
        Object.assign(
          {
            num: monitors.length,
            [ShortCode.SCALE]: scale,
            [ShortCode.SETUP_ID]: id
          },
          ...monitors.map((m: IMonitor, i: number) => ({
            [`${ShortCode.ASPECT_RATIO}${i}`]: m.aspectRatio,
            [`${ShortCode.BEZEL_COLOR}${i}`]: m.bezelColor,
            [`${ShortCode.BEZEL_WIDTH}${i}`]: m.bezelWidth,
            [`${ShortCode.DIAGONAL}${i}`]: m.diagonal,
            [`${ShortCode.DISPLAY_TYPE}${i}`]: m.displayType,
            [`${ShortCode.HORIZONTAL_RESOLUTION}${i}`]: m.resolution.horizontal,
            [`${ShortCode.NAME}${i}`]: m.name,
            [`${ShortCode.OFFSET_X}${i}`]: m.offsetX,
            [`${ShortCode.OFFSET_Y}${i}`]: m.offsetY,
            [`${ShortCode.ORIENTATION}${i}`]: m.orientation,
            [`${ShortCode.REFRESH_RATE}${i}`]: m.refreshRate,
            [`${ShortCode.RESOLUTION_STANDARD}${i}`]: m.resolution.standard,
            [`${ShortCode.RESPONSE_TIME}${i}`]: m.responseTime,
            [`${ShortCode.SYNC_TYPE}${i}`]: m.syncType,
            [`${ShortCode.VERTICAL_RESOLUTION}${i}`]: m.resolution.vertical
          }))
        )
      ).filter(([key, value]: [string, number | string]) => {
        if (!value) return false;
        if (key[0] === ShortCode.SCALE && scale === parsedDefaultSetup.scale)
          return false;
        if (
          key[0] === ShortCode.ASPECT_RATIO &&
          value === defaultMonitor.aspectRatio
        )
          return false;
        if (
          key[0] === ShortCode.BEZEL_WIDTH &&
          value === defaultMonitor.bezelWidth
        )
          return false;
        if (
          key[0] === ShortCode.BEZEL_COLOR &&
          value === defaultMonitor.bezelColor
        )
          return false;
        if (key[0] === ShortCode.DIAGONAL && value === defaultMonitor.diagonal)
          return false;
        if (
          key[0] === ShortCode.HORIZONTAL_RESOLUTION &&
          value === defaultMonitor.resolution.horizontal
        )
          return false;
        if (key[0] === ShortCode.SYNC_TYPE && value === defaultMonitor.syncType)
          return false;
        if (key[0] === ShortCode.NAME && value === defaultMonitor.name)
          return false;
        if (
          key[0] === ShortCode.ORIENTATION &&
          value === defaultMonitor.orientation
        )
          return false;
        if (
          key[0] === ShortCode.DISPLAY_TYPE &&
          value === defaultMonitor.displayType
        )
          return false;
        if (
          key[0] === ShortCode.REFRESH_RATE &&
          value === defaultMonitor.refreshRate
        )
          return false;
        if (
          key[0] === ShortCode.RESOLUTION_STANDARD &&
          value === defaultMonitor.resolution.standard
        )
          return false;
        if (
          key[0] === ShortCode.RESPONSE_TIME &&
          value === defaultMonitor.responseTime
        )
          return false;
        if (
          key[0] === ShortCode.VERTICAL_RESOLUTION &&
          value === defaultMonitor.resolution.vertical
        )
          return false;
        if (key[0] === ShortCode.OFFSET_X && value === defaultMonitor.offsetX)
          return false;
        if (key[0] === ShortCode.OFFSET_Y && value === defaultMonitor.offsetY)
          return false;
        return true;
      })
    )
  );
};
