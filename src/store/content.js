import {ref} from 'vue';

export default function content(rootStore, contentApi, baseURL) {
    const items = ref([]);
    const url = baseURL.replace('/api/', '');

    const item = key => items.value[key].map(item => {
        const articlebody = item.attributes.articleBody || '';
        // const link = item.attributes.link || '#';

        const link = item.attributes.link ? item.attributes.link :
          item.attributes.slug ? item.attributes.slug : '#';

        const imgUrl = item.attributes.img ? url + item.attributes.img.data.attributes.url :
          item.attributes.thumbnail ? url + item.attributes.thumbnail.data.attributes.url : '#';

        const imgAlt = item.attributes.img ? item.attributes.img.data.attributes.alternativeText :
          item.attributes.thumbnail ? url + item.attributes.thumbnail.data.attributes.alternativeText : '#';

        return {
            id: item.id,
            heading: item.attributes.heading,
            description: item.attributes.description,
            ...(link && {link}),
            ...(articlebody && {articlebody}),
            ...(imgUrl && {imgUrl}),
            ...(imgAlt && {imgAlt})
        };
    });

    const itemArticle = (collection, slug) => items.value[collection]?.find(item => item.attributes.slug === slug);
    const has = id => item(id) !== undefined;


    async function load(key) {
        items.value = await contentApi.all(key);
        console.log(items.value);
    }

    return {
        items,
        itemArticle,
        has,
        item,
        load,
        url
    };
}

