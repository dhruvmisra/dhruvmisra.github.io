<template>
  <div class="home">
    <Hero />
    <ProjectsRow />
    <Contact />
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero';
import ProjectsRow from '@/components/Home/ProjectsRow';
import Contact from '@/components/Home/Contact';

export default {
  name: 'home',
  components: {
    Hero,
    ProjectsRow,
    Contact
  }
}
</script>