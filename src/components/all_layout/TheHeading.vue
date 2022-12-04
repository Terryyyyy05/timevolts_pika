<template>
   <h1>{{ heading }}</h1>
   <h5>{{ subheading }}</h5>
</template>

<script>
export default {
   props: ["heading", "subheading"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

h1,
h5 {
   color: map-get($color, "primary");
}

h5 {
   margin: 10px 0 0 5px;
}
</style>
