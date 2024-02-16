import type { ISetup } from './interfaces';

const defaultSetup: ISetup = {
	description: '',
	deskHeight: 2.25,
	deskWidth: 5,
	id: null,
	lastOpened: null,
	name: '',
	scale: 16,
	monitors: [
		{
			aspectRatio: '16:9',
			bezelColor: '#666666',
			bezelWidth: 0.75,
			diagonal: 27,
			displayType: 'any',
			features: {
				curved: false,
				hdr: false,
				speakers: false,
				srgb: false,
				touch: false,
				webcam: false,
			},
			index: 0,
			name: '',
			notes: '',
			offsetX: 0,
			offsetY: 0,
			offsetZ: 0,
			on: false,
			orientation: 'l',
			ports: {
				displayPort: false,
				dvi: false,
				hdmi: false,
				usbc: false,
				vga: false,
			},
			previewMode: 'wallpaper',
			productLink: '',
			refreshRate: 60,
			resolution: { standard: 'FHD', horizontal: 1920, vertical: 1080 },
			responseTime: null,
			rotateX: 0,
			rotateY: 0,
			syncType: 'any',
			wallpaper: 'https://wallpaperaccess.com/full/90278.jpg',
		},
	],
};

export default defaultSetup;