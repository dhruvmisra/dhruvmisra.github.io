<template>
  <div class="project-container">
    <div class="project">
      <div class="project-image" @click="openProject($event)">
        <img :src="getImage(data.mainImage)" alt="Grynow" class="w-100">
      </div>
      <div class="project-info">
        <h1 class="font-weight-bold">{{ data.title }}</h1>
        <h6 class="text-danger">{{ data.subtitle }}</h6>
        <p>{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    getImage(image) {
      return require("@/assets" + image);
    },
    openProject(event) {
      let image = event.currentTarget;
      let container = document.getElementById('container');
      console.log(image.getBoundingClientRect().top, image.getBoundingClientRect().left);
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      let scaleBy = vw/image.offsetWidth;
      console.log(image.offsetWidth, vw, scaleBy);
      image.style.zIndex = '10';
      image.style.position = 'absolute';
      image.style.transformOrigin = 'top left';
      image.style.transition = "transform 500ms ease";
      image.style.transform = `translate(-${image.getBoundingClientRect().left}px, -${image.getBoundingClientRect().top}px) scale(${scaleBy})`;
      this.$router.push(this.data.link);
    }
  }
}
</script>

<style scoped>
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
  transition: all 300ms ease-out;
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
  background: #fff;
  /* background: linear-gradient(270deg, white 50%, transparent 100%); */
  /* box-shadow: -105px 8px 80px rgba(255, 255, 255, 1); */
  width: 30%;
  padding: 1em;
  /* padding-left: 22vw; */
  /* margin-left: -20vw; */
  cursor: pointer;
  z-index: 2;
  transition: all 300ms ease-out;
}

</style>