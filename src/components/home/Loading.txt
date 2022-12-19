<template>
  <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
    <!-- your form inputs goes here-->
    <!-- <div class="img">
      <img
        id="loadingSvg"
        src="@/assets/image/home/loading.svg"
        alt="時光穿梭"
      />
    </div> -->
    <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button type="submit">Login</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      fullPage: false,
    };
  },
  methods: {
    submit() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

html {
  overflow: hidden;
}
.img {
  z-index: auto;
}

#loadingSvg {
  width: 100vw;
  height: 100vh;
  z-index: 500;
  object-fit: cover;
  position: fixed;
  z-index: 200;
}
</style>
