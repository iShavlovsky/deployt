import createContentApi from './content.js';
import { inject } from 'vue';
<<<<<<< HEAD

=======
import urls from "@/urls/index.js";
>>>>>>> 0b8378a9 (обновил)
export const apiProvideKey = '$api';
export default http => {
	let content = createContentApi(http);

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
