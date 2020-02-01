<template>
  <div id="container">
    <h1 class="text-white display-4">Projects</h1>
    <div id="sidescroll">
      <div class="project"></div>
      <div class="project"></div>
      <div class="project"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let doc = document.getElementById('sidescroll');
    let container = document.getElementById('container');
    container.style.height = doc.clientWidth + 'px';
    window.addEventListener("scroll", () => {
      let top = container.getBoundingClientRect().top || 0;
      if(top <= 0) {
        doc.style.position = 'fixed';
        doc.style.left = top + 'px';
      } else {
        doc.style.position = 'absolute';
        doc.style.left = 0;
        doc.style.top = 0;
      }
    });
  }
}
</script>

<style scoped>
  #container {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
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
  .project {
    height: 80%;
    width: 100vw;
    background: rgba(255, 255, 255, 0.308);
    border: solid 1px red;
    /* margin: 20px; */
  }
</style>