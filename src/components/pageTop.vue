<template>
  <font-awesome-icon
    icon="fa-solid fa-angles-up"
    @click="scrollToTop"
    v-show="scrollshow"
  />
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      scrollshow: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scroll(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY < window.innerHeight) {
        this.scrollshow = false;
      } else {
        this.scrollshow = true;
      }
    });
  },
};
</script>
<style scoped lang="scss">
.fa-angles-up {
  position: fixed;
  bottom: 2%;
  left: 2%;
  color: #fab042;
  width: 30px;
  height: 30px;
  animation: move 3s infinite;
  z-index: 10;
}
@keyframes move {
  0% {
    transform: translate(0, 10px);
  }
  50% {
    transform: translate(0, -10px);
  }
  100% {
    transform: translate(0, 10px);
  }
}
@media screen and (min-width: 768px) {
  .fa-angles-up {
    width: 60px;
    height: 60px;
  }
}
</style>
