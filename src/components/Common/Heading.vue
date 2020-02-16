<template>
  <h1
    class="title"
    :style="{ fontSize: size, fontWeight: weight }"
    :data-aos="dataAos"
    data-aos-duration="1000"
    data-aos-easing="real-slow"
    data-aos-delay="200"
  >
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    },
    "data-aos": {
      type: String,
      default: "fade-right"
    }
  },
  data() {
    return {
      size: '7vw',
      weight: 400
    }
  },
  mounted() {
    if(this.large) {
      this.size = '10vw';
      this.weight = 700;
    }
  }
}
</script>

<style scoped>
.title {
  /* font-weight: 400; */
  text-shadow: 0 0 5px rgb(168, 168, 168);
}
</style>