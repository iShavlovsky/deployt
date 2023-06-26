<template>
  <main-nav-bar/>
  <main>
    <Suspense>
      <template #default>
        <router-view/>
      </template>
      <template #fallback>
        <div class="spinner-w">
          <u-i-spinner :animation-duration="2000"
                       :size="200"
                       :color="'#F9FEFF'"/>
        </div>
      </template>
    </Suspense>
  </main>
  <main-footer/>
</template>

<script setup>
import MainNavBar from "@/components/MainNavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import UISpinner from "@/components/GlobalLibrary/UISpinner.vue";
</script>

<style lang="scss">
.spinner-w {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
