<template>
    <div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/app.scss";

div {
    display: flex;
    flex-direction: row;
    width: 23%;
    min-width: 100px;
    height: 300px;
    box-sizing: border-box;
    margin: 10px;
    padding: 1%;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}

@include m() {
    div {
        width: 100%;
    }
}
</style>
