export interface ISetup {
  deskWidth: number;
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
  orientation: 'landscape' | 'portrait';
  ports: IPorts;
  refreshRate: number;
  resolution: IResolution;
  responseTime: string;
  sellerInfo: ISellerInfo;
  syncType: string;
  visible: boolean;
}

export interface ISellerInfo {
  brand: string;
  link: string;
  price: number;
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
