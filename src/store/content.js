import {ref} from 'vue';

export default function content(rootStore, contentApi, baseURL) {
    const items = ref([]);
    const url = baseURL.replace('/api/', '');
    const item = key => items.value[key].map(item => ({
                link: item.attributes.link ? item.attributes.link : '#',
                id: item.id,
                heading: item.attributes.heading,
                description: item.attributes.description,
                artbody: item.attributes.ArticleBody ? item.attributes.ArticleBody : '',
                imgUrl: item.attributes.img ? url+item.attributes.img.data.attributes.url : null,
                imgAlt: item.attributes.img ? item.attributes.img.data.attributes.alternativeText : null
            }));

    async function load(key) {
        items.value = await contentApi.all(key)
    }

    return {
        items,
        item,
        load
    };
}
