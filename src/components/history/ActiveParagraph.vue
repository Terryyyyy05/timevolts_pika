<template>
   <div>
      <h4>{{ heading }}</h4>
      <p class="p_md">{{ text }}</p>
   </div>
</template>

<script>
export default {
   props: ["text", "heading"],
};
</script>

<style lang="scss" scoped>
div {
   display: flex;
   flex-direction: column;
   gap: 48px;
   h4 {
      margin: auto;
   }
}
</style>
