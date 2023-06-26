<template>
  <a class="small_card_lb">
    <div class="small-card-img-w">
      <img class="small-card-img"
           :src="props.imgUrl"
           :alt="props.imgAlt">
    </div>
    <div>
      <div></div>
      <div class="article-card-info-w">
        <h3 class="uor-work_title">{{ props.heading }}</h3>
        <p class="our-work_description"> {{ props.description }} </p>
        <p class="our-work_description"> {{ props.artbody }} </p>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default: ''
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
  },
  artbody: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">

.small_card_lb{
    color: $primary-white;
}
.small-card-img-w {
    width: 100%;
    height: em(220);
    overflow: hidden;
}

.uor-work_title {
        @include h3-small();
}
.article-card-info-w {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: em(16);
    margin-top: em(16);
}

.our-work_description {
        @include txt-body();
}
.small-card-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>
