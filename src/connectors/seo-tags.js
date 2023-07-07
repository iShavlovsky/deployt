export default (useSeoStore, document) => {
	const seoStore = useSeoStore;

	seoStore.afterPageUpdated(function () {
		const title = seoStore.title.value;
		const description = seoStore.description.value;
		const url = seoStore.baseUrl.value;

		document.querySelector('title').innerHTML = title;
		document.querySelector('meta[name="description"]').setAttribute('content', `${description}`);
		document.querySelector('link[rel="canonical"]').setAttribute('href', `${url}`);
	});

	// same stories^ yam, ga -> send event page
}
