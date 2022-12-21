<template>
    <div class="pagination">
        <button v-for="page in 1" :key="page">{{page}}</button>
      </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';


.pagination{
    // border-top: 2px solid map-get($color, primary);
    text-align: center;
    padding-top: 15px;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    button{
    border: 1px solid map-get($color, accent);
    margin: 0 2px;
    color: map-get($color, accent);
    background-color: transparent;
    padding: 0 10px;
    line-height: 2;
    cursor: pointer;
    &:hover{
      background-color: map-get($color, accent);
      color: #1e1e1e;
    }
    }
  }
 
</style>