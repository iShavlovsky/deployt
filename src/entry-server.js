import createApp from './app.js'

export default async function(context){
	let { app, router, stores, pinia } = await createApp(true);

	await stores.content.load();
	await router.push(context.url);
	await router.isReady();

	return { app, stores, pinia };
}
