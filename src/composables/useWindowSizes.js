import { debounce } from "@/utils/events";
import { reactive, onMounted, onUnmounted } from "vue";

export default (delay = 300) => {
	const sizes = reactive(getSizes());
	const debouncedHandler = debounce(function(){
		let { vw, vh } = getSizes();
		sizes.vw = vw;
		sizes.vh = vh;
	}, delay);

	onMounted(() => window.addEventListener('resize', debouncedHandler));
	onUnmounted(() => window.removeEventListener('resize', debouncedHandler));

	return sizes;
};

function getSizes(){
	return {
		vw: window.innerWidth,
		vh: window.innerHeight
	}
}