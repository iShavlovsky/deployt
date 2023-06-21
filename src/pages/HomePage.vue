<template>
  <section class="section">
    <div class="header-animation-w">
      <img src="../assets/img/main.webp"
           alt="decorative">
    </div>
    <div class="container">
      <header class="main-header">
        <h1 class="main-h1">
          We are <span>software engineers</span>
        </h1>
        <div class="main-header_description-w">
          <div class="main-header_description-text">
            <p>Transform your ideas into digital realities with our skilled team, delivering cutting-edge
              solutions with precision and passion.
            </p>
          </div>
          <a href="#"
             class="main-header_btn-link-w">
            <span>Let's make some wild stuff</span>
          </a>
        </div>
      </header>
    </div>
  </section>
  <section class="section">
    {{contents}}
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <h2>what we do</h2>
          <div class="heading-section_w">
            <div class="heading-section_description-content">
              <p>Custom digital solutions for web and mobile. From no-code to custom code, we've got you
                covered.</p>
            </div>
            <div class="error"
            >

            </div>
            <div class="cards-w">
              <article v-for="feature in whatWeDos"
                       :key="feature.id"
                       class="card">
                <h3 class="card_name">{{ feature.heading }}</h3>
                <p class="card_description">{{ feature.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <h2>tech stack</h2>
          <div>
            <div class="heading-section_description-content">
              <p>Bring your ideas to life with our expert development team. We craft modern websites and
                apps using the latest frameworks and tools, so your business can thrive in the digital
                domain.</p>
            </div>
            <div>
              <u-i-accordion v-for="(dd, index) in techStacks"
                             :key="dd.id"
                             :heading="dd.heading"
                             :description="dd.description"
                             :index="index"
                             :initialOpenIndex="0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <h2>our work</h2>
          <div>
            <div class="heading-section_description-content">
              <p>That selection of works showcases some of the latest projects we've we've been up to.</p>
            </div>            
          </div>
        </div>
        <div>
          <UIOurWorkCard/>
        </div>
        <div>
          
        </div>
<<<<<<< HEAD
      </div>
    </div>
  </section>
  <section class="section cta">
    <div class="container">

    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div class="col-3-grid">           
            <h2>Different things to read</h2>
              <div class="heading-section_description-content">
                <p>We write articles based on our own experience 
                  and the experience of leading IT industry experts. Sometimes articles are written 
                  by an artificial intelligence, but the articles are still edited by us.</p>
              </div>
          </div>          
        </div>
        <div class="col-3-grid">
            <UIArticleCard/> <UIArticleCard/> <UIArticleCard/>
          </div>
=======
>>>>>>> 5b18eca13401246b4dc91881cf0a236f1deda0d3
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, inject} from 'vue'
import UIAccordion from "@/components/GlobalLibrary/UIAccordion.vue";
import UIOurWorkCard from "@/components/GlobalLibrary/UIOurWorkCard.vue";
<<<<<<< HEAD
import UIArticleCard from "@/components/GlobalLibrary/UIArticleCard.vue";
=======
>>>>>>> 5b18eca13401246b4dc91881cf0a236f1deda0d3

const stores = inject('$stores')
const whatWeDos = computed(() => stores.content.item('what-we-dos'));
const techStacks = computed(() => stores.content.item('tech-stacks'));
const accomplishedProjects = computed(() => stores.content.item('accomplished-projects'));
stores.seo.setPage('We are software engineers', 'We are software engineers', 200)

</script>


<style lang="scss">
.header-animation-w {
  position: absolute;
  max-height: 70vh;
  overflow: hidden;
  z-index: -1;
}

.section.cta {
  display: flex;
  height: 100vh;
  min-height: em(700);
  align-items: center;
  background-image: url("../assets/img/cta_image.jpg");
  background-position: 50% 50%;
  background-size: cover;
}

.main-header {
  position: relative;
  padding-top: em(365);
  color: $primary-white;

  .main-h1 {
    @include main-h1();

    span {
      color: $primary-white;
      white-space: nowrap;
    }
  }

  .main-header_description-w {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    margin-top: em(20);

    .main-header_description-text {
      max-width: em(394);
      margin-right: em(82);

      p {
        @include description-low()
      }
    }

    .main-header_btn-link-w {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: em(16) em(110) em(16) em(110);
      @include border-white();
      color: $primary-white;

      span {
        @include txt-button();
        text-transform: uppercase;
      }
    }
  }
}

.content-w {
  
  .col-3-grid {    
    margin-top: em(32);
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: em(89);
    grid-row-gap: em(96);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  } 

  .heading-section {
    padding-top: em(200);
    display: flex;
    gap: em(90);
    justify-content: space-between;
    color: $primary-white;

    h2 {
      @include h2();
    }

    .heading-section_description-content {
      max-width: em(870);
      margin-bottom: em(95);
      grid-column-start: span 2;
      grid-column-end: span 3;

      p {
        @include description-hide();
      }
    }

    .cards-w {
      display: grid;
      grid-template-columns: em(394) em(394);
      grid-template-rows: auto auto;
      gap: 90px 90px;

      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: $primary-white;

        .card_name {
          @include h3-small();
        }

        .card_description {
          margin-top: em(16);
          @include txt-body()
        }
      }
    }
  }
}

@include mobile {
}
</style>
