<template>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div v-if="hasContent">
            <h1 class="text-heading-up2">
              {{ headingBlog }}
            </h1>
            <p class="text-base-up2">
              {{ descriptionBlog }}
            </p>
            <div class="page-cover">
              <img v-lazy="pageCover"
                   :alt="altCover">
            </div>
            <div class="rich-block"
                 v-html="bodyArticle">
            </div>
          </div>
          <div v-else>Product not found</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, inject} from 'vue';
import {useRoute} from 'vue-router';
import parseRichText from '@/plugins/parseRichText.js';

const route = useRoute();
const stores = inject('$stores');
await stores.content.load('blogPage');

const seoStore = computed(() => stores.seo);

const contentStore = computed(() => stores.content);
const hasContent = computed(() => contentStore.value.has('articles-to-reads') !== undefined);
const id = computed(() => route.params.id);
const baseUrlPrefix = computed(() => contentStore.value.url);
const articlesToRead = computed(() => contentStore.value.itemArticle('articles-to-reads', id.value));

const replaces = {
  'h1': 'rich-class-h1',
  'h2': 'rich-class-h2 text-heading-up2',
  'h3': 'rich-class-h3',
  'h4': 'rich-class-h4',
  'h5': 'rich-class-h5',
  'h6': 'rich-class-h6',
  'p': 'rich-class-p',
  'img': 'rich-class-img',
  'ul': 'rich-class-ul'
};

const i = articlesToRead.value.attributes
const headingBlog = i.heading;
const descriptionBlog = i.description;
const pageCover = baseUrlPrefix.value + i.articlePageCover.data[0].attributes.url;
const altCover = i.articlePageCover.data[0].attributes.alternativeText;
const htmlString = i.articleBody
const bodyArticle = computed(() =>
    parseRichText(htmlString, replaces, baseUrlPrefix.value));


seoStore.value.setPage(headingBlog, descriptionBlog, 200);
</script>

<style scoped lang="scss">
.page-cover {
  position: relative;
}
</style>
