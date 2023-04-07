<template>
  <header class="nav-bar">
    <nav class='nav'>
      <div class="nav_logo-w">
        <a class="logo"
           href="#">deploy t/</a>
      </div>
      <ul class="menu">
        <li class="menu_item">
          <a class="menu_item-link"
             href="#">Who we are</a>
        </li>
        <li class="menu_item">
          <a class="menu_item-link"
             href="#">Calculator</a>
        </li>
        <li class="menu_item">
          <a class="menu_item-link"
             href="#">Contact us</a>
        </li>
        <li class="menu_item">
          <a class="menu_item-link"
             href="#">Cases</a>
        </li>
        <li class="menu_item">
          <a class="menu_item-link"
             href="#">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNavBar'
};
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
