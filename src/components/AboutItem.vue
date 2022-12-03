<template>

    <div class="about">
      <div class="about-title">
        <img src="../assets/image/about/4lighting.svg"/>
        <h2>{{title}}</h2>
        <img src="../assets/image/about/4lighting.svg"/>
      </div>
      
      <div class="about-content">
        <div class="about-pic">
          <img :src="img"/>
        </div>
        <p class="content">{{content}}</p>
      </div>
    </div>

</template>

<script>
export default {
    props:{
        img:String,
        title:String,
        content:String,
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

*{
  font-family: "Cube11";
  list-style: none;
}
  .about{
    width: 80%;
    margin: 50px auto;
    border: 1px solid map-get($color, primary);
    background-color: map-get($color, dark_sub );
    color: map-get($color, primary);
    .about-title{
      display: flex;
      border-bottom: 1px solid map-get($color, primary);
      justify-content: center;
      padding: 10px;
      img{
        width: 15%;
      }
    }
    
    
    .about-content{
      display: flex;
      .about-pic{
        width: 40%;
          img{
            width: 100%;
            vertical-align: baseline;
          }
      }
      .content{
        width: 40%;
        margin: 10px;
        font-size: 15px;
        line-height: 1.2;
      }
    }
}
  
@media screen and (max-width:768px) {
}

</style>