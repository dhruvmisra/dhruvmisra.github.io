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
    AOS.init({
      easeing: "ease-out-quad"
    });
  },
  components: {
    ParticlesJS
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Cairo:300,400,700,900&display=swap');  
    
  body {
    font-family: 'Cairo' !important;
  }
  #app {
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
    background: linear-gradient( 181deg,  rgb(0, 0, 14) 15%, rgb(2, 8, 15) 158.5% );
    color: white;
    animation: bg 1s ease-out forwards;
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
