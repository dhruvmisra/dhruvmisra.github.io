<template>
  <div class="project-container">
    <div class="project">
      <div class="project-image"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-anchor="'#project' + data.id"
          :data-aos-offset="data.id * vw"
          @click="openProject($event)">
        <img :src="getImage(data.mainImage)" alt="" class="w-100" />
      </div>
      <div class="project-info">
        <h1
          class="title"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="real-slow"
          data-aos-delay="200"
          :data-aos-anchor="'#project' + data.id"
          :data-aos-offset="data.id * vw"
        >{{ data.title }}</h1>
        <h6 class="text-danger">{{ data.subtitle }}</h6>
        <p>{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    vw: Number
  },
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    getImage(image) {
      return require("@/assets" + image);
    },
    openProject(event) {
      let image = event.currentTarget;
      console.log(
        image.getBoundingClientRect().top,
        image.getBoundingClientRect().left
      );
      const vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      let scaleBy = vw / image.offsetWidth;
      console.log(image.offsetWidth, vw, scaleBy);
      image.style.zIndex = "10";
      image.style.position = "absolute";
      image.style.transformOrigin = "top left";
      image.style.transition = "transform 500ms ease";
      image.style.transform = `translate(-${
        image.getBoundingClientRect().left
      }px, -${image.getBoundingClientRect().top}px) scale(${scaleBy})`;
      setTimeout(() => {
        this.$router.push(this.data.link);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.project-container {
  position: relative;
  height: 80%;
  width: 100vw;
  border-right: solid 1px red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}
/* .project-container::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 50%;
  transform: translateX(-100px) rotate(30deg);
  background: #ff304f;
  z-index: -1;
} */
.project {
  display: flex;
  max-height: 100%;
  justify-content: center;
}
.project-image {
  position: relative;
  width: 60%;
  cursor: pointer;
  background-size: cover;
  filter: drop-shadow(0 5px 25px rgb(50, 50, 50));
  transition: all 300ms ease-out;
}
.project-image img {
  clip-path: polygon(0% 0%, 0% 85%, 10% 100%, 100% 100%, 100% 15%, 90% 0%);
}
/* 
.project-image:hover, .project-info:hover + .project-image {
  transform: scale(1.02);
  box-shadow: 5px 8px 15px rgba(100, 100, 100, 0.2);
}
.project-image:hover + .project-info, .project-info:hover {
  transform: scale(1.02);
  padding-left: 23vw;
} */
.project-info {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 50%, transparent 100%);
  box-shadow: -40px 10px 20px rgba(0, 0, 0, 0.1);
  // border: solid 1px red;
  height: fit-content;
  width: 30%;
  padding: 1em;
  margin-left: -6em;
  margin-top: -5em;
  cursor: pointer;
  z-index: 2;
  transition: all 300ms ease-out;
}
.title {
  font-size: 7em;
  text-shadow: 0 0 5px rgb(168, 168, 168);
  transition: text-shadow 0.5s ease;
  /* font-weight: bold; */
}
.title:hover {
  text-shadow: 0 0 20px rgb(168, 168, 168);
}

[data-aos="title"] {
  transform: translateX(-150px);
  opacity: 0;
  // transition-timing-function: cubic-bezier(0.07, 0.38, 0, 0.99) !important;
}
[data-aos="title"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

[data-aos] {
  body[data-aos-easing="real-slow"] &,
  &[data-aos][data-aos-easing="real-slow"] {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
  }
}
</style>