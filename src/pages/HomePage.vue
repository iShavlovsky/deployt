<template>
  <section class="section">
    <div class="header-animation-w">
      <img src="@/assets/img/main.webp"
           alt="decorative">
    </div>
    <div class="container">
      <header class="main-header">
        <h1 class="text-heading-up4">
          We are <span>software engineers</span>
        </h1>
        <div class="head-subtitle-and-btn-w">
          <div></div>
          <div class="main-header_description-w">
            <p class="text-base-down1">Transform your ideas into digital realities with our skilled team, delivering
              cutting-edge solutions with precision and passion.
            </p>
            <UIButton :btnDestination="3"
                      :btnType="'stroke-button'"
                      :title="'ААААА'"/>
            <UIButton :btnDestination="3"
                      :btnType="'stroke-button'"
                      :title="'ААААА'"/>
            <a href="#"
               class="main-header_btn-link-w">
              <span>Let's make some wild stuff</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div class="heading-section_grid">
            <h2 class="text-heading-up2">What we do</h2>
            <div class="heading-section_description-content">
              <p class="text-base-up2">Custom digital solutions for web and mobile. From no-code to custom code, we've
                got you
                covered.</p>
            </div>
          </div>
        </div>
        <div class="heading-section">
          <div class="heading-section_grid">
            <div></div>
            <div class="cards-w">
              <article v-for="feature in whatWeDos"
                       :key="feature.id"
                       class="card">
                <div class="what-we-do-card-info-w">
                  <h3 class="text-base-up1">{{ feature.heading }}</h3>
                  <p class="text-base">{{ feature.description }}</p>
                </div>
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
          <h2 class="text-heading-up2">Tech stack</h2>
          <div>
            <div class="heading-section_description-content">
              <p class="text-base-up2">Bring your ideas to life with our expert development team. We craft modern
                websites and
                apps using the latest frameworks and tools, so your business can thrive in the digital
                domain.</p>
            </div>
            <div>
              <UIAccordion v-for="(dd, index) in techStacks"
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
          <div class="heading-section_grid">
            <h2 class="text-heading-up2">Our work</h2>
            <div class="heading-section_description-content">
              <p class="text-base-up2">That selection of works showcases some of the latest projects we've we've been up
                to.</p>
            </div>
          </div>
        </div>
        <div>
          <UIOurWorkCard v-for="projects in accomplishedProjects"
                         :key="projects.id"
                         :link="projects.link"
                         :imgUrl="projects.imgUrl"
                         :imgAlt="projects.imgAlt"
                         :heading="projects.heading"
                         :description="projects.description"/>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content-w">
        <div class="heading-section">
          <div class="heading-section_grid">
            <h2 class="text-heading-up2">Different things to read</h2>
            <div class="heading-section_description-content">
              <p class="text-base-up1">We write articles based on our own experience and the experience of leading IT
                industry experts. Sometimes articles are written by an artificial
                intelligence, but the articles are still edited by us.</p>
            </div>
          </div>
        </div>
        <div>
          <UIArticleCard v-for="articles in articlesToRead"
                         :key="articles.id"
                         :slug="articles.link"
                         :imgUrl="articles.imgUrl"
                         :imgAlt="articles.imgAlt"
                         :heading="articles.heading"
                         :description="articles.description"
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import {computed, inject} from 'vue';
import UIAccordion from '@/components/GlobalLibrary/UIAccordion.vue';
import UIOurWorkCard from '@/components/GlobalLibrary/UIOurWorkCard.vue';
import UIArticleCard from '@/components/GlobalLibrary/UIArticleCard.vue';
import UIButton from '@/components/GlobalLibrary/UIButton.vue';

const stores = inject('$stores');
const content = ['heading', 'description', 'slug', 'link'];
const image = {fields: ['name', 'alternativeText', 'url', "formats"]};


const requests = {
  'what-we-dos': {
    sort: 'createdAt:desc',
    fields: content
  },
  'tech-stacks': {
    sort: 'createdAt:desc',
    fields: content
  },
  'accomplished-projects': {
    sort: 'createdAt:desc',
    fields: content,
    populate: {
      img: image
    }
  },
  'articles-to-reads': {
    sort: 'createdAt:desc',
    pagination: {
      limit: 3
    },
    fields: content,
    populate: {
      thumbnail: image
    }
  }
};

await stores.content.load(requests);

const contentStore = computed(() => stores.content);
const seoStore = computed(() => stores.seo);

const whatWeDos = computed(() => contentStore.value.item('what-we-dos'));
const techStacks = computed(() => contentStore.value.item('tech-stacks'));
const accomplishedProjects = computed(() => contentStore.value.item('accomplished-projects'));
const articlesToRead = computed(() => contentStore.value.item('articles-to-reads'));

seoStore.value.setPage('We are software engineers',
    'Transform your ideas into digital realities with our skilled team, delivering\n' +
    'cutting-edge solutions with precision and passion.', 200);
</script>


<style lang="scss">

.what-we-do-card-info-w {
  @include m-col-1-grid()
}

.header-animation-w {
  width: 100vw;
  height: 100%;
  margin-left: em(-40);
  margin-top: em(-96);
  max-height: 70vh;
  overflow: hidden;
  z-index: -1;
  //background-image: url('@/assets/img/main.webp');
  background-position: 50% 50%;
  background-size: cover;
}

.section.cta {
  display: flex;
  height: 100vh;
  min-height: em(700);
  align-items: center;
  background-image: url("@/assets/img/cta_image.jpg");
  background-position: 50% 50%;
  background-size: cover;
}

.main-header {
  position: relative;
  margin-top: em(-94);
  color: $c-primary-white;

  .head-subtitle-and-btn-w {
    @include m-col-3-grid(em(24))
  }

  .text-heading-up4 {
    color: $c-primary-black;
    @include m-main-h1();

    span {
      color: $c-primary-white;
      white-space: nowrap;
    }
  }

  .main-header_description-w {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: em(89) em(89);
    grid-column-start: span 2;
    grid-column-end: span 3;


    .main-header_btn-link-w {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: em(16) em(32) em(16) em(32);
      @include m-border-white();
      color: $c-primary-white;

      span {
        @include m-txt-button();
        text-transform: uppercase;
      }
    }
  }
}


.content-w {

  .heading-section {
    display: flex;
    gap: em(90);
    justify-content: space-between;


    .heading-section_grid {
      @include m-col-3-grid()
    }

    .heading-section_description-content {
      max-width: em(870);
      margin-bottom: em(95);
      grid-column-start: span 2;
      grid-column-end: span 3;
    }

    .cards-w {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: em(89) em(89);
      grid-column-start: span 2;
      grid-column-end: span 3;

      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: $c-primary-white;
      }
    }
  }
}

@include mobile {

}
</style>
