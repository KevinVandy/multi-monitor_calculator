

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.293eb529.js","_app/immutable/chunks/scheduler.839023fe.js","_app/immutable/chunks/index.1508f9e7.js","_app/immutable/chunks/classAdderBuilder.6395686e.js"];
export const stylesheets = ["_app/immutable/assets/3.a2bb4e9b.css"];
export const fonts = [];
