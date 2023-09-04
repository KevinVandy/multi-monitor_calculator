export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","manifest.json","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.3178172a.js","app":"_app/immutable/entry/app.a8b50179.js","imports":["_app/immutable/entry/start.3178172a.js","_app/immutable/chunks/scheduler.839023fe.js","_app/immutable/chunks/singletons.9473cae3.js","_app/immutable/chunks/index.42c14c46.js","_app/immutable/entry/app.a8b50179.js","_app/immutable/chunks/scheduler.839023fe.js","_app/immutable/chunks/index.1508f9e7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
