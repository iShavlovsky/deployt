import createApp from './app.js'

(async function(){
	let { app, router, stores, pinia } = await createApp();

	// if(window.__SSR_STATE__){
	// 	for(let module in window.__SSR_STATE__){
	// 		pinia.state.value[module] = window.__SSR_STATE__[module];
	// 	}
	// }
	// else{
	// 	await stores.content.load();
	// }

	await router.isReady();

	app.mount('#app', import.meta.env.PROD);

	// window.addEventListener('storage', function(e){
	// 	if(e.key === 'ACCESS_TOKEN' && typeof e.newValue !== typeof e.oldValue){
	// 		/* stores.auth().init(); */
	// 		router.go();
	// 	}
	// });

})();
