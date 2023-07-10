import useWindowResizes from '@/composables/useWindowResizes.js';
import {reactive} from 'vue';

export default () => {
  const item = reactive({size:'em', factor: 16});
  const sizes = useWindowResizes()
  const width = sizes.vw

  if (width < 480) {
    item.size = 'px';
    item.factor = 1;
  }
  return item;
}


