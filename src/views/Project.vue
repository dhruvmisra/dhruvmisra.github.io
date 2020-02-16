<template>
<div>
  <div class="project">
    <div class="project-image-container">
      <!-- <img :src="getImage(project.mainImage)" alt="Grynow" class="w-100"> -->
      <div class="project-image" :style="{ backgroundImage: 'url(' + getImage(project.mainImage) + ')'}"></div>
      <div class="overlay"></div>
    </div>
    <div class="title-container">
      <Heading data-aos="fade-up" large>{{ project.title }}</Heading>
    </div>
    <div class="container">
      <div class="card project-info">
        <!-- <h1 class="font-weight-bold">{{ project.title }}</h1> -->
        <h6 class="text-danger">{{ project.subtitle }}</h6>
        <h5 class="text-muted">Description</h5>
        <p>{{ project.description }}</p>
        <h5 class="text-muted">Job title</h5>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <section class="images">
        <img src="@/assets/projects/grynow.jpg" alt="" class="image">
        <img src="@/assets/projects/grynow.jpg" alt="" class="image">
        <img src="@/assets/projects/grynow.jpg" alt="" class="image">
    </section>
  </div>
</div>
</template>

<script>
import { TimelineMax } from "gsap";
import projects from '@/projects';

export default {
  data() {
    return  {
      project: {},
      img: null
    }
  },
  methods: {
    getImage(image) {
      let img = new Image();
      let vm = this;
      img.onload = function() {
        vm.img = img;
        vm.setHeight();
      }
      img.src = require("@/assets" + image);
      return require("@/assets" + image);
    },
    scaleImage(event) {
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      let val = 1 + window.scrollY/(8 * vh);
      // console.log(val);
      let projectImage = document.getElementsByClassName('project-image')[0];
      projectImage.style.transform = `scale(${val})`;
    },
    setHeight() {
      let ratio = window.innerWidth/this.img.width;
      console.log(this.img.width + 'x' + this.img.height, ratio);
      document.getElementsByClassName('project-image')[0].style.height = this.img.height*ratio + 'px';
    }
  },
  created() {
    window.scrollTo(0,0); 
    this.project = projects[this.$route.params.projectKey];
    window.addEventListener("scroll", this.scaleImage);
    window.addEventListener("resize", this.setHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scaleImage);
    window.removeEventListener("resize", this.setHeight);
  }
}
</script>

<style scoped>
.project {
  position: relative;
}
.project-image-container {
  position: relative;
  /* height: 100vh; */
  width: 100vw;
  overflow: hidden;
}
.project-image {
  /* height: 100vh; */
  position: relative;
  width: 100%;
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transform-origin: bottom;
  filter: blur(5px);
}
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0, black 0%, rgba(0, 0, 0, 0.1) 100%);
  animation: overlay 500ms ease forwards;
}
@keyframes overlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.project-info {
  background: linear-gradient(0, transparent 0%, rgb(14, 13, 26) 100%);
  padding: 2em;
  /* margin-top: -8em; */
  border-radius: 1em;
  border: none;
  opacity: 0;
  transition: all 300ms ease-out;
  animation: fade-up 500ms ease 600ms forwards;
}
@keyframes fade-up {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.title-container {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: -20%;
  z-index: 1;
}
.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 4em;
  border:brown 1px solid;
}
.image {
  position: relative;
  width: 50%;
  box-shadow: 0 5px 25px rgb(50, 50, 50, 0.25);
}
.image:nth-child(2) {
  transform: translate(-30%, 60%);
  z-index: 2;
}
.image:nth-child(3) {
  transform: translate(-30%, 30%);
}
</style>