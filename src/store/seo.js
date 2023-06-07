import { ref } from 'vue';

export default function seo(rootStore) {
	const title = ref('');
	const description = ref('');
	const status = ref(200);
	const afterPageUpdatedListeners = [];
	const baseUrl = ref('');

	function afterPageUpdated(callback) {
		afterPageUpdatedListeners.push(callback);
	}

	function setPage(
		newTitle,
		newDescription = 'We are unrealistically good at what we do and we are on fire with digital products. Develop something together!',
		newStatus = 200,
		newUrl = ''
	) {
		const isServer = typeof window === 'undefined';
		const url = isServer ? 'server' : window.location;
		title.value = newTitle;
		description.value = newDescription;
		status.value = newStatus;
		baseUrl.value = url + newUrl;
		afterPageUpdatedListeners.forEach(listener => listener());
	}

	return {
		title,
		description,
		status,
		baseUrl,
		afterPageUpdated,
		setPage
	};
}
