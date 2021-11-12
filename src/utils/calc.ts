import resolutions from './resolutions.json';

export const calcAspectRatio = (horRes: number, verRes: number): string => {
  const theta = Math.atan(verRes / horRes);
  if (theta > 0.784 && theta < 0.787) return '1:1';
  if ((theta > 0.673 && theta < 0.676) || (theta > 0.894 && theta < 0.898))
    return '5:4';
  if ((theta > 0.642 && theta < 0.645) || (theta > 0.925 && theta < 0.929))
    return '4:3';
  if ((theta > 0.587 && theta < 0.59) || (theta > 0.98 && theta < 0.984))
    return '3:2';
  if ((theta > 0.557 && theta < 0.56) || (theta > 1.01 && theta < 1.014))
    return '16:10';
  if ((theta > 0.538 && theta < 0.542) || (theta > 1.028 && theta < 1.032))
    return '5:3';
  if ((theta > 0.511 && theta < 0.514) || (theta > 1.056 && theta < 1.056))
    return '16:9';
  if ((theta > 0.462 && theta < 0.465) || (theta > 1.105 && theta < 1.109))
    return '2:1';
  if ((theta > 0.398 && theta < 0.406) || (theta > 1.164 && theta < 1.173))
    return '21:9';
  if ((theta > 0.3 && theta < 0.304) || (theta > 1.265 && theta < 1.27))
    return '32:10';
  if ((theta > 0.273 && theta < 0.276) || (theta > 1.295 && theta < 1.301))
    return '32:9';
  return '';
};

export const calcResolutionStandard = (verRes: number): string => {
  if (verRes > 4300) return '8K';
  if (verRes > 3300) return '6K';
  if (verRes > 2800) return '5K';
  if (verRes > 2100) return '4K';
  if (verRes > 1500) return 'QHD+';
  if (verRes > 1400) return 'QHD';
  if (verRes > 1100) return 'FHD+';
  if (verRes > 1000) return 'FHD';
  if (verRes > 800) return 'HD+';
  if (verRes > 700) return 'HD';
  if (verRes > 400) return 'VGA';
  return 'POTATO';
};

export const calcResolution = (
  aspectRatio: string,
  resolutionStandard: string
): [number, number] =>
  resolutions[aspectRatio]?.[resolutionStandard];
;

export const calcTheta = (horRes: number, verRes: number): number =>
  Math.atan(verRes / horRes);

export const calcScreenWidth = (
  diagonal: number,
  theta: number,
  orientation: 'l' | 'p' = 'l'
): number =>
  diagonal * (orientation === 'l' ? Math.cos(theta) : Math.sin(theta));

export const calcScreenHeight = (
  diagonal: number,
  theta: number,
  orientation: 'l' | 'p' = 'l'
): number =>
  diagonal * (orientation === 'l' ? Math.sin(theta) : Math.cos(theta));

export const calcPPI = (
  horRes: number,
  verRes: number,
  screenWidth: number,
  screenHeight: number
): number => (horRes + verRes) / (screenWidth + screenHeight);
