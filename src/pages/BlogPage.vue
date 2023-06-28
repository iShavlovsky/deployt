<template>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div v-if="hasContent">
            <div v-html="bodyPage"></div>
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
const validId = computed(() => /^[1-9]+\d*$/.test(id.value))
const articlesToRead = computed(() => contentStore.value.itemBlogPageContent(id.value));
const hasContent = computed(() => validId.value && articlesToRead.value !== undefined)

if(!hasContent.value){
  await stores.content.load('blogPage');
}

function addImagePrefix(html) {
  const regex = /<img\s+src="([^"]+)"/g;
  return html.replace(regex, `<img src="${contentStore.value.url}$1"`);
}

const bodyPage = addImagePrefix(articlesToRead.value.attributes.articleBody)

</script>

<style scoped lang="scss">

</style>
