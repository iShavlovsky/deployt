<template>
  <a class="big_card_lb"
     :href="props.link">
    <div class="our-work-image-w">
      <img class="our-work-image"
           v-lazy="props.imgUrl"
           :alt="props.imgAlt">
    </div>
    <div class="grid-main">
      <div></div>
      <div class="our-work-card-info-w">
        <h3 class="text-up1">{{ props.heading }}</h3>
        <p class="text-base">{{ props.description }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: '#'
  },
  imgAlt: {
    type: String,
    default: 'decorative'
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">
.big_card_lb {
  color: $primary-white;
}

.our-work-image-w {
  width: 100%;
  height: em(410);
  overflow: hidden;
}

.grid-main {
  @include col-3-grid(em(32));
  margin-bottom: em(96);
}

.our-work-card-info-w {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: em(16);
  grid-column-start: span 2;
  grid-column-end: span 3;
}

.our-work-image {
  object-fit: cover;
  height: 140%;
}
</style>
