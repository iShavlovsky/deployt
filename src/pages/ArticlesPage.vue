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

      <div v-if="articlesToRead">
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
      <div v-else>Articles not found</div>
    </div>
  </section>
</template>

<script setup>
import {computed, inject} from 'vue';
import UIArticleCard from '@/components/GlobalLibrary/UIArticleCard.vue';

const stores = inject('$stores');
const content = ['heading', 'description', 'slug', 'link'];
const img = {fields: ['name', 'alternativeText', 'url']};

const requests = {
  'articles-to-reads': {
    sort: 'createdAt:desc',
    pagination: {
      limit: 3
    },
    fields: content,
    populate: {
      thumbnail: img
    }
  }
};

await stores.content.load(requests);

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
