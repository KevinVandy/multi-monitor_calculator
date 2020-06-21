export const calcAspectRatio = (horRes, verRes) => {
  const theta = Math.atan(verRes / horRes);
  if (theta > 0.784 && theta < 0.787) return '1:1';
  else if ((theta > 0.673 && theta < 0.676) || (theta > 0.894 && theta < 0.898))
    return '5:4';
  else if ((theta > 0.642 && theta < 0.645) || (theta > 0.925 && theta < 0.929))
    return '4:3';
  else if ((theta > 0.587 && theta < 0.59) || (theta > 0.98 && theta < 0.984))
    return '3:2';
  else if ((theta > 0.557 && theta < 0.56) || (theta > 1.01 && theta < 1.014))
    return '16:10';
  else if ((theta > 0.538 && theta < 0.542) || (theta > 1.028 && theta < 1.032))
    return '5:3';
  else if ((theta > 0.511 && theta < 0.514) || (theta > 1.056 && theta < 1.056))
    return '16:9';
  else if ((theta > 0.462 && theta < 0.465) || (theta > 1.105 && theta < 1.109))
    return '2:1';
  else if ((theta > 0.398 && theta < 0.406) || (theta > 1.164 && theta < 1.173))
    return '21:9';
  else if ((theta > 0.3 && theta < 0.304) || (theta > 1.265 && theta < 1.27))
    return '32:10';
  else if ((theta > 0.273 && theta < 0.276) || (theta > 1.295 && theta < 1.301))
    return '32:9';
  else return '';
};

export const calcResolutionStandard = (verRes) => {
  if (verRes > 4300) return '8K';
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

export const calcResolution = (aspectRatio, resolutionStandard) => {
  const resolutionStandards = {
    '32:9': {
      VGA: [2160, 600],
      HD: [2560, 768],
      'HD+': [3440, 900],
      FHD: [3840, 1080],
      'FHD+': [4320, 1200],
      QHD: [5120, 1440],
      'QHD+': [5690, 1600],
      '4K': [7860, 2160],
      '5K': [10240, 2880],
      '8K': [15720, 4320],
    },
    '21:9': {
      VGA: [1420, 600],
      HD: [1820, 768],
      'HD+': [2130, 900],
      FHD: [2560, 1080],
      'FHD+': [2844, 1200],
      QHD: [3440, 1440],
      'QHD+': [3840, 1600],
      '4K': [5120, 2160],
      '5K': [6720, 2880],
      '8K': [10240, 4320],
    },
    '16:9': {
      VGA: [1024, 600],
      HD: [1366, 768],
      'HD+': [1600, 900],
      FHD: [1920, 1080],
      'FHD+': [2130, 1200],
      QHD: [2560, 1440],
      'QHD+': [2844, 1600],
      '4K': [3840, 2160],
      '5K': [5120, 2880],
      '8K': [7860, 4320],
    },
    '16:10': {
      VGA: [1024, 640],
      HD: [1230, 768],
      'HD+': [1440, 900],
      FHD: [1680, 1050],
      'FHD+': [1920, 1200],
      QHD: [2304, 1440],
      'QHD+': [2560, 1600],
      '4K': [3840, 2400],
      '5K': [5120, 3200],
      '8K': [7680, 4800],
    },
    '4:3': {
      VGA: [800, 600],
      HD: [1024, 768],
      'HD+': [1280, 960],
      FHD: [1440, 1080],
      'FHD+': [1600, 1200],
      QHD: [1920, 1440],
      'QHD+': [2133, 1600],
      '4K': [2800, 2100],
      '5K': [4096, 3072],
      '8K': [6400, 4800],
    },
    '5:4': {
      VGA: [750, 600],
      HD: [960, 768],
      'HD+': [1280, 1024],
      FHD: [1280, 1024],
      'FHD+': [1600, 1280],
      QHD: [1800, 1440],
      'QHD+': [2000, 1600],
      '4K': [2560, 2048],
      '5K': [3600, 2880],
      '8K': [5120, 4096],
    },
    '1:1': {
      VGA: [600, 600],
      HD: [768, 768],
      'HD+': [1024, 1024],
      FHD: [1024, 1024],
      'FHD+': [1280, 1280],
      QHD: [1440, 1440],
      'QHD+': [1600, 1600],
      '4K': [2048, 2048],
      '5K': [2880, 2880],
      '8K': [4096, 4096],
    },
    '2:1': {
      VGA: [1200, 600],
      HD: [1536, 768],
      'HD+': [3600, 900],
      FHD: [2160, 1080],
      'FHD+': [2400, 1200],
      QHD: [2880, 1440],
      'QHD+': [3200, 1600],
      '4K': [4320, 2160],
      '5K': [5760, 2880],
      '8K': [8640, 4320],
    },
  };
  return resolutionStandards[aspectRatio]?.[resolutionStandard];
};
