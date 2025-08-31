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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/schools",
				pattern: /^\/schools\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/transport",
				pattern: /^\/transport\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
