<template>
  <RouterLink :to="{
                name: 'articles.item',
                params: { id: props.slug } }"
              class="small_card_lb">
    <div class="small-card-img-w">
      <img class="small-card-img"
           v-lazy="props.imgUrl"
           :alt="props.imgAlt">
    </div>
    <div>
      <div></div>
      <div class="article-card-info-w">
        <h3 class="uor-work_title">{{ props.heading }}</h3>
        <p class="our-work_description"> {{ props.description }} </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>

const props = defineProps({
  slug: {
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
  },
  body: {
    type: String,
    required: false
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
.my-paragraph {
  /* Ваши стили для параграфов */
}

</style>
