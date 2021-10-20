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
  id: string;
  index: number;
  offsetX: number;
  offsetY: number;
  orientation: 'landscape' | 'portrait';
  ports: IPorts;
  refreshRate: number;
  resolution: IResolution;
  responseTime: string;
  syncType: string;
  visible: boolean;
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
