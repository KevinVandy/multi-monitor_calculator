export interface ISettings {
  preferredSearchEngine: string;
  expandAdvancedOptionsByDefault: boolean;
  expandStatsByDefault: boolean;
}

export interface ISetups {
  [id: string]: ISetup;
}

export interface ISetup {
  description: string;
  deskHeight: number;
  deskWidth: number;
  id: string | null;
  lastOpened: Date | null;
  monitors: IMonitor[];
  name: string;
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
  notes: string;
  offsetX: number;
  offsetY: number;
  orientation: 'l' | 'p';
  ports: IPorts;
  previewMode: 'wallpaper' | 'movie' | 'tv' | 'doc' | null;
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
