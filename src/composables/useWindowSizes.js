import { debounce } from "@/utils/events";
import { reactive, inject } from "vue";

export default (delay = 300) => {
	const isSsr = inject('isSsr');
	const sizes = reactive(getSizes(isSsr));

	const debouncedHandler = debounce(function(){
		let { vw, vh } = getSizes(isSsr);
		sizes.vw = vw;
		sizes.vh = vh;
	}, delay);

	if(!isSsr){
		window.addEventListener('resize', debouncedHandler);
		window.removeEventListener('resize', debouncedHandler);
	}

	return sizes;
};

function getSizes(isSsr){
	return {
		vw: isSsr ? 1280 : window.innerWidth,
		vh: isSsr ? 720 : window.innerHeight
	}
}
