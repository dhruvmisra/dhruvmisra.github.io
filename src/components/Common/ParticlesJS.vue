<template>
  <div id='particles-js'></div>
</template>

<script>
import Config from './particlesjs-config.json';
export default {
  name: 'ParticlesJS',
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', Config)
    }
  }

}
</script>

<style scoped>
  #particles-js {
    /* border: solid 3px red; */
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>