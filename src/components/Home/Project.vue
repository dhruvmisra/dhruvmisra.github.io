<template>
  <div class="project-container">
    <div class="project">
      <div
        class="project-image"
        data-aos="fade-up"
        data-aos-duration="500"
        :data-aos-anchor="'#project' + data.id"
        :data-aos-offset="data.id * vw + 300"
        @click="openProject($event)"
      >
        <img :src="getImage(data.mainImage)" alt class="w-100" />
      </div>
      <div class="project-info">
        <Heading
          :data-aos-anchor="'#project' + data.id"
          :data-aos-offset="data.id * vw + 300"
        >{{ data.title }}</Heading>
        <h6
          class="text-danger"
          data-aos="fade-right"
          data-aos-delay="300"
          :data-aos-anchor="'#project' + data.id"
          :data-aos-offset="data.id * vw + 300"
        >{{ data.subtitle }}</h6>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          :data-aos-anchor="'#project' + data.id"
          :data-aos-offset="data.id * vw + 300"
        >{{ data.description }}</p>
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
      image.children[0].style.clipPath =
        "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)";
      setTimeout(() => {
        image.style.zIndex = "10";
        image.style.position = "absolute";
        image.style.transition = "transform 500ms ease";
        image.style.transformOrigin = "top left";
        image.style.transform = `translate(${-image.getBoundingClientRect()
          .left}px, ${-image.getBoundingClientRect().top}px) scale(${scaleBy})`;
      }, 500);
      setTimeout(() => {
        this.$router.push(this.data.link);
      }, 900);
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
  flex-wrap: wrap;
  max-height: 100%;
  justify-content: center;
  align-items: flex-start;
}
.project-image {
  position: relative;
  width: 60%;
  cursor: pointer;
  background-size: cover;
  filter: drop-shadow(0 5px 25px rgb(50, 50, 50));
  transition: all 500ms ease;
}
.project-image img {
  clip-path: polygon(0% 15%, 85% 0%, 100% 15%, 100% 85%, 15% 100%, 0% 85%);
  transition: all 500ms ease-out;
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
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
  box-shadow: -40px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5em;
  // border: solid 1px red;
  height: fit-content;
  width: 30%;
  padding: 1em;
  margin-left: -4em;
  margin-top: -5em;
  z-index: 2;
  transition: all 300ms ease-out;
}
.title {
  font-size: 7vw;
  text-shadow: 0 0 5px rgb(168, 168, 168);
  transition: text-shadow 0.5s ease;
  cursor: pointer;
  // font-weight: bold;
}
.title:hover {
  text-shadow: 0 0 20px rgb(168, 168, 168);
}

@media only screen and (max-width: 992px) {
  .project {
    padding: 2em;
  }
  .project-image {
    width: 100%;
  }
  .project-info {
    width: 100%;
    margin: 0;
  }
}
</style>