<template>
  <div id="container">
    <h1 class="title display-4">Projects</h1>
    <div id="sidescroll">
      <Project :id="'project' + project.id" v-for="(project, i) in projectsArray" :key="i" :data="project" :vw="vw" />
    </div>
  </div>
</template>

<script>
import Project from './Project.vue';
import projects from '@/projects';
import gsap from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: {},
      vw: 0
    }
  },
  computed: {
    projectsArray() {
      let projectsArray = [], obj = {};
      Object.keys(this.projects).forEach((key, i) => {
        obj = this.projects[key];
        obj.id = i;
        projectsArray.push(obj);
      });
      return projectsArray;
    }
  },
  created() {
    this.projects = projects;
    this.vw = window.innerWidth;
    window.addEventListener("resize", () => {
      this.vw = window.innerWidth;
    });
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin);

    let doc = document.getElementById('sidescroll');
    let container = document.getElementById('container');
    container.style.height = doc.clientWidth + 'px';
    let top;
    let heightFromTop = container.getBoundingClientRect().top+window.scrollY;
    let width = window.innerWidth;
    window.addEventListener("scroll", (event) => {
      top = container.getBoundingClientRect().top || 0;
      if(top <= 0) {
        doc.style.position = 'fixed';
        doc.style.left = top + 'px';
      } else {
        doc.style.position = 'absolute';
        doc.style.left = 0;
        doc.style.top = 0;
      }
    });
    window.addEventListener('wheel', wheelFunction);
    function wheelFunction(e) {
      if(top < 0 && Math.abs(top) < container.getBoundingClientRect().height) {
        if (e.deltaY < 0) {
          console.log("scrolling up");
          // if(Math.abs(top)%(2*width/3) < width/2) {
          //   let multiples = Math.floor(Math.abs(top)/width);
          //   console.log("haha", (multiples)*width );
          //   gsap.to(window, {duration: 0.5, scrollTo: { y: heightFromTop + (multiples)*width }});
          // }
        }
        if (e.deltaY > 0) {
          console.log("scrolling down");
          if(Math.abs(top)%(width/2) > width/3) {
            let multiples = Math.floor(Math.abs(top)/width);
            console.log("haha", (multiples)*width );
            gsap.to(window, {duration: 0.5, scrollTo: { y: heightFromTop + (multiples + 1)*width }});
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  #container {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    scroll-snap-align: start;
  }
  #sidescroll {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: fit-content;
    display: flex;
    align-items: center;
    padding-top: 30px;
  }

</style>