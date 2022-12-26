<template>
    <div class="modal-container" v-if="modalStatus">
        <div class="close-mark" @click="$emit('closeModal')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "modalLightbox",
    props: {
        modalStatus: {
            type: Boolean,
            default: true,
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
            closeModal: "",
            modalStatus: true,
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
    position: relative;
    background-color: map-get($color, dark_sub);
    // border: 10px solid map-get($color, accent);
    padding: 10px;
}
.fa-xmark {
    font-size: 100px;
    color: red;
}
</style>
