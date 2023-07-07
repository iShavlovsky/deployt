<template>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div v-if="articlesToRead">
            <h1 class="text-heading-up2">
              {{ content.headingBlog }}
            </h1>
            <p class="text-base-up2">
              {{ content.descriptionBlog }}
            </p>
            <div class="page-cover">
              <img v-lazy="content.pageCover"
                   :alt="content.altCover">
            </div>
            <div class="rich-block"
                 v-html="content.bodyArticle">
            </div>
          </div>
          <div v-else>Article not found</div>
        </div>
      </div>
    </div>
    <table class="rich-class-table"></table>
  </section>
</template>

<script setup>
import {computed, inject} from 'vue';
import {useRoute} from 'vue-router';
import parseRichText from '@/plugins/parseRichText.js';

const route = useRoute();
const stores = inject('$stores');
const seoStore = computed(() => stores.seo);
const contentStore = computed(() => stores.content);
const id = computed(() => route.params.id);

const contentFields = ['heading', 'description', 'slug', 'link', 'articleBody'];
const imgFields = {fields: ['name', 'alternativeText', 'url']};

const requests = {
  'articles-to-reads': {
    filters: {
      slug: {
        $eq: id.value
      }
    },
    fields: contentFields,
    populate: {
      thumbnail: imgFields,
      articlePageCover: imgFields
    }
  }
};

await stores.content.load(requests);

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
  'ul': 'rich-class-ul',
  'table': 'rich-class-table'
};

const contentsCreate = () => {
  const i = articlesToRead.value.attributes;
  const htmlString = i.articleBody;
  return {
    headingBlog: i.heading,
    descriptionBlog: i.description,
    pageCover: baseUrlPrefix.value + i.articlePageCover.data[0].attributes.url,
    altCover: i.articlePageCover.data[0].attributes.alternativeText,
    bodyArticle: computed(() => parseRichText(htmlString, replaces, baseUrlPrefix.value))
  };
};

const content = articlesToRead.value ? contentsCreate() : undefined;


const title = content ? content.headingBlog : 'Article not found';
const description = content ? content.descriptionBlog : 'Article not found';
const status = content ? 200 : 404;
seoStore.value.setPage(title, description, status);

</script>

<style lang="scss">
.page-cover {
  position: relative;
}

.rich-class-table {
  position: absolute;
  top: 0;
}
</style>
