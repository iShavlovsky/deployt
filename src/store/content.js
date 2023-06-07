
import { ref } from 'vue';

export default function content(rootStore, contentApi) {
    const items = ref([]);

    const item = id => items.value[1].find(pr => pr.id === id);

    async function load() {
        let response = await contentApi.all();
        items.value = response.map(item => ({
            id: item.id,
            heading: item.attributes.heading,
            description: item.attributes.description
        }));
    }

    return {
        items,
        item,
        load
    };
}
