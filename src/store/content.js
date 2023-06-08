
import { ref } from 'vue';

export default function content(rootStore, contentApi) {
    const items = ref([]);

    const item = key => items.value[0][key].map(item => ({
                id: item.id,
                heading: item.attributes.heading,
                description: item.attributes.description
            }));

    async function load() {
        let response = await contentApi.all();
        items.value.push(response)
        console.log(items.value)
    }

    return {
        items,
        item,
        load
    };
}
