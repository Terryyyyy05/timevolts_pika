<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";

div {
  width: 100%;
  height: 100px;
  border: 2px solid map-get($color, "primary");
  background-color: map-get($color, "dark_sub");
  margin: 0 auto;
}

@include m() {
  div {
    width: 100%;
    height: 130px;
  }
}
</style>
