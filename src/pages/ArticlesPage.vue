<template>
  <section class="section">
    <div class="container">

      <h1 class="text-heading-up1">
        Our development articles
      </h1>

      <div class="articles-sort-w">
        <div class="articles-sort-btns-w">
          <button type="button">button</button>
        </div>

        <div class="article-seacrh-w">
          <input type="text">
        </div>

      </div>

      <div class="post-grid">
        <UIArticleCard v-for="articles in articlesToRead"
                       :key="articles.id"
                       :slug="articles.link"
                       :imgUrl="articles.imgUrl"
                       :imgAlt="articles.imgAlt"
                       :heading="articles.heading"
                       :description="articles.description"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import {computed, inject} from 'vue';
import UIArticleCard from '@/components/GlobalLibrary/UIArticleCard.vue';


const stores = inject('$stores');
await stores.content.load('blogPage');

const contentStore = computed(() => stores.content);
const seoStore = computed(() => stores.seo);

const articlesToRead = computed(() => contentStore.value.item('articles-to-reads'));

seoStore.value.setPage('Articles',
    'Transform your ideas into digital realities with our skilled team, delivering\n' +
    'cutting-edge solutions with precision and passion.', 200);
</script>

<style lang="scss">
.main-h1 {
  @include m-main-h1(em(100));
}

.articles-sort-btns-w {
  grid-column-start: span 1;
  grid-column-end: span 2;
}

.articles-sort-w {
  @include m-col-3-grid(em(96))
}
</style>
