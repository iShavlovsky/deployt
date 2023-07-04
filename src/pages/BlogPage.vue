<template>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div v-if="hasContent">
            <h1>{{headingBlog}}</h1>
            <div class="page-cover">
              <img :src="pageCover"
                   :alt="altCover">
            </div>
            <div class="rich-block"
                 v-html="bodyPage">
            </div>
          </div>
          <div v-else>Product not found</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, inject} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const stores = inject('$stores')

const contentStore = computed(() => stores.content)
const id = computed(() => route.params.id)

const articlesToRead = computed(() => contentStore.value.itemArticle('articles-to-reads', id.value));
const hasContent = computed(() => articlesToRead.value !== undefined)

if(!hasContent.value){
  await stores.content.load('blogPage');
}

function addImagePrefix(html) {
  const regex = /<img\s+src="([^"]+)"/g;
  return html.replace(regex, `<img src="${contentStore.value.url}$1"`);
}

const headingBlog = articlesToRead.value.attributes.heading
const pageCover = contentStore.value.url + articlesToRead.value.attributes.articlePageCover.data[0].attributes.url
const altCover = articlesToRead.value.attributes.articlePageCover.data[0].attributes.alternativeText
const bodyPage = addImagePrefix(articlesToRead.value.attributes.articleBody)

</script>

<style scoped lang="scss">
.page-cover {
  position: absolute;
}
</style>
