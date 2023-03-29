<template>
  <div class='example'>
    <h1> Привет </h1>
  </div>
  <div class='header'>
    <h2> Vite </h2>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
};
</script>
<style lang="scss">
.header {
  margin-top: em(16);
  display: flex;
  color: $primary-black;
}

@include mobile {
  .header {
    margin-top: px(16);
    color: $accent-green;
  }
}
</style>
