
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const TERM_PROGRAM: string;
	export const EnableConfiguratorSupport: string;
	export const VK_ICD_FILENAMES: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const SDL_GAMECONTROLLER_IGNORE_DEVICES: string;
	export const TERM: string;
	export const DOTNET_ROLL_FORWARD: string;
	export const SHELL: string;
	export const STEAM_DYLD_INSERT_LIBRARIES: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GEODE_SDK: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const LC_ALL: string;
	export const ENABLE_VK_LAYER_VALVE_steam_overlay_1: string;
	export const SteamAppUser: string;
	export const USER: string;
	export const SteamVirtualGamepadInfo: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const SteamClientLaunch: string;
	export const SteamUser: string;
	export const dotnet_dir: string;
	export const SDL_GAMECONTROLLER_ALLOW_STEAM_VIRTUAL_GAMEPAD: string;
	export const PATH: string;
	export const SteamGameId: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const STEAM_CLIENT_CONFIG_FILE: string;
	export const npm_config_npm_version: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const SDL_JOYSTICK_HIDAPI_STEAMXBOX: string;
	export const npm_config_node_gyp: string;
	export const SteamAppId: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const dotnet_version: string;
	export const VSCODE_INJECTION: string;
	export const BREAKPAD_DUMP_LOCATION: string;
	export const SteamOverlayGameId: string;
	export const HOME: string;
	export const SHLVL: string;
	export const Steam3Master: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const FNA_GRAPHICS_ENABLE_HIGHDPI: string;
	export const STEAM_APP_BUNDLE_PATH: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const FNA_WORKAROUND_WINDOW_RESIZABLE: string;
	export const SteamEnv: string;
	export const SECURITYSESSIONID: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		TERM_PROGRAM: string;
		EnableConfiguratorSupport: string;
		VK_ICD_FILENAMES: string;
		NODE: string;
		INIT_CWD: string;
		SDL_GAMECONTROLLER_IGNORE_DEVICES: string;
		TERM: string;
		DOTNET_ROLL_FORWARD: string;
		SHELL: string;
		STEAM_DYLD_INSERT_LIBRARIES: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		GEODE_SDK: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		LC_ALL: string;
		ENABLE_VK_LAYER_VALVE_steam_overlay_1: string;
		SteamAppUser: string;
		USER: string;
		SteamVirtualGamepadInfo: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		VSCODE_PROFILE_INITIALIZED: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		SteamClientLaunch: string;
		SteamUser: string;
		dotnet_dir: string;
		SDL_GAMECONTROLLER_ALLOW_STEAM_VIRTUAL_GAMEPAD: string;
		PATH: string;
		SteamGameId: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		_: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		STEAM_CLIENT_CONFIG_FILE: string;
		npm_config_npm_version: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		SDL_JOYSTICK_HIDAPI_STEAMXBOX: string;
		npm_config_node_gyp: string;
		SteamAppId: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		dotnet_version: string;
		VSCODE_INJECTION: string;
		BREAKPAD_DUMP_LOCATION: string;
		SteamOverlayGameId: string;
		HOME: string;
		SHLVL: string;
		Steam3Master: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_config_cache: string;
		LOGNAME: string;
		FNA_GRAPHICS_ENABLE_HIGHDPI: string;
		STEAM_APP_BUNDLE_PATH: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		FNA_WORKAROUND_WINDOW_RESIZABLE: string;
		SteamEnv: string;
		SECURITYSESSIONID: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
