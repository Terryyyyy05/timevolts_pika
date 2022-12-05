<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    components:{
        
    },
    methods:{
        
    }
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
div{
    width: 1000px;
    height: 100px;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}

</style>