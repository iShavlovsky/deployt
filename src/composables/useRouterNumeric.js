import { computed } from "vue";
import { useRoute } from "vue-router";

export default name => {
	const route = useRoute();
	let str = computed(() => route.params[name]);
	let isValid = computed(() => /^[1-9]+\d*$/.test(str.value));
	let value = computed(() => isValid.value ? parseInt(str.value) : null);
	return { str, isValid, value };
};