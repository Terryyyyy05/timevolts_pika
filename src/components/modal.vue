<template>
  <div class="modal-container" v-show="modalStatus">
    <div class="close-mark">
      <font-awesome-icon
        class="xmark"
        icon="fa-solid fa-xmark"
        @click="closeModal"
      />
    </div>
  </div>
</template>

<script>
// import { cardContext } from "@/components/product/js/data";
// import { computed } from "vue";

export default {
  name: "modal",
  props: {
    modalStatus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["modalToggle"],
  setup(props, { emit }) {
    // computed

    // methods
    const closeModal = () => {
      emit("modalToggle");
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

.mid {
  margin: 0 auto;
  display: block;
  width: fit-content;
}

.modal-container {
  aspect-ratio: 3/4;
  width: 25%;
  background-color: map-get($color, dark_sub);
  border: 10px solid map-get($color, primary_sub);
  padding: 10px;

  position: fixed;
  z-index: 103;
  right: 140px;
  top: 90px;
}

.cart-content::-webkit-scrollbar {
  width: 0px;
}

@include m() {
  .cart {
    aspect-ratio: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    right: 0px;
    top: 0px;
  }
}
</style>
