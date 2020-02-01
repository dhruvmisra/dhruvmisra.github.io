<template>
  <div id="app">
    <!-- <ParticlesJS /> -->
    <router-view/>
  </div>
</template>

<script>
import ParticlesJS from '@/components/Common/ParticlesJS';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
  components: {
    ParticlesJS
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    background: linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% );
    // animation: bg 1s ease-out forwards;
    @keyframes bg {
      0%, 20% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
