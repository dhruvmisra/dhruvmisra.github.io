<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss">
  #app {
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
