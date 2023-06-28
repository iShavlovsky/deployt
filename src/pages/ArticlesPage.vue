<template>
  <section class="section">
    <div class="container">

      <h1 class="main-h1">
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

      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.main-h1 {
  @include main-h1(em(100));
}

.articles-sort-btns-w {
  grid-column-start: span 1;
  grid-column-end: span 2;
}

.articles-sort-w {
  @include col-3-grid(em(96))
}
</style>
