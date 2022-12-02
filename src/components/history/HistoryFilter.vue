<template>
   <div class="wrapper">
      <form>
         <input class="bg_dark_sub" type="text" />
         <button type="submit">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
         </button>
      </form>
      <div @click="toggleFilterExtension">
         <div v-for="selecter in selecters" :key="selecter">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
            <p>{{ selecter }}</p>
         </div>
      </div>
      <div>
         <history-filter-extension
            v-if="this.filterExtension === true"
         ></history-filter-extension>
      </div>
   </div>
</template>

<script>
import HistoryFilterExtension from "./HistoryFilterExtension.vue";
export default {
   components: {
      HistoryFilterExtension,
   },
   data() {
      return {
         selecters: ["依危險度區分", "依特色區分", "依地點區分"],
         filterExtension: false,
      };
   },
   methods: {
      toggleFilterExtension() {
         if (this.filterExtension === false) {
            this.filterExtension = true;
         } else {
            this.filterExtension = false;
         }
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrapper {
   form {
      display: flex;
      align-items: center;
      padding: 0 50px;
      input {
         outline: none;
         border: 0;
         flex-grow: 1;
         padding: 5px 0;
      }
      button {
         border: none;
         cursor: pointer;
         background-color: transparent;
         color: map-get($color, "accent");
      }
   }
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 10px;
   padding: 10px 20px;
   border: 1px solid map-get($color, "accent");
   width: fit-content;
   margin: 0 auto;
   div {
      display: flex;
      margin: 10px 10px 0;
      color: map-get($color, "accent");
      cursor: pointer;
   }
}
</style>
