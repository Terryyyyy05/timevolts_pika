<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

div {
  padding: 48px 24px;
  border: 2px solid map-get($color, "accent");
  background-color: map-get($color, "dark_sub");
}
</style>
