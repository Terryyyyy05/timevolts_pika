<template>
  <div>
    <h2>會員資料</h2>
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped></style>
