<template>
   <div>
      <div class="flex-column">
         <base-checkbox
            v-for="dangerLevel in dangerLevels"
            :key="dangerLevel"
            :text="dangerLevel"
         ></base-checkbox>
      </div>

      <div class="flex-column">
         <base-checkbox
            v-for="feature in features"
            :key="feature"
            :text="feature"
         ></base-checkbox>
      </div>
      <div class="flex-column">
         <base-checkbox
            v-for="region in regions"
            :key="region"
            :text="region"
         ></base-checkbox>
      </div>
   </div>
</template>

<script>
import BaseCheckbox from "./base/BaseCheckbox.vue";
export default {
   components: {
      BaseCheckbox,
   },
   data() {
      return {
         dangerLevels: ["低", "中", "高"],
         features: ["歷史事件", "宗教事件", "奇聞軼事"],
         regions: ["歐洲", "北美洲", "非洲", "大洋洲", "南美洲", "亞洲"],
      };
   },
};
</script>

<style lang="scss" scoped>
// .flex-column {
//    display: flex;
//    flex-direction: column;
//    justify-content: flex-start;
//    gap: 20px;
// }

.flex-column:nth-of-type(1) {
   margin-left: 35px;
   margin-right: 55px;
}

.flex-column:nth-of-type(2) {
   margin-right: 40px;
}
</style>
