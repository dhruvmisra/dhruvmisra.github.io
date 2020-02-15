<template>
  <div class="home">
    <HeroWithProjects />
    <Contact />
  </div>
</template>

<script>
import HeroWithProjects from '@/components/Home/HeroWithProjects';
import Hero from '@/components/Home/Hero';
import ProjectsRow from '@/components/Home/ProjectsRow';
import Contact from '@/components/Home/Contact';

export default {
  name: 'home',
  components: {
    HeroWithProjects,
    Hero,
    ProjectsRow,
    Contact
  }
}
</script>

<style scoped>
.home {
  scroll-snap-type: y mandatory;
}
</style>