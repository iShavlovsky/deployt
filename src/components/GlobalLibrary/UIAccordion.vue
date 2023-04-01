<template>
  <div class="dd-w">
    <article class="dd"
             ref="dd"
             :class="{ 'active': active }">
      <div @click="openAccordion($event)"
           class="dd_head"
           ref="dd_head">
        <h3 class="dd_name">{{ heading }}</h3>
        <div class="dd_btn">
          <div class="dd_btn-line"
               ref="dd_btnLine1"></div>
          <div class="dd_btn-line"
               ref="dd_btnLine2"></div>
        </div>
      </div>
      <div class="dd_body"
           ref="dd_body">
        <p class="dd_description">{{ description }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { gsap, Power0 } from 'gsap'
export default {
  name: 'UIAccordion',
  props: {
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {},
  methods: {
    openAccordion(e) {
      e.preventDefault();

      const time = 0.2;
      const white = '#F9FEFF'
      const black = '#131313'

      const el = this.$refs.dd;
      // const elHead = this.$refs.dd_head;
      const elBody = this.$refs.dd_body;
      const line1 = this.$refs.dd_btnLine1;
      const line2 = this.$refs.dd_btnLine2;

      if (this.active === false) {

        gsap.to(el, {
          duration: time,
          backgroundColor: white,
          color: black,
          ease: Power0.easeIn
        });

        gsap.to(line1, {
          duration: time,
          backgroundColor: black,
          rotateZ: 45,
          ease: Power0.easeIn
        });

        gsap.to(line2, {
          duration: time,
          backgroundColor: black,
          rotateZ: -45,
          ease: Power0.easeIn
        });

        gsap.to(elBody, {
          duration: time,
          height: elBody.scrollHeight,
          opacity: 1,
          ease: Power0.easeIn
        });

        this.active = true

      } else {

        gsap.to(el, {
          duration: time,
          backgroundColor: black,
          color: white,
          ease: Power0.easeIn
        });

        gsap.to(line1, {
          duration: time,
          backgroundColor: white,
          rotateZ: 0,
          ease: Power0.easeIn
        });

        gsap.to(line2, {
          duration: time,
          backgroundColor: white,
          rotateZ: 0,
          ease: Power0.easeIn
        });

        gsap.to(elBody, {
          duration: time,
          height: 0,
          opacity: 0,
          ease: Power0.easeIn
        });

        this.active = false
      }
    }
  }
};
</script>

<style scoped lang="scss">
.dd-w{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  .dd{
    transition: height 1s ease;
    max-width: em(870);
    background-color: $primary-black;
    padding: em(0) em(32) em(0) em(32);
    margin-bottom: em(2);
    border: 2px solid $primary-white;
    color: $primary-white;

    &.active {
      .dd_head{
        transition: all .1s;
        border-bottom: 2px solid $primary-black;
      }
    }

    .dd_head{
      padding: em(24) em(0) em(24) em(0);
      border-bottom: none;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: space-between;


      .dd_name{
        @include h3-small();
      }

      .dd_btn{
        width: em(30);
        height: em(30);
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        position: relative;

        .dd_btn-line{
          width: 100%;
          height: em(3);
          position: absolute;
          background-color: $primary-white;
        }
      }
    }

    .dd_body{
      height: 0;
      overflow: hidden;

      .dd_description{
        padding: em(24) em(0) em(56) em(0);
        white-space: break-spaces;
        overflow-wrap: break-word;
        @include txt-body()
      }
    }
  }
}
</style>
