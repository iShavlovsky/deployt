<template>
  <section class="section">
    <div class="header-animation-w">
      <img src="../assets/img/main.png"
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
                 v-if="error">
              <p>{{ error }}</p>
            </div>
            <div v-else
                 class="cards-w">
              <article v-for="feature in apiUrls[0].content"
                       :key="feature.id"
                       class="card">
                <h3 class="card_name">{{ feature.attributes.heading }}</h3>
                <p class="card_description">{{ feature.attributes.description }}</p>
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
            <div class="error"
                 v-if="error">
              <p>{{ error }}</p>
            </div>
            <div v-else>
              <u-i-accordion v-for="(dd, index) in apiUrls[1].content"
                             :key="dd.id"
                             :heading="dd.attributes.heading"
                             :description="dd.attributes.description"
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
      </div>
    </div>
  </section>
</template>

<script>
import {ref, onMounted} from "vue";
import ky from "ky-universal";
import UIAccordion from "@/components/GlobalLibrary/UIAccordion.vue";
import { useStores } from "@/store/index.js";

export default {
    components: {UIAccordion},
    inject: [ '$stores' ],
    setup() {
      let [ content ] = useStores('content');
      content.load().then( r => console.log(r))
        const getFieldContent =
            '?fields[0]=heading' +
            '&fields[1]=description'
        const getFieldImg =
            '?populate[img][fields][0]=name' +
            '&populate[img][fields][1]=alternativeText' +
            '&populate[img][fields][1]=url'
        let apiUrls = ref([
            {url: `what-we-dos${getFieldContent}`, content: []},
            {url: `tech-stacks${getFieldContent}`, content: []},
            {url: `accomplished-projects${getFieldImg}`, content: []}
        ])
        let error = ref(null)
        const api = ky.create({
            prefixUrl: 'http://localhost:1337/api/'
        });


        onMounted(async () => {


            // let results;
            // // let counter = 0
            // for (const i of apiUrls.value) {
            //     // counter++
            //     try {
            //         results = await api
            //             .get(i.url)
            //             .json();
            //         // i.content.id = results.data[counter].id
            //         // i.content = results.data[counter].attributes
            //         i.content = results.data
            //         // console.log(results.data[counter].id);
            //
            //     } catch (err) {
            //         error.value = err;
            //         console.log(err.message);
            //     }
            // }

        })
        return {
            apiUrls,
            error
        }
    }
}
</script>
<style lang="scss">
.header-animation-w {
  position: absolute;
  max-height: 70vh;
  overflow: hidden;
  z-index: -1;
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

  .heading-section {
    padding-top: em(200);
    display: flex;
    gap: em(90);
    justify-content: space-between;
    color: $primary-white;

    h2 {
      @include h2();
      white-space: nowrap;
    }

    .heading-section_description-content {
      max-width: em(870);
      margin-bottom: em(95);

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
