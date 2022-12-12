<template>
   <div class="wrapper">
      <form>
         <input class="bg_dark_sub" type="text" />
         <button type="button">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
         </button>
      </form>
      <div class="grid">
         <div
            v-for="selecter in selecters"
            :key="selecter"
            class="flex"
            @click="toggleExtensions"
         >
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
            <p>{{ selecter }}</p>
         </div>
      </div>
      <div class="grid" v-if="extensions">
         <div class="flex-column">
            <label class="check-container" for="low"
               >低
               <input type="checkbox" id="low" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="medium"
               >中
               <input type="checkbox" id="medium" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="high"
               >高
               <input type="checkbox" id="high" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
         </div>
         <div class="flex-column">
            <label class="check-container" for="religion"
               >宗教事件
               <input
                  type="checkbox"
                  id="religion"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="history"
               >歷史事件
               <input
                  type="checkbox"
                  id="history"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="anecdote"
               >奇聞軼事
               <input
                  type="checkbox"
                  id="anecdote"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
         </div>
         <div class="flex-column">
            <label class="check-container" for="asia"
               >亞洲
               <input type="checkbox" id="asia" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="europe"
               >歐洲
               <input type="checkbox" id="europe" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="northAmerica"
               >北美洲
               <input
                  type="checkbox"
                  id="northAmerica"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="southAmerica"
               >南美洲
               <input
                  type="checkbox"
                  id="southAmerica"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="africa"
               >非洲
               <input type="checkbox" id="africa" @change="setFilter" checked />
               <span class="checkmark"></span>
            </label>
            <label class="check-container" for="oceania"
               >大洋洲
               <input
                  type="checkbox"
                  id="oceania"
                  @change="setFilter"
                  checked
               />
               <span class="checkmark"></span>
            </label>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         selecters: ["依危險度區分", "依特色區分", "依地點區分"],
         extensions: false,
         filters: {
            low: true,
            medium: true,
            high: true,
            religion: true,
            history: true,
            anecdote: true,
            asia: true,
            europe: true,
            northAmerica: true,
            southAmerica: true,
            africa: true,
            oceania: true,
         },
      };
   },
   methods: {
      toggleExtensions() {
         this.extensions = !this.extensions;
      },
      setFilter(event) {
         const inputId = event.target.id;
         const isActive = event.target.checked;
         const updatedFilters = {
            ...this.filters,
            [inputId]: isActive,
         };
         this.filters = updatedFilters;
         this.$emit("change-filter", updatedFilters);
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

@mixin grid($column, $column-gap) {
   display: grid;
   grid-template-columns: $column;
   column-gap: $column-gap;
}

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
      margin: 10px 0;
      color: map-get($color, "accent");
      .flex {
         display: flex;
         cursor: pointer;
      }
   }
}

@include m() {
   .wrapper {
      margin-top: 48px;
   }
}

/* ========== checkbox ========== */

.check-container {
   display: block;
   position: relative;
   padding-left: 35px;
   margin-bottom: 12px;
   cursor: pointer;
   font-size: 16px;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

/* Hide the browser's default checkbox */
.check-container input {
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
}

/* Create a custom checkbox */
.checkmark {
   position: absolute;
   top: 0;
   left: 0;
   height: 15px;
   width: 15px;
   background-color: transparent;
   border: 2px solid map-get($color, "accent");
}

/* When the checkbox is checked, add a blue background */
.check-container input:checked ~ .checkmark {
   background-color: #eee;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
   content: "";
   position: absolute;
   display: none;
}

/* Show the checkmark when checked */
.check-container input:checked ~ .checkmark:after {
   display: block;
}

/* Style the checkmark/indicator */
.check-container .checkmark:after {
   left: 3px;
   top: 1px;
   width: 5px;
   height: 10px;
   border: solid white;
   border-width: 0 3px 3px 0;
   -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   transform: rotate(45deg);
}

.grid {
   @include grid(1fr 1fr 1fr, 30px);
   margin-left: 24px;
}

.flex-column {
   display: flex;
   flex-direction: column;
}
</style>
