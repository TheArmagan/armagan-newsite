
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_prerendering } from '../../node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<link href=\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\" rel=\"stylesheet\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap\" rel=\"stylesheet\">\r\n\t\t<script>\r\n\t\t\tconsole.log('%cCreated by Kıraç Armağan Önal 🦄', 'padding: 0.3rem 1.5rem; font-family: Consolas; font-size: 1.2em; line-height: 1.4em; color: white; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);');\r\n\t\t</script>\r\n\t\t<style>\r\n\t\t\t* {\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\toutline: none;\r\n\t\t\t\tbox-sizing: border-box;\r\n\r\n\t\t\t}\r\n\r\n\t\t\thtml,\r\n\t\t\tbody {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tfont-family: 'Roboto Mono', monospace;\r\n\t\t\t}\r\n\r\n\t\t\ta {\r\n\t\t\t\tcolor: currentColor;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\r\n\t\t\t.hidden {\r\n\t\t\t\tdisplay: none !important;\r\n\t\t\t}\r\n\r\n\t\t\t.half-opacity {\r\n\t\t\t\topacity: 0.5 !important;\r\n\t\t\t}\r\n\r\n\t\t\t::-webkit-scrollbar {\r\n\t\t\t\twidth: 11px;\r\n\t\t\t}\r\n\r\n\t\t\t::-webkit-scrollbar-track {\r\n\t\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.05);\r\n\t\t\t\tborder: solid 2px transparent;\r\n\t\t\t\tborder-radius: 11px;\r\n\t\t\t}\r\n\r\n\t\t\t::-webkit-scrollbar-thumb {\r\n\t\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.1);\r\n\t\t\t\tborder: solid 2px transparent;\r\n\t\t\t\tborder-radius: 11px;\r\n\t\t\t}\r\n\r\n\t\t\t::-webkit-scrollbar-thumb:hover {\r\n\t\t\t\tbox-shadow: inset 0 0 11px 11px rgba(0, 0, 0, 0.2);\r\n\t\t\t}\r\n\r\n\t\t\t::-webkit-scrollbar-button {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\r\n\t\t\t::selection {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tbackground: #195bff;\r\n\t\t\t\ttext-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);\r\n\t\t\t}\r\n\t\t\r\n\t\t</style>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div>" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			csrf: {
				check_origin: true,
			},
			dev: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				}) ?? { message: 'Internal Error' };
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: null,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			trailing_slash: "never"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("./hooks.js");

			// TODO remove this for 1.0
			if (module.externalFetch) {
				throw new Error('externalFetch has been removed — use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details');
			}

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
