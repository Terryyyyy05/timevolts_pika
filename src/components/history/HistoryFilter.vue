<template>
   <div class="wrapper">
      <div v-for="selecter in selecters" :key="selecter.name">
         <div>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
            <p>{{ selecter.name }}</p>
         </div>
      </div>
      <form>
         <input class="bg_dark_sub" type="text" />
         <button type="submit">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
         </button>
      </form>
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
         selecters: [
            {
               name: "依危險度區分",
               checkboxText: ["低", "中", "高"],
            },
            {
               name: "依特色區分",
               checkboxText: ["歷史事件", "宗教事件", "奇聞軼事"],
            },
            {
               name: "依地點區分",
               checkboxText: [
                  "歐洲",
                  "北美洲",
                  "非洲",
                  "大洋洲",
                  "南美洲",
                  "亞洲",
               ],
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrapper {
   display: flex;
   justify-content: center;
   gap: 10px;
   padding: 10px 20px;
   border: 1px solid map-get($color, "accent");
   width: fit-content;
   margin: 0 auto;
   div {
      div {
         display: flex;
         align-items: center;
         margin: 10px;
         color: map-get($color, "accent");
      }
   }
   form {
      display: flex;
      align-items: center;
      margin: 9px 0 auto;
      input {
         outline: none;
         border: 0;
         flex-grow: 1;
      }
      button {
         border: none;
         cursor: pointer;
         background-color: transparent;
         color: map-get($color, "accent");
      }
   }
}
</style>
