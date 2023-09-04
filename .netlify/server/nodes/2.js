

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d95ec5c4.js","_app/immutable/chunks/scheduler.839023fe.js","_app/immutable/chunks/index.1508f9e7.js","_app/immutable/chunks/classAdderBuilder.6395686e.js","_app/immutable/chunks/FormField.d0919673.js","_app/immutable/chunks/index.42c14c46.js"];
export const stylesheets = ["_app/immutable/assets/2.d4d37c95.css"];
export const fonts = [];
