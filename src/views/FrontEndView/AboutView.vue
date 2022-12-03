<template>
  <div class="container">
    <the-heading heading="關於我們" subheading="About us"></the-heading>
      <div class="about-container">
        <div class="about-intro" v-for="item in aboutData" :key="item.title">
          <AboutItem :title="item.title" :content="item.content" :img="item.img"/>
        </div>
      </div>
  </div>
</template>

<script>
  import AboutItem from '@/components/AboutItem.vue'
  export default {
    name:"AboutView",
    components:{
      AboutItem,
    },
    data(){
      return{
        aboutData:[
          {
            title:'組織介紹',
            content:'人類的歷史分成',
            img: require(`@/assets/image/about/member.jpg`),
          },
          {
            title:'機型介紹',
            content:'埃及進入第一個「金色時代」，或「黃金時代」。在此期間，太陽作為「偉大的雌雄一體」，毫無疑問地被奉',
            img: require(`@/assets/image/about/timemachine.png`),
          },
          {
            title:'會員制度',
          },
          
        ],
      }
    },
  };
</script>

<style scoped lang="scss">
@import '@/assets/css/utils/variables';


</style>
