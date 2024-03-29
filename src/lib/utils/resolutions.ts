import type { IAspectRatioStandards } from './interfaces';

const resolutions: IAspectRatioStandards = {
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
		'6K': [12032, 3384],
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
		'6K': [8084, 3384],
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
		'6K': [6016, 3384],
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
		'6K': [6016, 3760],
		'8K': [7860, 4800],
	},
	'16:18': {
		VGA: [1024, 1200],
		HD: [1366, 1536],
		'HD+': [1600, 1800],
		FHD: [1920, 2160],
		'FHD+': [2130, 2400],
		QHD: [2560, 2880],
		'QHD+': [2844, 3200],
		'4K': [3840, 4320],
		'5K': [5120, 5760],
		'6K': [6016, 6768],
		'8K': [7860, 8640],
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
		'6K': [4512, 3384],
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
		'6K': [4230, 3384],
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
		'6K': [3384, 3384],
		'8K': [4096, 4096],
	},
	'2:1': {
		VGA: [1200, 600],
		HD: [1536, 768],
		'HD+': [1800, 900],
		FHD: [2160, 1080],
		'FHD+': [2400, 1200],
		QHD: [2880, 1440],
		'QHD+': [3200, 1600],
		'4K': [4320, 2160],
		'5K': [5760, 2880],
		'6K': [6768, 3384],
		'8K': [8640, 4320],
	},
};

export default resolutions;
