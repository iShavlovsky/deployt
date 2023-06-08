import createApp from './dist-ssr/entry-server.js';
import { renderToString } from 'vue/server-renderer'
import express from 'express';
import { readFileSync } from 'fs'

const template = readFileSync('./dist/index.html').toString();
const server = express();
const port = 3000;

server.use('/assets', express.static('./dist/assets'));
server.use('/favicon.ico', express.static('./dist/favicon.ico'));
server.use('/sitemap.xml', express.static( './dist/sitemap.xml'));
server.get('*', async function(req, resp){
	resp.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';base-uri 'self';form-action 'self'");
	// eslint-disable-next-line no-unused-vars
	const { app, stores, pinia } = await createApp({ url: req.url });
	renderToString(app).then(html => {

		let seoStore = stores.seo;
		let title = seoStore.title.value
		let description = seoStore.description.value
		let baseUrl

		if(seoStore.baseUrl.value === 'server') {
			const {protocol} = req;
			const {hostname} = req;
			baseUrl = `${protocol}://${hostname}:3000/`;
		}

		if(seoStore.status.value !== 200){
			resp.status(seoStore.status.value);
		}

		let page = template.replace('<!--ssr-->', html)
			.replace(/(<title>).+(<\/title>)/, `<title>${title}</title>`)
			.replace(/(<meta name="description" content=").+(">)/, `$1${description}$2`)
			.replace(/(<link rel="canonical" href=").+(">)/, `$1${baseUrl}$2`);

		resp.end(page);
	})
});
server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

