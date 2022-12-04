<template>
   <base-card class="base-card">
      <h3>訂購人資訊</h3>
      <div class="buyer-info">
         <div>
            <label class="p_lg">姓名</label>
            <input class="p_lg" type="text" />
         </div>
         <div>
            <label class="p_lg">生日</label>
            <input class="p_lg" type="text" />
         </div>
         <div>
            <label class="p_lg">電話</label>
            <input class="p_lg" type="text" />
         </div>
         <div>
            <label class="p_lg">信箱</label>
            <input class="p_lg" type="text" />
         </div>
         <div>
            <label class="p_lg">地址</label>
            <input class="p_lg" type="text" />
         </div>
      </div>
   </base-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.base-card {
   background-color: transparent;
   position: relative;
   padding-top: 96px;
   h3 {
      border: 1px solid map-get($color, "accent");
      color: map-get($color, "primary");
      padding: 12px 24px;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background-color: map-get($color, "dark_sub");
   }
}

.buyer-info {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 36px;
   label {
      color: map-get($color, "primary");
      margin-right: 24px;
   }
   input {
      width: 800px;
      font-size: 24px;
      outline: none;
      background-color: map-get($color, "dark_sub");
   }
}
</style>
