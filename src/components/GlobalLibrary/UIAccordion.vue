<template>
  <div class="dd-w">
    <article class="dd"
             :class="{ 'active': active }">
      <div @click="openAccordion($event)"
           class="dd_head">
        <h3 class="dd_name">{{ heading }}</h3>
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
      const elBody = this.$refs.dd_body
      if (this.active === false) {

        gsap.to(elBody, {
          duration: 0.2,
          height: elBody.scrollHeight,
          opacity: 1,
          ease: Power0.easeIn
        });

        this.active = true

      } else {
        gsap.to(elBody, {
          duration: 0.2,
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
    background-color: $primary-white;
    padding: em(0) em(32) em(0) em(32);
    margin-bottom: em(2);
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

      .dd_name{
        @include h3-small($color:$primary-black);
      }
    }

    .dd_body{
      height: 0;
      overflow: hidden;

      .dd_description{
        padding: em(24) em(0) em(56) em(0);
        white-space: break-spaces;
        overflow-wrap: break-word;
        @include txt-body($color:$primary-black)
      }
    }
  }
}
</style>
