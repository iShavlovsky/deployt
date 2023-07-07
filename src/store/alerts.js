import { ref } from 'vue';

export default function alerts(rootStore) {
	let id = 0;
	const alerts = ref([]);

	function add(text, critical){
		id++;
		let alert = { id, text, critical };
		alerts.value.push(alert);

		if(!critical){
			setTimeout(() => remove(alert.id), 5000);
		}
	}

	function remove(id){
		alerts.value = alerts.value.filter(alert => alert.id !== id);
	}

	return {
		alerts,
		add,
		remove
	};
}
