export interface ISettings {
	expandAdvancedOptionsByDefault: boolean;
	expandStatsByDefault: boolean;
	preferredSearchEngine: string;
	statUnits: 'Metric' | 'Imperial';
	inputUnits: 'Metric' | 'Imperial';
	theme: 'light' | 'dark';
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
	aspectRatio: keyof IAspectRatioStandards;
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
	offsetZ: number;
	on: boolean;
	orientation: 'l' | 'p';
	ports: IPorts;
	previewMode: string;
	productLink: string | null;
	scalingValue: 100 | 125 | 150 | 175 | 200 | 225 | 250 | 275 | 300;
	refreshRate: number;
	resolution: IResolution;
	responseTime: number | null;
	rotateX: number;
	rotateY: number;
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
	standard: keyof IResolutionStandards;
	horizontal: number;
	vertical: number;
}

export interface IResolutionStandards {
	VGA: [number, number];
	HD: [number, number];
	'HD+': [number, number];
	FHD: [number, number];
	'FHD+': [number, number];
	QHD: [number, number];
	'QHD+': [number, number];
	'4K': [number, number];
	'5K': [number, number];
	'6K': [number, number];
	'8K': [number, number];
	POTATO?: undefined;
	'Custom'?: undefined;
}

export interface IAspectRatioStandards {
	'32:9': IResolutionStandards;
	'21:9': IResolutionStandards;
	'16:9': IResolutionStandards;
	'16:10': IResolutionStandards;
	'16:18': IResolutionStandards;
	'4:3': IResolutionStandards;
	'5:4': IResolutionStandards;
	'1:1': IResolutionStandards;
	'2:1': IResolutionStandards;
	'3:2'?: IResolutionStandards;
	'5:3'?: IResolutionStandards;
	'32:10'?: IResolutionStandards;
	'Custom'?: undefined;
}
