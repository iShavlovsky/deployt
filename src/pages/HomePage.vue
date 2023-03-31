<template>
  <section>
    <div class="container">
      <div class="card-w">
        <article v-for="feature in features.data"
                 :key="feature.id"
                 class="card-specialty">
          <h2 class="card-specialty_name">{{ feature.attributes.Name }}</h2>
          <p class="card-specialty_description">{{ feature.attributes.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import ky from "ky-universal";

export default {
  name: 'HomePage',
  data() {
    return {
      features: []
    };
  },
  async mounted() {
    const api = ky.create({
      prefixUrl: 'http://localhost:1337/api/'
    });
    try {
      this.features = await api
          .get('specialties')
          .json();
      console.log(this.features.data);
    } catch (err) {
      console.log(err.message);
    }
  }
};
</script>
<style lang="scss">
.card-w {
  max-width: em(300);
  background-color: $accent-blue;
}
@include mobile {
  .card-w {
    max-width: px(150);
    background-color: $accent-yellow-green;
  }
}
</style>
