<template>
  <div class="heading">
    <transition name="slide">
      <h1 class="display-4 text-white m-0" v-if="condition">
        <slot></slot>
      </h1>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    condition: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .heading {
    /* border: solid 2px red; */
    overflow-y: hidden;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 300ms;
  }
  .slide-enter, .slide-leave-to{
    transform: translateY(40px);
    opacity: 0;
  }
</style>