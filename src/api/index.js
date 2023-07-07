import createContentApi from './content.js';
import { inject } from 'vue';
import urls from "@/urls/index.js";
export const apiProvideKey = '$api';
export default http => {
	let content = createContentApi(http, urls);

	let api = {
		content
	};

	return {
		api,
		install(app){
			app.provide(apiProvideKey, api);
		}
	}
}

export function useApi(...names){
	let api = inject(apiProvideKey);
	return names.map(name => api[name]);
}
