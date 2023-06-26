import { onMounted, onUnmounted } from 'vue';

export default function useClickOutside(el, callback) {
	const handleClickOutside = event => {
		if (!event.composedPath().includes(el.value)) {
			callback(event);
		}
	};

	onMounted(() => {
		document.addEventListener('click', handleClickOutside);
	});

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside);
	});
}
