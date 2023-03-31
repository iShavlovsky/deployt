<template>
  <main-nav-bar/>
  <main>
    <router-view/>

  </main>
</template>
<script>
import MainNavBar from "@/components/MainNavBar.vue";


export default {
  components: {
    MainNavBar
  }

};
</script>

<style lang="scss">

</style>
