<template>
  <footer class="footer">
    <nav class='nav-footer'>
      <div class="footer-nav_logo-w">
        <a class="logo"
           href="#">deploy t/</a>
      </div>
      <div class="footer-2-col-content-w">
        <div>
          <h3 class="footer-title">Company</h3>
          <ul class="menu">
            <li v-for="(link, i) in linksCompany"
                :key="i"
                class="menu_item">
              <a class="menu_item-link"
                 :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="footer-title">Resources</h3>
          <ul class="menu">
            <li v-for="(link, i) in linksResources"
                :key="i"
                class="menu_item">
              <a class="menu_item-link"
                 :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 class="footer-title">About</h3>
        <ul class="menu">
          <li v-for="(link, i) in linksAbout"
              :key="i"
              class="menu_item">
            <a class="menu_item-link"
               :href="link.link">{{ link.name }}</a>
          </li>
          <li class="menu_item">
            <div class="social-media-links-w">
              <a v-for="(link, i) in socialLinks"
                 :key="i"
                 :href="link.link"
                 class="footer-social-link">
                <UIIconBase :iconWidth="link.size.w"
                            :iconHeight="link.size.h">

                  <path :d="link.path"/>

                </UIIconBase>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="footer-bot-info-w">
      <p class="text-base">© Deploy Team 2023 - One Horseguards Avenue, Westminster, London, SW1A 2HU</p>
      <p class="text-base">Design by <span class="brand-span">deploy t/</span></p>
    </div>
  </footer>
</template>

<script setup>
import UIIconBase from "@/components/GlobalLibrary/UIIconBase.vue";
import svg from "@/assets/svg/svgPaths.js";

const linksCompany = [
  {name: 'Who we are', link: "#"},
  {name: 'How we help', link: "#"},
  {name: 'What we build', link: "#"}
]

const linksResources = [
  {name: 'What’s happening', link: "#"},
  {name: 'What we think', link: "#"},
  {name: 'Want to know more?', link: "#"}
]

const linksAbout = [
  {name: 'What’s happening', link: "#"},
  {name: 'What we think', link: "#"}
]

const socialLinks = [
  {
    name: 'IN',
    link: "#",
    path: svg.in,
    size: {w: 32, h: 32}
  },
  {
    name: 'IN',
    link: "#",
    path: svg.vk,
    size: {w: 32, h: 32}
  }

]

</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: em(100) em(40) em(16) em(40);
  background-color: $c-primary-black;
  border-top: em(1) solid $c-primary-white;
  color: $c-primary-white;

  .nav-footer {
    @include m-col-3-grid(em(0))
  }

  .footer-nav_logo-w {
    a {
      @include m-custom-heading();
    }
  }

  a {
    @include m-txt-button();
    font-size: em(16);
    color: $c-primary-white;
  }

  .menu {
    @include m-col-1-grid(em(16), em(24))
  }

  .footer-2-col-content-w {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-column-gap: em(64);
  }

  .footer-title {
    @include m-custom-heading();
    font-size: em(16);
  }

  .svg-social-ico {
    width: em(32);
    height: em(32);
  }

  .social-media-links-w {
    display: grid;
    grid-template-columns: repeat( 3, minmax(0, max-content) );
    grid-column-gap: em(16);
  }

  .footer-bot-info-w {
    display: flex;
    margin-top: em(110);
    margin-bottom: em(8);
    padding-top: em(16);
    padding-bottom: em(16);
    justify-content: space-between;
    opacity: 0.5;
  }


  .brand-span {
    text-transform: uppercase;
  }
}
</style>
