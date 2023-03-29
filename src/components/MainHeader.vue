<template>
  <div class='example'>
    <h1> Привет </h1>
  </div>
  <div class='header'
       id="header">
    <h2> Vite </h2>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
};
</script>
<style lang="scss">
.example {
  display: grid;
  transition: all .5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}

.header {
  display: flex;
  color: $primary-color;
}
</style>
