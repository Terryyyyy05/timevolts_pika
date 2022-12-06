<template>
   <button class="btn-primary" @click="$emit('show-more')" v-if="trueOrFalse">
      查看更多
   </button>
</template>

<script>
export default {
   props: ["trueOrFalse"],
   emits: ["show-more"],
};
</script>

<style lang="scss" scoped>
button {
   margin: 20px auto;
}
</style>
