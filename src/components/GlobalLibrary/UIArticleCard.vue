<template>
  <RouterLink :to="{
                name: 'articles.item',
                params: { id: props.idPost } }"
              class="small_card_lb">
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
        <!--        <div v-html="renderedMarkdown"></div>-->
      </div>
    </div>
  </RouterLink>
</template>

<script setup>

import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
md.use(MarkdownItAttrs , {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []
});

const props = defineProps({
  idPost: {
    type: [String, Number],
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
// const renderedMarkdown = md.render(props.body);
// console.log(renderedMarkdown)

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
