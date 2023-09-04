

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b773b9f9.js","_app/immutable/chunks/scheduler.839023fe.js","_app/immutable/chunks/index.1508f9e7.js","_app/immutable/chunks/singletons.9473cae3.js","_app/immutable/chunks/index.42c14c46.js"];
export const stylesheets = [];
export const fonts = [];
