<template>
    <div class="page">
        <ul class="pagination" v-for="page in 5" :key="page">
          <li>{{page}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';


.page{
    text-align: center;
    margin: 1% auto;
    .pagination{
    display: inline-block;
    border: 1px solid map-get($color, accent);
    color: map-get($color, accent);
    li {
        padding: 0 10px;
        line-height: 1.5;
    }
    }
  }
 
</style>