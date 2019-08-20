import { Url } from "url";

interface IMonitor {
  id: number;
  options?: {
    basic: {
      diagonal: number;
      bezelWidth: number;
      orientation: string;
      aspectRatio: string | number;
      resolution: {
        horizontal: number;
        vertical: number
      };
    };
    advanced: {
      displayType: string;
      syncType: string;
      refreshRate: number;
      responseTime: number;
      features: {
        hdr: boolean;
        srgb: boolean;
        curved: boolean;
        webcam: boolean;
        touch: boolean;
        speakers: boolean;
      };
      ports: {
        vga: boolean;
        dvi: boolean;
        hdmi: boolean;
        displayPort: boolean;
        usbc: boolean;
      };
      sellerInfo: {
        brand: string;
        price: number;
        link: Url;
      };
    };
  };
  stats?: {
    size: {
      diagonal: number;
      height: number;
      width: number;
      diagonalWithBezel: number;
      heightWithBezel: number;
      widthWithBezel: number;
      area: number;
    };
    pixels: number;
    ppi: number;
  };
}

export default IMonitor;