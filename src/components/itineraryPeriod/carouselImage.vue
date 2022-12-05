<template>
    <carousel>
        <div v-for="img in 4" key="img.title"></div>
    </carousel>
    
</template>

<script>
import carousel from "@/components/itineraryPeriod/carousel.vue";



export default{
    components:{
        carousel
    },
    data(){
        return{
            information:[

            ]

        };
    },
    computed:{
        
    },
    methods:{
        
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";


</style>
