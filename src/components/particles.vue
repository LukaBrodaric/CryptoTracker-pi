<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
import "particles.js";
export default {
  name: "particles",
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: "#0099ff",
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.4,
            random: false,
            anim: {
              enable: false,
              speed: 20,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
              nb: 150,
            },
          },
          line_linked: {
            enable: true,
            distance: 50,
            color: "#555",
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style scoped>
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #222;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.body-particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
