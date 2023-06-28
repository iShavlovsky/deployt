import createStorage from '@/plugins/storage.js';
import createHttp from '@/plugins/http.js';
import createApiPlugin from '@/api/index.js';
import createStoresPlugin from '@/store/index.js';
import createRouter from '@/router/index.js';
import seoTagsConnector from '@/connectors/seo-tags.js'

import {createApp, createSSRApp} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/components/GlobalLibrary';
export default async (isSsr = false) => {
    const storageDriver = isSsr ? {
        getItem: () => null,
        setItem: () => null,
        removeItem: () => null
    } : localStorage;

    const storage = createStorage(storageDriver);
    // const baseURL = ' https://api.deployteam.ru/api/';
    const baseURL = ' http://localhost:1337/api/';
    const http = createHttp({ prefixUrl: baseURL });
    const apiPlugin = createApiPlugin(http);
    const storesPlugin = createStoresPlugin(apiPlugin.api, storage, baseURL);
    const stores = storesPlugin.store;
    const router = createRouter(isSsr);


    const createAppByMode = import.meta.env.DEV ? createApp : createSSRApp;
    const app = createAppByMode(App);

    components.forEach(component => {
        app.component(component.__name, component);
    });

    app.use(createPinia());
    app.use(router);

    app.use(apiPlugin);
    app.use(storesPlugin);

    app.provide('isSsr', isSsr);
    app.provide('$storage', storage);


    if(!isSsr){
        seoTagsConnector(stores.seo, document);
    }

    return { app, stores, router };
}


