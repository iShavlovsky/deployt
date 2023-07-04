<template>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div v-if="hasContent">
            <h1>{{ headingBlog }}</h1>
            <!--            <div class="page-cover">-->
            <!--              <img v-lazy="pageCover"-->
            <!--                   :alt="altCover">-->
            <!--            </div>-->
            <div class="rich-block"
                 v-html="bodyPage">
            </div>
            {{bodyPage2}}
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
import * as cheerio from 'cheerio';

const route = useRoute();
const stores = inject('$stores');

const contentStore = computed(() => stores.content);
const id = computed(() => route.params.id);

const articlesToRead = computed(() => contentStore.value.itemArticle('articles-to-reads', id.value));
const hasContent = computed(() => articlesToRead.value !== undefined);

if (!hasContent.value) {
  await stores.content.load('blogPage');
}

const replaces = {
  'h1': 'rich-class-h1',
  'h2': 'rich-class-h2',
  'h3': 'rich-class-h3',
  'h4': 'rich-class-h4',
  'h5': 'rich-class-h5',
  'h6': 'rich-class-h6',
  'p': 'rich-class-p',
  'img': 'rich-class-img',
  'ul': 'rich-class-ul'
};

function addPrefix(html) {
  const $ = cheerio.load(html, { decodeEntities: false });

  function traverse(node) {
    if (node.type === 'tag') {
      const replaceClass = replaces[node.name];

      if (replaceClass) {
        $(node).addClass(replaceClass);
      }

      if (node.name === 'img' && node.attribs['src']) {
        const { src } = node.attribs;
        if (src && !src.startsWith('http')) {
          node.attribs['src'] = `${contentStore.value.url}${src}`;
        }
      }
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse($.root()[0]);
  return $.html();
}


const headingBlog = articlesToRead.value.attributes.heading;
const pageCover = contentStore.value.url + articlesToRead.value.attributes.articlePageCover.data[0].attributes.url;
const altCover = articlesToRead.value.attributes.articlePageCover.data[0].attributes.alternativeText;
const bodyPage = addPrefix(articlesToRead.value.attributes.articleBody);
const bodyPage2 = articlesToRead.value.attributes.body2

console.log(bodyPage2);

</script>

<style scoped lang="scss">
.page-cover {
  position: absolute;
}
</style>
