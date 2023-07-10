import {ref} from 'vue';

export default function content(rootStore, contentApi, baseURL) {
    const items = ref({});
    const url = baseURL.replace('/api/', '');

    function addPrefixImg(filePath) {
        if (filePath){
            const filename = filePath.split('/').pop();
            const prefixedFilename = 'large_' + filename;
            return  filePath.replace(filename, prefixedFilename);
        }
        return undefined;
    }

    function destructureObject(item) {
        const { attributes: { heading, description, link, img, thumbnail, slug, articleBody, articlePageCover }, id } = item;
        const articlebody = articleBody || '';
        // const pageCover = articlePageCover?.data.attributes.url || '';
        const imgUrl = url + (addPrefixImg(img?.data.attributes.url) || addPrefixImg(thumbnail?.data.attributes.url) || '#');
        const imgAlt = img?.data.attributes.alternativeText || thumbnail?.data.attributes.alternativeText || 'decorative';
        const itemLink = link || slug || '#';
        console.log(articlePageCover);
        return {
            id,
            heading,
            description,
            link: itemLink,
            ...(articlebody && { articlebody }),
            // ...(pageCover && { pageCover }),
            ...(imgUrl && { imgUrl }),
            ...(imgAlt && { imgAlt })
        };
    }

    const item = key => items.value[key].map(item => {
        return destructureObject(item)
    });

    const itemArticle = (collection, slug) => {
        const item = items.value[collection]?.find(item => item.attributes.slug === slug)
        return destructureObject(item)
    };
    const has = nameCol => Object.keys(items.value).find(collection => collection === nameCol);

    async function load(requests) {
        const missingKeys = Object.keys(requests).filter(key => !(key in items.value));
        const updateKeys = Object.keys(requests).filter(key => key in items.value && requests[key].filters && requests[key].filters.slug);

        // console.log('Проверка пропущенных ключей:', missingKeys);
        // console.log('Проверка ключей для обновления:', updateKeys);

        if (missingKeys.length === 0 && updateKeys.length === 0) {
            // console.log('Все запрошенные данные уже присутствуют в store:', Object.keys(items.value));
            return;
        }

        const missingRequests = Object.fromEntries(
          Object.entries(requests).filter(([key]) => missingKeys.includes(key) || updateKeys.includes(key))
        );

        // console.log('Запрашиваем отсутствующие данные:', missingRequests);
        const response = await contentApi.all(missingRequests);

        for (const key in response) {
            if (updateKeys.includes(key)) {
                const {filters} = requests[key];
                const slug = filters.slug.$eq;
                // console.log(`Обновление элемента с slug: ${slug}`);
                const existingItem = items.value[key].find(item => item.slug === slug);
                if (existingItem) {
                    const updatedItem = response[key].find(item => item.slug === slug);
                    Object.assign(existingItem, updatedItem);
                    console.log(`Элемент с slug: ${slug} обновлен`);
                }
            }
        }

        items.value = {...items.value, ...response};
        // console.log('Обновление store выполнено:', Object.keys(items.value));
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

