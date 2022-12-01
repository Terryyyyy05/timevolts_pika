<template>
   <h1>{{ heading }}</h1>
   <h3>{{ subheading }}</h3>
</template>

<script>
export default {
   props: ["heading", "subheading"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

h1,
h3 {
   color: map-get($color, "primary");
}

h3 {
   margin: 10px;
}
</style>
