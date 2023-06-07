<template>
  <div>
    <h1>Error 404</h1>
  </div>
</template>

<script setup>
import { useStores } from '@/store';

let [ seo ] = useStores('seo');

seo.setPage('Page not found', 'Page not found', 404);

</script>
