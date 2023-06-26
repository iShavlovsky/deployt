<template>
  <header class="nav-bar">
    <nav class='nav'>
      <div class="nav_logo-w">
        <a class="logo"
           href="#">deploy t/</a>
      </div>
      <ul class="menu">
        <li v-for="(link, i) in linksNavbar"
            :key="i"
            class="menu_item">
          <a class="menu_item-link"
             :href="link.link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const linksNavbar = [
  { name:'Who we are', link: "#" },
  { name:'Calculator', link: "#" },
  { name:'Contact us', link: "#" },
  { name:'Cases', link: "#" },
  { name:'Blog', link: "#" }
]
</script>

<style lang="scss">
.nav-bar{
  position: absolute;
  bottom: auto;
  width: 100%;
  padding:em(16) em(40) em(16) em(40);
  backdrop-filter: blur(5px);
  background-color: rgba(14, 14, 14, 0.7);

  .nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .menu{
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: stretch;

      .menu_item{
        margin-right: em(32);

        a{
          @include txt-button();
          color: $primary-white;
        }
      }
    }
  }
}
</style>
