<template>
  <nav class="navbar navbar-dark justify-content-start">
    <SidebarToggle @toggle="show = !show" />
    <div class="sidenav-container">
      <div v-show="show" class="close-cross">
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div
        v-if="show"
        class="sidenav-backdrop"
        data-aos="fade"
        @click="show = false"
      ></div>
      <transition name="slide-side">
        <div v-if="show" class="sidenav row m-0">
          <ul class="nav-list" @click="show = false">
            <li
              class="nav-item"
              v-for="(item, i) in items"
              :key="item.name"
              data-aos="sidenav-link"
              :data-aos-duration="400"
              :data-aos-delay="50 * i"
              data-aos-easing="ease-out"
              data-aos-anchor=".nav-list"
            >
              <router-link :to="item.link" v-if="item.link.startsWith('/')" class="nav-link">
                {{ item.name }}
              </router-link>
              <div class="nav-link" v-else @click="navTo(item.link)">
                {{ item.name }}
              </div>
              <!--
              <a href="./" 
                  v-else
                  v-scroll-to="{
                    el: item.link,
                    offset: item.link == 'hero' ? 0 : 900
                  }" 
                  @click="scrollMeTo(item.link)" class="nav-link">
                {{item.name}}
              </a> -->
            </li>
          </ul>
          <!-- <div class="infoxpressions w-50">
            <span class="info" data-aos="fade-down" :data-aos-delay="500" :data-aos-duration="600">INFO</span>
            <span class="xpresisons" data-aos="fade-up" :data-aos-delay="500" :data-aos-duration="600">XPRESSIONS</span>
          </div> -->
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import SidebarToggle from "./SidebarToggle";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import gsap from 'gsap';

export default {
  name: "Navbar",
  components: {
    SidebarToggle
  },
  data() {
    return {
      show: false,
      items: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Projects",
          link: "#projects"
        },
        // {
        //   name: "About Us",
        //   link: "#about"
        // },
        {
          name: "Schedule",
          link: "/schedule"
        },
        {
          name: "Sponsors",
          link: "#sponsors"
        },
        {
          name: "Our Team",
          link: "/ourTeam"
        },
        // {
        //   name: "Glimpses",
        //   link: "#glimpses"
        // },
        // {
        //   name: "Contact Us",
        //   link: "#contact"
        // }
      ]
    };
  },
  watch: {
    show: function(oldVal, newVal) {
      let nav = document.getElementsByClassName('navbar')[0];
      if(newVal == false) {
        disableBodyScroll(nav);
      } else {
        enableBodyScroll(nav);
      }
    }
  },
  methods: {
    navTo(link) {
      if (link.startsWith("/")) {
        if(this.$route.path != link) {
          this.$router.push(link);
        }
      } else {
        if(this.$route.path != "/") {
          this.$router.push("/");
        }
        console.log("link : " + link);
        gsap.to(window, {duration: 0.5, scrollTo: link});
        // setTimeout(()=>{
        // },50);
      }
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  position: relative;
  z-index: 10;
}
nav * {
  z-index: 10;
}
.close-cross {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 35px;
  margin: 10px 5px;
  cursor: pointer;
  .bar {
    width: 90%;
    height: 2px;
    background-color: white;
    margin: 3px 0;
  }
}

.navbar {
  background: transparent;
  width: fit-content;
  /* height: 100vh; */
  position: fixed;
  top: 0;
  left: 0;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
  padding: 0 3px;
  text-align: left;
}
.nav-list {
  width: 70%;
  text-decoration: none;
  list-style-type: none;
}
.nav-item {
  position: relative;
  padding: 0;
}
.nav-link {
  font-size: 6.5vw;
  font-weight: 700;
  // text-shadow: -2px -2px 5px rgb(49, 49, 49);
  -webkit-text-stroke: 1px grey;
  color: transparent;
  cursor: pointer;
  transition: transform 200ms ease-out, color 200ms ease-out;
}
.nav-link:hover {
  // color: white;
  color: rgb(145, 145, 145);
  transform: scale(1.02);
}
// .nav-link:hover::before {
//   background: linear-gradient(90deg, rgba(5, 118, 230, 0.50) 0%, rgba(2, 28, 121, 0) 100%);
//   z-index: -1;
//   content: "";
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   filter: drop-shadow(0px 0px 10px rgba(5, 118, 230, 1));
// }
.nav-link.router-link-exact-active {
  color: white;
  transform: scale(1.02);
}
.nav-link.router-link-exact-active::before {
  // background: linear-gradient(90deg, #0575e6 0%, rgba(2, 28, 121, 0) 100%);
  z-index: -1;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  filter: drop-shadow(0px 0px 10px rgba(5, 118, 230, 1));
}
/* .nav-link.router-link-active::before, .nav-link.router-link-active::after {
  content: "";
  position: absolute;
  left: -50px;
  height: 10px;
  width: 50px;
  background-color: white;
} */
/* .nav-link.router-link-active::before {
  top: 40%;
  transform: rotate(45deg);
}
.nav-link.router-link-active::after {
  top: 60%;
  transform: rotate(-45deg);
} */

[data-aos="sidenav-link"] {
  transform: translate(-200px, 0);
  opacity: 0;
  /* transition-property: transform; */
}
[data-aos="sidenav-link"].aos-animate {
  transform: translate(0, 0);
  opacity: 1;
}

.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}
.sidenav {
  height: 100%;
  width: 100%;
  padding-top: 30px;
  background: linear-gradient(90deg, black 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
}
.sidenav::-webkit-scrollbar {
  width: 0 !important;
}
.sidenav {
  overflow: -moz-scrollbars-none;
}
.sidenav {
  -ms-overflow-style: none;
}

.infoxpressions {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: inherit;
}
.infoxpressions span {
  font-size: 5em;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .nav-link {
    font-size: 12vw;
  }
}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {
//   .nav-link {
//     font-size: 3em;
//   }
// }

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {
//   .nav-link {
//     font-size: 4em;
//   }
// }

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {
//   .nav-link {
//     font-size: 6em;
//   }
// }

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {
// }
</style>