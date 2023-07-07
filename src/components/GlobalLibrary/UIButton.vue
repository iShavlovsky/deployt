<template>
  <div :class="props.btnType">
    <a class="link"
       v-if="props.btnDestination === 1">
      {{ props.title }}
    </a>
    <RouterLink class="router-link"
                v-else-if="props.btnDestination === 2"
                to=""> {{ props.title }}
    </RouterLink>
    <button class="button-link"
            type="button"
            v-else>
      {{ props.title }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  btnDestination: {
    type: Number,
    default: 1
  },
  btnType:{
    type: String,
    default: 'main-button'
  },
  title:{
    type: String,
    default: 'Button1'
  }
})

</script>

<style scoped lang="scss">

.main-button {
  background: $c-primary-white;
  border: $c-primary-white em(1) solid;
  :hover {
    background: $c-accent-blue;
  }
}

.stroke-button {
  background: $c-primary-black;
  border: $c-primary-white em(1) solid;
  :hover {
    background: $c-accent-blue;
  }
}


.link{

}

.router-link{

}

.button-link{

}
</style>
