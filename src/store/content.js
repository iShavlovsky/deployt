import {ref} from 'vue';

export default function content(rootStore, contentApi, baseURL) {
    const items = ref({});
    const url = baseURL.replace('/api/', '');

    const item = key => items.value[key].map(item => {
        const i = item.attributes;
        const articlebody = i.articleBody || '';

        const link = i.link ? i.link : i.slug ? i.slug : '#';

        const imgUrl = i.img ? url + i.img.data.attributes.url :
          i.thumbnail ? url + i.thumbnail.data.attributes.url : '#';

        const imgAlt = i.img ? i.img.data.attributes.alternativeText :
          i.thumbnail ? i.thumbnail.data.attributes.alternativeText : 'decorative';

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
    const has = nameCol => Object.keys(items.value).find(collection => collection === nameCol);

    async function load(keys) {

        items.value = await contentApi.all(keys)
        // let matchFound = false;
        // for (let key in items.value) {
        //     if (key in response) {
        //         items.value[key] = response[key];
        //         matchFound = true;
        //         console.log(key,1);
        //     }
        // }
        // if (!matchFound) {
        //     items.value = response
        //     console.log(items.value, 2);
        // }
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

