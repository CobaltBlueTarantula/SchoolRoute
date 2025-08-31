import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.Nofyp47G.js","app/immutable/chunks/DsnmJJEf.js","app/immutable/chunks/h7MUBmDw.js","app/immutable/chunks/DvPZ1a-0.js","app/immutable/chunks/BPwULdUY.js","app/immutable/chunks/DNQEJwGN.js","app/immutable/chunks/CfDQ-aYo.js","app/immutable/chunks/r0bgQIrM.js","app/immutable/chunks/CI4LmiiB.js","app/immutable/chunks/BhWAdnLe.js","app/immutable/chunks/C9FoD9as.js"];
export const stylesheets = ["app/immutable/assets/app.D9XW_Q1O.css"];
export const fonts = [];
