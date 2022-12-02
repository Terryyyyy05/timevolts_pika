<template>
   <div>
      <input type="checkbox" />
      <p>{{ text }}</p>
   </div>
</template>

<script>
export default {
   props: ["text"],
};
</script>

<style lang="scss" scoped>
div {
   display: flex;
   gap: 10px;
}
</style>
