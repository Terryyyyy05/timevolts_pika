<template>
   <ul class="p_lg">
      <li
         v-for="(system, index) in systems"
         :key="system.id"
         @click="$emit('clickTab', index)"
      >
         {{ system.name }}
      </li>
   </ul>
</template>

<script>
export default {
   emits: ["clickTab"],
   inject: ["systems"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

ul {
   display: flex;
   flex-direction: column;
   color: #fff;
   gap: 24px;
   position: fixed;
   top: 0;
   left: 0;
   width: 300px;
   height: 100%;
   border: 1px solid #fff;
   justify-content: center;
   li {
      margin-left: 24px;
   }
}

.active {
   color: map-get($color, "primary");
}
</style>
