<template>
  <div :style="{ width: [wrapWidth], height: [wrapHeight] }"
       class="svg-w">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="100%"
         height="100%"
         :viewBox="viewBox"
         :aria-labelledby="iconName"
         fill="none">
      <g :fill="iconColor">
        <slot/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import useWindowSizes from "@/composables/useWindowSizes.js";
import {computed} from "vue";
const props = defineProps({
  iconName: {
    type: String,
    default: 'box'
  },
  iconWidth: {
    type: [Number, String],
    default: 24
  },
  iconHeight: {
    type: [Number, String],
    default: 24
  },
  iconColor: {
    type: String,
    default: 'currentColor'
  }
})


const screenSize = () => {
  let size = 'em';
  let factor = 16;
  const sizes = useWindowSizes()
  const width = sizes.vw

  if (width < 480) {
    size = 'px';
    factor = 1;
  }

  return {size, factor};
}
console.log()
const aspectRatio = props.iconWidth / props.iconHeight;
const viewBox = computed(() => (`0 0 ${props.iconWidth} ${props.iconWidth / aspectRatio}`));
const wrapWidth = computed(() => (`${props.iconWidth / screenSize().factor}${screenSize().size}`));
const wrapHeight = computed(() => (`${props.iconHeight / screenSize().factor}${screenSize().size}`));

</script>


<style scoped lang="sass">
.svg-w
  display: flex
  justify-content: center
  align-items: center
  align-content: center
</style>
