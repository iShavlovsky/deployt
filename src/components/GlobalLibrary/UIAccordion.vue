<template>
  <div class="dd-w">
    <article class="dd"
             ref="el"
             :class="{ 'active': open.active }">
      <div @click="toggleAccordion"
           class="dd_head"
           ref="dd_head">
        <h3 class="text-up1">{{ heading }}</h3>
        <div class="dd_btn">
          <div class="dd_btn-line"
               ref="line1"></div>
          <div class="dd_btn-line"
               ref="line2"></div>
        </div>
      </div>
      <div class="dd_body"
           ref="elBody">
        <div class="dd_description">
          <p class="text-base">{{ description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap, Power0 } from 'gsap'
const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  initialOpenIndex: {
    type: Number,
    default: -1
  }
})

const open = ref({ active: false })
const el = ref(null);
const elBody = ref(null);
const line1 = ref(null);
const line2 = ref(null);

let tl = gsap.timeline()
const time = 0.15;
const white = '#F9FEFF'
const black = '#131313'

const openAccordion = () => {
  if (open.value.active === true) {
    tl.to(el.value, {
      duration: time,
      backgroundColor: white,
      color: black,
      ease: Power0.easeIn
    });

    tl.to(line1.value, {
      duration: time,
      backgroundColor: black,
      rotateZ: 45,
      ease: Power0.easeIn
    }, '<');

    tl.to(line2.value, {
      duration: time,
      backgroundColor: black,
      rotateZ: -45,
      ease: Power0.easeIn
    }, '<');

    tl.to(elBody.value, {
      duration: time,
      height: elBody.value.scrollHeight,
      opacity: 1,
      ease: Power0.easeIn
    }, '<');

    tl.to(line1.value, {
      duration: time,
      backgroundColor: black,
      rotateZ: 0,
      ease: Power0.easeIn
    }, '+=0.1');

    tl.to(line2.value, {
      duration: time,
      backgroundColor: black,
      rotateZ: 0,
      ease: Power0.easeIn
    }, '<');
  } else {
    tl.to(el.value, {
      duration: time,
      backgroundColor: black,
      color: white,
      ease: Power0.easeIn
    });

    tl.to(elBody.value, {
      duration: time,
      height: 0,
      opacity: 0,
      ease: Power0.easeIn
    }, '<');

    tl.to(line1.value, {
      duration: time,
      backgroundColor: white,
      rotateZ: 45,
      ease: Power0.easeIn
    }, '<');

    tl.to(line2.value, {
      duration: time,
      backgroundColor: white,
      rotateZ: -45,
      ease: Power0.easeIn
    }, '<');

    tl.to(line1.value, {
      duration: time,
      backgroundColor: white,
      rotateZ: 90,
      ease: Power0.easeIn
    }, '+=0.1');

    tl.to(line2.value, {
      duration: time,
      backgroundColor: white,
      rotateZ: 0,
      ease: Power0.easeIn
    }, '<');
  }
}

watch(() => open.value.active, () => {
  openAccordion();
})

onMounted(() => {
  if (props.index === props.initialOpenIndex) {
    open.value.active = true;
    openAccordion();
  }
})

const toggleAccordion = () => {
  open.value.active = !open.value.active;
}

</script>

<style scoped lang="scss">
.dd-w {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  .dd {
    transition: height 1s ease;
    max-width: em(870);
    background-color: $primary-black;
    padding: em(0) em(32) em(0) em(32);
    margin-bottom: em(2);
    border: 2px solid $primary-white;
    color: $primary-white;

    &.active {
      .dd_head {
        transition: all 150ms;
        border-bottom: 2px solid $primary-black;
      }
    }

    .dd_head {
      padding: em(24) em(0) em(24) em(0);
      border-bottom: none;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: space-between;


      .dd_btn {
        width: em(30);
        height: em(30);
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        position: relative;

        :first-child {
          transform: rotateZ(90deg);
        }

        .dd_btn-line {
          width: 100%;
          height: em(3);
          position: absolute;
          background-color: $primary-white;

        }
      }
    }

    .dd_body {
      height: 0;
      overflow: hidden;

      .dd_description {
        padding: em(24) em(0) em(56) em(0);
        white-space: break-spaces;
        overflow-wrap: break-word;
      }
    }
  }
}
</style>
