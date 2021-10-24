export interface ISetup {
  deskWidth: number;
  deskHeight: number;
  monitors: IMonitor[];
  scale: number;
}

export interface IMonitor {
  aspectRatio: string;
  bezelColor: string;
  bezelWidth: number;
  diagonal: number;
  displayType: string;
  features: IFeatures;
  index: number;
  name: string;
  offsetX: number;
  offsetY: number;
  orientation: 'l' | 'p';
  ports: IPorts;
  previewMode: 'off' | 'wallpaper' | 'movie' | 'video';
  productLink: string | null;
  refreshRate: number;
  resolution: IResolution;
  responseTime: number | null;
  syncType: string;
  wallpaper: string | null;
}

export interface IPorts {
  displayPort: boolean;
  dvi: boolean;
  hdmi: boolean;
  usbc: boolean;
  vga: boolean;
}

export interface IFeatures {
  hdr: boolean;
  srgb: boolean;
  curved: boolean;
  webcam: boolean;
  touch: boolean;
  speakers: boolean;
}

export interface IResolution {
  standard: string;
  horizontal: number;
  vertical: number;
}
