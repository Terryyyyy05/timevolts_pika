<template>
  <div class="l-box">
    <button class="close-l-box">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="l-box-img">
      <img src="../assets/image/news/sphinx_optimized.jpg" alt="">
    </div>
    <div class="l-box-content">
      <h2>埃及埃及埃及</h2>
      <p class="date">2022-12-12</p>
      <span class="hashtag">#埃及</span>
      <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione placeat corporis, repellendus blanditiis eum voluptate quaerat fugit et quia ducimus optio unde quae ipsum quibusdam laborum, odio possimus molestias magni?</p>
    </div>
  </div>


</template>

<script>
export default {
  name: "Box",
  data(){
    return{
      
      
    }
  },
  methods: {
    
    // openBox: function () {
    //   let lightBox = document.querySelector('.light-box');
    //   lightBox.classList.add('show-lightbox');
    // },
    
    // closeBox: function(){
    //   let lightBox = document.querySelector('.light-box');
    //   lightBox.classList.remove('show-lightbox');
    // }
    
  }
}

</script>
<style lang="scss" scoped>

@import '@/assets/css/app.scss';

*{
  font-family: "Cube11";
  list-style: none;
  color: map-get($color, accent);
}

.l-box{
  width: 700px;
  border: 1px solid map-get($color, accent);
  margin: auto;
  .close-l-box{
    float: right;
  }
  .l-box-img{
    margin: 20px;
      img{
        width: 100%;
      }
  }
}

h2{
  margin: 5px 10px;
}
.date{
  font-size: 15px;
  text-align: right;
  margin: 10px;
}
.hashtag{
  
  margin: 10px;
}
.content{
  margin: 10px;
  font-size: 15px;
  line-height: 1.2;
}

</style>
