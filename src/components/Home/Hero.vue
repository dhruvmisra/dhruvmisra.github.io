<template>
  <div class="hero">
    <SlidingText :condition="text == 0">Hi</SlidingText>

    <section class="d-block">
      <div class="image" key="2" v-if="text == 2" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
        <img src="@/assets/photo.jpg" alt="Photo" class="w-100">
      </div>
      <SlidingText :condition="text == 1 || text == 2">I'm <b>Dhruv Misra</b></SlidingText>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 0,
      totalText: 3
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.text++;
    //   this.text %= this.totalText;
    // }, 2000);
  }
}
</script>

<style scoped>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: transparent;
    scroll-snap-align: start;
  }
  .image {
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 5px 5px 20px rgba(44, 44, 44, 0.20);
    margin: 20px auto;
  }
  .inner-move {
    transition: transform 500ms;
  }
</style>