import initContentStore from './content.js'
import initSeoStore from './seo.js'
import { inject } from 'vue';


export const storesProvideKey = '$stores';

export default (api, storage, baseURL) => {

    let rootStore = {};
    rootStore.content = initContentStore(rootStore, api.content, baseURL);
    rootStore.seo = initSeoStore(rootStore);

    return {
        store: rootStore,
        install(app){
            app.provide(storesProvideKey, rootStore);
        }
    }
}

export function useStores(...names){
    let stores = inject(storesProvideKey);
    return names.map(name => stores[name]);
}
