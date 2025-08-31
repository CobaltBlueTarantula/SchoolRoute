export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "SchoolRoute/app",
	assets: new Set(["robots.txt","routes.csv","schools.json","school_routes.csv"]),
	mimeTypes: {".txt":"text/plain",".csv":"text/csv",".json":"application/json"},
	_: {
		client: {start:"app/immutable/entry/start.zGhMTNWb.js",app:"app/immutable/entry/app.CMLPzdNH.js",imports:["app/immutable/entry/start.zGhMTNWb.js","app/immutable/chunks/CGZHe3Ay.js","app/immutable/chunks/h7MUBmDw.js","app/immutable/chunks/CI4LmiiB.js","app/immutable/entry/app.CMLPzdNH.js","app/immutable/chunks/D9Z9MdNV.js","app/immutable/chunks/h7MUBmDw.js","app/immutable/chunks/DsnmJJEf.js","app/immutable/chunks/CfDQ-aYo.js","app/immutable/chunks/n0tuFE5V.js","app/immutable/chunks/r0bgQIrM.js","app/immutable/chunks/CI4LmiiB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/SchoolRoute/","/SchoolRoute/schools/","/SchoolRoute/transport/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
