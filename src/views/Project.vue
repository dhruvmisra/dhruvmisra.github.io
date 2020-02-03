<template>
<div>
  <div class="project">
    <div class="project-image">
      <img :src="getImage(project.mainImage)" alt="Grynow" class="mainImage">
    </div>
    <div class="project-info">
      <h1 class="font-weight-bold">{{ project.title }}</h1>
      <h6 class="text-danger">{{ project.subtitle }}</h6>
      <p>{{ project.description }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.description }}</p>
    </div>
  </div>
</div>
</template>

<script>
import projects from '@/projects';

export default {
  data() {
    return  {
      project: {}
    }
  },
  methods: {
    getImage(image) {
      return require("@/assets" + image);
    }
  },
  created() {
    window.scrollTo(0,0); 
    this.project = projects[this.$route.params.projectKey];
    window.addEventListener("scroll", (event) => {
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      let val = window.scrollY/(2*vh);
      console.log(val);
      let mainImage = document.getElementsByClassName('mainImage')[0];
      if(val <= 0.38) {
        mainImage.style.position = 'fixed';
        mainImage.style.width = `${100 - val*10}vw`;
      } else {
        mainImage.style.position = 'relative';
        // document.getElementsByClassName('project-image')[0].style.height = 'fit-content';
      }
      
    })
  }
}
</script>

<style scoped>
.project {
  position: relative;
  /* display: flex; */
  justify-content: center;
}
.project-image {
  height: 150vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: all 300ms ease-out;
}
.project-image img {
  position: fixed;
  top: 0;
  display: block;
  margin-left: auto;
  width: 100%;
}
.project-info {
  background: #fff;
  padding: 1em;
  transition: all 300ms ease-out;
}
</style>