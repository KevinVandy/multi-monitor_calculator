import { getNewMonitor, parsedDefaultSetup } from '../stores/SetupStore';
import { ShortCode } from './enums';
import type { IMonitor } from './interfaces';
import queryString from 'query-string';
import { v4 as uuid } from 'uuid';

export const parseSetupFromUrl = (urlSetup: {
  [x: string]: string | number;
}): {
  parsedDeskHeight: number;
  parsedDeskWidth: number;
  parsedId: string;
  parsedMonitors: IMonitor[];
  parsedScale: number;
  parsedName: string;
} => {
  const parsedId = String(urlSetup[ShortCode.SETUP_ID] || uuid());
  const parsedName = String(
    urlSetup[ShortCode.SETUP_NAME] || parsedDefaultSetup.name
  );
  const parsedScale = Number(
    urlSetup[ShortCode.SCALE] || parsedDefaultSetup.scale
  );
  const parsedDeskHeight = Number(
    urlSetup[ShortCode.DESK_HEIGHT] || parsedDefaultSetup.deskHeight
  );
  const parsedDeskWidth = Number(
    urlSetup[ShortCode.DESK_WIDTH] || parsedDefaultSetup.deskWidth
  );
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
      offsetZ: Number(
        urlSetup[`${ShortCode.OFFSET_Z}${i}`] ?? parsedMonitor.offsetZ
      ),
      rotateX: Number(
        urlSetup[`${ShortCode.ROTATE_X}${i}`] ?? parsedMonitor.rotateX
      ),
      rotateY: Number(
        urlSetup[`${ShortCode.ROTATE_Y}${i}`] ?? parsedMonitor.rotateY
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
      ),
      features: {
        ...parsedMonitor.features,
        curved: Boolean(urlSetup[`${ShortCode.CURVED}${i}`] ?? parsedMonitor.features.curved),
        hdr: Boolean(urlSetup[`${ShortCode.HDR}${i}`] ?? parsedMonitor.features.hdr),
      }
    });
  }
  return {
    parsedId,
    parsedMonitors,
    parsedScale,
    parsedDeskHeight,
    parsedDeskWidth,
    parsedName
  };
};

/**
 * flatten monitors array into 1 new object with every property of all monitors
 * filter out default values since they are redundant info
 * encode as url params
 */
export const encodeSetupToUrl = (
  monitors: IMonitor[],
  scale: number,
  deskHeight: number,
  deskWidth: number,
  name: string,
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
            [ShortCode.DESK_HEIGHT]: deskHeight,
            [ShortCode.DESK_WIDTH]: deskWidth,
            [ShortCode.SETUP_NAME]: name,
            [ShortCode.SETUP_ID]: id
          },
          ...monitors.map((m: IMonitor, i: number) => ({
            [`${ShortCode.ASPECT_RATIO}${i}`]: m.aspectRatio,
            [`${ShortCode.BEZEL_COLOR}${i}`]: m.bezelColor,
            [`${ShortCode.BEZEL_WIDTH}${i}`]: m.bezelWidth,
            [`${ShortCode.CURVED}${i}`]: m.features.curved,
            [`${ShortCode.DIAGONAL}${i}`]: m.diagonal,
            [`${ShortCode.DISPLAY_TYPE}${i}`]: m.displayType,
            [`${ShortCode.HDR}${i}`]: m.features.hdr,
            [`${ShortCode.HORIZONTAL_RESOLUTION}${i}`]: m.resolution.horizontal,
            [`${ShortCode.NAME}${i}`]: m.name,
            [`${ShortCode.OFFSET_X}${i}`]: m.offsetX,
            [`${ShortCode.OFFSET_Y}${i}`]: m.offsetY,
            [`${ShortCode.OFFSET_Z}${i}`]: m.offsetZ,
            [`${ShortCode.ORIENTATION}${i}`]: m.orientation,
            [`${ShortCode.REFRESH_RATE}${i}`]: m.refreshRate,
            [`${ShortCode.RESOLUTION_STANDARD}${i}`]: m.resolution.standard,
            [`${ShortCode.RESPONSE_TIME}${i}`]: m.responseTime,
            [`${ShortCode.ROTATE_X}${i}`]: m.rotateX,
            [`${ShortCode.ROTATE_Y}${i}`]: m.rotateY,
            [`${ShortCode.SYNC_TYPE}${i}`]: m.syncType,
            [`${ShortCode.VERTICAL_RESOLUTION}${i}`]: m.resolution.vertical
          }))
        )
      ).filter(([key, value]: [string, number | string | boolean]) => {
        if (!value) return false;
        if (key[0] === ShortCode.SCALE && scale === parsedDefaultSetup.scale)
          return false;
        if (
          key[0] === ShortCode.DESK_HEIGHT &&
          deskHeight === parsedDefaultSetup.deskHeight
        )
          return false;
        if (
          key[0] === ShortCode.DESK_WIDTH &&
          deskWidth === parsedDefaultSetup.deskWidth
        )
          return false;
        if (key[0] === ShortCode.SETUP_NAME && name.includes('Untitled'))
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
        if (
          key[0] === ShortCode.CURVED &&
          value === defaultMonitor.features.curved
        )
          return false;
        if (key[0] === ShortCode.DIAGONAL && value === defaultMonitor.diagonal)
          return false;
        if (
          key[0] === ShortCode.HDR &&
          value === defaultMonitor.features.hdr
        )
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
        if (key[0] === ShortCode.OFFSET_Z && value === defaultMonitor.offsetZ)
          return false;
        if (key[0] === ShortCode.ROTATE_X && value === defaultMonitor.rotateX)
          return false;
        if (key[0] === ShortCode.ROTATE_Y && value === defaultMonitor.rotateY)
          return false;
        return true;
      })
    )
  );
};
