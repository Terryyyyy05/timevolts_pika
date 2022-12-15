<template>
  <div class="modal-container" v-show="modalStatus">
    <div class="close-mark" @click="closeModal">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalStatus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    // computed

    // methods
    const closeModal = () => {
      emit("closeModal");
    };

    return {
      // methods
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

* {
  box-sizing: border-box;
}

.close-mark {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;

  font-size: 28px;
  cursor: pointer;
  color: map-get($color, primary_sub);
}

.modal-container {
  background-color: map-get($color, dark_sub);
  border: 10px solid map-get($color, primary_sub);
  padding: 10px;
}
</style>
